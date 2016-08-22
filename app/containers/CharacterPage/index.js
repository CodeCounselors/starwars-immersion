/*
 *
 * CharacterPage
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'

import CharacterBio from 'components/CharacterBio'
import CharacterSelector from 'components/CharacterSelector'

import selectCharacterPage from './selectors'
// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import styles from './styles.css'

import { changeCharacter, loadCharacters } from './actions'
import { selectCharacterResource, selectCurrentCharacter, selectAllCharacters } from './selectors'

// import bio from 'data/LukeSkywalker.json'

export class CharacterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

	/**
	 * when initial state username is not null, submit the form to load repos
	 */
	componentDidMount() {
		if (!this.props.allCharacters) {
			this.props.onRefreshData()
		}
	}

	render() {

		let options = []
		if (this.props.allCharacters) {
			options = this.props.allCharacters.map(c => {
				return { value: c.url, label: c.name }
			})
		}

		return (
			<div className={styles.characterPage}>
				<Helmet
					title="Star Wars - Character Page"
					meta={[
						{
							name: 'description',
							content: 'Description of CharacterPage',
						},
					]}
				/>
				<CharacterSelector options={options} onChangeCharacter={this.props.onChangeCharacter} selectedResource={this.props.currentCharacterResource} />
				<CharacterBio bioData={this.props.characterData}/>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	allCharacters: selectAllCharacters(),
	characterData: selectCurrentCharacter(),
	currentCharacterResource: selectCharacterResource(),
})

function mapDispatchToProps(dispatch) {
	return {
		onChangeCharacter: (option) => dispatch(changeCharacter(option.value)),
		onRefreshData: () => dispatch(loadCharacters()),
		dispatch,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage)

