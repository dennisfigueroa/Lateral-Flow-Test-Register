import React from 'react';
/**
 * Footer
 * @return {JSX.Element}
 */
export default function PersonalDetails() {
    return (
            
            <div className ="form-list">
            <div className="form-group">
                <label for="exampleInputEmail1">FIRST NAME</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">MIDDLE NAME</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">LAST NAME</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
                    <label for="exampleInputPassword1">DATE OF BIRTH</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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
