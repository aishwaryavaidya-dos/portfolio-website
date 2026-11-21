import React from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Atom, BookOpenText, Braces, ChevronLeft, ChevronRight,
  ChartNoAxesColumnIncreasing, Code2, FlaskConical, GraduationCap,
  Brain, Mail, Menu, FileText, Github, Linkedin, Network, X
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const experiences = [
  {
    date: "May 2026 –\nJuly 2026",
    icon: "research",
    role: "AI Research Intern",
    company: "CDTIS, IIT Bombay",
    cert: "https://drive.google.com/file/d/1P24I9clF6cY1HBv1GEMP034tj3F8XV5D/view?usp=sharing",
    bullets: [
      "Benchmarked 7 open-source language models and 5 function-calling architectures.",
      "Developed a FastAPI-based inference service for natural-language to function-calling.",
      "Co-authored research on bridging natural language and schema-guided function calling."
    ]
  },
  {
    date: "Feb 2026 –\nMay 2026",
    icon: "data",
    role: "Data Analyst Intern",
    company: "Imarticus Learning",
    cert: "https://drive.google.com/file/d/1rYhTNe0rc-EoKuI7KRSpVxtnbPlH2SaL/view?usp=drive_link",
    bullets: [
      "Analyzed YouTube trending data across 10 countries using Matplotlib, Seaborn and Power BI.",
      "Evaluated 200+ daily trending videos per region to identify effective upload windows and trends."
    ]
  },
  {
    date: "Aug 2025 –\nOct 2025",
    icon: "code",
    role: "Frontend Developer Intern",
    company: "AICTE–IBM Virtual Internship",
    cert: "https://drive.google.com/file/d/1St6FrgBGR6hlN0b1eDDSd7Wi244LrGBa/view?usp=sharing",
    bullets: [
      "Completed a six-week virtual Frontend Web Development internship.",
      "Built CineVault using the TMDB API and Tailwind CSS with search, trending and watchlist features."
    ]
  }
];

// Replace this template with your real write-up for each project.
// Each section: { heading, paragraphs: [...], bullets?: [...], image?: { src, alt, caption } }
// Put images in the public/ folder and use src like "/articles/my-image.png".
const articleTemplate = {
  intro: "A short one-line summary of what this project is about.",
  sections: [
    { heading: "Overview", paragraphs: ["Write a short summary here: what the project is and why you built it."] },
    { heading: "The problem", paragraphs: ["Describe the problem or question you set out to solve."] },
    {
      heading: "What I did",
      paragraphs: ["Walk through your approach, the tools you used and the decisions you made."],
      bullets: ["Key step or contribution one", "Key step or contribution two", "Key step or contribution three"]
    },
    { heading: "Results & learnings", paragraphs: ["Share the outcome, any numbers, and what you learned."] }
  ]
};

const projectCategories = [
  {
    id: "aiml",
    label: "AI/ML Projects",
    projects: [
      {
        slug: "function-calling-benchmark",
        title: "Natural Language to Function Calling",
        subtitle: "Benchmarking Framework & API",
        description: "Benchmarked 7 models and 5 architectures, then deployed the best pipeline as a FastAPI service.",
        tags: ["LLMs", "FastAPI", "Function Calling"],
        article: articleTemplate
      },
      {
        slug: "edinburgh-airbnb-chatbot",
        title: "Edinburgh Airbnb Explorer Chatbot",
        subtitle: "RAG + Data Analysis",
        description: "Answers questions over 25k reviews and 6.3k listings, routing each to hybrid search or text-to-pandas.",
        tags: ["RAG", "Hybrid Search", "Streamlit"],
        demo: "https://airbnb-explorer-rag-and-data-analysis.streamlit.app/",
        article: {
          intro: "A chatbot that answers questions about Edinburgh Airbnb listings by routing each one to hybrid retrieval or text-to-pandas.",
          sections: [
            {
              heading: "Overview",
              paragraphs: ["Built a RAG + data-analysis app over 25k Airbnb reviews and 6.3k listings. An LLM router (intent classification) sends each question to hybrid retrieval or text-to-pandas."]
            },
            {
              heading: "Results",
              bullets: [
                "Added BM25 to embedding search (hybrid search), raising hit@1 from 20/24 to 23/24 and MRR from 0.892 to 0.979 in retrieval evaluation.",
                "Text-to-pandas answers matched ground truth on 17/17 tests."
              ]
            },
            {
              heading: "Reliability & deployment",
              bullets: [
                "Added source citations to answers.",
                "Tuned an off-topic refusal threshold.",
                "Built a guarded code executor for text-to-pandas.",
                "Deployed on Streamlit Cloud."
              ]
            }
          ]
        }
      },
      {
        slug: "ocean-hazard-reporting",
        title: "NLP-Based Ocean Hazard Reporting",
        subtitle: "Social Media Analytics",
        description: "Classifies ocean hazard reports by type, urgency and relevance using multilingual NLP.",
        tags: ["NLP", "Transformers", "FastAPI"],
        github: "https://github.com/aishwaryavaidya05/ocean-hazard-detection-using-nlp-sih",
        article: articleTemplate
      },
      {
        slug: "guardianpixel",
        title: "GuardianPixel: Enhancing Data Security Through AI-Based Steganography",
        subtitle: "Major Project",
        description: "Hides data inside images, choosing embedding regions by edge, entropy and variance analysis.",
        tags: ["Steganography", "OpenCV", "React"],
        article: {
          intro: "GuardianPixel: Enhancing Data Security through AI-Based Steganography. My work combined image steganography algorithm development with frontend engineering.",
          sections: [
            {
              heading: "Image Steganography",
              paragraphs: ["Core focus: image processing, adaptive data hiding and secure information embedding."],
              bullets: [
                "Worked on image steganography techniques to hide confidential text or file data inside digital images without visibly affecting the original image.",
                "Worked with Least Significant Bit (LSB) steganography, using pixel-level modifications to embed secret information into image channels.",
                "Focused on adaptive embedding, using image characteristics such as edges and texture to identify suitable regions for data hiding.",
                "Worked with HED (Holistically-Nested Edge Detection) and texture analysis to guide embedding-region selection.",
                "Explored combining edge information with local entropy and variance to create a suitability map for selecting embedding regions.",
                "Worked on extraction logic to recover hidden information from the stego image while keeping embedding and extraction consistent."
              ]
            },
            {
              heading: "Key technical concepts",
              bullets: [
                "Spatial-domain image steganography",
                "LSB matching",
                "Adaptive pixel selection",
                "Edge detection using HED",
                "Local Shannon entropy and variance analysis",
                "Image-to-image data embedding and extraction",
                "Image fidelity and imperceptibility"
              ]
            },
            {
              heading: "Frontend Development",
              paragraphs: ["Core focus: building the user-facing application and integrating the steganography workflow."],
              bullets: [
                "Worked on the React-based frontend for GuardianPixel.",
                "Designed the interface for embedding and extracting hidden information.",
                "Developed workflows for uploading cover images, entering secret messages or files, and providing passphrases.",
                "Displayed image-processing visualizations, including edge maps, heatmaps and embedding-region previews.",
                "Designed interfaces for comparing original and stego images and showing image-quality metrics.",
                "Gave clear feedback for uploads, processing, extraction and errors.",
                "Integrated the frontend with the backend through REST APIs using Flask."
              ]
            },
            {
              heading: "Tech Stack",
              bullets: [
                "Frontend: React, TypeScript",
                "Backend integration: Python Flask, REST APIs",
                "Image processing: OpenCV, NumPy",
                "Computer vision: PyTorch, HED",
                "Steganography: LSB, LSB Matching, Adaptive Embedding",
                "Image analysis: Edge Detection, Entropy, Variance",
                "Cryptography: AES-256-GCM, Scrypt, SHA-256",
                "Visualization: Heatmaps, Edge Maps, Image Comparison",
                "Image evaluation: PSNR, SSIM, MSE"
              ]
            }
          ]
        }
      },
      {
        slug: "customer-churn-prediction",
        title: "Customer Churn Prediction",
        subtitle: "XGBoost Classification Model",
        description: "Predicts customer churn with XGBoost and returns the probability through an interactive interface.",
        tags: ["XGBoost", "Flask", "Gradio"],
        github: "https://github.com/aishwaryavaidya05/customer-churn-flask-xgboost",
        article: {
          intro: "An XGBoost model that predicts whether a customer will churn or stay, wrapped in an interactive interface.",
          sections: [
            {
              heading: "Features",
              bullets: [
                "Predicts whether a customer is likely to churn or stay.",
                "Uses an XGBoost classification model.",
                "Accepts customer details through an interactive interface.",
                "Displays prediction results.",
                "Provides churn probability through the Gradio demo."
              ]
            },
            {
              heading: "Tech Stack",
              bullets: [
                "Programming Language: Python",
                "Machine Learning: XGBoost",
                "Libraries: Pandas, NumPy, Scikit-learn",
                "Backend: Flask",
                "Frontend: HTML",
                "Model Serialization: Pickle",
                "Development Environment: Google Colab"
              ]
            }
          ]
        }
      },
      {
        slug: "credit-card-fraud-detection",
        title: "Credit Card Fraud Detection Model",
        subtitle: "Random Forest Classifier",
        description: "Detects fraud across 284K+ transactions, reaching 86% recall and a 77% F1-score with SMOTE.",
        tags: ["Random Forest", "SMOTE", "Scikit-learn"],
        github: "https://github.com/aishwaryavaidya05/Credit-Card-Fraud-Detection-Project",
        article: {
          intro: "A Random Forest model that detects fraudulent credit card transactions in an extremely imbalanced dataset.",
          sections: [
            {
              heading: "Overview",
              paragraphs: ["Built a credit card fraud detection model using Random Forest on 284K+ transactions, where only ~0.17% of transactions were fraudulent."],
              bullets: [
                "Performed EDA, data preprocessing, and SMOTE-based resampling to address extreme class imbalance.",
                "Achieved 86% recall, 70% precision, and 77% F1-score in detecting fraudulent transactions on the test set."
              ]
            },
            {
              heading: "Technologies and Workflow",
              bullets: [
                "Python for scripting and implementation",
                "Pandas, NumPy for data handling and preprocessing",
                "Matplotlib for visualizations",
                "Scikit-learn for model building and evaluation",
                "SMOTE (Synthetic Minority Over-sampling Technique) to handle class imbalance",
                "Random Forest Classifier for detection",
                "Kaggle dataset used for training and testing",
                "Model training, saving, and evaluation with metrics like confusion matrix and classification report",
                "EDA (Exploratory Data Analysis) to understand data distributions and feature relationships"
              ]
            },
            {
              heading: "Workflow summary",
              paragraphs: ["The overall workflow includes data loading, EDA, handling imbalanced classes using SMOTE, training a Random Forest model, evaluating its performance, and saving the trained model for future use."]
            }
          ]
        }
      }
    ]
  },
  {
    id: "data",
    label: "Data Analysis Projects",
    projects: [
      {
        slug: "youtube-trending-analysis",
        title: "YouTube Trending Analysis",
        subtitle: "Data Analytics & Visualization",
        description: "Finds the best upload windows and trends across 10 countries' trending videos.",
        tags: ["Matplotlib", "Seaborn", "Power BI"],
        github: "https://github.com/aishwaryavaidya05/YouTube-Content-Strategy-Analysis-",
        article: articleTemplate
      },
      {
        slug: "amazon-sales-dashboard",
        title: "Amazon Sales 2026 – Excel Dashboard",
        subtitle: "Data Analysis & KPI Reporting",
        description: "Turns 1,000 orders into KPI reporting: 16.2M in sales, 35.5% margin, 95.7% of target.",
        tags: ["Excel", "Pivot Tables", "Dashboard"],
        github: "https://github.com/aishwaryavaidya05/Amazon-Sales-2026-Excel-Data-Analysis-Dashboard",
        article: {
          intro: "An Excel dashboard that turns 1,000 e-commerce orders into clear KPI reporting on sales, profit and targets.",
          sections: [
            {
              heading: "Overview",
              paragraphs: ["Built an Excel dashboard using Pivot Tables and KPI reporting to analyze 1,000 e-commerce orders and 16.2M in net sales, tracking a 35.5% profit margin (5.76M profit) and 95.7% attainment against the 16.9M sales target."]
            },
            {
              heading: "Key findings",
              paragraphs: ["Sales were analyzed by region, category, payment method and month."],
              bullets: [
                "Fashion drove ~44% of revenue.",
                "The East region led at 28.8%.",
                "March was the peak month, with 13.9% of annual sales."
              ],
              image: { src: "/amazon-dashboard.png", alt: "Amazon Sales Dashboard FY 2026", caption: "The final Excel dashboard." }
            }
          ]
        }
      },
      {
        slug: "tata-retail-sales-analysis",
        title: "Retail Sales Performance Analysis",
        subtitle: "Tata Data Visualization Project",
        description: "Power BI visuals on sales, customer segments and regional trends, with seasonal and growth insights.",
        tags: ["Power BI", "Data Visualization", "Forage"],
        github: "https://github.com/aishwaryavaidya05/tata-forage-data-visualization-simulation",
        article: {
          intro: "A Power BI project that turns retail sales data into executive-level insights on performance, customers and growth.",
          sections: [
            {
              heading: "Overview",
              paragraphs: [
                "Developed Power BI visuals to analyze sales performance, customer segments and regional trends, following data cleaning to ensure accurate insights.",
                "Delivered data-driven findings on seasonal trends and growth opportunities to support strategic decision-making."
              ]
            },
            {
              heading: "Tools & Technologies",
              bullets: [
                "Microsoft Power BI",
                "Excel / CSV datasets provided by Forage",
                "Data cleaning, visualization design, and storytelling techniques"
              ]
            },
            {
              heading: "Key Learnings",
              bullets: [
                "How to anticipate the questions that business leaders (CEO/CMO) would prioritize.",
                "The importance of selecting the most suitable chart type for each business question.",
                "How to deliver executive-level insights through clear and visually engaging dashboards.",
                "Communicating findings effectively via a recorded presentation."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: "other",
    label: "Others",
    projects: [
      {
        slug: "cinevault",
        title: "CineVault",
        subtitle: "Movie & TV Discovery Platform",
        description: "Discover movies and TV with search, trending lists, watchlists and reviews, powered by TMDB.",
        tags: ["JavaScript", "Tailwind CSS", "TMDB API"],
        github: "https://github.com/aishwaryavaidya05/CineVault",
        demo: "https://aishwaryavaidya05.github.io/CineVault/",
        article: articleTemplate
      }
    ]
  }
];

const articleUrl = (slug) => `/#/projects/${slug}`;

function findProject(slug) {
  for (const category of projectCategories) {
    const project = category.projects.find((p) => p.slug === slug);
    if (project) return { project, category };
  }
  return null;
}

const skillGroups = [
  {
    title: "AI/ML & GenAI Frameworks",
    items: [
      "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "SQL", "XGBoost",
      "Hugging Face Transformers", "spaCy", "KeyBERT", "FastAPI", "Flask", "Pydantic", "LangChain",
      "Semantic Kernel", "Ollama", "Qwen 2.5", "Phi-4", "Phi4-mini", "Functiongemma", "Gemma4:E2B",
      "Gemma4:E4B", "Small Language Models (SLMs)", "NexusRaven", "Hermes", "PyTorch"
    ]
  },
  {
    title: "Languages, Web Technologies & Tools",
    items: [
      "Python", "Java", "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "C", "Git",
      "GitHub", "Google Colab", "Excel", "Power BI"
    ]
  }
];

function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links ${compact ? "social-links--compact" : ""}`}>
      <a href="https://github.com/aishwaryavaidya05" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
      <a href="https://www.linkedin.com/in/aishwarya-vaidya-" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
      <a href="mailto:vaidyaaishwarya05@gmail.com" aria-label="Email"><Mail /></a>
    </div>
  );
}

function SectionLabel({ children }) {
  return <div className="section-label"><span className="label-dot" />{children}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "#home"], ["About", "#about"], ["Experience", "#experience"],
    ["Research", "#research"], ["Projects", "#projects"], ["Skills", "#skills"], ["Contact", "#contact"]
  ];
  const [current, setCurrent] = useState("#home");
  useEffect(() => {
    const ids = links.map(([, href]) => href.slice(1));
    const onScroll = () => {
      const vh = window.innerHeight;
      const atBottom = vh + window.scrollY >= document.documentElement.scrollHeight - 4;
      let found = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= vh * 0.6) found = id;
      });
      if (atBottom) found = ids[ids.length - 1];
      setCurrent("#" + found);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  return (
    <div className="header-bar">
    <header className="site-header">
      <a className="wordmark" href="#home">Aishwarya<span>.</span></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav nav--open" : "nav"}>
        {links.map(([label, href], i) => (
          <a key={label} className={current === href ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <a className="button button-primary resume-button" href="/resume.pdf" target="_blank" rel="noreferrer">
        Resume <ArrowUpRight size={16} />
      </a>
    </header>
    </div>
  );
}

const buddyPhrases = ["Hi, Aishwarya here!", "Welcome to my corner","Let's build some AI"];

function HeroBuddy() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const full = buddyPhrases[i];
    let t;
    if (!deleting && text === full) t = setTimeout(() => setDeleting(true), 1800);
    else if (deleting && text === "") { setDeleting(false); setI((n) => (n + 1) % buddyPhrases.length); }
    else t = setTimeout(() => setText(full.slice(0, text.length + (deleting ? -1 : 1))), deleting ? 30 : 65);
    return () => clearTimeout(t);
  }, [text, deleting, i]);
  return (
    <div className="hero-buddy" aria-hidden="true">
      <svg className="buddy-svg" viewBox="0 0 130 86">
        <defs>
          <linearGradient id="pcBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbf8f1" />
            <stop offset="100%" stopColor="#dfe7ee" />
          </linearGradient>
          <radialGradient id="pcScreen" cx="50%" cy="38%" r="78%">
            <stop offset="0%" stopColor="#16347a" />
            <stop offset="100%" stopColor="#000c36" />
          </radialGradient>
          <clipPath id="pcClip"><rect x="17" y="15" width="52" height="36" rx="4" /></clipPath>
        </defs>
        <ellipse className="buddy-shadow" cx="65" cy="83" rx="58" ry="2.4" fill="#bfd3e6" opacity=".22" />
        <g className="buddy-float">
        {/* tower case */}
        <rect x="92" y="4" width="30" height="68" rx="3.5" fill="url(#pcBody)" stroke="#bfd3e6" strokeWidth="2.2" />
        <rect x="96" y="9" width="22" height="8" rx="1.5" fill="url(#pcBody)" stroke="#bfd3e6" strokeWidth="1" />
        <rect x="99" y="12" width="12" height="1.6" rx=".8" fill="#bfd3e6" />
        <rect x="96" y="20" width="22" height="8" rx="1.5" fill="url(#pcBody)" stroke="#bfd3e6" strokeWidth="1" />
        <rect x="96" y="32" width="22" height="9" rx="1.5" fill="url(#pcBody)" stroke="#bfd3e6" strokeWidth="1" />
        <rect x="99" y="35.5" width="13" height="2" rx="1" fill="#071a45" />
        <rect x="114" y="35" width="2.4" height="3" rx=".8" fill="#bfd3e6" />
        <rect x="105" y="48" width="4" height="10" rx="2" fill="#bfd3e6" />
        <circle className="buddy-led" cx="107" cy="63" r="1.4" fill="#bfd3e6" />
        <g stroke="#bfd3e6" strokeWidth="1" strokeLinecap="round"><path d="M97 67 H117" /></g>
        {/* monitor stand */}
        <rect x="33" y="60" width="20" height="5" rx="1.5" fill="url(#pcBody)" stroke="#bfd3e6" strokeWidth="1.8" />
        <ellipse cx="43" cy="66.5" rx="17" ry="3" fill="url(#pcBody)" stroke="#bfd3e6" strokeWidth="1.8" />
        {/* CRT monitor */}
        <rect x="8" y="5" width="70" height="55" rx="7" fill="url(#pcBody)" stroke="#bfd3e6" strokeWidth="2.4" />
        <path d="M13 10.5 Q18 7.5 30 7.5" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity=".7" />
        <rect x="14" y="11" width="58" height="44" rx="6" fill="#071a45" />
        <rect x="17" y="15" width="52" height="36" rx="4" fill="url(#pcScreen)" stroke="#bfd3e6" strokeWidth="1.2" />
        <g clipPath="url(#pcClip)">
          <g fill="#bfd3e6" opacity=".07">
            <rect x="17" y="19" width="52" height="1" /><rect x="17" y="24" width="52" height="1" />
            <rect x="17" y="29" width="52" height="1" /><rect x="17" y="34" width="52" height="1" />
            <rect x="17" y="39" width="52" height="1" /><rect x="17" y="44" width="52" height="1" />
            <rect x="17" y="49" width="52" height="1" />
          </g>
          <path d="M17 15 L38 15 L24 51 L17 51 Z" fill="#fff" opacity=".05" />
        </g>
        {/* face */}
        <g fill="#f4f1ea">
          <rect className="buddy-eye" x="31" y="24" width="4" height="7" />
          <rect className="buddy-eye" x="51" y="24" width="4" height="7" />
        </g>
        <g fill="#bfd3e6">
          <rect x="40" y="40" width="6" height="2" />
          <rect x="38" y="38" width="2" height="2" />
          <rect x="46" y="38" width="2" height="2" />
          <rect x="23" y="35" width="4" height="3" opacity=".5" />
          <rect x="59" y="35" width="4" height="3" opacity=".5" />
        </g>
        {/* bezel controls */}
        <rect x="14" y="56.4" width="9" height="1.8" rx=".9" fill="#bfd3e6" opacity=".7" />
        <circle cx="61" cy="57.3" r="1.1" fill="#bfd3e6" />
        <circle cx="65" cy="57.3" r="1.1" fill="#bfd3e6" />
        <circle className="buddy-led" cx="69.5" cy="57.3" r="1.1" fill="#f4f1ea" />
        {/* keyboard */}
        <rect x="4" y="70" width="80" height="11" rx="3.5" fill="url(#pcBody)" stroke="#bfd3e6" strokeWidth="2" />
        <g fill="#bfd3e6">
          <rect x="9" y="72.6" width="5.6" height="2.6" rx="1" />
          <rect x="16.3" y="72.6" width="5.6" height="2.6" rx="1" />
          <rect x="23.6" y="72.6" width="5.6" height="2.6" rx="1" />
          <rect x="30.9" y="72.6" width="5.6" height="2.6" rx="1" />
          <rect x="38.2" y="72.6" width="5.6" height="2.6" rx="1" />
          <rect x="45.5" y="72.6" width="5.6" height="2.6" rx="1" />
          <rect x="52.8" y="72.6" width="5.6" height="2.6" rx="1" />
          <rect x="60.1" y="72.6" width="5.6" height="2.6" rx="1" />
          <rect x="67.4" y="72.6" width="5.6" height="2.6" rx="1" />
          <rect x="74.7" y="72.6" width="5.6" height="2.6" rx="1" />
          <rect x="9" y="76.2" width="5.6" height="2.4" rx="1" />
          <rect x="16.3" y="76.2" width="5.6" height="2.4" rx="1" />
          <rect x="25" y="76.2" width="34" height="2.4" rx="1" />
          <rect x="62" y="76.2" width="5.6" height="2.4" rx="1" />
          <rect x="69.3" y="76.2" width="5.6" height="2.4" rx="1" />
        </g>
        <path d="M5 77 q-4 -1 -4 -5 q0 -3 3 -3" fill="none" stroke="#bfd3e6" strokeWidth="1.4" strokeLinecap="round" />
        </g>
        {/* sparkles */}
        <path className="buddy-spark s1" d="M126 12 L127.68 16.32 L132 18 L127.68 19.68 L126 24 L124.32 19.68 L120 18 L124.32 16.32 Z" fill="#bfd3e6" />
        <path className="buddy-spark s2" d="M4 3 L5.4 6.6 L9 8 L5.4 9.4 L4 13 L2.6 9.4 L-1 8 L2.6 6.6 Z" fill="#f4f1ea" />
        <circle className="buddy-spark s3" cx="85" cy="4" r="2" fill="#f4f1ea" />
      </svg>
      <div className="buddy-bubble"><span>{text}</span><i className="buddy-caret" /></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow">FINAL-YEAR ECS ENGINEERING STUDENT</p>
        <HeroBuddy />
        <h1 className="sr-only">Aishwarya: AI, research and software development portfolio</h1>
        <p className="hero-description">
          I'm Aishwarya, a final-year Electronics and Computer Science Engineering student at Pillai College of Engineering, passionate about building intelligent systems at the intersection of AI and real-world applications.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View My Work <ArrowUpRight size={16} /></a>
          <a className="button button-outline" href="#contact">Get In Touch</a>
        </div>
        <div className="social-row"><span>Find me on</span><SocialLinks /></div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          {/* Photo lives at public/me1.png. */}
          <img
            src="/me1.png"
            alt="Aishwarya profile"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <div className="portrait-placeholder">
            <span className="placeholder-initial">A</span>
            <span>Add your photo</span>
            <small>public/me1.png</small>
          </div>
        </div>
      </div>
    </section>
  );
}

const aboutCards = [
  { icon: GraduationCap, title: "Education", text: "Final-year B.E. in Electronics and Computer Science\nPillai College of Engineering", color: "purple" },
  { icon: FlaskConical, title: "Research Focus", text: "LLM benchmarking, function calling and real-world AI applications", color: "coral" },
  { icon: Brain, title: "AI/ML & Data Analytics", text: "From RAG chatbots to Power BI dashboards, turning models and raw data into clear decisions.", color: "green" },
  { icon: Code2, title: "Development Focus", text: "React interfaces backed by Flask and FastAPI.", color: "orange" }
];

function About() {
  return (
    <section className="about section-wrap section-divider" id="about">
      <div className="about-copy">
        <SectionLabel>ABOUT ME</SectionLabel>
        <h2>Asking questions.<br />Building <em className="coral-italic">answers.</em></h2>
        <p>I'm a final-year Electronics and Computer Science Engineering student at Pillai College of Engineering. I'm interested in machine learning, natural language processing, data science and cloud computing. I enjoy working on challenging problems and building practical applications that make a real impact.</p>
        <a className="button button-outline more-button" href="#experience">More About Me <ArrowRight size={16} /></a>
      </div>
      <div className="about-grid">
        {aboutCards.map(({ icon: Icon, title, text, color }) => (
          <article className="info-card" key={title}>
            <div className={`icon-box ${color}`}><Icon size={25} /></div>
            <ArrowUpRight className="card-corner" size={15} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience section-wrap section-divider" id="experience">
      <SectionLabel>EXPERIENCE</SectionLabel>
      <h2 className="section-title">My journey so <em className="coral-italic">far.</em></h2>
      <div className="timeline">
        {experiences.map((item) => (
          <article className="experience-row" key={item.role}>
            <div className={`timeline-dot timeline-dot--${item.icon}`} />
            <div className="experience-date">{item.date.split("\n").map((line) => <span key={line}>{line}</span>)}</div>
            <div className="experience-icon">
              {item.icon === "research" ? <Network /> : item.icon === "data" ? <ChartNoAxesColumnIncreasing /> : <Code2 />}
            </div>
            <div className="experience-main">
              <div className="experience-heading"><h3>{item.role}</h3><span>{item.company}</span></div>
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </div>
            <a className="round-link experience-link" href={item.cert} target="_blank" rel="noreferrer" aria-label={`View certificate: ${item.role}`} title="View certificate"><ArrowUpRight /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="research section-wrap section-divider" id="research">
      <div className="research-heading">
        <SectionLabel>RESEARCH &amp; PUBLICATIONS</SectionLabel>
        <h2>Ideas tested.<br />Systems shipped.</h2>
      </div>
      <article className="paper-card">
        <div className="paper-icon"><FileText /></div>
        <div className="paper-content">
          <div className="paper-title-row">
            <h3>SETU: Bridging Natural Language<br className="desktop-break" /> and Schema-Guided Function Calling</h3>
            <span className="status-pill">Accepted</span>
          </div>
          <p className="paper-meta">8th International Conference on Communication and Intelligent Systems</p>
          <p>Co-authored research on connecting natural-language requests with schema-guided function calling, exploring methods for more reliable and structured tool invocation in real-world scenarios.</p>
          <div className="tag-list"><span>LLMs</span><span>Function Calling</span><span>Schema-Guided</span><span>NLP</span></div>
        </div>
      </article>
    </section>
  );
}

function Projects() {
  const [activeId, setActiveId] = useState(projectCategories[0].id);
  const category = projectCategories.find((c) => c.id === activeId);
  const trackRef = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: true });
  const updateEdge = () => {
    const el = trackRef.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  };
  useEffect(() => {
    if (trackRef.current) trackRef.current.scrollLeft = 0;
    updateEdge();
    window.addEventListener("resize", updateEdge);
    return () => window.removeEventListener("resize", updateEdge);
  }, [activeId]);
  const slide = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".project-card");
    el.scrollBy({ left: dir * (card ? card.offsetWidth + 20 : el.clientWidth), behavior: "smooth" });
  };
  const canSlide = !(edge.start && edge.end);
  return (
    <section className="projects section-wrap section-divider" id="projects">
      <div className="projects-top">
        <div><SectionLabel>PROJECTS</SectionLabel><h2 className="section-title">Selected Projects</h2></div>
        <div className="project-controls"><a href="https://github.com/aishwaryavaidya05" target="_blank" rel="noreferrer">View All Projects <ArrowRight /></a></div>
      </div>
      <div className="project-tabs" role="tablist">
        {projectCategories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={activeId === c.id}
            className={`project-tab ${activeId === c.id ? "project-tab--active" : ""}`}
            onClick={() => setActiveId(c.id)}
          >
            {c.label}<span className="project-tab-count">{c.projects.length}</span>
          </button>
        ))}
      </div>
      <div className="project-carousel">
        {canSlide && (
          <button className="carousel-arrow carousel-arrow--prev" onClick={() => slide(-1)} disabled={edge.start} aria-label="Previous projects"><ChevronLeft strokeWidth={1.4} /></button>
        )}
        {canSlide && (
          <button className="carousel-arrow carousel-arrow--next" onClick={() => slide(1)} disabled={edge.end} aria-label="Next projects"><ChevronRight strokeWidth={1.4} /></button>
        )}
      <div className="project-grid" key={category.id} ref={trackRef} onScroll={updateEdge}>
        {category.projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-top"><span className="project-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="project-links">
                {project.github && <a className="round-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`GitHub repository: ${project.title}`}><Github /></a>}
                {project.demo && <a className="round-link" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Live demo: ${project.title}`}><ArrowUpRight /></a>}
              </div>
            </div>
            <h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p>
            <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <a className="project-readmore" href={articleUrl(project.slug)} target="_blank" rel="noreferrer">Read more <ArrowRight /></a>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills section-wrap section-divider" id="skills">
      <div className="skills-heading"><SectionLabel>SKILLS</SectionLabel><h2>Tools &amp; Technologies</h2></div>
      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div className="skills-group" key={group.title}>
            <h3 className="skills-group-title">{group.title}</h3>
            <div className="skills-list">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-inner section-wrap">
        <div><SectionLabel>LET'S CONNECT</SectionLabel><h2>Interested in collaborating?</h2><p>Open to ideas, collaborations and good conversations.</p></div>
        <SocialLinks compact />
        <a className="button button-primary contact-button" href="mailto:vaidyaaishwarya05@gmail.com"><Mail size={17} /> Say Hello</a>
      </div>
    </footer>
  );
}

function GlassesCursor() {
  const ref = useRef(null);
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.body.classList.add("has-glasses-cursor");
    const el = ref.current;
    let x = -100, y = -100, cx = -100, cy = -100, raf;
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      el.classList.remove("is-hidden");
      el.classList.toggle("is-hover", !!(e.target.closest && e.target.closest("a, button")));
    };
    const leave = () => el.classList.add("is-hidden");
    const tick = () => {
      cx += (x - cx) * 0.25; cy += (y - cy) * 0.25;
      const tilt = Math.max(-14, Math.min(14, (x - cx) * 0.4));
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%) rotate(${tilt}deg)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.body.classList.remove("has-glasses-cursor");
    };
  }, []);
  return (
    <div className="glasses-cursor is-hidden" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 40 54" width="34" height="46">
        {/* cream halo so the cup reads on any background */}
        <g fill="#f4f1ea" stroke="#f4f1ea" strokeWidth="5.5" strokeLinejoin="round" strokeLinecap="round">
          <line x1="23" y1="12" x2="28" y2="3" />
          <path d="M8 18 L11 47 Q11.3 49 13.5 49 L26.5 49 Q28.7 49 29 47 L32 18 Z" />
          <path d="M6 18 Q6 10 20 10 Q34 10 34 18 Z" />
        </g>
        {/* straw */}
        <line x1="23" y1="12" x2="28" y2="3" stroke="#000c36" strokeWidth="4.2" strokeLinecap="round" />
        <line x1="23" y1="12" x2="28" y2="3" stroke="#bfd3e6" strokeWidth="2" strokeLinecap="round" />
        {/* cup */}
        <path d="M8 18 L11 47 Q11.3 49 13.5 49 L26.5 49 Q28.7 49 29 47 L32 18 Z" fill="#f4f1ea" stroke="#000c36" strokeWidth="2.2" strokeLinejoin="round" />
        {/* lid */}
        <path d="M6 18 Q6 10 20 10 Q34 10 34 18 Z" fill="#bfd3e6" stroke="#000c36" strokeWidth="2.2" strokeLinejoin="round" />
        {/* pearls */}
        <g fill="#000c36">
          <circle cx="14.5" cy="44" r="2.3" />
          <circle cx="20" cy="45" r="2.3" />
          <circle cx="25.5" cy="44" r="2.3" />
          <circle cx="17" cy="40.3" r="2.1" />
          <circle cx="23" cy="40.3" r="2.1" />
        </g>
        {/* face */}
        <circle cx="15" cy="28" r="1.7" fill="#000c36" />
        <circle cx="25" cy="28" r="1.7" fill="#000c36" />
        <ellipse cx="11.8" cy="31.5" rx="2.2" ry="1.4" fill="#bfd3e6" />
        <ellipse cx="28.2" cy="31.5" rx="2.2" ry="1.4" fill="#bfd3e6" />
        <path d="M18 30.5 Q20 33 22 30.5" fill="none" stroke="#000c36" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ArticleHeader() {
  return (
    <div className="header-bar">
      <header className="site-header">
        <a className="wordmark" href="/">Aishwarya<span>.</span></a>
        <a className="button button-outline resume-button" href="/#projects">Back to portfolio</a>
      </header>
    </div>
  );
}

function ArticlePage({ slug }) {
  const found = findProject(slug);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = found ? `${found.project.title} | Aishwarya` : "Article not found | Aishwarya";
    return () => { document.title = "Aishwarya | AI Portfolio"; };
  }, [slug]);

  if (!found) {
    return (
      <>
        <ArticleHeader />
        <main className="article">
          <h1 className="article-title">Article not found</h1>
          <p className="article-intro">That project doesn't exist. <a className="article-link" href="/#projects">Back to projects</a></p>
        </main>
      </>
    );
  }

  const { project, category } = found;
  const { intro, sections } = project.article;
  return (
    <>
      <ArticleHeader />
      <main className="article">
        <SectionLabel>{category.label.toUpperCase()}</SectionLabel>
        <h1 className="article-title">{project.title}</h1>
        <p className="article-subtitle">{project.subtitle}</p>
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {intro && <p className="article-intro">{intro}</p>}
        {(project.github || project.demo) && (
          <div className="article-links">
            {project.demo && (
              <a className="button button-primary article-cta" href={project.demo} target="_blank" rel="noreferrer">
                Live demo <ArrowUpRight size={16} />
              </a>
            )}
            {project.github && (
              <a className="button button-outline article-cta" href={project.github} target="_blank" rel="noreferrer">
                <Github size={16} /> View on GitHub
              </a>
            )}
          </div>
        )}
        {sections.map((section) => (
          <section className="article-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs && section.paragraphs.map((text, i) => <p key={i}>{text}</p>)}
            {section.bullets && <ul>{section.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
            {section.image && (
              <figure>
                <img src={section.image.src} alt={section.image.alt || ""} />
                {section.image.caption && <figcaption>{section.image.caption}</figcaption>}
              </figure>
            )}
          </section>
        ))}
        <div className="article-footer">
          <a className="button button-outline" href="/#projects">All projects <ArrowRight size={16} /></a>
          <a className="button button-primary" href="/#contact">Get In Touch <ArrowRight size={16} /></a>
        </div>
      </main>
    </>
  );
}

function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

function App() {
  const hash = useHash();
  const match = hash.match(/^#\/projects\/(.+)$/);
  if (match) {
    return (
      <div className="portfolio">
        <GlassesCursor />
        <ArticlePage slug={decodeURIComponent(match[1])} />
      </div>
    );
  }
  return (
    <div className="portfolio">
      <GlassesCursor />
      <Header />
      <main><Hero /><About /><Experience /><Research /><Projects /><Skills /></main>
      <Contact />
      <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowDownRight /></a>
    </div>
  );
}

export default App;