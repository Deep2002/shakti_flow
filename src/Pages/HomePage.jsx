import React, { useState } from 'react';
import SmallImage from '../Components/SmallImage';

function HomePage(props) {
    const [date] = useState(Date.now('dd/mm/yyyy'));
    console.log(date);
    // const handleChange = (e) => {
    //     setDate(e.target.value);
    // };

    return (
        <>
            {/* Google fonts links */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Inder&family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            {/* Google fonts links */}
            
            
            <div className='w-full min-h-[75%] bg-[#191820] scroll-smooth'>
                <img className='h-[400px]   w-full object-cover' src={require('../Assets/Images/poster.jpeg')} alt="poster.jpeg" />
                <div className='h-[400px]   w-full absolute top-0 flex justify-center items-center flex-col gap-8' style={{ background: 'linear-gradient(to bottom, rgba(25, 24, 32, 0), rgba(0,0,0,0), rgba(25, 24, 32, 1))' }}>
                    <img className='w-40 h-40 mt-64' src={require('../Assets/Images/logo.png')} alt='logo.png'/>
                    <h1 className='font-[InknutAntiqua] tracking-wider  text-center text-4xl pl-10 pr-10 md:text-5xl text-[#fff]'>
                        Shakti Flow Entertainment
                    </h1>
                </div>
                <div className='h-28'/>
                <p className='font-[Inder] tracking-wider  text-center text-xl pl-10 pr-10 text-[#C0C0C0]'>
                    Dallas, TX
                </p>
                <p className='font-[Inder] tracking-wider  text-center text-l pl-10 pr-10 text-[#989898]'>
                    Bollywood - Hollywood - Clubs
                </p>

                <div className='justify-center items-center p-10 flex'>
                    <a href='#contactUs' className='bg-[#5A20FF] p-3 text-white font-[Inder] text-center rounded-xl w-full text-xl  border-inherit max-w-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                        Book an Event
                    </a>
                </div>
                
            </div>

            <div className='flex bg-[#191820] overflow-hidden gap-5 p-10 md:flex-nowrap flex-wrap justify-center items-center'>
                <SmallImage img={require('../Assets/Images/p1.jpeg')}/>
                <SmallImage img={require('../Assets/Images/p2.jpeg')} additionalStyle={'hidden md:block'}/>
                <SmallImage img={require('../Assets/Images/p3.jpeg')}/>
                <SmallImage img={require('../Assets/Images/p4.jpeg')}/>
                <SmallImage img={require('../Assets/Images/p5.jpeg')}/>
            </div>
            {/* <div className='flex bg-black'>
                <img className='opacity-85' src={require('../Assets/Images/p1.jpeg')}/>
            </div> */}

           <div id='contactUs' className='flex justify-center items-center flex-col bg-[#191820] pt-10 pb-20'>
                    <h1 className='font-[InknutAntiqua] tracking-wider  text-center text-3xl  md:text-4xl text-[#fff]'>
                        Contact Us:
                    </h1>
                    <p className='pt-5 font-[Inder] tracking-wider  text-center text-l pl-10 pr-10 text-[#989898]'>
                        For more information fill out this form and we will reach out to you!
                    </p>
                    <form className='font-[Inder] pl-10 pr-10 flex flex-col justify-center w-screen pt-10 gap-3 max-w-[700px]'>
                        <input className='h-12 p-3 rounded-lg outline-none text-lg' required='true'type='name' name='name' placeholder='Full Name'/>
                        <input className='h-12 p-3 rounded-lg outline-none text-lg' required='true' type='email' name='email' placeholder='Email'/>
                        <input className='h-12 p-3 rounded-lg outline-none text-lg' required='true' type='phone' name='phone' placeholder='Phone number'/>
                        <textarea className='h-24 p-3 rounded-lg outline-none text-lg'  required='true' type='text' name='text' placeholder='Event type: (B-day, wedding, grad, work, etc.)'/>
                        {/* <input className='h-12 p-3 rounded-lg outline-none' required='true'  placeholder='Event Type'/> */}
                        <select  id="dropdown" class="h-12 p-3 rounded-lg outline-none">
                            <option value="default"># of guests</option>
                            <option value="0-100">0-100</option>
                            <option value="100-500">100-500</option>
                            <option value="500+">500+</option>
                        </select>
                        <div className='flex gap-3'>
                            <input type="date" id="eventDate" name="date" defaultValue={new Date().toISOString().split('T')[0]} class="flex-1 h-12 p-3 rounded-lg outline-none" required />
                            <input type="time" id="eventDate" name="time" defaultValue={'12:00'} class="flex-1 h-12 p-3 rounded-lg outline-none" required />
                        </div>
                        <input className='bg-[#0069E4] h-12 p-3 mt-3 rounded-lg outline-none text-white text-lg' required='true' type={'submit'} value={'Send'}/>
                    </form>
           </div>

            <footer className='bg-[#101010] h-24 text-center p-5 space-y-2'>
                <p className='text-white text-xs'>© 2024 - Shakti Flow Entertainment - All right reserves</p>
                <p className='text-[#979797] text-xs'>Developer: Deep Parmar; Images: unsplash.com</p>
            </footer>
        </>
    );
}

export default HomePage;