import React, { Component } from 'react';
import { Container, Content, View, Title} from 'native-base';
import { Button, Text } from 'native-base';
import { Form, Item, Input, Icon } from 'native-base';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import { TouchableOpacity } from 'react-native'

import Style from '../../styles/style';

class Login extends Component {
  constructor(props) {
    super(props)
    this.onClickLogin = this.onClickLogin.bind(this);
    this.state = {
        Title:'',
        Type:'',
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
             <Title style={{color:'#FFF'}}>Add/Edit notes</Title>
         </Body>
        </Header>
     <Content contentContainerStyle={{flex: 1}}>
         <Grid style={{alignItems: 'flex-end'}}>
           <Col style={Style.content}>
             <Form style={Style.bottom}>
               <Item style = {Style.input}>
                 <Input
                   value ={this.state.Title}
                   onChangeText={val=>this.setState({Title: val})}
                   placeholder='Title'
                   />
               </Item>
               <Menu>
                <MenuTrigger text='Select action' />
                <MenuOptions>
                    <MenuOption value={1} text='Work' />
                    <MenuOption value={2} text='Home' />
                    <MenuOption value={3} text='Vehicle' />
                </MenuOptions>
                </Menu>
               <Item style = {Style.input}>
                 <Input
                   value ={this.state.Type}
                   onChangeText={val=>this.setState({Type: val})}
                   placeholder='Type in your notes'
                   />
               </Item>
               <Button block onPress={this.onClickNext}>
                 <Text>Submit/Update</Text>
               </Button>
             </Form>
           </Col>
         </Grid>
     </Content>
   </Container>
    )
  }
  onClickLogin() {
    this.props.navigation.navigate("Mynotes");
  }
}

export default Login;
