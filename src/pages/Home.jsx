import React from 'react';
import PersonalDetails from '../components/PersonalDetails';
import ContactDetails from '../components/ContactDetails';
/**
 * Footer
 * @return {JSX.Element}
 */
export default function Home() {
    return (
        <div className="regular-container">
            
         <form>
              <PersonalDetails />
              <ContactDetails />
            </form>

          
              </div>

    
    );
}
