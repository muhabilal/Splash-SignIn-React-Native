import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
          <View style={styles.footer}>
              <Text style={styles.text_footer}>Email</Text>
              <View style={styles.action}>
                <TextInput/>
              </View>
          </View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#009387',
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,

    },
    footer:{
        flex:3,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header:{
        color:"white",
        fontWeight:"bold",
        fontSize:50,
    }
})