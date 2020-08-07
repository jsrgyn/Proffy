import React, { useState, FormEvent } from "react";
// import { Link } from "react-router-dom";

// import logoImg from "../../assets/images/logo.svg";
// import backIcon from "../../assets/images/icons/back.svg";

// import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import api from "../../services/api";

import "./styles.css";

function TeacherList() {
  // return <h1>Teachers</h1>;

  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    console.log("a");

    console.log({
      subject,
      week_day,
      time,
    });

    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    console.log(response.data);
    setTeachers(response.data);
  }

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
        <form id="search-teachers" onSubmit={searchTeachers}>
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
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
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
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
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
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Buscar</button>
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

        {/* <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem /> */}

        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
