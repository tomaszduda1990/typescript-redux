import React from 'react';
import { Provider } from 'react-redux';
import RepositoriesList from './RepositoriesList';
import { store } from '../store';

function App() {
	return (
		<Provider store={store}>
			<h1 className='App'>Search for the package!</h1>
			<RepositoriesList />
		</Provider>
	);
}

export default App;
