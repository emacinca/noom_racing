-- SQLITE
CREATE TABLE IF NOT EXISTS questions (
    question_id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    answers TEXT NOT NULL,
    correct_answer TEXT NOT NULL
);
