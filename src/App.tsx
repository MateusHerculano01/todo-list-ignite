import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';

import styles from './App.module.css'

import './global.css';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: 'Terminar o desafio',
      isComplete: true,
    },
    {
      id: uuid(),
      title: 'Terminar trilha de node',
      isComplete: false,
    },
    {
      id: uuid(),
      title: 'Terminar trilha de react native',
      isComplete: false,
    },

  ]);

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <form className={styles.todoForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" />

          <button type="submit">
            Criar
            <PlusCircle size={24} />
          </button>
        </form>

        <section>
          <header>
            <div className={styles.createdTasks}>
              <strong>Tarefas criadas</strong>
              <span>5</span>
            </div>
            <div className={styles.completedTasks}>
              <strong>Concluídas</strong>
              <span>2 de 5</span>
            </div>
          </header>

          <main>

          </main>
        </section>
      </div>
    </div>
  )
}

export default App
