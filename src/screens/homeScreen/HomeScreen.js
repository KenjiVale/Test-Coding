import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Images from '../../config/Images';
import axios from 'axios';
import Colors from '../../config/Colors';
import Size from '../../config/Size';
import JobListCard from '../../components/JobListCard';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [data, setdata] = useState(null);
  const [search, setsearch] = useState('');
  const navigation = useNavigation();
  const itemToRender = 10;
  const [locationTemp, setlocationTemp] = useState('');
  const [location, setlocation] = useState('');
  const [showFilter, setshowFilter] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json', {
        params: {},
        headers: {},
      })
      .then(response => {
        // If request is good...

        setdata(response.data);
      })
      .catch(error => {
        console.log('error ' + error);
      });
  };

  const apllyFilter = () => {
    setlocation(locationTemp);
    setshowFilter(false);
  };

  //   Search data by location and title
  const filtered = data?.filter(
    item =>
      !item ||
      (item.title.toLowerCase().includes(search.toLowerCase()) &&
        item.location.toLowerCase().includes(location.toLowerCase())),
  );

  if (data != null) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>JOB LIST</Text>
        <View style={styles.horizontalSearch}>
          <View style={styles.searchbarContainer}>
            <Image source={Images.ic_search} style={styles.searchIcon} />
            <TextInput
              style={styles.input}
              onChangeText={setsearch}
              value={search}
            />
          </View>
          <TouchableOpacity
            style={styles.collapseContainer}
            onPress={() => setshowFilter(!showFilter)}>
            {showFilter == true ? (
              <Image source={Images.ic_chevron_up} />
            ) : (
              <Image source={Images.ic_chevron_down} />
            )}
          </TouchableOpacity>
        </View>
        {showFilter ? (
          <View style={styles.filterContainer}>
            <Text>Fulltime</Text>
            <View style={styles.horizontalItem}>
              <Text>Location</Text>
              <TextInput
                style={styles.locationInput}
                onChangeText={setlocationTemp}
                value={locationTemp}
              />
            </View>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => apllyFilter()}>
              <Text>Aplly Filter</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator={false}>
          {filtered.map((e, key) => {
            return (
              <JobListCard
                key={key}
                location={e.location}
                company={e.company}
                title={e.title}
                onPress={() =>
                  navigation.navigate('JobDetailScreen', {data: e})
                }
              />
            );
          })}

          <View style={{height: 40}} />
        </ScrollView>
      </View>
    );
  } else {
    return null;
  }
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: Size.h4,
    color: Colors.black,
    fontWeight: '600',
    marginBottom: 20,
  },
  searchbarContainer: {
    borderColor: Colors.black,
    borderWidth: 1,
    flex: 1,
    borderRadius: 20,
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    padding: 0,
    paddingHorizontal: 10,
    flex: 1,
  },
  searchIcon: {
    alignSelf: 'center',
  },
  horizontalSearch: {
    width: '100%',
    flexDirection: 'row',
  },
  collapseContainer: {
    marginLeft: 10,
    alignSelf: 'center',
  },
  scrollview: {
    marginTop: 20,
    width: '100%',
  },
  filterContainer: {
    borderColor: Colors.black,
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  horizontalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  locationInput: {
    borderColor: Colors.black,
    borderWidth: 1,
    padding: 0,
    width: 150,
  },
  filterButton: {
    backgroundColor: Colors.gray3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 20,
  },
});
