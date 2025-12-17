// --- Type Definitions ---
export interface Publication {
  year: number;
  title: string;
  venue: string;
  type: "Journal" | "Conference" | "Invited Talk" | string;
  description: string;
}

export interface FacultyMember {
  name: string;
  posterImage?: string; // Made optional
  publications: Publication[];
}

export interface AwardEntry {
  faculty?: string;
  mentor: string;
  student: string;
  award: string;
  work: string;
  conference: string;
  posterImage?: string; // Made optional
}

export interface ResearchDataType {
  faculty: FacultyMember[];
  awards: AwardEntry[];
}

// --- Data Export ---
export const researchData: ResearchDataType = {
  faculty: [
    {
      name: "Dr. Innocent Nyalala",
      posterImage: "/AFRICHI-Egypt 2025.png",
      publications: [
        {
          year: 2025,
          title:
            "From Art to Algorithms: Co-Designing AI for Clove Grading with Zanzibar&#39;s Indigenous Experts",
          venue: "AFRICHI ACM Conference 2025",
          type: "Journal",
          description:
            "Proposes a socio-technical approach to modernizing Zanzibar&#39;s clove grading system. Validates a segmentation-first deep learning architecture, achieving 99.0% accuracy, while advocating for co-design with Indigenous experts to develop a low-cost mobile tool that fosters transparency and trust.",
        },
        {
          year: 2025,
          title:
            "BAFNet: Deep contour-aware features for colorectal polyps segmentation",
          venue: "Expert Systems with Applications Journal",
          type: "Journal",
          description:
            "Introduces a boundary-aware feature fusion neural network for improved colorectal polyp segmentation through gating mechanisms that select high-quality contour features and enhance semantic accuracy. ",
        },
        {
          year: 2025,
          title:
            "Digital Sovereignty or Digital Serfdom? AI Strategies, Geopolitics, and the Quest for an Equitable Global South",
          venue: "EurIPS 2025 Conference - Workshop on Private AI Governance",
          type: "Journal",
          description:
            "This study examines whether Global South countries are advancing toward digital sovereignty or drifting into digital serfdom. It uses a seven-dimensional framework and four case studies (Singapore, Vietnam, Kenya, and Syria) to reveal asymmetries in computing, talent, and regulation.",
        },
        {
          year: 2025,
          title:
            "AI Sovereignty in the Global South: Power, Dependency, and Strategic Futures",
          venue: "AAAI 2026 Conference - Workshop Empowering Global South AI",
          type: "Journal",
          description:
            "Analyzes structural power asymmetries in AI development across the Global South, proposing multipolar policy frameworks involving the African Union, ASEAN, and South-South cooperation to counter digital dependency on foreign platforms.",
        },
        {
          year: 2025,
          title:
            "Towards Culturally Attuned and Resource-Aware Foundation Models for East African Agriculture: A theoretical framework and research agenda",
          venue: "Deep Learning Indaba (DLI) 2025 Conference",
          type: "Conference",
          description:
            "Presented theoretical framework for culturally attuned foundation models for East African agriculture.",
        },
        {
          year: 2025,
          title:
            "How can Innovation Modernize the Public Service Delivery and Create Inclusive Digital Economy",
          venue: "4th ZRCP Joint Annual Conference, Zanzibar – Invited talk",
          type: "Invited Talk",
          description:
            "A talk on innovation&#39;s role in modernizing public service delivery and fostering an inclusive digital economy.",
        },
        {
          year: 2025,
          title:
            "Computing at the Edge of Possibility: Building Agricultural AI for Resource Constrained East Africa",
          venue: "NPTEL CRC 302 Studio, IIT Madras Chennai",
          type: "Invited Talk",
          description:
            "Faculty talk on developing agricultural AI solutions for resource-constrained environments in East Africa.",
        },
        {
          year: 2025,
          title:
            "Prime Directives for Responsible AI for Africa: A Manifesto for Inclusive Technology",
          venue:
            "Data Science Africa (DSA) 2025 conference, hosted by Iaban University",
          type: "Conference",
          description:
            "We present a holistic framework for developing inclusive, ethical, and sustainable AI that addresses Africa's unique cultural, social, and economic contexts. We emphasize participatory design, data equity, and local empowerment to ensure AI benefits all African communities.",
        },
        {
          year: 2025,
          title:
            "Rectifying the extremely weakened signals for cassava leaf disease detection",
          venue: "Computers and Electronics in Agriculture, Volume 232",
          type: "Journal",
          description:
            "Developed an artificial intelligence approach to accurately detect cassava leaf diseases by enhancing weak signal patterns in agricultural imaging.",
        },
      ],
    },
    {
      name: "Dr. Manoj Kumar",
      posterImage: "/research-6.jpeg",
      publications: [
        {
          year: 2025,
          title:
            "Analysis of a Mathematical Model for Malaria Using a Data-Driven Approach",
          venue: "Scientific Reports, a journal published by Nature Portfolio",
          type: "Journal",
          description:
            "Our study, accepted in Scientific Reports, introduces a novel temperature and altitude-dependent SIR-SI model for malaria transmission. We integrate physics-informed neural networks (PINNs) for parameter inference and use Dynamic Mode Decomposition (DMD) to develop a real-time transmission risk index, offering a data-driven yet interpretable framework for predictive modeling and intervention planning. ",
        },
        {
          year: 2025,
          title:
            "Mathematical analysis and optimal control of age-structured social interaction model with law enforcement",
          venue:
            "Mathematical Methods in the Applied Sciences, Volume 48, Issue 3",
          type: "Journal",
          description:
            "Investigated the dynamics of social systems influenced by age groups and law enforcement through mathematical modeling.",
        },
        {
          year: 2025,
          title:
            "Small but Mighty: Unlocking Financial Sentiment Analysis with Compact Language Models",
          venue:
            "Workshop on Advances in Financial Artificial Intelligence, International Conference on Learning Representations, Singapore",
          type: "Conference",
          description:
            "Proposed the use of compact natural language models for efficient financial sentiment analysis in resource-constrained environments.",
        },
        {
          year: 2024,
          title:
            "Optimal control in a social interaction model with law enforcement",
          venue: "Control Conference Africa, Mauritius",
          type: "Conference",
          description:
            "Modeled how law enforcement interventions affect social behavior and optimal response strategies.",
        },
        {
          year: 2024,
          title:
            "Analysis of a mathematical model for malaria using data-driven approach",
          venue:
            "14th American Institute of Mathematical Sciences Conference, New York University Abu Dhabi",
          type: "Invited Talk",
          description:
            "Demonstrated how data enhances predictive models for disease spread and control measures.",
        },
      ],
    },
    {
      name: "Dr. Tushar Shinde",
      posterImage: "/research-7.png",
      publications: [
        {
          year: 2025,
          title:
            "Adaptive Compression of Large Vision Models for Efficient Image Quality Assessment of AI-Generated Content",
          venue:
            "IEEE/CVF International Conference on Computer Vision (ICCV) 2025 workshop on Efficient Computing under Limited Resources (ECLR), Honolulu, Hawaii, USA 🇺🇸.",
          type: "Conference",
          description:
            "Introduces a novel adaptive compression framework that enables large vision models to be used efficiently for assessing the visual quality of AI-generated content, paving the way for scalable, real-time deployment on resource-constrained platforms.",
        },
        {
          year: 2025,
          title:
            "TWINSHIELD: A Dual Phase System for Detecting and Extracting Backdoors in VLMs",
          venue:
            "32th IEEE International Conference on Image Processing (ICIP) 2025, USA",
          type: "Conference",
          description:
            "Presents a dual-phase system to identify and remove backdoors in vision-language models (VLMs).",
        },
        {
          year: 2025,
          title:
            "High-Performance Lightweight Vision Models for Land Cover Classification with Coresets and Compression",
          venue:
            "42nd International Conference on Machine Learning (ICML) 2025 workshop on TerraBytes, Canada",
          type: "Conference",
          description:
            "Proposes a high-efficiency model using coresets and compression for scalable land cover classification. Selected for the travel grant (registration support) from ICML Terrabytes 2025.",
        },
        {
          year: 2025,
          title:
            "Towards Optimal Layer Ordering for Efficient Model Compression via Pruning and Quantization",
          venue:
            "25th IEEE International Conference on Digital Signal Processing (DSP) 2025, Greece",
          type: "Conference",
          description:
            "Explores the impact of layer ordering on model compression using pruning and quantization strategies.",
        },
        {
          year: 2025,
          title:
            "EdgeHeart: Real-Time Detection of Cardiac Conduction Disorders on Edge Devices",
          venue:
            "50th IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP) 2025 (Show and Tell Session), India",
          type: "Conference",
          description:
            "Proposes a real-time edge-deployable system for detecting cardiac conduction anomalies.",
        },
        {
          year: 2025,
          title:
            "Uncertainty-guided Style-aware Probabilistic Perceptual Quality Assessment for AI-Generated Images",
          venue:
            "IEEE / CVF Computer Vision and Pattern Recognition Conference (CVPR) 2025 Workshop, USA",
          type: "Conference",
          description:
            "Introduces a probabilistic quality assessment model for generative images, guided by style and uncertainty. Shivaanee, selected for the WiCV@CVPR 2025 travel grant.",
        },
        {
          year: 2025,
          title:
            "An Efficient and Scalable Framework for Lightweight Crop Disease Recognition in Low-Resource Settings",
          venue:
            "IEEE / CVF Computer Vision and Pattern Recognition Conference (CVPR) 2025 Workshop on Agriculture-Vision, USA",
          type: "Conference",
          description:
            "Develops a lightweight and scalable framework for crop disease classification in resource-constrained environments.",
        },
        {
          year: 2025,
          title:
            "Efficient Land-Cover Image Classification via Mixed Bit-Precision Quantization",
          venue:
            "International Conference on Learning Representations (ICLR) 2025 Workshop on Machine Learning for Remote Sensing, Singapore",
          type: "Conference",
          description:
            "Uses mixed-bit quantization for efficient land-cover image classification in remote sensing. Ahmed, selected for the €1500 travel grant from ICLR ML4RS 2025.",
        },
        {
          year: 2025,
          title:
            "Model Compression Meets Resolution Scaling for Efficient Remote Sensing Classification",
          venue:
            "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) 2025 Workshop on Computer Vision for Earth Observation (CV4EO), USA",
          type: "Conference",
          description:
            "Integrates model compression and image resolution scaling for improved remote sensing classification.",
        },
        {
          year: 2025,
          title:
            "Mixed-Precision is All You Need for Efficient Document Image Classification",
          venue:
            "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) 2025 Workshop on Computer Vision Systems for Document Analysis and Recognition, USA",
          type: "Conference",
          description:
            "Demonstrates the effectiveness of mixed-precision quantization for document image classification.",
        },
        {
          year: 2025,
          title:
            "Navigating Coreset Selection and Model Compression for Efficient Maritime Image Classification",
          venue:
            "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) 2025 Workshop on Maritime Computer Vision, USA",
          type: "Conference",
          description:
            "Combines coreset selection and compression techniques for maritime visual recognition tasks.",
        },
        {
          year: 2024,
          title:
            "Adaptive Quantization and Pruning of Deep Neural Networks via Layer Importance Estimation",
          venue:
            "38th Annual Conference on Neural Information Processing Systems (NeurIPS) 2024 workshop on Machine Learning and Compression, Canada",
          type: "Conference",
          description:
            "Proposes adaptive pruning and quantization based on estimated importance of each DNN layer.",
        },
        {
          year: 2024,
          title:
            "Lightweight Neural Networks for Speech Emotion Recognition using Layer-wise Adaptive Quantization",
          venue:
            "38th Annual Conference on Neural Information Processing Systems (NeurIPS) 2024 ENLSP workshop (PMLR 262:584–595), Canada",
          type: "Conference",
          description:
            "Introduces a lightweight SER model leveraging adaptive layer-wise quantization.",
        },
        {
          year: 2024,
          title:
            "Adaptive Quantization of Deep Neural Networks via Layer Importance Estimation",
          venue:
            "International Conference on Computer Vision & Image Processing (CVIP) 2024, India",
          type: "Conference",
          description:
            "Presents a method for quantization based on importance estimation of DNN layers for efficient deployment.",
        },
        {
          year: 2024,
          title:
            "Adaptive Pixel-based Efficient Motion Search for Surveillance Video Coding",
          venue:
            "IEEE International Conference on Image Processing Theory, Tools and Applications (IPTA) 2024, Morocco",
          type: "Conference",
          description:
            "Proposes an adaptive motion estimation technique for efficient surveillance video compression.",
        },
      ],
    },
    {
      name: "Dr. Ritika Jain",
      posterImage: "/research-4.jpg",
      publications: [
        {
          year: 2025,
          title: "Effective diagnosis of sleep disorders with LightGBM-EOG-EEG",
          venue:
            "13th IEEE International Conference on Healthcare Informatics, Italy",
          type: "Conference",
          description:
            "Combined EEG and EOG modalities with machine learning for better sleep disorder classification.",
        },
        {
          year: 2025,
          title:
            "Seizure detection from EEG signals using autoencoder-classifier model",
          venue:
            "25th International Conference on Digital Signal Processing, Greece",
          type: "Conference",
          description:
            "Designed a deep learning approach that uses signal transformation for early seizure detection in clinical settings.",
        },
        {
          year: 2024,
          title:
            "Modality-specific feature selection for improved sleep staging",
          venue:
            "IEEE Journal of Biomedical and Health Informatics, Volume 28, Issue 2",
          type: "Journal",
          description:
            "Enhanced sleep stage classification by selecting relevant EEG and EOG features and improving temporal awareness.",
        },
        {
          year: 2024,
          title:
            "Classification of insomnia using sleep microstructure patterns",
          venue:
            "46th Annual International Conference of the IEEE Engineering in Medicine and Biology Society, Florida",
          type: "Conference",
          description:
            "Explored the role of cyclic alternating patterns in identifying insomnia-related disruptions.",
        },
        {
          year: 2024,
          title:
            "Effective diagnosis of various sleep disorders using LEE classifier: LightGBM-EOG",
          venue:
            "IEEE Journal of Biomedical and Health Informatics, Volume 29, Issue 4",
          type: "Journal",
          description:
            "Introduced a novel LightGBM-based classifier utilizing EOG signals to achieve efficient and interpretable diagnostics for a range of sleep disorders.",
        },
        {
          year: 2024,
          title:
            "Modality-specific feature selection, data augmentation, and temporal context for improved sleep staging",
          venue:
            "IEEE Journal of Biomedical and Health Informatics, Volume 28, Issue 2",
          type: "Journal",
          description:
            "Proposed a comprehensive framework that integrates feature selection across EEG and EOG modalities, temporal modeling, and data augmentation to enhance accuracy in automatic sleep stage classification.",
        },
      ],
    },
  ],
  awards: [
    {
      faculty: "Prof. Tushar Shinde",
      mentor: "",
      student: "",
      award: "NeurIPS 2025 BrainBodyFM Travel Grant of USD $1500!",
      work: "Resource-Efficient ECG Foundation Networks via Layer-wise Adaptive Compression",
      conference:
        "Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025), San Diego, California, USA",
      posterImage: "/neurips25-brainbodyfm.png",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Aisha Hamad Hassan (M.Tech student)",
      award: "NeurIPS 2025 GenAI in Finance Travel Grant of USD $800!",
      work: "eFinBERT: Efficient Financial Sentiment Classification",
      conference:
        "Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025), San Diego, California, USA",
      posterImage: "/neurips25-genai.png",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Aisha Hamad Hassan (M.Tech student)",
      award:
        "Aisha - USD 1250 (AAAI-2026 Travel Scholarship Award), Full Conference Registration Grant (~USD 600)",
      work: "Adaptive Coreset Selection via Uncertainty-Density for Efficient Spam Detection",
      conference:
        "40th AAAI Conference on Artificial Intelligence (AAAI 2026), Singapore",
      posterImage: "/AAAI Conference.png",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Rohan Saha (B.S. student)",
      award:
        "Rohan - USD 1000 (AAAI-2026 Travel Scholarship Award), Full Conference Registration Grant (~USD 600)",
      work: "Bridging Machine Learning and Physics for Scalable Long-Term Building Temperature Prediction",
      conference:
        "40th AAAI Conference on Artificial Intelligence (AAAI 2026), Singapore",
      posterImage: "/AAAI Conference.png",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Avinash Kumar Sharma (M.Tech student)",
      award: "NeurIPS 2025 Scholar Award",
      work: "Are Binary Neural Networks Input Bit-Invariant? Optimizing Sensor-Model Systems with Mean Hassanat Distance, How Weight Pruning Destroys Chain-of-Thought Reasoning in Language Reasoning Models: A Model Similarity and Faithfulness Correlation Analysis,  Modeling Chain-of-Thought Collapse in Pruned Language Models: Fidelity and Similarity Analysis for Mathematical Reasoning",
      conference:
        "Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025), San Diego, USA",
      posterImage: "/neurpis-2025.jpeg",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Anushka Chaubey (M.Tech student)",
      award: "NeurIPS 2025 Scholar Award",
      work: "From National Goals to Industry Action: AI-Driven Forecasting of India’s Carbon Emissions",
      conference:
        "Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025), San Diego, USA",
      posterImage: "/neurpis-2025.jpeg",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Aisha Hamad Hassan (M.Tech Student)",
      award: "WiML@NeurIPS 2025 Travel Grant of USD $2,586.71",
      work: "Efficient Spam Detection with Sentence-BERT using Adaptive Uncertainty-Diversity Ranking Coresets",
      conference:
        "Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025), San Diego, California, USA",
      posterImage: "/neurips-2025.png",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Anushka Chaubey (M.Tech Student)",
      award: "WiML@NeurIPS 2025 Travel Grant of USD $1423.93",
      work: "From National Goals to Industry Action: AI-Driven Forecasting of India’s Carbon Emissions",
      conference:
        "Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025), San Diego, California, USA",
      posterImage: "/neurips-2025.png",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Shivam Bhardwaj (M.Tech Student)",
      award:
        "ICCV 2025 Broadening Participation Travel Grant of $900 and $675 IEEE/CVF Student Registration Grant!",
      work: "Adaptive Compression of Large Vision Models for Efficient Image Quality Assessment of AI-Generated Content",
      conference:
        "IEEE/CVF International Conference on Computer Vision (ICCV 2025), Honolulu, Hawaii, USA",
      posterImage: "/iccv-2025.png",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Nimalesh Elangovan (M.Tech Student)",
      award:
        "1st place - Winner's Prize of $500, Clinical Deployment, JournalPublication, Invited at MICCAI 2026, Scholarship Opportunity",
      work: "(PRECISE)-Abreast Ultrasound Segmentation and Classification Challenge (PACE-2025)",
      conference: "Precision Cancer Care in Africa",
      posterImage: "/pace-2025.png",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student:
        "Rohan Saha (B.S. student) and Aisha Hamad Hassan (M.Tech student)",
      award:
        "Silver in Retweet Network Link Prediction and Bronze in Bursty Event Cascade Classification",
      work: "Silver in Retweet Network Link Prediction: This task focused on predicting the likelihood of future retweet links in large-scale social network graphs. Bronze in Bursty Event Cascade Classification: This task aimed to classify and detect bursty information cascades, i.e., sudden spikes of activity around emerging events in social networks.",
      conference:
        "34th International Joint Conference on Artificial Intelligence (IJCAI) 2025, Montreal, Canada",
      posterImage: "/ijcai-2025.png",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Rohan Saha",
      award: "2nd Price - $500",
      work: "Building Temperature Prediction for Smart HVAC Control: A Multi-Stage Learning Framework",
      conference:
        "International Conference on Machine Learning (ICML 2025), Vancouver, Canada",
      posterImage: "/award-4.jpg",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Shivaanee Eswaran",
      award:
        "Women in Computer Vision Workshop (WiCV) at CVPR 2025 travel grant award",
      work: "Uncertainty-guided Style-aware Perceptual Quality Assessment for AI-Generated Images",
      conference:
        "Conference on Computer Vision and Pattern Recognition (CVPR 2025), USA",
      posterImage: "/award-1.jpg",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Ahmed Silima Vuai",
      award: "€1500 travel grant award",
      work: "Efficient Land-Cover Image Classification via Mixed Bit-Precision Quantization",
      conference:
        "Workshop on Machine Learning for Remote Sensing, International Conference on Learning Representations (ICLR 2025), Singapore",
      posterImage: "/award-2.jpg",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Ahmed Silima Vuai and Shivam Bhardwaj",
      award: "Crossed French Mobility Program 2024",
      work: "Fully funded research stays for one semester at Grenoble INP, France, and Université de Nantes, Polytech Nantes, France",
      conference: "French Embassy in Tanzania",
      // posterImage: "/placeholder-1.png",
    },
    {
      mentor: "Dr. Tushar Shinde",
      student: "Vikalp, Shivam, Patrick, and Madhusudan",
      award: "3rd place in VRD Intelligence and Understanding Leaderboard",
      work: "VRD Layout Analysis and Structure Parsing competition",
      conference:
        "39th Annual AAAI Conference on Artificial Intelligence (AAAI 2025), Philadelphia, USA",
      // posterImage: "/placeholder-1.png",
    },
  ],
};
