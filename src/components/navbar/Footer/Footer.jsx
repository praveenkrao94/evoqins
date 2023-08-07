import React from 'react'

import './Footer.css'

function Footer() {
  return (
    <footer className=" d-flex align-items-center justify-content-center footerMain">
    <div className="container-fluid text-center" style={{ height: '408px' }}>
      <div className='FooterContent'>
        
        <h2 className='footerheader'>Join the <b>family</b> today!</h2>
        <p>Take advantage of the various products to build your own customized trading strategies.</p>
        <button>Open new account</button>
      </div>
      
    </div>
  </footer>
  )
}

export default Footer