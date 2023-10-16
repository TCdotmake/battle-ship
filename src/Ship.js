export default function Ship(length) {
  return {
    length,
    hits: 0,
    hit() {
      this.hits += 1;
    },
    isSunk() {
      if (this.hits >= this.length) {
        return true;
      }
      return false;
    },
  };
}
