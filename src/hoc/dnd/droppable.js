import React from 'react';

export default WrappedComponent => props => {
	return (
		<div className={props.classes} onDrop={props.onDrop} onDragOver={props.onDragOver} >
			<WrappedComponent {...props}></WrappedComponent>
		</div>
	)
}