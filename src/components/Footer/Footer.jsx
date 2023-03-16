import React, {useState} from "react";
import { VscGithubAlt } from 'react-icons/vsc'
import { BiCopyright } from 'react-icons/bi'
import { CiLinkedin, CiMail } from 'react-icons/ci'
import { BsWhatsapp } from 'react-icons/bs'
import logo from '../../assets/logo-blanco.png'
import emailjs from "emailjs-com"

const Footer =() =>{
    const frmContact = { userEmail:'', userName:'', userSubject:'', userMessage:'' };
    const [contact,setContact] = useState(frmContact);
    const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
    };
   const handleSubmit = e =>{
	    e.preventDefault();
        emailjs.send("default_service", "template_z2mzj6p", contact, '8k-n45baimT3bEdTm')
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
				   setContact(frmContact);
		}, (err) => {
				   console.log('FAILED...', err);
		});
    }

    return(
        <>
        <footer className="footer">
            <div className="footerLogo">
                <a  href="/"><img src={logo} alt="logo" /></a>
                <p style={{fontSize:'12px', color:'var(--color2)', display:'flex', alignItems:'center'}}><BiCopyright style={{fontSize:'15px', color:'var(--color2)', marginRight:'5px'}}/>2023 - Juan Bautista Quiroga</p>
            </div>
            <div className="footerInfo">
                <h3 className="footerTitle">Contact Me</h3>
                <div>
                    <p><b>Number:</b> +54 9 3329 684-391</p>
                    <p><b>Email:</b> juanbaquiroga@gmail.com</p>
                </div>
                <div className='footerNetworks'>
                    <a className="network" href="https://github.com/juanbaquiroga"><VscGithubAlt style={{fontSize:'40px'}}/></a>
                    <a className="network" href="https://linkedin.com/in/juanbaquiroga"><CiLinkedin style={{fontSize:'40px'}}/></a>
                    <a className="network" href="mailto:juanbaquiroga@gmail.com?subject=<Feedback>&body=Message"><CiMail style={{fontSize:'40px'}}/></a>
                    <a className="network" href="https://wa.me/5493329684391"><BsWhatsapp style={{fontSize:'35px'}}/></a>
                </div>
            </div>
            <div className="footerFormContainer">
                <h3 className="footerTitle">Send a message</h3>
                <form onSubmit={handleSubmit} className="footerForm">
                    <div className="formDiv">
                        <label >Your Name</label>
                        <input value={contact.userName} onChange={handleChange} className="inputName  formInput" type="text" name="userName" id="userName" required/>
                    </div>
                    <div className="formDiv">
                        <label>Your Email</label>
                        <input value={contact.userEmail} onChange={handleChange} className="inputEmail formInput" type="email" name="userEmail" id="userEmail" required/>
                    </div>
                    <div className="formDiv">
                        <label>Subject</label>
                        <input value={contact.userSubject} onChange={handleChange} className="inputSubject formInput" type="text" name="userSubject" id="userSubject" required/>
                    </div>
                    <div className="formDiv">
                        <label>Message</label>
                        <textarea value={contact.userMessage} onChange={handleChange} className="inputMessage" type="text" name="userMessage" id="userMessage" required/>
                    </div>
                    <button className="inputSend" type="submit" value="SEND">SEND</button>
                </form>
            </div>
            
        </footer>
        </>
    )
}
export default Footer