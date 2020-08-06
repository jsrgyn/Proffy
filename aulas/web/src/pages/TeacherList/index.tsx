import React from "react";
// import { Link } from "react-router-dom";

// import logoImg from "../../assets/images/logo.svg";
// import backIcon from "../../assets/images/icons/back.svg";

// import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

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
          {/* <div className="input-block">
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
          </div> */}

          {/* <Input name="subject" label="Matéria" /> */}
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação física", label: "Educação física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "Históriates" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Portuguêses" },
              { value: "Química", label: "Química" },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />

          {/* <Input name="week_day" label="Dia da semana" /> */}
          <Input type="time" name="time" label="Hora" />
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
