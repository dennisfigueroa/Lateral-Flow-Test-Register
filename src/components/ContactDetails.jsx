import React from 'react';
/**
 * Footer
 * @return {JSX.Element}
 */
export default function ContactDetails() {
    return (
             <div className="form-list">
            <div className="form-group">
                <label for="exampleInputEmail1">EMAIL</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">PHONE</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone" />
            </div>
         
            </div>
       
    );
}
