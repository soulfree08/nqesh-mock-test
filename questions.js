const QUESTIONS = [

  // ─── FUNDAMENTALS OF NURSING (20 questions) ───────────────────────────────
  {
    id: 1,
    subject: "Fundamentals of Nursing",
    question: "A nurse is preparing to perform hand hygiene using an alcohol-based hand rub. Which situation requires handwashing with soap and water instead?",
    choices: [
      "After removing gloves following a routine assessment",
      "Before administering oral medications",
      "When hands are visibly soiled with blood",
      "After touching a patient's intact skin"
    ],
    answer: 2,
    explanation: "Alcohol-based hand rubs are effective for most situations, but when hands are visibly soiled with blood, body fluids, or other organic material, soap and water must be used. Alcohol cannot physically remove organic matter."
  },
  {
    id: 2,
    subject: "Fundamentals of Nursing",
    question: "When performing a physical assessment, which technique should the nurse use LAST when assessing the abdomen?",
    choices: [
      "Inspection",
      "Auscultation",
      "Percussion",
      "Palpation"
    ],
    answer: 3,
    explanation: "When assessing the abdomen, the order is: inspection → auscultation → percussion → palpation. Palpation is done last because it can alter bowel sounds and distort findings if done before auscultation."
  },
  {
    id: 3,
    subject: "Fundamentals of Nursing",
    question: "A nurse is preparing to insert a urinary catheter for a female patient. Which action demonstrates correct technique?",
    choices: [
      "Cleansing the meatus using a circular motion from outer to inner",
      "Inserting the catheter 2–3 cm until urine flows",
      "Cleansing the labia minora before the meatus, moving from front to back",
      "Using the same cotton ball for multiple cleansing strokes"
    ],
    answer: 2,
    explanation: "For female catheterization, cleansing should proceed from the inner labia to the meatus using a front-to-back motion with separate cotton balls for each stroke, maintaining sterile technique throughout."
  },
  {
    id: 4,
    subject: "Fundamentals of Nursing",
    question: "A patient's chart shows a respiratory rate of 8 breaths per minute. The nurse correctly documents this as:",
    choices: [
      "Tachypnea",
      "Bradypnea",
      "Apnea",
      "Hyperpnea"
    ],
    answer: 1,
    explanation: "Bradypnea refers to an abnormally slow respiratory rate (fewer than 12 breaths per minute in adults). Tachypnea is rapid breathing; apnea is absence of breathing; hyperpnea is deep, increased breathing."
  },
  {
    id: 5,
    subject: "Fundamentals of Nursing",
    question: "When positioning a patient who is unconscious, the nurse should place the patient in which position to prevent aspiration?",
    choices: [
      "Supine with head flat",
      "Trendelenburg position",
      "Lateral (recovery) position",
      "High Fowler's position"
    ],
    answer: 2,
    explanation: "The lateral (recovery) position allows drainage of secretions from the mouth, prevents the tongue from falling back, and reduces the risk of aspiration in unconscious patients."
  },
  {
    id: 6,
    subject: "Fundamentals of Nursing",
    question: "The nurse is preparing to administer a medication via IM injection to an adult patient. Which site is MOST preferred for large-volume IM injections?",
    choices: [
      "Deltoid muscle",
      "Vastus lateralis",
      "Ventrogluteal site",
      "Dorsogluteal site"
    ],
    answer: 2,
    explanation: "The ventrogluteal site is the preferred IM injection site for adults as it is free from major nerves and blood vessels, has a thick muscle mass, and has a lower risk of complications compared to the dorsogluteal site."
  },
  {
    id: 7,
    subject: "Fundamentals of Nursing",
    question: "A patient has a nursing diagnosis of 'Impaired Skin Integrity related to prolonged pressure.' Which nursing intervention has the HIGHEST priority?",
    choices: [
      "Apply moisturizing lotion to the skin twice daily",
      "Reposition the patient every 2 hours",
      "Encourage a high-protein diet",
      "Document the wound appearance daily"
    ],
    answer: 1,
    explanation: "Repositioning every 2 hours is the most critical intervention to relieve pressure, restore circulation, and prevent further skin breakdown. It directly addresses the cause of impaired skin integrity."
  },
  {
    id: 8,
    subject: "Fundamentals of Nursing",
    question: "When administering oxygen via nasal cannula, the nurse knows that a flow rate of 2 L/min delivers approximately what percentage of oxygen?",
    choices: [
      "24%",
      "28%",
      "36%",
      "44%"
    ],
    answer: 1,
    explanation: "With a nasal cannula, each liter per minute adds approximately 4% oxygen above the baseline 20% room air. At 2 L/min: 20% + (2 × 4%) = 28% FiO2."
  },
  {
    id: 9,
    subject: "Fundamentals of Nursing",
    question: "The nurse is planning care using Maslow's hierarchy of needs. Which patient need should be addressed FIRST?",
    choices: [
      "A patient expressing loneliness and isolation",
      "A patient with low self-esteem",
      "A patient with a blocked airway",
      "A patient requesting information about their diagnosis"
    ],
    answer: 2,
    explanation: "According to Maslow's hierarchy, physiological needs (such as airway, breathing, circulation) are the most basic and must be addressed first. A blocked airway is immediately life-threatening."
  },
  {
    id: 10,
    subject: "Fundamentals of Nursing",
    question: "A nurse is preparing to perform a sterile dressing change. Which action breaks sterile technique?",
    choices: [
      "Opening the sterile package away from the body",
      "Placing sterile items at the edge of the sterile field",
      "Keeping sterile items above the waist level",
      "Reaching over the sterile field to place an item"
    ],
    answer: 3,
    explanation: "Reaching over a sterile field contaminates it because microorganisms can fall from the arm, clothing, or hand onto the sterile items. Sterile technique requires that you never reach over or turn your back on the sterile field."
  },
  {
    id: 11,
    subject: "Fundamentals of Nursing",
    question: "Which of the following is an example of a correctly written nursing diagnosis?",
    choices: [
      "Impaired gas exchange related to pneumonia",
      "Pneumonia as evidenced by productive cough",
      "Impaired gas exchange related to low oxygen saturation",
      "Respiratory problem due to smoking history"
    ],
    answer: 0,
    explanation: "A correctly written nursing diagnosis follows the PES format: Problem (Impaired gas exchange), Etiology/Related factor (related to pneumonia — a medical condition used as etiology), and Signs/symptoms. The cause should be the related factor, not a symptom."
  },
  {
    id: 12,
    subject: "Fundamentals of Nursing",
    question: "The nurse is assessing a patient's pain. Which statement BEST reflects the nurse's understanding of pain management?",
    choices: [
      "Pain is only present if there is an observable physical cause",
      "Pain is whatever the patient says it is",
      "Older patients have a higher pain tolerance and require less medication",
      "Vital sign changes are the most reliable indicators of pain"
    ],
    answer: 1,
    explanation: "Pain is a subjective experience — it is whatever the patient says it is, occurring whenever they say it does. McCaffery's definition is the foundation of patient-centered pain assessment in nursing."
  },
  {
    id: 13,
    subject: "Fundamentals of Nursing",
    question: "A patient is prescribed 500 mg of amoxicillin. Available tablets are 250 mg each. How many tablets should the nurse administer?",
    choices: [
      "0.5 tablet",
      "1 tablet",
      "2 tablets",
      "3 tablets"
    ],
    answer: 2,
    explanation: "Using the formula: Dose ordered ÷ Dose available = 500 mg ÷ 250 mg = 2 tablets."
  },
  {
    id: 14,
    subject: "Fundamentals of Nursing",
    question: "The nurse is providing range-of-motion exercises to a bedridden patient. The PRIMARY purpose of this intervention is to:",
    choices: [
      "Promote cardiovascular fitness",
      "Prevent contractures and maintain joint mobility",
      "Stimulate appetite and bowel function",
      "Reduce the risk of pressure ulcer formation"
    ],
    answer: 1,
    explanation: "Range-of-motion exercises maintain joint flexibility and muscle tone, and prevent contractures — the abnormal shortening of muscles and joints that occurs from prolonged immobility."
  },
  {
    id: 15,
    subject: "Fundamentals of Nursing",
    question: "A patient's urine output over 8 hours is 200 mL. The nurse interprets this as:",
    choices: [
      "Normal output for an adult",
      "Polyuria",
      "Oliguria",
      "Anuria"
    ],
    answer: 2,
    explanation: "Normal adult urine output is at least 30 mL/hour or approximately 240 mL over 8 hours. An output of 200 mL over 8 hours (25 mL/hour) falls below normal, indicating oliguria (decreased urine output)."
  },
  {
    id: 16,
    subject: "Fundamentals of Nursing",
    question: "Which of the following BEST describes the purpose of the nursing process?",
    choices: [
      "To ensure nurses follow physician orders accurately",
      "To provide a systematic, individualized approach to patient care",
      "To document nursing activities for legal protection",
      "To standardize care so all patients receive the same treatment"
    ],
    answer: 1,
    explanation: "The nursing process (Assessment, Diagnosis, Planning, Implementation, Evaluation) provides a systematic, patient-centered framework for delivering individualized, evidence-based care."
  },
  {
    id: 17,
    subject: "Fundamentals of Nursing",
    question: "A patient is on contact precautions. Which PPE must the nurse wear upon entering the room?",
    choices: [
      "Mask and goggles only",
      "Gloves only",
      "Gown and gloves",
      "N95 respirator and gloves"
    ],
    answer: 2,
    explanation: "Contact precautions require the nurse to wear a gown and gloves upon entry into the patient's room to prevent transmission of organisms through direct or indirect contact."
  },
  {
    id: 18,
    subject: "Fundamentals of Nursing",
    question: "The nurse is evaluating a patient's learning after health teaching. Which method BEST evaluates understanding?",
    choices: [
      "Ask the patient if they understood",
      "Provide a written summary to review later",
      "Have the patient demonstrate the skill or explain in their own words",
      "Show a video related to the topic"
    ],
    answer: 2,
    explanation: "Return demonstration or having the patient explain in their own words (teach-back method) is the most effective way to evaluate whether learning has truly occurred, going beyond simple acknowledgment."
  },
  {
    id: 19,
    subject: "Fundamentals of Nursing",
    question: "When documenting in a patient's medical record, which principle must the nurse follow?",
    choices: [
      "Use correction fluid to remove errors",
      "Document care before it is performed to save time",
      "Record objective and subjective data accurately and in a timely manner",
      "Avoid documenting patient complaints to prevent legal issues"
    ],
    answer: 2,
    explanation: "Accurate, objective, timely, and complete documentation is a legal and ethical nursing responsibility. Errors must be corrected by drawing a single line, and care must be documented after it is performed."
  },
  {
    id: 20,
    subject: "Fundamentals of Nursing",
    question: "The nurse is preparing to administer an IV medication. Before administration, which assessment is MOST critical?",
    choices: [
      "Check the patient's pain level",
      "Verify IV site patency and check for signs of infiltration",
      "Assess the patient's blood pressure",
      "Review the patient's allergy to food"
    ],
    answer: 1,
    explanation: "Before IV medication administration, verifying IV site patency is critical. Infiltration (fluid leaking into surrounding tissue) can cause severe tissue damage, especially with vesicant medications."
  },

  // ─── COMMUNITY HEALTH NURSING (20 questions) ─────────────────────────────
  {
    id: 21,
    subject: "Community Health Nursing",
    question: "In community health nursing, the PRIMARY goal is to:",
    choices: [
      "Treat communicable diseases in the community",
      "Provide hospital-based care to community members",
      "Promote health and prevent disease in the population",
      "Conduct research on community health problems"
    ],
    answer: 2,
    explanation: "The primary goal of community health nursing is health promotion and disease prevention at the population level, focusing on the community as a whole rather than individual patients."
  },
  {
    id: 22,
    subject: "Community Health Nursing",
    question: "A community health nurse is conducting an epidemiological investigation of a disease outbreak. The attack rate is calculated as:",
    choices: [
      "Number of deaths ÷ Total population × 1,000",
      "Number of new cases ÷ Population at risk × 100",
      "Number of existing cases ÷ Total population × 100",
      "Number of recovered cases ÷ Total cases × 100"
    ],
    answer: 1,
    explanation: "The attack rate is the proportion of people in the at-risk population who develop the disease during an outbreak. It is calculated as: (number of new cases ÷ population at risk) × 100."
  },
  {
    id: 23,
    subject: "Community Health Nursing",
    question: "The Expanded Program on Immunization (EPI) in the Philippines includes vaccines for all of the following EXCEPT:",
    choices: [
      "Tuberculosis (BCG)",
      "Hepatitis B",
      "Varicella (chickenpox)",
      "Measles, Mumps, Rubella (MMR)"
    ],
    answer: 2,
    explanation: "Varicella vaccine is not part of the Philippine government's standard EPI. The EPI includes BCG, Hepatitis B, DPT-HepB-Hib (Pentavalent), OPV/IPV, PCV, Rotavirus, MMR, and Influenza for eligible children."
  },
  {
    id: 24,
    subject: "Community Health Nursing",
    question: "In the epidemiological triad, which component refers to environmental factors that influence disease occurrence?",
    choices: [
      "Host",
      "Agent",
      "Environment",
      "Vector"
    ],
    answer: 2,
    explanation: "The epidemiological triad consists of Host, Agent, and Environment. The Environment includes all external factors — physical, biological, and social — that influence the interaction between host and agent."
  },
  {
    id: 25,
    subject: "Community Health Nursing",
    question: "A nurse is conducting a home visit. Which action reflects the concept of 'family as the unit of care'?",
    choices: [
      "Providing treatment only to the identified sick family member",
      "Assessing and addressing the health needs of all family members",
      "Referring all family members to the hospital for evaluation",
      "Focusing care on the family member who requested the visit"
    ],
    answer: 1,
    explanation: "In community health nursing, the family is considered the unit of care. The nurse assesses the health status of all family members and addresses the family's collective health needs, not just the presenting patient."
  },
  {
    id: 26,
    subject: "Community Health Nursing",
    question: "The term 'incidence rate' in epidemiology refers to:",
    choices: [
      "Total number of existing cases in a population at a given time",
      "Number of new cases of a disease occurring in a population over a specific time period",
      "Number of deaths caused by a specific disease per 1,000 population",
      "Proportion of people who recovered from a disease"
    ],
    answer: 1,
    explanation: "Incidence rate measures the frequency of NEW cases of a disease in a defined population over a specific time period. It reflects the risk of developing the disease."
  },
  {
    id: 27,
    subject: "Community Health Nursing",
    question: "Which level of prevention involves early detection and prompt treatment of disease?",
    choices: [
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention",
      "Primordial prevention"
    ],
    answer: 1,
    explanation: "Secondary prevention aims to detect disease early and treat it promptly to halt its progression. Examples include screening programs, early diagnosis, and treatment of conditions like tuberculosis or hypertension."
  },
  {
    id: 28,
    subject: "Community Health Nursing",
    question: "The community health nurse is the MOST appropriate person to perform which activity?",
    choices: [
      "Prescribe antibiotics for a patient with pneumonia",
      "Perform surgery on an infected wound",
      "Conduct a community health assessment and develop a community health plan",
      "Diagnose a patient with tuberculosis"
    ],
    answer: 2,
    explanation: "Conducting community health assessments and developing health plans is a core function of the community health nurse. Prescribing medications, surgery, and diagnosis are outside the nursing scope of practice."
  },
  {
    id: 29,
    subject: "Community Health Nursing",
    question: "In the Philippines, the primary law governing the nursing profession is:",
    choices: [
      "Republic Act 7160",
      "Republic Act 9173",
      "Republic Act 4226",
      "Republic Act 8344"
    ],
    answer: 1,
    explanation: "Republic Act 9173, or the Philippine Nursing Act of 2002, is the primary law governing the nursing profession in the Philippines. It defines nursing practice, qualifications, and responsibilities."
  },
  {
    id: 30,
    subject: "Community Health Nursing",
    question: "A barangay health worker reports an increase in diarrhea cases among children under 5. The community health nurse's FIRST action should be to:",
    choices: [
      "Immediately distribute oral rehydration solution to all families",
      "Conduct a rapid assessment to determine the extent and cause of the problem",
      "Report the situation to the Department of Health",
      "Organize a community meeting to discuss proper handwashing"
    ],
    answer: 1,
    explanation: "Before implementing any intervention, the nurse must first conduct a rapid assessment to identify the extent of the outbreak, its likely cause, and affected populations — this guides appropriate and targeted action."
  },
  {
    id: 31,
    subject: "Community Health Nursing",
    question: "The BCG vaccine is given to newborns to provide protection against:",
    choices: [
      "Hepatitis B",
      "Severe forms of tuberculosis",
      "Pertussis",
      "Measles"
    ],
    answer: 1,
    explanation: "BCG (Bacillus Calmette-Guérin) vaccine is given at birth to protect against severe forms of tuberculosis in children, particularly TB meningitis and miliary TB, which are life-threatening."
  },
  {
    id: 32,
    subject: "Community Health Nursing",
    question: "In the COPAR (Community Organizing Participatory Action Research) process, which phase involves identifying community leaders and building relationships?",
    choices: [
      "Community organization",
      "Community study",
      "Community integration",
      "Community action"
    ],
    answer: 2,
    explanation: "Community integration is the phase in COPAR where the health worker enters the community, builds trust, identifies key leaders, and develops relationships with community members to facilitate participation."
  },
  {
    id: 33,
    subject: "Community Health Nursing",
    question: "A communicable disease with a short incubation period and high attack rate is MOST likely to be transmitted via:",
    choices: [
      "Direct contact",
      "Vector-borne transmission",
      "Contaminated food or water",
      "Airborne droplet nuclei"
    ],
    answer: 2,
    explanation: "Diseases with explosive onset and high attack rates in a group are characteristic of common source outbreaks — most often foodborne or waterborne, where many people are exposed to the same contaminated source simultaneously."
  },
  {
    id: 34,
    subject: "Community Health Nursing",
    question: "Which of the following BEST describes 'herd immunity'?",
    choices: [
      "Individual immunity acquired through vaccination",
      "Immunity acquired through direct exposure to a pathogen",
      "Indirect protection of unvaccinated individuals when a sufficient proportion of the population is immune",
      "Immunity passed from mother to newborn through breastfeeding"
    ],
    answer: 2,
    explanation: "Herd immunity (community immunity) occurs when a sufficiently large proportion of a population is immune to a disease — through vaccination or prior infection — reducing the likelihood of infection for unimmunized individuals."
  },
  {
    id: 35,
    subject: "Community Health Nursing",
    question: "The nurse is conducting a home visit for a newly diagnosed TB patient. The MOST important teaching point is:",
    choices: [
      "Rest and limit physical activity for 6 months",
      "Adhere to the complete DOTS treatment regimen",
      "Isolate completely from all family members",
      "Report to the health center only when symptoms worsen"
    ],
    answer: 1,
    explanation: "Adherence to the complete Directly Observed Treatment Short-Course (DOTS) regimen is the cornerstone of TB treatment. Incomplete treatment leads to drug resistance and treatment failure."
  },
  {
    id: 36,
    subject: "Community Health Nursing",
    question: "A community health nurse is computing the infant mortality rate. Which formula is correct?",
    choices: [
      "Number of infant deaths ÷ Total population × 1,000",
      "Number of infant deaths ÷ Number of live births × 1,000",
      "Number of neonatal deaths ÷ Total births × 1,000",
      "Number of infant deaths ÷ Total deaths × 100"
    ],
    answer: 1,
    explanation: "Infant Mortality Rate (IMR) = (Number of deaths of infants under 1 year ÷ Number of live births in the same year) × 1,000. It is a key indicator of community and national health status."
  },
  {
    id: 37,
    subject: "Community Health Nursing",
    question: "Which nutrient deficiency is MOST commonly associated with goiter in the Philippines?",
    choices: [
      "Iron",
      "Vitamin A",
      "Iodine",
      "Calcium"
    ],
    answer: 2,
    explanation: "Iodine deficiency is the most common cause of goiter (enlargement of the thyroid gland). In the Philippines, iodized salt and iodine supplementation programs address this public health concern."
  },
  {
    id: 38,
    subject: "Community Health Nursing",
    question: "During a disaster response, the community health nurse's FIRST priority is:",
    choices: [
      "Documenting all injuries and deaths",
      "Ensuring personal safety and safety of the team",
      "Setting up a first aid station",
      "Notifying the media about the disaster"
    ],
    answer: 1,
    explanation: "In all emergency and disaster situations, personal safety and team safety are the first priority. A nurse who is injured cannot provide care to others — safety assessment must precede any intervention."
  },
  {
    id: 39,
    subject: "Community Health Nursing",
    question: "The APGAR scoring system evaluates a newborn's condition at 1 and 5 minutes after birth. Which parameter is NOT included in APGAR?",
    choices: [
      "Appearance (skin color)",
      "Pulse (heart rate)",
      "Glucose level",
      "Reflex irritability"
    ],
    answer: 2,
    explanation: "APGAR scores assess: Appearance (color), Pulse (heart rate), Grimace (reflex irritability), Activity (muscle tone), and Respiration. Glucose level is not part of the APGAR assessment."
  },
  {
    id: 40,
    subject: "Community Health Nursing",
    question: "Oral rehydration therapy (ORT) is the recommended first-line management for:",
    choices: [
      "Mild to moderate dehydration from diarrhea",
      "Severe dehydration with shock",
      "Dehydration with persistent vomiting",
      "Neonatal dehydration"
    ],
    answer: 0,
    explanation: "ORT (oral rehydration salts solution) is the WHO-recommended first-line treatment for mild to moderate dehydration caused by diarrhea. Severe dehydration and dehydration with persistent vomiting require IV rehydration."
  },

  // ─── MEDICAL-SURGICAL NURSING (20 questions) ─────────────────────────────
  {
    id: 41,
    subject: "Medical-Surgical Nursing",
    question: "A patient arrives in the emergency department following a myocardial infarction. The nurse identifies which ECG finding as MOST characteristic of an acute MI?",
    choices: [
      "Prolonged PR interval",
      "ST segment elevation",
      "Widened QRS complex",
      "Inverted P wave"
    ],
    answer: 1,
    explanation: "ST segment elevation is the hallmark ECG finding of an acute ST-elevation myocardial infarction (STEMI). It indicates acute myocardial injury and is the basis for immediate reperfusion therapy."
  },
  {
    id: 42,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic kidney disease has a serum potassium level of 6.5 mEq/L. Which assessment finding requires IMMEDIATE nursing intervention?",
    choices: [
      "Urine output of 40 mL/hour",
      "Blood pressure of 148/92 mmHg",
      "Irregular cardiac rhythm on the monitor",
      "Mild pedal edema"
    ],
    answer: 2,
    explanation: "Hyperkalemia (K+ > 5.5 mEq/L) causes cardiac dysrhythmias, which can be life-threatening. An irregular cardiac rhythm in a patient with K+ of 6.5 mEq/L requires immediate intervention to prevent cardiac arrest."
  },
  {
    id: 43,
    subject: "Medical-Surgical Nursing",
    question: "A patient with type 1 diabetes mellitus develops diaphoresis, tremors, and confusion. The nurse should FIRST:",
    choices: [
      "Administer insulin as prescribed",
      "Check blood glucose level",
      "Give 15–20 grams of fast-acting carbohydrates orally",
      "Call the physician immediately"
    ],
    answer: 1,
    explanation: "The first step in managing suspected hypoglycemia is to confirm the blood glucose level. While symptoms are suggestive, the nurse must verify before treating — once confirmed low, fast-acting carbohydrates are given (the '15-15 rule')."
  },
  {
    id: 44,
    subject: "Medical-Surgical Nursing",
    question: "A patient post-thyroidectomy develops carpopedal spasms and tingling around the mouth. The nurse suspects:",
    choices: [
      "Thyroid storm",
      "Hypocalcemia due to parathyroid injury",
      "Respiratory obstruction from laryngeal edema",
      "Hemorrhage from the surgical site"
    ],
    answer: 1,
    explanation: "Carpopedal spasms and perioral tingling are signs of hypocalcemia (Trousseau's and Chvostek's signs), which can occur post-thyroidectomy if the parathyroid glands are accidentally removed or damaged, reducing PTH and calcium levels."
  },
  {
    id: 45,
    subject: "Medical-Surgical Nursing",
    question: "A patient is admitted with acute pancreatitis. The nurse should place the patient in which position for comfort?",
    choices: [
      "Supine with legs extended",
      "Prone position",
      "Fetal position (knees drawn to chest)",
      "Trendelenburg position"
    ],
    answer: 2,
    explanation: "The fetal position (lying on the side with knees drawn to the chest) reduces pain in acute pancreatitis by reducing tension on the inflamed pancreas and decreasing abdominal pressure."
  },
  {
    id: 46,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a fractured femur is placed in skeletal traction. The nurse's priority assessment includes:",
    choices: [
      "Checking the weights are hanging freely and not touching the floor",
      "Removing the weights when repositioning the patient",
      "Assessing pin sites daily for signs of infection",
      "Covering the exposed pin ends with tape"
    ],
    answer: 2,
    explanation: "Pin site infection is a major complication of skeletal traction. Daily assessment of pin sites for redness, swelling, drainage, and warmth is a priority nursing responsibility."
  },
  {
    id: 47,
    subject: "Medical-Surgical Nursing",
    question: "Which of the following ABG results indicates respiratory acidosis?",
    choices: [
      "pH 7.50, PaCO2 30, HCO3 22",
      "pH 7.30, PaCO2 55, HCO3 24",
      "pH 7.48, PaCO2 40, HCO3 30",
      "pH 7.32, PaCO2 38, HCO3 18"
    ],
    answer: 1,
    explanation: "Respiratory acidosis: pH < 7.35 (acidosis) and PaCO2 > 45 mmHg (elevated CO2 = respiratory cause). In this option, pH is 7.30 (acidotic) and PaCO2 is 55 (elevated), indicating respiratory acidosis with normal HCO3 (uncompensated)."
  },
  {
    id: 48,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a head injury has a Glasgow Coma Scale (GCS) score of 8. The nurse correctly interprets this as:",
    choices: [
      "Mild traumatic brain injury",
      "Moderate traumatic brain injury",
      "Severe traumatic brain injury",
      "Normal neurological function"
    ],
    answer: 2,
    explanation: "A GCS score of 8 or below indicates severe traumatic brain injury. Scores of 13–15 indicate mild TBI; 9–12 indicate moderate TBI. A GCS of 8 or less is also the threshold for considering endotracheal intubation."
  },
  {
    id: 49,
    subject: "Medical-Surgical Nursing",
    question: "The nurse is caring for a patient with a chest tube. Which assessment finding requires IMMEDIATE action?",
    choices: [
      "Fluctuation (tidaling) in the water seal chamber",
      "Gentle bubbling in the suction control chamber",
      "Continuous bubbling in the water seal chamber",
      "Blood-tinged drainage in the collection chamber"
    ],
    answer: 2,
    explanation: "Continuous bubbling in the water seal chamber (when not connected to suction) indicates an air leak in the system. Tidaling is normal; gentle suction bubbling is expected; blood-tinged drainage is expected post-surgery but requires monitoring."
  },
  {
    id: 50,
    subject: "Medical-Surgical Nursing",
    question: "A patient is prescribed warfarin therapy. The nurse knows the antidote for warfarin overdose is:",
    choices: [
      "Protamine sulfate",
      "Vitamin K",
      "Naloxone",
      "Flumazenil"
    ],
    answer: 1,
    explanation: "Vitamin K (phytonadione) is the antidote for warfarin overdose. Protamine sulfate reverses heparin; naloxone reverses opioids; flumazenil reverses benzodiazepines."
  },
  {
    id: 51,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic obstructive pulmonary disease (COPD) requires supplemental oxygen. The nurse administers oxygen at which flow rate to avoid suppressing the hypoxic drive?",
    choices: [
      "1–2 L/min via nasal cannula",
      "6–8 L/min via simple face mask",
      "10 L/min via partial rebreather mask",
      "15 L/min via non-rebreather mask"
    ],
    answer: 0,
    explanation: "Patients with COPD rely on hypoxic drive for breathing stimulation. High-flow oxygen can suppress this drive and cause respiratory depression. Low-flow oxygen (1–2 L/min) is used to maintain SpO2 at 88–92%."
  },
  {
    id: 52,
    subject: "Medical-Surgical Nursing",
    question: "A patient is 24 hours post-appendectomy. The nurse assesses the abdomen and notes absent bowel sounds. The MOST appropriate action is to:",
    choices: [
      "Encourage the patient to walk in the hallway",
      "Immediately notify the physician",
      "Administer the prescribed laxative",
      "Document the finding as expected and continue monitoring"
    ],
    answer: 3,
    explanation: "Absent or hypoactive bowel sounds are expected in the first 24–48 hours after abdominal surgery due to the effects of anesthesia and bowel manipulation. This is a normal finding that requires documentation and monitoring."
  },
  {
    id: 53,
    subject: "Medical-Surgical Nursing",
    question: "The nurse is caring for a patient receiving a blood transfusion. After 15 minutes, the patient develops chills, fever, and flank pain. The nurse's FIRST action is to:",
    choices: [
      "Slow the transfusion rate",
      "Administer an antihistamine as prescribed",
      "Stop the transfusion immediately",
      "Notify the physician and continue monitoring"
    ],
    answer: 2,
    explanation: "Chills, fever, and flank pain are classic signs of an acute hemolytic transfusion reaction — a life-threatening emergency. The transfusion must be stopped immediately, IV access kept open with normal saline, and the physician notified."
  },
  {
    id: 54,
    subject: "Medical-Surgical Nursing",
    question: "A patient has been diagnosed with deep vein thrombosis (DVT) of the left leg. Which nursing intervention is CONTRAINDICATED?",
    choices: [
      "Maintaining bed rest with leg elevated",
      "Massaging the affected leg to promote circulation",
      "Administering anticoagulant therapy as prescribed",
      "Monitoring for signs of pulmonary embolism"
    ],
    answer: 1,
    explanation: "Massaging a limb with DVT is contraindicated because it can dislodge the clot and cause a pulmonary embolism, which can be fatal. The affected leg should be kept elevated and immobilized."
  },
  {
    id: 55,
    subject: "Medical-Surgical Nursing",
    question: "Which of the following findings in a patient with increased intracranial pressure (ICP) represents Cushing's triad?",
    choices: [
      "Hypotension, tachycardia, and shallow breathing",
      "Hypertension, bradycardia, and irregular respiration",
      "Fever, tachypnea, and altered mental status",
      "Hypotension, bradycardia, and deep breathing"
    ],
    answer: 1,
    explanation: "Cushing's triad — hypertension (widening pulse pressure), bradycardia, and irregular respirations — is a late, ominous sign of severely increased ICP indicating impending brain herniation."
  },
  {
    id: 56,
    subject: "Medical-Surgical Nursing",
    question: "A patient with liver cirrhosis develops abdominal ascites. The nurse monitors for which serious complication associated with large-volume paracentesis?",
    choices: [
      "Hypokalemia",
      "Hypoglycemia",
      "Hypovolemia and hemodynamic instability",
      "Respiratory alkalosis"
    ],
    answer: 2,
    explanation: "Rapid removal of large volumes of ascitic fluid can cause a fluid shift from the vascular space into the peritoneal cavity, resulting in hypovolemia and hemodynamic instability. Albumin infusion is often given concurrently to prevent this."
  },
  {
    id: 57,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a suspected spinal cord injury is brought to the emergency department. The nurse's FIRST priority is to:",
    choices: [
      "Perform a complete neurological assessment",
      "Immobilize the spine and maintain cervical alignment",
      "Obtain a urine specimen for urinalysis",
      "Insert a urinary catheter to monitor urine output"
    ],
    answer: 1,
    explanation: "Immobilizing the spine and maintaining cervical alignment is the first priority to prevent further spinal cord injury. Any unnecessary movement could worsen neurological damage."
  },
  {
    id: 58,
    subject: "Medical-Surgical Nursing",
    question: "A patient with burns covering 36% of the total body surface area (TBSA) is in the emergent phase. Which IV fluid is MOST appropriate for initial resuscitation?",
    choices: [
      "5% Dextrose in water (D5W)",
      "Lactated Ringer's solution",
      "50% Dextrose solution",
      "Albumin infusion"
    ],
    answer: 1,
    explanation: "Lactated Ringer's solution (an isotonic crystalloid) is the standard IV fluid used for initial burn resuscitation per the Parkland formula. D5W is not used as it does not replace the plasma-like fluid lost in burns."
  },
  {
    id: 59,
    subject: "Medical-Surgical Nursing",
    question: "The nurse is preparing a patient for a colonoscopy. Which instruction is MOST important?",
    choices: [
      "Avoid taking any oral medications the morning of the procedure",
      "Complete the prescribed bowel preparation the day before",
      "Eat a light breakfast 2 hours before the procedure",
      "Avoid all physical activity for 24 hours before the procedure"
    ],
    answer: 1,
    explanation: "Complete bowel preparation (cleansing) is essential for a successful colonoscopy — it allows clear visualization of the colon. Incomplete prep may require the procedure to be rescheduled."
  },
  {
    id: 60,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic renal failure has a hemoglobin of 8 g/dL. The nurse anticipates which medication will be prescribed to address this?",
    choices: [
      "Iron sucrose",
      "Epoetin alfa (Erythropoietin)",
      "Vitamin B12",
      "Folic acid"
    ],
    answer: 1,
    explanation: "Anemia of chronic kidney disease is caused by decreased erythropoietin (EPO) production by the failing kidneys. Epoetin alfa (recombinant EPO) is prescribed to stimulate red blood cell production."
  },

  // ─── MATERNAL & CHILD NURSING (20 questions) ─────────────────────────────
  {
    id: 61,
    subject: "Maternal & Child Nursing",
    question: "A pregnant woman is at 28 weeks gestation. She asks the nurse when she should feel fetal movement (quickening). The nurse's BEST response is:",
    choices: [
      "Quickening is typically felt between 8–12 weeks",
      "Quickening is typically felt between 16–20 weeks",
      "Quickening typically occurs at 28 weeks",
      "Quickening occurs only in the third trimester"
    ],
    answer: 1,
    explanation: "Quickening — the mother's first perception of fetal movement — typically occurs between 16–20 weeks of gestation (earlier in multigravidas at 16 weeks, and primigravidas at around 18–20 weeks)."
  },
  {
    id: 62,
    subject: "Maternal & Child Nursing",
    question: "A laboring patient's cervix is 8 cm dilated. The nurse correctly identifies this as which phase of the first stage of labor?",
    choices: [
      "Latent phase",
      "Active phase",
      "Transition phase",
      "Second stage of labor"
    ],
    answer: 2,
    explanation: "The transition phase of the first stage of labor is characterized by cervical dilation of 8–10 cm. It is the most intense phase of labor, with strong, frequent contractions and significant discomfort."
  },
  {
    id: 63,
    subject: "Maternal & Child Nursing",
    question: "The nurse is assessing a newborn and notes a respiratory rate of 52 breaths per minute, acrocyanosis, and vigorous crying. The nurse's BEST interpretation is:",
    choices: [
      "The newborn requires immediate oxygen supplementation",
      "These are normal findings in a healthy newborn",
      "The newborn is experiencing respiratory distress",
      "Acrocyanosis indicates cardiac defect"
    ],
    answer: 1,
    explanation: "Normal newborn respiratory rate is 30–60 breaths per minute. Acrocyanosis (bluish discoloration of hands and feet) is normal in the first 24–48 hours due to immature peripheral circulation. Vigorous crying indicates good respiratory effort."
  },
  {
    id: 64,
    subject: "Maternal & Child Nursing",
    question: "A patient at 36 weeks gestation presents with painless, bright red vaginal bleeding. The nurse suspects:",
    choices: [
      "Abruptio placentae",
      "Placenta previa",
      "Threatened miscarriage",
      "Normal show of bloody mucus"
    ],
    answer: 1,
    explanation: "Placenta previa presents with painless, bright red vaginal bleeding in the third trimester. Abruptio placentae typically presents with painful, dark red bleeding. The painless nature distinguishes placenta previa."
  },
  {
    id: 65,
    subject: "Maternal & Child Nursing",
    question: "The nurse is preparing to administer erythromycin ointment to a newborn's eyes. The PRIMARY purpose of this intervention is to:",
    choices: [
      "Prevent neonatal conjunctivitis from maternal gonorrhea or chlamydia",
      "Treat viral eye infections acquired during delivery",
      "Improve the newborn's visual acuity",
      "Prevent chemical conjunctivitis from amniotic fluid"
    ],
    answer: 0,
    explanation: "Erythromycin ophthalmic ointment (prophylactic eye treatment) prevents ophthalmia neonatorum — a serious eye infection that can cause blindness — from Neisseria gonorrhoeae or Chlamydia trachomatis acquired during passage through the birth canal."
  },
  {
    id: 66,
    subject: "Maternal & Child Nursing",
    question: "A breastfeeding mother asks about positioning during feeding. Which teaching point is MOST important for preventing sore nipples?",
    choices: [
      "Feed for no longer than 10 minutes per breast",
      "Use a nipple shield during all feedings",
      "Ensure the infant has a wide latch covering most of the areola",
      "Apply cold compresses before each feeding"
    ],
    answer: 2,
    explanation: "Proper latch is the most important factor in preventing sore nipples. The infant should take in most of the areola — not just the nipple — to create an effective seal and prevent trauma to the nipple tissue."
  },
  {
    id: 67,
    subject: "Maternal & Child Nursing",
    question: "A 4-year-old child is admitted with croup. Which clinical finding MOST concerns the nurse?",
    choices: [
      "Barky, seal-like cough",
      "Low-grade fever",
      "Inspiratory stridor at rest",
      "Mild hoarseness"
    ],
    answer: 2,
    explanation: "Inspiratory stridor at rest indicates significant airway obstruction and is a sign of severe croup requiring immediate intervention. Stridor that occurs only with crying or activity is less severe."
  },
  {
    id: 68,
    subject: "Maternal & Child Nursing",
    question: "The nurse is caring for a child with sickle cell disease in vaso-occlusive crisis. Which intervention is the HIGHEST priority?",
    choices: [
      "Administer hydroxyurea",
      "Provide adequate hydration with IV fluids",
      "Apply cold packs to affected extremities",
      "Restrict physical activity"
    ],
    answer: 1,
    explanation: "Adequate hydration is the priority intervention in sickle cell vaso-occlusive crisis. IV fluids help hemodilute the blood, reduce sickling, and restore circulation. Cold packs are contraindicated as cold causes vasoconstriction and worsens sickling."
  },
  {
    id: 69,
    subject: "Maternal & Child Nursing",
    question: "A pregnant patient with pre-eclampsia has a blood pressure of 160/110 mmHg, 3+ proteinuria, and reports a headache. Which medication does the nurse prepare to administer?",
    choices: [
      "Labetalol and magnesium sulfate",
      "Furosemide and digoxin",
      "Oxytocin and nifedipine",
      "Methyldopa and aspirin"
    ],
    answer: 0,
    explanation: "Severe pre-eclampsia is managed with antihypertensives (labetalol or hydralazine) to reduce BP and magnesium sulfate to prevent eclamptic seizures. These are the standard medications in the management of severe pre-eclampsia."
  },
  {
    id: 70,
    subject: "Maternal & Child Nursing",
    question: "A newborn is born with a meningomyelocele. Which nursing intervention is the PRIORITY immediately after birth?",
    choices: [
      "Encourage the mother to hold the newborn for bonding",
      "Cover the sac with a sterile, moist non-adherent dressing",
      "Position the newborn in prone position with legs extended",
      "Assess the sac for leakage and document color"
    ],
    answer: 1,
    explanation: "The immediate priority for meningomyelocele is to cover the sac with a sterile, moist non-adherent dressing to prevent rupture, infection, and CSF leakage while awaiting surgical repair."
  },
  {
    id: 71,
    subject: "Maternal & Child Nursing",
    question: "The nurse is assessing a 6-month-old infant's developmental milestones. Which finding requires further evaluation?",
    choices: [
      "Babbling and vocalizing",
      "Able to sit with support",
      "No head control when pulled to sitting",
      "Turning head toward sounds"
    ],
    answer: 2,
    explanation: "Head control should be fully established by 4 months. A 6-month-old with no head control when pulled to a sitting position (head lag) is a significant developmental red flag requiring further neurological evaluation."
  },
  {
    id: 72,
    subject: "Maternal & Child Nursing",
    question: "A primigravida at 38 weeks asks how to tell if she is in true labor. The nurse explains that true labor is characterized by:",
    choices: [
      "Contractions that stop with walking or position change",
      "Irregular contractions that begin in the abdomen",
      "Regular contractions that increase in frequency, duration, and intensity",
      "Contractions felt mainly in the lower abdomen"
    ],
    answer: 2,
    explanation: "True labor contractions are regular, progressive, and increase in frequency, duration, and intensity over time. They are not relieved by position change or walking, and are felt from the back radiating to the front."
  },
  {
    id: 73,
    subject: "Maternal & Child Nursing",
    question: "The nurse is assessing a postpartum patient 12 hours after delivery. The uterine fundus is palpated above the umbilicus and deviated to the right. The FIRST nursing action should be to:",
    choices: [
      "Massage the uterine fundus vigorously",
      "Assist the patient to empty her bladder",
      "Notify the obstetrician immediately",
      "Increase the IV oxytocin infusion rate"
    ],
    answer: 1,
    explanation: "A uterine fundus above the umbilicus and deviated to the right indicates a full bladder displacing the uterus. The first action is to have the patient urinate — this usually corrects the fundal position and reduces the risk of uterine atony and hemorrhage."
  },
  {
    id: 74,
    subject: "Maternal & Child Nursing",
    question: "A 2-year-old child is diagnosed with Kawasaki disease. Which finding MOST distinguishes Kawasaki disease from other febrile illnesses?",
    choices: [
      "High fever for more than 5 days",
      "Bilateral non-exudative conjunctivitis",
      "Coronary artery aneurysm on echocardiogram",
      "Strawberry tongue"
    ],
    answer: 2,
    explanation: "Coronary artery aneurysm is the hallmark complication of Kawasaki disease that distinguishes it from other febrile conditions. It develops in approximately 25% of untreated children and is the primary reason for treatment with IVIG and aspirin."
  },
  {
    id: 75,
    subject: "Maternal & Child Nursing",
    question: "The nurse is preparing to administer vitamin K to a newborn. The CORRECT route is:",
    choices: [
      "Oral",
      "Subcutaneous",
      "Intramuscular into the vastus lateralis",
      "Intravenous"
    ],
    answer: 2,
    explanation: "Vitamin K1 (phytonadione) is given IM into the vastus lateralis muscle of the newborn's thigh to prevent hemorrhagic disease of the newborn (vitamin K deficiency bleeding), as newborns are born with low vitamin K stores."
  },
  {
    id: 76,
    subject: "Maternal & Child Nursing",
    question: "A pregnant woman is in her first trimester. The nurse teaches her which dietary supplement is MOST important to prevent neural tube defects?",
    choices: [
      "Iron",
      "Calcium",
      "Folic acid",
      "Vitamin D"
    ],
    answer: 2,
    explanation: "Folic acid (400–800 mcg/day) taken before conception and during the first trimester significantly reduces the risk of neural tube defects (anencephaly, spina bifida) in the developing fetus."
  },
  {
    id: 77,
    subject: "Maternal & Child Nursing",
    question: "A child with epiglottitis is brought to the emergency department. The nurse's PRIORITY intervention is to:",
    choices: [
      "Obtain a throat culture to identify the causative organism",
      "Prepare for immediate airway management",
      "Start IV antibiotics immediately",
      "Encourage oral fluid intake to prevent dehydration"
    ],
    answer: 1,
    explanation: "Epiglottitis is a life-threatening emergency. The priority is airway management — the airway can completely obstruct rapidly. No procedures that may agitate the child (including throat examination) should be done until the airway is secured."
  },
  {
    id: 78,
    subject: "Maternal & Child Nursing",
    question: "The nurse is assessing a newborn's Moro reflex. Which response indicates a NORMAL Moro reflex?",
    choices: [
      "Flexion of all limbs toward the midline",
      "Extension and abduction of arms followed by flexion and adduction",
      "Asymmetric arm movement with one side extending only",
      "No response when the infant is startled"
    ],
    answer: 1,
    explanation: "A normal Moro reflex (startle reflex) involves symmetric extension and abduction of both arms (opening of hands) followed by flexion and adduction (embracing motion). Asymmetric response may indicate brachial plexus injury or clavicle fracture."
  },
  {
    id: 79,
    subject: "Maternal & Child Nursing",
    question: "A postpartum patient is breastfeeding. She reports breast engorgement on the third postpartum day. The nurse's BEST advice is to:",
    choices: [
      "Apply cold compresses and reduce breastfeeding frequency",
      "Feed frequently and ensure complete emptying of the breast",
      "Pump and discard breast milk until engorgement resolves",
      "Apply tight breast binding to reduce milk production"
    ],
    answer: 1,
    explanation: "The most effective management of breast engorgement is frequent breastfeeding (8–12 times per day) and ensuring the breast is adequately emptied at each feeding. Applying warm compresses before feeding can help with milk let-down."
  },
  {
    id: 80,
    subject: "Maternal & Child Nursing",
    question: "The nurse is caring for a child with nephrotic syndrome. Which assessment finding is MOST expected in this condition?",
    choices: [
      "Hematuria and hypertension",
      "Massive proteinuria and generalized edema",
      "Oliguria and elevated creatinine",
      "Pyuria and positive urine culture"
    ],
    answer: 1,
    explanation: "Nephrotic syndrome is characterized by massive proteinuria (protein loss in urine), hypoalbuminemia, generalized edema (anasarca), and hyperlipidemia. Hematuria and hypertension are more characteristic of nephritic syndrome."
  },

  // ─── PSYCHIATRIC NURSING (20 questions) ──────────────────────────────────
  {
    id: 81,
    subject: "Psychiatric Nursing",
    question: "A patient with major depressive disorder states, 'Life is not worth living anymore.' The nurse's PRIORITY action is to:",
    choices: [
      "Encourage the patient to think positive thoughts",
      "Directly ask the patient about suicidal ideation",
      "Document the statement and monitor the patient",
      "Distract the patient with recreational activities"
    ],
    answer: 1,
    explanation: "When a patient makes a statement suggesting suicidal thoughts, directly asking about suicidal ideation is the priority. Research shows that asking about suicide does not plant the idea but actually opens therapeutic communication and enables appropriate intervention."
  },
  {
    id: 82,
    subject: "Psychiatric Nursing",
    question: "A patient with schizophrenia tells the nurse, 'The television is sending me special messages.' The nurse correctly identifies this as:",
    choices: [
      "Hallucination",
      "Illusion",
      "Idea of reference",
      "Thought broadcasting"
    ],
    answer: 2,
    explanation: "An idea of reference is a type of delusion where the patient believes that external events (such as TV broadcasts) have special personal significance directed specifically at them. It is a common positive symptom of schizophrenia."
  },
  {
    id: 83,
    subject: "Psychiatric Nursing",
    question: "The nurse is using therapeutic communication with a patient. Which response is an example of an open-ended question?",
    choices: [
      "'Are you feeling anxious today?'",
      "'Did you sleep well last night?'",
      "'Tell me what's been on your mind lately.'",
      "'You seem upset. Are you angry?'"
    ],
    answer: 2,
    explanation: "An open-ended question invites the patient to explore and share their thoughts freely. 'Tell me what's been on your mind lately' allows the patient to respond in any direction, unlike closed questions that limit responses to yes/no answers."
  },
  {
    id: 84,
    subject: "Psychiatric Nursing",
    question: "A patient with bipolar disorder in a manic episode is hyperactive, not eating, and sleeping only 2 hours per night. The nurse's PRIORITY intervention is to:",
    choices: [
      "Encourage group therapy participation",
      "Provide a calm, structured environment and ensure nutrition and rest",
      "Challenge the patient's grandiose beliefs",
      "Allow the patient to expend energy freely"
    ],
    answer: 1,
    explanation: "During mania, patients are at risk for physical exhaustion, dehydration, and malnutrition due to their hyperactivity and decreased self-care. The priority is maintaining physical safety by providing structured activities, high-calorie finger foods, and rest periods."
  },
  {
    id: 85,
    subject: "Psychiatric Nursing",
    question: "A patient is taking lithium for bipolar disorder. The nurse monitors for early signs of lithium toxicity, which include:",
    choices: [
      "Hypertension and bradycardia",
      "Fine hand tremors, polyuria, and nausea",
      "Elevated mood and increased energy",
      "Coarse tremors, confusion, and seizures"
    ],
    answer: 1,
    explanation: "Early signs of lithium toxicity (serum level 1.5–2.0 mEq/L) include fine hand tremors, polyuria, mild nausea, and vomiting. Coarse tremors, confusion, and seizures indicate severe toxicity. Therapeutic lithium range is 0.6–1.2 mEq/L."
  },
  {
    id: 86,
    subject: "Psychiatric Nursing",
    question: "A patient with generalized anxiety disorder (GAD) is hyperventilating. The nurse's FIRST intervention should be to:",
    choices: [
      "Administer lorazepam immediately",
      "Leave the patient alone to avoid worsening anxiety",
      "Stay with the patient and calmly guide slow, diaphragmatic breathing",
      "Apply oxygen via non-rebreather mask"
    ],
    answer: 2,
    explanation: "The first intervention for hyperventilation in anxiety is to stay with the patient (therapeutic presence) and guide slow, controlled diaphragmatic breathing to reduce respiratory alkalosis and anxiety. Medication is considered if non-pharmacological measures are insufficient."
  },
  {
    id: 87,
    subject: "Psychiatric Nursing",
    question: "A patient with anorexia nervosa has a BMI of 16. Which assessment finding requires IMMEDIATE medical attention?",
    choices: [
      "Reports feeling 'fat' despite being underweight",
      "Serum potassium of 2.8 mEq/L with irregular pulse",
      "Amenorrhea for the past 3 months",
      "Excessive exercise routine of 2 hours daily"
    ],
    answer: 1,
    explanation: "Severe hypokalemia (K+ 2.8 mEq/L) with irregular pulse indicates potentially life-threatening cardiac dysrhythmia — the most common cause of death in anorexia nervosa. This requires immediate medical intervention."
  },
  {
    id: 88,
    subject: "Psychiatric Nursing",
    question: "Which communication technique is MOST therapeutic when a patient makes a delusional statement?",
    choices: [
      "Agree with the delusion to establish rapport",
      "Argue and present facts to correct the delusion",
      "Acknowledge the patient's feelings without reinforcing or arguing the delusion",
      "Ignore the statement and redirect to another topic"
    ],
    answer: 2,
    explanation: "The therapeutic approach to delusions is to neither agree nor argue, but to acknowledge the patient's feelings ('I understand you feel frightened') while not reinforcing the content of the delusion. Arguing increases defensiveness; agreeing reinforces pathological thinking."
  },
  {
    id: 89,
    subject: "Psychiatric Nursing",
    question: "A patient receiving haloperidol develops sudden muscle rigidity, hyperthermia, and autonomic instability. The nurse suspects:",
    choices: [
      "Tardive dyskinesia",
      "Akathisia",
      "Neuroleptic malignant syndrome (NMS)",
      "Acute dystonia"
    ],
    answer: 2,
    explanation: "Neuroleptic Malignant Syndrome (NMS) is a rare but life-threatening reaction to antipsychotic medications, characterized by hyperthermia, severe muscle rigidity, altered consciousness, and autonomic instability. It requires immediate discontinuation of the medication and emergency care."
  },
  {
    id: 90,
    subject: "Psychiatric Nursing",
    question: "When using motivational interviewing with a patient who abuses alcohol, the nurse demonstrates this approach by:",
    choices: [
      "Telling the patient the consequences of continued alcohol use",
      "Asking the patient to explain the reasons they want to change",
      "Confronting the patient about their denial",
      "Setting strict rules about the patient's alcohol intake"
    ],
    answer: 1,
    explanation: "Motivational interviewing is a patient-centered approach that elicits the patient's own reasons and motivation for change. Asking open-ended questions about their desire to change empowers the patient rather than confronting or lecturing."
  },
  {
    id: 91,
    subject: "Psychiatric Nursing",
    question: "The nurse is applying physical restraints to an agitated patient as a last resort. Which action is MOST important?",
    choices: [
      "Restrain all four limbs tightly for maximum safety",
      "Explain the reason for restraint to the patient before applying",
      "Apply restraints without explanation to avoid worsening agitation",
      "Assess restrained extremities every 4 hours"
    ],
    answer: 1,
    explanation: "Before applying restraints, the nurse must explain the reason for the restraint to the patient. This is an ethical and legal requirement. Restrained extremities must be assessed every 15–30 minutes (not 4 hours) for circulation, sensation, and movement."
  },
  {
    id: 92,
    subject: "Psychiatric Nursing",
    question: "A patient with obsessive-compulsive disorder (OCD) performs hand-washing rituals for 3 hours daily. The nurse's BEST approach is to:",
    choices: [
      "Strictly prevent all hand-washing rituals",
      "Allow the rituals while gradually working to reduce their frequency",
      "Ignore the behavior to avoid reinforcing it",
      "Encourage the patient to explain why they wash their hands"
    ],
    answer: 1,
    explanation: "Abruptly stopping compulsive rituals causes extreme anxiety. The therapeutic approach is to allow rituals initially while collaborating with the patient to gradually reduce their frequency and duration, often through Exposure and Response Prevention (ERP) therapy."
  },
  {
    id: 93,
    subject: "Psychiatric Nursing",
    question: "A patient with post-traumatic stress disorder (PTSD) is experiencing a flashback in the hospital. The nurse's FIRST action should be to:",
    choices: [
      "Leave the patient alone to avoid overwhelming them",
      "Restrain the patient to prevent injury",
      "Speak calmly, orient the patient to present reality, and ensure safety",
      "Administer a sedative immediately"
    ],
    answer: 2,
    explanation: "During a flashback, the priority is to keep the patient safe and oriented to present reality. Speaking calmly, using the patient's name, and orienting them to their current environment (grounding techniques) are first-line interventions."
  },
  {
    id: 94,
    subject: "Psychiatric Nursing",
    question: "The nurse is planning discharge teaching for a patient prescribed sertraline (an SSRI). Which instruction is MOST important?",
    choices: [
      "Expect full therapeutic effects within 24–48 hours",
      "Stop the medication immediately if side effects occur",
      "Take the medication consistently and do not stop abruptly",
      "Avoid all dairy products while taking the medication"
    ],
    answer: 2,
    explanation: "SSRIs should not be stopped abruptly, as this causes SSRI discontinuation syndrome (dizziness, flu-like symptoms, anxiety). It takes 2–6 weeks for full therapeutic effect. Patients should be taught to taper the medication under physician guidance if discontinuing."
  },
  {
    id: 95,
    subject: "Psychiatric Nursing",
    question: "In the nurse-patient therapeutic relationship, which phase involves terminating the relationship and evaluating goal achievement?",
    choices: [
      "Pre-interaction phase",
      "Orientation phase",
      "Working phase",
      "Termination phase"
    ],
    answer: 3,
    explanation: "The termination phase is the final phase of the therapeutic nurse-patient relationship. It involves reviewing progress toward goals, addressing separation feelings, and reinforcing the patient's independence and coping skills."
  },
  {
    id: 96,
    subject: "Psychiatric Nursing",
    question: "A nurse on a psychiatric unit notices a colleague administering a patient's medications without documentation. The nurse's FIRST action should be to:",
    choices: [
      "Report the colleague directly to the nursing board",
      "Ignore the incident to avoid conflict",
      "Approach the colleague privately and address the concern",
      "Write an incident report immediately without speaking to the colleague"
    ],
    answer: 2,
    explanation: "The first action in a collegial concern is to address it directly and privately with the colleague — following the principle of non-maleficence and professional accountability. If the behavior continues or is unsafe, formal reporting through proper channels is required."
  },
  {
    id: 97,
    subject: "Psychiatric Nursing",
    question: "A patient with borderline personality disorder says to the nurse, 'You're the only one who understands me. The other nurses are terrible.' This is an example of:",
    choices: [
      "Transference",
      "Countertransference",
      "Splitting",
      "Projection"
    ],
    answer: 2,
    explanation: "Splitting is a primitive defense mechanism common in borderline personality disorder where individuals view people or situations as all good or all bad. Alternating between idealization and devaluation of caregivers is a characteristic presentation."
  },
  {
    id: 98,
    subject: "Psychiatric Nursing",
    question: "A patient is admitted for alcohol withdrawal. Which medication does the nurse anticipate will be prescribed to prevent seizures?",
    choices: [
      "Haloperidol",
      "Diazepam (benzodiazepine)",
      "Lithium carbonate",
      "Fluoxetine"
    ],
    answer: 1,
    explanation: "Benzodiazepines (diazepam, lorazepam, chlordiazepoxide) are the standard treatment for alcohol withdrawal to prevent seizures and delirium tremens. They work by depressing the CNS and are cross-tolerant with alcohol."
  },
  {
    id: 99,
    subject: "Psychiatric Nursing",
    question: "The nurse is assessing a patient for suicide risk. Which factor indicates the HIGHEST risk?",
    choices: [
      "Having passive thoughts of death without a plan",
      "A specific, lethal plan with access to the means",
      "Expressing sadness and crying during the interview",
      "History of a single episode of depression"
    ],
    answer: 1,
    explanation: "Having a specific, lethal suicide plan with access to the means (e.g., a loaded gun) represents the highest level of suicide risk and requires immediate safety intervention. A plan with means and intent dramatically increases the risk of a completed suicide attempt."
  },
  {
    id: 100,
    subject: "Psychiatric Nursing",
    question: "Which statement BEST describes the ethical principle of 'beneficence' in psychiatric nursing?",
    choices: [
      "Respecting the patient's right to make their own decisions",
      "Treating all patients equally and fairly",
      "Acting in the patient's best interest and promoting their well-being",
      "Avoiding actions that cause harm to the patient"
    ],
    answer: 2,
    explanation: "Beneficence means acting in the best interest of the patient and promoting their well-being. Non-maleficence means avoiding harm; autonomy means respecting decisions; justice means fairness and equal treatment."
  }

];
