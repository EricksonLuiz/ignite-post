import { Header } from './components/Header';
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar';
import { useState, useEffect } from 'react';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Sênior Web Developer & Instructor',
    },
    content: [
      { type: 'paragraph', content: 'Olá Pessoas 🖖🏽' },
      { type: 'paragraph', content: 'Venho aqui compartilhar um novo projeto, que estou finalizando. 🚀' },
      { type: 'link', content: 'maykbrito.devweb' },
    ],
    publishedAt: new Date('2023-02-15 11:00:00'),
  },
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/GersonSalvador.png',
      name: 'GersonSalvador',
      role: 'Dev Web',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'gersonsalvador.devweb' },
    ],
    publishedAt: new Date('2023-06-06 20:00:00'),
  },
];
export function App() {

  const [data, setData] = useState<string | null>(''); 

  useEffect(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      setData(savedData);
    }
  }, []);

  useEffect(() => {
    if (data) {
      localStorage.setItem('data', data);
    }
  }, [data]);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}