import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Energizing() {
  return (
    <div className="relative w-full h-screen">
      <Navbar/>
        <div className="relative w-full h-[50vh] md:h-[75vh]">
        <img src="/public/assets/energizing-you-image-4.webp" alt="Energizing Hero"className="w-full h-full object-cover object-center"/>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white p-6">
            <Link to="/" className="underline text-sm md:text-base">Home / Back</Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Energizing You</h1>
            <p className="text-base md:text-lg leading-relaxed">Pertamina is committed to becoming a leading global energy company that supports national energy independence and creates a more sustainable future.</p>
        </div>
        </div>
      <div>
        <ul className="flex flex-wrap border border-gray-300 text-sm sm:text-base">
            <li className="flex-1 min-w-[50%] sm:min-w-0 border-r border-gray-300 px-4 py-3 flex items-center justify-center text-center"><a href="#Energizing">"Energizing You"</a></li>
            <li className="flex-1 min-w-[50%] sm:min-w-0 border-r border-gray-300 px-4 py-3 flex items-center justify-center text-center"><a href="#Message">Message House</a></li>
            <li className="flex-1 min-w-[50%] sm:min-w-0 border-r border-gray-300 px-4 py-3 flex items-center justify-center text-center"><a href="#Story">"Energizing You" Story</a></li>
            <li className="flex-1 min-w-[50%] sm:min-w-0 px-4 py-3 flex items-center justify-center text-center"><a href="#Driver">"Energizing You" Driver</a></li>
        </ul>
      </div>
      <div className='flex flex-col mt-10 gap-6'>
        <section id="Energizing" className="px-4 md:px-8 py-6">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
                <h1 className="text-2xl md:text-3xl font-semibold w-full md:w-1/3">"Energizing You"</h1>
                <p className="text-sm md:text-base w-full md:w-2/3 leading-relaxed">“Energizing You” means more than just providing energy or fulfilling energy service needs, but also sharing one's enthusiasm and energetic nature with others to feel energetic, excited, enthusiastic about whatever we do. “Energizing You” also means that the energy shared is more than physical energy in the form of products, but also the metaphorical energy that a person or an entity may have that cannot be seen, but felt. The “Energizing You” brand singularity is the embodiment of Pertamina and becomes the brand central idea in the depiction of the company's activities.</p>
            </div>
            <div className="mt-6">
                <img src="/assets/energizing-you-image-4.webp" alt="Energizing Visual" className="w-full h-auto rounded-lg"/>
            </div>
        </div>
        </section>
        <section id="Message" className="px-4 md:px-8 py-6">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
                <h1 className="text-2xl md:text-3xl font-semibold w-full md:w-1/3">Message House</h1>
                <p className="text-sm md:text-base w-full md:w-2/3 leading-relaxed">Pertamina as a national energy company is part of people's lives and activities, and is present to provide energy to all levels of society in building the nation so Pertamina needs to be committed to bringing positive messages to stakeholders. “Energizing You” provides energy through messages to Internal Audience, Communities, Regulators, B2B Customers, B2C Customers, and Key Partners.</p>
            </div>
            <div className="mt-6">
                <img src="/assets/energizing-you-image-5.webp" alt="Energizing Visual" className="w-full h-auto rounded-lg"/>
            </div>
        </div>
        </section>
        <section id="Story" className="px-4 md:px-8 py-6">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
                <h1 className="text-2xl md:text-3xl font-semibold w-full md:w-1/3">“Energizing You” Story</h1>
                <p className="text-sm md:text-base w-full md:w-2/3 leading-relaxed">In achieving its vision as a world-class national energy company, Pertamina is committed to continuously energize. Pertamina drives people, businesses, the environment and communities by fulfilling all the positive energy needed to push them further. Pertamina is dedicated to keep energizing its surroundings through continuous transformation.</p>
            </div>
            <div className="mt-6">
                <img src="/public/assets/energizing-you-story.webp" alt="Energizing Visual" className="w-full h-auto rounded-lg"/>
            </div>
        </div>
        </section>
        <section id="Driver" className="px-4 md:px-8 py-6">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
                <h1 className="text-2xl md:text-3xl font-semibold w-full md:w-1/3">“Energizing You” Driver</h1>
                <p className="text-sm md:text-base w-full md:w-2/3 leading-relaxed">Pertamina strives to energize all aspects of life. We encourage individuals, businesses, and communities to progress by understanding and fulfilling their positive energy needs. Pertamina is dedicated to energizing others through continuous transformation.</p>
            </div>
            <div className="mt-6">
                <img src="/assets/energizing-you-image-4.webp" alt="Energizing Visual" className="w-full h-auto rounded-lg"/>
            </div>
        </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default Energizing;
