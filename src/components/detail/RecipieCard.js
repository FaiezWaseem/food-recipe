import { View, Image, Text } from 'react-native';
export default ({ item }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
        marginBottom: 2,
        flexDirection: 'row',
      }}>
      <Image
        source={item.icon}
        style={{
          width: 40,
          height: 40,
        }}
      />
      <Text
        style={{
          width: '65%',
          marginLeft: 4,
        }}>
        {item.description}
      </Text>
      <Text>{item.quantity}</Text>
    </View>
  );
};
