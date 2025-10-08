import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';
import { getNextCycle } from './../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDesc = {
    workTime: 'foco',
    shortBreakTime: 'pausa curta',
    longBreakTime: 'pausa longa',
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cyclesDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycle}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDesc[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDesc[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
