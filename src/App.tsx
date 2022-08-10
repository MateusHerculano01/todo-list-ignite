import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { PlusCircle, ClipboardText } from 'phosphor-react';

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
      isComplete: true,
    },
    {
      id: uuid(),
      title: 'Terminar trilha de elixir',
      isComplete: false,
    },

  ]);

  const numberOfTasks = tasks.length;
  const numberOfTasksCompleted = tasks.filter(tasks => tasks.isComplete === true).length;

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
              <span>{numberOfTasks}</span>
            </div>
            <div className={styles.completedTasks}>
              <strong>Concluídas</strong>
              <span>{`${numberOfTasksCompleted} de ${numberOfTasks}`}</span>
            </div>
          </header>

          <main>

            <div className={styles.taskNotFound}>
              <ClipboardText size={100} />
              <p><strong>Você ainda não tem tarefas cadastradas</strong> <br /> Crie tarefas e organize seus itens a fazer</p>
            </div>

          </main>
        </section>
      </div>
    </div>
  )
}

export default App
