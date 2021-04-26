import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Initial from "./Screens/Initial";
import Login from "./Screens/Login";
import Dashboard from "./Screens/Dashboard"

const Stack = createStackNavigator();

const Router = () => {
	const defaultScreenOptions = {
		headerShown: false,
		cardStyle: {backgroundColor: "white"}
	};

	return (
		<Stack.Navigator
			mode="modal"
			initialRouteName="Initial"
			screenOptions={defaultScreenOptions}>
			<Stack.Screen name="Initial" component={Initial} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Dashboard" component={Dashboard} />
		</Stack.Navigator>
	);
};
export default Router;
