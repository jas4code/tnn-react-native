import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.titletText}>Home Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
	},
	titletText: {
		fontFamily: 'nunito-bold',
		fontSize: 18,
	},
});
