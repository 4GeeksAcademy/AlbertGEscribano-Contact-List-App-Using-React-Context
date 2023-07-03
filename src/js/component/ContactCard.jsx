import React from 'react';
import { Context } from '../store/appContext';
import { useContext } from 'react';


const ContactCard = ({ contact, editContact }) => {

  const { actions } = useContext(Context)

  
  const { full_name, email, phone, address, id } = contact;

  const idForeditContact = (id)=>{
    editContact()
    actions.updateId(id)
  }
 


  return (
    <div className="card focusCard col-md-12 mb-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://w7.pngwing.com/pngs/69/512/png-transparent-computer-icons-contact-monochrome-silhouette-internet-thumbnail.png" alt="Contact" className="img-fluid  mt-3 mb-3 bx bx-tada-hover" style={{ height: "200px" }} />
        </div>
        <div className="col-md-6 text-start">
          <div className="card-body">
            <h5 className="card-title mt-3">{full_name}</h5>
            <p className="card-text">
              <strong>Email:</strong> {email}
            </p>
            <p className="card-text">
              <strong>Phone:</strong> {phone}
            </p>
            <p className="card-text">
              <strong>Address:</strong> {address}
            </p>
          </div>
        </div>
        <div className="col-md-2 card-footer d-flex justify-content-center align-items-center">
            <button className="btn btn-light bg-transparent  me-2" style = {{color: 'green', fontSize: "3rem"}} onClick={()=>idForeditContact(id)}>
            &#9998;
              </button>
            <button className="btn btn-light bg-transparent" style = {{color: 'red' ,fontSize: "3rem"}} onClick={()=>actions.deleteContact(id)}>
            &#9746;
              </button>
        </div>
      </div>

    </div>
  );
};

export default ContactCard;