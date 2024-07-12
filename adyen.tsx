import { NativeModules } from 'react-native';
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

interface AdyenAuthentication {
	isDeviceRegistered(input: any): Promise<any>;
	checkAvailability(): Promise<AdyenAvailabilityResult>;
	register(input: any): Promise<AdyenAuthenticationResult>;
	authenticate(input: any): Promise<AdyenAuthenticationResult>;
}

export async function isDeviceRegistered(input: any): Promise<any> {
	try {
		return await NativeModules.AdyenAuthentication.isDeviceRegistered(input);
	} catch (e) {
		console.log('CATCH Error isDeviceRegistered', e);
	}
}

export async function checkAvailability(): Promise<AdyenAvailabilityResult> {
	try {
		const result = await NativeModules.AdyenAuthentication.checkAvailability();
		if (result['type'] === 'Available') {
            return new AvailableResult(result['sdkOutput']);
        } else {
            return new UnavailableResult();
        }
	} catch (e) {
		console.log('CATCH Error checkAvailability', e);
	}
}

export async function register(input: any): Promise<AdyenAuthenticationResult> {
	try {
		const result = await NativeModules.AdyenAuthentication.register(input);
		return mapAuthenticationResult(result);
	} catch (e) {
		console.log('CATCH Error register', e);
	}
}

export async function authenticate(input: any): Promise<AdyenAuthenticationResult> {
	try {
		const result =  await NativeModules.AdyenAuthentication.authenticate(input);
		return mapAuthenticationResult(result);
	} catch (e) {
		console.log('CATCH Error authenticate', e);
	}
}

export function mapAuthenticationResult(input: any): AdyenAuthenticationResult {
    switch(input['type']) {
        case 'AuthenticationError':
            return new ErrorAuthenticationResult(
                    input['errorCode'],
                    input['errorMessage'],
            );
        case 'RegistrationSuccessful':
            return new SuccessfulRegistrationResult(
                    input['rawId'],
                    input['clientData'],
                    input['attestationObject'],
                    input['sdkOutput'],
            );
        case 'AuthenticationSuccessful':
            return new SuccessfulAuthenticationResult(
                    input['credentialId'],
                    input['clientData'],
                    input['authenticatorData'],
                    input['signature'],
                    input['userHandle'],
                    input['sdkOutput'],
            );
        case 'Canceled':
            return new CanceledAuthenticationResult();
        case 'Error':
            return new UnexpectedErrorAuthenticationResult(input['errorMessage']);
    }
}

async function registerDeviceRequest(sdkOutput: string): Promise<any> {
	try {
		console.log('getPaymentSession');

		// the test subject bank account:
		// "bankAccountId": "PI32CNB223227N5KXM4CL4M3H",
		// "providerBalanceAccountId": "BA32CNB223227N5KXM49V4LXG",

		const body = {
			paymentInstrumentId: 'PI32CNB223227N5KXM4CL4M3H',
			strongCustomerAuthentication: {
				sdkOutput: sdkOutput
			}
		}

		const response = await fetch('https://balanceplatform-api-test.adyen.com/bcl/v2/registeredDevices', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-API-key': 'AQEphmfuXduSOksR5lq8k3A+qPaWBqxCPpxGV2YFmh8HYw8Ega58yU4GVyYQwV1bDb7kfNy1WIxIIkxgBw==-Vsscc8hcYdG2lKtJHBi3lsCAzGsFC9LeCOVPTEvyXo8=-kfsT*4^H5TW6=UT%'
			},
			body: JSON.stringify(body),
		});

		const data = await response.json();
		// console.log('data', data);
		return data;

	} catch (e) {
		console.log('CATCH Error registerDeviceRequest', e);
		return false;
	}
}