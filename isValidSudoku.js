var isValidSudoku = function(board) {
    let l = board[0].length;
    
    const notInRow = (row) => {
        const st = new Set();
        for(let i = 0; i < l; i++) {
            if(st.has(board[row][i]))
                return false;
            if(board[row][i] !== ".")
                st.add(board[row][i]);
        }
    }
    const notInCol = (col) => {
        const st = new Set();
        for(let i = 0; i < l; i++) {
            if(st.has(board[i][col]))
                return false;
            if(board[i][col] !== ".")
                st.add(board[i][col]);
        }
    }
    const notInBlock = (row, col) => {
        const st = new Set();
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                const curr = board[row + i][col + j];
                if (st.has(curr))
                    return false;
                if (curr !== ".")
                    st.add(curr);
            }
        }
    }
    
    for(let i = 0; i < l; i++) {
        for(let j = 0; j < l; j++) {
            if (!(notInRow(i) && notInCol(j) && notInBlock(i - i % 3, j - j % 3)))
                return false;
        }
    }
};

isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
);

