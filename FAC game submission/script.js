const grid = [
  ['G', 'U', 'N', 'D', 'A', 'M', 'R', 'I', 'P', 'T'],
  ['S', 'X', 'I', 'S', 'L', 'U', 'A', 'N', 'G', 'O'],
  ['C', 'T', 'S', 'O', 'M', 'I', 'D', 'A', 'T', 'K'],
  ['R', 'T', 'I', 'A', 'C', 'K', 'E', 'N', 'D', 'N'],
  ['Y', 'O', 'R', 'C', 'L', 'E', 'M', 'N', 'B', 'U'],
  ['P', 'G', 'T', 'H', 'K', 'N', 'F', 'R', 'O', 'D'],
  ['T', 'N', 'E', 'A', 'C', 'E', 'M', 'D', 'L', 'M'],
  ['L', 'A', 'P', 'T', 'O', 'P', 'R', 'S', 'H', 'A'],
  ['O', 'M', 'V', 'U', 'E', 'J', 'S', 'J', 'O', 'L'],
  ['C', 'H', 'O', 'R', 'I', 'Z', 'O', 'A', 'M', 'S']
];

const wordsToFind = ['GUNDAM', 'STICKER', 'LAPTOP', 'CHORIZO', 'MIDA', 'SLAMDUNK'];

document.addEventListener('DOMContentLoaded', () => {
  const gridElement = document.getElementById('word-grid');
  const wordsListElement = document.getElementById('words-to-find');

  grid.forEach(row => {
    row.forEach(letter => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = letter;
      gridElement.appendChild(cell);
    });
  });

  wordsToFind.forEach(word => {
    const listItem = document.createElement('li');
    listItem.textContent = word;
    wordsListElement.appendChild(listItem);
  });

  let selectedCells = [];
  gridElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('cell')) {
      event.target.classList.toggle('selected');
      selectedCells.push(event.target.textContent);
      checkSelection(selectedCells.join(''));
    }
  });

  function checkSelection(selectedWord) {
    if (wordsToFind.includes(selectedWord)) {
      alert(`You found the word: ${selectedWord}!`);
      document.querySelectorAll('.selected').forEach(cell => {
        cell.classList.remove('selected');
        cell.style.backgroundColor = 'White';
      });
      selectedCells = [];
    } else if (selectedCells.length > 10) {
      document.querySelectorAll('.selected').forEach(cell => {
        cell.classList.remove('selected');
      });
      selectedCells = [];
    }
  }
});

