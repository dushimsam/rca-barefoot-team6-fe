import Button from '../components/atoms/Button'
import Navbar from '../components/molecules/Navbar'

export default function HomePage() {
    const sections = [1, 2];
    return (
        <>
            <section className="bg-white text-[#1A0B3E]">
                {/* px-4 py-8  lg:py-16 */}
                <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-snug">Make Global Travel and Accomodation Easy</h1>
                        <p className="max-w-2xl text-md mb-6 font-light lg:mb-8 dark:text-gray-500">Travel the globe with ease, Book your stary from wherever as you please, For Compony Nomads
                            , this app is a breeze, International travel made simple, no unease.</p>
                        <a href="#" className="inline-flex items-end mt-8 text-white justify-center px-5 py-3 text-base font-medium text-center bg-blue-700  rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Get Started
                        </a>
                    </div>
                    <div className="mt-8 lg:col-span-5 lg:flex">
                        <img src="/home.png" alt="mockup" />
                    </div>
                </div>
            </section>

            <div className='bg-white shadow-formCard flex py-8 mt-10 font-normal mx-14 rounded px-10 text-[#1A0B3E]'>
                <div className='grid grid-cols-4 gap-4'>
                    <input name='place' className='border outline-none text-center placeholder-[#1A0B3E]' id='place' placeholder='Where are you going?' />
                    <input name='checkin' className='border outline-none text-center placeholder-[#1A0B3E]' id='checkin' placeholder='Check In Date' />
                    <input name='checkout' className='border outline-none text-center placeholder-[#1A0B3E]' id='checkout' placeholder='Check Out Date' />
                    <input name='room' className='border outline-none text-center placeholder-[#1A0B3E]' id='room' placeholder='Choose Room' />
                </div>
                <div className='mx-2'>
                    <Button onClick={() => { window.location.href = '/auth/login' }} className='px-8 py-6 truncate'>Check Out</Button>
                </div>
            </div>
            {sections.map(i => {
                return (
                    <section key={i} className="bg-white text-[#1A0B3E]">
                        {/* max-w-screen-xl */}
                        <div className="px-4 mx-auto max-w-max">
                            <div className="mx-auto max-w-screen-sm text-center py-8">
                                {i == 2 ?
                                    <h2 className="text-2xl tracking-tight font-medium leading-normal py-8">Stay at our most unique destinations</h2>
                                    :
                                    <h2 className="text-2xl pb-4 tracking-tight font-medium leading-normal">Browse Popular Hotels</h2>}
                            </div>
                            <div className="grid gap-8 lg:grid-cols-4 px-10 text-[#1A0B3E]">
                                <article className=" bg-white shadow-formCard dark:bg-white">
                                    <div className="flex justify-between items-center mb-5 text-gray-500">
                                        <img className="w-full h-80 object-cover object-center" src="https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="mockup"></img>
                                    </div>
                                    <h2 className="mb-2 text-xl font-bold text-black text-center"><a href="#">Onomo Hotel</a></h2>
                                    <div className="flex flex-col text-center text-black justify-center">
                                        <p className="font-mediam">Kigali, Rwanda</p>
                                        <p className="">Very Good. 23 reviews</p>
                                    </div>
                                </article>
                                <article className=" bg-white shadow-formCard dark:bg-white">
                                    <div className="flex justify-between items-center mb-5 text-gray-500">
                                        <img className="w-full h-80 object-cover object-center" src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="mockup"></img>
                                    </div>
                                    <h2 className="mb-2 text-xl font-bold text-black text-center"><a href="#">Onomo Hotel</a></h2>
                                    <div className="flex flex-col text-center text-black justify-center">
                                        <p className="font-mediam">Kigali, Rwanda</p>
                                        <p className="">Very Good. 23 reviews</p>
                                    </div>
                                </article>
                                <article className=" bg-white shadow-formCard dark:bg-white">
                                    <div className="flex justify-between items-center mb-5 text-gray-500">
                                        <img className="w-full h-80 object-cover object-center" src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="mockup"></img>
                                    </div>
                                    <h2 className="mb-2 text-xl font-bold text-black text-center"><a href="#">Five to Five Hotel</a></h2>
                                    <div className="flex flex-col text-center text-black justify-center">
                                        <p className="font-mediam">Kigali, Rwanda</p>
                                        <p className="">Very Good. 23 reviews</p>
                                    </div>
                                </article>
                                <article className="bg-white shadow-formCard rounded-lg dark:bg-white">
                                    <div className="flex justify-between items-center mb-5 text-gray-500">
                                        <img className="rounded w-full h-80 object-cover object-center" src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="mockup"></img>
                                    </div>
                                    <h2 className="mb-2 text-xl font-bold text-black text-center"><a href="#">Radisson Blu Hotel</a></h2>
                                    <div className="flex flex-col text-center text-black justify-center">
                                        <p className="font-mediam">Kigali, Rwanda</p>
                                        <p className="">Very Good. 23 reviews</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                )
            })}

            <section className="bg-white ">
                <div className="px-16 mx-auto max-w-max text-[#1A0B3E]">
                    <div className="mx-auto text-center py-16">
                        <h1 className="text-4xl font-medium ">Testimonials</h1>
                        <h2 className="font-medium pt-2">WHAT THEY SAY</h2>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        <article className="p-6 bg-white text-sm shadow-formCard rounded-lg border border-gray-200">
                            <blockquote className="">
                                <svg aria-hidden="true" className="ml-36 w-14 h-14" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="black" /></svg>
                            </blockquote>
                            <p className="py-4 leading-7">I recently used Barefoot Nomad for my business trip and I was really impressed with how easy and convenient it was to book my travel and accommodation. The user-friendly interface made it a breeze to navigate through the different options and the customer support was top-notch. I would definitely recommend this app to anyone who wants a stress-free travel experience</p>
                            <div className="flex">
                                <img className="w-16 h-16 mt-4 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                                <div className="ml-40 pt-8">
                                    <p className="font-bold">Jese Leos</p>
                                    <p className="">France</p>
                                </div>
                            </div>
                        </article>
                        <article className="p-6 bg-white text-sm shadow-formCard rounded-lg border border-gray-200">
                            <blockquote className="">
                                <svg aria-hidden="true" className="ml-36 w-14 h-14" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="black" /></svg>
                            </blockquote>
                            <p className="py-4 leading-7">Barefoot Nomad has been a game-changer for me as a frequent traveler. I love how I can easily book my trips and accommodation from anywhere in the world and trust that everything will be taken care of. The app is really well-designed and the integration with different travel partners is seamless. I have saved so much time and effort thanks to Barefoot Nomad and I am a loyal user for life.</p>
                            <div className="flex">
                                <img className="w-16 h-16 mt-4 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                                <div className="ml-40 pt-8">
                                    <p className="font-bold">Bonnie Green</p>
                                    <p className="">USA</p>
                                </div>
                            </div>
                        </article>
                        <article className="p-6 bg-white text-sm shadow-formCard rounded-lg border border-gray-200">
                            <blockquote className="">
                                <svg aria-hidden="true" className="ml-36 w-14 h-14" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="black" /></svg>
                            </blockquote>
                            <p className="py-4 leading-7">I was a bit skeptical about using a travel app for my vacation, but Barefoot Nomad exceeded all my expectations. From the personalized recommendations to the easy booking process, everything was smooth and enjoyable. I appreciated the attention to detail and the flexibility to customize my trip based on my preferences. I had a fantastic experience and I will definitely use this app again in the future.</p>
                            <div className="flex">
                                <img className="w-16 h-16 mt-4 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" alt="Kimon Xiao avatar" />
                                <div className="ml-40 pt-8">
                                    <p className="font-bold">Josue Ganza</p>
                                    <p className="">RWANDA</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section id='contact' className="bg-white dark:bg-gray-900 text-[#1A0B3E]">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-medium text-center dark:text-white">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center dark:text-gray-400">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form action="#" className="space-y-8">

                        <div className="grid md:grid-cols-2 md:gap-6">

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            </div>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address*</label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                        </div>
                        {/* <div className="sm:col-span-2">
        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
    </div> */}
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                </div>
            </section>

            <footer className="p-4 bg-white sm:p-6 text-sm dark:bg-gray-800">
                <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex md:justify-between">
                        <div className="grid  gap-8 sm:gap-6 sm:grid-cols-4">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Address</h2>
                                <p className="text-gray-600 dark:text-gray-400">500 Terry Francise StreetSan</p>
                                <p className="text-gray-600 dark:text-gray-400">Franciso, CA 94158</p>

                                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Email</h2>
                                <p className="text-gray-600 dark:text-gray-400">nomad@gmail.com</p>

                                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Phone</h2>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>                 */}
                                <p className="text-gray-600 dark:text-gray-400">250 788 909 777</p>

                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Menu</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className='pb-4'>
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Why Barefoot</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Services</a>
                                    </li>
                                    <li className='py-4'>
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Information</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li>
                                        <a href="#" className="hover:underline">About Us</a>
                                    </li>
                                    <li className='py-4'>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">User's Guide</a>
                                    </li>
                                    <li className="py-4">
                                        <a href="#" className="hover:underline">Support Center</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Us</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Barefoot Nomad: Travel the globe with ease, Book your stay from wherever you please, For Company Nomads, this app is a breeze, International travel made simple, no unease.
                                </p>
                            </div>

                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Nomad™</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>

                        </div>
                    </div>
                </div>
            </footer>

        </>

    )
}
