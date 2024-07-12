package com.gosoloappv1_rn73

import com.adyen.authentication.AdyenAuthentication

internal interface AdyenAuthenticationHolder {

    fun getAdyenAuthentication(): AdyenAuthentication?
}