export function Ship(name, id, length) {
  return {
    name,
    id,
    length,
    hits: 0,
    direction: "vertical",
    changeDirection: function () {
      if (this.direction === "vertical") {
        this.direction = "horizontal";
      } else if (this.direction === "horizontal") {
        this.direction = "vertical";
      }
    },
    hit: function () {
      this.hits++;
    },
    isSunk: function () {
      return this.hits === this.length ? true : false;
    },
    placedCoords: [],
  };
}
