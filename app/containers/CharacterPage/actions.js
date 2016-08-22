import {
	CHARACTER_CHANGE,
	CHARACTER_LOAD,
	CHARACTER_LOAD_SUCCESS,
} from './constants'

/**
 * Changes the active character
 *
 * @param  {name} name The new text of the input field
 * @return {object}    An action object with a type of CHARACTER_CHANGE
 */
export function changeCharacter(name) {
	return {
		type: CHARACTER_CHANGE,
		name,
	}
}

/**
 * Load all of the character data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadCharacters() {
	return {
		type: CHARACTER_LOAD,
	}
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The character data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS
 * passing the character data
 */
export function charactersLoaded(characters) {
	return {
		type: CHARACTER_LOAD_SUCCESS,
		characterData: characters,
	}
}
