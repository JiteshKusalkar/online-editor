import React from 'react';
import { DND } from '../../hoc/dnd';
import './directory.scss';

const onDragStart = (e, data) => {
	e.dataTransfer.setData('data', data);
}

const getDirectoryTree = (directory, toggle, open) => {
	return directory.map((content, contentKey) => {
		if (content.type === 'folder') {
			return (
				<div key={contentKey} >
					<i className="fa fa-folder-o" aria-hidden="true"></i><span onClick={() => toggle(content)} className="folder">{content.name}</span>
					{content.children && content.children.length && content.expand ?
						<ul>
							{getDirectoryTree(content.children, toggle, open)}
						</ul>
						: null}
				</div>
			);
		} else {
			return (
				<li key={contentKey}>
					<DND draggable="true" onDragOver={null} onDragStart={(e) => onDragStart(e, content.name)}>
						<i className="fa fa-file-code-o" aria-hidden="true"></i><span onClick={() => open(content)} className="file">{content.name}</span>
					</DND>
				</li>
			);
		}
	})
}

export default (props) => {
	return (
		<div className="directory">
			{getDirectoryTree(props.fileDirectory, props.toggle, props.open)}
		</div>
	)
}