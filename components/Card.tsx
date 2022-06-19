import { useState } from 'react'
import { Image, Text, View, StyleSheet, Pressable } from 'react-native'
import ModalDetailFilm from './ModalDetailFilm'

interface ICardProps {
	title: string
	urlImg: string
	filmId: string
}

export const Card: React.FC<ICardProps> = ({ title, urlImg, filmId }) => {
	const [isVisible, setIsVisible] = useState(false)

	function handleModalVisible() {
		setIsVisible(!isVisible)
	}
	return (
		<Pressable onPress={handleModalVisible} android_ripple={{ color: '#ADA9BA' }}>
			<View style={styles.cardContainer}>
				<Text style={styles.title}>{title}</Text>
				<Image
					style={styles.imgCard}
					source={{
						uri: urlImg,
					}}
				/>
			</View>
			<ModalDetailFilm isVisible={isVisible} closeModal={handleModalVisible} filmId={filmId} />
		</Pressable>
	)
}
const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 8,
	},
	title: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '700',
	},
	imgCard: {
		width: 300,
		height: 350,
	},
})
