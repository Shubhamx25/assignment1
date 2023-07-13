import React from 'react';
import { useLocation } from 'react-router-dom'

const CardDetails = () => {
  const location = useLocation()
  const data = location.state;
  const {id, avatar, first_name, last_name, email, phone_number,date_of_birth, gender,social_insurance_number,
        employment:{title},
        address:{city,street_address, street_name, country,zip_code, state},
        subscription:{plan, status, term, payment_method}
      } = data.user;
  
  return (
    
    <div className='cardDetails-container'>
      <div>
        <img src={avatar} alt='avatar'/>
        <table>
          <tbody>
          <tr>
            <th colSpan={2} ><h2>Personal Details</h2></th>
          </tr>
          <tr>
            <td>Id:</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{`${first_name} ${last_name}`}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Phone Number: </td>
            <td>{phone_number}</td>
          </tr>
          <tr>
            <td>Insurance Number:</td>
            <td>{social_insurance_number}</td>
          </tr>
          <tr>
            <td>Date Of Birth:</td>
            <td>{date_of_birth}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td> {gender}</td>
          </tr>
          <tr>
            <td>Title:</td>
            <td>{title} </td>
          </tr>
          <tr>
            <td >Address:</td>
            <td >{`${street_address}, ${street_name}, ${city}, ${state}, ${country} - ${zip_code}`} </td>
          </tr>
        
          <tr>
            <th colSpan={2}><h2>Subscription Details</h2></th>
          </tr>
          <tr>
            <td>Subscription Plan:</td>
            <td>{plan} </td>
          </tr>
          <tr>
            <td>Status Of Plan:</td>
            <td>{status} </td>
          </tr>
          <tr>
            <td>Term Of Plan: </td>
            <td>{term} </td>
          </tr>
          <tr>
            <td>Mode of Payment: </td>
            <td> {payment_method} </td>
          </tr>

          </tbody>
        </table>
        
      </div>
    </div>
  )
}

export default CardDetails