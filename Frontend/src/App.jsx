import {useState} from 'react';
import axios from 'axios';

function App() {
    const [formData, setFormData] =  useState({
        name: '',
        email:'',
        message: ''
    });
    const handleChange = (e) => {
        const{name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/submit', formData);
            console.log(response.data);
            alert("Form submitted successfully")
        }catch(error){
            console.error('error submitting form', error);
            alert('failed to submit form');
        }
    }

  return (
    <center>
      <div className='container style'>
        <h1>Sample form</h1>
      <form onSubmit={handleSubmit}>
        <div className='ele'>
          <label>Name</label>
          <input type="text" name='name' value={formData.name} id='name' placeholder='Eg. John' onChange={handleChange} required/>
        </div>
        <div className='ele'>
        <label>Email</label>
          <input type="email" name='email' value={formData.email} placeholder='John@gmail.com' onChange={handleChange} required/>
        </div>
        <div className='ele'>
          <label>Message</label>
          <textarea type="textarea" cols="25" name='message' value={formData.message} placeholder='write here' onChange={handleChange} required></textarea>
        </div>
        <div>
            <button className='btn btn-dark' type="submit">Submit</button>
        </div>
        
      </form>
    </div>
    </center>
  )
}

export default App