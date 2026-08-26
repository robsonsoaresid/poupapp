import styles from "./progressbar.module.css";
          // barra de progesso
export const ProgressBar = ({ percent }) => {
  return (
    <div className={styles.warppent}>
      <div 
      className={styles.filled} 
      style={{
        width:`${percent}%`
      }}
    >
        {percent}%

      </div>
    </div>
  );
};
