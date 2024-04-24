import sqlite3

# Создаем подключение к базе данных
conn = sqlite3.connect('users.db')

# Создаем курсор для выполнения SQL-запросов
cursor = conn.cursor()

# Создаем таблицу users
cursor.execute('''CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY,
                    username TEXT NOT NULL,
                    email TEXT NOT NULL
                )''')

# Сохраняем изменения в базе данных
conn.commit()

# Закрываем соединение
conn.close()
