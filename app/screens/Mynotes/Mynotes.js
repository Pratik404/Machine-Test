import React, { Component } from 'react';
import { connect } from "react-redux";
import { ScrollView, FlatList } from 'react-native';
import {If, Then, Else} from 'react-if';
import { Container, Content, Button, ListItem, Left, Right, Body, Icon, Text } from 'native-base';

import SpinnerBox from '../../components/SpinnerBox';
import Request from '../../utils/request';
import Style from './../../styles/style';

import Notesitem from './Notesitem';

class OrderHistory extends Component {
  state = {
    notes: [],
    loading: true,
  }
  componentDidMount() {
    Request.get('/notes/').then(res => {
      console.log(res.data);
      this.setState({notes: res.data, loading: false});
    });
  }
  render() {
    return(
      <Container>
        <Header title="My Notes"/>
        <If condition={this.state.loading}>
          <Then>
            <SpinnerBox />
          </Then>
          <Else>
            <ScrollView style={Style.content}>
              <FlatList
                data={this.state.orders}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => {return <Notesitem item={item} navigation={this.props.navigation}/>}}
                >
              </FlatList>
            </ScrollView>
          </Else>
        </If>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(OrderHistory);
