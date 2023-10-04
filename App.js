import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>This is lesson3</Text>
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
