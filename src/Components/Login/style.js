import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
	containerView: {
		flex: 1
	},
	loginScreenContainer: {
		width: "80%",
		height: "100%",
		marginLeft: "auto",
		marginRight: "auto",
		justifyContent: "flex-start",
		alignItems: "center"
	},
	logoImageView: {
		width: "100%",
		height: "20%",
		alignItems: "center",
		justifyContent: "space-between"
	},
	loginFormView: {
		width: "100%",
		height: "60%",
		justifyContent: "flex-end"
	},
	loginFormTextInput: {
		height: 40,
		fontSize: 14,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#eaeaea",
		backgroundColor: "#fafafa",
		paddingLeft: 10,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 5
	},
	loginButton: {
		backgroundColor: "#FDCD05",
		borderRadius: 5,
		height: 40
	}
});
