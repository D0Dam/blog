import React from 'react';
import styles from './index.module.css';

const recentPosts = require('../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json');

export default function HomepageFeatures(): JSX.Element {
  return (
    <main className={styles.container}>
      <section className={styles['sidebar-section']}>
        <div className={styles.sidebar}>
          <div className={styles['sidebar-name']}>Recent posts</div>
          <ul>
            {recentPosts.items.slice(0, 5).map((item, index) => (
              <li key={index}>
                <a href={`${item.permalink}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles['main-section']}>
        <div className={styles.intro}>
          <div>
            <div>안녕하세요!</div>
            <div>Javascript 를 사랑하는</div>
            <div>
              Frontend 개발자 <strong>도담</strong>입니다 :{')'}
            </div>
          </div>
          <img className={styles.img} alt="메인 사진" src="img/d0dam.svg" />
        </div>
        <div className={styles.message}>자세한 소개를 준비하고 있어요.🏃🏃</div>
        <div className={styles.message}>조금만 기다려 주세요.😊</div>
      </section>
    </main>
  );
}
