import React from "react";
import {StyleSheet, View, Pressable, Text} from "react-native";


const FloatingBtn = (props) => {
	return (
		<Pressable
			style={({pressed}) => [
				styles.pressableContainer,
				{opacity: pressed ? 0.3 : 1}
			]}
			onPress={props.onPressIn}>
			<View style={styles.viewWrapper}>
				<Text style={[styles.preesableText]}>{props.title}</Text>
			</View>
		</Pressable>
	);
};

export default FloatingBtn;

export const styles = StyleSheet.create({
	pressableContainer: {
		width:"100%",
		height: "100%",
		borderRadius: 50,
		backgroundColor: "blue",
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOpacity: 0.8,
		elevation: 6,
		shadowRadius: 15 ,
		shadowOffset : { width: 1, height: 13},
	},
	viewWrapper: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "blue",
		borderRadius: 50,
	},
	preesableText: {
		backgroundColor: "transparent",
		padding: 10,
		textAlign: "center",
		fontSize: 15,
		fontWeight: "700",
		fontStyle: "normal",
		color: "white",
		
	}
});
