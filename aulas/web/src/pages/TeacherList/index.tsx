import React from "react";
// import { Link } from "react-router-dom";

// import logoImg from "../../assets/images/logo.svg";
// import backIcon from "../../assets/images/icons/back.svg";

// import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import "./styles.css";

function TeacherList() {
  // return <h1>Teachers</h1>;
  return (
    <div id="page-teacher-list" className="container">
      {/* <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src={logoImg} alt="Proffy" />
        </div>

        <div className="header-content">
          <strong>Estes são os proffys disponíveis.</strong>
        </div>
      </header> */}

      {/* <PageHeader /> */}
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        {/* <article className="teacher-item">
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
        </article> */}

        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
