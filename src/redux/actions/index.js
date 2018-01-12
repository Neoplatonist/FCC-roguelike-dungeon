/**
 * action types
**/
export const CREATE_CELLS = 'CREATE_CELLS'


/**
 * action creators
**/
export function createCells(row, col) {
  return dispatch => {
    let board = []

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        board.push([i, j])
      }
    }

    let cycles = new Array(board.length)
      .fill(0)

    dispatch({
      type: CREATE_CELLS,
      board: board,
      cycles: cycles
    })
  }
}