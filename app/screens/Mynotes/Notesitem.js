import React, { Component } from 'react';
import { Card, CardItem, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import moment from 'moment';



class Notesitem extends Component {
  render() {
    let note = this.props.item.item;
    let {notes} = note;
    let createdAt = moment(note.createdAt, 'YYYY-MM-DD HH:mm:ss');
    return(
      <Card>
        <CardItem header>
          <Col>
            <Text>Title</Text>
            <Text>{notes.name}</Text>
            <Text>Note:</Text>
            <Text>{notes.Note}</Text>
            <Text>Category</Text>
            <Text>{notes.category}</Text>
            <Text note style={{fontSize:10}}>{createdAt.format('MMMM Do, h:m A')}</Text>
          </Col>
        </CardItem>
      </Card>
    )
  }
}

export default Notesitem;
