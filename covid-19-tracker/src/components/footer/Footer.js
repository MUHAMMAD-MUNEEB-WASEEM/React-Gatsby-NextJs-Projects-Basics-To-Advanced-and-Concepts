import React from 'react';


import styles from './footer.module.css';

//importing cx to use multiple classes in single tag
import cx from "classnames";


export default function Footer() {

  return (
    <div className={styles.footer}>
        <div className={styles.heading}>
            Developed by Muhammad Muneeb Waseem
            <br />
            Follow Me:
        </div>
        <div className={styles.social}>
            <a href="https://www.facebook.com/sarkaar.1000/" className={cx(styles.fa,styles.facebook, styles.bottom)}alt="Facebook">Facebook</a>
            <a href="https://github.com/MUHAMMAD-MUNEEB-WASEEM" className={cx(styles.fa,styles.github, styles.bottom)} alt="Github">Github</a>
            <a href="https://www.linkedin.com/in/muhammad-muneeb-waseem-b95052190/" className={cx(styles.fa,styles.linked, styles.bottom)} alt="Linkedin">Linkedin</a>
        </div>
    </div>
  );
}