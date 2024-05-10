import React from 'react'
import './Claims.css'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpeg'

function Claims() {
  return (
    <div className='testimonial-parent claims-portion'>
    {/* Content Portion */}
      <div className='claim-content'>
        <h2 className='claim-heading'>What you can claim for</h2>
        <p className='claim-paragraph'>Housing disrepair covers a wide range of issues, from small patches of damp through to cracks in walls, active leaks and even infestations. Below are some of the common types of housing disrepair we deal with.</p>
        <div className='claim-list'>
          <ul>
            <li>Rising Damp</li>
            <li>Mould, Fungus / Condensation</li>
            <li>Leaking Water / Flooding</li>
            <li>Missing or Loose Tiles</li>
            <li>Structural Cracks</li>
            <li>Insect & Vermin Infestation</li>
          </ul>
          <ul>
            <li>Boiler / Central Heating Issues</li>
            <li>Defective windows and doors</li>
            <li>No Running or Hot Water</li>
            <li>Electrical Issues</li>
            <li>Asbestos</li>
          </ul>
        </div>
      </div>
      {/* Images Portion */}
      <div className='claim-image'>
        <div className='grid-img'>
          <img className='claim-img img1' src={img1} alt="" />
        </div>
        <div className='grid-img'>
          <img className='claim-img img2' src={img2} alt="" />
        </div>
        <div className='grid-img'>
          <img className='claim-img' src={img3} alt="" />
        </div>
        <div className='grid-img'>
          <img className='claim-img' src={img4} alt="" />
        </div>
        <div className='grid-img'>
          <img className='claim-img img3' src={img5} alt="" />
        </div>
        <div className='grid-img'>
          <img className='claim-img img4' src={img6} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Claims