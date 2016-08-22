/**
 *
 * CharacterBio
 *
 */

import React from 'react'
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap'

import { FormattedMessage } from 'react-intl'
import messages from './messages'

import styles from './styles.css'

function CharacterBio(props) {
	const bio = props.bioData
	return (
		<Grid className={styles.characterBio}>
			<Jumbotron>
				<h2><FormattedMessage {...messages.header} /></h2>
			</Jumbotron>
			<h2 className={styles.characterTitle}>{bio.name}</h2>
			<Row>
				<Col md={2}><FormattedMessage {...messages.birthYear} />:</Col>
				<Col md="2">{bio.birth_year}</Col>
			</Row>
		</Grid>
	)
}

CharacterBio.propTypes = {
	bioData: React.PropTypes.object,
}

export default CharacterBio
