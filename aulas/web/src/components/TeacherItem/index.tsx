import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          alt=""
        />
        <div>
          <strong>Diego Fernandes</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada. Apaixonado
        <br /> <br />
        por explodir coisas em laboratório e por mudar a vida das pessoas
        através de experiências.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button"></button>
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </footer>
    </article>
  );
}

export default TeacherItem;
