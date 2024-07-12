import {
	NativeModules
} from 'react-native';

export async function isDeviceRegistered(input) {
	try {
		return await NativeModules.AdyenAuthentication.isDeviceRegistered(input);
	} catch (e) {
		console.log('CATCH Error isDeviceRegistered', e);
	}
}

export async function checkAvailability() {
	try {
		return await NativeModules.AdyenAuthentication.checkAvailability();
	} catch (e) {
		console.log('CATCH Error checkAvailability', e);
	}
}

export async function register(input) {
	try {
		return await NativeModules.AdyenAuthentication.register(input);
	} catch (e) {
		console.log('CATCH Error register', e);
	}
}

export async function authenticate(input) {
	try {
		return await NativeModules.AdyenAuthentication.authenticate(input);
	} catch (e) {
		console.log('CATCH Error authenticate', e);
	}
}

export async function registerDeviceRequest(sdkOutput) {
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
