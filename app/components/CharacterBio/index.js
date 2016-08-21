/**
 *
 * CharacterBio
 *
 */

import React from 'react'

import { FormattedMessage } from 'react-intl'
import messages from './messages'

import styles from './styles.css'

function CharacterBio(props) {
	const bio = props.bioData
	return (
		<div className={styles.characterBio}>
			<h1>
				<FormattedMessage {...messages.header} />
			</h1>
			<h2 className={styles.characterTitle}>{bio.name}</h2>
			<div className="row">
				<div><FormattedMessage {...messages.birthYear} />:</div>
				<div>{bio.birth_year}</div>
			</div>
		</div>
	)
}

CharacterBio.propTypes = {
	bioData: React.PropTypes.object,
}

export default CharacterBio
