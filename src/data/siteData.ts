export const siteData = {
    hero: {
        kicker: { es: "Agriculture Data Science", en: "Agriculture Data Science" },
        title: "Alex Prieto Romani",
        subtitle: {
            es: "Ingeniero Agrónomo y científico de datos enfocado en agricultura de precisión, modelos predictivos y analítica aplicada al sector agroindustrial.",
            en: "Agricultural Engineer and Data Scientist focused on precision agriculture, predictive models, and analytics applied to the agro-industrial sector."
        },
        highlights: [
            { icon: "🌱", text: { es: "Agriculture Data Science en Hortifrut SA", en: "Agriculture Data Science at Hortifrut SA" } },
            { icon: "🎓", text: { es: "Maestría en Big Data y Data Science - VIU", en: "Master's in Big Data and Data Science - VIU" } },
            { icon: "🧠", text: { es: "Especialización de Machine Learning Engineering en DMC", en: "Machine Learning Engineering Specialization at DMC" } },
            { icon: "💼", text: { es: "Consultor y formador en analítica aplicada al agro", en: "Consultant and trainer in analytics applied to agriculture" } }
        ],
        cta: {
            primary: { text: { es: "Conecta en LinkedIn", en: "Connect on LinkedIn" }, href: "https://www.linkedin.com/in/alex-prieto-romani/" },
            secondary: { text: { es: "Explora mi GitHub", en: "Explore my GitHub" }, href: "https://github.com/AlexPrietoRomani" },
            resume: { text: { es: "Ver Currículum", en: "View Resume" }, href: "/docs/Alex_Prieto_Romani_CV.pdf" }
        },
        image: "/images/profile/profile.jpg"
    },
    about: {
        title: { es: "Sobre Mí", en: "About Me" },
        content: {
            es: "Soy Ingeniero Agrónomo y Agriculture Data Scientist con maestría en Big Data & Data Science. Me especializo en la Agricultura 4.0, aplicando modelos avanzados de Deep Learning, Computer Vision e IA Generativa para optimizar la toma de decisiones en el campo, automatizar el control de calidad y potenciar la productividad agrícola global.",
            en: "I am an Agricultural Engineer and Agriculture Data Scientist with a Master's in Big Data & Data Science. I specialize in Agriculture 4.0, applying advanced Deep Learning, Computer Vision, and Generative AI models to optimize field decision-making, automate quality control, and boost global agricultural productivity."
        },
        focus: [
            {
                title: { es: "Agricultura de Precisión", en: "Precision Agriculture" },
                description: {
                    es: "Monitorización satelital (NDVI), integración meteorológica y uso de Deep Learning para el conteo automatizado de plantas.",
                    en: "Satellite monitoring (NDVI), meteorological integration, and Deep Learning for automated plant counting."
                },
                icon: "🛰️"
            },
            {
                title: { es: "Modelos Predictivos & Vision", en: "Predictive Models & Vision" },
                description: {
                    es: "Detección de enfermedades, conteo de fruta y estimación de rendimientos mediante Machine Learning y Visión Artificial.",
                    en: "Disease detection, fruit counting, and yield estimation through Machine Learning and Computer Vision."
                },
                icon: "👁️"
            },
            {
                title: { es: "IA Generativa & LLMs", en: "Generative AI & LLMs" },
                description: {
                    es: "Implementación de sistemas RAG, herramientas de soporte técnico y reportería inteligente impulsada por IA para el agro.",
                    en: "Implementation of RAG systems, technical support tools, and AI-powered smart reporting for agriculture."
                },
                icon: "🤖"
            }
        ]
    },
    skills: [
        {
            category: { es: "Lenguajes Principales", en: "Core Languages" },
            items: [
                { name: "Python", icon: "devicon-python-plain colored", level: 3 },
                { name: "R", icon: "devicon-r-plain colored", level: 3 },
                { name: "SQL", icon: "devicon-mysql-plain colored", level: 2 },
                { name: "Astro", icon: "devicon-astro-plain colored", level: 1 },
                { name: "Rust", icon: "devicon-rust-plain colored", level: 1 }
            ]
        },
        {
            category: { es: "Ciencia de Datos", en: "Data Science" },
            items: [
                { name: "Pandas", icon: "devicon-pandas-plain colored", level: 3 },
                { name: "NumPy", icon: "devicon-numpy-plain colored", level: 3 },
                { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored", level: 3 },
                { name: "Tidyverse", image: "/images/skills/tidyverse.png", level: 3 },
                { name: "Análisis Estadístico", icon: "devicon-r-plain colored", level: 3 }
            ]
        },
        {
            category: { es: "IA Generativa & Agentes", en: "GenAI & Agents" },
            items: [
                { name: "LangChain", image: "/images/skills/langchain.png", level: 2 },
                { name: "LangGraph", image: "/images/skills/langgraph.png", level: 2 },
                { name: "Ollama", image: "/images/skills/ollama.png", level: 2 },
                { name: "Claude Code", image: "/images/skills/claude_code.png", level: 2 },
                { name: "OpenCode", image: "/images/skills/opencode.png", level: 2 },
                { name: "Stable Diffusion", image: "/images/skills/stable_diffusion.png", level: 2 }
            ]
        },
        {
            category: { es: "MLOps & Deep Learning", en: "MLOps & Deep Learning" },
            items: [
                { name: "TensorFlow", icon: "devicon-tensorflow-original colored", level: 2 },
                { name: "PyTorch", icon: "devicon-pytorch-original colored", level: 2 },
                { name: "MLflow", icon: "devicon-python-plain", level: 2 },
                { name: "Apache Airflow", icon: "devicon-python-plain", level: 2 },
                { name: "Docker", icon: "devicon-docker-plain colored", level: 2 }
            ]
        },
        {
            category: { es: "Visualización & Apps", en: "Visualization & Apps" },
            items: [
                { name: "Streamlit", icon: "devicon-streamlit-plain colored", level: 3 },
                { name: "Power BI", image: "/images/skills/powerbi.png", level: 2 },
                { name: "Shiny", image: "/images/skills/shiny_v2.png", level: 3 },
                { name: "Tableau", image: "/images/skills/tableau.png", level: 1 },
                { name: "Plotly", image: "/images/skills/plotly.png", level: 3 }
            ]
        },
        {
            category: { es: "Backend & Web", en: "Backend & Web" },
            items: [
                { name: "Java (Spring Boot)", icon: "devicon-java-plain colored", level: 2 },
                { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 2 },
                { name: "HTML5/CSS3", icon: "devicon-html5-plain colored", level: 2 },
                { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: 2 }
            ]
        },
        {
            category: { es: "Geotecnología (GIS)", en: "Geotechnology (GIS)" },
            items: [
                { name: "QGIS", image: "/images/skills/qgis.png", level: 2 },
                { name: "Google Earth Engine", image: "/images/skills/gee.png", level: 2 }
            ]
        },
        {
            category: { es: "Infraestructura Cloud", en: "Cloud Infrastructure" },
            items: [
                { name: "GCP", icon: "devicon-googlecloud-plain colored", level: 1 },
                { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored", level: 1 }
            ]
        }
    ],
    projects: [
        {
            name: { es: "AgroVisión: Plataforma de Precisión Agrícola", en: "AgroVisión: Precision Agriculture Platform" },
            description: {
                es: "Plataforma full-stack de monitoreo agronómico: gestión de parcelas con PostGIS, teledetección multiespectral (Sentinel-2, 5 índices), clima horario (Open-Meteo), asistente RAG por parcela (Groq/Llama 3), explorador SQL y conteo por dron. Backend FastAPI + UI Astro/Tailwind, desplegada en Hugging Face Spaces.",
                en: "Full-stack precision agriculture platform: PostGIS field management, Sentinel-2 multispectral telemetry (5 indices), hourly weather (Open-Meteo), per-field RAG assistant (Groq/Llama 3), SQL explorer, and drone counting. FastAPI + Astro/Tailwind, deployed on Hugging Face Spaces."
            },
            link: "https://github.com/AlexPrietoRomani/AgroVision",
            image: "/images/projects/agrovision.png",
            tags: ["FastAPI", "Astro", "PostGIS", "Sentinel-2", "RAG", "Docker"]
        },
        {
            name: { es: "Nutri-Fit: Salud y Fitness con IA", en: "Nutri-Fit: AI-Powered Health & Fitness" },
            description: {
                es: "Plataforma open-source de fitness y nutrición (web + móvil). Backend modular: nutrición, entrenamiento e IA multi-proveedor (OpenAI, Gemini, Ollama). Diario nutricional con cámara IA, escáner de código de barras, chat de planes de comida y rutinas con ejercicios reales. Flutter + FastAPI + Supabase + PostgreSQL.",
                en: "Open-source fitness and nutrition platform (web + mobile). Modular backend: nutrition, training, and multi-provider AI (OpenAI, Gemini, Ollama). Nutritional diary with AI camera, barcode scanner, chat for meal plans and routines with real exercises. Flutter + FastAPI + Supabase + PostgreSQL."
            },
            link: "https://github.com/AlexPrietoRomani/nutri-fit",
            image: "/images/projects/nutri_fit.png",
            tags: ["Flutter", "FastAPI", "Supabase", "Multi-Provider AI", "PostgreSQL", "Docker"]
        },
        {
            name: { es: "Strata-Reader: Conversor PDF a Markdown", en: "Strata-Reader: PDF to Markdown Converter" },
            description: {
                es: "Parser de alto rendimiento para RAG que transforma PDFs científicos en Markdown semántico y JSON de grafos en 0.02s/pág. Motor en Rust (XY-Cut++, R-Tree) con Triage híbrido que delega áreas complejas a VLMs locales (Qwen2.5-VL) con trazabilidad PRISMA.",
                en: "High-performance RAG parser converting scientific PDFs to semantic Markdown and graph JSON in 0.02s/page. Rust core (XY-Cut++, R-Tree) with hybrid Triage delegating complex sections to local VLMs (Qwen2.5-VL) with PRISMA traceability."
            },
            link: "https://github.com/AlexPrietoRomani/strata-reader",
            image: "/images/projects/strata_reader.png",
            tags: ["Rust", "Python", "Local AI", "Parser", "gRPC", "R-Tree"]
        },
        {
            name: { es: "AgriSearch: Búsqueda Sistemática y RAG", en: "AgriSearch: Systematic Search & RAG" },
            description: {
                es: "Asistente de investigación agrícola basado en PRISMA 2020. Integra 9 bases de datos científicas concurrentemente con un microservicio de Active Learning en Rust (linfa, rusqlite-vec) para screening inteligente e indexación RAG con LLMs locales.",
                en: "Agricultural research assistant based on PRISMA 2020. Concurrently integrates 9 scientific databases with a Rust Active Learning microservice (linfa, rusqlite-vec) for smart screening and RAG indexing with local LLMs."
            },
            link: "https://github.com/AlexPrietoRomani/AgriSearch",
            image: "/images/projects/agrisearch.png",
            tags: ["Astro", "React", "Rust Axum", "FastAPI", "Active Learning", "Qdrant"]
        },
        {
            name: { es: "BioRender: Captura de Movimiento RT", en: "BioRender: Real-Time Motion Capture" },
            description: {
                es: "Plataforma web de captura de movimiento 3D en tiempo real. Inferencia local de pose con FastAPI + MediaPipe, sincronizada via API Gateway en Rust Axum con modelos 3D en React Three Fiber y WebGL.",
                en: "Web platform for real-time 3D motion capture. Local pose inference with FastAPI + MediaPipe, synchronized via Rust Axum API Gateway with 3D models using React Three Fiber and WebGL."
            },
            link: "https://github.com/AlexPrietoRomani/BioRender",
            image: "/images/projects/biorender.png",
            tags: ["React Three Fiber", "WebGL", "MediaPipe", "Rust Axum", "Astro", "FastAPI"]
        },
        {
            name: { es: "TFM: Mitigación de Alucinaciones en LLMs", en: "TFM: Hallucination Mitigation in LLMs" },
            description: {
                es: "Plataforma académica que evalúa mitigación de alucinaciones en LLMs para el agro. Compara chat directo (V0), RAG vectorial (V1) y agente autónomo corrector en LangGraph (V2) usando RAGAS y FactScore.",
                en: "Academic platform evaluating hallucination mitigation in LLMs for agriculture. Compares direct chat (V0), vector RAG (V1), and autonomous self-correcting agent in LangGraph (V2) using RAGAS and FactScore."
            },
            link: "https://github.com/AlexPrietoRomani/TFM-hallucination",
            image: "/images/projects/tfm_hallucination.png",
            tags: ["LangGraph", "RAGAS", "FactScore", "Qdrant", "Streamlit", "Ollama"]
        },
        {
            name: { es: "StartStats: Librería R para Agronomía", en: "StartStats: R Package for Agronomy" },
            description: {
                es: "Paquete R para análisis estadístico en agronomía: grupos de significancia (Tukey, Games-Howell, Duncan), ANOVA tipo III, pruebas no paramétricas y visualización con ggplot2. Incluye `run_analysis()` para flujos completos de análisis.",
                en: "R package for statistical analysis in agronomy: significance groups (Tukey, Games-Howell, Duncan), Type III ANOVA, non-parametric tests, and ggplot2 visualization. Includes `run_analysis()` for complete analysis workflows."
            },
            link: "https://github.com/AlexPrietoRomani/StartStats",
            image: "/images/projects/startstats.png",
            tags: ["R", "ggplot2", "ANOVA", "Estadística", "Paquete CRAN", "Agronomía"]
        },
        {
            name: { es: "Generación y Clasificación de Imágenes", en: "Image Generation and Classification" },
            description: {
                es: "Suite en Streamlit para generar imágenes con modelos de difusión locales y clasificar resultados mediante modelos pre-entrenados.",
                en: "Streamlit suite for generating images with local diffusion models and classifying results using pre-trained models."
            },
            link: "https://github.com/AlexPrietoRomani/Generacion-Clasificacion-Imagenes-Streamlit",
            image: "/images/projects/generation.png",
            tags: ["IA Generativa", "Clasificación", "Streamlit"]
        },
        {
            name: { es: "Predicción de Viento con Series Temporales", en: "Wind Prediction with Time Series" },
            description: {
                es: "Aplicación Shiny para pronosticar velocidad y dirección del viento usando modelos LSTM y visualizaciones interactivas.",
                en: "Shiny application to forecast wind speed and direction using LSTM models and interactive visualizations."
            },
            link: "https://github.com/AlexPrietoRomani/app_viento",
            image: "/images/projects/wind.png",
            tags: ["Series de tiempo", "LSTM", "Shiny", "Pronóstico"]
        },
        {
            name: { es: "Detección de Enfermedades en Café", en: "Coffee Disease Detection" },
            description: {
                es: "Entrenamiento y despliegue de un modelo YOLO ajustado para reconocer enfermedades en hojas de café a partir de imágenes etiquetadas.",
                en: "Training and deployment of a fine-tuned YOLO model to recognize diseases in coffee leaves from labeled images."
            },
            link: "https://github.com/AlexPrietoRomani/detection-diseases-coffee",
            image: "/images/projects/coffee.png",
            tags: ["Visión computacional", "YOLO", "Agtech"]
        },
        {
            name: { es: "DengAI: Predicción de Brotes", en: "DengAI: Outbreak Prediction" },
            description: {
                es: "Modelado predictivo para la competencia DengAI, estimando la incidencia de dengue combinando variables climáticas y series históricas.",
                en: "Predictive modeling for the DengAI competition, estimating dengue incidence by combining climate variables and historical series."
            },
            link: "https://github.com/AlexPrietoRomani/DengAI-Predicting-Disease-Spread",
            image: "/images/projects/dengue.png",
            tags: ["Competencia", "Modelado", "Salud pública"]
        }
    ],
    contact: {
        email: "alexprieto1997@gmail.com",
        linkedin: "linkedin.com/in/alex-prieto-romani/",
        linkedinUrl: "https://www.linkedin.com/in/alex-prieto-romani/",
        github: "github.com/AlexPrietoRomani",
        githubUrl: "https://github.com/AlexPrietoRomani"
    },
    cv: {
        path: "/docs/Alex_Prieto_Romani_CV.pdf",
        buttonText: { es: "Descargar CV", en: "Download CV" },
        title: { es: "Descarga mi CV", en: "Download my CV" },
        subtitle: {
            es: "Obtén una copia actualizada de mi experiencia profesional y logros.",
            en: "Get an updated copy of my professional experience and achievements."
        }
    },
    courses: {
        title: { es: "Cursos disponibles", en: "Available Courses" },
        intro: {
            es: "Selecciona un curso para explorar las partes y sesiones disponibles.",
            en: "Select a course to explore the available parts and sessions."
        },
        mainButton: {
            text: { es: "Ingresar a cursos (Plataforma)", en: "Enter Courses (Platform)" },
            href: "https://alex-prieto-00.shinyapps.io/Curso_disennos_experimentales/",
            icon: "🎓"
        },
        cards: [
            {
                kicker: { es: "Curso especializado", en: "Specialized Course" },
                title: { es: "Diseños estadísticos V2", en: "Statistical Designs V2" },
                meta: { es: "2 partes · 9 sesiones", en: "2 parts · 9 sessions" },
                image: "/images/courses/disenos_estadisticos_v2.jpg",
                href: "https://alex-prieto-00.shinyapps.io/Curso_disennos_experimentales/"
            },
            {
                kicker: { es: "Curso especializado (IA)", en: "Specialized Course (AI)" },
                title: { es: "Diseños estadísticos V3", en: "Statistical Designs V3" },
                meta: { es: "3 partes · 9 sesiones", en: "3 parts · 9 sessions" },
                image: "/images/courses/disenos_estadisticos_v3.jpg",
                href: "https://alex-prieto-00.shinyapps.io/Curso_disennos_experimentales/"
            }
        ]
    },
    experience: [
        {
            year: { es: "Julio 2025 - Presente", en: "July 2025 - Present" },
            title: { es: "Agriculture Data Science", en: "Agriculture Data Science" },
            company: { es: "Hortifrut S.A. – La Libertad, Perú", en: "Hortifrut S.A. – La Libertad, Peru" },
            description: {
                es: "Diseño y ejecución de modelos estadísticos y algoritmos de analítica avanzada para transformar datos agronómicos en información accionable. Desarrollo de indicadores agronómicos y soporte analítico en planificación agrícola, fertirriego y gestión operativa. Colaboración en el modelo de idoneidad agrometeorológica para establecimiento y manejo de genética. Análisis de biometría, fenología y estimación de fruta para optimizar decisiones. Integración de herramientas digitales y LLMs para reportes automatizados.",
                en: "Design and execution of statistical models and advanced analytics algorithms to transform agronomic data into actionable insights. Development of agronomic indicators and analytical support in agricultural planning, fertigation, and operational management. Collaboration in the agrometeorological suitability model. Analysis of biometry, phenology, and fruit estimation. Integration of digital tools and LLMs for automated reports."
            }
        },
        {
            year: { es: "Sep. 2024 – Junio 2025", en: "Sep. 2024 – June 2025" },
            title: { es: "Data Science I+D", en: "R&D Data Science" },
            company: { es: "CAMPOSOL S.A. – La Libertad, Perú", en: "CAMPOSOL S.A. – La Libertad, Peru" },
            description: {
                es: "Desarrollo e implementación de modelos predictivos supervisados (Regresión, Random Forest, XGBoost) y no supervisados (clustering) para identificar insights y optimizar decisiones estratégicas. Creación y mantenimiento de dashboards interactivos en Power BI y Shiny. Ejecución de procesos ETL con Python y SQL. Participación activa en experimentación estadística (test de hipótesis, ANOVA).",
                en: "Development and implementation of supervised predictive models (Regression, Random Forest, XGBoost) and unsupervised (clustering) to identify insights and optimize strategic decisions. Creation and maintenance of interactive dashboards in Power BI and Shiny. Execution of ETL processes with Python and SQL. Active participation in statistical experimentation (hypothesis testing, ANOVA)."
            }
        },
        {
            year: { es: "Ago. 2023 – Ago. 2024", en: "Aug. 2023 – Aug. 2024" },
            title: { es: "Investigador de Mejoramiento Genético", en: "Genetic Improvement Researcher" },
            company: { es: "CAMPOSOL S.A. – La Libertad, Perú", en: "CAMPOSOL S.A. – La Libertad, Peru" },
            description: {
                es: "Automatización del flujo de trabajo ETL mediante scripts de Python para garantizar la integridad y consistencia de datos. Implementación y mantenimiento de dashboards de Power BI para monitoreo y visualización eficiente de resultados comerciales y operativos. Realización de análisis estadísticos avanzados para identificación de insights y optimización de recursos en proyectos específicos.",
                en: "Automation of ETL workflow through Python scripts to ensure data integrity and consistency. Implementation and maintenance of Power BI dashboards for efficient monitoring and visualization of commercial and operational results. Execution of advanced statistical analysis to identify insights and optimize resources in specific projects."
            }
        }
    ],
    education: [
        {
            year: { es: "Enero de 2024 - Abril de 2025", en: "January 2024 - April 2025" },
            title: { es: "Máster Universitario en Big Data y Ciencia de Datos", en: "Master's in Big Data and Data Science" },
            company: { es: "VIU - Universidad Internacional de Valencia", en: "VIU - International University of Valencia" },
            description: {
                es: "Enfoque en procesamiento de grandes volúmenes de datos (Data Processing), arquitecturas cloud y aprendizaje automático avanzado.",
                en: "Focus on large-scale data processing, cloud architectures, and advanced machine learning."
            }
        },
        {
            year: { es: "2024", en: "2024" },
            title: { es: "Especialización en Machine Learning Engineering", en: "ML Engineering Specialization" },
            company: { es: "DMC Perú", en: "DMC Perú" },
            description: {
                es: "Profundización en despliegue de modelos, MLOps y escalabilidad de sistemas de inteligencia artificial.",
                en: "Deep dive into model deployment, MLOps, and artificial intelligence systems scalability."
            }
        },
        {
            year: { es: "Enero de 2015 - Diciembre de 2020", en: "January 2015 - December 2020" },
            title: { es: "Ingeniero Agrónomo, Agronomía", en: "Agricultural Engineer, Agronomy" },
            company: { es: "Universidad Nacional Agraria La Molina", en: "National Agrarian University La Molina" },
            description: {
                es: "Formación sólida en ciencias agrarias, gestión de recursos naturales y producción vegetal sostenible.",
                en: "Solid background in agricultural sciences, natural resource management, and sustainable plant production."
            }
        }
    ]
};
