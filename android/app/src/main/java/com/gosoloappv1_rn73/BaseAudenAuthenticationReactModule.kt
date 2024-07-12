package com.gosoloappv1_rn73

import androidx.appcompat.app.AppCompatActivity
import com.adyen.authentication.AdyenAuthentication
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

internal abstract class BaseAudenAuthenticationReactModule(
    reactContext: ReactApplicationContext,
) : ReactContextBaseJavaModule(reactContext) {

    protected val appCompatActivity: AppCompatActivity
        get() = reactApplicationContext.currentActivity as? AppCompatActivity
            ?: throw IllegalStateException("Not AppCompat Activity")

    protected val adyenAuthentication: AdyenAuthentication?
        get() = (currentActivity as? AdyenAuthenticationHolder)?.getAdyenAuthentication()
}