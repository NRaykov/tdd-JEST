const example = require('../example');


/**** Hooks ****/
beforeAll(() => {
  console.log('This hook will execute before all tests');
});

afterAll(() => {
  console.log('This hook will execute after all tests');
});

beforeEach(() => {
  console.log('This hook will execute BEFORE Each test')
  /* we can resetting variables as a example */
});

afterEach(() => {
  console.log('This hook will execute AFTER Each test')
});

describe('example test', () => {
  /*
  test('example', () => {
    expect(example).toBeDefined();
  }); */

  //Another way to define a test is by using 'it'
  /* it('example', () => {
    expect(example).toBeDefined();
  }); */

  //With keyword 'only' jest will execute just this current test and will skip others
  /*
    test.only('example', () => {
      expect(typeof example).toEqual('object');
    });
  */

  //With keyword 'skip' jest will skip this test
  /*
    test.skip('example', () => {
      expect(example).toBeDefined();
    });
  */

  //HINT! Another way to skip a test is by using 'x' as a prefix
  /*
    xtest('example', () => {
      expect(example).toBeDefined();
    });
  */



  test( 'should be defined', () => {

    // 1st we create test variable
    const name = 'Mark';
    // 2nd we access example method and put tested variable as argument
    const expected = example.hello(name);

    // 3th We create the actual test
    expect(expected).toEqual('Hello Mark');

  });

});
