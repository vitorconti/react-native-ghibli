import { IFilms } from '../interfaces/films'

export const getFilms = async (): Promise<IFilms[]> => {
	try {
		const response = await fetch('https://ghibliapi.herokuapp.com/films')
		return await response.json()
	} catch (error) {
		throw error
	}
}
