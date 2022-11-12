import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding:24
  },
  eventName:{
    color: '#FdFcFE',
    fontSize:24,
    fontWeight: 'bold',
    marginTop:48
  },
  eventDate:{
    color: '#6b6b6b',
    fontSize:16,
  },
  form:{
    flexDirection:'row',
    width:'100%',
    marginTop:36,
    marginBottom:42
  },
  input:{
    flex:1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    marginRight:7,
  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor:'#31fc67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color:'#fff',
    fontsize:16
  },
  listEmptyText:{
    color:'#fff',
    fontSize:14,
    textAlign: 'center'
  }
});
