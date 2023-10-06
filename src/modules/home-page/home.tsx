import { ReactComponent as TargetIcon } from "./images/target-icon.svg";
import { ReactComponent as SupportIcon} from "./images/support-icon.svg"

const Home = () => {
    return ( 
        <div className='font-archivo'>
            {/* Main Top Image + Image Description*/}
            <div id='home-main-img' className='w-screen h-60 lg:h-96'></div>
            <div className='mx-4 mt-9 md:flex md:flex-row md:justify-center lg:mt-16 lg:mx-20'>
                <h1 className='font-bold text-4xl  mb-4 md:w-80 md:place-self-center lg:place-self-start lg:text-5xl lg:w-96 lg:mr-4'>Transform Your Life, One Self-Care Session at a Time</h1>
                <div>
                    <p className='mt-1 md:w-96 md:ml-10 lg:mt-0 lg:w-96'>Don't wait any longer to revitalize your life. Zen is your partner in self-care, designed to fit seamlessly into your daily routine. Start your journey towards a happier, healthier you today. Download Zen and embark on a transformational path of self-discovery and well-being.</p>
                    {/* BUTTONS TOP */}
                    <div className=' flex flex-row mt-2 md:ml-10'>
                        <button className='bg-sea-green-blue hover:bg-blue-500 text-off-white font-semibold py-2 px-4 hover:border-transparent rounded mr-2'>Try Zen for Free</button>
                        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-sea-green-blue hover:border-transparent rounded'>Download</button>
                    </div>
                </div>

            </div>
            {/* Stand Out Section */}
            <h2 className='font-bold text-2xl mt-7 ml-7  mb-3 lg:mb-10 lg:text-3xl lg:mt-20 lg:ml-20'>Why Zen Stands Out</h2>
            <section id='stand-out-container' className='mx-7 mb-16 md:flex md:flex-row lg:mx-20' >
                <div className='flex flex-col'>
                    <div id='stand-out-img1' className='stand-out-imgs'></div>
                    <p className='font-bold text-lg mt-2'>Daily Wellness Reminders</p>
                    <p>Life can be hectic, but our app ensures you never forget to care for yourself. Receive daily reminders to take a moment for self-care, whether it's a quick breathing exercise or a longer wellness ritual.</p>
                </div>
                <div className='flex flex-col my-6 md:my-0 md:mx-3'>
                    <div id='stand-out-img2' className='stand-out-imgs'></div>
                    <p className='font-bold text-lg mt-2'>Progress Tracking</p>
                    <p>Watch your journey to better well-being unfold with our progress tracking feature. Celebrate your achievements, no matter how small, and stay motivated to make self-care a lifelong habit.</p>
                </div>
                <div className='flex flex-col'>
                    <div id='stand-out-img3' className='stand-out-imgs'></div>
                    <p className='font-bold text-lg mt-2'>Guided Meditation and Mindfulness</p>
                    <p>Achieve inner peace with our library of guided meditation sessions and mindfulness exercises. Our experienced self-care applications will lead you through practices designed to reduce anxiety and increase clarity.</p>
                </div>
            </section>

            {/* Experience Well-Being Section */}
            <section id='well-being-container' className='flex flex-col justify-center md:flex-row mx-3 my-4 md:mt-32 lg:mx-14'>

                {/* Medium View:Left Column, Well-Being Start */}
                <div className=" mx-7 md:flex md:flex-col md:w-3/4 md:mt-5 mr-16">
                    <div className="">
                        <h2 className='font-bold text-2xl mb-2'>Experience a New Level of Well-Being</h2>
                        <div id='well-being-img-mobile' className='well-being-img  place-self md:hidden'></div>
                        <p className="mt-2">Life can get overwhelming, and self-care often takes a backseat. But now, with our revolutionary self-care app, you can finally prioritize your mental, emotional, and physical health like never before.</p>
                    </div>
                    {/* Icon Columns */}
                    <div className='my-6 md:flex md:flex-row '>
                        <div className='mb-3 md:mr-1 md:px-2 md:mb-0'>
                            <TargetIcon className="mb-2" />
                            <p className='font-bold'>Personalized Self-Care Plans</p>
                            <p>Say goodbye to one-size-fits-all approaches. Our app crafts personalized self-care plans tailored to your unique needs and goals. Whether you want to reduce stress, improve sleep, or boost your confidence, we've got you covered.</p>
                        </div>
                        <div className='md:px-2'>
                            <SupportIcon className="mb-2"/>
                            <p className='font-bold'>Community and Support</p>
                            <p>Connect with like-minded individuals on our platform, sharing experiences, tips, and inspiration. Join a community that understands the importance of self-care and self-discovery.</p>
                        </div>
                    </div>
                </div>
                {/* Medium View:Left Column, Well-Being End */}
                <div id='well-being-img-desktop' className='well-being-img hidden lg:block' ></div>
            </section>
            {/* Revitalized Section */}
            <section className="lg:flex lg:flex-row lg:justify-between lg:mx-14 lg:my-20">    
                <div className='mx-3'>
                    <h3 className='font-bold text-4xl text-center'>Your revitalized life begins here.</h3>
                    <p className='text-center lg:text-left'>Take the first step towards a renewed you.</p>
                </div>
                {/* Revitalized Buttons */}
                <div className='mb-7 mt-3 flex flex-row justify-center'>
                    <button className='bg-sea-green-blue hover:bg-blue-500 text-off-white font-semibold py-2 px-4 hover:border-transparent rounded mr-2'>Try Zen for Free</button>
                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-sea-green-blue hover:border-transparent rounded'>Download</button>
                </div>
            </section>




        </div>
     );
}
 
export default Home;