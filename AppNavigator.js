import { createStackNavigator, createAppContainer } from "react-navigation";
import SetScreen from './src/screens/Set'
const AppNavigator = createStackNavigator({
    Home: {
        screen: SetScreen
    }
});

export const AppContainer = createAppContainer(AppNavigator);