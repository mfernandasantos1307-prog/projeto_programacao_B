// 002_create_subjects_table.ts
export async function up() {
  const sql = `
    CREATE TABLE IF NOT EXISTS subjects (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log("Tabela 'subjects' criada!");
}

export async function down() {
  const sql = `DROP TABLE IF EXISTS subjects CASCADE;`;
  console.log("Tabela 'subjects' removida!");
}