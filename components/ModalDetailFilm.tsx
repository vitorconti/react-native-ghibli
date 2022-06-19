import { useEffect, useState } from 'react'
import { Button, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { IFilmDetail } from '../interfaces/filmDetail'
import { getFilmById } from '../services/loadData'

const ModalDetailFilm: React.FC<any> = ({ isVisible, closeModal, filmId }: { isVisible: boolean; closeModal: () => void; filmId: string }) => {
	const [filmDetail, setFilmDetail] = useState<IFilmDetail>()
	useEffect(() => {
		;(async function () {
			const responseFilmDetail = await getFilmById(filmId)
			setFilmDetail(responseFilmDetail)
		})()
	}, [filmId])
	function getStarRate(rate: string | undefined) {
		const parse = parseInt(rate!)
		const ratingArray = ['★★', '★★★', '★★★★', '★★★★★']
		if (parse <= 15) {
			return ratingArray[0]
		} else if (parse > 15 && parse < 40) {
			return ratingArray[1]
		} else if (parse > 40 && parse <= 94) {
			return ratingArray[2]
		} else {
			return ratingArray[3]
		}
	}
	return (
		<Modal visible={isVisible} animationType='fade'>
			<View style={styles.modalConteiner}>
				<Pressable style={styles.backButton} onPress={closeModal}>
					<Text style={styles.textButton}>{'<'}</Text>
				</Pressable>
				<Text style={styles.filmTitle}>{filmDetail?.title}</Text>
				<Image
					style={styles.bannerFilm}
					source={{
						uri: filmDetail?.movie_banner,
					}}
				/>
				<View style={styles.detailsContainer}>
					<Text style={styles.filmDescription}>{filmDetail?.description}</Text>
					<Text style={styles.rate}>{getStarRate(filmDetail?.rt_score)}</Text>
				</View>
			</View>
		</Modal>
	)
}

export default ModalDetailFilm

const styles = StyleSheet.create({
	modalConteiner: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#01243a',
	},
	detailsContainer: {
		alignItems: 'center',
	},
	backButton: {
		backgroundColor: '#012e4a',
		alignItems: 'center',
		width: '100%',
	},
	textButton: {
		fontSize: 60,
		color: '#fff',
	},
	bannerFilm: {
		width: '100%',
		height: 300,
	},
	filmTitle: {
		marginVertical: 8,
		fontSize: 24,
		fontWeight: '700',
		color: '#e2d3ed',
		textAlign: 'center',
	},
	filmDescription: {
		textAlign: 'justify',
		fontSize: 18,
		fontFamily: 'MontserratRegular',
		marginHorizontal: 8,
		color: '#cccccc',
	},
	rate: {
		fontSize: 40,
		color: '#dec507',
	},
})
