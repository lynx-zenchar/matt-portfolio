// Home.jsx
import '../styles/Home.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const SKILL_CATEGORIES = {
    'Programming': ['Python', 'SQL', 'R', 'JavaScript', 'Bash', 'Java', 'C/C++'],
    'Data Science': ['Google BigQuery', 'Tableau', 'Pandas', 'Seaborn', 'scikit-learn', 'Logistic Regression', 'K-Nearest Neighbors', 'Random Forest', 'XGBoost'],
    'AI / ML': ['TensorFlow', 'PyTorch', 'Hugging Face', 'BERTopic', 'FAISS', 'UMAP', 'HDBSCAN'],
    'Software Development': ['Git', 'Linux', 'React.js', 'Node.js', 'Django', 'Flask', 'RESTful APIs', 'SQLite', 'MySQL'],
}

const CARDS = [
    {
        icon: '🎓',
        title: 'Academic',
        body: '4.0 GPA in an MS Data Science & AI at University of Dallas. B.S. Computer Science from Notre Dame with a Philosophy minor.',
    },
    {
        icon: '🧠',
        title: 'Research',
        body: 'Two years across Notre Dame\'s Medical CV Lab and PPG Lab — polyp detection with SAM2 and remote PPG extraction from facial video.',
    },
    {
        icon: '🚑',
        title: 'Clinical',
        body: 'Former EMT with hands-on 911 response experience across trauma, psychiatric, and medical calls. Patient care is why I care about building useful things.',
    },
    {
        icon: '🎸',
        title: 'Creative',
        body: 'Co-founder, guitarist, and audio engineer for Pangdemonium — gigged across Notre Dame and released 5 original tracks to Spotify.',
    },
]

export default function Home() {
    return (
        <div className="home">
            {/* HERO */}
            <section className="hero">
                <div className="hero__grid" aria-hidden="true" />
                <div className="hero__glow" aria-hidden="true" />

                <div className="hero__inner">
                    <div className="hero__content">
                        <span className="hero__eyebrow">
                            <span className="hero__dot" />
                            Open to opportunities · Dallas, TX (Open to relocation across the US).
                        </span>

                        <h1 className="hero__name">
                            Matthew<br />Eleazar
                        </h1>

                        <p className="hero__roles">
                            <span>MS Data Science & AI</span>
                            <span className="sep">·</span>
                            <span>ML Engineer</span>
                            <span className="sep">·</span>
                            <span>Former EMT</span>
                            <span className="sep">·</span>
                            <span>Guitarist</span>
                            <span className="sep">·</span>
                            <span>Audio Engineer</span>
                        </p>

                        <p className="hero__bio">
                            I am a dedicated aspiring data scientist with a strong foundation in machine learning, AI, and full-stack development. My expertise spans Python, SQL, React.js, and various ML frameworks including TensorFlow and PyTorch.
                        </p>

                        <p className="hero__bio">
                            I'm currently pursuing my M.S. in Data Science and AI at the <b>University of Dallas</b> with a <b>4.0 GPA</b>, I previously earned my B.S. in Computer Science from the <b>University of Notre Dame</b>. I am passionate about applying AI and data science to solve real-world problems.
                        </p>

                        <div className="hero__cta">
                            <a href="/resume" className="btn btn--primary">
                                View Resume
                            </a>

                            <a
                                href="https://github.com/lynx-zenchar/lynx-zenchar"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn--ghost icon-btn"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/matthew-eleazar-nd/"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn--ghost icon-btn"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="mailto:matteleazar@gmail.com"
                                className="btn btn--ghost icon-btn"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    <div className="hero__photo-wrap">
                        <div className="hero__photo-ring" aria-hidden="true" />
                        <img
                            src="/mesoph.jpg"
                            alt="Matthew Eleazar"
                            className="hero__photo"
                        />
                    </div>
                </div>

                <div className="hero__corner-info">
                    <span>matteleazar.tech</span>
                    <span>(469) 720-7646</span>
                    <span>Expected May 2027</span>
                </div>
            </section>

            {/* SKILLS */}
            <section className="skills-section">
                <div className="skills-section__header">
                    <span className="section-label">Stack</span>
                    <h2>Technical Skills</h2>
                </div>

                <div className="skills-categories">
                    {Object.entries(SKILL_CATEGORIES).map(([category, skills]) => (
                        <div key={category} className="skills-category">
                            <h3 className="skills-category__label">{category}</h3>
                            <div className="skills-cloud">
                                {skills.map((s) => (
                                    <span key={s} className="skill-tag">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}