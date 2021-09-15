import { Action } from '../actions/index';
import { ActionType } from '../actions/action-types/index';
interface RepositoriesState {
	data: string[];
	error: string | null;
	loading: boolean;
}

const initialStore = {
	data: [],
	error: null,
	loading: true,
};

const reducer = (
	store: RepositoriesState = initialStore,
	action: Action
): RepositoriesState => {
	switch (action.type) {
		case ActionType.SEARCH_REPOSITORIES:
			return { data: [], loading: true, error: null };
		case ActionType.SEARCH_REPOSITORIES_SUCCESS:
			return { data: action.payload, loading: false, error: null };
		case ActionType.SEARCH_REPOSITORIES_ERROR:
			return { data: [], error: action.payload, loading: false };
		default:
			return store;
	}
};

export default reducer;
