
import React, {Component} from 'react'
import {
  View, Text, StyleSheet,
  Picker, TouchableHighlight
} from "react-native"
import ListPopover from 'react-native-list-popover';
import {
  Content, Container, Form,
  Item, Input, Label
} from 'native-base'

const items = ['Item 1', 'Item 2'];

export default class Reward extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  render() {
    return(
      <Container>
        <Content>
        <Form>
          <Item fixedLabel>
            <Label>Name of the Reward</Label>
            <Input />
          </Item>
        </Form>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.setState({isVisible: true})}>
            <Text>{this.state.item || 'Select'}</Text>
          </TouchableHighlight>
          <ListPopover
            list={items}
            isVisible={this.state.isVisible}
            onClick={(item) => this.setState({item: item})}
            onClose={() => this.setState({isVisible: false})}/>
        </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#532860',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#b8c',
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
});
