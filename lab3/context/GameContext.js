import React, { createContext, useState, useContext, useEffect } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Зробити 10 кліків', completed: false, count: 0, required: 10 },
    { id: 2, description: 'Зробити подвійний клік 5 разів', completed: false, count: 0, required: 5 },
    { id: 3, description: 'Утримувати об\'єкт 3 секунди', completed: false },
    { id: 4, description: 'Перетягнути об\'єкт', completed: false },
    { id: 5, description: 'Зробити свайп вправо', completed: false },
    { id: 6, description: 'Зробити свайп вліво', completed: false },
    { id: 7, description: 'Змінити розмір об\'єкта', completed: false },
    { id: 8, description: 'Отримати 100 очок', completed: false },
  ]);

  const updateTask = (id, update) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, ...update } : task
    ));
  };

  const addScore = (points) => {
    setScore(prev => {
      const newScore = prev + points;
      // Перевірка завдання про 100 очок
      if (newScore >= 100) {
        updateTask(8, { completed: true });
      }
      return newScore;
    });
  };

  return (
    <GameContext.Provider value={{
      score,
      addScore,
      tasks,
      updateTask
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);