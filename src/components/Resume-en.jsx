import React from 'react';

const ResumeEN = ({ switchLanguage, toggleTheme, theme }) => {
  return (
    <div className={theme}>
      <header className="top-bar">
        <div className="container">
          <h1>HSU CHIA-HAO<span className="sub">(Allen Hsu)</span></h1>
        </div>
        <p className="subtitle">iOS & Flutter Engineer</p>
        <div className="links">
          <a href="mailto:pt7922310@gmail.com">✉️ Email</a>
          <a href="https://github.com/blackman5566" target="_blank" rel="noopener noreferrer">🐱 GitHub</a>
          <button onClick={switchLanguage} className="lang-switch">🇹🇼 中文</button>
          <button onClick={toggleTheme} className="theme-toggle" title="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="main-content">

        <section id="education" className="section card">
          <h2>Education</h2>
          <ul>
            <li>Yuanpei University of Science and Technology, Master of Computer Science, 2012/9 - 2014/6</li>
            <li>Yuanpei University of Science and Technology, Bachelor of Computer Science, 2008/9 - 2012/6</li>
          </ul>
        </section>
        <section id="summary" className="section card">
          <h2>Personal Summary</h2>
          <p>Over 8 years of experience in native iOS development and cross-platform Flutter development, proficient in Swift, Objective-C, and Dart. Led multiple projects from zero to one with end-to-end development, including real-time messaging, secure authentication, multi-language support, dynamic themes, and large-scale workflow approvals. Possess excellent modular design and team collaboration skills.</p>
        </section>

        <section id="experience" className="section">
          <h2>Work Experience</h2>

          <div className="item card">
            <h3>Senior iOS Engineer • DKDTrillion Ltd. (50-100 employees)</h3>
            <span className="period">2019/7 ~ 2025/6 (6 years)</span>
            <ul>
              <li>Collaborated with backend engineers to plan database normalization and connect RESTful APIs.</li>
              <li>Worked with UI/UX designers to discuss and optimize user flows and interfaces.</li>
              <li>Executed process verification and reported issues based on test team cases.</li>
              <li>Created reports based on Google Analytics for the BD team to support behavioral analysis and decision-making.</li>
              <li>Managed Beta/Alpha version deployment testing and App Store submission.</li>
              <li>Customized UI components to meet brand and product requirements.</li>
            </ul>
            <div className="project-achievements">
              <strong><a href="https://apps.apple.com/mo/app/smartxoffice/id1474181962" target="_blank" rel="noopener noreferrer" className="project-link">
                SmartxOffice Enterprise Communication App | Technical Lead
              </a></strong>
              <ul className="sub-list">
                <li>Built core architecture: modularized features with high cohesion and low coupling to improve maintainability and scalability.</li>
                <li>Real-time messaging: developed efficient and reliable two-way communication based on WebSocket.</li>
                <li>Biometric login: integrated Face ID/Touch ID for secure and convenient user authentication.</li>
                <li>Dynamic fonts & theme switching: supported dark mode and multiple font sizes to enhance accessibility.</li>
                <li>Multi-language support: managed localized resource files for rapid expansion to multiple languages.</li>
                <li>Message receipts and read status: displayed "delivered/read" status and allowed viewing team members' reading records.</li>
                <li>Message reactions: provided emoji reactions to enhance team interaction.</li>
                <li>Pinning and bulletin board: pinned important messages or announcements at the top of channels and provided dedicated announcement channels to ensure key information is not missed.</li>
                <li>Real-time translation: offered multi-language message translation to support seamless cross-region team communication.</li>
                <li>Multi-level workflow design: supported organizational structure integration, single or multi-stage approvals, with multiple reviewers per stage in parallel or series.</li>
                <li>Nickname setting: allowed users to set custom nicknames for contacts or group members, prioritized display in chat lists, conversation titles, and member lists to improve recognition and friendliness.</li>
                <li>Custom approval forms: provided a visual form editor for users to define fields (text, dropdown, date, file upload, etc.) and save templates for reuse.</li>
                <li>Telegram-like Tag User feature: implemented a floating, horizontally scrollable user tag bar above the chat page as requested by PM, preserving gesture operations on the chat list below. Completed iOS prototype within 2 hours using View and hit-test to adjust touch event paths; quickly developed Android demo in Kotlin to convince the team and successfully launched while maintaining team harmony.</li>
                <li>Rapid response to requirement changes and major revisions: when PM changed the feature block from embedded on the homepage to a standalone page, modular and clean architecture allowed me to complete extraction and refactoring into a new independent page within 2 hours (including testing), ensuring no schedule delay; PM highly praised my quick response and high-quality delivery, and recognized my teamwork and support attitude.</li>
              </ul>
            </div>
            <div className="project-achievements"></div>
            <strong>GBET Sports App | Flutter Technical Lead</strong>
            <ul className="sub-list">
              <li>Pure Flutter architecture covering sports event information browsing, real-time odds, betting process, and membership system.</li>
              <li>Cutting-edge tech stack: Flutter + Dart, extensively using flutter_riverpod, dio, hive_flutter, go_router, sensors_plus, flutter_secure_storage, cached_network_image, flutter_svg, device_info_plus, and other core packages.</li>
              <li>Homepage redesign: led a complete redesign with multiple feature blocks and dynamic cards, combined with flutter_riverpod for real-time event preview and interactive modules.</li>
              <li>Innovative visual effects: used sensors_plus plugin to get device horizontal and vertical acceleration values to drive 3D naked-eye stereo banner effects, enhancing user interaction.</li>
              <li>Platform Channel native feature bridging.</li>
            </ul>
            <div className="project-achievements"></div>
            <strong>Freelance and Collaborative Projects</strong>
            <ul className="sub-list">
              <li>
                <a href="https://www.yes-charging.com.tw/yes-lai-dian" target="_blank" rel="noopener noreferrer" className="project-link">YES! Charging App</a>
                | iOS Engineer: provided real-time charging information for electric cars and scooters, collaborated with UI/UX designers to optimize interface flows.
              </li>
              <li>
                <a href="https://www.carstuff.com.tw/car-news/item/33058-taycan-app.html" target="_blank" rel="noopener noreferrer" className="project-link">Porsche Charging App</a>
                | iOS Engineer: provided charging maps and real-time services for Porsche owners in Taiwan, supported CarPlay, improved search and user experience.
              </li>
            </ul>
          </div>
        </section>

        <section id="skills" className="section card">
          <h2>Skills</h2>
          <ul className="skills-grid">
            <li>Swift</li><li>Objective-C</li><li>Dart</li><li>Kotlin</li>
            <li>UIKit</li><li>SwiftUI</li><li>Flutter</li><li>Riverpod</li>
            <li>Xcode</li><li>Git</li><li>Fastlane</li><li>Firebase</li>
          </ul>
        </section>

      </main>
    </div>
  );
};

export default ResumeEN;
