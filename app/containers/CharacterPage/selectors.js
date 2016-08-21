import { createSelector } from 'reselect'

/**
 * Direct selector to the characterPage state domain
 */
const selectCharacterPageDomain = () => state => state.get('characterPage')

/**
 * Other specific selectors
 */


/**
 * Default selector used by CharacterPage
 */

const selectCharacterPage = () => createSelector(
	selectCharacterPageDomain(),
	(substate) => substate.toJS()
)

export default selectCharacterPage
export {
	selectCharacterPageDomain,
}
