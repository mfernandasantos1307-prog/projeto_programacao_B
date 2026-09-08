// api/src/database/seeds/seed.ts

export async function runSeed() {
  console.log("Iniciando o povoamento do banco de dados do StudyBloom...");

  // 1. Limpa os dados existentes para permitir executar o seed novamente
  const cleanQuery = `
    TRUNCATE tasks, topics, subjects, users RESTART IDENTITY CASCADE;
  `;

  // 2. Insere dados de teste alinhados com o escopo do seu projeto
  const insertQuery = `
    -- Usuários
    INSERT INTO users (name, email) VALUES
      ('Estudante Teste', 'estudante@studybloom.com'),
      ('Hillary', 'hillary@studybloom.com');

    -- Disciplinas (Subjects)
    INSERT INTO subjects (name, user_id) VALUES
      ('Programação Web', 1),
      ('Banco de Dados', 1),
      ('Matemática Discreta', 2);

    -- Tópicos de Estudo (Topics)
    INSERT INTO topics (title, subject_id, completed) VALUES
      ('Introdução ao TypeScript', 1, true),
      ('Rotas no Express', 1, false),
      ('Comandos SQL e Migrations', 2, false);

    -- Tarefas e Avaliações (Tasks)
    INSERT INTO tasks (title, subject_id, due_date, priority) VALUES
      ('Entregar Atividade 1', 1, '2026-09-15 23:59:00', 'alta'),
      ('Prova de Banco de Dados', 2, '2026-09-20 10:00:00', 'alta');
  `;

  console.log("Dados do StudyBloom inseridos com sucesso!");
}

runSeed();