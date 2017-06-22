import React from 'react';

import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      text: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
      console.log('this onPress thing works!!')
  }
  render() {
    let pic = {
      uri: 'https://s-media-cache-ak0.pinimg.com/736x/bf/73/19/bf73196327b409d12c214e9994de369e.jpg'
    };
    return (
      <View style={styles.container}>

        <Text onPress={this.handleClick}>My Dude!  Get this money!</Text>

        <TextInput
          style={{height: 40, left: 100}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text>You typed in- {this.state.text}</Text>


        <Image source={pic} style={{width: 193, height: 190}}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
