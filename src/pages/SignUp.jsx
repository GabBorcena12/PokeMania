import React, { useReducer, useState } from 'react';
import '../css/signup.css'
import Modal from './Modal';

// Reducer function to manage form state
const formReducer = (state, action) => {  
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return { username: '', email: '', password: '' };
    default:
      return state;
  }
};

const SignUp = ({submitSignUp}) => {
  const [showModal, setShowModal] = useState(false); 
  const initialFormState = { username: '', email: '', password: '' };
  const [formData, dispatchformData] = useReducer(formReducer, initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatchformData({ type: 'UPDATE_FIELD', field: name, value });
  };
  
  const closeModal = () => {
    setShowModal(false); // Function to close the modal
    dispatchformData({ type: 'RESET_FORM' });
    submitSignUp();
  }

  return (
    <>
      <section>
        <div className='signup-container'>
          <div className='form-container'>
              <form onSubmit={handleSubmit} className='form'>
              <h2>Sign Up</h2>
              <div className='form-group'>
                  <label htmlFor='username'>Username</label>
                  <input
                  id='username'
                  name='username' 
                  type='text'
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  />
              </div>
              <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input
                  id='email'
                  name='email' 
                  type='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  />
              </div>
              <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                  id='password'
                  name='password' 
                  type='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  />
              </div>
              <button type='submit'>Sign Up</button>
              </form>
            </div>
        </div>
      </section>
      
      {/* Render the Modal component */}
      <Modal 
          show={showModal} 
          onClose={closeModal} 
          header="Account Registration" 
          content={`Account ${formData.username} registered. Thank you!`} /> 
    </>   
    
  );
};

export default SignUp;
