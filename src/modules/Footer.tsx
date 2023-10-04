import { ReactComponent as ZenLogo } from '../assets/zen-logo.svg'
const Footer = () => {
    
    return ( 
            <footer className='bg-light-brown mt-auto w-screen pb-10 text-base md:flex md:flex-row md:justify-around'>
                <div id='footer-logo-container' className='flex flex-row justify-center md:place-self-center md:ml-5'>
                    <ZenLogo className='h-24 mt-6'/>
                </div>
                <div id='footer-contact' className='mt-3 ml-4 md:mt-8 whitespace-nowrap'>
                    <p className='font-bold'>Contact Us</p>
                    <ul>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Pinterest</li>
                        <li>Facebook</li>
                    </ul>

                </div>
                <div id='footer-links-container' className='ml-4 mt-8 md:mt-8 whitespace-nowrap'>
                    <ul className='flex flex-col justify-between'>
                        <li className='mb-1' >Help</li>
                        <li className='mb-1'>Blog</li>
                        <li className='mb-1'>Terms of Service</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div id='footer-disclaimer-container' className='ml-4 mt-8 lg:mx-20'>
                    <p className='font-bold'>Disclaimer</p>
                    <p className='mt-1'>The content within this app is provided for educational and informational purposes only. It is not intended to diagnose, treat, cure, or prevent any medical condition or replace professional advice. Consult your healthcare provider for personalized recommendations. </p>
                </div>
                
            </footer>
     );
}
 
export default Footer;