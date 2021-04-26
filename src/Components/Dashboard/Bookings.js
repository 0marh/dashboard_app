import React from "react";
import {View} from "react-native";

import EventCalendar from "react-native-events-calendar";

import {BookingsData} from "../../Data_API/Bookings";

const Bookings = (props) => {
	return (
		<EventCalendar
			styles={{
				container: {
					width: "100%",
					height: "100%"
				}
			}}
			events={BookingsData}
			width={350}
			headerIconLeft={<View />}
			headerIconRight={<View />}
			initDate={props.state.selectedDate}
		/>
	);
};

export default Bookings;

// const styles = StyleSheet.create({
// 	agendaStyles: {}
// });
