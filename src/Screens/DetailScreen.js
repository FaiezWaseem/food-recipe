import * as React from 'react';
import { View, Image, Text , Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RecipieCard from '../components/detail/RecipieCard';
import c from '../utils/APP_CONSTANTS';
export default function DetailScreen({ navigation, route }) {
  const { item } = route.params;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>

       {/*  HEAD */}
      <View
        style={{
          height: '40%',
          backgroundColor: c.colors.lime,
        }}>
        { <Image source={item?.image} style={{ height: '100%' }} /> }
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            marginLeft: 3,
            width: '100%',
            top: 5,
          }}>
          <Pressable onPress={()=> navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={28} color="white" />
          </Pressable>
          <View style={{ width: '80%' }}></View>
          <Ionicons name="bookmark-outline" size={24} color="white" />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              marginLeft: 2,
              padding: 2,
              backgroundColor: c.colors.transparentBlack5,
              width: '80%',
              borderRadius: 20,
              bottom: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          <Image
              source={item.author?.profilePic}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            /> 
            <View
              style={{
                flexDirection: 'column',
                width: '60%',
                marginLeft: 4,
                marginRight: 4,
                padding : 10
              }}>
              <Text
                style={{
                  color: c.colors.gray2,
                }}>
                Recipe By
              </Text>
              <Text
                style={{
                  color: c.colors.white2,
                  fontWeight: 'bold',
                }}>
                {item.author.name}
              </Text>
            </View>
            <Ionicons
              name="ios-arrow-redo-circle-outline"
              size={32}
              color={c.colors.white2}
            />
          </View>
        </View>
      </View>

      {/* INFO */}
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: '60%',
            justifyContent: 'center',
          }}>
          <Text style={{ marginLeft: 3 }}>{item.name}</Text>
          <Text style={{ marginLeft: 3 }}>
            {item.duration} | {item.category}
          </Text>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' , marginTop : 4 }}>
            { item.viewers.map((v) => (
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                }}
                source={v?.profilePic}
              />
            ))}
          </View>
          <Text>{item.viewers.length} people tried this</Text>
        </View>
      </View>

      {/* Ingredients */}
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginLeft: 3,
            fontSize: 22,
            fontWeight: 'bold',
            width: '70%',
          }}>
          Ingredients
        </Text>
        <Text style={{ margin: 3, fontSize: 16 }}>
          {item.ingredients.length} items
        </Text>
      </View>
      {item.ingredients.map((i) => (
        <RecipieCard item={i} />
      ))}

    </View>
  );
}

     

      