/**
 *
 * CharacterSelector
 *
 */

import React from 'react'
import Select from 'react-select'

import { FormattedMessage } from 'react-intl'
import messages from './messages'
import styles from './styles.css'
import stylesselect from 'react-select/dist/react-select.css'

class CharacterSelector extends React.Component { // eslint-disable-line react/prefer-stateless-function

	render() {
		return (
			<div className={styles.characterSelector}>
				<label>Select a Character:</label>
				<Select options={this.props.options} onChange={this.props.onChangeCharacter} value={this.props.selectedResource} />
			</div>
		)
	}
}

// Wrap the component to inject dispatch and state into it
export default CharacterSelector
