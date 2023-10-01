import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <>
      <nav class="bg-white flex items-center justify-between px-12 py-2 border-b-2 fixed z-10 w-full">
          <Image
                src="/logo-kitaweb.svg"
                alt="kitaweb logo"
                width={100}
                height={24}
          />
          <div class="md:flex md:w-7/12 lg:w-5/12 hidden justify-around relative items-center">
              <Link href="#">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#service">Service</Link>
              <Link href="#service">
                  <span class="py-2 px-5 border-2 border-amber-500 rounded-full text-amber-500">
                      Contact US
                  </span>
              </Link>
          </div>
      </nav>
      <section class="bg-white h-screen px-10 md:px-16 pt-32 ">
        <div class="bg-no-repeat bg-cover h-5/6 md:bg-center rounded-3xl overflow-hidden flex items-center md:items-end px-5 md:p-10" Style="background-image: url(/hero-image-sect1.png)">
          <span class="md:w-3/5 xl:w-2/5">
            <h2 class="md:text-6xl text-4xl font-bold">Quickest and Easy</h2>
            <p class="md:text-lg text-base my-7">Find more freedom to create, design, manage and develop websites the way you want. Get 15% Discount on your first purchase!</p>
            <Link href="" class="md:text-4xl text-2xl font-bold text-white">
              <span class="pb-2 px-4 bg-amber-400 rounded-2xl leading-none">Keep In Touch</span>
            </Link>
          </span>
        </div>
          <Link href="" class="rounded-full overflow-hidden absolute right-6 md:right-10 bottom-20 shadow-lg"><div class="bg-green-500 p-4 "><Image
                src="/Telegram.svg"
                alt="kitaweb logo"
                width={50}
                height={50}
          /></div></Link>
      </section>
      <section class="bg-white md:grid grid-cols-2 grid-rows-2 md:grid-rows-1 items-center py-10 gap-3 px-10 md:px-16">
        <div>

        <Image
                src="/image-section2.svg"
                alt="kitaweb logo"
                width={600}
                height={600}
          />
        </div>
        <div class="mt-5 md:mt-0">
          <h3 class="md:text-2xl text-xl font-bold text-slate-600">Best Price</h3>
          <h2 class="md:text-5xl text-4xl font-bold my-4 md:my-6">Low Cost, Great Quality</h2>
          <p class="md:text-lg text-base text-slate-500">You can have a ready-made website for only a small fee. Complete features will facilitate the website creation process, from Auto-Install WordPress, Mockup, etc. 99.99% server uptime guarantee allows your website to be online all the time.</p>
        </div>
      </section>
    </> 
  )
}