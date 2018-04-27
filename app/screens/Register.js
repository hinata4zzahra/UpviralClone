import React, {Component} from 'react';
import {
  StyleSheet, View, Text,
  Image, ImageBackground
} from 'react-native';
// import {NavigationActions} from 'react-navigation';
import { StackNavigator } from 'react-navigation';

import {
  Form, Item, Input, Icon, Button, Label
} from 'native-base';
import {connect} from 'react-redux';

import bgSrc from '../img/bg_pastel6.jpg';
import logoImg from '../img/logo.png';

export default class Register extends Component {
  render() {
    return(
      <ImageBackground style={styles.picture} source={bgSrc}>

        <View style={styles.container}>
           <View style={styles.conImg}>
             <Image source={logoImg} style={styles.image} />
           </View>
           <View>
             <Form style={styles.form}>
               <Item rounded floatingLabel style={styles.viewForm}>
                <Icon active name='ios-person-outline' style={{color:"#f9fafc",paddingLeft:25,paddingTop:7}} />
                <Label style={{color:'white',paddingLeft:25}}>Username</Label>
                <Input style={styles.text1} />
               </Item>
               <Item rounded floatingLabel style={styles.viewForm}>
                <Icon active name="ios-mail-outline" style={{color:"#f9fafc",paddingLeft:25,paddingTop:7}} />
                <Label style={{color:'white',paddingLeft:25}}>Email</Label>
                <Input style={styles.text1} />
               </Item>
               <Item rounded floatingLabel style={styles.viewForm}>
                <Icon active name='ios-lock-outline' style={{color:"#f9fafc",paddingLeft:25,paddingTop:7}} />
                <Label style={{color:'white',paddingLeft:25}}>Password</Label>
                <Input secureTextEntry={true} style={styles.text1} />
               </Item>
             </Form>
           </View>
           <View style={styles.conbutton}>
             <Button rounded onPress={() => this.props.navigation.goBack()} style={styles.button} >
              <Text style={styles.text1}>Register</Text>
             </Button>
           </View>
          </View>

      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
  },
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
    },
  viewForm:{
    marginRight:70,
    marginLeft:60,
    height: 50,
    width: 300,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  conImg: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-25
  },
  image: {
    width: 125,
    height: 125,
  },
  text1: {
    color: "#f9fafc",
    backgroundColor: 'transparent',
    alignItems:'center',
    fontFamily:'Lobster'
  },
  conbutton:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:25
  },
  button: {
    height: 50,
    width: 300,
    marginTop:40,
    borderColor: '#664c1c',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#0a5260"
  },
});
