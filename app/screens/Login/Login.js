import React, { Component } from 'react';
import { Container, Content, View, Title} from 'native-base';
import { Button, Text } from 'native-base';
import { Form, Item, Input, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native'

import Style from '../../styles/style';

class Login extends Component {
  constructor(props) {
    super(props)
    this.onClickLogin = this.onClickLogin.bind(this);
    this.state = {
        email: '',
        email_error: '',
        password: '',
        pass_error: '',
    }
  }

  render() {
    return(
        <Container>
        <Header transparent style = {{backgroundColor: '#ffa500'}}>
         <Left>
             <Icon name='menu' style={{color:'#FFF'}}/>
         </Left>
         <Body>
             <Title style={{color:'#FFF'}}>Login</Title>
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
               <If condition={this.state.email_error.length > 0}>
                 <Text style={Style.error}>{this.state.email_error}</Text>
               </If>
               <Item style = {Style.input}>
                 <Input
                   value ={this.state.password}
                   onChangeText={val=>this.setState({password: val})}
                   placeholder='Enter your password'
                   />
               </Item>
               <If condition={this.state.pass_error.length > 0}>
                 <Text style={Style.error}>{this.state.pass_error}</Text>
               </If>
               <View>
               <Text>Don't have an account?Sign Up</Text>
               <TouchableOpacity onPress = {this.props.navigation.navigate("Signup")}></TouchableOpacity>
               </View>
               <Button block onPress={this.onClickNext}>
                 <Text>Login</Text>
               </Button>
             </Form>
           </Col>
         </Grid>
     </Content>
   </Container>
    )
  }
  onClickLogin() {
    this.props.navigation.navigate("Notes");
  }
}

export default Login;