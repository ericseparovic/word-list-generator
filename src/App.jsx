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
			<h1 className='text-4xl p-10 text-white font-bold'>
				Word List Generator
			</h1>
			<form action='' className='mt-28'>
				<div>
					<textarea
						className='w-full  max-w-md p-5  max-h-44'
						name=''
						id=''
						onChange={(e) => setText(e.target.value)}
						value={text}></textarea>
				</div>
				<div>
					<button
						className='text-white bg-sky-700 rounded px-4 py-2'
						onClick={createFile}>
						Create
					</button>
				</div>
			</form>
		</div>
	);
}

export default App;
