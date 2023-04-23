import {Dimensions, PixelRatio} from 'react-native';

const width = percent => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(percent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const height = percent => {
  const screenHeight = Dimensions.get('window').height;
  const elemWidth = parseFloat(percent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemWidth) / 100);
};
const c = {
  appname : "Food Recipe",
  colors : {
    darkGreen: "#229879",
    darkLime: "#1A8871",
    lightLime: "#BBD6C5",
    lime: "#2AD699",
    lightGreen: "#E7F9EF",
    lightGreen1: "#8EbCA0",

    white: "#fff",
    white2: '#F9F9F9',
    black: "#020202",
    blue: "#4096FE",
    gray: "#777777",
    gray2: '#F8F8F8',
    lightGray: "#F5F6FB",
    lightGray2: '#757575',

    transparentBlack1: 'rgba(2, 2, 2, 0.1)',
    transparentBlack3: 'rgba(2, 2, 2, 0.3)',
    transparentBlack5: 'rgba(2, 2, 2, 0.5)',
    transparentBlack7: 'rgba(2, 2, 2, 0.7)',
    transparentBlack9: 'rgba(2, 2, 2, 0.9)',

    transparentGray: 'rgba(77,77,77, 0.8)',
    transparentDarkGray: 'rgba(20,20,20, 0.9)',

    transparent: 'transparent',
  },
  width,
  height,
  onboard : {
    heading : " Cooking a\n Delicious Food\n Easily",
    btnLogin  : "Login",
    btnSignup : "Sign Up", 
    headingSize : 38 ,
    btnPd : 4,
    btnM : 4,
    btnBorderRadius : 18 ,
  },
  home : {
    headingSize : 22 ,
    heading : "Hello Jhon,",
    subhead : "What do you want to Cook Today?",
    searchHint : 'Search Recipes',
  }
}

export default c;