import React from "react";
import "./App.css";

function App() {
  const resumeData = {
    name: "Белекова Айтурган Алтынбековна",
    title: "Junior Developer | Student",

    contacts: {
      email: "ajturgan866@gmail.com",
      github: "https://github.com/ajturgan866-maker",
      location: "Бишкек, Кыргызстан",
    },

    about:
      "Студентка Кыргызско-Германского института прикладной информатики, направление «Программные технологии». Изучаю разработку программного обеспечения, алгоритмы, базы данных и веб-технологии. Работаю над учебными проектами на Java и Python, развиваю навыки backend-разработки и создания пользовательских интерфейсов. Стремлюсь применять теоретические знания на практике и постоянно совершенствовать свои навыки.",

    skillsPrimary: ["Python", "Java", "PostgreSQL"],

    skillsSecondary: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Git & GitHub",
      "Spring Boot",
      "JavaFX",
      "SQL",
      "Cisco Networking",
    ],

    experience: [
      {
        role: "MiniPOS",
        place: "Учебный проект",
        period: "В разработке",
        detail:
          "Разработка системы учёта продаж с использованием Java, Spring Boot, JavaFX и PostgreSQL. Проект предусматривает работу с базой данных, пользовательским интерфейсом и разграничением доступа по ролям.",
        technologies: ["Java", "Spring Boot", "JavaFX", "PostgreSQL"],
      },
      {
        role: "TaxiGo",
        place: "Курсовой проект",
        period: "В разработке",
        detail:
          "Разработка учебного проекта сервиса заказа такси. Работа над структурой backend-приложения, моделями данных, обработкой заказов и алгоритмами.",
        technologies: ["Java", "Spring Boot", "SQL"],
      },
      {
        role: "Personal Portfolio",
        place: "Личный проект",
        period: "2026",
        detail:
          "Создание персонального сайта-портфолио на React для представления образования, технических навыков и проектов. Работа с компонентами, JSX и CSS.",
        technologies: ["React", "JavaScript", "CSS", "Vite"],
      },
    ],

    education: [
      {
        degree: "Программные технологии",
        school:
          "Кыргызско-Германский институт прикладной информатики",
        period: "2025 — настоящее время",
        detail: "Бакалавриат",
      },
    ],

    languages: [
      { name: "Русский", level: "Владею" },
      { name: "Кыргызский", level: "Владею" },
      { name: "Английский", level: "A2–B1" },
      { name: "Немецкий", level: "Начальный уровень" },
    ],
  };

  return (
    <div className="container">
      <div className="card">
        {/* Шапка профиля */}
        <header className="profile-header">
          <div className="avatar-placeholder" aria-hidden="true">
            AB
          </div>

          <div className="profile-details">
            <h1>{resumeData.name}</h1>

            <span className="subtitle">{resumeData.title}</span>

            <div className="contacts-grid">
              <div>📍 {resumeData.contacts.location}</div>

              <div>
                📧{" "}
                <a href={`mailto:${resumeData.contacts.email}`}>
                  {resumeData.contacts.email}
                </a>
              </div>

              <div>
                🔗{" "}
                <a
                  href={resumeData.contacts.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* О себе */}
        <section className="section">
          <h2 className="section-title">О себе</h2>

          <p className="about-text">{resumeData.about}</p>
        </section>

        {/* Навыки */}
        <section className="section">
          <h2 className="section-title">Технические навыки</h2>

          <div className="skill-category">
            <span className="category-title">
              Основные языки и технологии
            </span>

            <div className="badges">
              {resumeData.skillsPrimary.map((skill) => (
                <span key={skill} className="badge primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <span className="category-title">
              Дополнительные технологии и инструменты
            </span>

            <div className="badges">
              {resumeData.skillsSecondary.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Проекты */}
        <section className="section">
          <h2 className="section-title">Проекты</h2>

          {resumeData.experience.map((item) => (
            <article key={item.role} className="experience-item">
              <div className="item-header">
                <span className="item-role">{item.role}</span>
                <span className="item-date">{item.period}</span>
              </div>

              <div className="item-place">{item.place}</div>

              <p className="item-desc">{item.detail}</p>

              <div className="badges project-badges">
                {item.technologies.map((technology) => (
                  <span key={technology} className="badge">
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* Образование */}
        <section className="section">
          <h2 className="section-title">Образование</h2>

          {resumeData.education.map((item) => (
            <article key={item.school} className="education-item">
              <div className="item-header">
                <span className="item-role">{item.degree}</span>
                <span className="item-date">{item.period}</span>
              </div>

              <div className="item-place">{item.school}</div>

              <p className="item-desc">{item.detail}</p>
            </article>
          ))}
        </section>

        {/* Языки */}
        <section className="section">
          <h2 className="section-title">Языки</h2>

          <div className="language-list">
            {resumeData.languages.map((language) => (
              <div className="language-item" key={language.name}>
                <span className="language-name">{language.name}</span>
                <span className="language-level">{language.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Подвал */}
        <footer className="resume-footer">
          <span>{resumeData.name}</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
    </div>
  );
}

export default App;

