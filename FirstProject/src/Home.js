import React, { Component } from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class Home extends Component{

    static navigationOptions = {
       tabBarLabel:'Home',
       tabBarIcon:({focused, tintColor})=>{
           if(focused)
           {
            <Image source={require('../assets/images/home_azul.png')} style={styles.icon}/>

           }
           else
           {
           return(
             <Image source={require('../assets/images/home_preto.png')} style={styles.icon}/>
            );
           }
       }
    };

    render(){
        return(
          <View>

          </View>
        );
    }
}
const style = StyleSheet.create({
    icon:{
        width:26,
        height:26
    }
});