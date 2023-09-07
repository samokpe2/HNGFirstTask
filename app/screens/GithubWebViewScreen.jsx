import React from 'react';
import { WebView } from 'react-native-webview';

// Create a new component for the WebView screen
const GitHubWebViewScreen = () => {
  return (
    <>
      <WebView
        source={{ uri: 'https://github.com/samokpe2' }} // Replace with your GitHub URL
        style={{ flex: 1}}
      />
    </>
  );
};



export default GitHubWebViewScreen;