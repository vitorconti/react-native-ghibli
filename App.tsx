import { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { Card } from './components/Card'
import { IFilms } from './interfaces/films'
import { getFilms } from './services/loadData'

export default function App() {
	const [films, setFilms] = useState<IFilms[]>([])
	const loadTeste = async () => {
		const teste = await getFilms()
		console.log(teste)
	}
	useEffect(() => {
		;(async function () {
			const responseFilms = await getFilms()
			setFilms(responseFilms)
		})()
	}, [])
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				{films.map((film: IFilms) => {
					return (
						<View key={film.id} style={styles.ajeitar}>
							<Card title={film.title} urlImg={film.image} />
						</View>
					)
				})}
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	ajeitar: {
		marginVertical: 10,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	scrollView: {
		backgroundColor: 'pink',
	},
})
