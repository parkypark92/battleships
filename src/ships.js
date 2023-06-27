export function Ship(length) {
  return {
    length,
    hits: 0,
    hit: function () {
      this.hits++;
    },
    isSunk: function () {
      return this.hits === this.length ? true : false;
    },
  };
}
