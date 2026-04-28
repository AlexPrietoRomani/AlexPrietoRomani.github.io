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
            es: "Soy Ingeniero Agrónomo y estudiante de Big Data & Data Science. Aplico ciencia de datos y modelos de IA para optimizar la agricultura de precisión, automatizar análisis y potenciar decisiones estratégicas en el agro.",
            en: "I am an Agricultural Engineer and a Big Data & Data Science student. I apply data science and AI models to optimize precision agriculture, automate analysis, and empower strategic decisions in the agricultural sector."
        },
        focus: [
            { 
                title: { es: "🌱 Agricultura de precisión:", en: "🌱 Precision Agriculture:" }, 
                description: { es: " monitorización satelital, GIS y análisis multivariante para cultivos.", en: " satellite monitoring, GIS, and multivariate analysis for crops." } 
            },
            { 
                title: { es: "🤖 Modelos predictivos:", en: "🤖 Predictive Models:" }, 
                description: { es: " estimación de rendimiento, detección de plagas y pronóstico climático.", en: " yield estimation, pest detection, and climate forecasting." } 
            },
            { 
                title: { es: "📊 Storytelling con datos:", en: "📊 Data Storytelling:" }, 
                description: { es: " dashboards en Power BI y Streamlit, junto con entrenamiento especializado.", en: " dashboards in Power BI and Streamlit, along with specialized training." } 
            }
        ]
    },
    skills: [
        {
            category: { es: "Lenguajes", en: "Languages" },
            items: [
                { name: "Python", icon: "devicon-python-plain colored" },
                { name: "R", icon: "devicon-r-plain colored" },
                { name: "Java", icon: "devicon-java-plain colored" },
                { name: "SQL", icon: "devicon-mysql-plain colored" },
                { name: "MongoDB", icon: "devicon-mongodb-plain colored" }
            ]
        },
        {
            category: { es: "Ciencia de datos", en: "Data Science" },
            items: [
                { name: "Pandas", icon: "devicon-pandas-plain colored" },
                { name: "NumPy", icon: "devicon-numpy-plain colored" },
                { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
                { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
                { name: "PyTorch", icon: "devicon-pytorch-original colored" },
                { name: "Tidyverse", image: "/images/skills/tidyverse.png" }
            ]
        },
        {
            category: { es: "Visualización y Apps", en: "Visualization & Apps" },
            items: [
                { name: "Matplotlib", icon: "devicon-matplotlib-plain colored" },
                { name: "Seaborn", icon: "devicon-python-plain" },
                { name: "Plotly", icon: "devicon-python-plain" },
                { name: "Streamlit", icon: "devicon-streamlit-plain colored" },
                { name: "Power BI", image: "/images/skills/powerbi.png" },
                { name: "Shiny", icon: "devicon-r-plain colored" }
            ]
        },
        {
            category: { es: "GIS & Cloud", en: "GIS & Cloud" },
            items: [
                { name: "QGIS", image: "/images/skills/qgis.png" },
                { name: "ArcGIS Pro", image: "/images/skills/arcgis.png" },
                { name: "Google Earth Engine", image: "/images/skills/gee.png" },
                { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
                { name: "GCP", icon: "devicon-googlecloud-plain colored" }
            ]
        }
    ],
    projects: [
        {
            name: { es: "Predicción de viento con series temporales", en: "Wind Prediction with Time Series" },
            description: { 
                es: "Aplicación Shiny para pronosticar velocidad y dirección del viento usando modelos de series temporales y visualizaciones interactivas.",
                en: "Shiny application to forecast wind speed and direction using time series models and interactive visualizations."
            },
            link: "https://github.com/AlexPrietoRomani/app_viento",
            tags: ["Series de tiempo", "Pronóstico", "Shiny"]
        },
        {
            name: { es: "Detección de enfermedades en café", en: "Coffee Disease Detection" },
            description: {
                es: "Entrenamiento y despliegue de un modelo YOLO ajustado para reconocer enfermedades en hojas de café a partir de imágenes etiquetadas.",
                en: "Training and deployment of a fine-tuned YOLO model to recognize diseases in coffee leaves from labeled images."
            },
            link: "https://github.com/AlexPrietoRomani/detection-diseases-coffee",
            tags: ["Visión computacional", "YOLO", "Agtech"]
        },
        {
            name: { es: "Generación y clasificación de imágenes", en: "Image Generation and Classification" },
            description: {
                es: "Suite en Streamlit para generar imágenes con modelos de difusión locales y clasificar resultados mediante modelos pre-entrenados.",
                en: "Streamlit suite to generate images with local diffusion models and classify results using pre-trained models."
            },
            link: "https://github.com/AlexPrietoRomani/Generacion-Clasificacion-Imagenes-Streamlit",
            tags: ["IA Generativa", "Clasificación", "Streamlit"]
        },
        {
            name: { es: "DengAI: Predicción de brotes", en: "DengAI: Outbreak Prediction" },
            description: {
                es: "Modelado predictivo para la competencia DengAI, estimando la incidencia de dengue combinando clima y series históricas.",
                en: "Predictive modeling for the DengAI competition, estimating dengue incidence by combining climate and historical series."
            },
            link: "https://github.com/AlexPrietoRomani/DengAI-Predicting-Disease-Spread",
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
    }
};
