function Create2DArray(rows) {
    var arr = [];

    for (var i = 0; i < rows; i++) {
        arr[i] = [];
    }

    return arr;
}

var board = Create2DArray(10);

function nQueens(row, n) {
    for (var i = 0; i < n; i++) {
        if (queenSafe(row, i)) {
            board[row][i] = 1;

            if (row == n) {
                console.log(board);
            } else {
                nQueens(row + 1, n);
            }
        }
    }

}

function queenSafe(row, col) {
    for (var i = 0; i < col; i++) {
        if (board[i][col] == 1) {
            return false;
        }
    }

    var k = (row < col ? row : col) - 1; // minimum of row and column - 1

    for (var i = row - k, j = col - k; i < row && j < col; i++, j++) {
        if (board[i][j] == 1) {
            return false;
        }
    }

    for (var i = row - k, j = col + k; i < row && j > col; i++, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }

    return true;
}


nQueens(0, 10);