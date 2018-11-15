import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {firstValue: '', secondValue: '', result:'', data:[]}
  }

  plusButton = () =>{
    const plusResult = parseInt(this.state.firstValue) + parseInt(this.state.secondValue);
    this.setState({result:plusResult})
    this.setState({
      data:[...this.state.data,
      {key: this.state.firstValue + ' + ' + this.state.secondValue + ' = ' + plusResult}]
    })
  };

  minusButton = () =>{
    const minusResult = parseInt(this.state.firstValue) - parseInt(this.state.secondValue);
    this.setState({result: minusResult})
    this.setState({data:[...this.state.data,
    {key: this.state.firstValue + ' - ' + this.state.secondValue + ' = ' + minusResult}]
  })
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>Result:{this.state.result}</Text>

        <TextInput style={{width:200, borderColor:'gray', borderWidth:2}}
        keyboardType = 'numeric'
        onChangeText={(firstValue) => this.setState({firstValue})}
        value={this.state.firstValue}/>

        <TextInput style={{width:200, borderColor:'gray', borderWidth:2}}
        keyboardType = 'numeric'
        onChangeText={(secondValue) => this.setState({secondValue})}
        value={this.state.secondValue}/>

        <View style={styles.rowButton}>
          <Button onPress={this.plusButton} title= ' + ' color="#ffffff" />
          </View>
          <View style={styles.rowButton}>
          <Button onPress={this.minusButton} title= ' - ' color="#ffffff" />
          </View>
          <Text>History</Text>
          <FlatList data={this.state.data}
          renderItem={({item}) => <Text>{item.key}</Text>}
          />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowButton: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
