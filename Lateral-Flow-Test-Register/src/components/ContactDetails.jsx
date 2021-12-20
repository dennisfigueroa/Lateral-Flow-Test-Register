import React, {useState} from 'react';
/**
 * Footer
 * @return {JSX.Element}
 */
export default function ContactDetails() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(''); 


    return (
        <>
             <div className="form-list">
            <div className="form-group">
                <label for="exampleInputEmail1">EMAIL</label>
                <input value={email} onChange={(e => setEmail(e.target.value))}type="email" className="form-control" id="email"  aria-describedby="emailHelp" placeholder="Email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">PHONE</label>
                <input value={phone} onChange={(e => setPhone(e.target.value))}type="number" className="form-control" id="phone" placeholder="Phone"   />
            </div>
         
            </div> 
            
            
            
       </>
    );
}
