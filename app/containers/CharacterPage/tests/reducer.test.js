import expect from 'expect'
import characterPageReducer from '../reducer'
import { fromJS } from 'immutable'

describe('characterPageReducer', () => {
	it('returns the initial state', () => {
		expect(characterPageReducer(undefined, {})).toEqual(fromJS({}))
	})
})
