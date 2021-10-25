import React from 'react';
import PersonalDetails from '../components/PersonalDetails';
import ContactDetails from '../components/ContactDetails';
/**
 * Footer
 * @return {JSX.Element}
 */
export default function Home() {
  const [isLoading, setLoading] = useState(null); 
    
  function positiveHandler() {
    setLoading(true);
  }  

  function negativeHandler() {
    setLoading(false); 
  }

  return (
    <div className="regular-container">

      <form>
        <div className="form-list">
          <div className="form-group">
            <label for="exampleInputEmail1">DATE OF TEST</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">RESULT OF TEST</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault1">
                Postive  </label>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label class="form-check-label" for="flexRadioDefault2">
              Negative  </label>
          </div>

          

        </div>
      </form>
    </div>


    );
}
