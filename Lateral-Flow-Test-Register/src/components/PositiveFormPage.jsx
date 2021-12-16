import React from 'react';
import PersonalDetails from './PersonalDetails';
import ContactDetails from './ContactDetails';
/**
 * Footer
 * @return {JSX.Element}
 */
export default function PositiveFormPage() {
 
    return (
            
         <form method="post">
              <PersonalDetails />
              <ContactDetails />
              <button type="submit" class="btn btn-primary" style={{marginBottom:'20px', marginLeft:'32rem'}}>Submit</button>

            </form>

          


    
    );
  }

