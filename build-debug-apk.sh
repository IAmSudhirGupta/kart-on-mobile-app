#! /bin/bash

echo 'Building Debug APK...........................'
cd android && ./gradlew assembleDebug
echo 'Building Release APK..............COMPLETE... app-debug.apk file will be available at android/app/build/outputs/apk/debug/' 
