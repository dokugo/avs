Run with Docker:

1. Setup env vars via `.env` file in the root folder
2. Run `docker-compose up -d --build`

If you don't want to use Docker (you'll have to setup the database by yourself):

1. Setup env vars via `.env` files in `client` and `server` folders
2. Run `npm run setup` and `npm run dev` from the root folder

If you want to use local ESLint installation with VS Code:

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