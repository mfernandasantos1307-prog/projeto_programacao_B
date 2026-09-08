// 003_create_topics_table.ts
export async function up() {
  const sql = `
    CREATE TABLE IF NOT EXISTS topics (
      id SERIAL PRIMARY KEY,
      title VARCHAR(150) NOT NULL,
      subject_id INT NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
      completed BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log("Tabela 'topics' criada!");
}

export async function down() {
  const sql = `DROP TABLE IF EXISTS topics CASCADE;`;
  console.log("Tabela 'topics' removida!");
}