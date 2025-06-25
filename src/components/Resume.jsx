import React from 'react';
import { motion } from "framer-motion";

// 動畫參數可以自己微調
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18, // 每個區塊依序進場
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/**
 * Resume 履歷主組件
 * @param {object} data           // 履歷資料（根據語系切換）
 * @param {function} switchLanguage // 語言切換函式
 * @param {function} toggleTheme    // 主題切換函式
 * @param {string} theme            // 主題狀態 ('dark'/'light')
 * @param {string} language         // 語系狀態 ('en'/'tw')
 */
function Resume({ data, switchLanguage, toggleTheme, theme, language }) {

    // Section 順序固定
  const sections = [
    { id: "education", content: (
      <section id="education" className="section card">
        <h2>{data.educationTitle || (language === 'tw' ? '學歷' : 'Education')}</h2>
        <ul>
          {data.education.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </section>
    )},
    { id: "summary", content: (
      <section id="summary" className="section card">
        <h2>{data.summaryTitle || (language === 'tw' ? '個人 Summary' : 'Personal Summary')}</h2>
        <p>{data.summary}</p>
      </section>
    )},
    { id: "experience", content: (
      <section id="experience" className="section">
        <h2>{data.experienceTitle || (language === 'tw' ? '工作經歷' : 'Work Experience')}</h2>
        {data.experiences.map((job, idx) => (
          <div className="item card" key={job.company + idx}>
            <h3>{job.company}</h3>
            <span className="period">{job.period}</span>
            <ul>
              {job.details.map((desc, i) => <li key={i}>{desc}</li>)}
            </ul>
            {/* 專案成就 */}
            {job.projects && job.projects.map((proj, pi) => (
              <div className="project-achievements" key={proj.name + pi}>
                <strong>
                  {proj.link
                    ? <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">{proj.name}</a>
                    : proj.name}
                </strong>
                <ul className="sub-list">
                  {Array.isArray(proj.achievements)
                    ? proj.achievements.map((a, ai) =>
                        typeof a === 'string'
                          ? <li key={ai}>{a}</li>
                          : (
                            <li key={ai}>
                              <a href={a.link} target="_blank" rel="noopener noreferrer">{a.name}</a>｜{a.desc}
                            </li>
                          )
                      )
                    : null
                  }
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>
    )},
    { id: "skills", content: (
      <section id="skills" className="section card">
        <h2>{data.skillsTitle || (language === 'tw' ? '工作技能' : 'Skills')}</h2>
        <ul className="skills-grid">
          {data.skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </section>
    )},
  ];

  return (
    <body className={theme}>
      {/* -------- 頁首區 -------- */}
      <header className="top-bar">
        <div className="container">
          <h1>
            {data.name}
            <span className="sub">{data.nameSub}</span>
          </h1>
        </div>
        <p className="subtitle">{data.jobTitle}</p>
        <div className="links">
          {/* 聯絡連結 */}
          {data.links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.blank ? '_blank' : undefined}
              rel={link.blank ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
          {/* 語言切換按鈕 */}
          <button onClick={switchLanguage} className="lang-switch">
            {language === 'tw' ? '🌐 EN' : '🇹🇼 中文'}
          </button>
          {/* 主題切換按鈕 */}
          <button onClick={toggleTheme} className="theme-toggle" title="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* -------- 主要內容區 -------- */}
      <main className="main-content">
        {sections.map((section, i) => (
          <motion.div
            key={section.id + '-' + language + '-' + theme}
            custom={i}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {section.content}
          </motion.div>
        ))}
      </main>
    </body>
  );
}

export default Resume;
