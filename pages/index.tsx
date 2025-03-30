import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-custom-bg bg-cover bg-center bg-no-repeat">
      <Head>
        <title>NEO App</title>
        <meta name="description" content="Created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Добро пожаловать в NEO App
          </h1>
          <p className="text-xl text-white">
            Ваше современное веб-приложение
          </p>
        </div>
      </main>
    </div>
  )
} 