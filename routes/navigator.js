import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import { Pressable, Text } from 'react-native';

const Stack = createStackNavigator();

export default function Navigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{
					headerTintColor: '#444',
					headerStyle: {
						backgroundColor: '#eee',
						height: 60,
					},
				}}
			>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Review Details' component={ReviewDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
