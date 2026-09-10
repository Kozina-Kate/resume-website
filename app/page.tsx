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
    period: '20XX — настоящее время',
    company: 'Название компании',
    role: 'Название должности',
    duties: [
      'Здесь будет основная зона ответственности и масштаб задач.',
      'Здесь будет описание взаимодействия с командой и заказчиками.',
    ],
    achievement: 'Ключевое достижение с конкретным и измеримым результатом.',
  },
  {
    period: '20XX — 20XX',
    company: 'Название компании',
    role: 'Название должности',
    duties: [
      'Здесь будет описание процессов, за которые я отвечала.',
      'Здесь будет перечень основных проектов и направлений работы.',
    ],
    achievement: 'Важный результат: улучшение показателя, процесса или продукта.',
  },
  {
    period: '20XX — 20XX',
    company: 'Название компании',
    role: 'Название должности',
    duties: [
      'Здесь будет краткое описание функционала и рабочих задач.',
      'Здесь будет информация о применённых инструментах и подходах.',
    ],
    achievement: 'Достижение, которое показывает профессиональный рост.',
  },
];

const reviews = [
  { initials: 'АК', author: 'Имя коллеги', role: 'Роль · Компания', tone: 'blue' },
  { initials: 'МС', author: 'Имя руководителя', role: 'Роль · Компания', tone: 'yellow' },
  { initials: 'ОВ', author: 'Имя заказчика', role: 'Роль · Компания', tone: 'pink' },
];

const courses = [
  { year: '20XX', provider: 'Образовательная платформа', title: 'Название курса или программы повышения квалификации' },
  { year: '20XX', provider: 'Учебный центр', title: 'Название курса или профессиональной специализации' },
  { year: '20XX', provider: 'Образовательная платформа', title: 'Название интенсивной программы или сертификации' },
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
            text="Не считая NDA-фрилансов и пет-проектов"
          />
          <div className="jobs-list">
            {jobs.map((job, index) => (
              <article className="job" key={`${job.company}-${index}`}>
                <div className="job-meta"><span>{job.period}</span></div>
                <div className="job-main">
                  <p className="job-company">{job.company}</p>
                  <h3>{job.role}</h3>
                  <ul>{job.duties.map((duty) => <li key={duty}>{duty}</li>)}</ul>
                  <div className="achievement"><Sparkles /><p><span>Достижение</span>{job.achievement}</p></div>
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
            text="Курсы, сертификаты и программы повышения квалификации будут собраны в одной короткой и легко читаемой ленте."
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
