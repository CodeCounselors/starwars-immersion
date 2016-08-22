import { createSelector } from 'reselect'

/**
 * Direct selector to the characterPage state domain
 */
const selectCharacterPageDomain = () => state => state.get('characterPage')

/**
 * Other specific selectors
 */
const selectCharacterResource = () => createSelector(
	selectCharacterPageDomain(),
	(localState) => localState.get('selectedCharacter')
)

const selectAllCharacters = () => createSelector(
	selectCharacterPageDomain(),
	(localState) => localState.getIn(['characterData', 'characters'])
)

const selectCurrentCharacter = () => createSelector(
	selectCharacterPageDomain(),
	(localState) => localState.getIn(['characterData', 'current'])
)

/**
 * Default selector used by CharacterPage
 */

const selectCharacterPage = () => createSelector(
	selectCharacterPageDomain(),
	(substate) => substate.toJS()
)

export {
	selectCharacterPage,
	selectCharacterResource,
	selectAllCharacters,
	selectCurrentCharacter,
}
