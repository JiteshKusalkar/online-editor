import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getToggleEvent, getCollapseAllEvent, getOpenFileEvent } from './util/actions';
import SidePanel from "./components/sidePanel/SidePanel";
import ContentView from "./components/contentView/ContentView";
import Directory from './components/directory/Directory';

class App extends Component {
	onDrop = (e) => {
		e.preventDefault();
		console.log(e.dataTransfer.getData('data'));
		this.props.openFile({ name: e.dataTransfer.getData('data') });
	}

	onDragOver = (e) => {
		e.preventDefault();
	}

	render() {
		return (
			<div className="App">
				<SidePanel>
					<button onClick={this.props.collapseAll}>Collapse All</button>
					<Directory open={this.props.openFile} toggle={this.props.toggle} fileDirectory={this.props.fileDirectory}></Directory>
				</SidePanel>
				<ContentView content={this.props.fileContent} classes="file-view-wrapper" onDrop={this.onDrop} onDragOver={this.onDragOver}></ContentView>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { fileDirectory, fileContent } = state;
	return {
		fileDirectory,
		fileContent
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggle: (payload) => dispatch(getToggleEvent(payload)),
		collapseAll: () => dispatch(getCollapseAllEvent()),
		openFile: (payload) => {
			axios.get(`mocks/${payload.name}.json`).then(res => {
				dispatch(getOpenFileEvent(res.data))
			}).catch(err => {
				console.log(err);
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
