import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (value) => {
	try {
		await AsyncStorage.setItem("@BookingDetials", value);
	} catch (e) {
		console.log("@storeData error", e);
	}
};

export async function SaveBooking(BookingDetials, dispatch) {
	try {
		console.log("SaveBooking", BookingDetials)
		let BookingDetailsString = JSON.stringify(BookingDetials);
		storeData(BookingDetailsString);
		dispatch({
			type: "BOOKING_SAVED",
			payload: BookingDetials
		});
	} catch (error) {
		console.log("@SaveBooking error", error);
	}
}
