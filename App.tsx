import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { Card } from './components/Card'
import { IFilms } from './interfaces/films'
import { getFilms } from './services/loadData'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
export default function App() {
	const [fonteCarregada] = useFonts({
		MontserratRegular: Montserrat_400Regular,
		MontserratBold: Montserrat_700Bold,
	})
	const [films, setFilms] = useState<IFilms[]>([])
	useEffect(() => {
		;(async function () {
			const responseFilms = await getFilms()
			setFilms(responseFilms)
		})()
	}, [])
	return (
		<>
			<StatusBar />
			<View style={styles.appContainer}>
				<FlatList
					data={films}
					keyExtractor={(film) => film.id}
					renderItem={(itemData) => {
						return <Card filmId={itemData.item.id} title={itemData.item.title} urlImg={itemData.item.image} />
					}}
				/>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		padding: 8,
	},
})
