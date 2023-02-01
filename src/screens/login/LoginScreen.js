import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Colors from '../../config/Colors';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '582848837510-lhtmo728j4fa2ccla6l7s5g2cps2m6v3.apps.googleusercontent.com',
});

const googleSignIn = async () => {
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = await auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  const res = await auth().signInWithCredential(googleCredential);

  return res.additionalUserInfo.profile;
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const [data, setdata] = useState();

  useEffect(() => {
    if (data) {
      navigation.navigate('BottomTabsRoutes', {data: data});
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
          setdata(googleSignIn());
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
