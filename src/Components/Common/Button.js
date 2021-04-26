import React from "react";
import {StyleSheet, View, Pressable, Text} from "react-native";


const PressableButton = (props) => {
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

export default PressableButton;

export const styles = StyleSheet.create({
	pressableContainer: {
		flex: 1,
		height: "100%",
		borderRadius: 10
	},
	viewWrapper: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "blue",
		borderRadius: 10
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
