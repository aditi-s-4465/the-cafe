import './About.css';
import { RefObject } from 'react';


interface AboutProps {
  refprops: RefObject<HTMLElement|null>;
}

function About({ refprops }: AboutProps) {
    return (
    <section ref = {refprops}>
      <div className='full-container'>
        <div className='outer-container'>
          <div className="window-container">
            <div className="horizontal-container">
              <div className='align-left'>
                <div className='pixel-coffee-container'>
                  <div className='pixel-title'>
                      <b>Meet the owner (me!)</b>
                  </div>
                </div>
                <div className='pixel-coffee-container'>
                  <div className='pixel-body'>
                    Hi! My name is Aditi and I&apos;m currently an associate software engineer wokring on a Data Engineering team at Capital One! I recently graduated from the University of Illinois with a BS in Computer Science & Anthropology and a minor in Game Studies and Design. I&apos;m passionate about the intesection of humans, creativity and technology. I have prior experience in front-end and full-stack development, HCI and analog game development (board games and escape rooms). Feel free to check out the cafe or learn more about me ^-^
                  </div>
                </div>
              </div>
              <img src = "./aditi.png"></img>
         
            </div>
          </div>
        </div>
      </div>
    </section>
    
      );  
}
export default About;