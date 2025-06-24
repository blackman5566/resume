import React from 'react';

/**
 * Resume 履歷主組件
 * @param {object} data           // 履歷資料（根據語系切換）
 * @param {function} switchLanguage // 語言切換函式
 * @param {function} toggleTheme    // 主題切換函式
 * @param {string} theme            // 主題狀態 ('dark'/'light')
 * @param {string} language         // 語系狀態 ('en'/'tw')
 */
function Resume({ data, switchLanguage, toggleTheme, theme, language }) {
  return (
    <div className={theme}>
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
        {/* -------- 學歷區塊 -------- */}
        <section id="education" className="section card">
          <h2>{data.educationTitle || (theme === 'tw' ? '學歷' : 'Education')}</h2>
          <ul>
            {data.education.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* -------- Summary 自我介紹區塊 -------- */}
        <section id="summary" className="section card">
          <h2>{data.summaryTitle || (theme === 'tw' ? '個人 Summary' : 'Personal Summary')}</h2>
          <p>{data.summary}</p>
        </section>

        {/* -------- 經歷（公司/專案/成就） -------- */}
        <section id="experience" className="section">
          <h2>{data.experienceTitle || (theme === 'tw' ? '工作經歷' : 'Work Experience')}</h2>
          {data.experiences.map((job, idx) => (
            <div className="item card" key={job.company + idx}>
              <h3>{job.company}</h3>
              <span className="period">{job.period}</span>
              {/* 主要工作內容 */}
              <ul>
                {job.details.map((desc, i) => <li key={i}>{desc}</li>)}
              </ul>
              {/* 如果有專案/成就，依序顯示 */}
              {job.projects && job.projects.map((proj, pi) => (
                <div className="project-achievements" key={proj.name + pi}>
                  <strong>
                    {/* 若有超連結，加 a 標籤；否則純文字 */}
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
                                {/* 如果是自由接案／協作專案，顯示名稱＋描述 */}
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

        {/* -------- 技能區塊 -------- */}
        <section id="skills" className="section card">
          <h2>{data.skillsTitle || (theme === 'tw' ? '工作技能' : 'Skills')}</h2>
          <ul className="skills-grid">
            {data.skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Resume;
