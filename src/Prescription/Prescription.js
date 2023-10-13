import React from 'react'
import Footer from '../Footer/Footer'

import pro16 from '../Images/pro16.png'
import '../Style/Pres.css'

export const Prescription = () => {
    return (
        <div>
            <div className='top'>
                <div className="home">
                    <h3 className='h7'>Upload Prescription</h3>
                    <p className='h7' >Please attach a prescription to proceed</p>
                    <input placeholder='Choose file' className='h7 h8' /><p className='h3 '>Browse</p><br /><br />
                    <button className='button h7' >Continue </button>
                </div>
                <div className='table'>
                    <h2 className='h7 ' >Valid Prescription Guide</h2>
                    <ul >
                        <li> <p className='h6'>Don't crop out any part of the image.</p></li>
                        <li><p className='h6'>Avoid blurred images.</p></li>
                        <li> <p>Include details of doctor and patient + clinic visit date.</p></li>
                        <li> <p>Medicines will be dispensed as per prescription.</p></li>
                        <li><p>Supported file types: jpeg, jpg, png.</p></li>
                        <li> <p>Maximum allowed file size: 2MB</p></li>
                    </ul>
                </div>
                <div className='h5'>
                    <img className='h4' src={pro16} alt='logo' />
                </div>
            </div >
            <Footer />
        </div >
    )
}
export default Prescription;