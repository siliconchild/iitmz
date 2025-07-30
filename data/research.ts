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
      posterImage: "/research-1.png",
      publications: [
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
      posterImage: "/research-5.jpg",
      publications: [
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
