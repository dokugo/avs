import { Pool } from 'pg'

const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'aviasales',
  password: 'admin',
  port: 5432,
})

const initialQuery = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  CREATE TABLE IF NOT EXISTS users (
    id uuid DEFAULT uuid_generate_v4 () NOT NULL,
    shared boolean,
    email text,
    PRIMARY KEY (id)
  );
`

db.query(initialQuery)
  .then(result => console.log(result))
  .catch(error => console.warn(error))

export default db
