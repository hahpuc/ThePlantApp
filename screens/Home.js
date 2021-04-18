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
            height: '83%',
            borderRadius: 15,
          }}
        />

        <View
          style={{
            position: 'absolute',
            bottom: '16%',
            right: 0,
            backgroundColor: COLORS.primary,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.h3}}> {item.name} </Text>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '16%',
            left: 16,
          }}
          onPress={() => console.log('Press to Favorite')}>
          <Image
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
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
                New Planets
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
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}>
          <View
            style={{
              marginTop: SIZES.padding,
              marginHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.black,
                  ...FONTS.body2,
                }}>
                Today's Share
              </Text>
              <Text
                style={{
                  color: COLORS.gray,
                  ...FONTS.body3,
                }}>
                See All
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: '88%',
              }}>
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'red',
                }}>
                <TouchableOpacity style={{flex: 1}}>
                  <Image
                    source={images.plant5}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1, marginTop: 8}}>
                  <Image
                    source={images.plant6}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1.2,
                }}>
                <TouchableOpacity style={{flex: 1, marginLeft: 8}}>
                  <Image
                    source={images.plant7}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

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
