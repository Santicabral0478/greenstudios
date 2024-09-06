"use client"
import { IFormData } from "@/utils/IFormData";
import { PostContactMail } from "@/utils/PostContactMail";
import React, { FunctionComponent, useState } from "react";

export const AboutTwo: FunctionComponent = ()=>{

  const [contentForm, setContentForm] = useState<IFormData>({
    fullName: "",
    phone:  "",
    gmail: "",
    message:  "",
  })

  const [errors, setErrors] = useState("");

  const handleOnSubmitForm = async (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
  
    if(errors){
      return
    }

    try{
      const responseForm = await PostContactMail(contentForm)
      console.log(responseForm);
    } catch(err){
      console.log(err);
      
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

            <p className="section-subtitle has-before">Get every update</p>
            <br />
            <form onSubmit={handleOnSubmitForm} className="form">
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
                  type="phone" placeholder="Telefono" 
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
                  placeholder="Mensaje"
                  onChange={(e)=>{
                    updateFormData("message", e.target.value)
                  }}
                ></textarea>
                
                <button type="submit">Submit</button>
            </form>

          </div>

        </div>
      </section>
    )
}

export default AboutTwo;