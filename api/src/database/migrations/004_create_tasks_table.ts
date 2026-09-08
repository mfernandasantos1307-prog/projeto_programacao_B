// 004_create_tasks_table.ts
export async function up() {
  const sql = `
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      title VARCHAR(150) NOT NULL,
      subject_id INT NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
      due_date TIMESTAMP,
      priority VARCHAR(20) DEFAULT 'media',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log("Tabela 'tasks' criada!");
}

export async function down() {
  const sql = `DROP TABLE IF EXISTS tasks CASCADE;`;
  console.log("Tabela 'tasks' removida!");
}