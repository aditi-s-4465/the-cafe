import './Contact.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

function Contact() {
    return (
     <div className='brick-container'>
        <div className='out-container'>
            <div className='in-container'> 
                <div className='pinboard-container'>
                    <div className='paper'>
                        <div className='pixel-title'>
                            Contact Owner
                        </div>
                        <div className='extra-text'> If you want to reach out or learn more about my work, check out the following links</div>
                            <a href="https://github.com/aditi-s-4465" target="_blank" rel="noopener noreferrer">
                            <div className='social-item'>
                                <FaGithub/>
                                <span className="pixel-body">https://github.com/aditi-s-4465</span>
                            </div>
                            </a>
  
                            <a href="https://linkedin.com/in/aditi--shrivastava" target="_blank" rel="noopener noreferrer">
                            <div className='social-item'>
                                <FaLinkedinIn/>
                                <span className="pixel-body">https://linkedin.com/in/aditi--shrivastava</span>
                            </div>
                            </a>


                            <a href="mailto:aditi.s.4465@illinois" className="social-link email-style">
                                <div className="social-item">
                                    <IoMail/>
                                    <span className="pixel-body">aditi.s.4465[at]gmail.com</span>
                                </div>
                            </a>

                        </div>
            
                        </div>
                    </div>
                </div>
            </div>
      );
}
export default Contact;