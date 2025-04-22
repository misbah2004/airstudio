import React from 'react'

const MapSection = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.660607236922!2d67.02361517414286!3d24.909555843293617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fc12b2be36f%3A0x62d2d4af389650af!2sHnH%20SOFT%20TECH%20SOLUTIONS%20Pvt.%20Ltd.!5e0!3m2!1sen!2s!4v1745316878622!5m2!1sen!2s"
        width="1000"
        height="200"
        style={{ border: 0}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </>
  )
}

export default MapSection
