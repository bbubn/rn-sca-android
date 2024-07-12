/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
	TouchableOpacity,
	Button,
	NativeModules
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as AdyenAuth from './adyen';
import {
        AdyenAvailabilityResult,
        AvailableResult,
        UnavailableResult,
        AdyenAuthenticationResult,
        ErrorAuthenticationResult,
        SuccessfulRegistrationResult,
        SuccessfulAuthenticationResult,
        CanceledAuthenticationResult,
        UnexpectedErrorAuthenticationResult,
} from './types';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(props): React.JSX.Element {
	const [error, setError] = useState(null);
	const [deviceId, setDeviceId] = useState('');
	const [isRegistred, setIsRegistredDeviceId] = useState(-1);
	const [registrationResult, setRegistrationResult] = useState();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

	const initAuth = async () => {
		console.log('initAuth start', new Date());
		try {
			const result: AdyenAvailabilityResult = await AdyenAuth.checkAvailability();
			switch(result.constructor) {
                case AvailableResult:
                    const deviceId = result.sdkOutput;
                    console.log('deviceId', deviceId);
                    setDeviceId(deviceId);
                    break;
                 case UnavailableResult:
                    console.log('unavailable');
                    break;
                 default:
                    console.log('undefined');
            }
		} catch (e) {
			setError(e);
			console.log(e);
			// console.error('CATCH Error initAuth');
		}
		console.log('initAuth finish', new Date());
	}

	const checkIsRegistred = async () => {
		console.log('checkIsRegistred start', new Date());
		try {
			const result = await AdyenAuth.isDeviceRegistered(deviceId);
			setIsRegistredDeviceId(result ? 1 : 0);
		} catch (e) {
			setError(e);
			console.log(e);
			// console.error('CATCH Error checkIsRegistred');
		}
		console.log('checkIsRegistred finish', new Date());
	}

	const deviceRegistration = async () => {
		console.log('checkIsRegistred start', new Date());
		try {
			const serverResult = await AdyenAuth.registerDeviceRequest(deviceId);
			console.log('serverResult', serverResult);

			if (!serverResult || !serverResult.sdkInput) {
				throw Error(serverResult ? JSON.stringify(serverResult) : 'no_api_response');
				return false;
			}

			const result = await AdyenAuth.register(serverResult.sdkInput);
			console.log('RegistrationResult', result);

			setRegistrationResult(result);
		} catch (e) {
			setError(e);
			console.log(e);
			// console.error('CATCH Error checkIsRegistred');
		}
		console.log('checkIsRegistred finish', new Date());
	}

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="AdyenAuthentication">
						{!deviceId ? (
							<React.Fragment>
							Let's do <Text style={styles.highlight}>checkAvailability</Text> to get <Text style={styles.highlight}>deviceId</Text>
							</React.Fragment>
						) : (
							<React.Fragment>
							<Text style={styles.highlight}>deviceId: </Text> {deviceId}
							</React.Fragment>
						)}
          </Section>
					<View style={styles.sectionContainer}>
						<Button
							title="Check availability"
							onPress={initAuth}
						/>
						<View style={{marginTop: 0}} />
					</View>

					{deviceId ?
						<React.Fragment>
							<Section title="Device registration">
								{isRegistred === -1 ? (
									<React.Fragment>
									Let's do <Text style={styles.highlight}>isDeviceRegistered</Text>
									</React.Fragment>
								) : null}
								{isRegistred === 0 ? (
									<React.Fragment>
									This device is <Text style={styles.highlight}>not registred</Text>
									</React.Fragment>
								) : null}
								{isRegistred === 1 ? (
									<React.Fragment>
									This device already <Text style={styles.highlight}>registred</Text>
									</React.Fragment>
								) : null}
		          </Section>
							<View style={styles.sectionContainer}>
								<Button
									title="Check is device registered"
									onPress={checkIsRegistred}
								/>
								<View style={{marginTop: 10}} />
								{isRegistred === 0 ?
									<Button
									title="Register device"
									onPress={deviceRegistration}
									/>
								: null}
							</View>
						</React.Fragment>
					: null}

					{registrationResult ?
					<Section title="Registration results">
						<Text>{registrationResult.toString()}</Text>
					</Section>
					: null}

					{error ?
					<Section title="Error">
						<Text>{error.toString()}</Text>
					</Section>
					: null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
	btn: {
		display: 'flex',
		flex: 1,
		borderWidth: 1,
		borderColor: 'grey',
		padding: 10,
		textAlign: 'center',
		justifyConten: 'center'
	}
});

export default App;
