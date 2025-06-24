import React from 'react';

export default function ResumeTW({ switchLanguage, toggleTheme, theme }) {
  return (
    <div className={theme}>
      <header className="top-bar">
        <div className="container">
          <h1>許佳豪 <span className="sub">(Allen Hsu)</span></h1>
        </div>
        <p className="subtitle">iOS & Flutter 工程師</p>
        <div className="links">
          <a href="mailto:pt7922310@gmail.com">✉️ Email</a>
          <a href="https://github.com/blackman5566" target="_blank" rel="noopener noreferrer">🐱 GitHub</a>
          <button onClick={switchLanguage} className="lang-switch">🇹🇼 EN</button>
          <button onClick={toggleTheme} className="theme-toggle" title="切換深淺模式">{theme === 'dark' ? '☀️' : '🌙'}</button>
        </div>
      </header>

      <main className="main-content">

        <section id="education" className="section card">
          <h2>學歷</h2>
          <ul>
            <li>元培科技大學 資訊工程碩士 2012/9 - 2014/6</li>
            <li>元培科技大學 資訊工程學士 2008/9 - 2012/6</li>
          </ul>
        </section>

        <section id="summary" className="section card">
          <h2>個人 Summary</h2>
          <p>擁有超過 8 年 iOS 原生開發及跨平台 Flutter 經驗，精通 Swift、Objective-C 及 Dart。主導多個專案從 0 到 1 的端對端開發，含即時通訊、安全驗證、多國語系、動態主題及大型流程審批等功能，具備優異的模組化設計與團隊協作能力。</p>
        </section>

        <section id="experience" className="section">
          <h2>工作經歷</h2>

          <div className="item card">
            <h3>資深 iOS 工程師 • 旺晁有限公司 (50-100人)</h3>
            <span className="period">2019/7 ~ 2025/6 （6年）</span>
            <ul>
              <li>與後端工程師協作，規劃資料庫欄位正規化並串接 RESTful API。</li>
              <li>與 UI/UX 設計師共同討論、優化使用者流程與操作介面。</li>
              <li>根據測試團隊提供的測試案例，執行流程驗證並回報問題。</li>
              <li>基於 Google Analytics 撰寫報表，提供給 BD 團隊做行為分析與決策支持。</li>
              <li>負責 App 的 Beta／Alpha 版本部署測試，並管理上架至 Apple App Store。</li>
              <li>客製化 UI 元件以符合品牌與產品需求。</li>
            </ul>
            <div className="project-achievements">
              <strong><a href="https://apps.apple.com/mo/app/smartxoffice/id1474181962" target="_blank" rel="noopener noreferrer" className="project-link">
                SmartxOffice 企業通訊 App｜技術負責人
              </a></strong>
              <ul className="sub-list">
                <li>核心架構建置：將功能模組化、高內聚、低耦合，提升維護性與擴充性。</li>
                <li>即時訊息傳輸：基於 WebSocket 打造高效可靠的雙向通訊機制。</li>
                <li>生物辨識登入：整合 Face ID／Touch ID，提供安全便捷的使用者驗證流程。</li>
                <li>動態字體 & 主題切換：支援深色模式與多種字體大小選擇，提升可及性。</li>
                <li>多語系支援：以在地化資源檔管理文字，快速擴展至多國語系。</li>
                <li>訊息回執與已讀管理：顯示「已送達／已讀」狀態，並可查看團隊成員的閱讀紀錄。</li>
                <li>訊息反應：提供表情貼圖回應，增進團隊互動樂趣。</li>
                <li>置頂與公告板：可將重要訊息或公告置頂於頻道頂端，並提供專屬公告頻道，確保關鍵資訊不被淹沒。</li>
                <li>即時翻譯：提供翻譯多國語言訊息，支援跨地區團隊溝通無障礙。</li>
                <li>多層級流程設計：支援串接組織架構，設定單一流程或多階段審批，每階段可指定多位審核人並行或串行審核。</li>
                <li>暱稱設定（Nickname）：允許使用者為聯絡人或群組成員設定自訂暱稱，並在聊天列表、對話標題及成員清單中優先顯示，提升辨識度與親切感。</li>
                <li>自訂審批表單：提供可視化表單編輯器，讓使用者自定義欄位（文字、選單、日期、檔案上傳等），並可儲存為範本重複使用。</li>
                <li>類 Telegram Tag User 功能驅動：應 PM 需求在聊天頁面上方浮動可左右滾動之使用者標籤列，並保留下方聊天列表手勢操作。我利用 View 與 hit-test 調整觸控事件路徑，2 小時內完成 iOS 原型；因 Android 同事質疑可行性，我又迅速以 Kotlin 實作 Android Demo，成功說服團隊接納需求，並順利推動上線，同時維持了團隊和諧。</li>
                <li>快速響應需求變更與大改版：原先 PM 指示將功能區塊嵌入首頁後臨時改為獨立頁面，基於模組化與乾淨的架構設計，我僅用 2 小時（含測試）即完成抽離並重構成全新獨立頁面，確保時程無延誤；PM 對我的迅速響應與高品質交付讚譽有加，並高度肯定我的團隊合作與支援態度。</li>
              </ul>
            </div>
            <div className="project-achievements"></div>
            <strong>佳博體育 App ｜Flutter 技術負責人</strong>
            <ul className="sub-list">
              <li>純 Flutter 架構，涵蓋體育賽事資訊瀏覽、即時賠率、下注流程與會員系統。</li>
              <li>即戰力技術棧：Flutter + Dart，並大量運用 flutter_riverpod、dio、hive_flutter、go_router、sensors_plus、flutter_secure_storage、cached_network_image、flutter_svg、device_info_plus 等核心套件。</li>
              <li>首頁大改版：主導 App 首頁全新設計，新增多個功能區塊與動態卡片，並結合 flutter_riverpod 完成即時賽事預覽與互動式模組。</li>
              <li>創新視覺效果：透過 sensors_plus 插件獲取裝置水平與垂直加速度數值，驅動 3D 裸眼立體 Banner 效果，提升使用者互動感。</li>
              <li>Platform Channel 原生功能橋接。</li>
            </ul>
            <div className="project-achievements"></div>
            <strong>自由接案與協作專案</strong>
            <ul className="sub-list">
              <li>
                <a href="https://www.yes-charging.com.tw/yes-lai-dian" target="_blank" rel="noopener noreferrer" className="project-link">YES! Charging App</a>
                ｜iOS 工程師：提供電動車與電動機車用戶即時充電資訊，與 UI/UX 設計師合作優化介面流程。
              </li>
              <li>
                <a href="https://www.carstuff.com.tw/car-news/item/33058-taycan-app.html" target="_blank" rel="noopener noreferrer" className="project-link">Porsche Charging App</a>
                ｜iOS 工程師：為台灣保時捷車主提供充電地圖與即時服務，支援 CarPlay，改善搜尋與使用者體驗。
              </li>
            </ul>
          </div>
        </section>

        <section id="skills" className="section card">
          <h2>工作技能</h2>
          <ul className="skills-grid">
            <li>Swift</li><li>Objective-C</li><li>Dart</li><li>Kotlin</li>
            <li>UIKit</li><li>SwiftUI</li><li>Flutter</li><li>Riverpod</li>
            <li>Xcode</li><li>Git</li><li>Fastlane</li><li>Firebase</li>
          </ul>
        </section>

      </main>
    </div>
  );
}