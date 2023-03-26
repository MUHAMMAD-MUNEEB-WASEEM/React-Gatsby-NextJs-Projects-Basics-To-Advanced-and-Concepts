import React from 'react';

import Footer from '../Footer/Footer';

import './Contact.css';


export const Contact = () => {
  return (
  <>
         <section id="contact-section">
           <div className="container2">
           	 <h2>Contact Us</h2>
              <p>Email us and keep upto date with our latest news</p>
             <div className="contact-form">

               <div>
                 <i className="fa fa-map-marker"/><span className="form-info">  Block 18 Gulistan-e-Jauhar Karachi</span><br/>
                 <i className="fa fa-phone" > </i><span className="form-info">  +92 3158564614</span><br/>
                 <i className="fa fa-envelope"></i><span className="form-info">  muneebwaseem78@Gmail.com</span>
               </div>

           <div>        
             <form>
               <input type="text" placeholder="Your Name" required/>
               <input type="text" placeholder="Last Name"/><br/>
               <input type="Email" placeholder="Email" required/><br/>
               <input type="text" placeholder="Subject of this message"/><br/>
               <textarea name="message" placeholder="Message" rows="5" required></textarea><br/>
               <button className="submit" >Send Message</button> 
             </form>   
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}