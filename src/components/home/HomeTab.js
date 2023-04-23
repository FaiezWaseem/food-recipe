import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import c from '../../utils/APP_CONSTANTS';
import { Ionicons } from '@expo/vector-icons';
import TrendingCard from './TrendingCard';
import CategoryCard from './CategoryCard';
import { trendingRecipes } from '../../utils/recipedb';
const userProfile = require('../../assets/images/dummy_profiles/profile-pic-2.png');
export default ({ extraData }) => {
  return (
    <ScrollView style={styles.main}>

      {/*  Top Bar */}
      <View
        style={[
          styles.hstack,
          {
            height: c.height(10),
            alignItems: 'center',
          },
        ]}>
        <View
          style={[
            styles.vstack,
            {
              paddingLeft: 5,
              width: '80%',
            },
          ]}>
          <Text style={styles.headTitle}>{c.home.heading}</Text>
          <Text style={{ color: c.colors.gray }}>{c.home.subhead}</Text>
        </View>
        <Image
          source={userProfile}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
          alt="Profile"
        /> 
      </View>

    {/*  Search Bar */}
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={[
            styles.hstack,
            {
              backgroundColor: c.colors.lightGray,
              padding: 6,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              width: '90%',
              margin: 5,
              paddingVertical : 8
            },
          ]}>
          <Ionicons name="search-sharp" size={24} color="grey" />
          <TextInput
            placeholder={c.home.searchHint}
            style={{
              width: '90%',
              padding: 5,
            }}
          />
        </View>
      </View>


      {/* suggestion*/}
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={[
            styles.hstack,
            {
              backgroundColor: c.colors.lightGreen,
              width: '90%',
              padding: 5,
              borderRadius: 4,
              alignItems: 'center',
            },
          ]}>
          <Image
            source={require('../../assets/images/recipes/recipe.png')}
            style={{
              width: 50,
              height: 50,
            }}
            alt="Receipe"
          />
          <View style={[styles.vstack, { marginLeft: 4 }]}>
            <Text>You have 12 Recipes</Text>
            <Text>That you have'nt read yet</Text>
            <Text
              style={{
                textDecorationLine: 'underline',
              }}>
              See Recipes
            </Text>
          </View>
        </View>
      </View>


      
      {/*  Trending */}
      <Text
        style={{
          fontWeight: 'bold',
          marginLeft: 4,
          marginTop: 8,
          marginBottom: 4,
          fontSize: 20,
        }}>
        Trending Recipes
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {trendingRecipes.map((recipe) => (
          <TrendingCard recipe={recipe} navigation={extraData} />
        ))}
      </ScrollView>


      
      {/*  Categories */}
      <View
        style={[
          styles.hstack,
          {
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 4,
          },
        ]}>
        <Text
          style={{
            fontWeight: 'bold',
            marginLeft: 4,
            marginTop: 2,
            fontSize: 20,
            width: '70%',
          }}>
          Categories
        </Text>
        <Text
          ml={4}
          mt={2}
          fontSize={16}
          style={{
            marginHorizontal: 4,
            fontSize: 16,
          }}>
          view all
        </Text>
      </View>
      {trendingRecipes.map((recipe) => (
        <CategoryCard recipe={recipe} navigation={extraData} />
      ))}

    </ScrollView>
  );
};



const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 26,
  },
  hstack: {
    flexDirection: 'row',
  },
  vstack: {
    flexDirection: 'column',
  },
  headTitle: {
    fontSize: c.home.headingSize,
    color: c.colors.lime,
    fontWeight: 'bold',
  },
});
