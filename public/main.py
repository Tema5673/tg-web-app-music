import psycopg2

# Подключение к базе данных
conn = psycopg2.connect(
    dbname="your_database_name",
    user="your_username",
    password="your_password",
    host="localhost",
    port="5432"
)

# Создание курсора для выполнения запросов
cur = conn.cursor()

# Пример выполнения SQL-запроса
cur.execute("SELECT * FROM your_table_name")
rows = cur.fetchall()
for row in rows:
    print(row)

# Закрытие курсора и соединения
cur.close()
conn.close()
