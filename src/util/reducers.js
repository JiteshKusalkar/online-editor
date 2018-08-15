import * as initialState from './initialState';
import * as actions from './actions';

const toggleFolderExpansion = (list, id) => {
	return list.map(e => {
		if (e.expand) {
			e.children = toggleFolderExpansion(e.children, id);
		}
		if (e.id === id) {
			e.expand = !e.expand;
		}
		return e;
	});
}

const resetFileDirectory = (list) => {
	return list.map(e => {
		e.expand = false;
		e.children = e.children && e.children.length ? resetFileDirectory(e.children) : e.children;
		return e;
	});
}

const fileDirectory = (state = initialState.fileDirectory, action) => {
	switch (action.type) {
		case actions.TOGGLE: return toggleFolderExpansion(state, action.payload.id);
		case actions.COLLAPSE_ALL: return resetFileDirectory(state);
		default: return state;
	}
}

const fileContent = (state = initialState.fileContent, action) => {
	switch(action.type) {
		case actions.OPEN_FILE: return state.concat(action.payload);
		default: return state;
	}
}

export {
	fileDirectory,
	fileContent
}