import React, {useEffect} from "react";
import {View, StyleSheet, Text} from "react-native";
import {useDispatch} from "react-redux";
import {StackActions} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Initial = ({navigation}) => {
	const dispatch = useDispatch();

	useEffect(() => {
		checkForLogedInUser();
	}, []);

	function resetRouter(routeName) {
		console.log("Resetting router", routeName);
		navigation.dispatch(StackActions.replace(routeName));
	}

	async function checkForLogedInUser() {
		try {
			const LogedInUser = await AsyncStorage.getItem("@LogedInUser");

			if (!LogedInUser) return resetRouter("Login");

			return resetRouter("Dashboard");
		} catch (error) {
			console.log("Error @ checkForLogedInUser", error);
			resetRouter("Login");
		}
	}

	return (
		<View style={styles.container}>
			<Text>Task App</Text>
		</View>
	);
};

export default Initial;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});
