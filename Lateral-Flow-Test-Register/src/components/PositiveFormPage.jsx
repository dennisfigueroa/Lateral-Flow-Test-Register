import React, {useState} from 'react';

/**
 * Footer
 * @return {JSX.Element}
 */
export default function PersonalDetails() {
    const [firstname, setfirstname] = useState(''); 
    const [middlename, setMiddleName] = useState(''); 
    const [lastname, setLastName] = useState(''); 
    const [dateofbirth, setDateOfBirth] = useState(''); 
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(''); 
    const [dateoftest, setDateOfTest] = useState(''); 
    const testresult = 'positive';
    const [isPending, setIsPending] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setIsPending('true'); 
        const user = { testresult, dateoftest, firstname, middlename, lastname, dateofbirth, email, phone }
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => { 
            console.log("New user added");
            setIsPending(false); 
     })
    }


    return (
        <form onSubmit={handleSubmit}  method="post" id="positiveFormPage">
        <div className ="form-list">
        <div className="form-group">
            <label for="validationDefault01">DATE OF TEST</label>
            <input onChange ={(e) => setDateOfTest(e.target.value)} type="date" className="form-control" id="dateoftest"  placeholder="MM-DD-YYYY" />
          </div>
            <div className="form-group">
                <label for="validationDefault01">FIRST NAME</label>
                <input value ={firstname} onChange={(e) => setfirstname(e.target.value)} type="text" className="form-control" id="firstname"  placeholder="First Name" />
            </div>
            <div className="form-group">
                <label for="validationDefault02">MIDDLE NAME</label>
                <input value ={middlename} onChange={(e) => setMiddleName(e.target.value)} type="text" className="form-control" id="middlename"  placeholder="Middle Name" />
            </div>
            <div className="form-group">
                <label for="validationDefault03">LAST NAME</label>
                <input value ={lastname} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" id="lastname"   placeholder="Last Name" />
            </div>
            <div className="form-group">
                    <label for="exampleInputPassword1">DATE OF BIRTH</label>
                    <input value ={dateofbirth} onChange={(e) => setDateOfBirth(e.target.value)} type="date" className="form-control" id="dateofbirth"  placeholder="MM-DD-YYYY" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">GENDER</label><br />
                    <div class="checkbox-inline">
                        <input class="form-check-input" type="radio"   name="flexRadioDefault" id="gender" />
                        <label class ="form-check-label" for="flexRadioDefault1">
                        &nbsp;Male
                        </label>
                    </div>
                    <div class="checkbox-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="gender" checked />
                        <label class ="form-check-label" for="flexRadioDefault2">
                        &nbsp;Female
                        </label>
                    </div>
                </div>
         
            </div>
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
             {!isPending && <button type="submit" class="btn btn-primary" style={{marginBottom:'20px', marginLeft:'32rem'}}>Submit</button>}
             {  isPending && <button class="btn btn-primary" disabled style={{marginBottom:'20px', marginLeft:'32rem'}}>Adding user...</button>}
            </form>
       
    );
}
