import { IFilmDetail } from '../interfaces/filmDetail'
import { IFilms } from '../interfaces/films'

export const getFilms = async (): Promise<IFilms[]> => {
	try {
		const response = await fetch('https://ghibliapi.herokuapp.com/films')
		return await response.json()
	} catch (error) {
		throw error
	}
}
export const getFilmById = async (filmId: string): Promise<IFilmDetail> => {
	try {
		console.log(filmId)
		const response = await fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`)
		return await response.json()
	} catch (error) {
		throw error
	}
}
