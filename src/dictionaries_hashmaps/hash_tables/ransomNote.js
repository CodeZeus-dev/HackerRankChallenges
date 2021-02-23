'use strict';

function checkMagazine(magazine, note) {
  if (magazine.length === 0 || note.length === 0) throw new Error('Input cannot be empty.');
  if (JSON.stringify(magazine) === JSON.stringify(note)) {
    return 'Yes';
  }
  return 'No';
}

module.exports = checkMagazine;