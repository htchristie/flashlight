
import React, {useState, useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';

import bulbOn from './assets/icons/on.png';
import bulbOff from './assets/icons/off.png';
import logoOn from './assets/icons/logo-dio.png';
import logoOff from './assets/icons/logo-dio-white.png';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handlePress = () => setToggle(toggle => !toggle);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(toggle => !toggle);
    });

    return () => subscription.remove();
  }, []);

  return (
  <SafeAreaView style={toggle ? style.containerDark : style.containerLight}>
    <TouchableOpacity onPress={handlePress}>
      <Image style={toggle ? style.bulbOff : style.bulbOn} source={toggle ? bulbOff : bulbOn}/>
      <Image style={style.logo} source={toggle ? logoOff : logoOn} />
    </TouchableOpacity>
  </SafeAreaView>
)};

export default App;

const style = StyleSheet.create({
  containerDark: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bulbOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  bulbOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
    tintColor: 'white',
  },
  text: {
    color: 'white',
  },
  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  }
});