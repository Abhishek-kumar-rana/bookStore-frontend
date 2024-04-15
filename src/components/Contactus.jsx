import React from 'react';
import email from './../../public/email.png'
import phone from './../../public/telephone.png'

function Contactus() {
    return (
        <>
        <div className='max-w-screen-2xl container mx-auto md:px-60 px-4 dark:text-white duration-1000'>

        <section className="relative py-20 md:py-32 overflow-hidden">
            <img className="absolute top-0 right-0 -mt-24" src="saturn-assets/images/contact/light-orange-right.png" alt="" />
            <div className="relative container px-4 mx-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-2xl mb-24">
                        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">CONTACT US</span>
                        <h1 className="max-w-md font-heading text-5xl xs:text-6xl font-bold text-orange-900 dark:text-white mb-4">
                            <span className=''>Don’t hesitate</span>
                            <span className="font-serif italic">to talk with us</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-semibold">Relax, we are ready to support for you</p>
                    </div>
                    <div className="flex flex-wrap -mx-4 items-center">
                        <div className="w-full lg:w-1/2 px-4 mb-20 lg:mb-0">
                            <div className="flex mb-16 items-center">
                                <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-10 sm:w-10 h-16 sm:h-0 ">
                                    <img src={email} alt="" />
                                </div>
                                <div>
                                    <span className="sm:text-lg text-gray-500 ">Email</span>
                                    <span className="block text-lg sm:text-2xl font-semibold text-gray-500 dark:text-grey500">lalanrana01000@gmail.com</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-10 sm:w-10 h-16 sm:h-20 ">
                                    <img src={phone} alt="" />
                                </div>
                                <div>
                                    <span className="sm:text-lg text-gray-500">Phone</span>
                                    <span className="block text-lg sm:text-2xl font-semibold text-gray-500 dark:text-grey-500">+91 6207021678</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 ">
                            <div className="max-w-lg lg:max-w-xl lg:ml-auto">
                                <h4 className="text-2xl font-bold text-gray-500 dark:text-white mb-8">Drop us a line</h4>
                                <form action="https://api.web3forms.com/submit" method="POST">
                                    <div className="flex flex-wrap -mx-4 mb-6">
                                    <input type="hidden" name="access_key" value="4b315116-af9b-4a50-b350-0b9c1c7362d4"/>
                                        <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                                            <div>
                                                <label className="block mb-1.5 text-sm font-semibold" htmlFor="">
                                                    <span>Full Name</span>
                                                    <span className="text-red-600">*</span>
                                                </label>
                                                <input name='name' className="w-full py-3 px-4 text-sm text-gray-900 dark:bg-base-content dark:text-white placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="text" placeholder="eg. Lavin Gemipit" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/2 px-4">
                                            <div>
                                                <label className="block mb-1.5 text-sm font-semibold" htmlFor="">
                                                    <span>Email</span>
                                                    <span className="text-red-600">*</span>
                                                </label>
                                                <input name='email' className="w-full py-3 px-4 text-sm text-gray-900 dark:bg-base-content dark:text-white placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="text" placeholder="Type your email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-9">
                                        <label className="block mb-1.5 text-sm font-semibold " htmlFor="">
                                            <span>Message</span>
                                            <span className="text-red-600">*</span>
                                        </label>
                                        <textarea name='message' className="w-full h-12 py-3 px-4 resize-none text-sm text-gray-900 dark:bg-base-content dark:text-white placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="text" placeholder="Type your message"></textarea>
                                    </div>
                                    <button className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-orange-900 rounded-md overflow-hidden" type="submit">
                                        <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                        <span className="relative">Submit</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <script>

        </script>
        </div>
        
        </>
    );
}

export default Contactus;
