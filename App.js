import React from 'react';
// import Home from './screens/home';
import { useFonts } from 'expo-font';
import Navigator from './routes/navigator';

export default function App() {
	const [fontsLoaded] = useFonts({
		'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
		'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
	});

	if (!fontsLoaded) {
		// You can render a loading screen or fallback while fonts are loading
		return null;
	} else {
		return <Navigator />;
	}
}
