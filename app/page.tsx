import Image from 'next/image'

export default function Home() {
  return (
    <main>
          <div className="w-screen h-screen grid grid-cols-[20%_60%_20%] grid-rows-[10%_20%_70%]">
            <div className="bg-yellow-100 row-span-3">actions</div>
            <div className="bg-blue-200">title</div>
            <div className="bg-yellow-50 row-span-3">news</div>
            <div className="bg-purple-200">write new post</div>
            <div className="bg-purple-400">feed</div>
          </div>
    </main>
  )
}

        //<div className="row-span-1 col-start-2 col-span-3 bg-orange-400">home title</div>
        //<div className="row-start-2 row-span-1 col-start-2 col-span-3 bg-purple-500">write post</div>