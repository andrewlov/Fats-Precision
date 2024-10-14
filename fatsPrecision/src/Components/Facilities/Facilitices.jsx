import React, { useRef } from 'react'
import './Facilities.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import machine_1 from '../../assets/user-1.png' //change to machines once done
import machine_2 from '../../assets/user-2.png'
import machine_3 from '../../assets/user-3.png'
import machine_4 from '../../assets/user-4.png'

const Facilitices = () => {

    const slider = useRef();
    let translatex = 0;

const slideForward = () => {
    if(translatex > -50) { // reached the last item in the list if it is -50 TODO: update for more images
        translatex -= 25;
    }
    slider.current.style.transform = `translateX(${translatex}%)`
}
const slideBackward = () => {
    if(translatex < 0) { // reached the last item in the list if it is -50
        translatex += 25;
    }
    slider.current.style.transform = `translateX(${translatex}%)`
}

  return (
    <div className='facilities'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'></div>
                        <img src={machine_1} alt="" />
                        <div>
                            <h3>Akira Seiki Performa V5</h3>
                            <span>CNC Mill</span>
                            {/* <p>
                            The Akira Seiki Performa V5 is a high-precision vertical machining center (VMC), designed for efficient and accurate CNC (
                            computer numerical control) machining. Akira Seiki, a Taiwanese-American company, manufactures CNC machines known for their 
                            durability and reliability in high-performance metalworking tasks.
                            </p> */}
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'></div>
                        <img src={machine_2} alt="" />
                        <div>
                            <h3>Akira Seiki Performa V4</h3>
                            <span>CNC Mill</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'></div>
                        <img src={machine_3} alt="" />
                        <div>
                            <h3>Akira Seiki Performa V3</h3>
                            <span>CNC Mill</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'></div>
                        <img src={machine_4} alt="" />
                        <div>
                            <h3>Akira Seiki Performa V2</h3>
                            <span>CNC Mill</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Facilitices