/*
 *
 * CharacterPage
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import CharacterBio from 'components/CharacterBio'

import selectCharacterPage from './selectors'
// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import styles from './styles.css'

import bio from 'data/LukeSkywalker.json'

export class CharacterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function


	render() {
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
				<CharacterBio bioData={bio}/>
			</div>
		)
	}
}

const mapStateToProps = selectCharacterPage()

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage)
