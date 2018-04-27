import React, {Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {
  Container, Content, Button,
  Form, Item, Input, Label
} from 'native-base'


export default class LeadTitleSuccess extends Component {
  render() {
    const {objectId,name} = this.props.navigation.state.params
    return(
      <Container styl={styles.Container}>
        <Content>
        <Form>
          <Item fixedLabel>
            <Label>Page URL :</Label>
            <Input />
          </Item>
        </Form>
        <View style={styles.conbutton}>
          <Button rounded success style={styles.button} onPress= {() => this.props.navigation.goBack()}>
            <Text style={{color:'white'}}>Back</Text>
          </Button>
          <Button rounded info style={styles.button} onPress={() => this.props.navigation.navigate('Reward')}>
            <Text style={{color:'white'}}>Next Page</Text>
          </Button>
          <Button rounded warning style={styles.button} onPress={() => this.props.navigation.navigate('Thank',{objectId,name})}>
            <Text style={{color:'white'}}>Edit Page</Text>
          </Button>
        </View>
        </Content>
      </Container>
    )
  }
}

const styles= StyleSheet.create({
  Container:{
    flex:1
  },
  conbutton:{
    flex:1,
    justifyContent:'space-between',
    flexDirection:'row',

  },
  button:{
    width:125,
    height:35,
    marginRight:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:15
  },
  form:{
    flex:1
  }
})
