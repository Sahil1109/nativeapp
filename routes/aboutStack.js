import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/about'

const screens ={
    About: {
        screen: About,
        navigationOptions:{title: 'About'}
    }
}
const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor: '#444',
        headerStyle:{ backgroundColor: '#aaa', height: 80
        }
    }
})
export default AboutStack