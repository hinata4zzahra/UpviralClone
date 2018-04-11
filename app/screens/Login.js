import React, {Component} from 'react';
import {
  StyleSheet, TouchableOpacity,
  View, Text, Image
} from 'react-native';
import {NavigationAction} from 'react-navigation';
import {
  Form, Item, Input, Label,
  Icon, Button
} from 'native-base';
import {connect} from 'react-redux';

import bgSrc from '../img/background.jpg';
import logoImg from '../img/logo.png';

class Login extends Component {
  render() {
    return(
          <View style={styles.container}>
             <View style={styles.conImg}>
               <Image source={logoImg} style={styles.image} />
               <Text style={styles.text}>UPVIRAL CLONE</Text>
             </View>
             <View style={styles.form}>
               <Form>
                 <Item floatingLabel>
                  <Icon active name='md-person' style={{color:"#42bcf4"}} />
                  <Label style={styles.text}>Username</Label>
                  <Input style={styles.text} />
                 </Item>
                 <Item floatingLabel>
                  <Icon active name='ios-lock' style={{color:"#42bcf4"}} />
                  <Label style={styles.text}>Email</Label>
                  <Input secureTextEntry={true} style={styles.text} />
                 </Item>
               </Form>
             </View>
             <View>
               <Button full info style={{marginTop:10}}>
                <Text style={{color:'white'}}>Login</Text>
               </Button>
             </View>
             <View style={styles.sign}>
              <TouchableOpacity >
                <Text style={{color:'#42bcf4'}}>Create Account</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Text style={{color:'#42bcf4',paddingLeft:50}}>Forgot Password?</Text>
              </TouchableOpacity>
             </View>
            </View>
    )
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  sign: {
    flex: 1,
    top: 35,
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginTop:-100,
  },
  conImg: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: "#42bcf4",
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});
