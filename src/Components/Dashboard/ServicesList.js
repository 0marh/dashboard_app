import React from "react";
import {View, Text, StyleSheet, FlatList, Pressable} from "react-native";

import {Services} from "../../Data_API/Services";

const ServicesList = (props) => {
	function renderItem({item}) {
		return (
			<Pressable
				onPress={() =>
					props.dispatch({
						type: "SERVICE_DETIALS",
						payload: item
					})}
				style={styles.clientCardContaioner}>
				<View style={styles.clientNameView}>
					<Text style={styles.clientName}>{item.name}</Text>
				</View>
				<View style={styles.clientPhoneView}>
					<Text style={styles.clientPhone}>{item.price}</Text>
				</View>
			</Pressable>
		);
	}

	return (
		<FlatList
			data={Services}
			keyExtractor={(item) => String(item.id)}
			renderItem={renderItem}
			ItemSeparatorComponent={() => <View style={styles.spearator} />}
		/>
	);
};

export default ServicesList;

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
		// borderBottomWidth: 1,
		// borderColor: 'grey',
		justifyContent: "space-around"
	},
	spearator: {
		width: "100%",
		height: 1,
		backgroundColor: "grey",
		borderWidth: 1,
		borderColor: "grey"
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
