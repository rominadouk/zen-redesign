import { ReactComponent as RelaxedImg } from "./images/relaxed.svg";

const Home = () => {
    return ( 
        <div>
            <div id='home-main-img' className='w-screen h-52'></div>
            <div className="mx-4 mt-3">
                <h1 className="font-bold text-3xl">Transform Your Life, One Self-Care Session at a Time</h1>
                <p className="mt-1">Don't wait any longer to revitalize your life. Zen is your partner in self-care, designed to fit seamlessly into your daily routine. Start your journey towards a happier, healthier you today. Download Zen and embark on a transformational path of self-discovery and well-being.</p>
            </div>
            
            <section id='stand-out-container' className="mx-7 my-5" >
            <h2 className='font-bold text-2xl mb-2'>Why Zen Stands Out</h2>
                <div className='flex flex-col'>
                    <div id='stand-out-img1' className='stand-out-imgs'></div>
                    <p className='font-bold text-lg'>Daily Wellness Reminders</p>
                    <p>Life can be hectic, but our app ensures you never forget to care for yourself. Receive daily reminders to take a moment for self-care, whether it's a quick breathing exercise or a longer wellness ritual.</p>
                </div>
                <div className='flex flex-col my-4'>
                    <div id='stand-out-img2' className='stand-out-imgs'></div>
                    <p className='font-bold text-lg'>Progress Tracking</p>
                    <p>Watch your journey to better well-being unfold with our progress tracking feature. Celebrate your achievements, no matter how small, and stay motivated to make self-care a lifelong habit.</p>
                </div>
                <div className='flex flex-col'>
                    <div id='stand-out-img3' className='stand-out-imgs'></div>
                    <p className='font-bold text-lg'>Guided Meditation and Mindfulness</p>
                    <p>Achieve inner peace with our library of guided meditation sessions and mindfulness exercises. Our experienced self-care applications will lead you through practices designed to reduce anxiety and increase clarity.</p>
                </div>
            </section>
            <section id='well-being-container' className="flex flex-col justify-center mx-3">
                <h2 className="font-bold text-2xl">Experience a New Level of Well-Being</h2>
                <p className="mt-2">Life can get overwhelming, and self-care often takes a backseat. But now, with our revolutionary self-care app, you can finally prioritize your mental, emotional, and physical health like never before.</p>

            </section>


        </div>
     );
}
 
export default Home;