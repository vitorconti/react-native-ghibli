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
	}, [])

	return (
		<Modal visible={isVisible} animationType='fade'>
			<View style={styles.modalConteiner}>
				<Pressable style={styles.backButton} onPress={closeModal}>
					<Text style={styles.textButton}>{'<'}</Text>
				</Pressable>
				<Image
					style={styles.bannerFilm}
					source={{
						uri: filmDetail?.movie_banner,
					}}
				/>
				<Text>{filmDetail?.description}</Text>
			</View>
		</Modal>
	)
}

export default ModalDetailFilm

const styles = StyleSheet.create({
	modalConteiner: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	backButton: {
		backgroundColor: '#4E3064',
		alignItems: 'center',
		width: '100%',
	},
	textButton: {
		fontSize: 40,
		color: '#fff',
	},
	bannerFilm: {
		width: 100,
		height: 300,
	},
})
