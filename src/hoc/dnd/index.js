import React from 'react';
import draggable from './draggable';
import droppable from './droppable';

const DND = props => {
	return (
		<div draggable={props.draggable} onDragStart={props.onDragStart} onDrop={props.onDrop} onDragOver={props.onDragOver} >
			{props.children}
		</div>
	)
}

export { DND, draggable, droppable };