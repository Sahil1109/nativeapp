import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens ={
    Home: {
        screen: Home,
        navigationOptions:{
            title: 'GameZone',
            // headerStyle:{
            //     backgroundColor: '#777'
            // }
        }
    },
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title: 'Review Details',
            // headerStyle:{
            //     backgroundColor: '#777'
            // }
        }
    }
}
const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor: '#444',
        headerStyle:{
            backgroundColor: '#aaa',
            height: 80
        }
    }
})
export default createAppContainer(HomeStack)