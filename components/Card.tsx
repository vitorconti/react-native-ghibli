import { Image, Text, View, StyleSheet } from 'react-native'

interface ICardProps {
	title: string
	urlImg: string
}

export const Card: React.FC<ICardProps> = ({ title, urlImg }) => {
	return (
		<View>
			<Text>{title}</Text>
			<Image
				style={{ width: 150, height: 150 }}
				source={{
					uri: urlImg,
				}}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	ajeitar: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
})
import React from 'react'
