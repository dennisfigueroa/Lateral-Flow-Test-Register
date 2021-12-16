import React from 'react';
/**
 * Footer
 * @return {JSX.Element}
 */
export default function PersonalDetails() {
    return (
          
            <div className ="form-list">
            <div className="form-group">
                <label for="validationDefault01">FIRST NAME</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
            </div>
            <div className="form-group">
                <label for="validationDefault02">MIDDLE NAME</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Middle Name" />
            </div>
            <div className="form-group">
                <label for="validationDefault03">LAST NAME</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Last Name" />
            </div>
            <div className="form-group">
                    <label for="exampleInputPassword1">DATE OF BIRTH</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="MM-DD-YYYY" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">GENDER</label><br />
                    <div class="checkbox-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class ="form-check-label" for="flexRadioDefault1">
                        &nbsp;Male
                        </label>
                    </div>
                    <div class="checkbox-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class ="form-check-label" for="flexRadioDefault2">
                        &nbsp;Female
                        </label>
                    </div>
                </div>
            </div>
       
    );
}
