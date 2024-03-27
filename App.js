import React from 'react';
import { NavigationContainer } 
	from '@react-navigation/native';
import { createStackNavigator }
	from '@react-navigation/stack';
import ContactsScreen
	from './ContactsScreen';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="ContactsScreen">
				<Stack.Screen
					name="ContactsScreen"
					component={ContactsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
