#! /bin/bash

echo 'Building Release APK...........................'
cd android && ./gradlew assembleRelease
echo 'Building Release APK..............COMPLETE... app-release.aab file will be available at android/app/build/outputs/apk/release/' 
