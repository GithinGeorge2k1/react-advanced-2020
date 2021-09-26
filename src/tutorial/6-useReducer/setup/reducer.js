export const reducer = (state, action) => {
	// Note that action is of the type specified by dispatcher
	// console.log(state, action);
	// Consider this like a switch case
	if (action.type === 'ADD_ITEM') {
		const newPeople = [...state.people, action.payload];
		return {
			...state,
			people: newPeople,
			isModelOpen: true,
			modalContent: 'item added',
		};
	}
	if (action.type === 'NO_VALUE') {
		return { ...state, isModelOpen: true, modalContent: 'Please Enter Value' };
	}
	if (action.type === 'CLOSE_MODAL') {
		return { ...state, isModelOpen: false };
	}
	if (action.type === 'REMOVE_ITEM') {
		const newPeople = state.people.filter(person => {
			return person.id !== action.payload;
		});
		return { ...state, people: newPeople };
	}
	throw new Error('no matching action type');
};
