// AvailabilityResult
export interface AdyenAvailabilityResult {}

export class AvailableResult implements AdyenAvailabilityResult {
    constructor(public sdkOutput: string) {}
}

export class UnavailableResult implements AdyenAvailabilityResult {}

// AuthenticationResult
export interface AdyenAuthenticationResult {}

export class ErrorAuthenticationResult implements AdyenAuthenticationResult {
    constructor(
        public errorCodeNumber: number,
        public errorMessage?: string,
    ) {}
}

export class SuccessfulRegistrationResult implements AdyenAuthenticationResult {
    constructor(
        public rawId: string,
        public clientData: string,
        public attestationObject: string,
        public sdkOutput: string,
    )
}

export class SuccessfulAuthenticationResult implements AdyenAuthenticationResult {
    constructor(
        public credentialId: string,
        public clientData: string,
        public authenticatorData: string,
        public signature: string,
        public userHandle?: string,
        public sdkOutput: string,
    )
}

export class CanceledAuthenticationResult implements AdyenAuthenticationResult {}

export class UnexpectedErrorAuthenticationResult implements AdyenAuthenticationResult {
    constructor(public errorMessage: string) {}
}