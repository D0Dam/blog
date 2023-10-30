import React from 'react';
import styles from './index.module.css';

export default function HomepageFeatures(): JSX.Element {
  const gotoBlog = () => window.open('/blog');
  const gotoGithub = () => window.open('https://github.com/d0dam');

  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <div>
          <div>안녕하세요!</div>
          <div>Javascript 를 사랑하는</div>
          <div>
            Frontend 개발자 <strong>도담</strong>입니다 :{')'}
          </div>
        </div>
        <img className={styles.img} alt="메인 사진" src="img/d0dam.svg" />
      </section>
      <section className={styles['button-section']}>
        <button onClick={gotoBlog}>블로그 보러가기</button>
        <button onClick={gotoGithub}>깃허브 구경가기</button>
      </section>
    </div>
  );
}
