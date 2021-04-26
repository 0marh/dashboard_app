import React from "react";
import moment from "moment";
import {View, StyleSheet, Text} from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

import {Calendar} from "react-native-calendars";

const CalenderView = (props) => {
	function onDateChange(day) {
		props.dispatch({
			type: "SELECT_DATE",
			payload: day.dateString
		});
	}

	function markedDatesHandler() {
		let today = moment().format(),
			todaySplit = today.split("T"),
			day = props.state.selectedDate
				// ? props.state.selectedDate.dateString
				// : todaySplit[0];
		return {
			[day]: {selected: true, marked: false, selectedColor: "blue"}
		};
	}

	return (
		<Calendar
			style={styles.calenderStyles}
			hideArrows={true}
			theme={{
				todayTextColor: "blue",
				selectedDayBackgroundColor: "blue",
				selectedDayTextColor: "white"
			}}
			onDayPress={(day) => {
				onDateChange(day);
			}}
			markedDates={markedDatesHandler()}
			renderHeader={(date) => {
				const header = date.toString("MMMM yyyy");
				const [month, year] = header.split(" ");
				const textStyle = {
					fontSize: 15,
					fontWeight: "bold",
					color: "blue"
				};

				return (
					<View style={styles.calenderHeaderStyles}>
						<View style={styles.leftHeader}>
							<View style={styles.barContainer}>
								<View style={styles.bar} />
								<View style={styles.midBar} />
								<View style={styles.bar} />
							</View>
						</View>
						<View style={styles.midHeader}>
							<Text style={textStyle}>{`${month}`}</Text>
							<Text style={textStyle}>{year}</Text>
						</View>
						<View style={styles.rightHeader}>
							<Icon name="bell" size={18} color={"blue"} />
						</View>
					</View>
				);
			}}
		/>
	);
};

export default CalenderView;

const styles = StyleSheet.create({
	calenderStyles: {
		width: "100%",
		height: "100%"
	},
	calenderHeaderStyles: {
		paddingLeft: 0,
		flexDirection: "row",
		width: "100%",
		height: 25,
		marginTop: 10,
		marginBottom: 10,
		alignItems: "center",
		justifyContent: "space-between"
	},
	rightHeader: {
		flex: 0.2,
		alignItems: "flex-end"
	},
	midHeader: {
		flex: 0.5,
		alignItems: "center"
	},
	leftHeader: {
		flex: 0.2,
		alignItems: "flex-start"
	},
	barContainer: {
		width: 20,
		height: 20,
		justifyContent: "space-between"
		// alignItems: "center"
	},
	bar: {
		width: "100%",
		height: 3,
		backgroundColor: "blue"
	},
	midBar: {
		width: "70%",
		height: 3,
		backgroundColor: "blue"
	}
});
