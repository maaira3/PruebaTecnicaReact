import { getEpisodes } from "../services/EpisodesServices"

export const episodesReducers = (state = [], action) => {
    switch (action.type) {
        case '@episodes/set':
            return action.payload
        default:
            return state
    }
}

export const setEpisodes = () => {
    return async(dispatch) => {
        const episodes = await getEpisodes()
    //action
        dispatch({
            type: '@episodes/set',
            payload: episodes
        })
    }
}

