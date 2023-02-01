import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Colors from '../../config/Colors';
import Size from '../../config/Size';
import Images from '../../config/Images';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const JobDetailScreen = ({route}) => {
  const data = route.params.data;
  const navigation = useNavigation();
  const fulltime = data.type == 'Full Time' ? 'Yes' : 'No';
  const {width} = useWindowDimensions();
  const link =
    data.company_url == null ? 'https://www.google.com/' : data.company_url;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Job Detail</Text>

      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Image source={Images.ic_chevron_left} />
      </TouchableOpacity>

      <View style={{marginBottom: 20}}>
        <Text style={styles.descTitle}>Company</Text>
        <View style={[styles.contentContainer, {}]}>
          <Image source={Images.ic_logo_dummy} style={styles.logo} />
          <View style={styles.rightContainer}>
            <Text style={styles.company}>{data.company}</Text>
            <Text style={styles.location}>{data.location}</Text>
            <Text
              style={styles.website}
              onPress={() => {
                Linking.openURL(link);
              }}>
              Go to Website
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.descTitle}>Job Specification</Text>
        <View
          style={[
            styles.contentContainer,
            {
              flexDirection: 'column',
              paddingHorizontal: 20,
              paddingVertical: 10,
              paddingBottom: 20,
            },
          ]}>
          <Text style={styles.h4}>Title</Text>
          <Text style={styles.h5}>{data.title}</Text>
          <Text style={styles.h4}>Fulltime</Text>
          <Text style={styles.h5}>{fulltime}</Text>
          <Text style={styles.h4}>Description</Text>
          <RenderHTML contentWidth={width} source={{html: data.description}} />
        </View>
      </View>
      <View style={{height: 40}} />
    </ScrollView>
  );
};

export default JobDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: Size.h4,
    color: Colors.black,
    fontWeight: '600',
    marginBottom: 29,
    alignSelf: 'center',
  },
  back: {
    position: 'absolute',
  },
  contentContainer: {
    width: '100%',
    borderColor: Colors.black,
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 10,
  },
  descTitle: {
    fontSize: Size.h4,
    color: Colors.black,
    fontWeight: '600',
    marginBottom: 10,
  },
  logo: {
    resizeMode: 'contain',
    height: '100%',
    width: '26%',
  },
  rightContainer: {
    justifyContent: 'center',
    paddingVertical: 10,
    flex: 1,
    paddingRight: 10,
  },
  company: {
    fontSize: Size.h3,
    color: Colors.black,
    fontWeight: '600',
    width: '100%',
    marginBottom: 4,
  },
  location: {
    fontSize: Size.h45,
    color: Colors.black,
    fontWeight: '400',
    marginBottom: 4,
  },
  website: {
    fontSize: Size.h5,
    color: Colors.blue2,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  h4: {
    fontSize: Size.h4,
    color: Colors.gray,
    fontWeight: '600',
    marginBottom: 4,
  },
  h5: {
    fontSize: Size.h45,
    color: Colors.black,
    fontWeight: '500',
    marginBottom: 10,
  },
});
