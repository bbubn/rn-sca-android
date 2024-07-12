package com.gosoloappv1_rn73

// import com.adyen.authentication.internal.AdyenAuthenticationImpl
//import kotlinx.coroutines.android

import android.app.Activity
import android.view.View
import android.view.Window
import com.adyen.authentication.AvailabilityResult
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import com.gosoloappv1_rn73.MainActivity


class AdyenAuthenticationModule (reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "AdyenAuthentication"

    @ReactMethod
    fun checkAvailability(promise: Promise) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                delay(1000)
                promise.resolve("AdyenAuthintication.checkAvailability.result")
            } catch (e: Exception) {
                promise.reject("Error!", e)
            }
        }
    }
    @ReactMethod
    fun isDeviceRegistered(input: String, promise: Promise) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                delay(1000)
                promise.resolve(false)
            } catch (e: Exception) {
                promise.reject("Error!", e)
            }
        }
    }

    @ReactMethod
    fun register(input: String, promise: Promise) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                delay(1000)
                promise.resolve("+1000")
            } catch (e: Exception) {
                promise.reject("Error!", e)
            }
        }
    }

    @ReactMethod
    fun authenticate(input: String, promise: Promise) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                delay(1000)
                promise.resolve("+1000")
            } catch (e: Exception) {
                promise.reject("Error!", e)
            }
        }
    }


//    @ReactMethod
//    fun doSomethingRequiringWindow() {
//        // get access to current UI thread first
//        reactContext.getCurrentActivity().runOnUiThread(Runnable {
//            val window: Window = reactContext.getCurrentActivity().getWindow()
//            val decorView: View = reactContext.getCurrentActivity().getWindow().getDecorView()
//            // you have access to main ui thread so you can effect
//            // immediate behavior on window and decorView
//        })
//    }

}