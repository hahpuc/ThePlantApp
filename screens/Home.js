import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';

const Home = () => {
  // Dummy data

  const [newPlanetsData, setNewPlanets] = React.useState([
    {
      id: 0,
      name: 'Plant 1',
      img: images.plant1,
      favourite: false,
    },
    {
      id: 1,
      name: 'Plant 2',
      img: images.plant2,
      favourite: true,
    },
    {
      id: 2,
      name: 'Plant 3',
      img: images.plant3,
      favourite: false,
    },
    {
      id: 3,
      name: 'Plant 4',
      img: images.plant4,
      favourite: false,
    },
  ]);

  // Render Planet Images
  function renderNewPlanets(item, index) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          marginHorizontal: SIZES.base,
        }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.23,
            height: '82%',
            borderRadius: 15,
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* New Planets  */}
      <View
        style={{
          height: '30%',
          backgroundColor: COLORS.white,
        }}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}>
          <View
            style={{
              marginTop: SIZES.padding * 2,
              marginHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h2,
                }}>
                NEW PLANETS
              </Text>

              <TouchableOpacity
                onPress={() => {
                  console.log('Press on New Planets');
                }}>
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{
                    marginTop: 3,
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{marginTop: SIZES.base}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlanetsData}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, index}) => renderNewPlanets(item, index)}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Today's share */}
      <View
        style={{
          height: '50%',
          backgroundColor: 'pink',
        }}></View>

      {/* Added Friends */}
      <View
        style={{
          height: '20%',
          backgroundColor: COLORS.lightGray,
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
