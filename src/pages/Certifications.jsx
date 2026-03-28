// Certifications.jsx

import '../styles/Certifications.css'

const CERTS = [
  // Replace these with your real certifications

{
  icon: '/datacamp-icon.webp',
  title: 'PostgreSQL: Summary Statistics & Window Functions',
  issuer: 'DataCamp',
  date: 'MAR 11, 2026',
  description: 'Computed summary statistics and applied window functions for advanced analytical queries in PostgreSQL.',
  skills: ['PostgreSQL', 'Window Functions', 'Data Analysis', 'Aggregation'],
  pdf: '/pdfs/postrgesql_summarystats_windowfunc_certificate.pdf',
},
{
  icon: '/datacamp-icon.webp',
  title: 'Cleaning Data in PostgreSQL',
  issuer: 'DataCamp',
  date: 'MAR 05, 2026',
  description: 'Performed data cleaning techniques including handling nulls, formatting inconsistencies, and data validation in SQL.',
  skills: ['PostgreSQL', 'Data Cleaning', 'Data Wrangling'],
  pdf: '/pdfs/clean_data_postgresql_certificate.pdf',
},
{
  icon: '/datacamp-icon.webp',
  title: 'Joining Data in SQL',
  issuer: 'DataCamp',
  date: 'FEB 19, 2026',
  description: 'Mastered SQL joins including INNER, LEFT, RIGHT, and advanced multi-table joins for relational datasets.',
  skills: ['SQL', 'Joins', 'Relational Databases'],
  pdf: '/pdfs/joining_data_sql_certificate.pdf',
},
{
  icon: '/datacamp-icon.webp',
  title: 'Intermediate SQL Certificate',
  issuer: 'Datacamp',
  date: 'FEB 05, 2026',
  description: 'Advanced SQL querying and data manipulation.',
  skills: ['SQL', 'Joins', 'Aggregation'],
  pdf: '/pdfs/intermediate_sql_certificate.pdf',
},
]

export default function Certifications() {
  return (
    <div className="certs-page">
      <div className="certs-wrap">

        <div className="certs-header">
          <span className="section-label">Credentials</span>
          <h1>Certifications</h1>
          <p className="certs-notice">
           In progress... Ever growing...
          </p>
        </div>

        <div className="certs-list">
          {CERTS.map((c, i) => (
            <article key={i} className={`cert-card ${c.placeholder ? 'cert-card--placeholder' : ''}`}>
              <span className="cert-card__icon">
                {c.icon.endsWith('.webp') ? (
                    <img src={c.icon} alt={c.title} />
                ) : (
                    c.icon
                )}
               </span>
              <div className="cert-card__body">
                <div className="cert-card__top">
                  <span className="cert-card__issuer">{c.issuer}</span>
                  <span className="cert-card__date">{c.date}</span>
                </div>
                <h2 className="cert-card__title">{c.title}</h2>
                <p className="cert-card__desc">{c.description}</p>
                <div className="cert-card__skills">
                  {c.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
                {c.pdf && (
                <a
                    href={c.pdf}
                    className="cert-card__verify"
                    target="_blank"
                    rel="noreferrer"
                >
                    View Certificate →
                </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="certs-add">
          <span>+</span>
          <p>More credentials coming soon</p>
        </div>

      </div>
    </div>
  )
}