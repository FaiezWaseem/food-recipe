import { Pressable, Image, View  , Text} from 'react-native';
import c from '../../utils/APP_CONSTANTS';
export default ({ recipe, navigation }) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Details', {
          item: recipe,
        })
      }>
      <View
        style={{
          width: c.width('80'),
          height: 400,
          margin: 5,
        }}>
        <Image
          source={recipe?.image}
          style={{
            width: '100%',
            height: 400,
            borderRadius: 5,
            resizeMode: 'cover',
          }}
          alt={recipe?.name}
        />
        <View
          style={{
            position: 'absolute',
            backgroundColor: c.colors.transparentBlack7,
            margin: 5,
            padding: 3,
            paddingHorizontal: 4,
            borderRadius: 4,
          }}>
          <Text style={{ color :c.colors.white}}>{recipe?.category}</Text>
        </View>
        <View
          style={{
            width: '90%',
            padding: 4,
            paddingHorizontal: 2,
            margin: 10,
            position: 'absolute',
            backgroundColor: c.colors.transparentBlack3,
            borderRadius: 4,
            bottom: 1,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'column',
                width: '90%',
              }}>
              <Text style={{ color :c.colors.white}}>{recipe?.name}</Text>
              <Text style={{ color :c.colors.white}}>{recipe?.duration} | Serving</Text>
            </View>
            <Image
              source={require('../../assets/icons/bookmark.png')}
              style={{
                width: 10,
                height: 15,
              }}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};
