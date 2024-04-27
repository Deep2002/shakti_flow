import React, { useState } from 'react';
import SmallImage from '../Components/SmallImage';
import axios from 'axios';

function HomePage(props) {
    // const [date] = useState(Date.now('dd/mm/yyyy'));

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [eventType, setEventType] = useState('');
    const [numOfGuests, setNumOfGuests] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [notFiled, setNotFiled] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [ErrorSendingEmail, setErrorSendingEmail] = useState(false);

    const [responseMessage, setResponseMessage] = useState();
    const [loading, setLoading] = useState(false);

    const handleSendData = async (e) => {

        if (name === "" || email === "" || phone === "" || eventType === "" || numOfGuests === "# of guests" || eventDate === "" || eventTime === "")
        {
            setNotFiled(true);
            return
        }
        setLoading(true);

      const data = {
        name: name,
        email: email,
        phone: phone,
        eventType: eventType,
        eventDate: eventDate,
        eventTime: eventTime,
        numOfGuests: numOfGuests
      };
  
      try {
        // const response = await axios.post('http://localhost:8080/api/ess', data);
        const response = await axios.post('https://ess-bugfixed.onrender.com/api/ess', data);
        setResponseMessage(response.data);
        setSubmissionSuccess(true);
        console.log(responseMessage)
      } catch (error) {
        console.error('Error occurred:', error);
        setSubmissionSuccess(true);
        setErrorSendingEmail(true);
      }
      finally {
            setLoading(false);
        }
    };
  

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
        { !submissionSuccess &&
           <div id='contactUs' className='flex justify-center items-center flex-col bg-[#191820] pt-10 pb-20'>
                    <h1 className='font-[InknutAntiqua] tracking-wider  text-center text-3xl  md:text-4xl text-[#fff]'>
                        Contact Us:
                    </h1>
                    <p className='pt-5 font-[Inder] tracking-wider  text-center text-l pl-10 pr-10 text-[#989898]'>
                        For more information fill out this form and we will reach out to you!
                    </p>
                    
                    <form onSubmit={(e)=>e.preventDefault()} className='mt-5 font-[Inder] pl-10 pr-10 flex flex-col justify-center w-screen pt-3 gap-3 max-w-[700px]'>
                        <input onChange={(e)=>setName(e.target.value)} className='h-12 p-3 rounded-lg outline-none text-lg' required='true'type='name' name='name' placeholder='Full Name'/>
                        <input onChange={(e)=>setEmail(e.target.value)} className='h-12 p-3 rounded-lg outline-none text-lg' required='true' type='email' name='email' placeholder='Email'/>
                        <input onChange={(e)=>setPhone(e.target.value)} className='h-12 p-3 rounded-lg outline-none text-lg' required='true' type='phone' name='phone' placeholder='Phone number'/>
                        <textarea onChange={(e)=>setEventType(e.target.value)}  className='h-24 p-3 rounded-lg outline-none text-lg'  required='true' type='text' name='text' placeholder='Event type: (B-day, wedding, grad, work, etc.)'/>
                        {/* <input className='h-12 p-3 rounded-lg outline-none' required='true'  placeholder='Event Type'/> */}
                        <select onChange={(e)=>setNumOfGuests(e.target.value)}  id="dropdown" class="h-12 p-3 rounded-lg outline-none">
                            <option value="default"># of guests</option>
                            <option value="0-100">0-100</option>
                            <option value="100-500">100-500</option>
                            <option value="500+">500+</option>
                        </select>
                        <div className='flex gap-3'>
                            <input onChange={(e)=>setEventDate(e.target.value)}  type="date" id="eventDate" name="date" min={new Date().toISOString().split('T')[0]} defaultValue={new Date().toISOString().split('T')[0]} class="flex-1 h-12 p-3 rounded-lg outline-none" required />
                            <input onChange={(e)=>{
                                        const inputTime = e.target.value;
                                        const timeParts = inputTime.split(':');
                                        let hours = parseInt(timeParts[0], 10);
                                        const minutes = timeParts[1];
                                    
                                        let suffix = 'AM';
                                        if (hours >= 12) {
                                          suffix = 'PM';
                                          if (hours > 12) {
                                            hours -= 12;
                                          }
                                        }
                                        if (hours === 0) {
                                          hours = 12;
                                        }
                                        const formattedTime = `${hours}:${minutes} ${suffix}`;
                                    setEventTime(formattedTime)
                                }}  type="time" id="eventDate" name="time" defaultValue={'12:00'} class="flex-1 h-12 p-3 rounded-lg outline-none" required />
                        </div>
                        {notFiled&&<p className='pt-2 pb-2 font-[Inder] tracking-wider  text-center text-l text-[#ff2a2a] bg-red-100 rounded-lg border-[#ff2a2a] border-2'>
                            Please fill out everything!<br/>Make sure date & time as well.
                        </p>}
                        {loading&&<span className='flex justify-center items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-dasharray="15" stroke-dashoffset="15" stroke-linecap="round" stroke-width="2.95" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
                            </span>}
                        <input onClick={handleSendData} className='bg-[#0069E4] h-12 p-3 mt-3 rounded-lg outline-none text-white text-lg hover:cursor-pointer' disabled={loading} style={{opacity: loading?0.2:1}} required='true' type={'submit'} value={'Send'}></input>
                    </form>
                </div>
            }

            {submissionSuccess &&

                <div className='w-full p-10 flex justify-center items-center flex-col bg-[#191820] pt-10 pb-20'>
                        
                        {ErrorSendingEmail?<h1 className='font-[InknutAntiqua] tracking-wider  text-center text-2xl  md:text-3xl text-[#fff]'><span className='text-red-400'>Sorry!</span><br/>Error occurred, you can still contact us directly on:  <br/><span onClick={()=> {
                            window.location.href = `mailto:${"shaktiflowentertainment@gmail.com"}?subject=${encodeURIComponent("")}`;
                        }} className='text-sm text-blue-600 hover:cursor-pointer underline'>shaktiflowentertainment@gmail.com</span></h1>:
                        <h1 className='font-[InknutAntiqua] tracking-wider  text-center text-2xl  md:text-3xl text-[#fff]'><span className='text-blue-300'>Thank you :)</span><br/>We have received your form, we will reach out to you soon!</h1>}
                </div>
            }
            <footer className='bg-[#101010] h-24 text-center p-5 space-y-2'>
                <p className='text-white text-xs'>© 2024 - Shakti Flow Entertainment - All right reserves</p>
                <p className='text-[#979797] text-xs'>Developer: Deep Parmar</p>
            </footer>
        </>
    );
}

export default HomePage;