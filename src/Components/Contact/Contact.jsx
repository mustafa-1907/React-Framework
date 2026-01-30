
import { useState } from 'react';
import './contact.css'
export default function Contact() {
    const [formData, setFormData] = useState({
        userName: "",
        userAge: "",
        userEmail: "",
        userPassword: ""
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,      
            [name]: value    
        });
    }
    return (
        <>
            <title>Contact</title>
            <section className=" py-5 bg-white">
                <div className="container py-5">
                    <div className="d-flex pt-5 flex-column gap-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h1 className="text-uppercase fw-bold">contact component</h1>
                            <span className="text-dark  p-2 position-relative customstar">
                                <i className='fa fa-star'></i>
                            </span>
                        </div>
                        <form className="w-75 mx-auto">
                        
                        <div className="mb-4 overflow-hidden">
                            <label htmlFor="userName" className={`custom-label ${formData.userName ? 'visible' : ''}`}>
                                UserName:
                            </label>
                            <input 
                                name="userName" 
                                onChange={handleInputChange} 
                                type="text" 
                                placeholder='UserName' 
                                className="form-control border-0 border-bottom py-3" 
                                id="userName" 
                            />
                        </div>

                        <div className="mb-4 overflow-hidden">
                            <label htmlFor="userAge" className={`custom-label ${formData.userAge ? 'visible' : ''}`}>
                                UserAge:
                            </label>
                            <input 
                                name="userAge" 
                                onChange={handleInputChange} 
                                type="text" 
                                placeholder='UserAge' 
                                className="form-control border-0 border-bottom py-3" 
                                id="userAge" 
                            />
                        </div>
                        <div className="mb-4 overflow-hidden">
                            <label htmlFor="userEmail" className={`custom-label ${formData.userEmail ? 'visible' : ''}`}>
                                UserEmail:
                            </label>
                            <input 
                                name="userEmail" 
                                onChange={handleInputChange} 
                                type="email" 
                                placeholder='UserEmail' 
                                className="form-control border-0 border-bottom py-3" 
                                id="userEmail" 
                            />
                        </div>
                        <div className="mb-4 overflow-hidden">
                            <label htmlFor="userPassword" className={`custom-label ${formData.userPassword ? 'visible' : ''}`}>
                                User Password:
                            </label>
                            <input 
                                name="userPassword" 
                                onChange={handleInputChange} 
                                type="password" 
                                placeholder='userPassword' 
                                className="form-control border-0 border-bottom py-3" 
                                id="userPassword" 
                            />
                        </div>
                        <button type="button" className="btn btn-success mt-3">Send Message</button>
                    </form>
                    </div>
                </div>
            </section>
        </>
    )
}
