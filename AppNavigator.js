import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/screens/HomeScreen'
import CreateSet from './src/screens/CreateSet'

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,

        },
        CreateCards: CreateSet
    }, {
        initialRouteName: "Home"
    }
);

export const AppContainer = createAppContainer(AppNavigator);