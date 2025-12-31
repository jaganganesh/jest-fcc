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

### Matchers

#### toBe

Used for primitive data types (Number, String, Boolean) and checks strict equality `===`.

#### toEqual

Used for Objects and Arrays and checks deep equality (structure and values).

#### toBeFalsy

Passes for falsy values: `0`, `null`, `undefined`, ` ` (empty string), `false`, `NaN`.

#### toBeTruthy

Passes for truthy values (any value that is not falsy).

#### toThrow

Used for checking if a function throws an error.
