import React from "react";
import {View, Text, StyleSheet, FlatList, Pressable} from "react-native";

import {Clients} from "../../Data_API/Clients";

const ClientList = (props) => {
	function renderItem({item}) {
		return (
			<Pressable
				onPress={() =>
					props.dispatch({
						type: "CLEINT_DETIALS",
						payload: item
					})}
				style={styles.clientCardContaioner}>
				<View style={styles.clientNameView}>
					<Text style={styles.clientName}>{item.name}</Text>
				</View>
				<View style={styles.clientPhoneView}>
					<Text style={styles.clientPhone}>{item.phone}</Text>
				</View>
			</Pressable>
		);
	}

	return (
		<FlatList
			data={Clients}
			keyExtractor={(item) => String(item.id)}
			renderItem={renderItem}
		/>
	);
};

export default ClientList;

const styles = StyleSheet.create({
	clientCardContaioner: {
		width: "99%",
		height: 75,
		marginTop: 10,
		marginBottom: 10,
		marginRight: "auto",
		marginLeft: "auto",
		padding: 10,
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		justifyContent: "space-around"
	},
	clientNameView: {
		width: "100%",
		alignItems: "flex-start"
	},
	clientName: {
		color: "blue",
		fontWeight: "700",
		textAlign: "left"
	},
	clientPhoneView: {
		width: "100%",
		alignItems: "flex-start"
	},
	clientPhone: {
		color: "black",
		textAlign: "left"
	}
});
