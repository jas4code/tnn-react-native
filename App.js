import React from 'react';
import Home from './screens/home';
import { useFonts } from 'expo-font';

export default function App() {
	const [fontsLoaded] = useFonts({
		'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
		'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	} else {
		// You can render a loading screen or fallback while fonts are loading
		return <Home />;
	}
}
