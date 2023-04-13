import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Check out our projects | ImmoVerse</title>
        <meta name="description" content="Explore all services and apps brought to you by the ImmoVerse Team: Alex Ochs & Mazlum Sagdasli. ImmoVerse: Real Estate investing made easy. 100% on-chain.. BabyFarm: Let autonomous AI babies work for you while you sleep. Pommes: Discover and engage in new Web3 projects." />
        <meta name="keywords" content="Real Estate, Blockchain, Ethereum, AI, OpenGPT, OpenAI, AutoGPT, BabyAGI, Web3, NFT, Marketplace, Investment" />
        <meta name="author" content="Alex Ochs" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Link href="https://app.immover.se" target="_blank">
            <p className="text-lg fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Go to&nbsp;
              <code className="font-mono font-bold">ImmoVerse App</code>
            </p>
          </Link>

          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <div
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            >
              By <Link href="https://alexochs.de" target="_blank" className="font-bold">Alex Ochs</Link> & <Link href="https://www.linkedin.com/in/mazlum-sagdasli-36645a105/" target="_blank" className="font-bold">Mazlum Sagdasli</Link>
            </div>
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
          <h1
            className="relative text-6xl font-bold leading-tight tracking-tighter md:text-7xl"
          >
            Made by ImmoVerse
          </h1>
        </div>

        <div className="mb-16 grid gap-8 text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
          <Link
            href="https://app.immover.se"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              🏠 ImmoVerse App{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Real Estate investing made easy. 100% on-chain.
            </p>
          </Link>

          <Link
            href="https://babyfarm.immover.se"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              👶 BabyFarm{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Let autonomous AI babies work for you while fast asleep.
            </p>
          </Link>

          <Link
            href="https://pommes.immover.se"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              🍟 Pommes{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Discover and engage in new Web3 projects.
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
