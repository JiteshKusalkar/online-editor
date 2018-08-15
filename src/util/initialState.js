const fileDirectory = [{
	type: 'folder',
    name: 'src',
    expand: false,
    id: 123,
	children: [{
		type: 'folder',
        name: 'components',
        expand: false,
        id: 234,
		children: [{
			type: 'folder',
            name: 'directory',
            expand: false,
            id: 345,
			children: [{
				type: 'file',
				name: 'Directory.js'
			}, {
				type: 'file',
				name: 'directory.scss'
			}]
		}]
	}, {
		type: 'file',
		name: 'index.js'
	}, {
		type: 'file',
		name: 'index.html'
	}]
}];

const fileContent = [];

export {
	fileDirectory,
	fileContent
}