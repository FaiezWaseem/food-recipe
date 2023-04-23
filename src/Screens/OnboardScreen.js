import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import c from '../utils/APP_CONSTANTS';
const img = require('../assets/images/system/login-background.png');
export default function OnBoardScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <Image source={img} style={styles.bgImage} />
      <Text style={styles.textLabel}>{c.onboard.heading}</Text>
      <View style={styles.btnView}>
        <Pressable
          onPressIn={() => {
            console.log("Going To Home : Login Clicked")
            navigation.navigate('Home');
          }}
          style={[styles.btn, styles.btnLogin]}>
          <Text style={styles.btnText}>{c.onboard.btnLogin}</Text>
        </Pressable>
        <Pressable
        
          onPressIn={() => navigation.navigate('Details')}
          style={[styles.btn, styles.btnSignUp]}>
          <Text style={styles.btnText}>{c.onboard.btnSignup}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
  },
  bgImage: {
    width: c.width('100'),
    resizeMode: 'cover', // or 'stretch'
    height: c.height('60'),
  },
  textLabel: {
    width: c.width('100'),
    fontSize: c.onboard.headingSize,
    color: '#fff',
    position: 'absolute',
    paddingHorizontal: 4,
    bottom: c.height('30'),
    backgroundColor: c.colors.transparentBlack5,
  },
  btnView: {
    width: c.width('100'),
    alignItems: 'center',
    position: 'absolute',
    bottom: c.height('2'),
  },
  btn: {
    borderRadius: c.onboard.btnBorderRadius,
    width: c.width('75'),
    maxHeight : 80,
    minHeight : 60,
    marginVertical: c.onboard.btnM,
    paddingVertical: c.onboard.btnPd,
    justifyContent : "center",
    alignItems : "center"
  },
  btnText: {
    color: '#fff',
    fontSize : 22
  },
  btnLogin: {
    backgroundColor: c.colors.lime,
  },
  btnSignUp: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 2,
  },
});
