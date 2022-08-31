function play(array) {
    let board = [[false, false, false],
    [false, false, false],
    [false, false, false]]
    let spaces = 9;
    let turn = 1;
    let end=false;


    for (let index = 0; index < array.length; index++) {
        if(end){
            break;
        }

        let field = array[index].split(' ');

        if (spaces === 0) {
            console.log('The game ended! Nobody wins :(');
            end=true;
            break;
        }

        if (board[field[0]][field[1]] !== false) {
            console.log('This place is already taken. Please choose another!');
            
        } else {
            if (turn % 2 === 1) {
                board[field[0]] [field[1]] = 'X';
                turn++;
                spaces--;
            } else {
                board[field[0]][field[1]] = 'O';
                spaces--;
                turn++;
            }
        
            for (let i = 0; i < 3; i++) {
                if (board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] !== false) {
                    if ((turn) % 2 === 1) {
                        console.log('Player O wins!');
                         end=true;
                        break;
                    } else {
                        console.log('Player X wins!');
                         end=true;
                        break;
                    }
                }

                if (board[0][i] == board[1][i] && board[0][i] == board[2][i] && board[0][i] !== false) {
                    if (turn % 2 === 1) {
                        console.log('Player O wins!');
                        end=true;
                        break;
                    } else {
                        console.log('Player X wins!');
                       end=true;
                        break;
                    }
                }

                if ((board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] !== false) || (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] !== false)) {
                    if (turn % 2 === 1) {
                        console.log('Player O wins!');
                      end=true;
                        break;
                    } else {
                        console.log('Player X wins!');
                         end=true;
                        break;
                    }
                }
            }
        }
    }
     console.log(board[0].join('\t'));
     console.log(board[1].join('\t'));
     console.log(board[2].join('\t'));
}
   play(["0 1",
   "0 0",
   "0 2",
   "2 0",
   "1 0",
   "1 2",
   "1 1",
   "2 1",
   "2 2",
   "0 0"]
  )