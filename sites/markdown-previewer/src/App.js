import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';

import './App.scss';

function App() {

	const [markdownValue, setMarkdownValue] = useState('');

	const handleValueChange = (e) => {
		setMarkdownValue(e.target.value);
	}

	const maximizeWindow = (e) => {
		document.getElementsByTagName('textarea')[0].classList.toggle('maximize');
	}

  return (
		<div className="App">
			<div id="markdown-box">
				<div className='header' id="markdown-header">
					<h2>Markdown Editor</h2>
					<div id="maximize-wrapper" onClick={maximizeWindow}>
						<FontAwesomeIcon icon={faMaximize} size="lg"/>
					</div>
				</div>
				<textarea placeholder='Write here...' onChange={handleValueChange} ></textarea>
			</div>
			<div id="preview-box">
				<div className="header" id="preview-header">
					<h2>Preview</h2>
					<div id="maximize-wrapper" onClick={maximizeWindow}>
						<FontAwesomeIcon icon={faMaximize} size="lg"/>
					</div>
				</div>
				<div id="preview-content">
					<ReactMarkdown children={markdownValue} />
				</div>
			</div>
		</div>
  );
}

export default App;
