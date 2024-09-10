import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {app} from '../scripts/firebase.js'

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    app;

  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="movielist" 

        options={{
          presentation: "modal"
        }}/>
      </Stack>
    </ThemeProvider>
  );
}
/*
 LOG  {
  "_redirectEventId": undefined, 
  "apiKey": "AIzaSyCRGwQsNGVYErAtEPif_Nyj0A2CbKDQkSI", "appName": "[DEFAULT]",
   "createdAt": "1725922614680", "displayName": undefined, "email": "nithilb147@gmail.com", "emailVerified": false,
    "isAnonymous": false, "lastLoginAt": "1725922614680", "phoneNumber": undefined, "photoURL": undefined, "providerData": [[Object]],
     "stsTokenManager": 
     {"accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjAyMTAwNzE2ZmRkOTA0ZTViNGQ0OTExNmZmNWRiZGZjOTg5OTk0MDEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodH
     RwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyc3QtYzRiMGEiLCJhdWQiOiJmaXJzdC1jNGIwYSIsImF1dGhfdGltZSI6MTcyNTkyMjYxNCwidXNlcl9pZCI6IjdIMEJDbEdqV3VSYXdU
     cjAyajRxNVJad1hzMjIiLCJzdWIiOiI3SDBCQ2xHald1UmF3VHIwMmo0cTVSWndYczIyIiwiaWF0IjoxNzI1OTIyNjE0LCJleHA
     iOjE3MjU5MjYyMTQsImVtYWlsIjoibml0aGlsYjE0N0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1
     haWwiOlsibml0aGlsYjE0N0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.UtMBV76x81T_b_SzNeDxYPP4L9rMmHh1vcKxXeXn5avsOT4
     l3oOHzgvpwP0mswcH6fuXzQ_uw58awbCUZ-MiyvN0IdKwDjnY_8vh5T-Gk_ASsa5A98uYmtT-rmhHRypWBhLKhw4PC8f59n8Eg30dy6LuSlT4tJRkIgB0JPRU1sS_YZxc7gkciL
     E0DHpO2QNa_qrIXEucqjFZJn3WB9sg4Z5RZvXlgxNbMPuzYjMU0xZkfOvVxWizKOrFnAx0bryAROEQpdT27HXvzbGYDw0mAJj-UApBRlSbZL6l0N94NuWE2Eru3X0APJ-afXeNzjV8
     RlXgfYxHcmtQ4_e_DZiB-w", "expirationTime": 1725926214928, "refreshToken": "AMf-vBwRDQmv8exbgPEsDyEkShzUhX1ldvL5WadPwJRIKXS_B3zM1obBt39VsGduHI
     0ZyFnwDhzbYmuXJyHc4He_vVvHGLNmvlqC-AI_Kp_JUKJLxWo_fbbKCUHqnm9qLOdWiXY3TaX4ZmgJZvn1wmcMrY_TTl-X9U2cXyWDI6zAadZCXZ_3iJ8Y2THiPgxAM835P5kHzIQhDp3iWPQdI
     5wp5Uet8DXFsQ"}, "tenantId": undefined, "uid": "7H0BClGjWuRawTr02j4q5RZwXs22"}
*/
