import React from 'react';

/**
 * Footer
 * @return {JSX.Element}
 */
export default function PositiveFormPage() {
 
    return (
            
                <form>
                    <div className="form-list">
                        <div className="form-group">
                            <label for="exampleInputEmail1" >SCHOOL</label>
                            <div class="input-group mb-3" >
                                <select class="custom-select" id="inputGroupSelect01" style={{width:'100%', height:'34px'  }}>
                                    <option selected>Choose...</option>
                                    <option value="1">Theoline L. McCoy Primary School</option>
                                    <option value="2">Sir John A. Cumber Primary School</option>
                                    <option value="3">Edna M. Moyle Primary School</option>
                                    <option value="4">George Town Primary School</option>
                                    <option value="5">East End Primary School</option>
                                    <option value="6">Joanna Clark Primary School</option>
                                    <option value="7">Red Bay Primary School</option>
                                    <option value="8">Savannah  Primary School</option>
                                    <option value="9">Clifton Hunter High School</option>
                                    <option value="10">John Gray High School</option>



                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">PHONE NUMBER</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone" />
            </div>

            </div> 
            <button type="submit" class="btn btn-primary" style={{marginBottom:'20px', marginLeft:'32rem'}}>Submit</button>

       </form>

    
    );
  }

