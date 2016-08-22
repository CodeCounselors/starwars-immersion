import {
	CHARACTER_CHANGE,
	CHARACTER_LOAD_SUCCESS,
} from './constants'

import { fromJS } from 'immutable'

// import { selectAllCharacters } from './selectors'
// import { createStructuredSelector } from 'reselect'

// The initial state of the App
const initialState = fromJS({
	selectedCharacter: undefined,
	characterData: {
		current: {},
		characters: undefined,
	},
})

function setSelectedCharacter(state, characterKey) {
	//TODO: Should a selector be used here? How to make that work?
	const characters = state.getIn(['characterData', 'characters'])
	const selectedCharacter = characters.find(c => c.url === characterKey)
	state.setIn(['characterData', 'current'], selectedCharacter)
}

function characterReducer(state = initialState, action) {
	switch (action.type) {

		case CHARACTER_CHANGE:
			setSelectedCharacter(state, action.name)
			return state.set('selectedCharacter', action.name)

		case CHARACTER_LOAD_SUCCESS:
			return state
				.setIn(['characterData', 'characters'], action.characterData)
		// .set('loading', false)

		default:
			return state
	}
}

export default characterReducer
