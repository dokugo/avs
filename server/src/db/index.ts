import { Pool } from 'pg'

import { pg } from '../config'

const db = new Pool({
  host: pg.host,
  port: pg.port,
  user: pg.user,
  password: pg.password,
  database: pg.database,
})

const initialQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id text,
    shared boolean,
    email text,
    PRIMARY KEY (id)
  );
`

db.query(initialQuery)
  .then(() => console.log(`Connected to ${pg.database} database`))
  .catch(error => console.warn(error))

export default db
