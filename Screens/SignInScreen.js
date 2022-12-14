import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
// import { AntDesign } from 'react-native-vector-icons/AntDesign'
const SignInScreen = () => {
  const [data, setdata] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
    check_textInputChange: false
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          {/* <AntDesign name="home" size={24} color="black" /> */}
          <TextInput placeholder='Your Email'
            autoCapitalize='none'
            style={styles.textInput}
          />
        </View>
        <Text style={[styles.text_footer, {
          marginTop: 35
        }]}>Password</Text>
        <View style={styles.action}>
          {/* <AntDesign name="home" size={24} color="black" /> */}
          <TextInput placeholder='Your Email'
            autoCapitalize='none'
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>
      </View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,

  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    // marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    // paddingBottom: 2,
  },
  textInput: {
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
})