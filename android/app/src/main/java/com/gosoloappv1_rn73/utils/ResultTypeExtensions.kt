package com.gosoloappv1_rn73.utils

import com.adyen.authentication.AuthenticationResult
import com.adyen.authentication.AvailabilityResult
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.NativeMap

private const val RESULT_TYPE_KEY = "type"
private const val SDK_OUTPUT_KEY = "sdkOutput"
private const val ERROR_CODE_KEY = "errorCode"
private const val ERROR_MESSAGE_KEY = "errorMessage"
private const val RAW_ID_KEY = "rawId"
private const val CLIENT_DATA_KEY = "clientData"
private const val ATTESTATION_OBJECT_KEY = "attestationObject"
private const val CREDENTIAL_ID_KEY = "credentialId"
private const val AUTHENTICATOR_DATA_KEY = "authenticatorData"
private const val SIGNATURE_KEY = "signature"
private const val USER_HANDLE_KEY = "userHandle"

private const val AVAILABLE_RESULT_TYPE = "Available"
private const val UNAVAILABLE_RESULT_TYPE = "Unavailable"
private const val AUTHENTICATION_ERROR_RESULT_TYPE = "AuthenticationError"
private const val REGISTRATION_SUCCESSFUL_RESULT_TYPE = "RegistrationSuccessful"
private const val AUTHENTICATION_SUCCESSFUL_RESULT_TYPE = "AuthenticationSuccessful"
private const val CANCELED_RESULT_TYPE = "Canceled"
private const val ERROR_RESULT_TYPE = "Error"

internal fun AvailabilityResult.toNativeMap(): NativeMap = when (this) {
    is AvailabilityResult.Available -> nativeMapOf(
        RESULT_TYPE_KEY to AVAILABLE_RESULT_TYPE,
        SDK_OUTPUT_KEY to sdkOutput
    )
    AvailabilityResult.Unavailable -> nativeMapOf(
        RESULT_TYPE_KEY to UNAVAILABLE_RESULT_TYPE,
    )
}

internal fun AuthenticationResult.toNativeMap(): NativeMap = when (this) {
    is AuthenticationResult.AuthenticationError -> nativeMapOf(
        RESULT_TYPE_KEY to AUTHENTICATION_ERROR_RESULT_TYPE,
        ERROR_CODE_KEY to authenticationError.errorCodeAsInt,
        ERROR_MESSAGE_KEY to authenticationError.errorMessage,
    )
    is AuthenticationResult.RegistrationSuccessful -> nativeMapOf(
        RESULT_TYPE_KEY to REGISTRATION_SUCCESSFUL_RESULT_TYPE,
        RAW_ID_KEY to rawId,
        CLIENT_DATA_KEY to clientData,
        ATTESTATION_OBJECT_KEY to attestationObject,
        SDK_OUTPUT_KEY to sdkOutput,
    )
    is AuthenticationResult.AuthenticationSuccessful -> nativeMapOf(
        RESULT_TYPE_KEY to AUTHENTICATION_SUCCESSFUL_RESULT_TYPE,
        CREDENTIAL_ID_KEY to credentialId,
        CLIENT_DATA_KEY to clientData,
        AUTHENTICATOR_DATA_KEY to authenticatorData,
        SIGNATURE_KEY to signature,
        USER_HANDLE_KEY to userHandle,
        SDK_OUTPUT_KEY to sdkOutput,
    )
    AuthenticationResult.Canceled -> nativeMapOf(
        RESULT_TYPE_KEY to CANCELED_RESULT_TYPE,
    )
    is AuthenticationResult.Error -> nativeMapOf(
        RESULT_TYPE_KEY to ERROR_RESULT_TYPE,
        ERROR_MESSAGE_KEY to errorMessage,
    )
}

private fun nativeMapOf(vararg pairs: Pair<String, Any?>): NativeMap {
    return Arguments.makeNativeMap(mapOf(*pairs))
}