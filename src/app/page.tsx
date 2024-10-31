"use cache"
import { unstable_cacheLife as cacheLife } from 'next/cache'
cacheLife('max')

export default async function Home() {
  const randomNum = Math.floor(Math.random() * 1000);

	return (
		<main className="w-full h-screen flex flex-col items-center justify-center">
      <h1>{randomNum}</h1>
    </main>
	);
}
