import Image from 'next/image';

export default function Home() {
  return (
    <div class="bg-[url('/img/banner-home.jpg')] bg-cover bg-center bg-no-repeat bg-center bg-local md:bg-fixed min-h-screen text-zinc-50 relative">
  
    <div class="flex flex-col justify-between items-center">
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

      <div class="mt-28 mb-16 p-5 bg-slate-200 bg-opacity-50 w-9/12">
          <form action="/submit" method="post" class="flex flex-row justify-around items-center w-4/4">
            <select id='adults_number' class="bg-transparent border-2 border-black-500 w-3/12 h-11 outline-none font-mono font-bold"> 
              <option value="one">1 Adult</option>
              <option value="two">2 Adult</option>
              <option value="three">3 Adult</option>
            </select>
            <select id='childrens_number' class="bg-transparent border-2 border-black-500 w-3/12 h-11 outline-none font-mono font-bold"> 
              <option value="one">1 Children</option>
              <option value="two">2 Childrens</option>
              <option value="three">3 Childrens</option>
            </select>
            <select id='number_of_room' class="bg-transparent border-2 border-black-500 w-3/12 h-11 outline-none font-mono font-bold"> 
              <option value="one">1 Room</option>
              <option value="two">2 Rooms</option>
              <option value="three">3 Rooms</option>
            </select>
            <button class="bg-[#2f4137] text-[#EEE8AA] p-2 w-2/12 font-mono font-bold">Book Now</button>
          </form>
      </div>

    </div>
  </div>
  
  )
}
