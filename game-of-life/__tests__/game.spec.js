require('../game');

const { isAlive } = window.game;


describe('game of life', () => {
    describe('isAlive Algorithm', () => {

      //Case 1
      test('dead cell with no neighbours should return 0', () => {
        expect(isAlive(0, 0)).toEqual(0);
      });

      //Case 2
      test('dead cell with 3 neighbours should return 1', () => {
        //Second argument is cell's neighbours
        expect(isAlive(0, 3)).toEqual(1);
      });

      //Case 3
      test('live cell with 0 neighbours should return 0', () => {
        expect(isAlive(1,0)).toEqual(0);
      });

      //Case 4
      test('live cell with 2 neighbours should return 1', () => {
         expect(isAlive(1, 2)).toEqual(1);
      })



    });
});
