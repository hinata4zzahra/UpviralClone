import React, {Component} from 'react'
import {
  Container, Content, Image,
  Spinner, Fab, Icon,
  Button, SwipeRow, Text,
  Title, Card, CardItem,
  Body, Left, Right, IconNB
} from 'native-base'
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {NavigationActions} from 'react-navigation'
import { bindActionCreators } from 'redux'

import {allcampaigns, removecampaign} from '../actions/campaigns'

class Campaigns extends Component{

  componentDidMount(){
    this.props.dispatch(allcampaigns())
  }

  handleEdit = (objectId,title_campaign,name) => {
    const navigateToEditCampaign = NavigationActions.navigate({
      routeName : 'EditCampaign',
      params:{objectId,title_campaign,name},
    })
    this.props.navigation.dispatch(navigateToEditCampaign);
  }

  handleCreate = () => {
    const navigateToCampaignCreate = NavigationActions.navigate({
      routeName: 'CampaignCreate',

    });
    this.props.navigation.dispatch(navigateToCampaignCreate);
  }

  handleRemove = (Id) => {
    this.props.dispatch(removecampaign(Id))
    .then(() =>{
      this.props.dispatch(allcampaigns())
      alert('success delete campaign!')
    })
  }


  render(){
    console.log(this.props.campaignsReducer.campaigns)
    return (
      <Container style={styles.Container}>
        <Content >
              {this.props.campaignsReducer.isLoading?(
                <Spinner color='blue' />
              ) : (

                 <View>
                    {this.props.campaignsReducer.campaigns.map((campaign) => {
                        return(
                          <SwipeRow
                              key={campaign.objectId}
                              leftOpenValue={75}
                              rightOpenValue={-75}
                              left={
                                  <Button info onPress={() => this.handleEdit(campaign.objectId,campaign.title_campaign,campaign.name)}>
                                    <Icon active name="md-create" style={{color:"#ffffff"}} />
                                  </Button>

                              }
                              body={
                                <Card style={styles.cardCont}>
                                  <CardItem header bordered>
                                    <Icon active name='md-megaphone' style={{color:"#4ac0e8"}} />
                                    <Text style={styles.text}>{campaign.name}</Text>
                                  </CardItem>
                                  <CardItem bordered>
                                    <Body>
                                      <Text style={styles.text}>Title : {campaign.title_campaign}</Text>
                                      <Text style={styles.text}>Url : {campaign.uri_campaign}</Text>
                                      <Text style={styles.text}>Created Date : {new Date(campaign.created).toString()}</Text>
                                      <Text style={styles.text}>Total Email : {campaign.total_email}</Text>
                                    </Body>
                                  </CardItem>
                                </Card>
                              }
                              right={
                                  <Button danger onPress={() => this.handleRemove(campaign.objectId)}>
                                    <Icon active name="trash" />
                                  </Button>

                              }
                            />
                        )
                      })
                    }
                  </View>
                )}

        </Content>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={this.handleCreate} >
            <Icon name="add" />
        </Fab>

      </Container>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    campaignsReducer: state.campaignsReducer
  }
}

const mapDispatchToProps =  (dispatch) => {
    return {
        allcampaigns: bindActionCreators(allcampaigns, dispatch),

    }
}


export default connect(mapStateToProps)(Campaigns)

const styles= StyleSheet.create({
  Container:{
    flex:1
  },
  cardCont:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',

  },
  text:{
    color:"#4ac0e8",
    fontFamily:'Cambria',
    fontSize:10
  }
})
