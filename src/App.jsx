import React, { useState, useEffect } from 'react';
import ResumeTW from './components/resume-tw.jsx';
import ResumeEN from './components/resume-en.jsx';
import './App.css'

//就是你整個 React 專案的「畫面進入點」、「主組件（root component）」，所有畫面元件會從這裡開始組合與渲染。
// 1️⃣ index.html
// → 提供 <div id="root">

// 2️⃣ main.jsx
// → 把 <App /> 渲染到上面那個 #root 裡

// 3️⃣ App.jsx
// → 你自己寫的主畫面 UI 進入點
function App() {
  // 主題狀態
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  // 語系狀態
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'tw'); // 'tw' or 'en'

  // 同步 theme 到 body class 和 localStorage
  React.useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 同步 language 到 localStorage
  React.useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);


  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  };

  const switchLanguage = () => {
    setLanguage(prev => (prev === 'tw' ? 'en' : 'tw'));
  };


  return (
    <>
      {language === 'tw' ? (
        <ResumeTW switchLanguage={switchLanguage} toggleTheme={toggleTheme} theme={theme}/>
      ) : (
        <ResumeEN switchLanguage={switchLanguage} toggleTheme={toggleTheme} theme={theme}/>
      )}
    </>
  );
}

export default App
