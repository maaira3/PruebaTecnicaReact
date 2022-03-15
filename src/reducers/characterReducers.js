import { getCharacters, filterCharacter } from "../services/CharactersServices"

export const characterReducers = (state = [], action) => {
    switch (action.type) {
        case '@characters/set':
            return action.payload
        default:
            return state
    }
}

export const setCharacters = () => {
    return async(dispatch) => {
        const characters = await getCharacters()
    //action
        dispatch({
            type: '@characters/set',
            payload: characters
        })
    }
}



/*export const setFilter = filter => {
    return {
      type: "@characters/filter-name",
      payload: characters
    };
  };*/