import React from 'react';
import PersonalDetails from './PersonalDetails';
import ContactDetails from './ContactDetails';
/**
 * Footer
 * @return {JSX.Element}
 */
export default function Home() {
  const [isLoading, setLoading] = useState(null); 
    
  if(isLoading) {
    return(
      <div>Hello</div>
    )
  }
  else {
    return (
        <div className="regular-container">
            
         <form>
              <PersonalDetails />
              <ContactDetails />
            </form>

          
              </div>

    
    );
  }
}
