import { MMKV } from 'react-native-mmkv';

import Constants from 'expo-constants';

const isRunningInExpoGo = Constants.appOwnership === 'expo';

export let storage = {};

if (isRunningInExpoGo) {
	const AsyncStorage = require('@react-native-async-storage/async-storage').default;
	storage = {
		setItem: (key, value) => {
			return AsyncStorage.setItem(key, value);
		},
		getItem: (key) => {
			return AsyncStorage.getItem(key);
		},
		removeItem: (key) => {
			return AsyncStorage.removeItem(key);
		},
	};
} else {
	const mmkv = new MMKV();

	storage = {
		setItem: (key, value) => {
			mmkv.set(key, value);
			return Promise.resolve(true);
		},
		getItem: (key) => {
			const value = mmkv.getString(key);
			return Promise.resolve(value);
		},
		removeItem: (key) => {
			mmkv.delete(key);
			return Promise.resolve(true);
		},
	};
}
