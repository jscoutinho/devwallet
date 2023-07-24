import {
    createNativeStackNavigator
} from '@react-navigation/native-stack'
import Add from '../screens/Add'
import Home from '../screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='home' component={Home} />
            <Screen name='add' component={Add} />
        </Navigator>
    )
}