import request from 'utils/request'
import { take, call, put, fork, cancel } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

import { CHARACTER_LOAD, CHARACTER_LOAD_SUCCESS } from './constants'
import { loadCharacters, charactersLoaded } from './actions'

/**
 * SWAPI character (people) request/response handler
 */
export function* getCharacters() {
	const requestURL = 'http://swapi.co/api/people/'
	const characters = yield call(request, requestURL)

	if (!characters.err) {
		yield put(charactersLoaded(characters.data.results))
	} else {
		console.log(characters.err)
		// yield put(repoLoadingError(repos.err))
	}
}

/**
 * Watches for CHARACTER_LOAD action and calls handler
 */
export function* getCharactersWatcher() {
	while (yield take(CHARACTER_LOAD)) {
		yield call(getCharacters)
	}
}

/**
 * Root saga manages watcher lifecycle
 */
export function* characterData() {
	// Fork watcher so we can continue execution
	const watcher = yield fork(getCharactersWatcher)

	// Suspend execution until location changes
	yield take(LOCATION_CHANGE)
	yield cancel(watcher)
}

// Bootstrap sagas
export default [
	characterData,
]
