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

//    var adyenAuthentication = AdyenAuthentication(reactContext);

    val result = CoroutineScope(SupervisorJob() + Dispatchers.Main.immediate)

//    private lateinit var adyenAuthentication: AdyenAuthentication
//
//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        adyenAuthentication = AdyenAuthentication(this)
//    }

    @ReactMethod
    fun checkSupport(promise: Promise) {
//        var adyenAuthrntication = MainActivity.getAdyenAuthentication()
//            var adyenAuthrntication = getAdyenAuthentication()
//        val activity = reactApplicationContext.currentActivity
//        val activity = reactContext.getCurrentActivity()
//        var activity = getCurrentActivity()
//        var adyenAuthentication = activity.adyenAuthentication.checkAvailability().isAvailable().toString()
//        var adyenAuthentication = MainActivity.getAdyenAuthentication()
//        var adyenAuthentication = MainActivity.adyenAuthentication
//        return await adyenAuthentication.checkSupport();
//        Log.d("AdyenAuthenticationModule", "hohoho checkSupport")
//        println("hohoho log")
//        return "hohoho"
//        lifecycleScope
//        result.launch {
//        viewLifecycleOwner.lifecycleScope.launch {
//        lifecycleScope.launch {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                // Make the sign in happen in a separate thread:
//                val result = MainActivity.adyenAuthentication.checkAvailability().isAvailable().toString()
                // Resolve the promise in the calling thread (The UI thread)
//                val availabilityResult = MainActivity.adyenAuthentication.checkAvailability()
                delay(2000)

//                promise.resolve(MainActivity.adyenAuthentication.checkAvailability().isAvailable())
//                promise.resolve(MainActivity.getAdyenAuthentication().checkAvailability().isAvailable())
//                promise.resolve(adyenAuthentication.checkAvailability.toString())
                promise.resolve("+20000")
//                promise.resolve(activity.toString())
//                val availabilityResult: AvailabilityResult = MainActivity.adyenAuthentication.checkAvailability()

//                val availabilityResult: AvailabilityResult = adyenAuthentication.checkAvailability()
////                promise.resolve(availabilityResult)
//                if (availabilityResult is AvailabilityResult.Available) {
//                    promise.resolve(availabilityResult.sdkOutput)
//                } else {
//                    promise.resolve("not_available")
//                }
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

//    @ReactMethod(isBlockingSynchronousMethod = true)
//    suspend fun checkAvailability(): AvailabilityResult = MainActivity.adyenAuthentication.checkAvailability()
}