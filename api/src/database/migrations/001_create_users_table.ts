// 001_create_users_table.ts
export async function up() {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log("Tabela 'users' criada!");
}

export async function down() {
  const sql = `DROP TABLE IF EXISTS users CASCADE;`;
  console.log("Tabela 'users' removida!");
}