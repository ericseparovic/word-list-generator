import { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

function App() {
	const [text, setText] = useState('');
	const [words, setWords] = useState([]);

	// Create array
	const convertToArray = () => {
		const cleanedText = text.replace(/[^A-Za-z']/g, ' ');
		const words = cleanedText.split(' ');
		const uniqueWords = [...new Set(words)];

		const allWords = uniqueWords.filter((element) => element !== '');

		setWords(allWords);
	};

	// It is responsible for creating the file
	const createFile = () => {
		let text = '';
		words.forEach((word) => {
			text += `${word} \n`;
		});
		const blob = new Blob([text], { type: 'text/plain;carhset=utf-8' });
		saveAs(blob, 'words.txt');
	};

	useEffect(() => {
		convertToArray();
	}, [text]);

	return (
		<div>
			<h1>Word List Generator</h1>
			<form action=''>
				<textarea
					name=''
					id=''
					cols='30'
					rows='10'
					onChange={(e) => setText(e.target.value)}
					value={text}></textarea>
				<button type='button' onClick={createFile}>
					Create
				</button>
			</form>
		</div>
	);
}

export default App;
