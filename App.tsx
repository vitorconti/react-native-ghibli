import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { Card } from './components/Card'
import { IFilms } from './interfaces/films'
import { getFilms } from './services/loadData'

export default function App() {
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
