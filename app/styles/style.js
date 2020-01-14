import { StyleSheet } from 'react-native';
import { Platform } from "react-native";

const platform = Platform.OS;

export default StyleSheet.create({
  top: {
    marginTop:20,
  },
  bottom: {
    marginBottom:20,
  },
  mg10: {
    margin: 10,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  homeheading: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  label: {
    marginLeft: 10,
  },
  homeLabel: {
    fontSize: 14,
    color: '#808080',
    marginLeft: 20,
    marginTop: 5,
  },
  input: {
    marginTop:5,
    marginBottom:10,
    marginLeft: 0,
    marginRight: 0,
    borderColor: '#f39c12',
  },
  inputSearch: {
    marginTop:5,
    marginBottom:10,
    marginLeft: 10,
    marginRight: 15,
    borderColor: '#000',
  },
  inputNoBorder: {
    marginTop:5,
    marginBottom:10,
    marginLeft: 0,
    marginRight: 0,
  },
  inputRegular: {
    marginTop:5,
    marginBottom:20,
    marginLeft: 0,
    marginRight: 0,
  },
  inputRegularError: {
    marginTop:5,
    marginBottom:0,
    marginLeft: 0,
    marginRight: 0,
  },
  button: {
    marginTop:10,
    marginBottom:5,
  },
  lightColor: {
    color: '#575757',
  },
  error: {
    color: '#ed2f2f',
    marginBottom: 10,
  },
  upperBorder: {
    borderTopWidth: 0.5,
    borderTopColor: '#575757',
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 128,
  },
  avatarBig: {
    width:256,
    height:256,
    marginTop:10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#f39c12',
    borderRadius: 256,
  },
  text1: {
    marginTop: 20,
    alignItems: 'center',
    color: '#6495ed',
    fontSize:30,
  },
  text2: {
    marginTop: 20,
    alignItems: 'center',
    color: '#575757',
  },
  badgeContainer: {
    position: "absolute"
  },
});
