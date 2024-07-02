/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
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

import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

	const initAuth = async () => {
		try {
			// alert(Object.keys(console));
			// console.log('NativeModules');
			// console.log(Object.keys(NativeModules));
			// console.warn(Object.keys(NativeModules));
			// console.warn(Object.keys(NativeModules));
			// console.trace(Object.keys(NativeModules));
			// console.debug(Object.keys(NativeModules));

			// console.warn(NativeModules.AdyenAuthentication ? 'yes' : 'no');

			// return;
			if (NativeModules.AdyenAuthentication) {
				console.warn(Object.keys(NativeModules.AdyenAuthentication));
				const s = await NativeModules.AdyenAuthentication.checkSupport();
				console.log('result', s);
				alert(s);
			} else {
				console.log('NO NativeModules.AdyenAuth');
			}
			// console.log(NativeModules.AdyenAuth ? 'Y' : 'N');
		} catch (e) {
			alert('CATCH Error initAuth')
			console.log(e);
			console.error('CATCH Error initAuth');
		}
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
          <Section title="Step One">
            Run <Text style={styles.highlight}>initAuth</Text> to init NativeModules.AdyenAuthentication module.
          </Section>

					<View style={styles.sectionContainer}>
						{/*
						<TouchableOpacity
							style={styles.btn}
							onPress={() => {alert('dsfsd')}}
						>
							<Text>Init Auth</Text>
						</TouchableOpacity>
						*/}
						<Button
							title="Auth"
							// onPress={() => {alert('dsfsd')}}
							onPress={initAuth}
						/>
						<View style={{marginTop: 20}} />
						<Button
							title="Test"
							onPress={() => {
								console.log(Object.values(props.images));

							}}
						/>
					</View>
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
