import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { PlusCircle, ClipboardText } from 'phosphor-react';

import { Header } from './components/Header';
import { Task } from './components/Task';

import styles from './App.module.css'

import './global.css';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: 'Lorem impusum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
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

  function onDeleteTask(task_id: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return task.id !== task_id;
    });

    setTasks(tasksWithoutDeleteOne);
  }

  function onCompletedTask(task_id: string) {
    const tasksWithoutCompletedOne = tasks.filter(task => {
      return task.isComplete = !task.isComplete;
    });

    setTasks(tasksWithoutCompletedOne);
  }

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
            {!!numberOfTasks ?
              (tasks.map((task) => <Task key={task.id} data={task} handleDelete={onDeleteTask} handleCompleted={onCompletedTask} />))
              :
              (<div className={styles.taskNotFound}>
                <ClipboardText size={100} />
                <p><strong>Você ainda não tem tarefas cadastradas</strong> <br /> Crie tarefas e organize seus itens a fazer</p>
              </div>)
            }
          </main>
        </section>
      </div>
    </div>
  )
}

export default App
