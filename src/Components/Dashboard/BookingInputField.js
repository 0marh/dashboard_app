import React from "react";
import {StyleSheet, Text, View, TextInput} from "react-native";


const BookingInputField = (props) => {

	return (
		<View style={[styles.container, props.wrapperStyles]}>
			<View style={[styles.fieldContent, props.containerStyles]}>
				<TextInput
					secureTextEntry={props.secureTextEntry}
					autoCorrect={props.autoCorrect}
					underlineColorAndroid="transparent"
					keyboardType={props.keyboardType}
					ref={props.elRef}
					editable={props.editable}
					onChangeText={props.onChangeText}
					placeholderTextColor="#666"
					value={props.value}
					autoCapitalize={props.autoCapitalize}
					placeholder={props.placeholder}
					style={[styles.inputStyles, props.inputStyles]}
				/>
			</View>
			<Text style={styles.error}>{props.error}</Text>
		</View>
	);
};

BookingInputField.defaultProps = {
	wrapperStyles: {},
	containerStyles: {},
	autoCapitalize: "none",
	autoCorrect: false,
	keyboardType: "default",
	secureTextEntry: false,
	containerStyle: {},
	inputStyles: {},
	label: "",
	value: "",
	onChange: () => {},
	editable: true,
	placeholder: "",
	labelStyles: {}
};

export default BookingInputField;

const styles = StyleSheet.create({
	container: {
		width: "100%"
		// marginVertical: 16
	},
	fieldContent: {
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center"
	},
	inputStyles: {
		flex: 1,
		// color: "#2F2F2F",
		color: "black",
		// backgroundColor: "#F2F2F2",
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "#F2F2F2",
		fontSize: 14,
		padding: 10,
		height: 50,
		borderRadius: 10,
	},
	label: {
		fontSize: 14,
		marginBottom: 8
	},
	error: {
		marginTop: 5,
		marginLeft: 5,
		fontSize: 14,
		color: "#D50000"
	}
});
