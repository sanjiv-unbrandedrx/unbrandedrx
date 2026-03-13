// ---------------------------------------------------------------------------
// Master Question Definitions — consolidated from 8 v1 questionnaires
// ---------------------------------------------------------------------------

import type { Question, SectionMeta } from "./types";

// ── Section Metadata ──────────────────────────────────────────────────────

export const SECTIONS: SectionMeta[] = [
  { id: "basics", title: "Getting Started" },
  { id: "medical-history", title: "Medical History" },
  {
    id: "cardiovascular",
    title: "Cardiovascular Screening",
    showIf: {
      type: "or",
      conditions: [
        { type: "sectionActive", section: "cardiovascular" },
      ],
    },
  },
  {
    id: "ed-sexual-health",
    title: "Sexual Health",
    showIf: { type: "sectionActive", section: "ed-sexual-health" },
  },
  {
    id: "testosterone",
    title: "Energy & Hormones",
    showIf: { type: "sectionActive", section: "testosterone" },
  },
  {
    id: "hair-loss",
    title: "Hair Health",
    showIf: { type: "sectionActive", section: "hair-loss" },
  },
  {
    id: "peptides",
    title: "Wellness & Longevity",
    showIf: { type: "sectionActive", section: "peptides" },
  },
  {
    id: "mental-health",
    title: "Mental Health",
    showIf: { type: "sectionActive", section: "mental-health" },
  },
  { id: "review", title: "Review & Submit" },
];

// ── Questions ─────────────────────────────────────────────────────────────

export const QUESTIONS: Question[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 1: GETTING STARTED (welcome + goals + demographics)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: "welcome",
    section: "basics",
    type: "welcome",
    question: "Let's build your treatment plan",
    description:
      "This takes about 3 minutes. We'll ask about your health goals, medical history, and match you with the right treatments.",
    required: true,
  },
  {
    id: "goals",
    section: "basics",
    type: "multi",
    question: "What are your health goals?",
    description:
      "Select all that apply — this helps us personalize your visit.",
    options: [
      { label: "Energy & vitality", value: "energy" },
      { label: "Sexual performance", value: "sexual-performance" },
      { label: "Hair growth", value: "hair" },
      { label: "Muscle & strength", value: "muscle" },
      { label: "Weight management", value: "weight" },
      { label: "Sleep quality", value: "sleep" },
      { label: "Anti-aging & longevity", value: "longevity" },
      { label: "General wellness", value: "wellness" },
    ],
    required: true,
  },
  {
    id: "basics-sex",
    section: "basics",
    type: "single",
    question: "What sex were you assigned at birth?",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
    required: true,
  },
  {
    id: "basics-age",
    section: "basics",
    type: "single",
    question: "What is your age?",
    options: [
      { label: "18 or younger", value: "0-18" },
      { label: "19–30", value: "19-30" },
      { label: "31–45", value: "31-45" },
      { label: "46–60", value: "46-60" },
      { label: "61+", value: "61+" },
    ],
    required: true,
    triggers: [
      {
        condition: { type: "equals", questionId: "basics-age", value: "0-18" },
        action: {
          type: "disqualify",
          treatmentId: "__all__",
          reason:
            "We are unable to provide treatment to patients under 18. Please consult with your primary care physician.",
        },
      },
    ],
  },
  {
    id: "basics-pregnant",
    section: "basics",
    type: "yes-no",
    question: "Are you currently pregnant or breastfeeding?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
    showIf: { type: "equals", questionId: "basics-sex", value: "female" },
    triggers: [
      {
        condition: {
          type: "equals",
          questionId: "basics-pregnant",
          value: "yes",
        },
        action: {
          type: "disqualify",
          treatmentId: "__peptides__",
          reason:
            "Peptide treatments are not available during pregnancy or while breastfeeding.",
        },
      },
    ],
  },
  {
    id: "basics-state",
    section: "basics",
    type: "select",
    question: "What state do you live in?",
    options: [
      { label: "Alabama", value: "AL" },
      { label: "Alaska", value: "AK" },
      { label: "Arizona", value: "AZ" },
      { label: "Arkansas", value: "AR" },
      { label: "California", value: "CA" },
      { label: "Colorado", value: "CO" },
      { label: "Connecticut", value: "CT" },
      { label: "Delaware", value: "DE" },
      { label: "Florida", value: "FL" },
      { label: "Georgia", value: "GA" },
      { label: "Hawaii", value: "HI" },
      { label: "Idaho", value: "ID" },
      { label: "Illinois", value: "IL" },
      { label: "Indiana", value: "IN" },
      { label: "Iowa", value: "IA" },
      { label: "Kansas", value: "KS" },
      { label: "Kentucky", value: "KY" },
      { label: "Louisiana", value: "LA" },
      { label: "Maine", value: "ME" },
      { label: "Maryland", value: "MD" },
      { label: "Massachusetts", value: "MA" },
      { label: "Michigan", value: "MI" },
      { label: "Minnesota", value: "MN" },
      { label: "Mississippi", value: "MS" },
      { label: "Missouri", value: "MO" },
      { label: "Montana", value: "MT" },
      { label: "Nebraska", value: "NE" },
      { label: "Nevada", value: "NV" },
      { label: "New Hampshire", value: "NH" },
      { label: "New Jersey", value: "NJ" },
      { label: "New Mexico", value: "NM" },
      { label: "New York", value: "NY" },
      { label: "North Carolina", value: "NC" },
      { label: "North Dakota", value: "ND" },
      { label: "Ohio", value: "OH" },
      { label: "Oklahoma", value: "OK" },
      { label: "Oregon", value: "OR" },
      { label: "Pennsylvania", value: "PA" },
      { label: "Rhode Island", value: "RI" },
      { label: "South Carolina", value: "SC" },
      { label: "South Dakota", value: "SD" },
      { label: "Tennessee", value: "TN" },
      { label: "Texas", value: "TX" },
      { label: "Utah", value: "UT" },
      { label: "Vermont", value: "VT" },
      { label: "Virginia", value: "VA" },
      { label: "Washington", value: "WA" },
      { label: "West Virginia", value: "WV" },
      { label: "Wisconsin", value: "WI" },
      { label: "Wyoming", value: "WY" },
      { label: "District of Columbia", value: "DC" },
    ],
    required: true,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 3: GENERAL MEDICAL HISTORY
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: "med-medications",
    section: "medical-history",
    type: "yes-no",
    question:
      "Are you currently taking any medications, vitamins, or dietary supplements?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No, I don't take anything", value: "no" },
    ],
    required: true,
    followUp: {
      condition: {
        type: "equals",
        questionId: "med-medications",
        value: "yes",
      },
      prompt:
        "Please list all medications, vitamins, and supplements including dosage and reason.",
    },
  },
  {
    id: "med-allergies",
    section: "medical-history",
    type: "yes-no",
    question:
      "Do you have any allergies or sensitivities to any food, dyes, medicines, herbs, vitamins, or supplements?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "Not that I am aware of", value: "no" },
    ],
    required: true,
    followUp: {
      condition: {
        type: "equals",
        questionId: "med-allergies",
        value: "yes",
      },
      prompt: "Please list your allergies.",
    },
  },
  {
    id: "med-conditions",
    section: "medical-history",
    type: "yes-no",
    question: "Do you have any medical conditions?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
    followUp: {
      condition: {
        type: "equals",
        questionId: "med-conditions",
        value: "yes",
      },
      prompt: "Please list your medical conditions.",
    },
  },
  {
    id: "med-surgeries",
    section: "medical-history",
    type: "yes-no",
    question: "Have you had any surgeries?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
    followUp: {
      condition: {
        type: "equals",
        questionId: "med-surgeries",
        value: "yes",
      },
      prompt: "Please list your surgeries.",
    },
  },
  {
    id: "med-physical-exam",
    section: "medical-history",
    type: "single",
    question:
      "When was the last time you had an in-person medical evaluation, including lab tests?",
    options: [
      { label: "Less than 1 year ago", value: "less-1yr" },
      { label: "1–2 years ago", value: "1-2yr" },
      { label: "More than 2 years ago", value: "more-2yr" },
    ],
    required: true,
    triggers: [
      {
        condition: {
          type: "and",
          conditions: [
            {
              type: "equals",
              questionId: "med-physical-exam",
              value: "more-2yr",
            },
            { type: "treatmentInPlan", treatmentId: "injectable-sermorelin" },
          ],
        },
        action: {
          type: "disqualify",
          treatmentId: "injectable-sermorelin",
          reason:
            "Sermorelin requires an in-person medical evaluation within the last 2 years.",
        },
      },
      {
        condition: {
          type: "and",
          conditions: [
            {
              type: "equals",
              questionId: "med-physical-exam",
              value: "more-2yr",
            },
            { type: "treatmentInPlan", treatmentId: "oral-sermorelin" },
          ],
        },
        action: {
          type: "disqualify",
          treatmentId: "oral-sermorelin",
          reason:
            "Sermorelin requires an in-person medical evaluation within the last 2 years.",
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 4: CARDIOVASCULAR SCREENING
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: "cardio-bp-recent",
    section: "cardiovascular",
    type: "yes-no",
    question:
      "Have you had your blood pressure measured in the past 6 months?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
    triggers: [
      {
        condition: {
          type: "equals",
          questionId: "cardio-bp-recent",
          value: "no",
        },
        action: {
          type: "disqualify",
          treatmentId: "ed-rapid-dissolve-tablet",
          reason:
            "A recent blood pressure reading is required before prescribing ED medications. Please have your blood pressure measured and try again.",
        },
      },
    ],
  },
  {
    id: "cardio-systolic",
    section: "cardiovascular",
    type: "single",
    question: "What is your systolic blood pressure number? (The top number)",
    options: [
      { label: "Less than 90", value: "<90" },
      { label: "90–119", value: "90-119" },
      { label: "120–139", value: "120-139" },
      { label: "140–159", value: "140-159" },
      { label: "160 or more", value: "160+" },
    ],
    required: true,
    showIf: {
      type: "equals",
      questionId: "cardio-bp-recent",
      value: "yes",
    },
  },
  {
    id: "cardio-diastolic",
    section: "cardiovascular",
    type: "single",
    question:
      "What is your diastolic blood pressure number? (The bottom number)",
    options: [
      { label: "Less than 65", value: "<65" },
      { label: "65–79", value: "65-79" },
      { label: "80–89", value: "80-89" },
      { label: "90–99", value: "90-99" },
      { label: "100 or more", value: "100+" },
    ],
    required: true,
    showIf: {
      type: "equals",
      questionId: "cardio-bp-recent",
      value: "yes",
    },
  },
  {
    id: "cardio-risks",
    section: "cardiovascular",
    type: "multi",
    question: "Do you have any significant cardiovascular risks?",
    options: [
      {
        label:
          "Cardiac death or heart attack in a first degree relative before the age of 55",
        value: "family-cardiac",
      },
      { label: "Elevated blood pressure", value: "elevated-bp" },
      { label: "Diabetes", value: "diabetes" },
      { label: "Elevated cholesterol", value: "elevated-cholesterol" },
      {
        label: "Previous history of a heart attack",
        value: "previous-heart-attack",
      },
      { label: "None apply to me", value: "none", exclusive: true },
    ],
    required: true,
  },
  {
    id: "cardio-conditions",
    section: "cardiovascular",
    type: "multi",
    question: "Do you have any of these heart or vascular conditions?",
    description:
      "On occasion these conditions are high risk and it is better that your condition is evaluated in person.",
    options: [
      {
        label: "Heart attack, heart failure, or narrowing of heart arteries",
        value: "heart-attack-failure",
      },
      {
        label: "Irregular heartbeat or heart arrhythmias",
        value: "arrhythmias",
      },
      {
        label: "Heart abnormalities or heart murmurs",
        value: "heart-abnormalities",
      },
      {
        label: "Long QT syndrome or a prolonged QT interval",
        value: "long-qt",
      },
      {
        label: "Heart valve problems",
        value: "valve-problems",
      },
      {
        label: "Cardiomyopathy or enlarged heart",
        value: "cardiomyopathy",
      },
      { label: "Low blood pressure", value: "low-bp" },
      {
        label: "Syncope or history of passing out",
        value: "syncope",
      },
      {
        label: "Pulmonary hypertension",
        value: "pulmonary-hypertension",
      },
      { label: "None apply", value: "none", exclusive: true },
    ],
    required: true,
  },
  {
    id: "cardio-symptoms",
    section: "cardiovascular",
    type: "multi",
    question: "Do you experience any of the following?",
    options: [
      {
        label: "Exertional chest pain (angina) or shortness of breath",
        value: "chest-pain",
      },
      {
        label: "Unexplained fainting, lightheadedness, or dizziness",
        value: "fainting",
      },
      { label: "Abnormal heartbeat", value: "abnormal-heartbeat" },
      { label: "Leg cramps with exercise", value: "leg-cramps" },
      { label: "None apply", value: "none", exclusive: true },
    ],
    required: true,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 5: ED / SEXUAL HEALTH
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: "ed-confidence",
    section: "ed-sexual-health",
    type: "scale",
    question: "How confident are you in getting/keeping an erection?",
    options: [
      { label: "Not confident", value: "not-confident" },
      { label: "Low confidence", value: "low" },
      { label: "Somewhat confident", value: "somewhat" },
      { label: "Mostly confident", value: "mostly" },
      { label: "Very confident", value: "very" },
    ],
    required: true,
  },
  {
    id: "ed-difficulty",
    section: "ed-sexual-health",
    type: "scale",
    question:
      "How difficult is it to keep an erection to the finish of intercourse?",
    options: [
      { label: "Extremely difficult", value: "extremely" },
      { label: "Very difficult", value: "very" },
      { label: "Somewhat difficult", value: "somewhat" },
      { label: "Slightly difficult", value: "slightly" },
      { label: "Not difficult", value: "not" },
    ],
    required: true,
    triggers: [
      {
        condition: {
          type: "or",
          conditions: [
            { type: "equals", questionId: "ed-difficulty", value: "extremely" },
            { type: "equals", questionId: "ed-difficulty", value: "very" },
            { type: "equals", questionId: "ed-difficulty", value: "somewhat" },
          ],
        },
        action: {
          type: "suggest",
          treatmentId: "ed-rapid-dissolve-tablet",
          reason:
            "Based on your symptoms, your provider may recommend this combination ED treatment.",
        },
      },
    ],
  },
  {
    id: "ed-symptoms",
    section: "ed-sexual-health",
    type: "multi",
    question: "What symptoms are you currently experiencing?",
    options: [
      { label: "Difficult to get an erection", value: "difficult-erection" },
      {
        label: "Erection doesn't stay hard during sex",
        value: "cant-maintain",
      },
      { label: "Erection is inconsistent", value: "inconsistent" },
      {
        label: "Ejaculate too quickly or prematurely (PE)",
        value: "premature-ejaculation",
      },
      { label: "Other", value: "other" },
    ],
    required: true,
    followUp: {
      condition: {
        type: "includes",
        questionId: "ed-symptoms",
        value: "other",
      },
      prompt: "Please describe your symptoms.",
    },
  },
  {
    id: "ed-duration",
    section: "ed-sexual-health",
    type: "single",
    question: "How long have you noticed these symptoms?",
    options: [
      { label: "Less than 1 month", value: "<1mo" },
      { label: "2–6 months", value: "2-6mo" },
      { label: "6–12 months", value: "6-12mo" },
      { label: "Over 12 months", value: ">12mo" },
    ],
    required: true,
  },
  {
    id: "ed-previous-treatment",
    section: "ed-sexual-health",
    type: "yes-no",
    question:
      "Have you been treated for ED in the past or tried any medications for erectile dysfunction?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
    followUp: {
      condition: {
        type: "equals",
        questionId: "ed-previous-treatment",
        value: "yes",
      },
      prompt:
        "Please list all medications, surgical implants, or penile injections used.",
    },
  },
  {
    id: "ed-genital-exam",
    section: "ed-sexual-health",
    type: "yes-no",
    question:
      "Have you been seen by a healthcare provider for a physical exam in the last 2 years that included a genital exam?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
    triggers: [
      {
        condition: {
          type: "equals",
          questionId: "ed-genital-exam",
          value: "no",
        },
        action: {
          type: "disqualify",
          treatmentId: "enclomiphene",
          reason:
            "Enclomiphene requires a physical exam including genital exam within the last 2 years.",
        },
      },
    ],
  },
  {
    id: "ed-genital-abnormalities",
    section: "ed-sexual-health",
    type: "yes-no",
    question: "Were there any abnormalities during that exam?",
    options: [
      { label: "Yes, abnormalities were found", value: "yes" },
      { label: "No, my exam was normal", value: "no" },
    ],
    required: true,
    showIf: {
      type: "equals",
      questionId: "ed-genital-exam",
      value: "yes",
    },
    followUp: {
      condition: {
        type: "equals",
        questionId: "ed-genital-abnormalities",
        value: "yes",
      },
      prompt: "Please describe the abnormalities found.",
    },
  },
  {
    id: "ed-penile-conditions",
    section: "ed-sexual-health",
    type: "multi",
    question:
      "Do you have any of these conditions related to sexual function?",
    options: [
      {
        label: "Peyronie's Disease (a marked curve or bend in the penis)",
        value: "peyronies",
      },
      {
        label: "Tight foreskin or foreskin that is hard to retract",
        value: "tight-foreskin",
      },
      { label: "Painful ejaculation", value: "painful-ejaculation" },
      {
        label: "Priapism (painful erection lasting more than 4 hours)",
        value: "priapism",
      },
      {
        label: "Any other deformity or penile deformity",
        value: "other-deformity",
      },
      { label: "None apply to me", value: "none", exclusive: true },
    ],
    required: true,
  },
  {
    id: "ed-dangerous-meds",
    section: "ed-sexual-health",
    type: "multi",
    question:
      "Are you taking any of the following medications?",
    description:
      "These medications can cause serious, life-threatening complications when combined with ED treatments.",
    critical: true,
    options: [
      {
        label:
          "Nitrates (Nitroglycerin, Isosorbide mononitrate/dinitrate, Nitroprusside)",
        value: "nitrates",
      },
      {
        label:
          "Sildenafil (Revatio) or any other medication used to treat Pulmonary Hypertension",
        value: "pulmonary-hypertension-meds",
      },
      {
        label:
          "Alpha-Blockers (Doxazosin, Prazosin, Terazosin, Phentolamine)",
        value: "alpha-blockers",
      },
      {
        label: "HIV medication (protease inhibitors)",
        value: "hiv-meds",
      },
      {
        label:
          "Ketoconazole or itraconazole (Nizoral or Sporanox)",
        value: "antifungals",
      },
      {
        label: "Erythromycin or clarithromycin",
        value: "macrolides",
      },
      {
        label: "I don't take any of these medications",
        value: "none",
        exclusive: true,
      },
    ],
    required: true,
  },
  {
    id: "ed-recreational-drugs",
    section: "ed-sexual-health",
    type: "multi",
    question:
      "Do you use any of these recreational drugs?",
    description:
      "Certain recreational drugs can cause life-threatening interactions with ED medications.",
    critical: true,
    options: [
      { label: "Marijuana", value: "marijuana" },
      { label: "Cocaine or crack", value: "cocaine" },
      {
        label: "Amyl Nitrate, butyl nitrite, Poppers, or Rush",
        value: "amyl-nitrate",
      },
      { label: "Ecstasy (Molly, MDMA)", value: "ecstasy" },
      {
        label: "I do not use any recreational drugs",
        value: "none",
        exclusive: true,
      },
    ],
    required: true,
    triggers: [
      {
        condition: {
          type: "includes",
          questionId: "ed-recreational-drugs",
          value: "amyl-nitrate",
        },
        action: {
          type: "disqualify",
          treatmentId: "ed-rapid-dissolve-tablet",
          reason:
            "Amyl nitrate/poppers use is a contraindication for ED medications due to dangerous blood pressure interactions.",
        },
      },
    ],
  },
  {
    id: "ed-alcohol",
    section: "ed-sexual-health",
    type: "single",
    question:
      "How many alcoholic beverages do you consume per week?",
    description:
      "Alcohol should be limited while using ED medication due to potential drops in blood pressure.",
    options: [
      { label: "0", value: "0" },
      { label: "1–5", value: "1-5" },
      { label: "6–10", value: "6-10" },
      { label: "11+", value: "11+" },
    ],
    required: true,
  },
  {
    id: "ed-fitness",
    section: "ed-sexual-health",
    type: "yes-no",
    question:
      "Can you easily walk up 2 flights of stairs or walk 20 blocks on flat ground?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 6: TESTOSTERONE / HORMONE
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: "test-energy",
    section: "testosterone",
    type: "scale",
    question: "How would you rate your energy level?",
    options: [
      { label: "Terrible", value: "terrible" },
      { label: "Poor", value: "poor" },
      { label: "Average", value: "average" },
      { label: "Good", value: "good" },
      { label: "Excellent", value: "excellent" },
    ],
    required: true,
    triggers: [
      {
        condition: {
          type: "or",
          conditions: [
            {
              type: "equals",
              questionId: "test-energy",
              value: "terrible",
            },
            { type: "equals", questionId: "test-energy", value: "poor" },
          ],
        },
        action: {
          type: "suggest",
          treatmentId: "enclomiphene",
          reason:
            "Your energy responses suggest your provider may want to evaluate your testosterone levels.",
        },
      },
    ],
  },
  {
    id: "test-muscle",
    section: "testosterone",
    type: "scale",
    question: "How would you rate your muscle strength/endurance?",
    options: [
      { label: "Terrible", value: "terrible" },
      { label: "Poor", value: "poor" },
      { label: "Average", value: "average" },
      { label: "Good", value: "good" },
      { label: "Excellent", value: "excellent" },
    ],
    required: true,
  },
  {
    id: "test-libido",
    section: "testosterone",
    type: "scale",
    question: "How would you rate your libido (sex drive)?",
    options: [
      { label: "Terrible", value: "terrible" },
      { label: "Poor", value: "poor" },
      { label: "Average", value: "average" },
      { label: "Good", value: "good" },
      { label: "Excellent", value: "excellent" },
    ],
    required: true,
  },
  {
    id: "test-erections",
    section: "testosterone",
    type: "scale",
    question: "How strong are your erections?",
    options: [
      { label: "Extremely weak", value: "extremely-weak" },
      { label: "Weak", value: "weak" },
      { label: "Neither weak nor strong", value: "neutral" },
      { label: "Strong", value: "strong" },
      { label: "Extremely strong", value: "extremely-strong" },
    ],
    required: true,
    triggers: [
      {
        condition: {
          type: "or",
          conditions: [
            { type: "equals", questionId: "test-erections", value: "extremely-weak" },
            { type: "equals", questionId: "test-erections", value: "weak" },
            { type: "equals", questionId: "test-erections", value: "neutral" },
          ],
        },
        action: {
          type: "suggest",
          treatmentId: "ed-rapid-dissolve-tablet",
          reason:
            "Low erection strength combined with ED symptoms may benefit from a combination ED treatment.",
        },
      },
    ],
  },
  {
    id: "test-previous-treatment",
    section: "testosterone",
    type: "yes-no",
    question:
      "Have you been treated for low testosterone in the past or tried any prescription and/or over-the-counter medications for low testosterone?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
    followUp: {
      condition: {
        type: "equals",
        questionId: "test-previous-treatment",
        value: "yes",
      },
      prompt: "Please list all medications and products used.",
    },
  },
  {
    id: "test-lab-work",
    section: "testosterone",
    type: "single",
    question: "Which best describes your Enclomiphene needs?",
    description:
      "Recent lab work means within the last 6 months.",
    options: [
      {
        label: "Start Enclomiphene (I need recent lab work)",
        value: "start-need-labs",
      },
      {
        label: "Start Enclomiphene (I have recent lab work)",
        value: "start-have-labs",
      },
      {
        label:
          "Refill Enclomiphene (I need recent lab work and have been using the medication)",
        value: "refill-need-labs",
      },
      {
        label:
          "Refill Enclomiphene (I have recent lab work and have been using the medication)",
        value: "refill-have-labs",
      },
    ],
    required: true,
    showIf: { type: "treatmentInPlan", treatmentId: "enclomiphene" },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 7: HAIR LOSS
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: "hair-description",
    section: "hair-loss",
    type: "text",
    question: "Tell us about your hair loss.",
    description:
      "Describe your hair loss — when it started, where you're noticing it, and how it's progressing.",
    required: true,
    triggers: [
      {
        condition: {
          type: "answered",
          questionId: "hair-description",
        },
        action: {
          type: "suggest",
          treatmentId: "topical-finasteride",
          reason:
            "Based on your hair loss concerns, your provider may recommend a topical treatment formula.",
        },
      },
    ],
  },
  {
    id: "hair-scalp-symptoms",
    section: "hair-loss",
    type: "multi",
    question: "Have you noticed any of the following?",
    options: [
      {
        label: "Itchy, painful, burning or lesions on the scalp",
        value: "itchy-painful",
      },
      { label: "Dry skin or dandruff", value: "dry-skin" },
      { label: "Rash", value: "rash" },
      { label: "Bleeding", value: "bleeding" },
      { label: "Sudden hair loss", value: "sudden-loss" },
      {
        label: "I do not have any of these",
        value: "none",
        exclusive: true,
      },
    ],
    required: true,
  },
  {
    id: "hair-loss-pattern",
    section: "hair-loss",
    type: "multi",
    question: "What hair loss symptoms have you noticed?",
    options: [
      {
        label: "Thinning at the front hairline",
        value: "thinning-front",
      },
      {
        label: "Thinning on the top of the head",
        value: "thinning-top",
      },
      { label: "I have a receding hairline", value: "receding" },
      {
        label: "Diffuse thinning (all over thinning)",
        value: "diffuse",
      },
      { label: "Increased shedding", value: "shedding" },
      { label: "None", value: "none", exclusive: true },
    ],
    required: true,
  },
  {
    id: "hair-previous-treatment",
    section: "hair-loss",
    type: "yes-no",
    question:
      "Have you tried any treatments (medications, procedures, etc.) for your hair loss in the past?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
  },
  {
    id: "hair-treatments-tried",
    section: "hair-loss",
    type: "multi",
    question: "What treatments have you already tried?",
    showIf: {
      type: "equals",
      questionId: "hair-previous-treatment",
      value: "yes",
    },
    options: [
      { label: "Minoxidil (Rogaine)", value: "minoxidil" },
      { label: "Finasteride (Propecia)", value: "finasteride" },
      { label: "Biotin or Biotin-based vitamins", value: "biotin" },
      { label: "Tretinoin topical treatment", value: "tretinoin" },
      { label: "Steroid-based scalp injections", value: "steroids" },
      { label: "Shampoo-based treatment", value: "shampoo" },
      { label: "Hair Transplant", value: "transplant" },
      { label: "PRP (Platelet Rich Plasma)", value: "prp" },
      { label: "Other", value: "other" },
    ],
    required: true,
    followUp: {
      condition: {
        type: "includes",
        questionId: "hair-treatments-tried",
        value: "other",
      },
      prompt: "Please describe the other treatments you've tried.",
    },
  },
  {
    id: "hair-compound-allergies",
    section: "hair-loss",
    type: "multi",
    question: "Do you have any allergies to the following compounds?",
    options: [
      { label: "Azelaic Acid", value: "azelaic-acid" },
      { label: "Finasteride", value: "finasteride" },
      { label: "Tretinoin", value: "tretinoin" },
      { label: "Hydrocortisone", value: "hydrocortisone" },
      { label: "Minoxidil", value: "minoxidil" },
      { label: "Dutasteride", value: "dutasteride" },
      { label: "Ketoconazole", value: "ketoconazole" },
      { label: "Caffeine", value: "caffeine" },
      { label: "Latanoprost or Bimatoprost", value: "latanoprost" },
      { label: "Melatonin", value: "melatonin" },
      {
        label: "None of these medications",
        value: "none",
        exclusive: true,
      },
    ],
    required: true,
  },
  {
    id: "hair-sexual-dysfunction",
    section: "hair-loss",
    type: "yes-no",
    question: "Are you currently experiencing any sexual dysfunction?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
    followUp: {
      condition: {
        type: "equals",
        questionId: "hair-sexual-dysfunction",
        value: "yes",
      },
      prompt: "Please describe.",
    },
    triggers: [
      {
        condition: {
          type: "equals",
          questionId: "hair-sexual-dysfunction",
          value: "yes",
        },
        action: {
          type: "suggest",
          treatmentId: "ed-rapid-dissolve-tablet",
          reason:
            "You mentioned sexual dysfunction — your provider may also want to address this.",
        },
      },
    ],
  },
  {
    id: "hair-5ar-warning",
    section: "hair-loss",
    type: "yes-no",
    question:
      "Do you acknowledge the following and wish to proceed?",
    description:
      "5-alpha-reductase inhibitors (finasteride/dutasteride) may worsen depression or anxiety. If you have a history of these conditions, discuss with your provider. If you experience thoughts of self-harm, stop the medication immediately and call 911.",
    critical: true,
    options: [
      { label: "Yes, I acknowledge and want to proceed", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
    triggers: [
      {
        condition: {
          type: "equals",
          questionId: "hair-5ar-warning",
          value: "no",
        },
        action: {
          type: "disqualify",
          treatmentId: "__hair__",
          reason:
            "Acknowledgment of the 5-alpha-reductase inhibitor warning is required for hair loss treatments.",
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 8: PEPTIDES & LONGEVITY
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: "pep-cancer-history",
    section: "peptides",
    type: "single",
    question: "Do you have a current or past history of cancer?",
    options: [
      {
        label: "Yes, currently undergoing treatment",
        value: "current-treatment",
      },
      { label: "Yes, history of cancer", value: "history" },
      { label: "No", value: "no" },
    ],
    required: true,
  },
  {
    id: "pep-conditions",
    section: "peptides",
    type: "multi",
    question: "Do you have any of the following conditions?",
    options: [
      {
        label: "Thyroid disease (hypothyroidism or hyperthyroidism)",
        value: "thyroid",
      },
      { label: "Glioma", value: "glioma" },
      { label: "Any current or history of cancer or tumor", value: "cancer" },
      { label: "Diabetes (Type 1 or Type 2)", value: "diabetes" },
      { label: "Autoimmune disease", value: "autoimmune" },
      { label: "Liver disease", value: "liver" },
      { label: "Kidney disease", value: "kidney" },
      { label: "Severe heart disease", value: "heart" },
      { label: "None of these", value: "none", exclusive: true },
    ],
    required: true,
  },
  {
    id: "pep-medications",
    section: "peptides",
    type: "multi",
    question: "Do you take any of the following medications?",
    options: [
      { label: "Clonidine or levodopa", value: "clonidine-levodopa" },
      {
        label: "Insulin or other diabetes medications",
        value: "diabetes-meds",
      },
      {
        label: "Glucocorticoids (such as prednisone, dexamethasone)",
        value: "glucocorticoids",
      },
      {
        label: "Blood-thinning medications",
        value: "blood-thinners",
      },
      { label: "Immunosuppressant medications", value: "immunosuppressants" },
      { label: "Chemotherapy medications", value: "chemo" },
      {
        label: "Cox inhibitors (aspirin, advil, celebrex, or similar)",
        value: "cox-inhibitors",
      },
      {
        label: "Cardiovascular medications for heart rhythm or blood pressure",
        value: "cardio-meds",
      },
      {
        label: "None of these",
        value: "none",
        exclusive: true,
      },
    ],
    required: true,
  },
  {
    id: "pep-symptoms",
    section: "peptides",
    type: "multi",
    question:
      "Are you currently experiencing any of the following symptoms? Select all that apply.",
    options: [
      { label: "Brain fog", value: "brain-fog" },
      { label: "Chronic or general fatigue", value: "fatigue" },
      {
        label: "Difficulty concentrating or lack of focus",
        value: "concentration",
      },
      { label: "Reduced endurance", value: "reduced-endurance" },
      { label: "Low energy", value: "low-energy" },
      { label: "Low libido", value: "low-libido" },
      {
        label: "Decreased muscle mass or muscle weakness",
        value: "muscle-weakness",
      },
      {
        label: "Trouble sleeping or poor quality sleep",
        value: "poor-sleep",
      },
      {
        label: "Unexplained or unwanted weight gain",
        value: "weight-gain",
      },
      { label: "None of the above", value: "none", exclusive: true },
    ],
    required: true,
    triggers: [
      {
        condition: {
          type: "and",
          conditions: [
            {
              type: "includes",
              questionId: "pep-symptoms",
              value: "low-libido",
            },
            {
              type: "includes",
              questionId: "pep-symptoms",
              value: "low-energy",
            },
            { type: "equals", questionId: "basics-sex", value: "male" },
          ],
        },
        action: {
          type: "suggest",
          treatmentId: "enclomiphene",
          reason:
            "Your symptoms may be related to testosterone — your provider can evaluate.",
        },
      },
    ],
  },
  {
    id: "pep-activity",
    section: "peptides",
    type: "single",
    question:
      "How would you describe your current level of physical activity?",
    options: [
      {
        label: "Sedentary — Little to no regular physical activity",
        value: "sedentary",
      },
      {
        label:
          "Lightly active — Occasional physical activity (e.g., walking, light exercise)",
        value: "lightly-active",
      },
      {
        label:
          "Moderately active — Regular exercise but not structured or intense",
        value: "moderately-active",
      },
      {
        label:
          "Active/Athletic — Consistent, structured workouts and an active lifestyle",
        value: "active",
      },
      {
        label:
          "Highly active/Performance-focused — Competitive athlete or focused on performance optimization",
        value: "highly-active",
      },
    ],
    required: true,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 9: MENTAL HEALTH SCREENING
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: "mh-mood",
    section: "mental-health",
    type: "yes-no",
    question:
      "Do you have concerns about your mood, depression, anxiety, or excessive worrying?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
    followUp: {
      condition: { type: "equals", questionId: "mh-mood", value: "yes" },
      prompt: "Please describe your concerns.",
    },
  },
  {
    id: "mh-interest",
    section: "mental-health",
    type: "yes-no",
    question:
      "In the last 2 weeks, have you lost interest in doing your daily routine?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
  },
  {
    id: "mh-self-harm",
    section: "mental-health",
    type: "yes-no",
    question:
      "In the last 2 weeks, have you had any thoughts of hurting yourself?",
    critical: true,
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
    triggers: [
      {
        condition: {
          type: "equals",
          questionId: "mh-self-harm",
          value: "yes",
        },
        action: {
          type: "flag",
          message:
            "Patient reported thoughts of self-harm in the last 2 weeks. Requires immediate provider attention.",
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 10: ANYTHING ELSE (universal)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: "final-anything-else",
    section: "review",
    type: "yes-no",
    question:
      "Is there anything else you want your provider to know about your condition or health?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    required: true,
    followUp: {
      condition: {
        type: "equals",
        questionId: "final-anything-else",
        value: "yes",
      },
      prompt: "Please share anything else your provider should know.",
    },
  },
];

/** Get all questions for a specific section */
export function getQuestionsBySection(section: Question["section"]): Question[] {
  return QUESTIONS.filter((q) => q.section === section);
}
