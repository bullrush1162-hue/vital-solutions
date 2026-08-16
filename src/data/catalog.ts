import sv300 from "@/assets/sv300.jpg.asset.json";
import sv300Neonatal from "@/assets/sv300-neonatal.jpg.asset.json";
import umec from "@/assets/umec.jpg.asset.json";
import epm from "@/assets/epm.jpg.asset.json";
import benevision from "@/assets/benevision.jpg.asset.json";
import r700 from "@/assets/r700.jpg.asset.json";
import r300 from "@/assets/r300.jpg.asset.json";
import umed20 from "@/assets/umed20.jpg.asset.json";
import benefusionUsp from "@/assets/benefusion-usp.jpg.asset.json";
import benefusionUvp from "@/assets/benefusion-uvp.jpg.asset.json";
import a1 from "@/assets/a1.jpg.asset.json";
import a1Compact from "@/assets/a1-compact.jpg.asset.json";
import a1Pendant from "@/assets/a1-pendant.jpg.asset.json";
import a1Wall from "@/assets/a1-wall.jpg.asset.json";
import a3 from "@/assets/a3.jpg.asset.json";
import v60 from "@/assets/v60.jpg.asset.json";
import hybase from "@/assets/hybase.jpg.asset.json";
import hyled from "@/assets/hyled.jpg.asset.json";
import nws101 from "@/assets/nws101.jpg.asset.json";
import cic101 from "@/assets/cic101.jpg.asset.json";
import brilliance from "@/assets/brilliance.jpg.asset.json";
import phototherapyRange from "@/assets/phototherapy-range.jpg.asset.json";
import dt100 from "@/assets/dt100.jpg.asset.json";
import shalyaEasy from "@/assets/shalya-easy.jpg.asset.json";
import shalyaSigma from "@/assets/shalya-sigma.jpg.asset.json";
import shalyaSigmaV from "@/assets/shalya-sigma-v.jpg.asset.json";
import shalyaVista from "@/assets/shalya-vista.jpg.asset.json";
import l8n from "@/assets/l8n.jpg.asset.json";
import bubbleCpap from "@/assets/bubble-cpap.jpg.asset.json";
import accessoriesImg from "@/assets/accessories.jpg.asset.json";
import logoMindray from "@/assets/logo-mindray.jpg.asset.json";
import logoPhoenix from "@/assets/logo-phoenix.jpg.asset.json";
import logoShalya from "@/assets/logo-shalya.jpg.asset.json";

export type CategorySlug =
  | "critical-care"
  | "operating-room"
  | "neonatal-care"
  | "electrosurgery"
  | "hospital-accessories";

export type BrandSlug = "mindray" | "phoenix" | "shalya" | "jd-healthcares";

export type Product = {
  slug: string;
  name: string;
  type: string;
  brand: BrandSlug;
  category: CategorySlug;
  tagline: string;
  summary: string;
  features: string[];
  variants?: string[];
  image: string;
  gallery?: { src: string; caption: string }[];
  featured?: boolean;
};

export const categories: {
  slug: CategorySlug;
  name: string;
  blurb: string;
  image: string;
}[] = [
  {
    slug: "critical-care",
    name: "Critical Care",
    blurb:
      "ICU ventilators, patient monitors, ECG machines, defibrillators and infusion systems for intensive and emergency care.",
    image: umec.url,
  },
  {
    slug: "operating-room",
    name: "Operating Room",
    blurb:
      "Anaesthesia workstations, vaporisers, surgical tables and LED surgical lighting for the modern OT complex.",
    image: a1.url,
  },
  {
    slug: "neonatal-care",
    name: "Neonatal & Maternal Care",
    blurb:
      "Radiant warmers, phototherapy, bubble CPAP, fetal monitoring and delivery tables for NICU and labour rooms.",
    image: cic101.url,
  },
  {
    slug: "electrosurgery",
    name: "Electrosurgery",
    blurb:
      "Shalya electrosurgical generators from 300W cautery to advanced vessel sealing and RF scalpel platforms.",
    image: shalyaVista.url,
  },
  {
    slug: "hospital-accessories",
    name: "Hospital Accessories & Furniture",
    blurb:
      "Sensors, cables, cuffs, circuits, cautery accessories and a full hospital furniture range, ready when you need it.",
    image: accessoriesImg.url,
  },
];

export const brands: {
  slug: BrandSlug;
  name: string;
  role: string;
  blurb: string;
  logo?: string;
}[] = [
  {
    slug: "mindray",
    name: "Mindray",
    role: "Authorised Dealer",
    blurb:
      "Global leader in patient monitoring, life support and medical imaging. JD Healthcares is an authorised Mindray dealer for critical care and operating room solutions across Rajasthan.",
    logo: logoMindray.url,
  },
  {
    slug: "phoenix",
    name: "Phoenix Medical Systems",
    role: "Channel Partner",
    blurb:
      "Neonatal and maternal care specialists — infant radiant warmers, phototherapy systems and delivery tables trusted by NICUs across India.",
    logo: logoPhoenix.url,
  },
  {
    slug: "shalya",
    name: "Shalya",
    role: "Channel Partner",
    blurb:
      "Electrosurgical generators engineered for surgical precision, from the Easy series to the advanced Vista vessel-sealing platform.",
    logo: logoShalya.url,
  },
  {
    slug: "jd-healthcares",
    name: "JD Healthcares",
    role: "In-house Range",
    blurb:
      "Our own line of fetal/maternal monitoring, bubble CPAP and hospital accessories, backed by direct service and spares support.",
  },
];

export const products: Product[] = [
  {
    slug: "mindray-sv300",
    name: "Mindray SV 300",
    type: "Ventilator (Infant – Adult)",
    brand: "mindray",
    category: "critical-care",
    tagline: "Compact yet powerful ventilation for critical care.",
    summary:
      "The SV300 is a turbine-based ICU ventilator designed to deliver advanced performance with ease of use. From invasive to non-invasive ventilation, it adapts to every critical care need.",
    features: [
      "TV setting 20–1500 ml",
      "FiO₂ (oxygen sensor)",
      "3 waveforms and spirometry",
      "Battery backup up to 120 minutes",
      "Modes: VC-A/C, PC-A/C, SIMV-VC, SIMV-PC, CPAP/PSV, Duo Level, APRV, PRVC, PRVC-SIMV, NIV",
      "Special procedures: SIGH, PEEPi, RSBI, suction, occlusion pressure, WOB, NIF",
      "Integrated nebuliser",
    ],
    image: sv300.url,
    featured: true,
  },
  {
    slug: "mindray-sv300-neonatal",
    name: "Mindray SV 300 (Neonatal)",
    type: "Neonatal Ventilator",
    brand: "mindray",
    category: "critical-care",
    tagline: "All intelligence leads to ease.",
    summary:
      "The SV300 Neonatal brings intelligence to critical care — designed to support every breath with precision, synchronisation and advanced monitoring.",
    features: [
      "12.1-inch touch screen",
      "TV setting 2–1500 ml",
      "FiO₂ (oxygen sensor), 3 waveforms, spirometry",
      "Battery backup up to 120 minutes",
      "Modes: V-AC, P-AC, V-SIMV, P-SIMV, DuoLevel, APRV, PRVC, PRVC-SIMV, NIV, apnea ventilation",
      "nCPAP support",
      "Thermal-chip flow sensor: 0.05–33 L/min, dead space < 1 ml, accuracy 3% of reading",
    ],
    image: sv300Neonatal.url,
    gallery: [{ src: accessoriesImg.url, caption: "Thermal chip flow sensor and cable" }],
  },
  {
    slug: "mindray-umec-series",
    name: "Mindray uMEC 100/120/150",
    type: "Patient Monitor",
    brand: "mindray",
    category: "critical-care",
    tagline: "Reliable monitoring. Better clinical decisions.",
    summary:
      "uMEC series monitors deliver accurate, stable and continuous monitoring of vital parameters with an intuitive interface and robust performance.",
    features: [
      "10.1\" / 12.1\" / 15.6\" high-resolution capacitive touch display",
      "Multi-touch screen with gesture support",
      "ECG, SpO₂, NIBP, respiration and temperature in one portable unit",
      "Up to 12 waveforms",
      "EWS monitoring, GCS and 24-hour ECG summary",
      "ST, QT and arrhythmia analysis, ST graphics, QTc",
      "OXY-CRG software, 2 GB internal storage, central station connectivity",
    ],
    image: umec.url,
    featured: true,
  },
  {
    slug: "mindray-epm-series",
    name: "Mindray ePM 10M/12M/15M",
    type: "Modular Patient Monitor",
    brand: "mindray",
    category: "critical-care",
    tagline: "Modular by design. Powerful by performance.",
    summary:
      "The ePM series delivers premium monitoring performance with intuitive operation, clinical intelligence and seamless connectivity.",
    features: [
      "HD multi-touch 10.1\", 12.1\" or 15.6\" capacitive display",
      "Clinical Assistive Applications: EWS, ST Graphic™, GCS, 24-hour ECG summary",
      "CrozFusion™ intelligent alarm technology reduces false arrhythmia alarms",
      "Stores 2400 hours of trends, 48 hours full disclosure, 3000 NIBP records, 2000 events",
      "Compatible with 49 leading disinfectants",
      "ECG, SpO₂, NIBP, temperature, IBP, EtCO₂, cardiac output and optional AG monitoring",
    ],
    image: epm.url,
  },
  {
    slug: "mindray-benevision-n-series",
    name: "Mindray BeneVision N-Series",
    type: "Advanced Modular Patient Monitor",
    brand: "mindray",
    category: "critical-care",
    tagline: "Advanced modular monitoring for high-acuity units.",
    summary:
      "The BeneVision N-Series scales from step-down units to high-acuity ICUs with modular parameters, large high-definition displays and hospital-wide connectivity.",
    features: [
      "Modular parameter platform across the N-series range",
      "Large high-resolution touch displays",
      "Continuous patient data across transport and departments",
      "Central station and HIS connectivity",
    ],
    image: benevision.url,
  },
  {
    slug: "mindray-beneheart-r700",
    name: "Mindray BeneHeart R700",
    type: "ECG Machine",
    brand: "mindray",
    category: "critical-care",
    tagline: "Fast, accurate and connected ECG.",
    summary:
      "12-lead ECG with advanced analysis, a large display and seamless connectivity for efficient diagnosis and better patient care.",
    features: [
      "12-inch high-resolution capacitive touch display",
      "Visual electrode status indicator",
      "Pacing marker channel",
      "Glasgow algorithm",
      "Abnormal heart beat capture",
      "ST analysis tools",
      "A4 size thermal recorder",
    ],
    image: r700.url,
  },
  {
    slug: "mindray-beneheart-r300",
    name: "Mindray BeneHeart R300",
    type: "3-Channel ECG Machine",
    brand: "mindray",
    category: "critical-care",
    tagline: "Dependable routine ECG for every OPD and ward.",
    summary:
      "A compact 3-channel ECG machine for routine diagnostics, combining clear reporting with simple day-to-day operation.",
    features: [
      "3-channel ECG recording",
      "Compact keypad-driven operation",
      "Built-in thermal printer",
      "Suited to OPD, ward and pre-anaesthesia checks",
    ],
    image: r300.url,
  },
  {
    slug: "mindray-umed-20",
    name: "Mindray uMED 20",
    type: "Defibrillator Monitor",
    brand: "mindray",
    category: "critical-care",
    tagline: "Fast. Reliable. Ready to save lives.",
    summary:
      "A compact and rugged defibrillator monitor designed for quick response in critical situations. Simple to use, powerful to perform.",
    features: [
      "Intelligent ResQNavi™ guidance",
      "360 J biphasic defibrillation",
      "Ultra-fast shock delivery (< 3 seconds)",
      "Simple 1-2-3 emergency operation",
      "Rugged IP44 and 0.75 m drop hospital-grade design",
      "Automatic self-test and easy maintenance",
      "Defibrillator + ECG monitor + AED + pacer in one device",
    ],
    image: umed20.url,
    featured: true,
  },
  {
    slug: "mindray-benefusion-usp-uvp",
    name: "Mindray BeneFusion uSP / uVP",
    type: "Infusion System",
    brand: "mindray",
    category: "critical-care",
    tagline: "Precision infusion. Complete safety.",
    summary:
      "Designed to deliver accurate drug administration with intelligent safety technologies and seamless connectivity.",
    features: [
      "±1.8% high precision infusion",
      "BolusGUARD™ safety technology",
      "Smart Accurate™ calibration",
      "3.5\" HD touchscreen display",
      "Intelligent drug library (5,000 drugs)",
      "Central monitoring and HIS connectivity",
      "IP44 rugged and transfer ready",
    ],
    image: benefusionUsp.url,
    gallery: [{ src: benefusionUvp.url, caption: "BeneFusion uVP volumetric pump" }],
  },
  {
    slug: "mindray-a1-anaesthesia",
    name: "Mindray A1 Standard",
    type: "Anaesthesia System",
    brand: "mindray",
    category: "operating-room",
    tagline: "Flexibility with finesse.",
    summary:
      "The A1 Anesthesia System adapts to diverse clinical environments — from central operating rooms to NORA — with advanced ventilation, precise monitoring and intelligent workflow.",
    features: [
      "12.1-inch capacitive touch screen with integrated ventilator",
      "TV setting 10–1500 ml in VCV, 5–1500 ml in PCV",
      "VCV, PCV, SIMV-VC*, SIMV-PC* and PS* modes",
      "Spirometry (loop monitoring*), ACGO outlet",
      "Cascaded dual O₂, N₂O and Air with auxiliary O₂ flow meter (max 15 L/min)",
      "Integrated heated breathing circuit and passive AGSS",
      "Battery backup 120 minutes, 10 customised profiles, 2 drawers",
    ],
    variants: ["Standard", "Compact", "Pendant", "Wall-mounted"],
    image: a1.url,
    gallery: [
      { src: a1Compact.url, caption: "Compact version" },
      { src: a1Pendant.url, caption: "Pendant version" },
      { src: a1Wall.url, caption: "Wall-mounted version" },
    ],
    featured: true,
  },
  {
    slug: "mindray-a3-anaesthesia",
    name: "Mindray A3 Standard",
    type: "Anaesthesia System",
    brand: "mindray",
    category: "operating-room",
    tagline: "Powerful. Intelligent. Designed for every scenario.",
    summary:
      "The A3 Anesthesia System delivers precise anaesthesia care with advanced ventilation, intelligent safety features and an ergonomic design.",
    features: [
      "12.1\" HD large capacitive touchscreen",
      "VCV, PCV, SIMV, PS, CPAP/PS and manual modes with electronic PEEP",
      "PnP multi-gas module (EtCO₂, AGM)",
      "Heated integrated breathing system maintained at ~35 °C",
      "Auto leak test, O₂ ratio controller, N₂O cutoff and low O₂ pressure alarm",
      "Ergonomic workspace with easy maintenance",
      "Internal battery backup up to 150 minutes",
    ],
    image: a3.url,
  },
  {
    slug: "mindray-v60-vaporizer",
    name: "Mindray V60 Vaporizer",
    type: "Anaesthetic Vaporiser",
    brand: "mindray",
    category: "operating-room",
    tagline: "Consistent concentration. Complete confidence.",
    summary:
      "The V60 delivers precise anaesthetic agent output with advanced compensation technology and a maintenance-free design built for reliability and safety.",
    features: [
      "Automated compensation for flow, temperature and pressure",
      "Larger capacity up to 360 ml (dry wick)",
      "Maintenance free — no calibration required",
      "Universal Selectatec mounting compatibility",
      "Integrated bypass technology and first-class materials",
    ],
    variants: ["Isoflurane", "Sevoflurane", "Halothane", "Enflurane"],
    image: v60.url,
  },
  {
    slug: "mindray-hybase-v3",
    name: "Mindray HyBase V3",
    type: "Surgical Operating Table",
    brand: "mindray",
    category: "operating-room",
    tagline: "Practical functionality, flexible versatility, high reliability.",
    summary:
      "Engineered for increasingly complex surgical scenes, HyBase V3 needs the least effort and time to position the patient safely, comfortably and efficiently.",
    features: [
      "300 mm longitudinal slide",
      "230 kg high load capacity",
      "One-touch Flex, Reflex, Zero Position and Return-to-Level",
      "Radiolucent tabletop",
      "Electro-hydraulic control via hand remote, backup panel and foot switch",
      "75 mm SFC comfort mattress",
      "Multi-specialty surgical platform",
    ],
    image: hybase.url,
  },
  {
    slug: "mindray-hyled-series",
    name: "Mindray HyLED C8/C7/C5",
    type: "LED Surgical Lighting System",
    brand: "mindray",
    category: "operating-room",
    tagline: "See widely, move freely.",
    summary:
      "HyLED series delivers superior illumination with advanced optic technology, wide lighting performance and intelligent control.",
    features: [
      "MPS™ multi-path superposition shadow management",
      "Adjustable colour temperature 3,500K–5,100K",
      "M-Field™ MIS illumination — 60 cm field, up to 3,000 lux ambient",
      "Sterile multi-function handle control",
      "Flexible modular design for camera and monitor integration",
      "THERMO™ heat management for stable illumination",
      "IP55 protection with antibacterial surfaces",
    ],
    image: hyled.url,
    featured: true,
  },
  {
    slug: "phoenix-nws-101",
    name: "Phoenix NWS 101",
    type: "Infant Radiant Warmer",
    brand: "phoenix",
    category: "neonatal-care",
    tagline: "Every degree of care matters.",
    summary:
      "An economic and easy-to-use basic warmer for infants suffering from severe heat loss.",
    features: [
      "Even spread of warmth using a quartz heater and parabolic reflector",
      "Heater unit swivels for non-intrusive radiography",
      "Manual and servo-controlled modes",
      "Dazzle-free overhead observation light",
      "Bright LED display with membrane keypad",
      "Foldable side panels and storage trays",
      "Removable X-ray sheet* and Apgar timer*",
    ],
    variants: ["NWS 101 with bassinet", "NWS 101 without bassinet"],
    image: nws101.url,
  },
  {
    slug: "phoenix-cic-101",
    name: "Phoenix CIC 101",
    type: "Infant Radiant Warmer",
    brand: "phoenix",
    category: "neonatal-care",
    tagline: "Consistent warmth. Confident care.",
    summary:
      "A fully integrated and highly versatile warmer that caters to basic through critical requirements of neonatal care.",
    features: [
      "Quartz heater with parabolic reflector for even warmth",
      "Manual and servo-controlled modes with dual temperature monitoring",
      "Electronically blended nCPAP / resuscitator module and inbuilt suction",
      "7-inch TFT graphical LCD with 7-day data trend",
      "Oval-shaped tilting and rotating bed for quick access",
      "Pull-down acrylic side panels and removable X-ray sheet",
      "Masimo pulse oximeter*, integrated weighing scale*, foot-operated height adjustment*",
    ],
    image: cic101.url,
    featured: true,
  },
  {
    slug: "phoenix-brilliance-pro",
    name: "Phoenix Brilliance Pro",
    type: "LED Phototherapy Unit",
    brand: "phoenix",
    category: "neonatal-care",
    tagline: "Maximum coverage. Better outcomes.",
    summary:
      "Brilliance Pro top/bottom phototherapy is designed to deliver uniform, intensive blue light therapy for effective treatment of neonatal hyperbilirubinemia.",
    features: [
      "Top and bottom intensive blue LED therapy",
      "Uniform irradiance across the treatment surface",
      "Smart, safe and versatile NICU-ready design",
      "Long-life LEDs with low heat generation",
      "Also available: DSPT Brilliance, BAS 100 and BAS 101",
    ],
    image: brilliance.url,
    gallery: [{ src: phototherapyRange.url, caption: "DSPT Brilliance, BAS 100 and BAS 101" }],
  },
  {
    slug: "phoenix-dt-100",
    name: "Phoenix DT 100",
    type: "Obs/Gyn Delivery Table",
    brand: "phoenix",
    category: "neonatal-care",
    tagline: "Comfort for patients. Confidence for clinicians.",
    summary:
      "A highly versatile delivery bed offering the convenience of any birthing position, designed to allow easy intervention during emergencies.",
    features: [
      "Height adjustable from 16 inches to 43 inches above the ground",
      "Back rest / seat orientation supports three major birthing positions",
      "Detachable U-cut seat, calf support, leg rest and side rails",
      "Easy-to-clean catch basin, firm hand grips and arm rests",
      "Foot-operated height and back rest controls",
      "170 kg weight-bearing capacity with squat bar",
      "Emergency CPR positioning*, battery backup up to 50 movements*",
    ],
    image: dt100.url,
  },
  {
    slug: "shalya-easy-series",
    name: "Shalya Easy Series",
    type: "Electrosurgical / Cautery Machine",
    brand: "shalya",
    category: "electrosurgery",
    tagline: "Precision in every cut. Confidence in every procedure.",
    summary:
      "A dependable 300W electrosurgical generator for day-to-day surgical workloads, with tissue feedback and simple controls.",
    features: [
      "300W ESU",
      "6SENSE™ tissue feedback system",
      "7-segment display",
      "Randomised spray coagulation and self diagnosis",
      "Bi-Coag alarm",
      "10 user-settable programs",
    ],
    variants: ["LX", "Easy+"],
    image: shalyaEasy.url,
  },
  {
    slug: "shalya-sigma-series",
    name: "Shalya Sigma Series",
    type: "Electrosurgical / Cautery Machine",
    brand: "shalya",
    category: "electrosurgery",
    tagline: "Engineered for surgical precision.",
    summary:
      "A 400W touchscreen electrosurgical platform with bipolar cut and coagulation for demanding operating rooms.",
    features: [
      "400W ESU",
      "6 SENSE™ tissue feedback system",
      "Touch screen display",
      "Randomised spray coagulation and self diagnosis",
      "Bi-Coag alarm",
      "Bipolar cut and bipolar coag",
      "Self-illuminating socket",
    ],
    variants: ["Sigma 200", "Sigma 300", "Sigma 400", "Sigma 400+"],
    image: shalyaSigma.url,
  },
  {
    slug: "shalya-sigma-v",
    name: "Shalya Sigma +V",
    type: "Electrosurgical / Vessel Sealing",
    brand: "shalya",
    category: "electrosurgery",
    tagline: "Confidence in every cut.",
    summary:
      "Sigma +V adds tissue-feedback vessel sealing to the Sigma platform, sealing vessels up to 7 mm with a wireless footswitch option.",
    features: [
      "400W ESU",
      "Tissue feedback vessel sealing system, seal up to 7 mm vessels",
      "Touch screen display",
      "Randomised spray coagulation and self diagnosis",
      "Wireless footswitch with toggle button",
    ],
    image: shalyaSigmaV.url,
  },
  {
    slug: "shalya-vista-series",
    name: "Shalya Vista Series",
    type: "Advanced Electrosurgical Platform",
    brand: "shalya",
    category: "electrosurgery",
    tagline: "Advanced energy. Precise results.",
    summary:
      "The Vista series is Shalya's flagship energy platform, combining vessel sealing, saline plasma bipolar resection and RF scalpel technology.",
    features: [
      "400W ESU",
      "6 Sense tissue feedback system",
      "Touch screen display with 100 user-settable programs",
      "Tissue feedback vessel sealing, seal up to 7 mm vessels",
      "Saline plasma bipolar resection",
      "RF scalpel technology",
      "Reusable attachment for the vessel sealer system",
    ],
    variants: ["Vista E", "E+", "SE", "VERF", "VERF+", "VSERF", "VSERF+"],
    image: shalyaVista.url,
    featured: true,
  },
  {
    slug: "jd-l8n-fetal-monitor",
    name: "JD L8N",
    type: "Fetal / Maternal Monitor",
    brand: "jd-healthcares",
    category: "neonatal-care",
    tagline: "Every beat. Every moment. Monitored.",
    summary:
      "Reliable performance, accurate monitoring and intelligent analysis for safer maternal and fetal care.",
    features: [
      "7\" / 10.1\" TFT display, 90-degree foldable",
      "Built-in 110 mm thermal printer with long-time data storage and printout",
      "Super sensitive probe, FHR working frequency 1.0 MHz",
      "DSP technology for real-time FHR identification and measurement",
      "Automatic fetal movement detection and accounting",
      "CTG scoring: Krebs score / Fischer score",
      "TOCO range 0–100 units, transducer strength < 5 mW/cm²",
      "Option: twins FHR measurement, maternal SpO₂, PR, NIBP",
    ],
    image: l8n.url,
  },
  {
    slug: "jd-bubble-cpap",
    name: "Bubble CPAP System",
    type: "Neonatal Respiratory Care",
    brand: "jd-healthcares",
    category: "neonatal-care",
    tagline: "Gentle breaths. Stronger beginnings.",
    summary:
      "The Bubble CPAP System delivers reliable, non-invasive respiratory support for neonates with respiratory distress.",
    features: [
      "Gentle, continuous distending pressure for fragile lungs",
      "Simple bubble mechanism with stable pressure delivery",
      "Complete circuit, generator and interface support",
      "Cost-effective NICU respiratory support",
    ],
    image: bubbleCpap.url,
  },
  {
    slug: "hospital-accessories",
    name: "Hospital Accessories & Consumables",
    type: "Accessories",
    brand: "jd-healthcares",
    category: "hospital-accessories",
    tagline: "Everything your ward needs, ready when you need it.",
    summary:
      "A complete accessories and consumables range to keep your equipment running — plus a full hospital furniture catalogue on request.",
    features: [
      "SpO₂ sensors",
      "ECG cables 3/5/10 leads and ECG roll",
      "NIBP cuffs, all sizes",
      "IBP cables and connectors",
      "Cautery pencils and electrosurgery accessories",
      "Flow sensor / auto sensor",
      "Ventilator circuit, Bain circuit and Bi-PAP mask/circuit",
    ],
    image: accessoriesImg.url,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const productsByCategory = (slug: CategorySlug) =>
  products.filter((p) => p.category === slug);
export const productsByBrand = (slug: BrandSlug) => products.filter((p) => p.brand === slug);
export const featuredProducts = products.filter((p) => p.featured);
export const brandName = (slug: BrandSlug) => brands.find((b) => b.slug === slug)?.name ?? slug;
export const categoryName = (slug: CategorySlug) =>
  categories.find((c) => c.slug === slug)?.name ?? slug;
