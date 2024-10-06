import React from 'react'
import './Services.css'
import service_1 from '../../assets/program-1.png'
import service_2 from '../../assets/program-2.png'
import service_3 from '../../assets/program-3.png'
import prototype_icon from '../../assets/prototype_icon.png'
import production_icon from '../../assets/production_icon.png'
import custom_design_icon from '../../assets/custom_design_icon.png'


const Services = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src={service_1} alt="" />
            <div className="caption">
                <img src={prototype_icon} alt="" />
                <p>Prototypes</p>
            </div>
        </div>
        <div className="service">
            <img src={service_2} alt="" />
            <div className="caption">
                <img src={production_icon} alt="" />
                <p>Production</p>
            </div>
        </div>
        <div className="service">
            <img src={service_3} alt="" />
            <div className="caption">
                <img src={custom_design_icon} alt="" />
                <p>Custom Designs</p>
            </div>
        </div>
    </div>
  )
}

export default Services