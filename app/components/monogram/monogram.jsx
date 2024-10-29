import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, logo, className, ...props }, ref) => {
  const id = useId();
  

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="50"
      height="62"
      viewBox="0 0 48 29"
      ref={ref}
      {...props}
    >
      <defs>
        
      </defs>
     
      <image 
          href="app\assets\logo.png" 
          width="48" 
          height="62"
          preserveAspectRatio="xMidYMid meet" 
        />
        {highlight && (
          <rect className={styles.highlight} width="100%" height="100%" />
        )}
    
    </svg>
  );
});
