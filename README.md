# JavaScript Testing with Jest (FreeCodeCamp)

### Setup
#### Initialize NPM Project
```bash
npm init
```
*(or npm init -y to skip prompts)*

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
