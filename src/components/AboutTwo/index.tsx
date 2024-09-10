"use client"
import { IFormData } from "@/utils/IFormData";
import { PostContactMail } from "@/utils/PostContactMail";
import React, { FunctionComponent, useState } from "react";
import AlertBad from "../AlertBad";

export const AboutTwo: FunctionComponent = ()=>{
  const initialValue = {
    fullName: "",
    phone:  "",
    gmail: "",
    message:  "",
  }
  const [isLoadButton, setIsLoadButton] = useState<boolean>(false);
  const [occSucces, setOccSucces] = useState<string>("");
  const [occError, setOccError] = useState<string>("");
  const [contentForm, setContentForm] = useState<IFormData>(initialValue)

  const [errors, setErrors] = useState<string>("");

  const showSuccess = ()=>{
    setOccSucces("show-notification");

    setTimeout(()=>{
      setOccSucces("")
    }, 5000)
  }

  const showErrors = ()=>{
    setOccError("show-notification")

    setTimeout(()=>{
      setOccError("")
    }, 5000)
  }

  const validateForm = () => {

    if (contentForm.fullName.trim().length < 2 || contentForm.fullName === "") {
      setErrors("El nombre completo debe tener al menos 2 caracteres.");
      return false
    }

    if (!/^\d{10,15}$/.test(contentForm.phone) || contentForm.phone === "") {
      setErrors("El teléfono debe tener entre 10 y 15 dígitos.");
      return false
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contentForm.gmail) || contentForm.gmail === "") {
      setErrors("El correo electrónico no es válido.");
      return false
    }

    if (contentForm.message === "") {
      setErrors("Debes introducir un mensaje.");
      return false
    }

    return true;
  };

  const handleOnSubmitForm = async (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();


    setIsLoadButton(true);

    if (!validateForm()){
      setIsLoadButton(false)
      showErrors()
      return
    }
  
    if(errors){
      return
    }

    try{
      const responseForm = await PostContactMail(contentForm)
      showSuccess()
      setContentForm(initialValue)
      setIsLoadButton(false)
    } catch(err){
      console.log("Error inesperado");
    }
  }

  const updateFormData = (prop: string, value: string)=> {
    setContentForm(prevState => ({
      ...prevState,
      [prop]: value
    }))
  }

    return(
      <section className="section contact-form-cont has-bg-image pattern-element" aria-label="contact-form-cont">
        <div className="container">

          <figure className="contact-form-cont-banner">
            <img src="/newsletter-banner.png" width="355" height="356" loading="lazy"
              alt="contact-form-cont banner" className="w-100"/>
          </figure>

          <div className="contact-form-cont-content">

            <br />
            <form onSubmit={handleOnSubmitForm} className="form">

              
            <div className={`notifications-container ${occError}`}>
              <div className="error-alert">
                <div className="flex">
                  <div className="flex-shrink-0">
                    
                    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="error-svg">
                      <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="error-prompt-container">
                    <p className="error-prompt-heading">{errors}
                    </p><div className="error-prompt-wrap">
                      <ul className="error-prompt-list" role="list">
                        <li>Password must be at least !8 characters</li>
                      </ul>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`notifications-container ${occSucces}`}>
              <div className="success">
                  <div className="flex">
                  <div className="flex-shrink-0">
                      
                      <svg className="succes-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                  </div>
                  <div className="success-prompt-wrap">
                      <p className="success-prompt-heading">Correo Enviado
                      </p><div className="success-prompt-prompt">
                      <p>You're happy now? Does this impulsive action is</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

                <div className="title">Contact us</div>
                <input 
                  name="fullName" 
                  value={contentForm.fullName} 
                  type="text" 
                  placeholder="Nombre" 
                  className="input"
                  onChange={(e)=>{
                    updateFormData("fullName", e.target.value)
                  }}
                />

                <input 
                  name="phone" 
                  value={contentForm.phone} 
                  type="phone" 
                  placeholder="Telefono" 
                  className="input"
                  onChange={(e)=>{
                    updateFormData("phone", e.target.value)
                  }}
                />

                <input 
                  name="gmail" 
                  value={contentForm.gmail} 
                  type="email" 
                  placeholder="Email" 
                  className="input"
                  onChange={(e)=>{
                    updateFormData("gmail", e.target.value)
                  }}
                />

                <textarea 
                  name="message" 
                  value={contentForm.message} 
                  placeholder="Tu mensaje"
                  onChange={(e)=>{
                    updateFormData("message", e.target.value)
                  }}
                ></textarea>
                
                  {
                    isLoadButton ? 

                    <button>
                      Enviando
                      <div className="loader-button"></div>  
                    </button>
                    :  
                    <button style={{padding: "12px 40px"}} type="submit">
                      Enviar
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                    </button>
                  }
            </form>

          </div>

        </div>
      </section>
    )
}

export default AboutTwo;