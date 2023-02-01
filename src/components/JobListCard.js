import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';
import Images from '../config/Images';
import {Dimensions} from 'react-native';
import Size from '../config/Size';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const JobListCard = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={Images.ic_logo_dummy} style={styles.logo} />
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>
        <Text style={styles.desc} numberOfLines={2} ellipsizeMode="tail">
          {props.company}
        </Text>
        <Text style={styles.location}>{props.location}</Text>
      </View>
      <View style={styles.arrowRightContainer}>
        <Image source={Images.ic_chevron_right} style={styles.arrowRight} />
      </View>
    </TouchableOpacity>
  );
};

export default JobListCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: Colors.black,
    borderWidth: 1,
    flexDirection: 'row',
    height: (windowHeight * 12) / 100,
    marginBottom: 14,
  },
  logo: {
    resizeMode: 'cover',
    height: '100%',
    width: '26%',
  },
  contentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'center',
  },
  title: {
    fontSize: Size.h3,
    color: Colors.black,
    fontWeight: '600',
    width: (windowWidth * 58) / 100,
  },
  desc: {
    fontSize: Size.h45,
    color: Colors.gray,
    fontWeight: '400',
    marginBottom: 4,
    width: (windowWidth * 55) / 100,
  },
  location: {
    fontSize: Size.h5,
    color: Colors.gray,
    fontWeight: '400',
  },
  arrowRight: {
    width: 14,
    height: 23,
    right: 10,
  },
  arrowRightContainer: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
