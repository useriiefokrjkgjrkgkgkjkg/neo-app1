import Head from 'next/head'

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div 
        className="absolute inset-0 opacity-90" 
        style={{ 
          zIndex: -1,
          backgroundImage: "url('https://i.imgur.com/D2jFlnO.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="relative z-10">
        <Head>
          <title>NEO App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Created with Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto px-4 py-16">
          <div className="text-center backdrop-blur-sm bg-black/30 rounded-xl p-8 max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold text-white mb-8 drop-shadow-lg">
              Добро пожаловать в NEO App
            </h1>
            <p className="text-2xl text-white drop-shadow-lg">
              Ваше современное веб-приложение
            </p>
          </div>
        </main>
      </div>
    </div>
  )
} 