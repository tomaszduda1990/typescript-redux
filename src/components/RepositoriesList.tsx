import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypesSelector';

const RepositoriesList: React.FC = () => {
	const [term, setTerm] = useState<string>('');
	const { searchRepositories } = useActions();
	const { data, error, loading } = useTypedSelector(
		(state) => state.repositories
	);
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTerm(event.currentTarget.value);
	};
	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		searchRepositories(term);
	};
	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<input
					onChange={onChangeHandler}
					type='text'
					value={term}
					name='term'
				/>
				<button>Search</button>
			</form>

			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					{error ? (
						<p>{error}</p>
					) : (
						<>
							{data.length === 0 ? (
								<p>repos not found</p>
							) : (
								<>
									{data.map((d) => (
										<p key={d}>Repo name: {d}</p>
									))}
								</>
							)}
						</>
					)}
				</>
			)}
		</div>
	);
};

export default RepositoriesList;
