var connectionString = process.env.DATABASE_URL || 'postgres://postgres:123456@localhost:5432/ToDoList';

module.exports = connectionString;
