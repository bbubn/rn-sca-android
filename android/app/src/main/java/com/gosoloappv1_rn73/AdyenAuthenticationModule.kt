package com.gosoloappv1_rn73

import android.util.Log
import androidx.lifecycle.lifecycleScope
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.gosoloappv1_rn73.utils.toNativeMap
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

internal class AdyenAuthenticationModule(
    reactContext: ReactApplicationContext,
) : BaseAudenAuthenticationReactModule(reactContext) {

    override fun getName() = "AdyenAuthentication"

    @ReactMethod
    fun checkAvailability(promise: Promise) {
        appCompatActivity.lifecycleScope.launch(Dispatchers.IO) {
            val result = adyenAuthentication?.checkAvailability()
            Log.d(name, "checkAvailability result: $result")
            promise.resolve(result?.toNativeMap())
        }
    }

    @ReactMethod
    fun isDeviceRegistered(input: String, promise: Promise) {
        // Looks like this method should be implemented with an api call from the react side
        throw NotImplementedError()
    }

    @ReactMethod
    fun register(input: String, promise: Promise) {
        appCompatActivity.lifecycleScope.launch(Dispatchers.IO) {
            val result = adyenAuthentication?.register(input)
            Log.d(name, "register result: $result")
            promise.resolve(result?.toNativeMap())
        }
    }

    @ReactMethod
    fun authenticate(input: String, promise: Promise) {
        appCompatActivity.lifecycleScope.launch(Dispatchers.IO) {
            val result = adyenAuthentication?.authenticate(input)
            Log.d(name, "authenticate result: $result")
            promise.resolve(result?.toNativeMap())
        }
    }
}