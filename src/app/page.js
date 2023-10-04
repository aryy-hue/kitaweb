import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Components/Navbar'


export default function page() {
  return (
    <>
      <Navbar/>
      
      <section class="bg-white h-screen px-8 md:px-16 pt-32">
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
      <section class="bg-white md:grid grid-cols-2 grid-rows-2 md:grid-rows-1 items-center py-10 gap-3 px-8 md:px-16">
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

      <section class="bg-[#FFFADD] md:grid grid-cols-2 grid-rows-2 items-center md:grid-rows-1 gap-10 mt-20 px-10 py-20"> 
        <div class="pt-10 md:mt-0">
          <h3 class="md:text-2xl text-xl font-bold text-slate-600">Special Customer Service</h3>
          <h2 class="md:text-3xl text-3xl font-bold pt-2 md:my-6">Number 1 Technical Support In Indonesia</h2>
          <p class="md:text-lg text-base text-slate-500 pt-2 text-justify">Contact KitaWeb’s Customer Success Agent at any time when there is a problem with your website. No need to wait long, your problem will be resolved quickly and in real-time via Whatsapp or email.</p>
        </div>
        <div class="py-10">
        <Image
                src="/rocket.svg"
                alt="Rocket"
                width={600}
                height={600}
          />
        </div>
      </section>

      <section class="bg-[#3156D7] items-center grid-cols-2 grid-rows-2 py-20 gap-3 px-10 md:grid-rows-1 md:grid">
      <div class="py-10">
      <Image  
                src="/planet.svg"
                alt="planet"
                width={600}
                height={600}
          />
      </div>
        <div class="ml-5 md:mt-0">
          <h2 class="md:text-5xl text-4xl font-bold text-white my-4 md:my-6">About us</h2>
          <p class="md:text-lg text-base text-slate-500 text-white text-justify">You can have a ready-made website for only a small fee. Complete features will facilitate the website creation process, from Auto-Install WordPress, Mockup, etc. 99.99% server uptime guarantee allows your website to be online all the time.</p>
        </div>
      </section>

      <section class="bg-[#22273C] h-2/5 grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 px-14 md:py-10 md:px-10 text-white">
        <div class="pt-10 md:pt-0">
          <Image
                    src="/logo-kitaweb.svg"
                    alt="kitaweb logo"
                    width={100}
                    height={24}
              />
          <p class="pt-5">Our mission is to help millions of people harness the potential</p>
          <p>of the internet to build success online.</p>
        </div>
        <div class="pt-5 md:pl-28 xl:pl-72">
          <p>For more information :</p>
          <div class="items-center mt-3">
          <Link href="" class="rounded-full overflow-hidden mr-3">
            <div class="bg-[#393F53] p-4 rounded-full w-fit inline-block">
              <Image 
                src="/footer-socmed/facebook.svg"
                width={30}
                height={30}
              />
            </div>
          </Link>
          <Link href="" class="rounded-full overflow-hidden mr-3">
            <div class="bg-[#393F53] p-4 rounded-full w-fit inline-block">
              <Image 
                src="/footer-socmed/twitter.svg"
                width={30}
                height={30}
              />
            </div>
          </Link>
          <Link href="" class="rounded-full overflow-hidden mr-3">
            <div class="bg-[#393F53] p-4 rounded-full w-fit inline-block">
              <Image 
                src="/footer-socmed/instagram.svg"
                width={30}
                height={30}
              />
            </div>
          </Link>
          </div> 
        </div>
      </section>
    </> 
  )
}