import { CheckCircle, Circle, Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
}

interface Props {
  data: TaskProps;
  handleDelete: (task_id: string) => void;
  handleCompleted: (task_id: string) => void;
}

export function Task({ data, handleDelete, handleCompleted }: Props) {
  const iconsSize = 30;

  function handleDeleteTask() {
    handleDelete(data.id);
  }

  function handleCompletedTask() {
    handleCompleted(data.id);
  }

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.selectTask} title="Marcar tarefa como concluída" onClick={handleCompletedTask}>
        {
          data.isComplete
            ? <CheckCircle size={iconsSize} className={styles.checkCircle} />
            : <Circle size={iconsSize} />
        }
      </button>

      <p className={data.isComplete ? styles.checked : ''}>{data.title}</p>

      <button type="button" className={styles.deleteTask} onClick={handleDeleteTask} title="Deletar Tarefa">
        <Trash size={iconsSize} />
      </button>
    </div>
  );
}