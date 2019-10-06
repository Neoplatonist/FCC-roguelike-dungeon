import { 
  CREATE_CELLS,
} from '../actions'

/**
 * State Initializers
**/
export const golState = {

}

// Things todo

// Create FPS
// Create Filter
//  - underpopulation
//  - overpopulation
//  - reproduction

/**
 * Reducers
**/
export default function gol(state = golState, action) {
  switch (action.type) {
    case CREATE_CELLS:
      return Object.assign({}, state, {
        
      })

  default:
    return state
  }
}
