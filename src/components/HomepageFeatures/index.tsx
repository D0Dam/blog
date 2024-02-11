import React from 'react';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

interface Post {
  title: string;
  permalink: string;
}

const posts = require('../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json');

export default function HomepageFeatures(): JSX.Element {
  const recentPosts: Post[] = posts.items.slice(0, 5);

  return (
    <main className={styles.container}>
      <section>
        <h1>Latest</h1>
        <h3>posts</h3>
        <div className={styles.line} />
        <ul className={styles.posts}>
          {recentPosts.map((item) => (
            <li key={item.permalink} className={styles.post}>
              <a href={`${item.permalink}`}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className={styles.more}>
          <Link to="/blog">More Posts{' >'}</Link>
        </div>
      </section>
      <section>
        <h1>Intro</h1>
        <h3>d0dam</h3>
        <div className={styles.line} />
        <div className={styles.info}>
          <div>
            <span>안녕하세요. FrontEnd 개발자 d0dam입니다.</span>
            <span>하루하루를 행복하게 사는 것이 제 슬로건입니다.</span>
          </div>
          <div>
            <span>서비스 사용자를 향하는 서비스에 대해 항상 고민합니다. </span>
            <br />
            <span>읽기 편한 코드를 작성하고자 노력하고 DX에 관심이 많습니다.</span>
            <br />
            <span>요즘에는 협업을 하는 것이 즐겁습니다. 이 과정에서 서로 설득하며 설득당할 때 행복감을 느낍니다.</span>
          </div>
          <div>
            <span>최신 FrontEnd 기술 스택에 익숙합니다.</span>
          </div>
        </div>
        <div className={styles.more}>
          <Link to="/">More Info(업데이트 중){' >'}</Link>
        </div>
      </section>
    </main>
  );
}
