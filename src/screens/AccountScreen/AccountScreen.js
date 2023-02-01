import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Size from '../../config/Size';
import Colors from '../../config/Colors';
import Images from '../../config/Images';
import {useNavigation} from '@react-navigation/native';

const AccountScreen = ({route}) => {
  const data = route.params.data;

  const navigation = useNavigation();
  if (data != undefined) {
    console.log(data._j.name);
  }
  if (data) {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Account</Text>
        <Image source={Images.ic_dummy_profile} style={styles.profilePict} />
        <Text style={styles.name}>{data._j.name}</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'LoginScreen'}],
            })
          }>
          <Text style={styles.buttonText}>LogOut</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  headerText: {
    fontSize: Size.h4,
    color: Colors.black,
    fontWeight: '600',
    marginBottom: 50,
  },
  profilePict: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: Size.h3,
    color: Colors.black,
    fontWeight: '700',
    marginBottom: 50,
    marginBottom: 40,
  },
  buttonContainer: {
    backgroundColor: Colors.gray3,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: Size.h4,
    color: Colors.black,
    fontWeight: '600',
  },
});
