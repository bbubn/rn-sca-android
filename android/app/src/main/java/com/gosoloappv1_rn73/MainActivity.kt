package com.gosoloappv1_rn73

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle; // add this

import kotlin.properties.Delegates
// import com.adyen.authentication.internal.AdyenAuthenticationImpl
import com.adyen.authentication.AdyenAuthentication

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "GoSoloAppV1_rn73"
  private lateinit var adyenAuthentication: AdyenAuthentication

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

//  override fun createReactActivityDelegate(): ReactActivityDelegate {
//    return object : ReactActivityDelegate(this, mainComponentName) {
//      override fun getLaunchOptions(): Bundle {
//        val imageList = arrayListOf("https://dummyimage.com/600x400/ffffff/000000.png", "https://dummyimage.com/600x400/000000/ffffff.png")
//        val initialProperties = Bundle().apply { putStringArrayList("images", imageList) }
//        return initialProperties
//      }
//    }
//  }

  override fun onCreate(savedInstanceState: Bundle?) {
    adyenAuthentication = AdyenAuthentication(this)
    super.onCreate(savedInstanceState)
  }

  public fun getAdyenAuthentication(): AdyenAuthentication {
    return adyenAuthentication
  }
}
