import postgres from 'postgres';

// Access environment variables using process.env
const PGCONNECT = process.env.PGCONNECT;

if (!PGCONNECT) {
  throw new Error("PGCONNECT environment variable is not defined.");
}

// Initialize the Postgres connection
const sql = postgres(PGCONNECT, {});

// Export the sql object for database queries
export default sql;
