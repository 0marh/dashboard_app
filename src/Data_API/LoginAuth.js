import {baseUrl} from "../consts";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (value) => {
	try {
		await AsyncStorage.setItem("@LogedInUser", value);
	} catch (e) {
		console.log("@storeData error", e);
	}
};

export async function LoginAuth(email, password, dispatch) {
	try {
		let LoginAuthRes = await fetch(baseUrl, {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		});

		let LoginAuthResJson = await LoginAuthRes.json();

		console.log("@LoginAuthResJson", LoginAuthResJson);

		if (LoginAuthResJson.id) {
			let LogedInUserString = JSON.stringify(LoginAuthResJson);
			storeData(LogedInUserString);

			return dispatch({
				type: "LOGIN_SUCCESS",
				payload: LoginAuthResJson
			});
		}

		return dispatch({
			type: "LOGIN_FAILED",
			payload: LoginAuthResJson
		});
	} catch (error) {
		console.log("@LoginAuth error", error);
	}
}
