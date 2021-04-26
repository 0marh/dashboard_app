export const AuthState = {
	email: null,
	password: null,
	user: null,
	isSignedIn: false,
	isError: false,
	error: null
};

export const AuthReducer = (state = AuthState, action) => {
	switch (action.type) {
		case "EMAIL":
			return {
				...state,
				email: action.payload
			};
		case "PASSWORD":
			return {
				...state,
				password: action.payload
			};
		case "LOGIN_SUCCESS":
			return {
				...state,
				user: action.payload,
				isSignedIn: true,
				isError: false,
				error: null
			};
		case "LOGIN_FAILED":
			return {
				...state,
				isError: true,
				error: action.payload
			};
		case "LOGOUT":
			return {
				...state,
				email: null,
				password: null,
				isSignedIn: false,
				isError: false,
				error: null
			};
		default:
			return {
				...state
			};
	}
};
