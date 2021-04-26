export const BoardState = {
	selectedDate: null,
	boookingVisible: false,
	BookingStages: ["CLIENT_LIST", "SERVICE_LIST", "BOOKING_FORM"],
	BookingStage: 1,
	clientDetials: {},
	serviceDetails: {},
	BookingDetials: {}
};

export const BoardReducer = (state = BoardState, action) => {
	switch (action.type) {
		case "SELECT_DATE":
			return {
				...state,
				selectedDate: action.payload
			};
		case "OPEN_BOOKING_MODAL":
			return {
				...state,
				boookingVisible: true
			};
		case "CLOSE_BOOKING_MODAL":
			return {
				...state,
				boookingVisible: false
			};
		case "BOOKING_STAGE_CHANGE":
			return {
				...state,
				BookingStage: action.payload
			};
		case "CLEINT_DETIALS":
			return {
				...state,
				BookingStage: 2,
				clientDetials: action.payload
			};
		case "SERVICE_DETIALS":
			return {
				...state,
				BookingStage: 3,
				serviceDetails: action.payload
			};
		case "BOOKING_SAVED":
			return {
				...state,
				boookingVisible: false,
				BookingStage: 1,
				BookingDetials: action.payload
			};
		default:
			return {
				...state
			};
	}
};
