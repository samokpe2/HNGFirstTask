import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './app/screens/HomeScreen'; 
import GitHubWebViewScreen from './app/screens/GithubWebViewScreen';


const AppNavigator = createStackNavigator(
    {
      Home: { screen: HomeScreen }, // Your existing App component
      "GitHub Profile": { screen: GitHubWebViewScreen },
    },
    {
      initialRouteName: 'Home', // Set the initial route to your existing app
    }
);
  
export default createAppContainer(AppNavigator);