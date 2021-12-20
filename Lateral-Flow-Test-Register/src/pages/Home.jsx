import React, { useState } from 'react';
import NegativeFormPage from '../components/NegativeFormPage';
import PositiveFormPage from '../components/PositiveFormPage'; 
/**
 * Footer
 * @return {JSX.Element}
 */
export default function Home() {
  const [isLoading, setLoading] = useState(true); 
    

  //Event handler - load fields depending on if negative or positive is selected. 

  function handleChange(e) {
    const name = e.target.value;
    if (name === 'positive') {
      setLoading(true);
    }
    else if (name === 'negative') {
      setLoading(false);
    }
    else {
      setLoading(null);
    }
   
  }

  return (
    <div className="regular-container" style={{minHeight:'65vh'}}>

      <form id="testData">

        <div className="form-list">
          <div className="form-group">
            <label for="exampleInputEmail1">DATE OF TEST</label>
            <input type="email" className="form-control" id="dateoftest" aria-describedby="emailHelp" placeholder="MM-DD-YYYY" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">RESULT OF TEST</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" value="positive" id="resultoftest" onChange={handleChange} />
              <label class="form-check-label" for="flexRadioDefault1">
              &nbsp;Positive
  </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" value="negative" id="flexRadioDefault2" onChange={handleChange} />
              <label class="form-check-label" for="flexRadioDefault2">
              &nbsp;Negative
  </label>
            </div>
          </div>
        </div>


      </form>
      {isLoading && <PositiveFormPage /> }
      {(isLoading === false) && <NegativeFormPage />}
    </div>



    );
}
