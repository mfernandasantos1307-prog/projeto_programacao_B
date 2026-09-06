Atividade 1 - Estrutura Inicial do Banco e API (StudyBloom)
📌 Quais tabelas você definiu inicialmente?

Para o MVP do StudyBloom, foram definidas inicialmente as seguintes tabelas:

Users: armazena os usuários cadastrados na plataforma.
Subjects: armazena as disciplinas cadastradas pelo estudante.
Topics: armazena os conteúdos/tópicos de estudo relacionados a uma disciplina.
Tasks: armazena as atividades, trabalhos e provas com seus prazos e prioridades.

O painel de progresso não possui uma tabela própria, pois suas informações serão obtidas a partir dos dados das outras tabelas, como quantidade de conteúdos concluídos e tarefas pendentes.

A estrutura inicial pode ser representada da seguinte forma:

Users
└── Subjects
    ├── Topics
    └── Tasks
📌 Você utilizou migrations? Se sim, quantas migrations? Descreva em uma frase o que cada uma faz.

Sim. Inicialmente será utilizada uma migration para criar a estrutura básica do banco de dados.

InitialCreate: cria as tabelas Users, Subjects, Topics e Tasks, incluindo suas chaves primárias e relacionamentos.

Novas migrations poderão ser adicionadas posteriormente caso seja necessário alterar a estrutura do banco durante o desenvolvimento do projeto.

📌 Qual o caminho do arquivo que gera a seed do seu banco?

A seed do banco ficará no seguinte caminho:

api/src/database/seeds/seed.ts
📌 Quais os endpoints que você irá implementar inicialmente?

Inicialmente serão implementados os seguintes endpoints:

Autenticação

POST /api/auth/register — realiza o cadastro de um novo usuário.
POST /api/auth/login — realiza o login do usuário.

Disciplinas

GET /api/subjects — lista as disciplinas do usuário.
POST /api/subjects — cadastra uma nova disciplina.

Conteúdos de Estudo

GET /api/subjects/{subjectId}/topics — lista os tópicos de estudo de uma disciplina.
POST /api/subjects/{subjectId}/topics — cadastra um novo tópico de estudo.
PATCH /api/topics/{id}/status — atualiza o status de conclusão de um tópico de estudo.

Atividades

GET /api/subjects/{subjectId}/tasks — lista as tarefas e avaliações de uma disciplina.
POST /api/subjects/{subjectId}/tasks — cadastra uma nova tarefa ou avaliação.
📌 Você está usando algum framework para escrever os endpoints da sua API? Se sim, qual?

Sim. A API será desenvolvida utilizando o Node.js com o framework Express, utilizando a linguagem TypeScript.

A estrutura do projeto será organizada de forma simples em pastas para separar a API, a aplicação Web e a aplicação Mobile, garantindo que o backend atenda tanto o site quanto o aplicativo.
