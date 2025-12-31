# JavaScript Testing with Jest (FreeCodeCamp)

### Setup

#### Initialize NPM Project

```bash
npm init
```

_(or npm init -y to skip prompts)_

#### Install JEST with ES6 Import and Export Support

```bash
npm install --save-dev jest babel-jest @babel/preset-env
```

##### 01. Create a file `babel.config.js`

```js
// babel.config.js
module.exports = { presets: ["@babel/preset-env"] };
```

##### 02. Update `package.json`

```json
{
    ...

    "scripts": {
        "test": "jest" // Replace
    }

    ...
}
```

#### To Run Test

```bash
npm run test
```

### Matchers

#### toBe

Used for primitive data types (Number, String, Boolean) and checks strict equality `===`.

```js
/* ToBe */
test("should return 4 for 2 + 2", () => {
  expect(testToBe(2, 2)).toBe(4);
});
```

#### toEqual

Used for Objects and Arrays and checks deep equality (structure and values).

```js
/* ToEqual */
test("should return { firstName: 'Jagan', lastName: 'Ganesh' }", () => {
  expect(testToEqual("lastName", "Ganesh")).toEqual({
    firstName: "Jagan",
    lastName: "Ganesh",
  });
});
```

#### toBeFalsy

Passes for falsy values: `0`, `null`, `undefined`, ` ` (empty string), `false`, `NaN`.

```js
/* ToBeFalsy */
test("should pass test for 0", () => {
  expect(testToBeFalsy(0)).toBeFalsy();
});
```

#### toBeTruthy

Passes for truthy values (any value that is not falsy).

```js
/* ToBeTruthy */
test("should pass test for 1", () => {
  expect(testToBeTruthy(1)).toBeTruthy();
});
```

#### toThrow

Used for checking if a function throws an error.

```js
/* ToThrow */
test("should throw 'Invalid Input' for non-number input", () => {
  // Must wrap function call in arrow function, otherwise it executes immediately
  expect(() => testToThrow("false")).toThrow("Invalid Input");
});
```

### Testing Asynchronous Code

#### Callback

Jest provides the `done` callback to signal when an asynchronous test has completed.

```js
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
```

#### Promises

Jest provides `.resolves` and `.rejects` helpers to handle resolved and rejected promises.

```js
/* Promise Resolves */
test("should return 'Konnichiwa'", () => {
  return expect(testPromise()).resolves.toBe("Konnichiwa");
});

/* Promise Rejects */
test("should reject with 'Error'", () => {
  return expect(testPromise(true)).rejects.toBe("Error");
});
```

#### Async/Await

Used for testing asynchronous functions using `async` and `await`.

```js
/* Async/Await */
test("should return 'Konnichiwa' using Async/Await", async () => {
  const data = await testPromise();
  expect(data).toBe("Konnichiwa");
});
```

### Mock Functions and Spies

#### jest.fn

`jest.fn()` allows you to track function calls, arguments, return values, and execution behavior during tests.

```js
/* jest.fn */
test("should return 43 using mock function", () => {
  const mockFunc = jest.fn((value) => 42 + value);
  expect(mockFunc(1)).toBe(43);
});
```

#### toHaveBeenCalledWith

Used to verify that a mock function was called with specific arguments.

```js
/* toHaveBeenCalledWith */
test("should return 43 using toHaveBeenCalledWith", () => {
  const mockFunc = jest.fn((value) => 42 + value);
  expect(mockFunc(1)).toBe(43);
  expect(mockFunc).toHaveBeenCalledWith(1);
});
```

#### jest.spyOn

Lets you watch a function inside an object.

```js
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
```

> **toHaveBeenCalled**
>
> Checks if a mock function or spy was called at least once,

> **mockRestore**
>
> mockRestore() puts the original function back after your test
