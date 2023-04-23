import { Pressable, View, Image, Text } from 'react-native';
import c from '../../utils/APP_CONSTANTS';
export default ({ recipe, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Details', {
          item: recipe,
        });
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 2,
          marginBottom: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            backgroundColor: c.colors.lightGray,
            borderRadius: 6,
          }}>
          <Image
            source={recipe?.image}
            style={{
              width: '40%',
              height: 100,
              borderRadius: 6,
            }}
            alt={recipe?.name}
          />
          <View
            style={{
              width: '60%',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 4,
                marginTop: 2,
                fontSize: 18,
              }}>
              {recipe?.name}
            </Text>
            <Text
              style={{
                marginLeft: 4,
                marginTop: 2,
                fontSize: 14,
              }}>
              {recipe?.duration} | Serving
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
