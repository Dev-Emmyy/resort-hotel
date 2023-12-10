import Image from 'next/image';

export default function Home() {
  return (
    <div class="bg-[url('/img/banner-home.jpg')] bg-cover bg-center bg-no-repeat bg-center bg-local md:bg-fixed min-h-screen text-zinc-50 relative">
  
    <div class="flex flex-col justify-center items-center">
      <div class="z-90 w-4/5 flex flex-col justify-center items-center">
        <Image
          src="/img/rating.png"
          alt="rating"
          width={100}
          height={100}
          class="my-1"
        />
        <h6 class="font-serif text-base font-normal my-3">Welcome to</h6>
        <h1 class="font-serif text-7xl font-normal my-3">Resort & Hotel</h1>
        <p class="font-sans text-base text-center font-normal my-3">Experience the epitome of luxury at our five-star deluxe hotel in Europe. Immerse yourself in unparalleled sophistication, where meticulous design and impeccable service redefine opulence.</p>
      </div>
      <div></div>
    </div>
  </div>
  
  )
}
