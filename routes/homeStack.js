import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Washer from '../components/washer';
import Dryer from '../components/dryer';

const screens = {
    Washer: {
        screen: Washer
    },
    Dryer: {
        screen: Dryer
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
