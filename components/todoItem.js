import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TodoItem = ({ item, pressHandler }) => {
	return (
		<TouchableOpacity onPress={() => pressHandler(item.key)}>
			<View style={styles.item}>
				<MaterialCommunityIcons name='delete' size={24} color='black' />
				<Text style={styles.itemText}>{item.text}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 16,
		borderColor: '#bbb',
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: 10,
		flexDirection: 'row',
	},
	itemText: {
		marginLeft: 10,
	},
});

export default TodoItem;
