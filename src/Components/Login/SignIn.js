import React from "react";
import {Text, View, Keyboard, Image, TouchableWithoutFeedback} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import InputField from "../Common/InputField";
import PressableButton from "../Common/Button";
import {LoginAuth} from "../../Data_API/LoginAuth";

import {styles} from "./style";

function SignIn(props) {
	function onChangeTextHandler(value, type) {
		props.dispatch({
			type: type,
			payload: value.toLowerCase()
		});
	}

	return (
		<View style={styles.containerView}>
			<KeyboardAwareScrollView contentContainerStyle={{height: "100%"}}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.loginScreenContainer}>
						<View style={styles.loginFormView}>
							<View style={styles.logoImageView}>
								<Text style={{fontSize: 25}}>
									Task App
								</Text>
							</View>

							<InputField
								secureTextEntry={false}
								autoCorrect={false}
								underlineColorAndroid="transparent"
								keyboardType="email-address"
								editable={true}
								onChangeText={(value) =>
									onChangeTextHandler(value, "EMAIL")}
								placeholderTextColor="#666"
								value={props.state.email}
								autoCapitalize="none"
								placeholder="Email"
								style={styles.loginFormTextInput}
							/>
							<InputField
								secureTextEntry={true}
								autoCorrect={false}
								underlineColorAndroid="transparent"
								keyboardType="number-pad"
								editable={true}
								onChangeText={(value) =>
									onChangeTextHandler(value, "PASSWORD")}
								placeholderTextColor="#666"
								value={props.state.password}
								autoCapitalize="none"
								placeholder="Password"
								style={styles.loginFormTextInput}
							/>

							<Text style={{color: "red", marginLeft: "5%"}}>
								{props.state.error}
							</Text>

							<View
								style={{
									height: 50
								}}>
								<PressableButton
									style={"dark"}
									onPressIn={() =>
										LoginAuth(
											props.state.email,
											props.state.password,
											props.dispatch
										)}
									title="Login"
								/>
							</View>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAwareScrollView>
		</View>
	);
}

export default SignIn;
