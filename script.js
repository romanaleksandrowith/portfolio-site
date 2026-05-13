const sections = Array.from(document.querySelectorAll("[data-section]"));
const sectionButtons = Array.from(document.querySelectorAll("[data-section-target]"));
const languageToggle = document.querySelector("[data-language-toggle]");
const translatedNodes = Array.from(document.querySelectorAll("[data-i18n]"));
const pdfLinks = Array.from(document.querySelectorAll("[data-pdf-link]"));

const projectData = {
  route: {
    pdf: {
      ru: "./assets/presentations/route_optimizer_ru.pdf?v=2026-05-13-06",
      en: "./assets/presentations/route_optimizer_en.pdf?v=2026-05-13-06"
    }
  },
  reports: {
    pdf: {
      ru: "./assets/presentations/client_digest_hub_ru.pdf",
      en: "./assets/presentations/client_digest_hub_en.pdf"
    }
  }
};

const translations = {
  ru: {
    metaTitle: "Роман | Автоматизация для малого бизнеса",
    brandSubtitle: "веб-сервисы для малого бизнеса",
    navOverview: "Обзор",
    navRoute: "Оптимизатор маршрутов",
    navReports: "AI-отчеты и PDF",
    navAbout: "Обо мне и контакты",
    heroBadge: "Практичная автоматизация",
    heroTitle: "Автоматизация маршрутов, отчетов и AI-процессов для малого бизнеса",
    heroSubtitle: "Я создаю небольшие веб-сервисы, которые можно быстро адаптировать под конкретный бизнес: маршруты, отчеты, клиентские справки, уведомления, PDF-документы и внутренние рабочие кабинеты.",
    openRouteDemo: "Открыть демо маршрутов",
    openReportsDemo: "Открыть демо отчетов",
    contactMe: "Связаться",
    overviewDirectionsTitle: "Что можно автоматизировать",
    overviewRouteTitle: "Оптимизатор маршрутов",
    overviewRouteText: "Расчет порядка точек, расстояния, времени, карты и отчетов для доставок, выездов и малого автопарка.",
    overviewReportsTitle: "AI-отчеты и PDF",
    overviewReportsText: "Генерация справок, дайджестов, мини-отчетов и PDF по шаблону без сложной настройки для пользователя.",
    overviewCustomTitle: "Индивидуальные процессы под бизнес",
    overviewCustomText: "Рабочие кабинеты, уведомления, интеграции с Excel, CRM, базами данных и внутренними таблицами.",
    foundationTitle: "Фундамент для индивидуальных решений",
    foundationText: "Эти демонстрационные прототипы можно использовать как основу: заменить справочники, добавить нужные поля, подключить источники данных и подстроить интерфейс под работу конкретной команды.",
    worksTitle: "Что уже работает",
    worksText: "Маршруты, расчет расстояний, AI-дайджесты, HTML/PDF-документы, клиентские ссылки и понятные рабочие сценарии.",
    developTitle: "Куда можно развить",
    developText: "CRM, отчеты, Telegram/e-mail уведомления, GPS-мониторинг, роли пользователей, интеграции и AI-помощники.",
    examplesTitle: "Примеры применения",
    examplesText: "Доставка, сервисные выезды, отчеты руководителю, клиентские справки, контроль заявок и автоматизация документов.",
    techLabel: "Технологии:",
    routeBadge: "демонстрационный прототип",
    routeTitle: "Оптимизатор маршрутов для доставок, выездов и сервисных задач",
    routeDescription: "Сервис помогает выстроить порядок точек маршрута, посчитать расстояние и время, сравнить исходный маршрут с улучшенным и показать результат на карте.",
    openPdf: "Открыть презентацию PDF",
    openDemo: "Открыть демо",
    routeFlow1: "Заявки / адреса",
    routeFlow2: "Расчет маршрута",
    routeFlow3: "Карта и порядок точек",
    routeFlow4: "Отчет / уведомления / CRM",
    alreadyTitle: "Что уже есть",
    growthTitle: "Куда можно развивать",
    routeAlready1: "добавление городов и адресов;",
    routeAlready2: "расчет маршрута по дорожной сети;",
    routeAlready3: "сравнение исходного и улучшенного порядка точек;",
    routeAlready4: "карта, километры и ориентировочное время;",
    routeAlready5: "демонстрационный режим без сложной регистрации;",
    routeAlready6: "возможность использовать проект как основу для пилота.",
    routeGrowth1: "диспетчерский кабинет для заявок и выездов;",
    routeGrowth2: "маршрутные листы для водителей или курьеров;",
    routeGrowth3: "отчеты по пробегу, времени, отклонениям и выполнению задач;",
    routeGrowth4: "уведомления в Telegram/e-mail при опоздании или изменении статуса;",
    routeGrowth5: "интеграция с GPS-маячками и трекерами;",
    routeGrowth6: "мини-CRM для конкретного бизнеса;",
    routeGrowth7: "AI-подсказки по причинам отклонений и оптимизации загрузки.",
    routeTableTitle: "Таблица применений",
    tableUseCase: "Сценарий",
    tableBenefit: "Как помогает",
    routeCase1: "Курьерская доставка",
    routeBenefit1: "Планирование порядка адресов и контроль времени.",
    routeCase2: "Сервисные выезды",
    routeBenefit2: "Удобный маршрут для мастеров, инженеров и мобильных сотрудников.",
    routeCase3: "Инспекции и обходы",
    routeBenefit3: "Список точек, карта и отчет о выполнении задач.",
    routeCase4: "Малый автопарк",
    routeBenefit4: "Снижение лишнего пробега и понятные отчеты по рейсам.",
    routeCase5: "GPS-маячки и трекеры",
    routeBenefit5: "Основа для мониторинга факта движения и отклонений.",
    reportsBadge: "документы по шаблону",
    reportsTitle: "AI-отчеты и PDF-документы по шаблону",
    reportsDescription: "Сервис превращает шаблон и короткое пожелание клиента в готовый документ: справку, дайджест, мини-отчет или PDF. Пользователю не нужно разбираться в prompt engineering — он выбирает сценарий и получает результат.",
    reportsFlow1: "Источники данных",
    reportsFlow2: "Шаблон отчета",
    reportsFlow3: "AI-обработка",
    reportsFlow4: "PDF / HTML / e-mail / ссылка",
    reportsFlow5: "Решение для клиента или руководителя",
    reportsAlready1: "создание проекта или клиентской заявки;",
    reportsAlready2: "выбор шаблона результата;",
    reportsAlready3: "необязательное пожелание клиента;",
    reportsAlready4: "генерация AI-дайджеста;",
    reportsAlready5: "сохранение результата в HTML/PDF;",
    reportsAlready6: "клиентская ссылка;",
    reportsAlready7: "русская и английская логика интерфейса;",
    reportsAlready8: "демонстрационный деплой на Render.",
    reportsGrowth1: "автоматические отчеты из Telegram-чатов;",
    reportsGrowth2: "анализ заявок, отзывов, обращений и переписок;",
    reportsGrowth3: "регулярные PDF-сводки для руководителя;",
    reportsGrowth4: "отчеты по продажам, клиентам, заявкам и динамике;",
    reportsGrowth5: "внутренний портал для сотрудников;",
    reportsGrowth6: "генерация коммерческих предложений и справок;",
    reportsGrowth7: "интеграция с Excel, Google Sheets, CRM, базами данных;",
    reportsGrowth8: "локальное развертывание на ПК или сервере компании.",
    importantTitle: "Важное пояснение",
    emailNotice: "Функция отправки e-mail технически предусмотрена, но на бесплатном облачном хостинге могут быть ограничения SMTP-портов. Для production-версии лучше подключать отдельный email API или разворачивать решение локально/на сервере клиента.",
    aboutBadge: "о работе",
    aboutTitle: "Обо мне и контакты",
    aboutText1: "Меня зовут Роман.",
    aboutText2: "Я занимаюсь автоматизацией отчетности, аналитики и рабочих процессов. Мой практический опыт связан с Excel, VBA, SQL, Python, отчетами, обработкой данных и созданием небольших веб-сервисов.",
    aboutText3: "Я могу помочь малому бизнесу быстро проверить идею автоматизации: собрать прототип, показать рабочий сценарий, подготовить отчетность, связать данные и сделать понятный интерфейс для сотрудников или клиентов.",
    whatHelpTitle: "С чем могу помочь",
    whatHelpText: "Маршруты, отчеты, CRM-процессы, AI-помощники, интеграции, Excel/SQL/Python-автоматизация и интерфейсы для ежедневной работы.",
    approachTitle: "Подход",
    approachText: "Быстрый прототип, проверка сценария на реальных данных, понятный интерфейс и развитие решения под процесс конкретной команды.",
    contactBlockTitle: "Контакты",
    footerName: "Roman Automation",
    footerText: "Статический сайт для GitHub Pages"
  },
  en: {
    metaTitle: "Roman | Automation for Small Business",
    brandSubtitle: "small business web services",
    navOverview: "Overview",
    navRoute: "Route Optimizer",
    navReports: "AI Reports & PDFs",
    navAbout: "About & Contacts",
    heroBadge: "Practical automation",
    heroTitle: "Route, report and AI process automation for small business",
    heroSubtitle: "I build small web services that can be quickly adapted to a specific business: routes, reports, client briefs, notifications, PDF documents and internal workspaces.",
    openRouteDemo: "Open route demo",
    openReportsDemo: "Open reports demo",
    contactMe: "Contact",
    overviewDirectionsTitle: "What can be automated",
    overviewRouteTitle: "Route Optimizer",
    overviewRouteText: "Point ordering, distance, time, maps and reports for deliveries, field visits and small fleets.",
    overviewReportsTitle: "AI Reports & PDFs",
    overviewReportsText: "Briefs, digests, mini-reports and PDFs generated from a template without complicated setup for the user.",
    overviewCustomTitle: "Custom business workflows",
    overviewCustomText: "Internal workspaces, notifications and integrations with Excel, CRM, databases and business spreadsheets.",
    foundationTitle: "Foundation for custom solutions",
    foundationText: "These demonstration prototypes can become a base for a real workflow: replace directories, add fields, connect data sources and adapt the interface to the team.",
    worksTitle: "What already works",
    worksText: "Routes, distance calculation, AI digests, HTML/PDF documents, client links and clear working scenarios.",
    developTitle: "Where it can grow",
    developText: "CRM, reports, Telegram/e-mail notifications, GPS monitoring, user roles, integrations and AI assistants.",
    examplesTitle: "Example use cases",
    examplesText: "Delivery, field service, executive reports, client briefs, request tracking and document automation.",
    techLabel: "Technologies:",
    routeBadge: "demonstration prototype",
    routeTitle: "Route Optimizer for deliveries, field visits and service tasks",
    routeDescription: "The service helps arrange route stops, calculate distance and time, compare the original route with an improved one and show the result on a map.",
    openPdf: "Open PDF presentation",
    openDemo: "Open demo",
    routeFlow1: "Requests / addresses",
    routeFlow2: "Route calculation",
    routeFlow3: "Map and stop order",
    routeFlow4: "Report / notifications / CRM",
    alreadyTitle: "What is already included",
    growthTitle: "Where it can evolve",
    routeAlready1: "adding cities and addresses;",
    routeAlready2: "road-network route calculation;",
    routeAlready3: "comparison of the original and improved stop order;",
    routeAlready4: "map, kilometers and estimated time;",
    routeAlready5: "demo mode without complicated registration;",
    routeAlready6: "the project can be used as a base for a pilot.",
    routeGrowth1: "dispatcher workspace for requests and visits;",
    routeGrowth2: "route sheets for drivers or couriers;",
    routeGrowth3: "reports on mileage, time, deviations and completed tasks;",
    routeGrowth4: "Telegram/e-mail notifications for delays or status changes;",
    routeGrowth5: "integration with GPS beacons and trackers;",
    routeGrowth6: "a mini CRM for a specific business;",
    routeGrowth7: "AI hints for deviation causes and load optimization.",
    routeTableTitle: "Use cases",
    tableUseCase: "Scenario",
    tableBenefit: "How it helps",
    routeCase1: "Courier delivery",
    routeBenefit1: "Plans address order and helps control timing.",
    routeCase2: "Field service",
    routeBenefit2: "Builds a clear route for technicians, engineers and mobile teams.",
    routeCase3: "Inspections and rounds",
    routeBenefit3: "Keeps a stop list, map and task completion report.",
    routeCase4: "Small fleet",
    routeBenefit4: "Reduces unnecessary mileage and creates clear trip reports.",
    routeCase5: "GPS beacons and trackers",
    routeBenefit5: "Provides a foundation for monitoring actual movement and deviations.",
    reportsBadge: "template-based documents",
    reportsTitle: "AI reports and PDF documents from a template",
    reportsDescription: "The service turns a template and a short client request into a ready document: a brief, digest, mini-report or PDF. The user does not need to understand prompt engineering — they choose a scenario and get the result.",
    reportsFlow1: "Data sources",
    reportsFlow2: "Report template",
    reportsFlow3: "AI processing",
    reportsFlow4: "PDF / HTML / e-mail / link",
    reportsFlow5: "Result for a client or manager",
    reportsAlready1: "creating a project or client request;",
    reportsAlready2: "choosing a result template;",
    reportsAlready3: "optional client note;",
    reportsAlready4: "AI digest generation;",
    reportsAlready5: "saving the result as HTML/PDF;",
    reportsAlready6: "client link;",
    reportsAlready7: "Russian and English interface logic;",
    reportsAlready8: "demo deployment on Render.",
    reportsGrowth1: "automatic reports from Telegram chats;",
    reportsGrowth2: "analysis of requests, reviews, messages and conversations;",
    reportsGrowth3: "regular PDF summaries for managers;",
    reportsGrowth4: "reports on sales, clients, requests and dynamics;",
    reportsGrowth5: "internal portal for employees;",
    reportsGrowth6: "commercial offer and brief generation;",
    reportsGrowth7: "integration with Excel, Google Sheets, CRM and databases;",
    reportsGrowth8: "local deployment on a company PC or server.",
    importantTitle: "Important note",
    emailNotice: "The e-mail sending function is technically planned, but free cloud hosting may restrict SMTP ports. For production, it is better to connect a separate email API or deploy the solution locally/on the client's server.",
    aboutBadge: "about the work",
    aboutTitle: "About & Contacts",
    aboutText1: "My name is Roman.",
    aboutText2: "I automate reporting, analytics and business workflows. My practical experience includes Excel, VBA, SQL, Python, reports, data processing and small web services.",
    aboutText3: "I can help a small business quickly validate an automation idea: build a prototype, show a working scenario, prepare reporting, connect data and create a clear interface for employees or clients.",
    whatHelpTitle: "How I can help",
    whatHelpText: "Routes, reports, CRM workflows, AI assistants, integrations, Excel/SQL/Python automation and daily-use interfaces.",
    approachTitle: "Approach",
    approachText: "Fast prototype, scenario validation on real data, a clear interface and further development for a specific team's workflow.",
    contactBlockTitle: "Contacts",
    footerName: "Roman Automation",
    footerText: "Static site for GitHub Pages"
  }
};

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("portfolio-language");
  return savedLanguage === "en" ? "en" : "ru";
}

function setLanguage(language) {
  const dictionary = translations[language] || translations.ru;

  translatedNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  pdfLinks.forEach((link) => {
    const project = link.dataset.pdfLink;
    const pdfPath = projectData[project]?.pdf?.[language];

    if (pdfPath) {
      link.href = pdfPath;
      link.target = "_blank";
      link.rel = "noopener";
    }
  });

  document.documentElement.lang = language;
  document.title = dictionary.metaTitle;
  localStorage.setItem("portfolio-language", language);
}

function setActiveSection(sectionName, shouldUpdateHash = true) {
  const selectedSection = sections.find((section) => section.dataset.section === sectionName);

  if (!selectedSection) {
    return;
  }

  sections.forEach((section) => {
    const isActive = section.dataset.section === sectionName;
    section.classList.toggle("is-active", isActive);
    section.hidden = !isActive;
  });

  sectionButtons.forEach((button) => {
    const isActive = button.dataset.sectionTarget === sectionName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });

  if (shouldUpdateHash) {
    history.replaceState(null, "", `#${sectionName}`);
  }
}

sectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveSection(button.dataset.sectionTarget);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

languageToggle?.addEventListener("click", () => {
  const currentLanguage = localStorage.getItem("portfolio-language") === "en" ? "en" : "ru";
  setLanguage(currentLanguage === "ru" ? "en" : "ru");
});

window.addEventListener("hashchange", () => {
  const sectionName = window.location.hash.replace("#", "") || "overview";
  setActiveSection(sectionName, false);
});

setLanguage(getInitialLanguage());
setActiveSection(window.location.hash.replace("#", "") || "overview", false);
