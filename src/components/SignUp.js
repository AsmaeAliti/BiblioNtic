import React from "react";
import './SignUp.css'

export default function SignUp(){
  return(
    <div>
      <div className="header"></div>
      <div className="containerDiv">
      <div className="containerForm">
        <h3>S'inscire</h3><img src={"./imgs/signUp.png"} alt="img" />
        <br />
        <form action="">
          <input type="text" name="cef" className="form-control" placeholder="Entrer votre CEF"/><br />
          <input type="text" name="nom" className="form-control" placeholder="Entrer votre Nom"/><br />
          <input type="text" name="prenom" className="form-control" placeholder="Entrer votre Prenom"/><br />
          <input type="text" name="email" className="form-control" placeholder="Entrer votre Email"/><br />
          <input type="text" name="motDePasee" className="form-control" placeholder="Entrer votre mot de passe"/><br />
          <input type="text" name="confrmMotDePasse" className="form-control" placeholder="Confirmer le mot de passe"/><br />
          <button type="button" class="btn btn-success btn-lg">Submit</button>
        </form>
      </div>
      </div>
    </div>
  )
}