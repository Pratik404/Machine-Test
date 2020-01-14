import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { Form, Item, Input } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
import { Header, Left, Body, Button, Title, Icon } from 'native-base';

import Request from '../../utils/request';
import Style from './../../styles/style';
import AuthActions from './../../actions/authActions';
import NavigationActions from './../../actions/navigationActions';
import { If } from 'react-if';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.onClickNext = this.onClickNext.bind(this)
  }
  render() {
    return(
      <Container>
           <Header transparent style = {{backgroundColor: '#ffa500'}}>
            <Left>
                <Icon name='menu' style={{color:'#FFF'}}/>
            </Left>
            <Body>
                <Title style={{color:'#FFF'}}>Sign Up</Title>
            </Body>
           </Header>
        <Content contentContainerStyle={{flex: 1}}>
            <Grid style={{alignItems: 'flex-end'}}>
              <Col style={Style.content}>
                <Form style={Style.bottom}>
                  <Item style = {Style.input}>
                    <Input
                      value ={this.state.email}
                      onChangeText={val=>this.setState({email: val})}
                      placeholder='Enter email address'
                      />
                  </Item>
                  <Item style = {Style.input}>
                    <Input
                      value ={this.state.password}
                      onChangeText={val=>this.setState({password: val})}
                      placeholder='Enter your password'
                      />
                  </Item>
                  <Button block onPress={this.onClickNext}>
                    <Text>SignUp</Text>
                  </Button>
                </Form>
              </Col>
            </Grid>
        </Content>
      </Container>
    )
  }
  onClickNext() {
    this.setState({process: true});
    let data = new FormData();
    data.append('uid', this.props.auth.uid)
    data.append('email', this.state.email)
    data.append('password', this.state.password)
    Request.post('/addUser', data)
    .then(res => {
      if(res.data.success) {
        Request.get('/checkUser'+this.props.auth.uid)
        .then(res => {
          AuthActions.setUser(res.data);
          NavigationActions.resetNavigation(this, 'Login');
        })
      } else {
        let messages = res.data.messages;
        Object.keys(messages).forEach(el => {
          var key = el+'_error';
          this.setState({[key]: messages[el]})
        });
        this.setState({process: false});
      }
    })
    .catch(err => console.error(err))
  }
}

export default Signup;