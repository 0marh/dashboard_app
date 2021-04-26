import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import moment from "moment";

import BookingInputField from "./BookingInputField";
import PressableButton from "../Common/Button";
import {SaveBooking} from "../../Data_API/SaveBooking";

const BookingForm = (props) => {
	let BookingDetials = {};
	BookingDetials.client = props.state.clientDetials;
	BookingDetials.service = props.state.serviceDetails;

	function onDatePickerChange(event, date) {
		let formatDate = moment(date).format();
		console.log(" onDatePickerChange date", date, formatDate);
		BookingDetials.date = formatDate;
	}
	function onTimePickerChange(event, time) {
		console.log(" onTimePickerChange date", time);
		BookingDetials.time = time;
	}

	return (
		<View style={styles.bookingFormContainer}>
			<View style={{height: "50%"}}>
				<View style={styles.pickerWrapper}>
					<Text style={styles.labelTextStyle}>Pick date</Text>
					<DateTimePicker
						value={props.state.selectedDate}
						mode={"date"}
						display="default"
						style={styles.datePickerStyles}
						onChange={onDatePickerChange}
					/>
					<Icon
						name="calendar"
						size={18}
						color={"blue"}
						style={styles.iconStyles}
						onChange={onTimePickerChange}
					/>
				</View>
				<View style={styles.pickerWrapper}>
					<Text style={styles.labelTextStyle}>Choose staff</Text>
					<BookingInputField
						secureTextEntry={false}
						autoCorrect={false}
						underlineColorAndroid="transparent"
						keyboardType="default"
						editable={false}
						// onChangeText={(value) => onChangeTextHandler(value, "EMAIL")}
						placeholderTextColor="#666"
						value={"Ryan Jude"}
						autoCapitalize="none"
						placeholder="Ryan Jude"
						// style={styles.loginFormTextInput}
					/>
				</View>
				<View style={styles.pickerWrapper}>
					<Text style={styles.labelTextStyle}>Start time</Text>
					<DateTimePicker
						value={props.state.selectedDate}
						mode={"time"}
						display="default"
						style={styles.datePickerStyles}
					/>
					<Icon
						name="clock-o"
						size={18}
						color={"blue"}
						style={styles.iconStyles}
					/>
				</View>
			</View>
			<View style={styles.actionView}>
				<View style={styles.btnView}>
					<PressableButton
						style={"dark"}
						onPressIn={() => SaveBooking(BookingDetials, props.dispatch)}
						title="Save Booking"
					/>
				</View>
			</View>
		</View>
	);
};

export default BookingForm;

const styles = StyleSheet.create({
	bookingFormContainer: {
		width: "100%",
		height: "100%",
		justifyContent: "space-between"
	},
	pickerWrapper: {
		marginBottom: 30
	},
	datePickerViewStyles: {
		position: "relative",
		width: "100%",
		height: 50
	},
	datePickerStyles: {
		width: "100%",
		height: 40,
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "#F2F2F2",
		borderRadius: 10,
		color: "black",
		padding: 5
	},
	iconStyles: {
		position: "absolute",
		right: 10,
		bottom: 12
	},
	labelTextStyle: {
		color: "black",
		fontSize: 15,
		marginBottom: 5,
		paddingLeft: 5
	},
	actionView: {
		height: "30%",
		borderTopWidth: 1,
		borderColor: "grey",
		justifyContent: "flex-start",
		alignItems: "flex-end",
		paddingTop: 30
	},

	btnView: {
		width: "40%",
		height: 50
	}
});
