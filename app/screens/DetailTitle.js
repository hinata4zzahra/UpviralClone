import React, {Component} from 'react'
import {Text,View, StyleSheet, ImageBackground} from 'react-native'
import {
  Container, Content, Image,
  Icon,Button, Item, Input,
  Textarea,Form,
} from 'native-base'
import {connect} from 'react-redux'
import {NavigationActions} from 'react-navigation'

import {saveThank, campaign} from '../actions/campaigns'

class DetailTitle extends Component {


  state= {
    button_content_thank:'',
    content_thank:'',
    title_thank:''
  }

  componentWillMount(){
    const {objectId} = this.props.navigation.state.params
    this.props.dispatch(campaign(objectId))
  }

  handleSave = (objectId,uri,name) => {



    const campaign={
      title_thank:this.state.title_thank,
      img_background_thank:uri,
      button_content_thank:this.state.button_content_thank,
      content_thank:this.state.content_thank,
      name:name
    }

    this.props.dispatch(saveThank(campaign,objectId))
    .then(() => {
      const navigateToLeadTitleSuccess = NavigationActions.navigate({
        routeName : 'LeadTitleSuccess',
        params:{objectId,name},
      })
      this.props.navigation.dispatch(navigateToLeadTitleSuccess)
    })
  }


  render() {
    const {title_thank,content_thank,button_content_thank,name, objectId} = this.props.campaignsReducer.detail_campaign
    const{uri}=this.props.navigation.state.params

    return(

    <Container style={styles.container}>
      <Content>
          <View style={styles.btnCon}>
            <Button rounded info style={styles.btn} onPress={() => this.props.navigation.goBack()}>
              <Text style={{color:'white'}}>Back</Text>
            </Button>
            <Button rounded info style={styles.btn}>
              <Text style={{color:'white'}}>Preview</Text>
            </Button>
            <Button rounded info style={styles.btn} onPress={() => this.handleSave(objectId,uri,name)}>
              <Text style={{color:'white'}}>Save</Text>
            </Button>
          </View>
          <View style={styles.title}>
            <Text>Title</Text>
            <Item regular>
              <Input placeholder={title_thank}
                onChangeText={(title_thank)=>this.setState({title_thank})} 
              />
            </Item>
          </View>
          <View style={styles.viewPage}>
            <Text>Landing Page URL : </Text>
          </View>
          <View>
            <ImageBackground source={{uri:uri}} style={{width:400,height:230,marginLeft:5}}>
              <Form>
                <Textarea rowSpan={3} bordered placeholder={content_thank}
                 style={{marginTop:25,color:'white',marginLeft:25,marginRight:25}}
                 onChangeText={(content_thank)=>this.setState({content_thank})} />
              </Form>
              <Button full info style={{marginTop:10,marginLeft:25,marginRight:25}} >
                <Input placeholder={button_content_thank} onChangeText={(button_content_thank)=>this.setState({button_content_thank})} style={{color:'white'}} />
              </Button>
            </ImageBackground>
          </View>
      </Content>
    </Container>

    )
  }
}

const mapStateToProps = (state)=>{
  return {
    campaignsReducer: state.campaignsReducer
  }
}

export default connect(mapStateToProps)(DetailTitle)

styles = StyleSheet.create({
  container:{
    flex:1
  },
  btnCon:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginTop:5,
    marginLeft:5,
    marginRight:5
  },
  btn:{
    width:125,
    justifyContent:'center',
    alignSelf:'center'
  },
  title:{
    marginTop:15
  },
  viewPage:{
    marginTop:15,
    marginRight:10,
    flexDirection:'row',
    justifyContent:'space-between',
  }
})
