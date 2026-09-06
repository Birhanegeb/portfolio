export const profile = {
  name: 'Birhane Asefa Gebrewahid',
  title: 'Data Engineer / AI Engineer',
  location: 'Bremen, Germany',
  email: 'breasgd1@gmail.com',
  github: 'https://github.com/Birhanegeb',
  linkedin: 'https://www.linkedin.com/in/bgeb721/',
  summary:
      "Data Engineering master's student at Constructor University, building " +
      "end-to-end ETL/ELT data pipelines from raw data ingestion through " +
      "validation and transformation to analysis-ready data using Python, SQL, " +
      "Apache Airflow, Apache Spark, Docker, PostgreSQL, and Terraform. " +
      "Experienced in machine learning algorithms and data analytics, and " +
      "comfortable with full-stack software engineering and backend API " +
      "development using FastAPI, Flask, PHP/Lumen, and REST APIs.",
}

export const skillGroups = [
  {
    label: 'Programming',
    skills: ['Python', 'SQL', 'PHP', 'C++'],
  },
  {
    label: 'Data engineering & processing',
    skills: ['ETL / ELT', 'Apache Airflow', 'PySpark', 'Pandas', 'NumPy'],
  },
  {
    label: 'Backend & APIs',
    skills: ['Flask', 'FastAPI', 'PHP / Lumen', 'REST APIs'],
  },
  {
    label: 'Cloud & infrastructure',
    skills: ['Docker', 'Terraform', 'AWS', 'Nomad'],
  },
  {
    label: 'AI & local LLMs',
    skills: ['Ollama (local LLM inference)'],
  },
  {
    label: 'Version control',
    skills: ['Git', 'GitHub'],
  },
]

export type Experience = {
  role: string
  org: string
  place: string
  start: string
  end: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Data Engineering Student / Projects',
    org: 'Constructor University',
    place: 'Bremen, Germany',
    start: 'Sep 2024',
    end: 'Present',
    points: [
      'Developed data engineering and machine learning projects using Python, SQL, Airflow, Spark, and Docker.',
    ],
  },
  {
    role: 'IT Officer',
    org: 'KAKI Motors PLC',
    place: 'Addis Ababa, Ethiopia',
    start: 'Nov 2023',
    end: 'Aug 2024',
    points: [
      'Supported ERP systems and maintained IT infrastructure, user access, and system administration.',
      'Managed branch LAN networks and provided first-line hardware and software support.',
    ],
  },
  {
    role: 'IT Support Specialist',
    org: 'FH Ethiopia — International NGO',
    place: 'Tigray, Ethiopia',
    start: 'Nov 2021',
    end: 'Oct 2023',
    points: [
      'Provided technical support, system administration, and user-access management across departments.',
      'Managed participant data and trained data collectors on digital data-collection tools.',
    ],
  },
  {
    role: 'Software Developer',
    org: 'Allentech Electronic Technologies S.C.',
    place: 'Tigray, Ethiopia',
    start: 'Sep 2019',
    end: 'Feb 2020',
    points: [
      'Developed backend services and REST APIs for a digital ID card management platform using PHP/Lumen.',
      'Integrated application services and tested APIs using Postman in collaboration with frontend developers.',
    ],
  },
]

export type Project = {
  name: string
  tier: 'bronze' | 'silver' | 'gold'
  stack: string[]
  description: string[]
  repo: string
}

// Tiers borrow the bronze / silver / gold medallion vocabulary from the
// flagship pipeline project itself, used here as a plain flag of how
// deep each build goes end-to-end.
export const projects: Project[] = [
  {
    name: 'Smart City Traffic ETL Pipeline',
    tier: 'gold',
    stack: ['Python', 'Airflow', 'PySpark', 'Docker', 'PostgreSQL', 'Terraform', 'Superset'],
    description: [
      'Reproducible micro-batch ETL architecture ingesting TomTom Traffic API data for multiple cities (Berlin, Bremen, Frankfurt).',
      'Bronze / silver / gold medallion processing with automated task retries, data validation, and multi-city workflows.',
    ],
    repo: 'https://github.com/Birhanegeb/smart-city-traffic-etl',
  },
  {
    name: 'IoT Sensor Data Pipeline',
    tier: 'silver',
    stack: ['Arduino', 'ESP32', 'Python', 'FastAPI', 'PostgreSQL', 'React'],
    description: [
      'End-to-end pipeline collecting temperature and humidity data from Arduino/ESP32 and DHT11 sensors, ingested through a FastAPI REST API into PostgreSQL.',
      'React dashboard visualizing current and historical readings, including minimum and maximum values.',
    ],
    repo: 'https://github.com/Birhanegeb/iot_pipeline',
  },
  {
    name: 'Gold Price ETL & Prediction Pipeline',
    tier: 'silver',
    stack: ['Python', 'Apache Airflow', 'ETL', 'Sentiment Analysis', 'Machine Learning'],
    description: [
      'Automated Airflow ETL pipeline combining gold-price market data with real-time war/conflict news sentiment to predict next-day price direction.',
    ],
    repo: 'https://github.com/Birhanegeb/gold_price_predictor',
  },
  {
    name: 'Machine Failure Prediction',
    tier: 'bronze',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'AI4I 2020 Dataset'],
    description: [
      'Machine-learning models predicting equipment failure using the AI4I Predictive Maintenance Dataset.',
      'Data preprocessing, feature engineering, model training, and performance evaluation.',
    ],
    repo: 'https://github.com/Birhanegeb/AI-Predictive-Maintenance',
  },
]

export const education = [
  {
    degree: 'M.Sc. Data Engineering',
    school: 'Constructor University',
    place: 'Bremen, Germany',
    start: 'Sep 2024',
    end: 'Present',
    focus: 'Data processing, end-to-end pipelines, machine learning',
  },
  {
    degree: 'B.Sc. Information Technology',
    school: 'Mekelle Institute of Technology / Mekelle University',
    place: 'Tigray, Ethiopia',
    start: 'Sep 2015',
    end: 'Dec 2020',
  },
]

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'German', level: 'Beginner' },
]