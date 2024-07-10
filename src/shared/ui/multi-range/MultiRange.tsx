
import styles from "./MultiRange.module.scss";

type Props = {
  step: number;
  max: number;
  min: number;
  firstValeu: number;
  secondValeu: number;
  changeFirstValue: (e: any) => void;
  changeSecondValue: (e: any) => void;
  title: string;
  measurement: string;
}

const MultiRange = ({ step, max, min, firstValeu, secondValeu, changeFirstValue, changeSecondValue, title, measurement }: Props) => {

  function calculateOffsetPercentage(value: number, min: number, max: number): number {
    return ((value - min) / (max - min)) * 100;
  }

  const offsetPercentage = calculateOffsetPercentage(firstValeu, min, max);

  const calculatePercentage = (value: number, min: number, max: number): number => {
    return ((value - min) / (max - min) * 100);
  }

  const firstValuePercentage = calculatePercentage(firstValeu,  min, max);
  const secondValuePercentage = calculatePercentage(secondValeu,  min, max);
  const progressWidth = secondValuePercentage - firstValuePercentage;

  return (
    <div className={styles.rangeItem}>
    <h3 className={styles.rangeTitle}>{title}</h3>
    <div className={styles.rangeValue}>
      <span className={styles.rangeValueItem}>{firstValeu} {measurement}.</span>
      <span className={styles.rangeValueItem}>{secondValeu} {measurement}.</span>
    </div>
    <div className={styles.rangeLine}>
    <input 
    className={styles.range} 
    type="range" 
    step={step} 
    max={max} 
    min={min} 
    value={firstValeu} 
    onClick={() => false}
    onChange={(e) => {
      e.stopPropagation();
      changeFirstValue(e);
    }} 
    />
    <input 
    className={styles.range} 
    type="range" step={step} 
    max={max} min={min} 
    value={secondValeu} 
    onClick={() => false}
    onChange={(e) => {
      e.stopPropagation();
      changeSecondValue(e);
    }} 
    />
      <div 
      style={{
        left: `${offsetPercentage}%`,
        width: `${progressWidth}%`
      }}
      className={styles.priceProggress}></div>
    </div>
  </div>
  );
};

export { MultiRange };