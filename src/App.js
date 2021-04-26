import React from "react";
import {StatusBar, SafeAreaView, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Router from "./Router";
import AppReducers from "./Reducers";

const persistConfig = {
	key: "root",
	storage: AsyncStorage
};
const Reducers = combineReducers({...AppReducers});
const persistedReducer = persistReducer(persistConfig, Reducers);
const store = createStore(persistedReducer, {});
const persistor = persistStore(store);

const App = () => (
	<SafeAreaView style={styles.container}>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<StatusBar barStyle="default" />
					<Router />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	</SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
