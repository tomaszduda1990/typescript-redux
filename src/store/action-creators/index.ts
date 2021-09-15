import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../actions/action-types';
import { Action } from '../actions';

export const searchRepositories =
	(term: string) => async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES,
		});
		try {
			const { data } = await axios.get(
				'https://registry.npmjs.org/-/v1/search',
				{
					params: {
						text: term,
					},
				}
			);
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
				payload: data.objects.map((result: any) => {
					return result.package.name;
				}),
			});
		} catch (error: any) {
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_ERROR,
				payload: error.message,
			});
		}
	};
