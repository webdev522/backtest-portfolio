# backtest-portfolio

> This is is yet another U.S. Stock backtest simulator tool. You can easily share your backtest or explore other's backtest within service. This service is currently in beta stage.

This project is a monorepo of the backtesting service. It contains client & server projects.

## Project Stack

### Web

Web project is built with React. Following awesome libraries & technologies are used in this project:

- Recoil
- React Query
- React Router
- TypeScript
- Emotion
- EChart

This web project is deployed via Vercel.

### Server

Server project is built with Fastify and TypeORM. Fuse.js is used for the stock search engine. Chart.js is used for the server-generated chart image.

MariaDB is used for the database. Server is currently running on AWS.

#### Scripts

- `yarn sync-db`: Sync TypeORM Entity with Database. Make sure you setup ormconfig.json before running this script.
- `yarn init`: Initializes asset type. You have to run this script after syncing your database.
- `yarn syncbot`: Downloads historical data and stock information. Input file is server/src/sync/tickers/stocks.txt. Check the README.md of the tickers directory.

## Datasets

Historical prices / Stock information is provided from https://financialmodelingprep.com/

## Contributions

Any kinds of contributions are welecomed.
