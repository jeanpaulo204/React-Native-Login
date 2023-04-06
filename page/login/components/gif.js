
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Image } from '@rneui/themed';
import { FlatList, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';


export const Gif = () => {

  const Props = StyleSheet.create({
    border: {

    width: 500, 
    height: 400,
    },

  });

return (

<View>
<>
    <SafeAreaView >
    <Image
    style={Props.border}
    source={{ uri: 'https://i.gifer.com/origin/5f/5ffad62fea4ee49330b8467dff73b53b.gif' }}
   
  />
    </SafeAreaView>
  </>

</View>


);




}
