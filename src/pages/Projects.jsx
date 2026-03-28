// Projects.jsx
import '../styles/Projects.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const PROJECTS = [
  // ===== AI/ML Projects =====
  {
    title: 'Fine-Tuning BERT',
    category: 'AI/ML',
    type: 'Course Project',
    date: 'Mar 2026',
    description:
      'Fine-tuned bert-base-uncased on the Yelp Review Full dataset for 5-class sentiment triage, achieving 0.75 F1 on severe-complaint detection. Applied QLoRA to TinyLlama-1.1B for structured review summarization and built a governance & ethics dashboard evaluating model calibration, bias, and cross-model agreement.',
    tags: ['Python', 'BERT', 'TinyLlama', 'QLoRA', 'PEFT', 'bitsandbytes', 'Sentiment Analysis', 'Dashboard'],
    highlights: [
      '0.75 F1 on severe-complaint detection',
      'Automated per-class diagnostics & executive reporting',
      'Governance & ethics audit dashboard for model readiness'
    ],
    github: 'https://github.com/lynx-zenchar/ProgrammingWithAIProjects/blob/main/notebooks/HW_FineTuning_BusinessLM_EleazarMatthew_clean.ipynb',
    demo: ''
  },
  {
    title: 'Multimodal Embeddings & CLIP/BLIP Pipeline',
    category: 'AI/ML',
    type: 'Course Project',
    date: 'Mar 2026',
    description:
      'Deployed CLIP for zero-shot food category classification (Food101) achieving 89% top-1 accuracy. Used BLIP to generate product descriptions from images and trained a custom sentence embedding model on amazon_polarity for improved retrieval accuracy.',
    tags: ['Python', 'CLIP', 'BLIP', 'SentenceTransformer', 'CosineSimilarity', 'Contrastive Learning', 'Zero-Shot', 'Image Captioning', 'Food101'],
    highlights: [
      '89% top-1 accuracy for zero-shot food classification',
      'Auto-generated image captions for missing product descriptions',
      'Custom sentence embeddings benchmarked vs MiniLM'
    ],
    github: 'https://github.com/lynx-zenchar/ProgrammingWithAIProjects/blob/main/notebooks/HW_Multimodal_Embeddings_Eleazar_Matthew_clean.ipynb',
    demo: ''
  },
  {
    title: 'Customer Insights & NLP Pipeline',
    category: 'AI/ML',
    type: 'Course Project',
    date: 'Feb 2026',
    description:
      'End-to-end topic modeling pipeline analyzing 10,000+ customer reviews via BERTopic, sentence transformers, and HDBSCAN. Integrated Phi-3 with few-shot chain prompting to automate executive summary generation and suppress hallucinations.',
    tags: ['Python', 'BERTopic', 'Phi-3', 'PyTorch', 'UMAP', 'HDBSCAN', 'Hugging Face'],
    highlights: ['10,000+ reviews', 'Chain prompting', 'Automated reporting'],
    github: 'https://github.com/lynx-zenchar/ProgrammingWithAIProjects/blob/main/notebooks/HW_TextCustomerInsights_EleazarMatthew_clean.ipynb',
    demo: ''
  },
  {
    title: 'Text Classification & Model Evaluation',
    category: 'AI/ML',
    type: 'Course Project',
    date: 'Jan 2026',
    description:
      'Implemented five NLP classification approaches — transformers, embedding-based ML, centroid similarity, zero-shot, and generative models — on the Banking77 dataset (77 intent classes). Logistic regression on sentence embeddings achieved 0.92 F1.',
    tags: ['Python', 'RoBERTa', 'FLAN-T5', 'scikit-learn', 'Banking77', 'NLP'],
    highlights: ['0.92 F1-score', '77 intents', '5 architectures compared'],
    github: 'https://github.com/lynx-zenchar/ProgrammingWithAIProjects/blob/main/notebooks/BANA6370_HW2_Eleazar_Matthew_clean.ipynb',
    demo: ''
  },
  {
    title: 'Semantic Search & RAG Pipeline',
    category: 'AI/ML',
    type: 'Course Project',
    date: '2025',
    description:
      'Built a retrieval-augmented generation pipeline using FAISS vector indexing, Cohere embeddings, and Phi-3-mini for context-grounded QA over document corpora.',
    tags: ['Python', 'FAISS', 'Cohere', 'Phi-3-mini', 'RAG', 'Embeddings'],
    highlights: ['FAISS vector search', 'Grounded QA', 'Cohere embeddings'],
    github: 'https://github.com/lynx-zenchar/ProgrammingWithAIProjects/blob/main/notebooks/HW_SemanticSearch_Generation_EleazarMatthew_clean.ipynb',
    demo: ''
  },

  // ===== Data Science Projects =====
  {
    title: 'Heart Disease Classification',
    category: 'Data Science',
    type: 'Course Project',
    date: 'Feb 2026',
    description:
      'Built a binary classification pipeline for the Cleveland Heart Disease dataset. Performed full EDA with correlation heatmaps, violin plots, and boxplots across clinical features stratified by disease condition. Trained and benchmarked Logistic Regression, K-NN, Random Forest, and XGBoost with unified ROC/AUC evaluation.',
    tags: ['Python', 'scikit-learn', 'XGBoost', 'K-NN', 'Random Forest', 'Logistic Regression', 'EDA', 'Data Visualization', 'Statsmodels'],
    highlights: [
      'Multi-model ROC overlay for performance comparison',
      'Feature interpretability via Random Forest importance & Logistic Regression odds ratios',
      'Identified key clinical predictors of cardiovascular risk'
    ],
    github: 'https://github.com/lynx-zenchar/Heart-Disease-Prediction-Analysis-/blob/main/Final_Project.ipynb',
    image: '/project-images/heartpred.png',
    demo: ''
  },

  // ===== Full Stack WebDev Projects =====
  {
    title: 'BuiltBuff Workout Tracker',
    category: 'Full Stack',
    type: 'Personal Project',
    date: 'Jun 2025 – Present',
    description:
      'Full-stack real-time workout tracking platform with React, Vite, and Back4App. Features 618 exercise templates, cloud sync, Recharts visualizations, and an LLM fitness coach via Groq API with RAG over user workout history.',
    tags: ['React', 'Vite', 'Chakra UI', 'Back4App', 'Recharts', 'Groq API', 'RAG'],
    highlights: ['618 exercise templates', '100+ users', 'LLM fitness coach'],
    image: '/project-images/builtbuff.png',
    github: 'https://github.com/lynx-zenchar/BuiltBuff2',
    demo: 'https://builtbuff.netlify.app/',
  },
  {
    title: 'ThePensiveMatthew — Full-Stack Django Blog',
    category: 'Full Stack',
    type: 'Personal Project',
    date: 'Nov 2024',
    description:
      'Developed a full-stack Django blog platform featuring user authentication, CRUD operations, a commenting system, public journal, and featured posts filtering. Implemented responsive design, rich-text editing, and seamless media handling.',
    tags: ['Python', 'Django', 'Bootstrap', 'CKEditor', 'CRUD', 'Full-Stack', 'Vercel', 'Crispy Forms', 'User Authentication'],
    highlights: [
      'Custom user models and relational database schema using Django ORM',
      'Integrated WYSIWYG editor with image uploads and media management',
      'Responsive UI with Bootstrap & Crispy Forms, deployed on Vercel'
    ],
    github: 'https://github.com/your-username/thepensive-matthew',
    image: '/project-images/pensive.png',
    demo: 'https://thepensivematthew-django.vercel.app/'
  }
]

export default function Projects() {
  const categories = ['AI/ML', 'Data Science', 'Full Stack'];

  return (
    <div className="projects-page">
      <div className="projects-wrap">
        <div className="projects-header">
          <span className="section-label">Portfolio</span>
          <h1>Projects</h1>
          <p className="projects-sub">ML pipelines · data analysis · full-stack apps</p>
        </div>

        {categories.map(cat => (
          <section key={cat} className="projects-category">
            <h2 className="category-title">{cat}</h2>
            <div className="projects-grid">
              {PROJECTS.filter(p => p.category === cat).map((p, i) => (
                <article key={i} className="proj-card">
                  {p.image && (
                    <div className="proj-card__image-wrap">
                      <img src={p.image} alt={p.title} className="proj-card__image" />
                    </div>
                  )}
                  <div className="proj-card__top">
                    <div className="proj-card__meta">
                      <span className="proj-card__type">{p.type}</span>
                      <span className="proj-card__date">{p.date}</span>
                    </div>

                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-card__github"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                  <h2 className="proj-card__title">{p.title}</h2>
                  <p className="proj-card__desc">{p.description}</p>
                  <div className="proj-card__highlights">
                    {p.highlights.map((h, j) => (
                      <span key={j} className="highlight-pill">{h}</span>
                    ))}
                  </div>
                  <div className="proj-card__tags">
                    {p.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
                  </div>
                  <div className="proj-card__links">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-card__demo"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}