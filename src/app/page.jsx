import Image from 'next/image';

export default function Home() {
  return (
    <><div class="bg-[url('/img/banner-home.jpg')] bg-cover bg-center bg-no-repeat bg-center bg-local md:bg-fixed min-h-screen text-zinc-50 relative">

      <div class="flex flex-col justify-between items-center">
        <div class="z-90 w-4/5 flex flex-col justify-center items-center">
          <Image
            src="/img/rating.png"
            alt="rating"
            width={100}
            height={100} />

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
    
    <div class="flex justify-between items-center py-14 px-10 bg-[#2f4137] text-[#EEE8AA]">
        <div class="flex flex-col justify-between items-start w-2/5">
          <Image
            src="/img/rating.png"
            alt="rating"
            width={100}
            height={100} 
            class="my-2.5"
            />
          <h2 class="my-2.5 text-5xl">Make Your Golden Memories</h2>
          <p class="my-2.5 font-light">A 5-star hotel located near the airport and railway station; steps away from tourist sites like cave, hotel is ideal for leisure and business alike. Decorated with contemporary art featuring rooms and suites offering a view of the city skyline and the vast oasis; our huge ballroom and meeting spaces are ideal for business, and weddings.</p>
          <button class="my-2.5 text-[#2f4137] bg-[#EEE8AA] p-2 font-mono font-bold">Read More</button>
        </div>
        <div>
        <Image
            src="/img/read_more_img.jpg"
            alt="rating"
            width={500}
            height={450} 
            class="w-96 h-80"
            />
        </div>
      </div>

      <div>
        <div class="bg-[url('/img/available_img.jpeg')] bg-cover bg-center bg-no-repeat bg-center bg-local md:bg-fixed min-h-screen text-zinc-50 relative">
          <div class="flex justify-between items-center h-screen px-16 text-center">
            <div class="bg-[#2f4137] bg-opacity-50 py-5 px-10">
            <h6 class="text-[#EEE8AA] my-3 text-lg font-normal font-serif leading-5">Customer Support</h6>
            <p class="text-[#EEE8AA] my-3 font-light leading-6 font-mono">24 Hours Support</p>
            </div>
            <div class="bg-[#2f4137] bg-opacity-50 py-5 px-10">
            <h6 class="text-[#EEE8AA] my-3 text-lg font-normal font-serif leading-5">Family Size Room</h6>
            <p class="text-[#EEE8AA] my-3 font-light leading-6 font-mono">Available Room</p>
            </div>
            <div class="bg-[#2f4137] bg-opacity-50 py-5 px-10">
            <h6 class="text-[#EEE8AA] my-3 text-lg font-normal font-serif leading-5">Conference Room</h6>
            <p class="text-[#EEE8AA] my-3 font-light leading-6 font-mono">Conference Room Available</p>
            </div>
            <div class="bg-[#2f4137] bg-opacity-50 py-5 px-10">
            <h6 class="text-[#EEE8AA] my-3 text-lg font-normal font-serif leading-5">Free Wifi Corner</h6>
            <p class="text-[#EEE8AA] my-3 font-light leading-6 font-mono">Free Wifi 24/7</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-[#EEE8AA] py-16 px-10 flex flex-col justify-between items-center">
        <div class="flex justify-between mb-14">
          <div>
            <h6 class="text-[#d39364] font-serif font-normal tracking-widest leading-5 mb-4">Why Choose Us</h6>
            <div class="border-b-2 border-[#d39364] w-48"></div>
          </div>
          <div class="w-3/4 flex flex-col items-start text-left">
            <h2 class="text-[#2f4137] text-5xl font-serif font-normal tracking-widest mb-6">Our services</h2>
            <p class="text-[#2f4137] font-light">We offer a range of services, including accommodation, dining, recreational facilities, event spaces, entertainment, concierge services, Wi-Fi, business services, transportation assistance, housekeeping, security, special packages, and responsive customer support. Emphasizing unique features and tailoring services to guest preferences is key.</p>
          </div>
        </div>
        <div class="flex w-full">
          <div class="w-4/12">
            <Image
              src="/img/service_img.jpg"
              alt="rating"
              width={350}
              height={450} 
              />
              <h4 class="mt-20">Spa &amp; Wellness</h4>
              <p>Our Spa & Wellness services offers guests a holistic experience focused on relaxation and rejuvenation. This includes comfortable accommodation, nutritious dining options, recreational facilities, and a comprehensive range of spa treatments, fitness programs, and holistic wellness practices.</p>
          </div>
          <div class="w-4/12">
            <Image
              src="/img/service_img_2.jpg"
              alt="rating"
              width={350}
              height={450} 
              />
              <h4 class="mt-20">Events &amp; Meetings</h4>
              <p>Our Events & Meetings provides versatile spaces and services to accommodate a range of gatherings. This includes conferences, meetings, weddings, and other events. </p>
          </div>
          <div class="w-4/12">
            <Image
              src="/img/service_img_3.jpg"
              alt="rating"
              width={350}
              height={450} 
              />
              <h4 class="mt-20">Restaurant &amp; Bar</h4>
              <p>Our Restaurant & Bar offers a complete dining and social experience for guests. This includes on-site dining options with a diverse menu, ranging from local specialties to international cuisine. </p>
          </div>
        </div>
        <div>
          <button>See More</button>
        </div>
      </div>
      </>
  )
}
