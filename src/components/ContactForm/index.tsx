import { FunctionComponent } from "react";

export const ContactForm: FunctionComponent = ()=>{
    
    return(
        <section className="section contacto" id="contactoo">
            <div className="container">

              <h2 className="h2 section-title">¡No te quedes con dudas! </h2>

        <p className="section-text">
          Estamos aquí para aclarar cualquier duda que tengas con respecto al servicio. Llena el formulario y te responderemos a la brevedad.  
        </p>
          
              <form id="jrcForm" method="POST" action="form-contact/formulario.php" className="contacto-form">
          
                <div className="contenedor-first-items">
                <div className="input-imagenes-principal">
                  <input type="text" name="nombre" aria-label="name" placeholder="Nombre Completo" id="nombre" required className="input-field"/>

                  <input type="email" name="email" id="email" aria-label="email" placeholder="Email" required
                    className="input-field"/>
                </div>
          
                <div className="input-imagenes-principal">
                  <input type="text" name="asunto" id="asunto" aria-label="subject" placeholder="Motivo" className="input-field"/>
          
                  <input type="tel" id="telefono" name="telefono" required aria-label="phone" placeholder="Telefono" className="input-field"/>
                </div>
              </div>
          
                <textarea name="mensaje" id="mensaje" aria-label="message" placeholder="Mensaje" required
                  className="input-field"></textarea>
          
                <button type="submit" className="button-submit">Enviar <i className="fa-solid fa-paper-plane"></i></button>
              </form>
            </div>
    </section>
    )
}

export default ContactForm;