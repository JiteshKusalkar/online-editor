import React from 'react';

export default WrappedComponent => props => {
	return (
		<div draggable="true" onDragStart={props.onDragStart}>
			<WrappedComponent {...props}></WrappedComponent>
		</div>
	)
}