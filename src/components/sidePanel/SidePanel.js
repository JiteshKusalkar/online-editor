import React from 'react';
import './side-panel.scss';

export default (props) => {
	return (
		<div className="side-panel">
			{props.children}
		</div>
	)
}