import { Header } from './components/header/header.tsx'
import { Post, PostType } from './components/post/post.tsx'
import { Sidebar } from './components/sidebar/sidebar.tsx'

import styles from './app.module.css'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jefolidev.png',
      name: 'Jeferson Franco',
      role: 'Full Stack Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2024-11-05 12:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jefolidev.png',
      name: 'Dyefferson Franco',
      role: 'Cybersecurtiy CTO',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2024-11-03 15:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

App
