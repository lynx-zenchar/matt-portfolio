// Resume.jsx
import '../styles/Resume.css'

const EDUCATION = [
  {
    school: 'University of Dallas',
    logo: '/university_of_dallas.png',
    location: 'Irving, TX',
    degree: 'M.S. Candidate, Data Science and AI',
    date: 'Expected May 2027',
    gpa: '4.0',
    courses: ['SQL Programming & ML', 'Programming with AI', 'Data Visualization', 'Quantitative Methods'],
  },
  {
    school: 'University of Notre Dame',
    logo: '/notredame.png',
    location: 'Notre Dame, IN',
    degree: 'B.S. Computer Science; Minor in Philosophy',
    date: 'May 2025',
    gpa: '3.3',
    courses: ['Design & Analysis of Algorithms', 'Data Structures', 'Database Concepts', 'Probability & Statistics', 'Theory of Computing', 'Modern Web Development'],
  },
]

const EXPERIENCE = [
  {
    title: 'Graduate Student Technical Analytics Assistant',
    org: 'University of Dallas, eLearning Dept.',
    logo: '/university_of_dallas.png',
    location: 'Irving, TX',
    date: 'Sep 2025 – Present',
    bullets: [
      'Analyze 10,000+ Brightspace data points using SQL and Excel to produce executive-ready reports with 16 data visualizations for College of Business leadership.',
      'Engineer ETL workflows transforming Banner SIS/Brightspace datasets into modular SQLite databases; execute validation queries surfacing enrollment discrepancies.',
      'Develop 23+ course control sheets from registrar CSV datasets to support eLearning operations workflow.',
    ],
  },
  {
    title: 'Teaching Assistant — Design & Analysis of Algorithms',
    org: 'University of Notre Dame',
    logo: '/notredame.png',
    location: 'Notre Dame, IN',
    date: 'Jan 2025 – May 2025',
    bullets: [
      'Led twice-weekly office hours guiding 40+ CS students through algorithms, proofs, and complexity analysis.',
      'Graded 250+ algorithm and proof sections across six assignments with detailed pedagogical feedback.',
    ],
  },
  {
    title: 'Research Assistant',
    org: 'Medical CV Lab (Prof. Danny Chen) & PPG Lab (Prof. Adam Czajka)',
    logo: '/notredame.png',
    location: 'University of Notre Dame',
    date: 'Oct 2022 – May 2025',
    bullets: [
      'Evaluated Meta SAM2 and ZipLab MPVSS for polyp detection and semantic segmentation on SUN-SEG (158,690 labeled colonoscopy frames).',
      'Built GPU-enabled Conda environments, resolving 20+ dependency conflicts and building preprocessing pipelines for easy/hard dataset splits.',
      'Engineered a tensor indexing pipeline extracting spatial patches across 256-frame facial video sequences as inputs to a 3D-CNN remote PPG model.',
      'Deployed end-to-end OpenCV inference pipeline achieving ~15 FPS pulse waveform extraction via consumer webcam.',
    ],
  },
  {
    title: 'Technical Validation Analyst Intern',
    org: 'IDEA Center',
    logo: '/ideacenter.jpeg',
    location: 'South Bend, IN',
    date: 'Jun 2024 – Aug 2024',
    bullets: [
      'Evaluated a spectrally selective photonic structure for energy-efficient window applications, analyzing U-Value, SHGC, and Visible Light Transmittance.',
      'Processed 15,000+ spectral datapoints in Python, revealing ~20% better solar-heat rejection vs. commercial window films.',
      'Conducted competitive market analysis and presented findings to business development stakeholders.',
    ],
  },
  {
    title: 'UI/UX Designer Intern',
    org: 'We2Link',
    logo: '/we2link.png',
    location: 'Los Angeles, CA (Remote)',
    date: 'Jun 2022 – Sep 2022',
    bullets: [
      'Organized 38+ Figma wireframes into structured user flows for a medication-tracking app for TBI patients.',
      'Added 12 new mobile wireframes and initiated layouts for a companion web interface.',
    ],
  },
  {
    title: 'Emergency Medical Technician Intern',
    org: 'MedStar911 Mobile Healthcare',
    logo: '/medstar.png',
    location: 'Fort Worth, TX',
    date: 'July 2021',
    bullets: [
      'Assessed and monitored 10+ patients across trauma, psychiatric, and medical 911 calls; performed vitals, primary/secondary assessments, and ESO Suite documentation.',
      'Administered oxygen therapy, BVM ventilation, hemorrhage control, and naloxone; coordinated patient advocacy with EMS and ED staff.',
    ],
  },
]

const SKILLS = {
  'Programming':  'Python, SQL, R, JavaScript, Bash, Java, C/C++',
  'Data Science': 'Google BigQuery, Tableau, Pandas, Seaborn, scikit-learn',
  'AI / ML':      'TensorFlow, PyTorch, Hugging Face, BERTopic, FAISS, UMAP, HDBSCAN',
  'Software Dev': 'Git, Linux, React.js, Node.js, Django, Flask, RESTful APIs, SQLite, MySQL',
}

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-wrap">

        <div className="resume-header">
          <div>
            <span className="section-label">Curriculum Vitae</span>
            <h1>Resume</h1>
          </div>
        </div>

        {/* Education */}
        <section className="rs">
          <h2 className="rs__label">Education</h2>
          <div className="timeline">
            {EDUCATION.map((e, i) => (
              <div key={i} className="tl-item">
                <div className="tl-item__dot" />
                <div className="tl-item__body">
                  <div className="tl-item__row">
                    <div className="tl-item__org-wrap">
                        <img src={e.logo} alt={e.school} className="tl-item__logo" />
                        <span className="tl-item__org">{e.school}</span>
                    </div>
                    <span className="tl-item__date">{e.date}</span>
                    </div>
                  <h3 className="tl-item__title">{e.degree}</h3>
                  <p className="tl-item__sub">{e.location} · GPA: {e.gpa}</p>
                  <div className="tag-row">
                  <p className="tl-item__sub">Relevant Coursework:</p>
                    {e.courses.map(c => <span key={c} className="skill-tag">{c}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="rs">
          <h2 className="rs__label">Experience</h2>
          <div className="timeline">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="tl-item">
                <div className="tl-item__dot" />
                <div className="tl-item__body">
                  <div className="tl-item__row">
                    <div className="tl-item__org-wrap">
                        <img src={exp.logo} alt={exp.org} className="tl-item__logo" />
                        <span className="tl-item__org">{exp.org}</span>
                    </div>
                    <span className="tl-item__date">{exp.date}</span>
                    </div>
                  <h3 className="tl-item__title">{exp.title}</h3>
                  <p className="tl-item__sub">{exp.location}</p>
                  <ul className="tl-item__bullets">
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="rs">
          <h2 className="rs__label">Technical Skills</h2>
          <div className="skills-tbl">
            {Object.entries(SKILLS).map(([cat, val]) => (
              <div key={cat} className="skills-tbl__row">
                <span className="skills-tbl__cat">{cat}</span>
                <span className="skills-tbl__val">{val}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}