package com.gosoloappv1_rn73

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle
import com.adyen.authentication.AdyenAuthentication

internal class MainActivity : ReactActivity(), AdyenAuthenticationHolder {

  private var adyenAuthentication: AdyenAuthentication? = null

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "GoSoloAppV1_rn73"

  override fun getAdyenAuthentication(): AdyenAuthentication? = adyenAuthentication

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    adyenAuthentication = AdyenAuthentication(this)
  }

  override fun onDestroy() {
    super.onDestroy()
    adyenAuthentication = null
  }
}
