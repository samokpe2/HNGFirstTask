// HomeScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


function HomeScreen({ navigation}) {

  const slackName = 'Okpe Samuel';
  const slackUserName = '@samokpe2';
  const slackProfileImage = 'https://ca.slack-edge.com/T05FFAA91JP-U05QVEGQFHD-5d0159c45f13-512'; // Replace with your Slack profile image URL

  const openGitHubProfile = () => {
    navigation.navigate('GitHub Profile'); // Navigate to the WebView screen
  };
  

  return (
    <>
      <View style={styles.container}>
          <Image
            source={{ uri: slackProfileImage }}
            style={styles.image}
          />
          <Text style={styles.text}>{slackName}</Text>
          <Text style={styles.textSmall}>{slackUserName}</Text>
          <TouchableOpacity onPress={openGitHubProfile}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Open GitHub Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#1B1D21'
  },
  text: {
    fontSize: 24,
    marginBottom: 1,
    marginTop:20,
    color:'white'
  },
  textSmall : {
    fontSize: 12,
    marginBottom: 20,
    color:'white'
  },
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 10,
    marginBottom:20,
  },
  button: {
    backgroundColor: '#400d40',
    padding: 10,
    marginTop: 20,
    borderRaduis: 40,
  },
  buttonText: {
    color: 'white',
  },
});

export default HomeScreen;