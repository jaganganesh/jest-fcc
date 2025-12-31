import {
  testToBe,
  testToEqual,
  testToBeFalsy,
  testToBeTruthy,
  testToThrow,
  testCallback,
  testPromise,
} from "./index";

/*
    Matchers
*/

/* ToBe */
test("should return 4 for 2 + 2", () => {
  expect(testToBe(2, 2)).toBe(4);
});

/* ToEqual */
test("should return { firstName: 'Jagan', lastName: 'Ganesh' }", () => {
  expect(testToEqual("lastName", "Ganesh")).toEqual({
    firstName: "Jagan",
    lastName: "Ganesh",
  });
});

/* ToBeFalsy */
test("should pass test for 0", () => {
  expect(testToBeFalsy(0)).toBeFalsy();
});

/* ToBeTruthy */
test("should pass test for 1", () => {
  expect(testToBeTruthy(1)).toBeTruthy();
});

/* ToThrow */
test("should throw 'Invalid Input' for non-number input", () => {
  // Must wrap function call in arrow function, otherwise it executes immediately
  expect(() => testToThrow("false")).toThrow("Invalid Input");
});

/*
    Asynchronous Code
*/

/* Callback */
test("should return 'Bonjour' via callback", (done) => {
  const callback = (data) => {
    try {
      expect(data).toBe("Bonjour");
      done();
    } catch (error) {
      done(error);
    }
  };

  testCallback(callback);
});

/* Promise Resolves */
test("should return 'Konnichiwa'", () => {
  return expect(testPromise()).resolves.toBe("Konnichiwa");
});

/* Promise Rejects */
test("should reject with 'Error'", () => {
  return expect(testPromise(true)).rejects.toBe("Error");
});

/* Async/Await */
test("should return 'Konnichiwa' w/ Async/Await", async () => {
  const data = await testPromise();
  expect(data).toBe("Konnichiwa");
});

/*
    Mock Functions and Spies
*/

/* jest.fn */
test("should return 43 w/ mock function", () => {
  const mockFunc = jest.fn((value) => 42 + value);
  expect(mockFunc(1)).toBe(43);
});

/* toHaveBeenCalledWith */
test("should return 43 using toHaveBeenCalledWith", () => {
  const mockFunc = jest.fn((value) => 42 + value);
  expect(mockFunc(1)).toBe(43);
  expect(mockFunc).toHaveBeenCalledWith(1);
});

/* jest.spyOn */
test("should verify that 'play' was called using spyOn", () => {
  const videoPlayer = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(videoPlayer, "play");
  videoPlayer.play();

  expect(spy).toHaveBeenCalled(); // Check if the function was called
  spy.mockRestore(); // Restore the original function after the test
});
