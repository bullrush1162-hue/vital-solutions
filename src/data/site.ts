export const site = {
  name: "JD Healthcares (India) Pvt. Ltd.",
  shortName: "JD Healthcares",
  tagline: "Delivering Advanced Healthcare Solutions",
  intro:
    "JD Healthcare India Pvt. Ltd. is a trusted partner in delivering advanced medical equipment and healthcare solutions across Rajasthan since 2017.",
  address: {
    line1: "153, Opposite Mannat Apartment, Near Mertiya Garden",
    line2: "Pal Road, Jodhpur – 342001, Rajasthan",
  },
  phones: ["+91 9413147767", "+91 8302054903", "+91 7737849381"],
  customerCare: "+91 9784107767",
  email: "jdhealthcarejodhpur@gmail.com",
  whatsapp: "919413147767",
  director: {
    name: "Dinesh Kumawat",
    role: "Director",
    experience: "Experience since 2009 in the healthcare industry",
    quote:
      "Our journey is built on trust, strong relationships and a deep commitment to the healthcare community. We believe in delivering not just products, but reliable solutions that create better outcomes for patients.",
  },
  values: [
    {
      title: "Trust",
      body: "We build lasting relationships through honesty, reliability and responsible support.",
    },
    {
      title: "Innovation",
      body: "We bring advanced technology and solutions that help healthcare move forward.",
    },
    {
      title: "Commitment",
      body: "We are committed to quality, continuous support and long-term partnerships.",
    },
    {
      title: "Care",
      body: "We care for people, processes and outcomes to create a healthier tomorrow.",
    },
  ],
  whyChooseUs: [
    "Authorised Dealer – Mindray",
    "Experienced & Trained Team",
    "Reliable After-Sales Support",
    "Pan Rajasthan Presence",
    "Quality You Can Trust",
  ],
  services: [
    {
      title: "Sales & Consultation",
      body: "Application-led product selection for ICU, OT, NICU and labour rooms — matched to your case load, budget and infrastructure.",
    },
    {
      title: "Installation & Commissioning",
      body: "Site readiness checks, gas and electrical verification, on-site assembly, calibration and handover documentation.",
    },
    {
      title: "Clinical Training",
      body: "Hands-on training for doctors, nurses and biomedical staff, with refresher sessions whenever your team changes.",
    },
    {
      title: "Service & AMC/CMC",
      body: "Preventive maintenance schedules, breakdown response across Rajasthan, spares and consumables support.",
    },
  ],
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const mailtoLink = (subject: string, body: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const telLink = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;
