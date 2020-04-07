const isAlive = (cell, neighbours) => {
  // Case -> !Boolean(cell) -> dead cell (cell = false or cell = 0)
  if(!Boolean(cell) && neighbours === 3) {
    return 1;
  }

  // Case -> Boolean(cell) -> live cell (cell = true or cell = 1)
  if(Boolean(cell) && neighbours === 2) {
    return 1;
  }

  //Default cell's state => false
  return 0
}

window.game = {
  isAlive
};
