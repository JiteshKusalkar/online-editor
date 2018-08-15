export const TOGGLE = 'TOGGLE';
export const COLLAPSE_ALL = 'COLLAPSE_ALL';
export const OPEN_FILE = 'OPEN_FILE';

export const getToggleEvent = (payload) => ({ type: TOGGLE, payload });
export const getCollapseAllEvent = () => ({ type: COLLAPSE_ALL });
export const getOpenFileEvent = (payload) => ({ type: OPEN_FILE, payload });
