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
        // posterImage: "/placeholder-1.png",
        publications: [
          {
            year: 2025,
            title: "Rectifying the extremely weakened signals for cassava leaf disease detection",
            venue: "Computers and Electronics in Agriculture, Volume 232",
            type: "Journal",
            description:
              "Developed an artificial intelligence approach to accurately detect cassava leaf diseases by enhancing weak signal patterns in agricultural imaging.",
          },
        ],
      },
      {
        name: "Dr. Manoj Kumar",
        posterImage: "/research-2.jpg",
        publications: [
          {
            year: 2025,
            title:
              "Mathematical analysis and optimal control of age-structured social interaction model with law enforcement",
            venue: "Mathematical Methods in the Applied Sciences, Volume 48, Issue 3",
            type: "Journal",
            description:
              "Investigated the dynamics of social systems influenced by age groups and law enforcement through mathematical modeling.",
          },
          {
            year: 2025,
            title: "Small but Mighty: Unlocking Financial Sentiment Analysis with Compact Language Models",
            venue:
              "Workshop on Advances in Financial Artificial Intelligence, International Conference on Learning Representations, Singapore",
            type: "Conference",
            description:
              "Proposed the use of compact natural language models for efficient financial sentiment analysis in resource-constrained environments.",
          },
          {
            year: 2024,
            title: "Optimal control in a social interaction model with law enforcement",
            venue: "Control Conference Africa, Mauritius",
            type: "Conference",
            description:
              "Modeled how law enforcement interventions affect social behavior and optimal response strategies.",
          },
          {
            year: 2024,
            title: "Analysis of a mathematical model for malaria using data-driven approach",
            venue: "14th American Institute of Mathematical Sciences Conference, New York University Abu Dhabi",
            type: "Invited Talk",
            description: "Demonstrated how data enhances predictive models for disease spread and control measures.",
          },
        ],
      },
      {
        name: "Dr. Tushar Shinde",
        posterImage: "/research-3.jpg",
        publications: [
          {
            year: 2025,
            title:
              "An efficient and scalable framework for lightweight crop disease recognition in low-resource settings",
            venue:
              "Workshop on Agriculture-Vision, IEEE/CVF Conference on Computer Vision and Pattern Recognition, Nashville",
            type: "Conference",
            description:
              "Introduced a computer vision model for accurate crop disease identification suitable for rural and low-infrastructure regions.",
          },
          {
            year: 2025,
            title: "Multiple papers on visual quality assessment and generative image models",
            venue: "Workshops on Women in Computer Vision and Generative Models, IEEE/CVF Conference",
            type: "Conference",
            description:
              "Focused on evaluating and improving visual quality in AI-generated images using efficient vision transformers.",
          },
          {
            year: 2025,
            title: "Remote sensing and maritime applications using compressed neural networks",
            venue: "IEEE/CVF Winter Conference on Applications of Computer Vision, Arizona",
            type: "Conference",
            description:
              "Designed compressed and quantized models for land cover and maritime image classification in Earth observation.",
          },
          {
            year: 2025,
            title: "Model compression for edge deployment and surveillance systems",
            venue: "International Conference on Digital Signal Processing, Greece",
            type: "Conference",
            description:
              "Proposed optimal model pruning and resolution scaling techniques for energy-efficient deployments in remote sensing.",
          },
          {
            year: 2025,
            title: "EdgeHeart: Real-time detection of cardiac conduction disorders on edge devices",
            venue: "50th IEEE International Conference on Acoustics, Speech, and Signal Processing, Hyderabad",
            type: "Conference",
            description:
              "Demonstrated a real-time medical diagnosis tool for cardiac disorders deployable on mobile or wearable devices.",
          },
          {
            year: 2024,
            title: "Adaptive quantization of deep neural networks via layer importance estimation",
            venue: "International Conference on Computer Vision and Image Processing, Chennai",
            type: "Conference",
            description:
              "Proposed intelligent quantization techniques for optimizing deep learning model size without losing accuracy.",
          },
          {
            year: 2024,
            title: "Efficient motion search for surveillance video coding",
            venue: "International Conference on Image Processing Theory, Tools and Applications, Morocco",
            type: "Conference",
            description:
              "Introduced a novel motion estimation technique to compress surveillance video data efficiently.",
          },
          {
            year: 2024,
            title: "Speech emotion recognition using quantized neural networks",
            venue: "38th Annual Conference on Neural Information Processing Systems, Canada",
            type: "Conference",
            description:
              "Built compact emotion recognition systems for speech analysis using adaptive layer quantization.",
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
            venue: "13th IEEE International Conference on Healthcare Informatics, Italy",
            type: "Conference",
            description:
              "Combined EEG and EOG modalities with machine learning for better sleep disorder classification.",
          },
          {
            year: 2025,
            title: "Seizure detection from EEG signals using autoencoder-classifier model",
            venue: "25th International Conference on Digital Signal Processing, Greece",
            type: "Conference",
            description:
              "Designed a deep learning approach that uses signal transformation for early seizure detection in clinical settings.",
          },
          {
            year: 2024,
            title: "Modality-specific feature selection for improved sleep staging",
            venue: "IEEE Journal of Biomedical and Health Informatics, Volume 28, Issue 2",
            type: "Journal",
            description:
              "Enhanced sleep stage classification by selecting relevant EEG and EOG features and improving temporal awareness.",
          },
          {
            year: 2024,
            title: "Classification of insomnia using sleep microstructure patterns",
            venue:
              "46th Annual International Conference of the IEEE Engineering in Medicine and Biology Society, Florida",
            type: "Conference",
            description: "Explored the role of cyclic alternating patterns in identifying insomnia-related disruptions.",
          },
          {
            year: 2024,
            title: "Effective diagnosis of various sleep disorders using LEE classifier: LightGBM-EOG",
            venue: "IEEE Journal of Biomedical and Health Informatics, Volume 29, Issue 4",
            type: "Journal",
            description:
              "Introduced a novel LightGBM-based classifier utilizing EOG signals to achieve efficient and interpretable diagnostics for a range of sleep disorders.",
          },
          {
            year: 2024,
            title:
              "Modality-specific feature selection, data augmentation, and temporal context for improved sleep staging",
            venue: "IEEE Journal of Biomedical and Health Informatics, Volume 28, Issue 2",
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
        student: "Shivaanee Eswaran",
        award: "Women in Computer Vision Workshop (WiCV) at CVPR 2025 travel grant award",
        work: "Uncertainty-guided Style-aware Perceptual Quality Assessment for AI-Generated Images",
        conference: "Conference on Computer Vision and Pattern Recognition (CVPR 2025), USA",
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
        conference: "39th Annual AAAI Conference on Artificial Intelligence (AAAI 2025), Philadelphia, USA",
        // posterImage: "/placeholder-1.png",
      },
    ],
  };