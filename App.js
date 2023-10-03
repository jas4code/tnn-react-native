import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#efefef',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
