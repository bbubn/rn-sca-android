package com.gosoloappv1_rn73

import android.app.Activity
import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager


class AdyenAuthenticationPackage: ReactPackage {
//    private var mActivity: Activity? = null
//
//    fun AdyenAuthenticationPackage(activity: Activity?) {
//        mActivity = activity
//    }

    override fun createViewManagers(
            reactContext: ReactApplicationContext
    ): MutableList<ViewManager<View, ReactShadowNode<*>>> = mutableListOf()

    override fun createNativeModules(
            reactContext: ReactApplicationContext
    ): MutableList<NativeModule> = listOf(AdyenAuthenticationModule(reactContext)).toMutableList()
}