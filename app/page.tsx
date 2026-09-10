'use client';

import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Mail,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const skills = [
  {
    group: 'Frontend core',
    title: 'Основы фронтенда',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
  },
  {
    group: 'UI development',
    title: 'Интерфейсы',
    tools: ['React'],
  },
  {
    group: 'Tooling',
    title: 'Сборка и пакеты',
    tools: ['Vite', 'npm'],
  },
  {
    group: 'Version control',
    title: 'Контроль версий',
    tools: ['Git', 'GitHub'],
  },
  {
    group: 'Product delivery',
    title: 'Продуктовая разработка',
    tools: ['Feature Flags', 'A/B testing', 'CMS'],
  },
  {
    group: 'Backend',
    title: 'Бэкенд',
    tools: ['Node.js', 'Django'],
  },
  {
    group: 'Data',
    title: 'Базы данных',
    tools: ['PostgreSQL', 'SQLite'],
  },
  {
    group: 'Workflow',
    title: 'Техменеджмент и AI',
    tools: ['Atlassian Jira', 'Claude Code', 'Cursor', 'Codex'],
  },
];

const jobs = [
  {
    period: 'Март 2023 — сейчас',
    duration: '3 года и 7 месяцев',
    company: 'Яндекс Практикум',
    role: 'Фронтенд-разработчик',
    sections: [
      {
        title: 'Разработка',
        duties: [
          'Разработала главные страницы сервисов practicum.yandex.ru и practicum.yandex.kz — ключевые точки входа для всего трафика.',
          'Создала библиотеку переиспользуемых UI-компонентов, которые работают на 350+ продуктовых страницах в проде.',
          'Собрала и запустила несколько десятков лендингов курсов: проектировала техническое решение, реализовывала компоненты на TypeScript и React, настраивала маршрутизацию.',
          'Разработала интерактивную страницу подбора курсов на чистом JavaScript — practicum.yandex.ru/promo/ai-course-quiz/.',
          'Реализовывала адаптивную кроссбраузерную вёрстку и интеграцию с REST API, CMS и внутренними сервисами.',
          'Участвовала в запуске направления высшего образования Яндекс Практикума: разрабатывала продуктовые страницы и баннеры для рекламных кампаний.',
          'Участвовала в выводе сервиса на международный домен.',
        ],
      },
      {
        title: 'Автоматизация и процессы',
        duties: [
          'Разработала сервис автоматического запуска новых продуктов: заменила ручной процесс через 7 админок на одну форму, убрала зависимость от технического специалиста и минимизировала ошибки за счёт исключения человеческого фактора.',
          'Автоматизировала рутинные процессы команды через очереди, триггеры и внутренние инструменты.',
          'Настраивала дашборды, воркфлоу и инструменты управления разработкой.',
        ],
      },
      {
        title: 'Технический менеджмент',
        duties: [
          'Декомпозировала задачи, оценивала сложность, планировала загрузку, координировала релизы и контролировала зависимости.',
          'Проводила A/B-тесты и продуктовые эксперименты совместно с аналитиками и маркетингом.',
          'Стандартизировала подходы к разработке, подготовила внутренние гайды и документацию.',
          'Проводила code review и онбординг новых сотрудников.',
        ],
      },
    ],
    highlights: [
      '350+ продуктовых страниц используют созданную библиотеку UI-компонентов.',
      '7 админок заменены одной формой автоматического запуска новых продуктов.',
    ],
  },
  {
    period: 'Март 2021 — декабрь 2022',
    duration: '1 год и 10 месяцев',
    company: 'Lesta Games',
    role: 'Веб-разработчик',
    intro: 'Wargaming — международная GameDev-компания, в 2022 году реструктурированная в Lesta Games. Работала в распределённой международной команде; все процессы и документация велись на английском языке.',
    sections: [
      {
        title: 'Wargaming Game Center',
        note: 'Игровой лончер · 200+ млн зарегистрированных пользователей',
        duties: [
          'Управляла настройкой лончера для игровых тестов в разных регионах и условиях: конфигурация, промо-материалы, гайды и пользовательский контент.',
          'Улучшала функциональность и UI лончера на HTML, CSS и JavaScript.',
          'Поддерживала локализацию контента на 5 языков.',
        ],
      },
      {
        title: 'Веб-разработка',
        duties: [
          'Разрабатывала маркетинговые лендинги и кастомные страницы для игровых активностей.',
          'Спроектировала и реализовала портал игрового проекта с нуля: структура, бизнес-логика, MVP и адаптивная вёрстка.',
          'Интегрировала портал с CMS на Django, настроила роли доступа и подготовила документацию для контент-менеджеров.',
        ],
      },
    ],
    highlights: [
      'Работала над продуктом с аудиторией 200+ млн зарегистрированных пользователей.',
      'Спроектировала и реализовала портал игрового проекта с нуля до MVP.',
    ],
  },
];

const reviews = [
  { initials: 'АК', author: 'Имя коллеги', role: 'Роль · Компания', tone: 'blue' },
  { initials: 'МС', author: 'Имя руководителя', role: 'Роль · Компания', tone: 'yellow' },
  { initials: 'ОВ', author: 'Имя заказчика', role: 'Роль · Компания', tone: 'pink' },
];

const courses = [
  { year: '2025', provider: 'Яндекс Практикум', title: 'Frontend-разработчик' },
  { year: '2022', provider: 'HTML Academy', title: 'HTML & CSS. Professional Website Coding' },
  { year: '2022', provider: 'HTML Academy', title: 'Email Coding' },
  { year: '2017', provider: 'St. Petersburg TV School', title: 'Web Design' },
];

function SectionHeading({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="section-heading">
      <p className="section-number">{number}</p>
      <h2>{title}</h2>
      <p className="section-lead">{text}</p>
    </div>
  );
}

function ReviewMockup({ index }: { index: number }) {
  return (
    <div className={`review-screen review-screen-${index + 1}`}>
      <div className="screen-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="review-line short" />
      <div className="review-line" />
      <div className="review-line" />
      <div className="review-line medium" />
      <div className="review-line tiny" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="На главную">ЕК</a>
        <nav aria-label="Навигация по странице">
          <a href="#skills">Навыки</a>
          <a href="#experience">Опыт</a>
          <a href="#recommendations">Отзывы</a>
          <a href="#education">Обучение</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Открыта к интересным проектам</p>
          <h1>Екатерина<br />Козина<span>.</span></h1>
          <p className="hero-role">Фронтенд-разработчик · Технический менеджер</p>
          <p className="hero-summary">
            <ul>
            <li>· 5+ лет опыта в Яндексе и Wargaming.</li>
            <li>· Специализируюсь на JavaScript, TypeScript и React: продуктовые страницы, лендинги, веб-приложения.</li>
            <li>· Адаптивная кроссбраузерная вёрстка, клиентский и серверный рендеринг, интеграция с бэкендом.</li>
            <li>· Технический менеджмент: декомпозиция задач, планирование, стандартизация подходов.</li>
            <li>· 350+ страниц в проде.</li>
            <li>· Применяю AI-инструменты для ускорения разработки и автоматизации рутины.</li>
            </ul>
          </p>

          <div className="hero-actions">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button className="contact-button" size="lg">Связаться <ChevronDown /></Button>}
              />
              <DropdownMenuContent className="contact-menu" align="start">
                <DropdownMenuLabel>Удобный способ связи</DropdownMenuLabel>
                <DropdownMenuItem><MessageCircle /> Telegram <span className="menu-placeholder">добавим ссылку</span></DropdownMenuItem>
                <DropdownMenuItem><MessageCircle /> MAX <span className="menu-placeholder">добавим ссылку</span></DropdownMenuItem>
                <DropdownMenuItem><Phone /> Телефон <span className="menu-placeholder">добавим номер</span></DropdownMenuItem>
                <DropdownMenuItem><Mail /> Почта <span className="menu-placeholder">добавим адрес</span></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="social-links" aria-label="Социальные сети">
              <a href="#" aria-label="ВКонтакте">VK</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>

          <a className="scroll-cue" href="#skills">Смотреть резюме <ArrowDownRight /></a>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-grid" aria-hidden="true" />
          <div className="portrait-placeholder portrait-photo">
            <img
              src="/images/ekaterina-kozina-portrait-purple.jpg"
              alt="Портрет Екатерины Козиной"
            />
          </div>
          <p className="portrait-note">Санкт-Петербург · готова к удалённой работе</p>
        </div>
      </section>

      <section className="content-section skills-section" id="skills">
        <SectionHeading
          number="01 / Инструменты"
          title="Чем я владею"
          text="Восемь направлений: от ключевых фронтенд-технологий до продуктовых процессов, бэкенда и AI-инструментов."
        />
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className={`skill-card skill-card-${(index % 4) + 1}`} key={skill.group}>
              <div className="skill-topline"><span>{skill.group}</span><span>0{index + 1}</span></div>
              <h3>{skill.title}</h3>
              <ul className="skill-tools" aria-label={`Инструменты: ${skill.title}`}>
                {skill.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-inner">
          <SectionHeading
            number="02 / Опыт"
            title="Где я работала"
            text="Более пяти лет в продуктовой веб-разработке, автоматизации процессов и техническом менеджменте."
          />
          <div className="jobs-list">
            {jobs.map((job, index) => (
              <article className="job" key={`${job.company}-${index}`}>
                <div className="job-meta">
                  <span>{job.period}</span>
                  <strong>{job.duration}</strong>
                </div>
                <div className="job-main">
                  <p className="job-company">{job.company}</p>
                  <h3>{job.role}</h3>
                  {job.intro && <p className="job-intro">{job.intro}</p>}
                  <div className="job-sections">
                    {job.sections.map((section) => (
                      <section className="job-section" key={section.title}>
                        <div className="job-section-heading">
                          <h4>{section.title}</h4>
                          {'note' in section && section.note && <p>{section.note}</p>}
                        </div>
                        <ul>{section.duties.map((duty) => <li key={duty}>{duty}</li>)}</ul>
                      </section>
                    ))}
                  </div>
                  <div className="job-highlights">
                    {job.highlights.map((highlight) => (
                      <div className="achievement" key={highlight}>
                        <Sparkles />
                        <p><span>Ключевой результат</span>{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section recommendations-section" id="recommendations">
        <SectionHeading
          number="03 / Рекомендации"
          title="Что говорят коллеги"
          text="Здесь будут настоящие скриншоты отзывов. Сейчас карточки демонстрируют будущую сетку и просмотр изображения в увеличенном виде."
        />
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <Dialog key={review.author}>
              <DialogTrigger
                render={
                  <button className="review-card" type="button">
                    <ReviewMockup index={index} />
                    <div className="review-person">
                      <span className={`review-avatar ${review.tone}`}>{review.initials}</span>
                      <span><strong>{review.author}</strong><small>{review.role}</small></span>
                      <ArrowUpRight />
                    </div>
                  </button>
                }
              />
              <DialogContent className="review-dialog">
                <DialogHeader>
                  <DialogTitle>Место для скриншота рекомендации</DialogTitle>
                  <DialogDescription>Позже сюда добавим оригинальный отзыв без изменения его содержания.</DialogDescription>
                </DialogHeader>
                <ReviewMockup index={index} />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      <section className="education-section" id="education">
        <div className="education-inner">
          <SectionHeading
            number="04 / Обучение"
            title="Продолжаю развиваться"
            text="Профессиональные программы по фронтенд-разработке, вёрстке и веб-дизайну."
          />
          <div className="courses-list">
            {courses.map((course, index) => (
              <article className="course" key={`${course.title}-${index}`}>
                <span className="course-year">{course.year}</span>
                <div><p>{course.provider}</p><h3>{course.title}</h3></div>
                <ArrowUpRight aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <p>Есть задача, которую<br />стоит обсудить?</p>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button className="footer-contact" size="lg">Написать мне <ArrowUpRight /></Button>}
            />
            <DropdownMenuContent className="contact-menu" align="end">
              <DropdownMenuItem><MessageCircle /> Telegram</DropdownMenuItem>
              <DropdownMenuItem><MessageCircle /> MAX</DropdownMenuItem>
              <DropdownMenuItem><Phone /> Телефон</DropdownMenuItem>
              <DropdownMenuItem><Mail /> Почта</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Екатерина Козина</span>
          <span><Quote /> Сайт собран с помощью собственных навыков и ИИ-инструментов</span>
          <a href="#top">Наверх ↑</a>
        </div>
      </footer>
    </main>
  );
}
