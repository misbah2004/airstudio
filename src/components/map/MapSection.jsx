import React from 'react'

const MapSection = () => {
  return (
    <>
      <div className='flex justify-center items-center px-10 mt-10'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.0506074257!2d-74.30916781042566!3d40.69719335017224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1745920126880!5m2!1sen!2s"
        width="1300"
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
