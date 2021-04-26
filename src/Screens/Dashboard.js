import React, {useEffect} from "react";
import moment from "moment";
import {View, Text, StyleSheet} from "react-native";
import {StackActions} from "@react-navigation/native";
import {useSelector, useDispatch} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CalenderView from "../Components/Dashboard/Calender";
import Bookings from "../Components/Dashboard/Bookings";
import FloatingBtn from "../Components/Dashboard/FloatingBtn";
import NewBookingModal from "../Components/Dashboard/NewBookingModal";
import {BookingsData} from "../Data_API/Bookings";

const Dashboard = ({navigation}) => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const resetRouter = (routeName) => {
		console.log("Resetting router in login for ", routeName);
		navigation.dispatch(StackActions.replace(routeName));
	};

	async function checkForSavedBookings() {
		try {
			const SavedBookingDetials = await AsyncStorage.getItem("@BookingDetials");

			if (SavedBookingDetials) {
				let SavedBookingDetialsJson = JSON.parse(SavedBookingDetials);
				let newBooking = {
					start: SavedBookingDetialsJson.date,
					end: moment(SavedBookingDetialsJson.date).add(1, "hours"),
					title: "NEW Booking Added",
					summary: "NEW Booking Added"
				};

				BookingsData.push(newBooking);
			}
		} catch (error) {
			console.log("Error @ checkForSavedBookings", error);
		}
	}

	useEffect(() => {
		checkForSavedBookings();

		let today = moment().format(),
			todaySplit = today.split("T");

		dispatch({
			type: "SELECT_DATE",
			payload: todaySplit[0]
		});
	}, []);

	console.log("Dashboard state", state.BoardReducer);

	useEffect(() => {
		let BookingDetails = state.BoardReducer.BookingDetials;

		console.log(BookingDetails);

		if (BookingDetails.date) {
			let newBooking = {
				start: BookingDetails.date,
				end: moment(BookingDetails.date).add(1, "hours"),
				title: "NEW Booking Added",
				summary: "NEW Booking Added"
			};

			BookingsData.push(newBooking);
		}
	});

	return (
		<View style={styles.dashboardContainer}>
			<NewBookingModal state={state.BoardReducer} dispatch={dispatch} />
			<View style={styles.calenderContainer}>
				<CalenderView state={state.BoardReducer} dispatch={dispatch} />
			</View>
			<View style={styles.bookingAgendaContainer}>
				<Bookings state={state.BoardReducer} dispatch={dispatch} />
			</View>
			<View style={styles.floatingBtnView}>
				<FloatingBtn
					onPressIn={() => dispatch({type: "OPEN_BOOKING_MODAL"})}
					title="+"
				/>
			</View>
		</View>
	);
};

export default Dashboard;

const styles = StyleSheet.create({
	dashboardContainer: {
		flex: 1,
		justifyContent: "space-between"
	},
	calenderContainer: {
		flex: 0.3,
		width: "90%",
		marginRight: "auto",
		marginLeft: "auto",
		marginBottom: 10
	},
	bookingAgendaContainer: {
		flex: 0.6,
		width: "90%",
		marginRight: "auto",
		marginLeft: "auto",
		marginTop: 10
	},
	floatingBtnView: {
		position: "absolute",
		bottom: 10,
		right: 10,
		width: 50,
		height: 50,
		borderRadius: 50
	}
});
