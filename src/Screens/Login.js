import React, {useEffect} from "react";
import {StackActions} from "@react-navigation/native";
import {useSelector, useDispatch} from "react-redux";

import SignIn from "../Components/Login/SignIn";

const Login = ({navigation}) => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const resetRouter = (routeName) => {
		console.log("Resetting router in login for ", routeName);
		navigation.dispatch(StackActions.replace(routeName));
	};

	useEffect(() => {
		if (state.AuthReducer.isSignedIn === true) resetRouter("Dashboard");
	});

	return <SignIn state={state.AuthReducer} dispatch={dispatch} />;
}

export default Login;
