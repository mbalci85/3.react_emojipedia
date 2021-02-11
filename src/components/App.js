import React from 'react';
import emojipedia from './emojipedia';
import Entry from './Entry';
import '../styles.css';

function App() {
	console.log(emojipedia);
	return (
		<div>
			<h1>EMOJIPEDIA</h1>
			{emojipedia.map((emoji) => (
				<div className="dictionary" key={emoji.id}>
					<Entry
						emoji={emoji.emoji}
						name={emoji.name}
						meaning={emoji.meaning}
					/>
				</div>
			))}
		</div>
	);
}

export default App;
