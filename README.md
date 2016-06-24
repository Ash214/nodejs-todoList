# nodejs-AngularJS-todoList
A very barebone sample web application using Node.js/Express.js as backend along with AngularJS for frontend that connects to a PostgreSQL database when posting activities on an online "To-do" list

Создайте папку nodejs-todoList
Создайте в базе данных ToDoList СУБД postgresql таблицу items с полями id - bigserial, text - var char 255, complete - boolean
Пропишите настройки для подключения в файл config.js пример: var connectionString = process.env.DATABASE_URL || 'postgres://postgres:123456@localhost:5432/ToDoList';
Запустите NodeJS Command Prompt и пропишите cd nodejs-todoList
Запустите приложение командой node app. При возникновении ошибок, установите недостающие пакеты командами типа npm install express --save
По адресу http://localhost:3000/ увидите запущенное приложение.
Для изменения кода и улучшени приложения можно изменять файл index.js (там же расположены все запросы к БД).
