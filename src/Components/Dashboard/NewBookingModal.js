import React from "react";
import {View, Text, StyleSheet, Modal, Pressable} from "react-native";
import InputField from "../Common/InputField";

import ClientsList from "./ClientsList";
import ServicesList from "./ServicesList";
import BookingForm from "./BookingForm";

const NewBookingModal = (props) => {
	function modelContentUpdate(state, dispatch) {
		let stage = state.BookingStage;

		console.log("stage", stage);
		switch (stage) {
			case 2:
				return <ServicesList state={state} dispatch={dispatch} />;
			case 3:
				return <BookingForm state={state} dispatch={dispatch} />;
			default:
				return (
					<View>
						<View style={styles.transparentBtnView}>
							<Pressable style={styles.transparentBtn}>
								<Text style={styles.transparentBtnText}>
									+ Add New Client
								</Text>
							</Pressable>
						</View>
						<ClientsList state={state} dispatch={dispatch} />
					</View>
				);
		}
	}

	function getBackStage(stage) {
		if (stage === 1)
			return props.dispatch({
				type: "BOOKING_STAGE_CHANGE",
				payload: 1
			});

		return props.dispatch({
			type: "BOOKING_STAGE_CHANGE",
			payload: stage - 1
		});
	}

	return (
		<Modal
			animationType="slide"
			transparent={false}
			visible={props.state.boookingVisible}
			onRequestClose={() => {
				console.log("Modal has been closed.");
			}}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Pressable
						onPress={() => getBackStage(props.BookingStage)}
						style={[styles.button, styles.buttonBack]}>
						<Text style={styles.textStyle}>{"<"}</Text>
					</Pressable>
					<Text style={styles.textStyle}>New Booking</Text>
					<Pressable
						style={[styles.button, styles.buttonClose]}
						onPress={() => props.dispatch({type: "CLOSE_BOOKING_MODAL"})}>
						<Text style={styles.textStyle}>X</Text>
					</Pressable>

					<View style={styles.progreeBarView}>
						<View style={styles.lineView}>
							<View style={styles.progressBar} />
						</View>
						<View style={styles.progressIcon}>
							<Text style={styles.iconText}>1</Text>
						</View>
						<View style={styles.progressIcon}>
							<Text style={styles.iconText}>2</Text>
						</View>
						<View style={styles.progressIcon}>
							<Text style={styles.iconText}>3</Text>
						</View>
					</View>

					<View>
						<InputField
							secureTextEntry={false}
							autoCorrect={false}
							underlineColorAndroid="transparent"
							editable={true}
							placeholderTextColor="#666"
							value={props.state.email}
							autoCapitalize="none"
							placeholder="Search Client"
							style={styles.loginFormTextInput}
						/>
					</View>

					<View style={styles.modalContent}>
						<View style={styles.listContainerView}>
							{modelContentUpdate(props.state, props.dispatch)}
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default NewBookingModal;

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		marginTop: 30
	},
	modalView: {
		width: "100%",
		height: "100%",
		backgroundColor: "white",
		padding: 30
	},
	button: {
		position: "absolute",
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	buttonClose: {
		right: 5,
		top: 10,
		backgroundColor: "transparent"
	},
	buttonBack: {
		left: 5,
		top: 10,
		backgroundColor: "transparent"
	},
	textStyle: {
		fontSize: 20,
		color: "blue",
		fontWeight: "bold",
		textAlign: "center"
	},
	progreeBarView: {
		width: "100%",
		height: 60,
		flexDirection: "row",
		position: "relative",
		justifyContent: "space-between",
		alignItems: "center"
	},
	lineView: {
		width: "100%",
		position: "absolute",
		justifyContent: "center",
		alignItems: "center"
	},
	progressBar: {
		width: "85%",
		height: 3,
		borderWidth: 1,
		borderColor: "blue",
		backgroundColor: "blue"
	},
	progressIcon: {
		width: 25,
		height: 25,
		borderRadius: 13,
		borderWidth: 2,
		backgroundColor: "white",
		borderColor: "blue",
		alignItems: "center",
		justifyContent: "center"
	},
	iconText: {
		color: "blue",
		textAlign: "center",
		backgroundColor: "white"
	},
	modalContent: {
		width: "100%",
		height: "100%"
	},
	transparentBtnView: {},
	transparentBtn: {
		backgroundColor: "transparent"
	},
	transparentBtnText: {
		color: "blue",
		fontSize: 18
	},
	listContainerView: {
		justifyContent: "center"
		// alignItems: "center"
	}
});
