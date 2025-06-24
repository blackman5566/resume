const resumeData = {
  en: {
    name: "HSU CHIA-HAO",
    nameSub: "(Allen Hsu)",
    jobTitle: "iOS & Flutter Engineer",
    links: [
      { label: "✉️ Email", href: "mailto:pt7922310@gmail.com" },
      { label: "🐱 GitHub", href: "https://github.com/blackman5566", blank: true }
    ],
    buttons: [
      { key: "switchLanguage", label: "🇹🇼 中文" },
      { key: "toggleTheme", labelDark: "☀️", labelLight: "🌙" }
    ],
    education: [
      "Yuanpei University of Science and Technology, Master of Computer Science, 2012/9 - 2014/6",
      "Yuanpei University of Science and Technology, Bachelor of Computer Science, 2008/9 - 2012/6"
    ],
    summary: `Over 8 years of experience in native iOS development and cross-platform Flutter development, proficient in Swift, Objective-C, and Dart. Led multiple projects from zero to one with end-to-end development, including real-time messaging, secure authentication, multi-language support, dynamic themes, and large-scale workflow approvals. Possess excellent modular design and team collaboration skills.`,
    experiences: [
      {
        company: "Senior iOS Engineer • DKDTrillion Ltd. (50-100 employees)",
        period: "2019/7 ~ 2025/6 (6 years)",
        details: [
          "Collaborated with backend engineers to plan database normalization and connect RESTful APIs.",
          "Worked with UI/UX designers to discuss and optimize user flows and interfaces.",
          "Executed process verification and reported issues based on test team cases.",
          "Created reports based on Google Analytics for the BD team to support behavioral analysis and decision-making.",
          "Managed Beta/Alpha version deployment testing and App Store submission.",
          "Customized UI components to meet brand and product requirements."
        ],
        projects: [
          {
            name: "SmartxOffice Enterprise Communication App | Technical Lead",
            link: "https://apps.apple.com/mo/app/smartxoffice/id1474181962",
            achievements: [
              "Built core architecture: modularized features with high cohesion and low coupling to improve maintainability and scalability.",
              "Real-time messaging: developed efficient and reliable two-way communication based on WebSocket.",
              "Biometric login: integrated Face ID/Touch ID for secure and convenient user authentication.",
              "Dynamic fonts & theme switching: supported dark mode and multiple font sizes to enhance accessibility.",
              "Multi-language support: managed localized resource files for rapid expansion to multiple languages.",
              "Message receipts and read status: displayed 'delivered/read' status and allowed viewing team members' reading records.",
              "Message reactions: provided emoji reactions to enhance team interaction.",
              "Pinning and bulletin board: pinned important messages or announcements at the top of channels and provided dedicated announcement channels to ensure key information is not missed.",
              "Real-time translation: offered multi-language message translation to support seamless cross-region team communication.",
              "Multi-level workflow design: supported organizational structure integration, single or multi-stage approvals, with multiple reviewers per stage in parallel or series.",
              "Nickname setting: allowed users to set custom nicknames for contacts or group members, prioritized display in chat lists, conversation titles, and member lists to improve recognition and friendliness.",
              "Custom approval forms: provided a visual form editor for users to define fields (text, dropdown, date, file upload, etc.) and save templates for reuse.",
              "Telegram-like Tag User feature: implemented a floating, horizontally scrollable user tag bar above the chat page as requested by PM, preserving gesture operations on the chat list below. Completed iOS prototype within 2 hours using View and hit-test to adjust touch event paths; quickly developed Android demo in Kotlin to convince the team and successfully launched while maintaining team harmony.",
              "Rapid response to requirement changes and major revisions: when PM changed the feature block from embedded on the homepage to a standalone page, modular and clean architecture allowed me to complete extraction and refactoring into a new independent page within 2 hours (including testing), ensuring no schedule delay; PM highly praised my quick response and high-quality delivery, and recognized my teamwork and support attitude."
            ]
          },
          {
            name: "GBET Sports App | Flutter Technical Lead",
            achievements: [
              "Pure Flutter architecture covering sports event information browsing, real-time odds, betting process, and membership system.",
              "Cutting-edge tech stack: Flutter + Dart, extensively using flutter_riverpod, dio, hive_flutter, go_router, sensors_plus, flutter_secure_storage, cached_network_image, flutter_svg, device_info_plus, and other core packages.",
              "Homepage redesign: led a complete redesign with multiple feature blocks and dynamic cards, combined with flutter_riverpod for real-time event preview and interactive modules.",
              "Innovative visual effects: used sensors_plus plugin to get device horizontal and vertical acceleration values to drive 3D naked-eye stereo banner effects, enhancing user interaction.",
              "Platform Channel native feature bridging."
            ]
          },
          {
            name: "Freelance and Collaborative Projects",
            achievements: [
              {
                name: "YES! Charging App | iOS Engineer",
                link: "https://www.yes-charging.com.tw/yes-lai-dian",
                desc: "Provided real-time charging information for electric cars and scooters, collaborated with UI/UX designers to optimize interface flows."
              },
              {
                name: "Porsche Charging App | iOS Engineer",
                link: "https://www.carstuff.com.tw/car-news/item/33058-taycan-app.html",
                desc: "Provided charging maps and real-time services for Porsche owners in Taiwan, supported CarPlay, improved search and user experience."
              }
            ]
          }
        ]
      },
      {
        company: "iOS Software Engineer • Gamania Digital Technology",
        period: "2018/5 ~ 2019/7 (1 year 3 months)",
        details: [
          "Collaborated with backend engineers to plan database normalization and connect RESTful APIs.",
          "Worked with UI/UX designers to discuss and optimize user flows and interfaces.",
          "Executed process verification and reported issues based on test team cases.",
          "Created reports based on Google Analytics for the BD team to support behavioral analysis and decision-making.",
          "Managed Beta/Alpha version deployment testing and App Store submission.",
          "Customized UI components to meet brand and product requirements."
        ],
        projects: [
          {
            name: "Swapub - Second-hand Trading Platform | iOS Technical Lead",
            link: "https://is.gd/9W1o4n",
            achievements: [
              "Core architecture refactoring: modularized features with high cohesion and low coupling to improve maintainability and scalability.",
              "Introduced ReactiveCocoa: optimized data binding and event handling with reactive programming, reducing the top three crash causes by 99%.",
              "Cross-platform team collaboration: as the only iOS engineer with two Android engineers, completed all milestones on schedule without delay.",
              "Customized UI/UX: implemented custom components (dynamic lists, interactive buttons) and integrated Hongyang payment services.",
              "Implemented coupon redemption feature.",
              "Implemented URL preview feature.",
              "Implemented photo filter and camera optimization features.",
              "Implemented online status display feature.",
              "Implemented video preview feature for items.",
              "Implemented 'Find Nearby' peripheral item search feature."
            ]
          }
        ]
      },
      {
        company: "iOS Software Engineer • Ufi Space",
        period: "2016/3 ~ 2018/5 (2 years 3 months)",
        details: [
          "Collaborated with backend engineers to plan database normalization and connect RESTful APIs.",
          "Worked with UI/UX designers to discuss and optimize user flows and interfaces.",
          "Executed process verification and reported issues based on test team cases.",
          "Created reports based on Google Analytics for the BD team to support behavioral analysis and decision-making.",
          "Managed Beta/Alpha version deployment testing and App Store submission.",
          "Customized UI components to meet brand and product requirements."
        ],
        projects: [
          {
            name: "Cosmed App | iOS Technical Lead",
            link: "https://apps.apple.com/tw/app/%E5%BA%B7%E6%98%AF%E7%BE%8E/id891609371",
            achievements: [
              "Project leadership and development: fully responsible for the project from zero to one, leading requirements analysis, technology selection, and team coordination, establishing core architecture and development milestones.",
              "Architecture design: adopted a mixed MVVM + MVC architecture, decomposing core functions into highly cohesive, loosely coupled independent modules to improve maintainability and scalability.",
              "Unified Deep Link management: centralized management of Deep Links to avoid scattered code; when PM requested removal of a Deep Link, simply commented out the corresponding case, completing changes within minutes without affecting other functions, greatly improving iteration efficiency.",
              "Network request encapsulation: integrated Alamofire with RxSwift Extensions to build an Observable-based network layer supporting cancellation, retry, and unified error handling.",
              "Reactive data binding: introduced RxSwift to implement ViewModel → View data binding, simplifying UI update flow and improving asynchronous disorder and stuttering.",
              "Third-party service integration: implemented Facebook API login and Firebase Cloud Messaging push notifications, encapsulating common interfaces for future expansion.",
              "Implemented task center feature.",
              "Implemented coupon redemption feature.",
              "Implemented membership feature.",
              "Implemented store search feature.",
              "Implemented issue reporting feature.",
              "Implemented Apple Map store location display feature.",
              "Common function encapsulation and runtime extension.",
              "Encapsulated UIPickerView form selection component with closure-based interface, eliminating traditional delegate, greatly improving development efficiency and reusability.",
              "Implemented CustomHUD overlay loading view for data loading or operation blocking, easy to manage and extend.",
              "Encapsulated UIAlertController with closure-based interface, eliminating traditional delegate, greatly improving development efficiency and reusability.",
              "Used Method Swizzling to unify GA Screen tracking at UIViewController level, automatically dispatching screen names based on subclasses without repeating tracking code in each ViewController, centralizing maintenance and speeding iteration.",
              "Design pattern application: extensively used factory, strategy, observer patterns to improve code readability and testability.",
              "Used RxSwift to implement ViewModel → View data binding, simplifying UI update flow, improving UI stuttering and asynchronous disorder, significantly enhancing user experience.",
              "Integrated Alamofire with ReactiveX Extensions to build an Observable-based network request module."
            ]
          },
          {
            name: "Petmaji App | iOS Technical Lead",
            achievements: [
              "Project architecture refactoring: led modular design to reduce coupling between pages, improve maintainability and scalability, and enhance code readability.",
              "Introduced ReactiveCocoa: established event-driven and data binding mechanisms to simplify asynchronous processes and improve stability.",
              "Coupon redemption feature: designed and implemented coupon redemption process, supporting barcode scanning and backend verification, optimizing redemption experience and increasing transaction success rate.",
              "Pet weight tracking line chart: developed historical pet weight line chart using dynamic charts to help users intuitively monitor pet health trends.",
              "Pet grooming appointment: implemented pet grooming appointment feature, integrating calendar selection and time slot management, adding push reminders to improve convenience and accuracy."
            ]
          },
          {
            name: "Atomic Energy Council App | iOS Technical Lead",
            achievements: [
              "Project architecture design: adopted classic MVC pattern, clearly separating Model, View, and Controller responsibilities, reducing module coupling and improving maintainability.",
              "Real-time information display: connected backend APIs to develop real-time operation and data monitoring screens for nuclear power plants, ensuring users can monitor equipment status anytime.",
              "Map positioning feature: integrated Google Maps SDK to draw monitoring stations and nuclear power plant location markers, providing geographic navigation and zoom interaction.",
              "Security enhancement: implemented Certificate Pinning to strictly verify server certificates, preventing man-in-the-middle attacks and ensuring data transmission security."
            ]
          }
        ]
      },
      {
        company: "iOS Engineer • Timeline App",
        period: "2015/10 ~ 2015/12 (3 months)",
        details: [
          "Collaborated with UI/UX designers to discuss and optimize user flows and interfaces.",
          "Executed process verification and reported issues based on test team cases."
        ],
        projects: [
          {
            name: "Alley Food App",
            link: "https://angellulu.net/blog/post/46825393",
            achievements: [
              "Understood the main framework of the design program.",
              "Used Google Map API for positioning and drawing user routes to stores on the map.",
              "Implemented design patterns used in the project, such as Factory Method Pattern and Singleton, for new feature development.",
              "Built data or state change monitoring mechanisms using ReactiveCocoa."
            ]
          }
        ]
      },
      {
        company: "Intern • Tike Technology Co., Ltd.",
        period: "2013/7 ~ 2013/12 (6 months)",
        details: [
          "Participated in MP3 player and camera app development."
        ]
      },
      {
        company: "Intern • Xinmin Technology R&D Co., Ltd.",
        period: "2012/2 ~ 2012/6 (5 months)",
        details: [
          "Assisted in Android architecture and application development."
        ]
      }
    ],
    skills: [
      "Swift", "Objective-C", "Dart", "Kotlin",
      "UIKit", "SwiftUI", "Flutter", "Riverpod",
      "Xcode", "Git", "Fastlane", "Firebase"
    ]
  },
  tw: 
  {
    name: "許佳豪",
    nameSub: "(Allen Hsu)",
    jobTitle: "iOS & Flutter 工程師",
    links: [
      { label: "✉️ Email", href: "mailto:pt7922310@gmail.com" },
      { label: "🐱 GitHub", href: "https://github.com/blackman5566", blank: true }
    ],
    buttons: [
      { key: "switchLanguage", label: "EN" },
      { key: "toggleTheme", labelDark: "☀️", labelLight: "🌙" }
    ],
    education: [
      "元培科技大學 資訊工程碩士 2012/9 - 2014/6",
      "元培科技大學 資訊工程學士 2008/9 - 2012/6"
    ],
    summary: "擁有超過 8 年 iOS 原生開發及跨平台 Flutter 經驗，精通 Swift、Objective-C 及 Dart。主導多個專案從 0 到 1 的端對端開發，含即時通訊、安全驗證、多國語系、動態主題及大型流程審批等功能，具備優異的模組化設計與團隊協作能力。",
    experiences: [
      // 旺晁有限公司
      {
        company: "資深 iOS 工程師 • 旺晁有限公司 (50-100人)",
        period: "2019/7 ~ 2025/6 （6年）",
        details: [
          "與後端工程師協作，規劃資料庫欄位正規化並串接 RESTful API。",
          "與 UI/UX 設計師共同討論、優化使用者流程與操作介面。",
          "根據測試團隊提供的測試案例，執行流程驗證並回報問題。",
          "基於 Google Analytics 撰寫報表，提供給 BD 團隊做行為分析與決策支持。",
          "負責 App 的 Beta／Alpha 版本部署測試，並管理上架至 Apple App Store。",
          "客製化 UI 元件以符合品牌與產品需求。"
        ],
        projects: [
          {
            name: "SmartxOffice 企業通訊 App｜技術負責人",
            link: "https://apps.apple.com/mo/app/smartxoffice/id1474181962",
            achievements: [
              "核心架構建置：將功能模組化、高內聚、低耦合，提升維護性與擴充性。",
              "即時訊息傳輸：基於 WebSocket 打造高效可靠的雙向通訊機制。",
              "生物辨識登入：整合 Face ID／Touch ID，提供安全便捷的使用者驗證流程。",
              "動態字體 & 主題切換：支援深色模式與多種字體大小選擇，提升可及性。",
              "多語系支援：以在地化資源檔管理文字，快速擴展至多國語系。",
              "訊息回執與已讀管理：顯示「已送達／已讀」狀態，並可查看團隊成員的閱讀紀錄。",
              "訊息反應：提供表情貼圖回應，增進團隊互動樂趣。",
              "置頂與公告板：可將重要訊息或公告置頂於頻道頂端，並提供專屬公告頻道，確保關鍵資訊不被淹沒。",
              "即時翻譯：提供翻譯多國語言訊息，支援跨地區團隊溝通無障礙。",
              "多層級流程設計：支援串接組織架構，設定單一流程或多階段審批，每階段可指定多位審核人並行或串行審核。",
              "暱稱設定（Nickname）：允許使用者為聯絡人或群組成員設定自訂暱稱，並在聊天列表、對話標題及成員清單中優先顯示，提升辨識度與親切感。",
              "自訂審批表單：提供可視化表單編輯器，讓使用者自定義欄位（文字、選單、日期、檔案上傳等），並可儲存為範本重複使用。",
              "類 Telegram Tag User 功能驅動：應 PM 需求在聊天頁面上方浮動可左右滾動之使用者標籤列，並保留下方聊天列表手勢操作。我利用 View 與 hit-test 調整觸控事件路徑，2 小時內完成 iOS 原型；因 Android 同事質疑可行性，我又迅速以 Kotlin 實作 Android Demo，成功說服團隊接納需求，並順利推動上線，同時維持了團隊和諧。",
              "快速響應需求變更與大改版：原先 PM 指示將功能區塊嵌入首頁後臨時改為獨立頁面，基於模組化與乾淨的架構設計，我僅用 2 小時（含測試）即完成抽離並重構成全新獨立頁面，確保時程無延誤；PM 對我的迅速響應與高品質交付讚譽有加，並高度肯定我的團隊合作與支援態度。"
            ]
          },
          {
            name: "佳博體育 App ｜Flutter 技術負責人",
            achievements: [
              "純 Flutter 架構，涵蓋體育賽事資訊瀏覽、即時賠率、下注流程與會員系統。",
              "即戰力技術棧：Flutter + Dart，並大量運用 flutter_riverpod、dio、hive_flutter、go_router、sensors_plus、flutter_secure_storage、cached_network_image、flutter_svg、device_info_plus 等核心套件。",
              "首頁大改版：主導 App 首頁全新設計，新增多個功能區塊與動態卡片，並結合 flutter_riverpod 完成即時賽事預覽與互動式模組。",
              "創新視覺效果：透過 sensors_plus 插件獲取裝置水平與垂直加速度數值，驅動 3D 裸眼立體 Banner 效果，提升使用者互動感。",
              "Platform Channel 原生功能橋接。"
            ]
          },
          {
            name: "自由接案與協作專案",
            achievements: [
              {
                name: "YES! Charging App｜iOS 工程師",
                link: "https://www.yes-charging.com.tw/yes-lai-dian",
                desc: "提供電動車與電動機車用戶即時充電資訊，與 UI/UX 設計師合作優化介面流程。"
              },
              {
                name: "Porsche Charging App｜iOS 工程師",
                link: "https://www.carstuff.com.tw/car-news/item/33058-taycan-app.html",
                desc: "為台灣保時捷車主提供充電地圖與即時服務，支援 CarPlay，改善搜尋與使用者體驗。"
              }
            ]
          }
        ]
      },
      // 遊戲橘子
      {
        company: "iOS 軟體工程師 • 遊戲橘子數位科技",
        period: "2018/5 ~ 2019/7 （1年3個月）",
        details: [
          "與後端工程師協作，規劃資料庫欄位正規化並串接 RESTful API。",
          "與 UI/UX 設計師共同討論、優化使用者流程與操作介面。",
          "根據測試團隊提供的測試案例，執行流程驗證並回報問題。",
          "基於 Google Analytics 撰寫報表，提供給 BD 團隊做行為分析與決策支持。",
          "負責 App 的 Beta／Alpha 版本部署測試，並管理上架至 Apple App Store。",
          "客製化 UI 元件以符合品牌與產品需求。"
        ],
        projects: [
          {
            name: "Swapub-二手交易平台｜iOS 技術負責人",
            link: "https://is.gd/9W1o4n",
            achievements: [
              "核心架構重構：將功能模組化、高內聚、低耦合，提升維護性與擴充性。",
              "導入 ReactiveCocoa：以反應式程式設計優化資料綁定與事件處理，將每日前三大崩潰原因總發生次數降至原本的 1%。",
              "跨平台團隊協作：在只有我一位 iOS 工程師與兩位 Android 工程師的小團隊中，仍按期完成所有開發里程碑，未造成時程延誤。",
              "客製化 UI／UX：實作自訂元件（如動態列表、互動式按鈕）並整合紅陽金流服務。",
              "實作優惠券兌換功能。",
              "實作網址預覽功能。",
              "實作 Photo Filter 拍照優化功能。",
              "實作上線狀態顯示功能。",
              "實作物品影片預覽功能。",
              "實作「找我附近」周邊物品搜尋功能。"
            ]
          }
        ]
      },
      // Ufi Space
      {
        company: "iOS 軟體工程師 • Ufi Space 優識空間",
        period: "2016/3 ~ 2018/5 （2年3個月）",
        details: [
          "與後端工程師協作，規劃資料庫欄位正規化並串接 RESTful API。",
          "與 UI/UX 設計師共同討論、優化使用者流程與操作介面。",
          "根據測試團隊提供的測試案例，執行流程驗證並回報問題。",
          "基於 Google Analytics 撰寫報表，提供給 BD 團隊做行為分析與決策支持。",
          "負責 App 的 Beta／Alpha 版本部署測試，並管理上架至 Apple App Store。",
          "客製化 UI 元件以符合品牌與產品需求。"
        ],
        projects: [
          {
            name: "康是美 App ｜iOS 技術負責人",
            link: "https://apps.apple.com/tw/app/%E5%BA%B7%E6%98%AF%E7%BE%8E/id891609371",
            achievements: [
              "專案主導與開發：從 0 到 1 全面負責專案，領導需求分析、技術選型與團隊協調，制定核心架構與開發里程碑。",
              "架構設計：採用 MVVM + MVC 混合架構，將核心功能拆解為高內聚、低耦合的獨立模組，提升維護性與可擴充性。",
              "Deep Link 統一管理：由於 Deep Link 可能觸發各種頁面並需與後端API 溝通，故採集中式管理，避免散落程式碼於各處；當 PM 臨時要求移除某個 Deep Link，只需註解對應 case，數分鐘內完成變更，不影響其他功能，極大提升迭代效率。",
              "網路請求封裝：整合 Alamofire 並搭配 RxSwift Extensions，打造基於 Observable 的網路層，支援取消、重試與統一錯誤處理。",
              "Reactive 資料綁定：導入 RxSwift 實現 ViewModel → View 的資料綁定，簡化 UI 更新流程，改善異步錯亂與卡頓現象。",
              "第三方服務串接：實作 Facebook API 會員登入及 Firebase Cloud Messaging 推播功能，並封裝通用介面以利後續擴充。",
              "實作任務中心功能。",
              "實作優惠券兌換功能。",
              "實作會員功能。",
              "實作門市搜尋功能。",
              "實作問題回報功能。",
              "實作 Apple Map 顯示店家位置功能。",
              "常用功能封裝與 Runtime 擴充。",
              "封裝 UIPickerView 表單選擇元件，提供基於 closure 的簡潔介面，無需傳統 delegate 即可完成選項綁定與事件回傳，大幅提升開發效率與可重用性。",
              "實作 CustomHUD 蓋版 Loading View，可於資料載入或操作封鎖期間顯示，並可輕鬆管理與擴展。",
              "封裝 UIAlertController 提供基於 closure 的簡潔介面，無需傳統 delegate 即可完成選項綁定與事件回傳，大幅提升開發效率與可重用性。",
              "利用 Method Swizzling 在 UIViewController 層級統一埋點 GA Screen，根據不同子類別自動派發畫面名稱，不需在每個 ViewController 重複撰寫追蹤程式碼，維護更集中、迭代更迅速。",
              "設計模式應用：廣泛運用工廠、策略、觀察者等設計模式，提升程式碼可讀性與測試性。",
              "採用 RxSwift 實現 ViewModel → View 的資料綁定，簡化 UI 更新流程，改善 UI 卡頓及異步錯亂問題，使用者體驗明顯優化。",
              "整合 Alamofire 並搭配 ReactiveX Extensions，打造基於 Observable 的網路請求模組。"
            ]
          },
          {
            name: "Petmaji App｜iOS 技術負責人",
            achievements: [
              "專案架構重構：主導程式架構重構，透過模組化設計降低頁面間耦合度，提升維護性與可擴充性，同時增強程式碼可讀性。",
              "導入 ReactiveCocoa：採用 ReactiveCocoa 建立事件驅動與資料綁定機制，簡化異步流程並提升程式穩定性。",
              "優惠券兌換功能：設計並實作優惠券兌換流程，支援條碼掃描與後端驗證，優化兌換體驗並提升交易成功率。",
              "寵物體重追蹤折線圖：開發寵物體重歷史資料折線圖，利用動態圖表呈現變化趨勢，幫助使用者直觀監控寵物健康。",
              "寵物美容預約：實作寵物預約美容功能，整合日曆選擇與時間區段管理，並加入推播提醒機制，提升預約流程便捷度與準確性。"
            ]
          },
          {
            name: "全民原能會 App｜iOS 技術負責人",
            achievements: [
              "專案架構設計：採用經典 MVC 模式，明確分離 Model、View 與 Controller 職責，降低模組間耦合並提升程式可維護性。",
              "即時資訊呈現：串接後端 API，開發核電廠即時運轉與數據監控畫面，確保使用者隨時掌握設備狀態。",
              "地圖定位功能：整合 Google Maps SDK，繪製監測站與核電廠位置標記，並提供地理導航與放大縮小互動功能。",
              "安全強化：實作 Certificate Pinning，嚴格驗證伺服器憑證，杜絕中間人攻擊，保障資料傳輸安全。"
            ]
          }
        ]
      },
      // Timeline
      {
        company: "iOS 工程師 • 時間軸 App",
        period: "2015/10 ~ 2015/12 （3個月）",
        details: [
          "與 UI/UX 設計師共同討論、優化使用者流程與操作介面。",
          "根據測試團隊提供的測試案例，執行流程驗證並回報問題。"
        ],
        projects: [
          {
            name: "巷弄美食 App",
            link: "https://angellulu.net/blog/post/46825393",
            achievements: [
              "理解設計程式主框架。",
              "Google Map Api 作為定位使用以及使用地圖繪製 User 至店家路徑。",
              "實作專案所使用的 Design Pattern，例如工廠方法模式 (Factory Method Pattern)、單例模式 (Singleton) 至新功能開發。",
              "使用 ReactiveCocoa 搭建資料或狀態變更的監聽機制。"
            ]
          }
        ]
      },
      // 實習經歷
      {
        company: "實習生 • 堤刻科技股份有限公司",
        period: "2013/7 ~ 2013/12 （6個月）",
        details: [
          "參與 MP3 播放器與拍照 App 開發。"
        ]
      },
      {
        company: "實習生 • 新敏科技研發股份有限公司",
        period: "2012/2 ~ 2012/6 （5個月）",
        details: [
          "協助 Android 架構與應用開發。"
        ]
      }
    ],
    skills: [
      "Swift", "Objective-C", "Dart", "Kotlin",
      "UIKit", "SwiftUI", "Flutter", "Riverpod",
      "Xcode", "Git", "Fastlane", "Firebase"
    ]
  }
};

export default resumeData;
