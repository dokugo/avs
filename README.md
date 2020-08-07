`npm install`

`npm run dev`

If you want to use VS Code with local ESLint installation:

- Create `.vscode` folder in root directory
- Create `settings.json` file inside that folder
- Paste the following to `settings.json`:

```js
{
  "eslint.workingDirectories": [
    {
      "directory": "./server",
      "changeProcessCWD": true
    },
    {
      "directory": "./client",
      "changeProcessCWD": true
    }
  ]
}
```