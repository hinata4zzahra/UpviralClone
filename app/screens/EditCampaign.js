import React, {Component} from 'react'
import {View,Text, StyleSheet, Image} from 'react-native'
import {
    Button, Item, Card, CardItem,
    Icon, Left, Body, Right,
    Input, Label, Thumbnail, Container,
    Content
} from 'native-base'
import {connect} from 'react-redux'
import {NavigationActions} from 'react-navigation'

import {allTemplate} from '../actions/templates'
import {createTitle} from '../actions/campaigns'

class EditCampaign extends Component {

  state = {
    title:'',
  }

  componentDidMount(){
    this.props.dispatch(allTemplate())
  }


  handleBack = () => {
    this.props.navigation.goBack()

  }

  handleEdit = (uri,objectId,name) => {
      const navigateToLeadPage = NavigationActions.navigate({
      routeName : 'LeadPage',
      params:{uri,objectId,name},
      key:'EditCampaign'
    })
      this.props.navigation.dispatch(navigateToLeadPage);
  }


  render() {
    console.log(this.props.navigation)
    const {name,objectId} = this.props.navigation.state.params
    return(
      <Container style={styles.container}>
        <Content>
              <View style={styles.viewCampaign}>

                <Button iconLeft transparent info onPress={this.handleBack} style={styles.btnBack}>
                  <Icon name='ios-arrow-round-back-outline' />
                  <Text style={{color:'#0a9caf'}}>Back</Text>
                </Button>
                <Text style={styles.viewTitle}>Campaign : {name} </Text>

              </View>

              {this.props.templateReducer.campaign_template.map((campaign_template) => {
                return(
                  <Card key={campaign_template.objectId}>
                    <CardItem cardBody>

                        <Image style={styles.viewBg} source={{uri: campaign_template.url}}/>

                    </CardItem>
                    <CardItem>
                      <Body>
                        <Button info full rounded style={{justifyContent:'center'}}
                           onPress={()=>this.handleEdit(campaign_template.url,objectId,name)}
                        >
                            <Text style={{color:'white',fontFamily:'Georgia'}}>Select Template</Text>
                        </Button>
                      </Body>
                    </CardItem>
                  </Card>
                )
              })}

        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    templateReducer: state.templateReducer
  }
}

export default connect(mapStateToProps)(EditCampaign)
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  viewButton:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:5,
    marginRight:5,
    marginLeft:5
  },
  viewBg:{
    width:250,
    height:150,
    justifyContent:"center",
    alignSelf:'center',
    alignItems:'center',
    marginTop:5,
    marginLeft:70
  },
  viewTitle:{
    marginTop:25,
    marginRight:10,
    marginLeft:10,
    fontFamily:'Georgia',
    justifyContent:'flex-start'
  },
  viewCampaign:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  btnBack:{
    marginTop:15,
    marginLeft:5,
    borderColor:"#0a9caf",
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',

  }
})
