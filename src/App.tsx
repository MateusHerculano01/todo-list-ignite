import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { v4 as uuid } from 'uuid';
import { PlusCircle, ClipboardText } from 'phosphor-react';

import { Header } from './components/Header';
import { Task, TaskProps } from './components/Task';

import styles from './App.module.css'

import './global.css';

function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [taskTitle, setTaskTitle] = useState('');

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks,
    {
      id: uuid(),
      title: taskTitle,
      isComplete: false
    }
    ]);

    setTaskTitle('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTaskTitle(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Preencha uma descrição!');
  }

  function onDeleteTask(task_id: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return task.id !== task_id;
    });

    setTasks(tasksWithoutDeleteOne);
  }

  function onToggleCompletedTask(task_id: string) {
    const tasksWithoutCompletedOne = tasks.map(task => {
      if (task_id === task.id) {
        task.isComplete = !task.isComplete;
      }

      return task;
    });

    setTasks(tasksWithoutCompletedOne);
  }

  const numberOfTasks = tasks.length;
  const numberOfTasksCompleted = tasks.filter(tasks => tasks.isComplete === true).length;

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <form onSubmit={handleNewTask} className={styles.todoForm}>
          <input
            value={taskTitle}
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />

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
              (tasks.map((task) => <Task key={task.id} data={task} handleDelete={onDeleteTask} handleCompleted={onToggleCompletedTask} />))
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
