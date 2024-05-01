//task7.js
//todo: Из предыдущего задания (task6) сгенерируйте динамически шахматное поле из массива в HTML 
// и раставьте шахматы в соответсвующем порядке.

// Решение  -------------------------------------------------

// Создание двумерного массива для шахматной доски
    const board = [
      ['', '', '', 'black queen', '', '', '', 'white king'],
      ['', '', '', '', '', 'black rook', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ];

    // Получение ссылки на элемент шахматной доски
    const chessboard = document.getElementById('chessboard');

    // Создание шахматной доски
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        // Создание ячейки
        const cell = document.createElement('div');

        // Определение цвета ячейки
        const color = (i + j) % 2 == 0 ? "black-square" : "white-square";
        cell.classList.add(color);

        // Добавление фигуры в ячейку
        const piece = board[i][j];
        if (piece) {
          const pieceElement = document.createElement('div');
          pieceElement.classList.add('piece');
          pieceElement.classList.add(piece.indexOf('black') !== -1 ? 'black-piece' : 'white-piece');
          pieceElement.textContent = piece;
          cell.appendChild(pieceElement);
        }

        // Добавление ячейки на шахматную доску
        chessboard.appendChild(cell);
      }
    }
  
