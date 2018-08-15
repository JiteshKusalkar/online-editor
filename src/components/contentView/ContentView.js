import React from 'react';
import { droppable } from "../../hoc/dnd";
import FileView from '../fileView/FileView';
import './content-view.scss';

export default droppable((props) => {
	return (
		<div className="content-view">
			<FileView content={props.content}></FileView>
    	</div>
	)
})