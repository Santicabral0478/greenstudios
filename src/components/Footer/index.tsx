import { FunctionComponent } from "react";

export const Footer: FunctionComponent = ()=>{

    return(
        
<footer className="footer">
  <div className="">
    <img className="footer-logo-img" src="/footerlogo.png" alt="logo footer"/>
    <p className="copyright">
      Copyright &#169; 2023 Green studios All Rights Reserved.
    </p>
  </div>
</footer>
    )
}


export default Footer;