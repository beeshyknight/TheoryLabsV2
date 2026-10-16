// tslint:disable
/* eslint-disable */
export const DISCIPLINE_COLORS = {
    'Psychology': {
        bg: 'from-teal-900/90 to-emerald-950/90',
        border: 'border-teal-500',
        text: 'text-teal-300',
        lightBg: 'bg-teal-950/70',
        badge: 'bg-teal-800 text-teal-100 border border-teal-400',
    },
    'Sociology': {
        bg: 'from-amber-900/90 to-orange-950/90',
        border: 'border-amber-500',
        text: 'text-amber-300',
        lightBg: 'bg-amber-950/70',
        badge: 'bg-amber-800 text-amber-100 border border-amber-400',
    },
    'Nursing': {
        bg: 'from-emerald-900/90 to-green-950/90',
        border: 'border-emerald-500',
        text: 'text-emerald-300',
        lightBg: 'bg-emerald-950/70',
        badge: 'bg-emerald-800 text-emerald-100 border border-emerald-400',
    },
    'Social Work': {
        bg: 'from-purple-900/90 to-violet-950/90',
        border: 'border-purple-500',
        text: 'text-purple-300',
        lightBg: 'bg-purple-950/70',
        badge: 'bg-purple-800 text-purple-100 border border-purple-400',
    },
    'Public Health': {
        bg: 'from-cyan-900/90 to-blue-950/90',
        border: 'border-cyan-500',
        text: 'text-cyan-300',
        lightBg: 'bg-cyan-950/70',
        badge: 'bg-cyan-800 text-cyan-100 border border-cyan-400',
    },
    'Disability & Inclusion': {
        bg: 'from-yellow-900/90 to-amber-950/90',
        border: 'border-yellow-500',
        text: 'text-yellow-300',
        lightBg: 'bg-yellow-950/70',
        badge: 'bg-yellow-800 text-yellow-100 border border-yellow-400',
    },
    'Communication': {
        bg: 'from-sky-900/90 to-indigo-950/90',
        border: 'border-sky-500',
        text: 'text-sky-300',
        lightBg: 'bg-sky-950/70',
        badge: 'bg-sky-800 text-sky-100 border border-sky-400',
    },
    'Systems Theory': {
        bg: 'from-indigo-900/90 to-slate-950/90',
        border: 'border-indigo-500',
        text: 'text-indigo-300',
        lightBg: 'bg-indigo-950/70',
        badge: 'bg-indigo-800 text-indigo-100 border border-indigo-400',
    },
    'Ethics & Human Rights': {
        bg: 'from-rose-900/90 to-pink-950/90',
        border: 'border-rose-500',
        text: 'text-rose-300',
        lightBg: 'bg-rose-950/70',
        badge: 'bg-rose-800 text-rose-100 border border-rose-400',
    },
    'Education & Learning': {
        bg: 'from-lime-900/90 to-teal-950/90',
        border: 'border-lime-500',
        text: 'text-lime-300',
        lightBg: 'bg-lime-950/70',
        badge: 'bg-lime-800 text-lime-100 border border-lime-400',
    },
};
export const DISCIPLINE_ASSET_ICONS = {
    'Psychology': 'icon_psychology',
    'Sociology': 'icon_sociology',
    'Nursing': 'icon_nursing',
    'Social Work': 'icon_social_work',
    'Public Health': 'icon_public_health',
    'Disability & Inclusion': 'icon_disability_inclusion',
    'Communication': 'icon_communication',
    'Systems Theory': 'icon_systems',
};
// ============================================================================
// COMPREHENSIVE THEORIES POOL WITH COMPLETE APA 7TH EDITION CITATIONS
// ============================================================================
export const ALL_THEORY_CARDS = [
    // --- Starter Theories ---
    {
        id: 'carl_rogers',
        title: 'Person-Centred Practice',
        discipline: 'Psychology',
        theorist: 'Carl Rogers (1951)',
        seminalYear: 1951,
        inTextCitation: '(Rogers, 1951)',
        apa7Reference: 'Rogers, C. R. (1951). Client-centered therapy: Its current practice, implications and theory. Constable & Robinson.',
        keyPublications: [
            'Rogers, C. R. (1957). The necessary and sufficient conditions of therapeutic personality change. Journal of Consulting Psychology, 21(2), 95–103. https://doi.org/10.1037/h0045357',
            'Tudor, K., & Worrall, M. (2006). Person-centred therapy: A contemporary approach. Palgrave Macmillan.',
        ],
        academicDisciplineNotes: 'Foundational humanistic psychology model; establishes that therapeutic growth requires congruence, unconditional positive regard, and accurate empathic understanding.',
        concept: 'Unconditional positive regard, empathic attunement, and congruence catalyse self-actualisation and personal agency.',
        strength: 'Creates a warm, non-judgmental holding space that centres the person’s authentic lived truth.',
        limitation: 'May overlook structural oppression, severe psychosis, or urgent safeguarding crises without wider systemic support.',
        baseInsight: 25,
        baseApplication: 1.3,
        capacityCost: 2,
        rarity: 'Starter',
        tags: ['Person-Centred', 'Relational', 'Humanistic', 'Empathy', 'Agency'],
        practicalApplication: 'Establish an unhurried, warm atmosphere where the client defines their priorities rather than filling clinical checklists.',
        practitionerQuestions: [
            'What feels most important for us to focus on together today?',
            'How have you been making sense of everything you have been carrying recently?',
        ],
        relationalStance: 'Warm, authentic, non-authoritarian companion offering unconditional positive regard.',
        pitfalls: 'Assuming empathy alone solves material poverty, eviction notices, or acute somatic emergencies.',
    },
    {
        id: 'bronfenbrenner',
        title: 'Ecological Systems Theory',
        discipline: 'Systems Theory',
        theorist: 'Urie Bronfenbrenner (1979)',
        seminalYear: 1979,
        inTextCitation: '(Bronfenbrenner, 1979)',
        apa7Reference: 'Bronfenbrenner, U. (1979). The ecology of human development: Experiments by nature and design. Harvard University Press.',
        keyPublications: [
            'Bronfenbrenner, U., & Morris, P. A. (2006). The bioecological model of human development. In R. M. Lerner & W. Damon (Eds.), Handbook of child psychology: Theoretical models of human development (6th ed., Vol. 1, pp. 793–828). John Wiley & Sons.',
            'Rosa, E. M., & Tudge, J. (2013). Urie Bronfenbrenner’s theory of human development: Its evolution from ecology to bioecology. Journal of Family Theory & Review, 5(4), 243–258. https://doi.org/10.1111/jftr.12022',
        ],
        academicDisciplineNotes: 'Seminal developmental systems framework mapping the nested environments (microsystem, mesosystem, exosystem, macrosystem, chronosystem) that influence human lifecourses.',
        concept: 'Human development unfolds dynamically across micro, meso, exo, macro, and chrono environmental ecosystems.',
        strength: 'Maps how neighbourhood fabric, public policy, institutional cultures, and wider economic pressures impinge upon personal distress.',
        limitation: 'Can become overly complex and diffuse immediate clinical safeguarding priorities.',
        baseInsight: 35,
        baseApplication: 1.4,
        capacityCost: 3,
        rarity: 'Starter',
        tags: ['Systems', 'Environmental', 'Ecological', 'Context', 'Structural'],
        practicalApplication: 'Construct an eco-map with the service user, identifying nourishing networks alongside draining institutional friction.',
        practitionerQuestions: [
            'Looking at your daily world—housing, family, local services—where does the pressure build most heavily?',
            'Who or what in your neighbourhood offers even a small pocket of genuine relief or understanding?',
        ],
        relationalStance: 'Contextual cartographer mapping human lives within dynamic social ecosystems.',
        pitfalls: 'Getting lost in endless ecological diagrams whilst the client remains in urgent immediate distress.',
    },
    {
        id: 'social_model_disability',
        title: 'Social Model of Disability',
        discipline: 'Disability & Inclusion',
        theorist: 'Mike Oliver (1990) & UPIAS (1976)',
        seminalYear: 1990,
        inTextCitation: '(Oliver, 1990; UPIAS, 1976)',
        apa7Reference: 'Oliver, M. (1990). The politics of disablement. Macmillan Education.',
        keyPublications: [
            'Union of the Physically Impaired Against Segregation [UPIAS]. (1976). Fundamental principles of disability. UPIAS.',
            'Shakespeare, T. (2013). Disability rights and wrongs revisited (2nd ed.). Routledge. https://doi.org/10.4324/9781315887456',
            'Oliver, M. (2013). The social model of disability: Thirty years on. Disability & Society, 28(7), 1024–1026. https://doi.org/10.1080/09687599.2013.818773',
        ],
        academicDisciplineNotes: 'A transformative socio-political framework originating from disabled activists, distinguishing physiological impairment from socially constructed disability and exclusionary barriers.',
        concept: 'People are disabled by environmental, institutional, and attitudinal barriers, rather than by individual bodily impairments.',
        strength: 'Transforms practice from "fixing defective individuals" to removing structural and societal barriers with dignity.',
        limitation: 'May downplay the subjective physical discomfort and fatigue that can accompany clinical impairments.',
        baseInsight: 40,
        baseApplication: 1.5,
        capacityCost: 3,
        rarity: 'Starter',
        tags: ['Disability', 'Inclusion', 'Barriers', 'Advocacy', 'Structural', 'Rights'],
        practicalApplication: 'Audit physical, sensory, and procedural environments; identify institutional adjustments rather than pathologising coping.',
        practitionerQuestions: [
            'What obstacles in this environment or organisation are making things harder for you right now?',
            'What reasonable adjustments would give you equal access and genuine peace of mind here?',
        ],
        relationalStance: 'Structural ally committed to dismantling disabling environmental and procedural barriers.',
        pitfalls: 'Ignoring somatic pain or medical management needs by framing everything purely through social oppression.',
    },
    {
        id: 'biopsychosocial',
        title: 'Biopsychosocial Formulation',
        discipline: 'Nursing',
        theorist: 'George L. Engel (1977)',
        seminalYear: 1977,
        inTextCitation: '(Engel, 1977)',
        apa7Reference: 'Engel, G. L. (1977). The need for a new medical model: A challenge for biomedicine. Science, 196(4286), 129–136. https://doi.org/10.1126/science.847460',
        keyPublications: [
            'Borrell-Carrió, F., Suchman, A. L., & Epstein, R. M. (2004). The biopsychosocial model 25 years later: Principles, practice, and scientific inquiry. Annals of Family Medicine, 2(6), 576–582. https://doi.org/10.1370/afm.245',
            'Wade, D. T., & Halligan, P. W. (2017). The biopsychosocial model of illness: A model whose time has come. Clinical Rehabilitation, 31(8), 995–1004. https://doi.org/10.1177/0269215517709890',
        ],
        academicDisciplineNotes: 'A seminal paradigm in medicine and clinical nursing challenging biological reductionism by integrating biological, psychological, and social dimensions of illness.',
        concept: 'Health and illness emerge from a dynamic interplay between physiological biology, psychological factors, and social circumstances.',
        strength: 'Bridges somatic medicine with emotional well-being and community support contexts.',
        limitation: 'Practitioners can struggle to prioritise clinical interventions when all dimensions carry equal weight.',
        baseInsight: 30,
        baseApplication: 1.4,
        capacityCost: 3,
        rarity: 'Starter',
        tags: ['Biological', 'Health', 'Integrative', 'Holistic'],
        practicalApplication: 'Integrate physical symptom reviews, emotional impact exploration, and living conditions into a single unified care plan.',
        practitionerQuestions: [
            'How is your physical body responding to the emotional stress and daily living pressures you face?',
            'Which area—your physical health, your emotional space, or your living situation—needs our first step today?',
        ],
        relationalStance: 'Holistic clinical synthesiser balancing somatic biology with emotional and social lifeworlds.',
        pitfalls: 'Treating the three domains as detached parallel silos without examining their circular interactions.',
    },
    {
        id: 'anti_oppressive',
        title: 'Anti-Oppressive Practice',
        discipline: 'Social Work',
        theorist: 'Lena Dominelli (2002)',
        seminalYear: 2002,
        inTextCitation: '(Dominelli, 2002)',
        apa7Reference: 'Dominelli, L. (2002). Anti-oppressive social work theory and practice. Palgrave Macmillan.',
        keyPublications: [
            'Baines, D. (Ed.). (2017). Doing anti-oppressive practice: Social justice social work (3rd ed.). Fernwood Publishing.',
            'Thompson, N. (2020). Promoting equality: Working with diversity and difference (4th ed.). Palgrave Macmillan.',
        ],
        academicDisciplineNotes: 'Core social work framework examining personal, cultural, and structural (PCS) power hierarchies and social inequalities to promote social justice.',
        concept: 'Examines and challenges structural power imbalances, institutional discrimination, systemic bias, and privilege across care services.',
        strength: 'Exposes how service hierarchies, institutional racism, and economic deprivation marginalise service users.',
        limitation: 'Can generate friction within bureaucratic management structures or paralyse immediate practical support steps.',
        baseInsight: 35,
        baseApplication: 1.4,
        capacityCost: 3,
        rarity: 'Starter',
        tags: ['Power', 'Inequality', 'Social Justice', 'Advocacy', 'Structural'],
        practicalApplication: 'Interrogate statutory power imbalances, demystify institutional paperwork, and co-create transparent advocacy positions.',
        practitionerQuestions: [
            'How have previous interactions with authority figures or statutory services felt for you?',
            'How can we ensure you retain full control over every decision made in this room?',
        ],
        relationalStance: 'Self-reflective advocate actively questioning institutional privilege and professional hierarchies.',
        pitfalls: 'Adopting intellectualised political rhetoric without delivering tangible, practical day-to-day relief.',
    },
    {
        id: 'maslow_hierarchy',
        title: 'Hierarchy of Human Needs',
        discipline: 'Psychology',
        theorist: 'Abraham Maslow (1943)',
        seminalYear: 1943,
        inTextCitation: '(Maslow, 1943)',
        apa7Reference: 'Maslow, A. H. (1943). A theory of human motivation. Psychological Review, 50(4), 370–396. https://doi.org/10.1037/h0054346',
        keyPublications: [
            'Maslow, A. H. (1970). Motivation and personality (2nd ed.). Harper & Row.',
            'Kaufman, S. B. (2020). Transcend: The new science of self-actualization. TarcherPerigee.',
        ],
        academicDisciplineNotes: 'Foundational humanistic theory conceptualising human motivation across physiological, safety, love/belonging, esteem, and self-actualisation tiers.',
        concept: 'Fundamental physiological stability and safety needs must be secured before higher personal growth and self-actualisation can take root.',
        strength: 'Prioritises baseline physical safety, warm housing, and nourishment during acute crisis intervention.',
        limitation: 'Human motivation is rarely strictly linear; creative and relational expression frequently persists amidst severe hardship.',
        baseInsight: 25,
        baseApplication: 1.2,
        capacityCost: 2,
        rarity: 'Starter',
        tags: ['Needs', 'Humanistic', 'Stabilisation', 'Safety'],
        practicalApplication: 'Assess immediate food, warmth, physical safety, and shelter before attempting intensive psychological restructuring.',
        practitionerQuestions: [
            'Are your basic everyday needs—food, warmth, a safe bed—secure right now?',
            'What immediate physical comfort or safety measure would help you feel more grounded today?',
        ],
        relationalStance: 'Pragmatic, compassionate grounder ensuring essential survival foundations are secure.',
        pitfalls: 'Refusing to listen to a client’s deeper identity, dreams, or relational aspirations until all material needs are perfect.',
    },
    {
        id: 'dahlgren_whitehead',
        title: 'Social Determinants of Health',
        discipline: 'Public Health',
        theorist: 'Göran Dahlgren & Margaret Whitehead (1991)',
        seminalYear: 1991,
        inTextCitation: '(Dahlgren & Whitehead, 1991)',
        apa7Reference: 'Dahlgren, G., & Whitehead, M. (1991). Policies and strategies to promote social equity in health. Institute for Futures Studies.',
        keyPublications: [
            'Marmot, M. (2020). Health equity in England: The Marmot Review 10 years on. Institute of Health Equity.',
            'World Health Organization. (2008). Closing the gap in a generation: Health equity through action on the social determinants of health. World Health Organization.',
        ],
        academicDisciplineNotes: 'The rainbow model of public health illustrating how individual lifestyle factors are surrounded by social and community networks and socioeconomic/environmental living conditions.',
        concept: 'Living conditions, adequate housing, clean environments, fair wages, and transport networks drive over 80% of health outcomes.',
        strength: 'Demonstrates why clinical treatments falter when the surrounding social fabric remains unsafe or impoverished.',
        limitation: 'Interventions often demand macro political investment beyond the immediate purview of frontline practitioners.',
        baseInsight: 35,
        baseApplication: 1.4,
        capacityCost: 3,
        rarity: 'Starter',
        tags: ['Social Determinants', 'Public Health', 'Structural', 'Inequality', 'Environment'],
        practicalApplication: 'Link clinical care directly to social prescribing, fuel vouchers, housing advocacy, and debt advisory services.',
        practitionerQuestions: [
            'How are your current living conditions, heating, and income affecting your physical and mental stamina?',
            'If we could connect you with community or financial support, which area would ease the heaviest load?',
        ],
        relationalStance: 'Community-connected practitioner addressing upstream socioeconomic causes of ill health.',
        pitfalls: 'Viewing socioeconomic deprivation with fatalism rather than connecting the client to community resources.',
    },
    {
        id: 'active_listening',
        title: 'Active Listening & Attunement',
        discipline: 'Communication',
        theorist: 'Gerard Egan (1975)',
        seminalYear: 1975,
        inTextCitation: '(Egan & Reese, 2018)',
        apa7Reference: 'Egan, G., & Reese, R. J. (2018). The skilled helper: A problem-management and opportunity-development approach to helping (11th ed.). Cengage Learning.',
        keyPublications: [
            'Ivey, A. E., Ivey, M. B., & Zalaquett, C. P. (2018). Intentional interviewing and counseling: Facilitating client development in a multicultural society (9th ed.). Cengage Learning.',
            'Rogers, C. R., & Farson, R. E. (1957). Active listening. Industrial Relations Center, University of Chicago.',
        ],
        academicDisciplineNotes: 'A structured micro-counselling model detailing SOLER non-verbal presence, empathic paraphrasing, and non-judgmental containment.',
        concept: 'Attentive posture, gentle reflection, accurate paraphrasing, and non-verbal pacing establish relational safety and trust.',
        strength: 'Promptly de-escalates emotional defensiveness and reassures the individual that they are genuinely understood.',
        limitation: 'Insufficient on its own to resolve deep-seated systemic deficits or complex historical trauma.',
        baseInsight: 20,
        baseApplication: 1.3,
        capacityCost: 2,
        rarity: 'Starter',
        tags: ['Communication', 'Relational', 'Trust', 'Empathy'],
        practicalApplication: 'Reflect the emotional undertones behind client words, validate unspoken fatigue, and pace dialogue respectfully.',
        practitionerQuestions: [
            'If I am hearing you correctly, it sounds like you felt completely dismissed when that happened... is that right?',
            'Take all the time you need; there is no rush to explain everything at once.',
        ],
        relationalStance: 'Attentive, gentle listener offering quiet relational containment and pacing.',
        pitfalls: 'Relying on mechanical paraphrasing without deeper clinical enquiry or tangible casework follow-through.',
    },
    // --- Core / Advanced Repertoire Pool ---
    {
        id: 'bowlby_attachment',
        title: 'Attachment & Internal Working Models',
        discipline: 'Psychology',
        theorist: 'John Bowlby (1969) & Mary Ainsworth (1978)',
        seminalYear: 1969,
        inTextCitation: '(Bowlby, 1969; Ainsworth et al., 1978)',
        apa7Reference: 'Bowlby, J. (1969). Attachment and loss: Vol. 1. Attachment. Basic Books.',
        keyPublications: [
            'Ainsworth, M. D. S., Blehar, M. C., Waters, E., & Wall, S. (1978). Patterns of attachment: A psychological study of the strange situation. Lawrence Erlbaum Associates.',
            'Holmes, J. (2014). John Bowlby and attachment theory (2nd ed.). Routledge. https://doi.org/10.4324/9781315754673',
            'Mikulincer, M., & Shaver, P. R. (2016). Attachment in adulthood: Structure, dynamics, and change (2nd ed.). Guilford Press.',
        ],
        academicDisciplineNotes: 'Evolutionary developmental psychology framework linking early caregiving responsiveness to secure, anxious, avoidant, or disorganised attachment styles.',
        concept: 'Early relational bonds form durable internal working models of interpersonal safety, trust, and emotional regulation.',
        strength: 'Illuminates relational withdrawal, fear of abandonment, and why individuals may distrust well-meaning practitioners.',
        limitation: 'Risks pathologising dedicated parents or adopting deterministic views of developmental resilience.',
        baseInsight: 45,
        baseApplication: 1.6,
        capacityCost: 3,
        rarity: 'Core',
        tags: ['Attachment', 'Relational', 'Trauma', 'Development', 'Safety'],
        practicalApplication: 'Provide consistent, predictable appointment rhythms and transparent communication to foster a secure relational base.',
        practitionerQuestions: [
            'When things get overwhelming, is your natural instinct to reach out to others or to pull away and handle it alone?',
            'How can we make our working relationship feel reliable and predictable for you?',
        ],
        relationalStance: 'Consistent, non-abandoning relational anchor providing a secure base.',
        pitfalls: 'Labeling clients as "insecurely attached" in case notes rather than adapting one’s own relational reliability.',
    },
    {
        id: 'trauma_informed',
        title: 'Trauma-Informed Practice',
        discipline: 'Social Work',
        theorist: 'Judith Herman (1992) & Sandra Bloom (2013)',
        seminalYear: 1992,
        inTextCitation: '(Herman, 1992; Bloom, 2013)',
        apa7Reference: 'Herman, J. L. (1992). Trauma and recovery: The aftermath of violence—from domestic abuse to political terror. Basic Books.',
        keyPublications: [
            'Bloom, S. L. (2013). Creating sanctuary: Toward the evolution of sane societies (Rev. ed.). Routledge. https://doi.org/10.4324/9780203875322',
            'Substance Abuse and Mental Health Services Administration. (2014). SAMHSA’s concept of trauma and guidance for a trauma-informed approach (HHS Publication No. SMA 14-4884). SAMHSA.',
        ],
        academicDisciplineNotes: 'A trauma-informed clinical model based on safety, trustworthiness, peer support, collaboration, empowerment, and cultural humility.',
        concept: 'Shifts the question from "What is wrong with you?" to "What happened to you?", prioritising emotional and physical safety to avoid re-traumatisation.',
        strength: 'Centres predictability, transparent collaboration, client control, and somatic nervous system regulation.',
        limitation: 'Requires whole-organisation commitment; staff fatigue can inadvertently compromise therapeutic containment.',
        baseInsight: 50,
        baseApplication: 1.7,
        capacityCost: 3,
        rarity: 'Core',
        tags: ['Trauma', 'Safety', 'Relational', 'Empowerment', 'Somatic'],
        practicalApplication: 'Offer choices at every stage, explain why questions are being asked, and maintain transparent casework boundaries.',
        practitionerQuestions: [
            'What helps you feel safest and most in control during our conversations?',
            'If anything we discuss begins to feel overwhelming, please let me know so we can pause immediately.',
        ],
        relationalStance: 'Trauma-sensitive collaborator prioritising client choice, agency, and autonomic safety.',
        pitfalls: 'Interrogating traumatic memories prematurely before establishing autonomic grounding and safety.',
    },
    {
        id: 'compassion_focused',
        title: 'Compassion-Focused Therapy (CFT)',
        discipline: 'Psychology',
        theorist: 'Paul Gilbert (2009)',
        seminalYear: 2009,
        inTextCitation: '(Gilbert, 2009)',
        apa7Reference: 'Gilbert, P. (2009). The compassionate mind: A new approach to life’s challenges. Constable & Robinson.',
        keyPublications: [
            'Gilbert, P. (2014). The origins and nature of compassion focused therapy. British Journal of Clinical Psychology, 53(1), 6–41. https://doi.org/10.1111/bjc.12043',
            'Kolts, R. L. (2016). CFT made simple: A clinician’s guide to practicing compassion-focused therapy. New Harbinger Publications.',
        ],
        academicDisciplineNotes: 'Integrates evolutionary psychology, neurobiology, attachment theory, and CBT to balance threat, drive, and soothing affect systems.',
        concept: 'Balances the threat, drive, and soothing affect-regulation systems through compassionate self-correction and soothing rhythm breathing.',
        strength: 'Highly effective for individuals carrying debilitating internalised shame and harsh self-critical inner dialogues.',
        limitation: 'Clients experiencing intense developmental trauma may initially experience soothing as threatening or unfamiliar.',
        baseInsight: 50,
        baseApplication: 1.7,
        capacityCost: 3,
        rarity: 'Core',
        tags: ['Compassion', 'Shame', 'Regulation', 'Psychology', 'Relational'],
        practicalApplication: 'Guide soothing rhythm breathing and compassion-focused dialogues to soothe hyperactive threat systems.',
        practitionerQuestions: [
            'If someone you deeply cared about were in your exact shoes, what kind words would you offer them?',
            'Can we notice that harsh inner critic with gentleness, acknowledging how hard your brain has been trying to protect you?',
        ],
        relationalStance: 'Warm, soothing mentor helping calibrate internal threat and soothing systems.',
        pitfalls: 'Forcing self-compassion exercises on clients with fear of compassion before deconstructing threat triggers.',
    },
    {
        id: 'dialectical_behaviour',
        title: 'Dialectical Behaviour Therapy (DBT)',
        discipline: 'Psychology',
        theorist: 'Marsha Linehan (1993)',
        seminalYear: 1993,
        inTextCitation: '(Linehan, 1993)',
        apa7Reference: 'Linehan, M. M. (1993). Cognitive-behavioral treatment of borderline personality disorder. Guilford Press.',
        keyPublications: [
            'Linehan, M. M. (2014). DBT skills training manual (2nd ed.). Guilford Press.',
            'Swales, M. A., & Heard, H. L. (2017). Dialectical behaviour therapy: Distinctive features (2nd ed.). Routledge. https://doi.org/10.4324/9781315745480',
        ],
        academicDisciplineNotes: 'A synthesis of behavioural science, cognitive restructuring, and Zen dialectical philosophy resolving the tension between radical acceptance and active change.',
        concept: 'Synthesises radical acceptance and behavioural change across mindfulness, distress tolerance, and interpersonal effectiveness.',
        strength: 'Offers practical, concrete crisis-survival strategies during intense affective storms and overwhelming emotional pain.',
        limitation: 'Can become overly rigid or manualised if applied without genuine human warmth and empathy.',
        baseInsight: 45,
        baseApplication: 1.6,
        capacityCost: 2,
        rarity: 'Core',
        tags: ['Cognitive', 'Behavioural', 'Regulation', 'Mindfulness', 'Stabilisation'],
        practicalApplication: 'Teach practical grounding and distress tolerance skills (e.g. TIPP, STOP technique) to survive intense emotional peaks.',
        practitionerQuestions: [
            'When emotional pain surges to a 9 or 10 out of 10, what sensory grounding tool can keep you safe in that moment?',
            'How can we hold space for both accepting how hard this is AND working towards small manageable changes?',
        ],
        relationalStance: 'Dialectical balance: radically accepting current pain while coaching practical coping skills.',
        pitfalls: 'Turning skills training into rigid homework checklists that make the client feel judged.',
    },
    {
        id: 'cbt_beck',
        title: 'Cognitive Behavioural Therapy',
        discipline: 'Psychology',
        theorist: 'Aaron T. Beck (1976)',
        seminalYear: 1976,
        inTextCitation: '(Beck, 1976; Beck, 2020)',
        apa7Reference: 'Beck, A. T. (1976). Cognitive therapy and the emotional disorders. International Universities Press.',
        keyPublications: [
            'Beck, J. S. (2020). Cognitive behavior therapy: Basics and beyond (3rd ed.). Guilford Press.',
            'Beck, A. T., Rush, A. J., Shaw, B. F., & Emery, G. (1979). Cognitive therapy of depression. Guilford Press.',
        ],
        academicDisciplineNotes: 'Empirically supported psychological framework linking automatic thoughts, cognitive biases, core schemas, emotions, and behavioral responses.',
        concept: 'Identifies cognitive distortions and negative automatic thoughts to restructure emotional and behavioural patterns.',
        strength: 'Structured, evidence-informed collaborative framework for testing catastrophic interpretations and building adaptive coping.',
        limitation: 'Can individualise systemic hardship if a practitioner urges a client in deep poverty to simply "reframe their mindset".',
        baseInsight: 35,
        baseApplication: 1.4,
        capacityCost: 2,
        rarity: 'Core',
        tags: ['Cognitive', 'Behavioural', 'Reframing', 'Structured'],
        practicalApplication: 'Collaboratively examine unhelpful thinking patterns (e.g. catastrophising) and design gentle behavioural experiments.',
        practitionerQuestions: [
            'What thought automatically crossed your mind right before the anxiety spiked?',
            'Is there another way of looking at this situation that might be a little fairer to you?',
        ],
        relationalStance: 'Empirical collaborator engaged in gentle guided discovery and behavioral experimentation.',
        pitfalls: 'Telling someone in an uninhabitable damp flat that their depression is merely a "cognitive distortion".',
    },
    {
        id: 'narrative_therapy',
        title: 'Narrative Therapy & Externalisation',
        discipline: 'Psychology',
        theorist: 'Michael White & David Epston (1990)',
        seminalYear: 1990,
        inTextCitation: '(White & Epston, 1990)',
        apa7Reference: 'White, M., & Epston, D. (1990). Narrative means to therapeutic ends. W. W. Norton & Company.',
        keyPublications: [
            'White, M. (2007). Maps of narrative practice. W. W. Norton & Company.',
            'Morgan, A. (2000). What is narrative therapy? An easy-to-read introduction. Dulwich Centre Publications.',
        ],
        academicDisciplineNotes: 'Post-structuralist therapeutic modality separating people from problems through externalising language and re-authoring identity narratives.',
        concept: '"The person is not the problem; the problem is the problem." Externalising conversations deconstruct dominant problem-saturated stories.',
        strength: 'Frees individuals from internalised deficit labels and uncovers subordinate storylines of courage, values, and preferred identity.',
        limitation: 'Requires reflective linguistic agility; may require creative adaptations for clients with cognitive or language barriers.',
        baseInsight: 55,
        baseApplication: 1.7,
        capacityCost: 3,
        rarity: 'Advanced',
        tags: ['Narrative', 'Deconstruction', 'Identity', 'Reframing', 'Agency'],
        practicalApplication: 'Separate the person from the diagnosis or crisis, exploring "unique outcomes" when the problem failed to dominate.',
        practitionerQuestions: [
            'When the "Anxiety" or "Shame" tries to tell you who you are, what values in your life disagree with it?',
            'Can you tell me about a time recently when you stood your ground against the problem, even in a small way?',
        ],
        relationalStance: 'Curious co-researcher helping re-author preferred personal identities and values.',
        pitfalls: 'Treating externalisation as a superficial language trick without honouring the person’s authentic grief.',
    },
    {
        id: 'strengths_based',
        title: 'Strengths-Based Approach',
        discipline: 'Social Work',
        theorist: 'Dennis Saleebey (1992)',
        seminalYear: 1992,
        inTextCitation: '(Saleebey, 2012)',
        apa7Reference: 'Saleebey, D. (Ed.). (2012). The strengths perspective in social work practice (6th ed.). Pearson.',
        keyPublications: [
            'Rapp, C. A., & Goscha, R. J. (2011). The strengths model: A recovery-oriented approach to mental health services (3rd ed.). Oxford University Press.',
            'Early, T. J., & GlenMaye, L. F. (2000). Valuing families: Social work practice with families from a strengths perspective. Social Work, 45(2), 118–130. https://doi.org/10.1093/sw/45.2.118',
        ],
        academicDisciplineNotes: 'Social work model shifting focus from pathology, deficits, and symptom checklists to internal competencies, cultural wisdom, and natural community capital.',
        concept: 'Mobilises the individual’s inherent resilience, practical competencies, cultural heritage, and natural community networks.',
        strength: 'Dismantles institutional deficit-mindsets, building genuine self-efficacy and collaborative agency.',
        limitation: 'Must avoid minimising real safeguarding hazards, acute organic disease, or structural exploitation.',
        baseInsight: 40,
        baseApplication: 1.5,
        capacityCost: 2,
        rarity: 'Core',
        tags: ['Strengths-Based', 'Autonomy', 'Empowerment', 'Resilience', 'Agency'],
        practicalApplication: 'Map the client’s existing coping competencies, cultural resources, and past triumphs to co-design solutions.',
        practitionerQuestions: [
            'What internal strengths and past wisdom have helped you survive this far?',
            'Who in your life recognises the best in you, and what would they say you are capable of?',
        ],
        relationalStance: 'Enthusiastic talent spotter and resilience amplifier.',
        pitfalls: 'Using toxic positivity to glaze over genuine institutional neglect or life-threatening crises.',
    },
    {
        id: 'social_constructionism',
        title: 'Social Constructionism',
        discipline: 'Sociology',
        theorist: 'Peter L. Berger & Thomas Luckmann (1966)',
        seminalYear: 1966,
        inTextCitation: '(Berger & Luckmann, 1966)',
        apa7Reference: 'Berger, P. L., & Luckmann, T. (1966). The social construction of reality: A treatise in the sociology of knowledge. Anchor Books.',
        keyPublications: [
            'Gergen, K. J. (2015). An invitation to social construction (3rd ed.). SAGE Publications.',
            'Burr, V. (2015). Social constructionism (3rd ed.). Routledge. https://doi.org/10.4324/9781315715278',
        ],
        academicDisciplineNotes: 'Sociological epistemology demonstrating how social categories, institutional facts, and diagnostic labels are generated through collective human discourse.',
        concept: 'Social realities, clinical categorisations, and institutional norms are constructed through shared language and historical discourses.',
        strength: 'Critically interrogates pathologising labels (such as "uncooperative" or "resistant") as institutional constructs.',
        limitation: 'Excessive epistemological relativism can risk trivialising concrete physiological pain or material poverty.',
        baseInsight: 45,
        baseApplication: 1.6,
        capacityCost: 3,
        rarity: 'Core',
        tags: ['Deconstruction', 'Language', 'Power', 'Labels', 'Sociology'],
        practicalApplication: 'Deconstruct institutional shorthand in case notes, questioning who benefits from specific administrative labels.',
        practitionerQuestions: [
            'Where did the belief originate that you "ought" to handle this without asking for support?',
            'How might this situation look if we stripped away the clinical jargon and spoke purely in human terms?',
        ],
        relationalStance: 'Critical linguistic investigator challenging taken-for-granted institutional narratives.',
        pitfalls: 'Debating abstract social theories while neglecting urgent medication or safeguarding reviews.',
    },
    {
        id: 'co_production',
        title: 'Co-Production & Lived Experience',
        discipline: 'Social Work',
        theorist: 'Elinor Ostrom (1996) & Edgar Cahn (2000)',
        seminalYear: 2000,
        inTextCitation: '(Ostrom, 1996; Cahn, 2000)',
        apa7Reference: 'Cahn, E. S. (2000). No more throw-away people: The co-production imperative. Essential Books.',
        keyPublications: [
            'Ostrom, E. (1996). Crossing the great divide: Coproduction, synergy, and development. World Development, 24(6), 1073–1087. https://doi.org/10.1016/0305-750X(96)00023-X',
            'Needham, C., & Carr, S. (2009). SCIE Research briefing 31: Co-production: An emerging evidence base for adult social care transformation. Social Care Institute for Excellence.',
        ],
        academicDisciplineNotes: 'Public policy and social care model based on reciprocal power-sharing, valuing lived experience on equal footing with professional credentialism.',
        concept: 'Care programmes and clinical pathways are designed and delivered in genuine, equal power-sharing partnerships with service users and carers.',
        strength: 'Eliminates patronising institutional paternalism, tailoring support to genuine lifeworld needs.',
        limitation: 'Can be diluted into tokenistic consultation exercises by risk-averse bureaucratic institutions.',
        baseInsight: 55,
        baseApplication: 1.8,
        capacityCost: 3,
        rarity: 'Core',
        tags: ['Co-production', 'Advocacy', 'Power', 'Lived Experience', 'Rights'],
        practicalApplication: 'Hand over equal agenda-setting power, ensuring the service user co-authors and signs off on every care plan.',
        practitionerQuestions: [
            'You are the true expert on your own life. How should we shape this plan so it truly fits your reality?',
            'What would a genuine partnership between us look like in practice today?',
        ],
        relationalStance: 'Equal partner and facilitator surrendering institutional dominance.',
        pitfalls: 'Inviting client feedback only to overrule their wishes behind closed doors in multi-agency panels.',
    },
    {
        id: 'polyvagal_theory',
        title: 'Polyvagal Autonomic Regulation',
        discipline: 'Psychology',
        theorist: 'Stephen Porges (2011) & Deb Dana (2018)',
        seminalYear: 2011,
        inTextCitation: '(Porges, 2011; Dana, 2018)',
        apa7Reference: 'Porges, S. W. (2011). The polyvagal theory: Neurophysiological foundations of emotions, attachment, communication, and self-regulation. W. W. Norton & Company.',
        keyPublications: [
            'Dana, D. (2018). The polyvagal theory in therapy: Engaging the rhythm of regulation. W. W. Norton & Company.',
            'Porges, S. W. (2021). Polyvagal safety: Attachment, communication, self-regulation. W. W. Norton & Company.',
        ],
        academicDisciplineNotes: 'Neurobiological framework of the vagus nerve mapping autonomic states: ventral vagal social engagement, sympathetic mobilised arousal, and dorsal vagal immobilisation.',
        concept: 'The autonomic nervous system continuously neurocepts environmental cues, shifting between ventral vagal safety, sympathetic mobilised fight-or-flight, and dorsal vagal shutdown.',
        strength: 'Explains somatic paralysis, brain fog, and explosive agitation as instinctual physiological defence states rather than deliberate defiance.',
        limitation: 'Theoretical neurobiological models must be communicated in simple, accessible language to avoid confusing clients.',
        baseInsight: 55,
        baseApplication: 1.8,
        capacityCost: 3,
        rarity: 'Advanced',
        tags: ['Somatic', 'Trauma', 'Regulation', 'Psychology', 'Safety'],
        practicalApplication: 'Track autonomic nervous system cues (prosody, breathing, eye contact) and scaffold ventral vagal safety cues.',
        practitionerQuestions: [
            'What cues in your body let you know you are shifting from calm into fight-or-flight or freeze?',
            'How does your body feel in this room right now—does anything feel too fast or too tense?',
        ],
        relationalStance: 'Neuroception-attuned regulator offering soothing vocal prosody and calming presence.',
        pitfalls: 'Over-explaining nervous system diagrams when a client is in active dorsal vagal shutdown.',
    },
    {
        id: 'psychodynamic_holding',
        title: 'Psychodynamic Holding & Containment',
        discipline: 'Psychology',
        theorist: 'Donald Winnicott (1965) & Wilfred Bion (1962)',
        seminalYear: 1965,
        inTextCitation: '(Winnicott, 1965; Bion, 1962)',
        apa7Reference: 'Winnicott, D. W. (1965). The maturational processes and the facilitating environment: Studies in the theory of emotional development. The Hogarth Press.',
        keyPublications: [
            'Bion, W. R. (1962). Learning from experience. Heinemann.',
            'Casement, P. (2013). On learning from the patient (2nd ed.). Routledge. https://doi.org/10.4324/9781315870007',
        ],
        academicDisciplineNotes: 'Object relations psychoanalytic concept wherein the practitioner’s psychological stability detoxifies (metabolises) the client’s overwhelming, unformulated anxieties.',
        concept: 'A dependable "holding environment" and emotional containment allow raw, unprocessed emotional anxieties (beta elements) to be digested safely.',
        strength: 'Fosters profound psychological safety for individuals who experienced chronic developmental unpredictability or maternal deprivation.',
        limitation: 'Can foster over-dependency if boundaries and transitions are not sensitively held and planned.',
        baseInsight: 50,
        baseApplication: 1.7,
        capacityCost: 3,
        rarity: 'Core',
        tags: ['Psychodynamic', 'Relational', 'Safety', 'Attachment'],
        practicalApplication: 'Provide unshakeable psychological containment, receiving intense distress without becoming defensive, retaliatory, or alarmed.',
        practitionerQuestions: [
            'It is completely safe to bring all of your anger, grief, or fear here—it will not break this space.',
            'What felt impossible to hold on your own this past week?',
        ],
        relationalStance: 'Robust emotional container absorbing and detoxifying raw anxiety.',
        pitfalls: 'Allowing boundaries to blur, fostering unhealthy omnipotent rescue fantasies in the practitioner.',
    },
    {
        id: 'existential_therapy',
        title: 'Existential Meaning & Mortality',
        discipline: 'Psychology',
        theorist: 'Viktor Frankl (1959) & Irvin Yalom (1980)',
        seminalYear: 1959,
        inTextCitation: '(Frankl, 1959; Yalom, 1980)',
        apa7Reference: 'Frankl, V. E. (1959). Man’s search for meaning. Beacon Press.',
        keyPublications: [
            'Yalom, I. D. (1980). Existential psychotherapy. Basic Books.',
            'van Deurzen, E. (2012). Existential counselling & psychotherapy in practice (3rd ed.). SAGE Publications.',
        ],
        academicDisciplineNotes: 'Phenomenological psychotherapy confronting ultimate concerns: death/mortality, freedom/responsibility, existential isolation, and the quest for meaning.',
        concept: 'Explores the core existential givens: the search for meaning, isolation, freedom of choice, and reckoning with mortality or loss.',
        strength: 'Deeply validates grief, major life transitions, terminal diagnoses, and the quest for purposeful living.',
        limitation: 'Less applicable during urgent acute material crises requiring immediate practical relief.',
        baseInsight: 50,
        baseApplication: 1.7,
        capacityCost: 3,
        rarity: 'Core',
        tags: ['Existential', 'Meaning', 'Humanistic', 'Hope'],
        practicalApplication: 'Explore what gives the person’s life dignity and significance amidst irrevocable loss or chronic illness.',
        practitionerQuestions: [
            'Even amidst this heavy suffering, what continues to matter most deeply to your heart?',
            'What kind of legacy or personal truth do you wish to stand for through this chapter of your life?',
        ],
        relationalStance: 'Fellow traveller exploring ultimate human concerns and authentic purpose.',
        pitfalls: 'Philosophising about existential purpose when the client is freezing or facing eviction tomorrow.',
    },
    {
        id: 'gestalt_here_now',
        title: 'Gestalt & Here-and-Now Awareness',
        discipline: 'Psychology',
        theorist: 'Fritz Perls, Ralph Hefferline & Paul Goodman (1951)',
        seminalYear: 1951,
        inTextCitation: '(Perls et al., 1951)',
        apa7Reference: 'Perls, F., Hefferline, R. F., & Goodman, P. (1951). Gestalt therapy: Excitement and growth in the human personality. Julian Press.',
        keyPublications: [
            'Joyce, P., & Sills, C. (2018). Skills in Gestalt counselling & psychotherapy (4th ed.). SAGE Publications.',
            'Yontef, G. M. (1993). Awareness, dialogue and process: Essays on Gestalt therapy. The Gestalt Journal Press.',
        ],
        academicDisciplineNotes: 'Experiential humanistic psychotherapy cultivating present-moment awareness, contact boundaries, and somatic integration of unfinished business.',
        concept: 'Cultivates somatic awareness and integration of unfinished business through dialogue in the immediate present moment.',
        strength: 'Reconnects alienated bodily sensations and repressed emotions into conscious awareness.',
        limitation: 'Evocative experiential experiments must be carefully paced to avoid overwhelming fragile clients.',
        baseInsight: 45,
        baseApplication: 1.6,
        capacityCost: 2,
        rarity: 'Core',
        tags: ['Somatic', 'Humanistic', 'Awareness', 'Regulation'],
        practicalApplication: 'Bring attention to physical somatic markers happening in the room (e.g., clenched fists, holding breath).',
        practitionerQuestions: [
            'As you speak about that incident, what physical sensations are you noticing in your chest or shoulders right now?',
            'If that tight sensation in your throat had words, what would it say?',
        ],
        relationalStance: 'Present-focused experiential facilitator tracking somatic vitality.',
        pitfalls: 'Pushing intense emotional confrontation before relational trust is firmly anchored.',
    },
    {
        id: 'intersectionality',
        title: 'Intersectionality Framework',
        discipline: 'Sociology',
        theorist: 'Kimberlé Crenshaw (1989)',
        seminalYear: 1989,
        inTextCitation: '(Crenshaw, 1989)',
        apa7Reference: 'Crenshaw, K. (1989). Demarginalizing the intersection of race and sex: A Black feminist critique of antidiscrimination doctrine, feminist theory and antiracist politics. University of Chicago Legal Forum, 1989(1), 139–167.',
        keyPublications: [
            'Collins, P. H., & Bilge, S. (2020). Intersectionality (2nd ed.). Polity Press.',
            'Crenshaw, K. (1991). Mapping the margins: Intersectionality, identity politics, and violence against women of color. Stanford Law Review, 43(6), 1241–1299. https://doi.org/10.2307/1229039',
        ],
        academicDisciplineNotes: 'Critical race and feminist jurisprudence demonstrating that social identities and institutional oppressions operate simultaneously, not additively.',
        concept: 'Multiple social identities (race, gender, social class, disability, immigration status) intersect to create compound structures of disadvantage.',
        strength: 'Prevents simplistic, one-dimensional diversity initiatives from ignoring compounded systemic oppression.',
        limitation: 'Requires nuanced, holistic assessments that resist rigid administrative box-ticking.',
        baseInsight: 60,
        baseApplication: 1.9,
        capacityCost: 4,
        rarity: 'Advanced',
        tags: ['Social Justice', 'Inequality', 'Structural', 'Intersectionality', 'Power'],
        practicalApplication: 'Examine how compounded identities multiply systemic vulnerability and institutional discrimination.',
        practitionerQuestions: [
            'How do the different facets of who you are—your heritage, gender, background—shape how services treat you?',
            'Where have you felt most misunderstood or doubly disadvantaged by existing support structures?',
        ],
        relationalStance: 'Nuanced structural analyst recognising multi-layered systemic dynamics.',
        pitfalls: 'Reducing the person to an abstract matrix of sociological identities without seeing their individual humanity.',
    },
    {
        id: 'stages_of_change',
        title: 'Transtheoretical Stages of Change',
        discipline: 'Public Health',
        theorist: 'James Prochaska & Carlo DiClemente (1983)',
        seminalYear: 1983,
        inTextCitation: '(Prochaska & DiClemente, 1983)',
        apa7Reference: 'Prochaska, J. O., & DiClemente, C. C. (1983). Stages and processes of self-change of smoking: Toward an integrative model of change. Journal of Consulting and Clinical Psychology, 51(3), 390–395. https://doi.org/10.1037/0022-006X.51.3.390',
        keyPublications: [
            'Prochaska, J. O., Norcross, J. C., & DiClemente, C. C. (1994). Changing for good. William Morrow & Co.',
            'Norcross, J. C., Krebs, P. M., & Prochaska, J. O. (2011). Stages of change. Journal of Clinical Psychology, 67(2), 143–154. https://doi.org/10.1002/jclp.20758',
        ],
        academicDisciplineNotes: 'Health psychology model outlining the cyclical stages of readiness for change: Precontemplation, Contemplation, Preparation, Action, Maintenance, and Relapse.',
        concept: 'Health behaviour changes progress through pre-contemplation, contemplation, preparation, action, and maintenance.',
        strength: 'Prevents practitioners from imposing action-stage demands onto individuals who are in ambivalent pre-contemplation.',
        limitation: 'Human change is frequently chaotic, cyclical, and influenced by shifting social environments rather than neat stages.',
        baseInsight: 40,
        baseApplication: 1.5,
        capacityCost: 2,
        rarity: 'Core',
        tags: ['Motivation', 'Behavioural', 'Public Health', 'Readiness'],
        practicalApplication: 'Match intervention style to client readiness; avoid pressuring action when someone is weighing ambivalence.',
        practitionerQuestions: [
            'On a scale of 1 to 10, how important is making this change to you right now, and what makes it that number rather than lower?',
            'What are some of the good things about how things are now, and what are some of the less helpful parts?',
        ],
        relationalStance: 'Patient, non-pressuring stage-matched facilitator.',
        pitfalls: 'Treating relapse as moral failure rather than a normal, predictable stage of the change cycle.',
    },
    {
        id: 'harm_reduction',
        title: 'Harm Reduction Philosophy',
        discipline: 'Public Health',
        theorist: 'G. Alan Marlatt (1998) & Tim Rhodes (2002)',
        seminalYear: 1998,
        inTextCitation: '(Marlatt, 1998; Rhodes, 2002)',
        apa7Reference: 'Marlatt, G. A. (Ed.). (1998). Harm reduction: Pragmatic strategies for managing high-risk behaviors. Guilford Press.',
        keyPublications: [
            'Rhodes, T. (2002). The ‘risk environment’: A framework for understanding and reducing drug-related harm. International Journal of Drug Policy, 13(2), 85–94. https://doi.org/10.1016/S0955-3959(02)00007-5',
            'Harm Reduction International. (2022). What is harm reduction? HRI London.',
        ],
        academicDisciplineNotes: 'Public health paradigm prioritizing evidence-based risk reduction, human dignity, and non-judgmental access over punitive abstinence requirements.',
        concept: 'Focuses on pragmatic risk minimisation and dignified support without demanding immediate abstinence as a condition for receiving care.',
        strength: 'Keeps highly vulnerable individuals alive, connected to health services, and shielded from moralistic stigma.',
        limitation: 'Can encounter political resistance or institutional reluctance from abstinence-only frameworks.',
        baseInsight: 50,
        baseApplication: 1.7,
        capacityCost: 2,
        rarity: 'Core',
        tags: ['Harm Reduction', 'Pragmatic', 'Health', 'Non-Judgmental'],
        practicalApplication: 'Collaborate on pragmatic safety steps (naloxone, safe supply, pacing, hydration) without making support contingent on total cessation.',
        practitionerQuestions: [
            'What small steps could keep you safer and healthier this week, without any pressure to change everything at once?',
            'How can we ensure our services remain an open door for you, no matter what happens?',
        ],
        relationalStance: 'Pragmatic, compassionate harm-reducer meeting people where they are.',
        pitfalls: 'Colluding with acute life-threatening risks without offering clear pathways toward recovery when desired.',
    },
    {
        id: 'gibbs_reflection',
        title: 'Gibbs Reflective Cycle',
        discipline: 'Education & Learning',
        theorist: 'Graham Gibbs (1988)',
        seminalYear: 1988,
        inTextCitation: '(Gibbs, 1988)',
        apa7Reference: 'Gibbs, G. (1988). Learning by doing: A guide to teaching and learning methods. Further Education Unit, Oxford Polytechnic.',
        keyPublications: [
            'Bassot, B. (2015). The reflective journal: Capturing your learning for personal and professional development. Palgrave Macmillan.',
            'Jasper, M. (2013). Beginning reflective practice (2nd ed.). Cengage Learning.',
        ],
        academicDisciplineNotes: 'Pedagogical experiential learning framework structuring clinical reflexivity across Description, Feelings, Evaluation, Analysis, Conclusion, and Action Plan.',
        concept: 'Structured cyclical enquiry: Description → Feelings → Evaluation → Critical Analysis → Conclusion → Action Plan.',
        strength: 'Enables multidisciplinary teams to deconstruct critical casework incidents and refine practice with humility.',
        limitation: 'Demands an organisational culture of psychological safety where acknowledging doubt is welcomed rather than penalised.',
        baseInsight: 35,
        baseApplication: 1.4,
        capacityCost: 2,
        rarity: 'Core',
        tags: ['Reflective', 'Learning', 'Insight', 'Action Plan'],
        practicalApplication: 'Systematically debrief difficult casework encounters to extract clinical insights and prevent burnout.',
        practitionerQuestions: [
            'What were the underlying emotions in that interaction, and what does critical analysis reveal about what went well and what faltered?',
            'If a similar scenario occurs next week, what specific adjustments will we make to our practice?',
        ],
        relationalStance: 'Structured reflective learner dedicated to ethical refinement.',
        pitfalls: 'Filling out reflective cycle forms as a mechanical tick-box without honest emotional vulnerability.',
    },
    {
        id: 'schon_reflective',
        title: 'The Reflective Practitioner',
        discipline: 'Education & Learning',
        theorist: 'Donald Schön (1983)',
        seminalYear: 1983,
        inTextCitation: '(Schön, 1983)',
        apa7Reference: 'Schön, D. A. (1983). The reflective practitioner: How professionals think in action. Basic Books.',
        keyPublications: [
            'Schön, D. A. (1987). Educating the reflective practitioner: Toward a new design for teaching and learning in the professions. Jossey-Bass.',
            'Kinsella, E. A. (2010). Professional knowledge and the epistemology of practice. Nursing Philosophy, 11(1), 3–14. https://doi.org/10.1111/j.1466-769X.2009.00428.x',
        ],
        academicDisciplineNotes: 'Professional epistemological theory articulating the differences between technical rationality, reflection-in-action (improvisation in messy practice), and reflection-on-action.',
        concept: 'Distinguishes reflection-in-action (intuitive improvisation amidst messy practice) from reflection-on-action (retrospective critique).',
        strength: 'Validates practitioner craft knowledge, intuitive artistry, and the capacity to adapt flexibly to unpredictable human dilemmas.',
        limitation: 'Harder to standardize across rigid institutional compliance audits.',
        baseInsight: 45,
        baseApplication: 1.6,
        capacityCost: 3,
        rarity: 'Core',
        tags: ['Reflective', 'Learning', 'Insight', 'Practitioner'],
        practicalApplication: 'Pause in real-time during messy casework moments to re-frame assumptions and adapt dynamically.',
        practitionerQuestions: [
            'What unexpected reaction is occurring right now in this room, and how can I adjust my stance in the moment?',
            'What unspoken assumptions am I holding about this client that might be skewing my clinical judgment?',
        ],
        relationalStance: 'Artful, self-aware practitioner navigating real-world clinical ambiguity.',
        pitfalls: 'Relying solely on "gut instinct" without grounding intuitive hunches in evidence and clinical supervision.',
    },
    {
        id: 'foucault_power',
        title: 'Disciplinary Power & Surveillance',
        discipline: 'Sociology',
        theorist: 'Michel Foucault (1975/1977)',
        seminalYear: 1977,
        inTextCitation: '(Foucault, 1975/1977)',
        apa7Reference: 'Foucault, M. (1977). Discipline and punish: The birth of the prison (A. Sheridan, Trans.). Pantheon Books. (Original work published 1975)',
        keyPublications: [
            'Foucault, M. (1973). The birth of the clinic: An archaeology of medical perception (A. M. Sheridan Smith, Trans.). Tavistock Publications.',
            'Chambon, A. S., Irving, A., & Epstein, L. (Eds.). (1999). Reading Foucault for social work. Columbia University Press.',
        ],
        academicDisciplineNotes: 'Critical social philosophy examining how administrative surveillance, categorisation, and institutional norms produce docile bodies and enforce biopower.',
        concept: 'Institutional case notes, clinical gazes, and compliance monitoring subtly enforce social control and regulate marginalised bodies.',
        strength: 'Encourages practitioners to reflect on how helping professions can unintentionally police rather than liberate service users.',
        limitation: 'Can induce practitioner cynicism if not balanced with tangible, protective safeguarding actions.',
        baseInsight: 55,
        baseApplication: 1.8,
        capacityCost: 4,
        rarity: 'Advanced',
        tags: ['Power', 'Surveillance', 'Deconstruction', 'Institutions'],
        practicalApplication: 'Write case notes transparently in the client’s presence; de-centre punitive compliance tracking in statutory reviews.',
        practitionerQuestions: [
            'How does our recording and reporting system subtly enforce institutional control over this person’s life?',
            'Are we acting as a supportive ally here, or merely as an agent of state surveillance and compliance?',
        ],
        relationalStance: 'Institutional critic de-escalating surveillance and administrative coercion.',
        pitfalls: 'Paralysing protective safeguarding duties through excessive cynicism toward all professional boundaries.',
    },
    {
        id: 'sensory_integration',
        title: 'Sensory Processing & Environmental Fit',
        discipline: 'Disability & Inclusion',
        theorist: 'A. Jean Ayres (1972) & Winnie Dunn (1997)',
        seminalYear: 1972,
        inTextCitation: '(Ayres, 1972; Dunn, 1997)',
        apa7Reference: 'Ayres, A. J. (1972). Sensory integration and learning disorders. Western Psychological Services.',
        keyPublications: [
            'Dunn, W. (1997). The impact of sensory processing abilities on the daily lives of young children and their families: A conceptual model. Infants & Young Children, 9(4), 23–35. https://doi.org/10.1097/00001163-199704000-00005',
            'Miller, L. J. (2014). Sensational kids: Hope and help for children with sensory processing disorder (Rev. ed.). Perigee.',
        ],
        academicDisciplineNotes: 'Occupational therapy and neuroscience model showing how individual neurological thresholds (hyper/hypo-reactivity) interact with ambient environmental demands.',
        concept: 'Neurological sensory processing variations (hypo- and hyper-reactivity) trigger sympathetic overload when environments clash with sensory profiles.',
        strength: 'Reframes distressed meltdowns as intense somatic pain resulting from sensory mismatch rather than wilful bad behaviour.',
        limitation: 'Demands modifications to physical premises and adapted institutional environments.',
        baseInsight: 50,
        baseApplication: 1.7,
        capacityCost: 3,
        rarity: 'Core',
        tags: ['Sensory', 'Disability', 'Neurodiversity', 'Environment', 'Somatic'],
        practicalApplication: 'Conduct sensory audits of clinic and school environments (lighting, acoustics, smells) and introduce regulation aids.',
        practitionerQuestions: [
            'How are the lights, sounds, and physical textures in this room impacting your comfort and focus right now?',
            'What quiet adjustments—dimmer lighting, noise cancellation, movement breaks—help your nervous system settle?',
        ],
        relationalStance: 'Sensory-informed environment adapter.',
        pitfalls: 'Interpreting sensory shutdown or meltdowns as emotional defiance or oppositional behavior.',
    },
    {
        id: 'neurodiversity_paradigm',
        title: 'Neurodiversity Affirming Paradigm',
        discipline: 'Disability & Inclusion',
        theorist: 'Judy Singer (1998) & Nick Walker (2021)',
        seminalYear: 1998,
        inTextCitation: '(Singer, 1998; Walker, 2021)',
        apa7Reference: 'Singer, J. (1998). Odd people in: The birth of community amongst people on the \'autistic spectrum\' (Honours thesis, Faculty of Humanities and Social Sciences, University of Technology, Sydney).',
        keyPublications: [
            'Walker, N. (2021). Neuroqueer heresies: Notes on the neurodiversity paradigm, autistic empowerment, and postnormal possibilities. Autonomous Press.',
            'Kapp, S. K. (Ed.). (2020). Autistic community and the neurodiversity movement: Stories from the frontline. Palgrave Macmillan. https://doi.org/10.1007/978-981-13-8437-0',
        ],
        academicDisciplineNotes: 'Emergent civil rights and neuro-affirming paradigm conceptualising neurodivergent brains as natural human variations worthy of cultural preservation and dignity.',
        concept: 'Autism, ADHD, and divergent neurotypes represent natural variations in human biodiversity to be accommodated with pride, not pathologies to cure.',
        strength: 'Validates authentic autistic communication, relieves the crushing strain of masking, and fosters neuro-affirming spaces.',
        limitation: 'High support-needs individuals must still receive robust practical daily care and physical scaffolding.',
        baseInsight: 65,
        baseApplication: 1.9,
        capacityCost: 4,
        rarity: 'Advanced',
        tags: ['Neurodiversity', 'Inclusion', 'Advocacy', 'Acceptance', 'Rights'],
        practicalApplication: 'Embrace divergent communication styles (monotropic focus, stimming, direct phrasing) without enforcing neurotypical masking.',
        practitionerQuestions: [
            'What does it feel like when you are able to drop the mask and be completely yourself without judgment?',
            'How can we structure our support to celebrate and protect your authentic way of experiencing the world?',
        ],
        relationalStance: 'Neurodiversity-affirming champion unmasking institutional ableism.',
        pitfalls: 'Romanticising neurodivergence to the point of neglecting severe executive functioning fatigue or sensory distress.',
    },
    {
        id: 'motivational_interviewing',
        title: 'Motivational Interviewing',
        discipline: 'Psychology',
        theorist: 'William R. Miller & Stephen Rollnick (2012)',
        seminalYear: 2012,
        inTextCitation: '(Miller & Rollnick, 2012)',
        apa7Reference: 'Miller, W. R., & Rollnick, S. (2012). Motivational interviewing: Helping people change (3rd ed.). Guilford Press.',
        keyPublications: [
            'Rollnick, S., Miller, W. R., & Butler, C. C. (2008). Motivational interviewing in health care: Helping patients change behavior. Guilford Press.',
            'Lundahl, B., & Burke, B. L. (2009). The effectiveness and applicability of motivational interviewing: A practice-friendly review of four meta-analyses. Journal of Clinical Psychology, 65(11), 1232–1245. https://doi.org/10.1002/jclp.20638',
        ],
        academicDisciplineNotes: 'Directive, client-centred counselling method for enhancing intrinsic motivation to change by exploring and resolving ambivalence.',
        concept: 'A collaborative, person-centred conversational style for strengthening an individual’s own internal motivation and commitment to change.',
        strength: 'Gently explores and resolves ambivalence without provoking defensive counter-arguments or compliance battles.',
        limitation: 'Less directly applicable during acute severe cognitive disorientation or acute manic episodes.',
        baseInsight: 45,
        baseApplication: 1.6,
        capacityCost: 2,
        rarity: 'Core',
        tags: ['Motivation', 'Communication', 'Relational', 'Change'],
        practicalApplication: 'Use OARS (Open questions, Affirmations, Reflections, Summaries) and elicit "change talk" from the client’s own values.',
        practitionerQuestions: [
            'If you decided to make this change, what would be the best outcome for you and your family?',
            'What would need to happen for you to feel ready to take that first small step?',
        ],
        relationalStance: 'Collaborative guide rolling with resistance and evoking internal values.',
        pitfalls: 'Attempting to persuade, debate, or argue the client into change, which provokes immediate psychological reactance.',
    },
    {
        id: 'human_rights_act',
        title: 'Human Rights & FREDA Principles',
        discipline: 'Ethics & Human Rights',
        theorist: 'British Institute of Human Rights / Department of Health (2007)',
        seminalYear: 2007,
        inTextCitation: '(Department of Health, 2007; Human Rights Act 1998)',
        apa7Reference: 'Department of Health. (2007). Human rights in healthcare: A framework for local action (2nd ed.). British Institute of Human Rights & Department of Health.',
        keyPublications: [
            'Curtice, M. J., & Exworthy, T. (2010). FREDA: A human rights glossary for mental health. The Psychiatrist, 34(12), 526–531. https://doi.org/10.1192/pb.bp.109.027201',
            'Human Rights Act 1998, c. 42 (UK). https://www.legislation.gov.uk/ukpga/1998/42',
        ],
        academicDisciplineNotes: 'Statutory and ethical framework operationalising Fairness, Respect, Equality, Dignity, and Autonomy in public service delivery and least-restrictive care.',
        concept: 'Care decisions must legally and ethically honour human rights, proportionality, least restrictive practice, and personal dignity.',
        strength: 'Provides an authoritative moral and legal shield against disproportionate institutional restraint or coercive deprivation of liberty.',
        limitation: 'Balancing competing rights (e.g. duty of care vs right to take informed risks) generates complex clinical tensions.',
        baseInsight: 60,
        baseApplication: 1.8,
        capacityCost: 3,
        rarity: 'Advanced',
        tags: ['Ethics', 'Human Rights', 'Autonomy', 'Dignity', 'Rights'],
        practicalApplication: 'Test every institutional proposal against FREDA criteria to ensure least restrictive, proportionate practice.',
        practitionerQuestions: [
            'Does this proposed care decision uphold the person’s fundamental dignity and lawful right to personal liberty?',
            'Are we implementing the absolute least restrictive option available to safeguard well-being?',
        ],
        relationalStance: 'Ethical guardian ensuring care interventions honour fundamental human rights.',
        pitfalls: 'Treating human rights as legal jargon rather than living ethical commitments in everyday bedside practice.',
    },
    {
        id: 'solution_focused',
        title: 'Solution-Focused Brief Practice',
        discipline: 'Psychology',
        theorist: 'Steve de Shazer (1985) & Insoo Kim Berg (2007)',
        seminalYear: 1985,
        inTextCitation: '(de Shazer, 1985; de Shazer & Dolan, 2007)',
        apa7Reference: 'de Shazer, S. (1985). Keys to solution in brief therapy. W. W. Norton & Company.',
        keyPublications: [
            'de Shazer, S., & Dolan, Y. (2007). More than miracles: The state of the art of solution-focused brief therapy. Routledge. https://doi.org/10.4324/9780203893814',
            'Trepper, T. S., Dolan, Y., McCollum, E. E., & Nelson, T. (2006). Steve de Shazer’s legacy for solution-focused brief therapy. Journal of Family Psychotherapy, 17(3-4), 1–13. https://doi.org/10.1300/J085v17n03_01',
        ],
        academicDisciplineNotes: 'Competency-based brief therapy model focusing on exceptions, future possibilities, scaling questions, and preferred outcomes rather than problem etiology.',
        concept: 'Explores future exceptions, scaling questions, and the "Miracle Question" to construct realistic pathways towards preferred futures.',
        strength: 'Quickly instils hope and identifies concrete times when the problem was absent or smaller.',
        limitation: 'Can feel dismissive if the individual feels rushed through their necessary grief or chronic traumatic history.',
        baseInsight: 40,
        baseApplication: 1.5,
        capacityCost: 2,
        rarity: 'Core',
        tags: ['Solution-Focused', 'Reframing', 'Strengths-Based', 'Hope'],
        practicalApplication: 'Pose the Miracle Question and identify micro-exceptions to build immediate forward momentum.',
        practitionerQuestions: [
            'Suppose tonight a miracle happened and this problem was resolved—what would be the very first small thing you would notice in the morning?',
            'On a scale from 1 to 10, where 10 is your goal, what is keeping you at a 3 instead of a 2 right now?',
        ],
        relationalStance: 'Future-focused co-architect of practical hope.',
        pitfalls: 'Rushing to "miracle questions" before a traumatised client feels heard and held in their grief.',
    },
    {
        id: 'nursing_care_plan',
        title: 'Roper-Logan-Tierney Lifespan Model',
        discipline: 'Nursing',
        theorist: 'Nancy Roper, Winifred Logan & Alison Tierney (2000)',
        seminalYear: 2000,
        inTextCitation: '(Roper et al., 2000)',
        apa7Reference: 'Roper, N., Logan, W. W., & Tierney, A. J. (2000). The Roper-Logan-Tierney model of nursing: Based on activities of living. Churchill Livingstone.',
        keyPublications: [
            'Holland, K., & Jenkins, J. (Eds.). (2019). Applying the Roper-Logan-Tierney model in practice (3rd ed.). Elsevier.',
            'Tierney, A. J. (1998). Nursing models: Extravagance or enterprise? Journal of Advanced Nursing, 28(1), 77–85. https://doi.org/10.1046/j.1365-2648.1998.00693.x',
        ],
        academicDisciplineNotes: 'A seminal British nursing model organizing holistic assessment across 12 Activities of Living throughout the human lifespan continuum.',
        concept: 'Assesses 12 core Activities of Living across the lifespan to support maximum independence and dignity.',
        strength: 'Comprehensive, structured evaluation of physical, psychological, sociocultural, environmental, and politico-economic factors.',
        limitation: 'Can deteriorate into a mechanistic checklist in overburdened acute hospital wards if not practised holistically.',
        baseInsight: 40,
        baseApplication: 1.4,
        capacityCost: 2,
        rarity: 'Core',
        tags: ['Nursing', 'Health', 'Activities of Living', 'Assessment'],
        practicalApplication: 'Assess maintaining a safe environment, mobilizing, personal hygiene, and sleeping to scaffold holistic recovery.',
        practitionerQuestions: [
            'Which daily activities—eating, washing, resting, moving safely—feel most exhausting or precarious for you at home?',
            'What practical aids or nursing support would help you feel completely safe carrying out your daily routines?',
        ],
        relationalStance: 'Practical clinical assessor preserving dignity in daily living.',
        pitfalls: 'Turning the 12 activities into a sterile tick-box that misses the person’s spiritual and emotional lifeworld.',
    },
    {
        id: 'therapeutic_alliance',
        title: 'Therapeutic Working Alliance',
        discipline: 'Psychology',
        theorist: 'Edward Bordin (1979)',
        seminalYear: 1979,
        inTextCitation: '(Bordin, 1979)',
        apa7Reference: 'Bordin, E. S. (1979). The generalizability of the psychoanalytic concept of the working alliance. Psychotherapy: Theory, Research & Practice, 16(3), 252–260. https://doi.org/10.1037/h0085885',
        keyPublications: [
            'Horvath, A. O., Del Re, A. C., Flückiger, C., & Symonds, D. (2011). Alliance in individual psychotherapy. Psychotherapy, 48(1), 9–16. https://doi.org/10.1037/a0022186',
            'Flückiger, C., Del Re, A. C., Wampold, B. E., & Horvath, A. O. (2018). The alliance in adult psychotherapy: A meta-analytic synthesis. Psychotherapy, 55(4), 316–340. https://doi.org/10.1037/pst0000172',
        ],
        academicDisciplineNotes: 'A foundational pan-theoretical construct defining the therapeutic bond across three interactive components: mutual goals, collaborative tasks, and affective bonds.',
        concept: 'Clinical progress rests upon mutual agreement on goals, collaborative clarity on tasks, and a compassionate emotional bond.',
        strength: 'The single most robust empirical predictor of positive outcomes across all psychological and social interventions.',
        limitation: 'Takes patient time and unhurried consistency to build with individuals wounded by repeated institutional rejection.',
        baseInsight: 50,
        baseApplication: 1.7,
        capacityCost: 3,
        rarity: 'Core',
        tags: ['Relational', 'Alliance', 'Trust', 'Collaboration'],
        practicalApplication: 'Continually check alignment on shared goals, collaborative tasks, and the emotional bond between practitioner and client.',
        practitionerQuestions: [
            'How are we doing as a team today—do our goals still feel like the right ones to you?',
            'Is there anything we are doing that isn’t feeling helpful, so we can adjust our approach immediately?',
        ],
        relationalStance: 'Transparent collaborative teammate building reciprocal trust.',
        pitfalls: 'Assuming agreement exists when the client is merely complying out of fear of losing services.',
    },
    {
        id: 'cultural_safety',
        title: 'Cultural Safety & Humility',
        discipline: 'Nursing',
        theorist: 'Irihapeti Ramsden (2002)',
        seminalYear: 2002,
        inTextCitation: '(Ramsden, 2002; Curtis et al., 2019)',
        apa7Reference: 'Ramsden, I. M. (2002). Cultural safety and Kawa Whakaruruhau in Māori health and nursing education (Doctoral dissertation, Victoria University of Wellington, New Zealand).',
        keyPublications: [
            'Curtis, E., Jones, R., Tipene-Leach, D., Walker, C., Loring, B., Paine, S.-J., & Reid, P. (2019). Why cultural safety rather than cultural competency is required to achieve health equity: A literature review and recommended definition. International Journal for Equity in Health, 18, Article 174. https://doi.org/10.1186/s12939-019-1082-3',
            'Nursing Council of New Zealand. (2011). Guidelines for cultural safety, the Treaty of Waitangi and Maori health in nursing education and practice. Nursing Council of New Zealand.',
        ],
        academicDisciplineNotes: 'A transformative healthcare philosophy shifting focus from learning generic ethnic customs to examining practitioner power, colonial history, and institutional bias.',
        concept: 'Practitioners must critically examine their own cultural positioning; safety is determined exclusively by the service recipient.',
        strength: 'Dismantles institutional racism and colonial assumptions, creating genuine trust in cross-cultural healthcare interactions.',
        limitation: 'Demands continuous, courageous self-critique and institutional reform.',
        baseInsight: 60,
        baseApplication: 1.9,
        capacityCost: 3,
        rarity: 'Advanced',
        tags: ['Cultural Safety', 'Social Justice', 'Empathy', 'Respect'],
        practicalApplication: 'Interrogate personal cultural assumptions, adapt communication styles, and affirm the client’s cultural identity as sovereign.',
        practitionerQuestions: [
            'How can we honour your cultural traditions, family values, and spiritual beliefs in this care plan?',
            'Have there been moments where services made you feel alien, judged, or culturally unsafe?',
        ],
        relationalStance: 'Culturally humble learner respecting the service recipient’s lived authority.',
        pitfalls: 'Treating cultural safety as a fixed list of cultural stereotypes rather than ongoing relational humility.',
    },
    {
        id: 'capabilities_approach',
        title: 'Capabilities & Real Freedoms Approach',
        discipline: 'Ethics & Human Rights',
        theorist: 'Amartya Sen (1993) & Martha Nussbaum (2011)',
        seminalYear: 1993,
        inTextCitation: '(Sen, 1993; Nussbaum, 2011)',
        apa7Reference: 'Sen, A. (1993). Capability and well-being. In M. Nussbaum & A. Sen (Eds.), The quality of life (pp. 30–53). Oxford University Press.',
        keyPublications: [
            'Nussbaum, M. C. (2011). Creating capabilities: The human development approach. Harvard University Press. https://doi.org/10.4159/harvard.9780674061200',
            'Sen, A. (1999). Development as freedom. Oxford University Press.',
        ],
        academicDisciplineNotes: 'Normative human development framework evaluating quality of life through substantive freedoms and capabilities (what people are effectively able to do and be).',
        concept: 'Evaluates human well-being not by monetary wealth alone, but by what people are genuinely free to DO and BE in their real lives.',
        strength: 'Shifts social welfare metrics from mere survival subsidies to genuine flourishing, creative expression, and community belonging.',
        limitation: 'Complex to quantify within traditional public sector commissioning contracts.',
        baseInsight: 70,
        baseApplication: 2.1,
        capacityCost: 4,
        rarity: 'Seminal',
        tags: ['Human Rights', 'Capabilities', 'Ethics', 'Freedom', 'Social Justice'],
        practicalApplication: 'Design care around expanding real substantive capabilities: bodily health, emotional expression, social affiliation, and play.',
        practitionerQuestions: [
            'Beyond basic survival, what are the things you genuinely want to be able to DO and BE in your everyday life?',
            'What social or practical barriers are preventing you from pursuing what you truly value?',
        ],
        relationalStance: 'Human flourishing advocate expanding real substantive freedoms.',
        pitfalls: 'Settling for mere baseline subsistence maintenance rather than supporting the individual’s full potential.',
    },
    {
        id: 'restorative_justice',
        title: 'Restorative Practice & Repair',
        discipline: 'Social Work',
        theorist: 'Howard Zehr (1990) & Ted Wachtel (1999)',
        seminalYear: 1990,
        inTextCitation: '(Zehr, 1990; Wachtel, 1999)',
        apa7Reference: 'Zehr, H. (1990). Changing lenses: A new focus for crime and justice. Herald Press.',
        keyPublications: [
            'Wachtel, T. (1999). Restorative justice in everyday life: Beyond the formal criminal justice system. International Institute for Restorative Practices.',
            'Braithwaite, J. (2002). Restorative justice & responsive regulation. Oxford University Press.',
        ],
        academicDisciplineNotes: 'Relational justice paradigm viewing conflict as a violation of people and relationships, focusing on repairing harm, meeting needs, and collective accountability.',
        concept: 'Addresses relational and community conflict by repairing harm, hearing all perspectives, and establishing voluntary accountability.',
        strength: 'Interrupts cycles of punitive exclusion, re-establishing interpersonal trust and emotional closure.',
        limitation: 'Requires that all participants feel safe and participate voluntarily without coercion or fear of retaliation.',
        baseInsight: 50,
        baseApplication: 1.6,
        capacityCost: 3,
        rarity: 'Core',
        tags: ['Restorative', 'Relational', 'Conflict', 'Community'],
        practicalApplication: 'Convene structured restorative conversations that centre impact of harm, mutual accountability, and relational repair.',
        practitionerQuestions: [
            'What happened, what were you thinking at the time, and who has been affected by what occurred?',
            'What needs to happen now to repair the relationship and make things right for everyone involved?',
        ],
        relationalStance: 'Impartial facilitator of relational repair and accountability.',
        pitfalls: 'Coercing vulnerable victims or traumatised individuals into premature restorative meetings before emotional safety is secure.',
    },
    {
        id: 'self_determination',
        title: 'Self-Determination Theory',
        discipline: 'Psychology',
        theorist: 'Edward L. Deci & Richard M. Ryan (2000)',
        seminalYear: 2000,
        inTextCitation: '(Deci & Ryan, 2000; Ryan & Deci, 2017)',
        apa7Reference: 'Deci, E. L., & Ryan, R. M. (2000). The "what" and "why" of goal pursuits: Human needs and the self-determination of behavior. Psychological Inquiry, 11(4), 227–268. https://doi.org/10.1207/S15327965PLI1104_01',
        keyPublications: [
            'Ryan, R. M., & Deci, E. L. (2017). Self-determination theory: Basic psychological needs in motivation, development, and wellness. Guilford Press.',
            'Vansteenkiste, M., Ryan, R. M., & Soenens, B. (2020). Basic psychological need theory: Advancements, critical themes, and future directions. Motivation and Emotion, 44(1), 1–31. https://doi.org/10.1007/s11031-019-09818-1',
        ],
        academicDisciplineNotes: 'Empirically supported macro-theory of human motivation postulating three universal psychological needs: autonomy, competence, and relatedness.',
        concept: 'Intrinsic human motivation and vitality flourish when three universal psychological needs are met: Autonomy, Competence, and Relatedness.',
        strength: 'Reveals how coercive compliance mandates and patronising surveillance systematically extinguish personal motivation.',
        limitation: 'Demands organisational bravery to surrender control and entrust decision-making to the individual.',
        baseInsight: 50,
        baseApplication: 1.7,
        capacityCost: 3,
        rarity: 'Core',
        tags: ['Autonomy', 'Motivation', 'Strengths-Based', 'Relatedness', 'Agency'],
        practicalApplication: 'Nurture autonomy (choice), competence (manageable steps), and relatedness (warm connection) to rekindle internal drive.',
        practitionerQuestions: [
            'Where do you feel you have genuine choice and ownership over your daily decisions?',
            'What small mastery experience would help you feel confident in your own abilities again?',
        ],
        relationalStance: 'Autonomy-supportive coach fostering intrinsic human vitality.',
        pitfalls: 'Imposing top-down behavioral rewards or penalties that destroy intrinsic motivation.',
    },
    {
        id: 'critical_disability',
        title: 'Critical Disability Studies & Crip Time',
        discipline: 'Disability & Inclusion',
        theorist: 'Alison Kafer (2013) & Robert McRuer (2006)',
        seminalYear: 2013,
        inTextCitation: '(Kafer, 2013; McRuer, 2006)',
        apa7Reference: 'Kafer, A. (2013). Feminist, queer, crip. Indiana University Press.',
        keyPublications: [
            'McRuer, R. (2006). Crip theory: Cultural signs of queerness and disability. New York University Press.',
            'Goodley, D. (2016). Disability studies: An interdisciplinary introduction (2nd ed.). SAGE Publications.',
        ],
        academicDisciplineNotes: 'Critical theory challenging compulsory able-bodied temporalities and productivity demands, redefining time through the fluctuating rhythms of impaired bodies.',
        concept: 'Celebrates disability culture and "crip time", challenging compulsory able-bodied productivity and hurried institutional timelines.',
        strength: 'Validates fluctuating energy thresholds, pacing, and bodily autonomy against unforgiving bureaucratic deadlines.',
        limitation: 'Can clash with rigid municipal service delivery KPIs and fast-paced discharge targets.',
        baseInsight: 65,
        baseApplication: 2.0,
        capacityCost: 4,
        rarity: 'Seminal',
        tags: ['Disability', 'Inclusion', 'Crip Time', 'Advocacy', 'Deconstruction'],
        practicalApplication: 'Restructure consultations and care commitments around the person’s bodily rhythms, energy reserves, and unhurried pacing.',
        practitionerQuestions: [
            'How can we pace our work together so it respects your body’s energy cycles without forcing hurried deadlines?',
            'How does society’s demand for constant productivity conflict with what your health truly requires?',
        ],
        relationalStance: 'Crip-time ally validating bodily pacing and flexible temporalities.',
        pitfalls: 'Allowing rigid clinic booking slots to exhaust fragile clients rather than offering flexible scheduling.',
    },
    {
        id: 'systemic_family_therapy',
        title: 'Systemic Family Systems & Circularity',
        discipline: 'Systems Theory',
        theorist: 'Mara Selvini Palazzoli et al. (1980) & Salvador Minuchin (1974)',
        seminalYear: 1980,
        inTextCitation: '(Selvini Palazzoli et al., 1980; Minuchin, 1974)',
        apa7Reference: 'Selvini Palazzoli, M., Boscolo, L., Cecchin, G., & Prata, G. (1980). Hypothesizing-circularity-neutrality: Three guidelines for the conductor of the session. Family Process, 19(1), 3–12. https://doi.org/10.1111/j.1545-5300.1980.00003.x',
        keyPublications: [
            'Minuchin, S. (1974). Families and family therapy. Harvard University Press.',
            'Dallos, R., & Draper, R. (2015). An introduction to family therapy: Systemic theory and practice (4th ed.). Open University Press.',
        ],
        academicDisciplineNotes: 'Milan systemic and structural family therapy principles using circular questioning, hypothesis testing, and neutrality to examine family homeostasis and feedback loops.',
        concept: 'Identifies homeostatic loops, relational triangulations, and circular interactions rather than scapegoating an "identified patient".',
        strength: 'Illuminates how an entire family or care system organises around distress, releasing the individual from solitary blame.',
        limitation: 'Requires skilled facilitation to prevent volatile family escalations during consultations.',
        baseInsight: 60,
        baseApplication: 1.8,
        capacityCost: 4,
        rarity: 'Advanced',
        tags: ['Systems', 'Family', 'Feedback Loops', 'Context', 'Relational'],
        practicalApplication: 'Use circular questioning to map how family members react to each other’s distress patterns, breaking repetitive cycles.',
        practitionerQuestions: [
            'When your son pulls away in silence, how does your partner react, and what does that lead you to do?',
            'If this pattern of worry between you could speak, what fear is it trying to protect the family from?',
        ],
        relationalStance: 'Circularity observer de-triangulating blame and illuminating systemic feedback loops.',
        pitfalls: 'Taking sides with one family member, thereby reinforcing toxic scapegoating dynamics.',
    },
    {
        id: 'social_learning',
        title: 'Social Learning & Self-Efficacy',
        discipline: 'Education & Learning',
        theorist: 'Albert Bandura (1977)',
        seminalYear: 1977,
        inTextCitation: '(Bandura, 1977)',
        apa7Reference: 'Bandura, A. (1977). Social learning theory. Prentice-Hall.',
        keyPublications: [
            'Bandura, A. (1997). Self-efficacy: The exercise of control. W. H. Freeman.',
            'Bandura, A. (1986). Social foundations of thought and action: A social cognitive theory. Prentice-Hall.',
        ],
        academicDisciplineNotes: 'Social cognitive theory explaining human agency and capability development through observational modelling, enactive mastery, and perceived self-efficacy.',
        concept: 'Observational vicarious learning, mastery experiences, and social modelling cultivate resilient self-efficacy beliefs.',
        strength: 'Helps design stepped, manageable mastery tasks that rebuild crushed confidence and positive behavioural habits.',
        limitation: 'Self-efficacy can quickly erode if unaccommodated structural barriers repeatedly sabotage genuine efforts.',
        baseInsight: 40,
        baseApplication: 1.5,
        capacityCost: 2,
        rarity: 'Core',
        tags: ['Learning', 'Self-Efficacy', 'Behavioural', 'Education'],
        practicalApplication: 'Co-design incremental micro-mastery challenges and connect with peer mentors who have walked similar paths.',
        practitionerQuestions: [
            'What is one tiny, achievable success we can set up this week to rebuild your confidence?',
            'Have you ever seen someone in a similar situation navigate this successfully, and what can we learn from them?',
        ],
        relationalStance: 'Self-efficacy mentor scaffolding incremental mastery experiences.',
        pitfalls: 'Setting ambitious behavioral targets that overwhelm the client, reinforcing feelings of failure.',
    },
];
// ============================================================================
// EXPANDED SYNERGISTIC COMBINATIONS (BRITISH ENGLISH & DEEP PEDAGOGY)
// ============================================================================
export const DISCOVERED_COMBINATIONS = [
    {
        id: 'biopsychosocial_synergy',
        name: 'Biopsychosocial Synthesis',
        description: 'Harmonising psychological attunement, sociological insight, and somatic/nursing care.',
        insightBonus: 120,
        multiplierBonus: 2.5,
        pedagogicalSynthesis: 'This seminal synthesis honours the complete human lifeworld. By treating biological symptoms, emotional distress, and social environment as deeply interconnected rather than isolated silos, care becomes humane, scientifically robust, and sustainable.',
        customCheck: (cards) => {
            const disciplines = new Set(cards.map((c) => c.discipline));
            return (disciplines.has('Psychology') &&
                (disciplines.has('Sociology') || disciplines.has('Social Work')) &&
                (disciplines.has('Nursing') || disciplines.has('Public Health')));
        },
    },
    {
        id: 'relational_safety_lens',
        name: 'Relational Safety & Attunement',
        description: 'Uniting Trauma-Informed Practice with secure attachment and compassionate holding.',
        insightBonus: 130,
        multiplierBonus: 2.6,
        pedagogicalSynthesis: 'By intertwining trauma-informed predictability with psychodynamic containment and attachment attunement, you establish a profound holding environment. The client’s hyperactive threat neuroception is soothed, allowing authentic vulnerability to emerge safely.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return (tags.has('Trauma') &&
                (tags.has('Attachment') || tags.has('Psychodynamic') || tags.has('Compassion')) &&
                (tags.has('Safety') || tags.has('Relational')));
        },
    },
    {
        id: 'mindful_self_regulation',
        name: 'Mindful Affect Regulation',
        description: 'Combining cognitive restructuring with soothing compassion, somatic awareness, or distress tolerance.',
        insightBonus: 110,
        multiplierBonus: 2.3,
        pedagogicalSynthesis: 'Rather than fighting internal thoughts or treating symptoms as defective, this combination bridges cognitive reframing with nervous system regulation and gentle self-compassion, transforming self-criticism into calm emotional resilience.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return ((tags.has('Cognitive') || tags.has('Reframing')) &&
                (tags.has('Compassion') || tags.has('Regulation') || tags.has('Mindfulness') || tags.has('Somatic')));
        },
    },
    {
        id: 'empowerment_and_agency',
        name: 'Empowerment & Re-Authoring Agency',
        description: 'Narrative externalisation paired with person-centred empathy and strengths-based autonomy.',
        insightBonus: 125,
        multiplierBonus: 2.5,
        pedagogicalSynthesis: 'This formulation detaches the individual from pathologising diagnostic labels ("the person is not the problem; the problem is the problem"), actively mobilising their inherent wisdom, personal strengths, and self-defined future goals.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return ((tags.has('Narrative') || tags.has('Deconstruction')) &&
                (tags.has('Person-Centred') || tags.has('Strengths-Based') || tags.has('Agency') || tags.has('Autonomy')));
        },
    },
    {
        id: 'person_in_context',
        name: 'Person in Ecological Context',
        description: 'Embedding person-centred warmth within wider ecological systems and social determinants.',
        insightBonus: 100,
        multiplierBonus: 2.2,
        pedagogicalSynthesis: 'This synergy avoids the fatal trap of individualising social suffering. It holds the individual’s subjective emotions with deep warmth whilst simultaneously addressing the housing, poverty, and neighbourhood systems impinging upon them.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return (tags.has('Person-Centred') &&
                (tags.has('Systems') || tags.has('Environmental')) &&
                (tags.has('Social Determinants') || tags.has('Structural')));
        },
    },
    {
        id: 'power_lens',
        name: 'Power & Anti-Oppression Lens',
        description: 'Challenging structural inequalities, surveillance culture, and institutional marginalisation.',
        insightBonus: 90,
        multiplierBonus: 2.0,
        pedagogicalSynthesis: 'A vital critical formulation that exposes how institutional hierarchies, diagnostic labels, and statutory surveillance can unintentionally police service users. It restores democratic power-sharing and ethical accountability to practice.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return (tags.has('Power') &&
                (tags.has('Inequality') || tags.has('Social Justice') || tags.has('Advocacy') || tags.has('Surveillance')));
        },
    },
    {
        id: 'barriers_not_deficits',
        name: 'Barriers, Not Deficits (Social Model)',
        description: 'Social Model of Disability combined with neuro-affirming acceptance and sensory accommodations.',
        insightBonus: 130,
        multiplierBonus: 2.6,
        pedagogicalSynthesis: 'Radically reframes casework from "fixing broken patients" to dismantling sensory, physical, and bureaucratic barriers. Validates neurodivergent ways of being and centres dignified accessibility across all environments.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return ((tags.has('Disability') || tags.has('Barriers')) &&
                (tags.has('Inclusion') || tags.has('Neurodiversity') || tags.has('Sensory')));
        },
    },
    {
        id: 'whose_voice',
        name: 'Whose Voice? Authentic Co-Production',
        description: 'Centring authentic lived experience and equalising decision-making power with service users.',
        insightBonus: 105,
        multiplierBonus: 2.3,
        pedagogicalSynthesis: 'Dismantles professional paternalism by positioning the service user as the primary expert on their own lifeworld. Care decisions and support pathways are co-produced as equal partners.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return (tags.has('Co-production') ||
                (tags.has('Lived Experience') && (tags.has('Advocacy') || tags.has('Rights'))));
        },
    },
    {
        id: 'somatic_neuroception_safety',
        name: 'Somatic Neuroception & Safety',
        description: 'Polyvagal nervous system attunement aligned with sensory accommodations and gentle pacing.',
        insightBonus: 115,
        multiplierBonus: 2.4,
        pedagogicalSynthesis: 'Integrates autonomic nervous system biology with environmental adaptations. Recognises that cognitive conversations cannot succeed while the somatic body remains trapped in fight, flight, or dorsal freeze.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return (tags.has('Somatic') &&
                (tags.has('Sensory') || tags.has('Regulation') || tags.has('Trauma')));
        },
    },
    {
        id: 'existential_capabilities',
        name: 'Existential Meaning & Human Flourishing',
        description: 'Uniting existential purpose with the capabilities approach to foster genuine dignity.',
        insightBonus: 140,
        multiplierBonus: 2.7,
        pedagogicalSynthesis: 'Elevates practice beyond mere survival or symptom reduction. Champions the person’s substantive freedom to pursue what gives their life purpose, creative joy, and enduring human dignity.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return ((tags.has('Existential') || tags.has('Meaning')) &&
                (tags.has('Capabilities') || tags.has('Human Rights') || tags.has('Dignity')));
        },
    },
    {
        id: 'harm_reduction_and_motivation',
        name: 'Pragmatic Harm Reduction & Respect',
        description: 'Non-judgmental harm minimisation paired with empathetic motivational dialogue.',
        insightBonus: 95,
        multiplierBonus: 2.0,
        pedagogicalSynthesis: 'Meets the individual where they are without moralising or forcing premature abstinence. Builds an enduring therapeutic alliance that keeps the door open and minimizes life-threatening risks.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return (tags.has('Harm Reduction') &&
                (tags.has('Motivation') || tags.has('Change') || tags.has('Public Health')));
        },
    },
    {
        id: 'cultural_humility_synergy',
        name: 'Cultural Humility & Structural Safety',
        description: 'Anti-discriminatory respect and genuine cultural safety embedded in care pathways.',
        insightBonus: 110,
        multiplierBonus: 2.3,
        pedagogicalSynthesis: 'Shifts professional posture from passive cultural competence to active cultural humility. Ensures the power to evaluate whether care feels safe and respectful rests with the service recipient.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return (tags.has('Cultural Safety') ||
                (tags.has('Social Justice') && tags.has('Respect')));
        },
    },
    {
        id: 'human_rights_and_capabilities',
        name: 'Human Rights & Real Freedoms',
        description: 'FREDA human rights principles combined with genuine everyday capabilities to flourish.',
        insightBonus: 140,
        multiplierBonus: 2.7,
        pedagogicalSynthesis: 'Guarantees that care interventions are not merely legally compliant under the Human Rights Act, but actively expand the person’s real daily capabilities and bodily autonomy in their community.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return ((tags.has('Human Rights') || tags.has('Ethics')) &&
                (tags.has('Capabilities') || tags.has('Dignity') || tags.has('Autonomy')));
        },
    },
    {
        id: 'systemic_restorative_repair',
        name: 'Systemic Repair & Circular Understanding',
        description: 'Restorative justice practices illuminated by systemic family feedback dynamics.',
        insightBonus: 120,
        multiplierBonus: 2.4,
        pedagogicalSynthesis: 'Resolves interpersonal and community conflict by replacing punitive blaming with circular understanding of relational loops and voluntary harm repair.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return ((tags.has('Restorative') || tags.has('Conflict')) &&
                (tags.has('Systems') || tags.has('Family') || tags.has('Feedback Loops')));
        },
    },
    {
        id: 'reflective_action_cycle',
        name: 'Reflective Practice & Practitioner Humility',
        description: 'Deep structured practitioner reflection translating critical analysis into safe, compassionate action.',
        insightBonus: 75,
        multiplierBonus: 1.6,
        pedagogicalSynthesis: 'Embeds continuous self-critique into multidisciplinary teamwork. Prevents practice drift, vicarious trauma, and dogmatic assumptions through structured ethical reflection.',
        customCheck: (cards) => {
            const tags = new Set(cards.flatMap((c) => c.tags));
            return (tags.has('Reflective') &&
                (tags.has('Learning') || tags.has('Insight') || tags.has('Action Plan') || tags.has('Practitioner')));
        },
    },
    {
        id: 'interdisciplinary_trio',
        name: 'Interdisciplinary Synthesis',
        description: 'Synthesising insights across 3 or more distinct academic disciplines.',
        insightBonus: 70,
        multiplierBonus: 1.6,
        pedagogicalSynthesis: 'Transcend single-discipline tunnel vision. By weaving together three distinct traditions of thought, this formulation achieves a rich, multifaceted understanding of human distress.',
        customCheck: (cards) => {
            const disciplines = new Set(cards.map((c) => c.discipline));
            return disciplines.size >= 3;
        },
    },
];
// ============================================================================
// ACADEMIC LENSES (BRITISH ENGLISH)
// ============================================================================
export const ACADEMIC_LENSES = [
    {
        id: 'lens_sociologist',
        name: 'The Sociologist',
        description: 'Sociology & Social Work theories grant +25 Insight and +0.4x Multiplier.',
        cost: 12,
        iconName: 'Globe',
        effectType: 'sociologist',
    },
    {
        id: 'lens_systems_thinker',
        name: 'The Systems Thinker',
        description: '+35 Insight to all Systems Theory, Environmental, and Family theories.',
        cost: 14,
        iconName: 'Network',
        effectType: 'systems_thinker',
    },
    {
        id: 'lens_critical_thinker',
        name: 'The Critical Synthesiser',
        description: '+0.6x Multiplier when combining individual psychological and structural theories.',
        cost: 16,
        iconName: 'Zap',
        effectType: 'critical_thinker',
    },
    {
        id: 'lens_lived_experience',
        name: 'Lived Experience Ally',
        description: '+0.5x Multiplier whenever Co-Production, Rights, or Advocacy theories are played.',
        cost: 15,
        iconName: 'HeartHandshake',
        effectType: 'lived_experience',
    },
    {
        id: 'lens_relational_practitioner',
        name: 'The Relational Practitioner',
        description: '+0.3x Multiplier for each Relational, Attachment, or Holding theory in consultation.',
        cost: 14,
        iconName: 'Users',
        effectType: 'relational',
    },
    {
        id: 'lens_researcher',
        name: 'The Senior Practitioner',
        description: 'Earn +3 Knowledge Points whenever you synthesize an Interdisciplinary combination (3+ disciplines).',
        cost: 10,
        iconName: 'BookOpen',
        effectType: 'researcher',
    },
    {
        id: 'lens_neurodiversity_advocate',
        name: 'Neurodiversity Advocate',
        description: 'Disability & Inclusion theories grant +45 Insight and +0.5x Application Multiplier.',
        cost: 15,
        iconName: 'Sparkles',
        effectType: 'neurodiversity',
    },
    {
        id: 'lens_public_health_strategist',
        name: 'Public Health Strategist',
        description: 'Public Health and Social Determinants theories grant +35 Insight and +0.3x Multiplier.',
        cost: 12,
        iconName: 'ShieldPlus',
        effectType: 'public_health',
    },
];
// ============================================================================
// RESEARCH PACKS (BRITISH ENGLISH)
// ============================================================================
export const RESEARCH_PACKS = [
    {
        id: 'pack_strong_evidence',
        name: 'Peer-Reviewed Evidence Dossier',
        description: 'Contains 3 rigorously validated theories offering strong baseline insights.',
        cost: 10,
        cardCount: 3,
        minRarity: 'Core',
    },
    {
        id: 'pack_psych_social',
        name: 'Psychology & Social Care Booster',
        description: 'Specialised dossier containing 3 relational, cognitive, and therapeutic theories.',
        cost: 8,
        cardCount: 3,
        poolDisciplines: ['Psychology', 'Social Work'],
    },
    {
        id: 'pack_health_inclusion',
        name: 'Healthcare & Inclusion Archive',
        description: 'Specialised dossier containing 3 nursing, disability, and public health theories.',
        cost: 8,
        cardCount: 3,
        poolDisciplines: ['Nursing', 'Disability & Inclusion', 'Public Health'],
    },
    {
        id: 'pack_seminal_theories',
        name: 'Foundational Masterworks Dossier',
        description: 'Contains 3 rare, high-impact seminal masterwork theories for critical synthesis.',
        cost: 16,
        cardCount: 3,
        minRarity: 'Advanced',
    },
];
// ============================================================================
// CURATED STAPLE CASE SCENARIOS (WITH COMPLEXITY TIERS & CAPACITY RULES)
// ============================================================================
export const CURATED_CASE_SCENARIOS = [
    {
        caseNumber: 1,
        title: 'Case 1: "Why Won\'t He Engage?"',
        subtitle: 'Motivational ambivalence & non-judgmental space',
        complexityTier: 'Foundational Lived Experience',
        sector: 'Community Mental Health',
        targetScore: 280,
        turns: 4,
        discards: 3,
        practitionerCapacity: 10,
        maxFormulationSlots: 4,
        clientName: 'Marcus Taylor',
        clientAge: 44,
        scenario: 'Marcus has missed three outpatient appointments. Clinic notes label him "unmotivated and evasive". In truth, he feels patronised by clinical jargon and fears being judged for his precarious zero-hours warehouse shifts, which he cannot afford to miss.',
        backgroundSummary: 'Former factory engineer who experienced redundancy; deeply values providing for his family and dreads looking weak.',
        relationalDilemma: 'Withdraws into defensive silence when spoken to with clinical detachment; worries his children will see him struggle.',
        environmentalPressure: 'Inflexible clinic hours, fear of wage deductions, and unreliable bus connections across the borough.',
        emotionalVulnerability: 'Crushing internalised shame regarding unemployment and feeling like a burden to his household.',
        unspokenVulnerabilities: 'Terrified that an official psychiatric diagnosis on record will make him unemployable in industrial trades.',
        institutionalBarriers: 'Automated 3-strike discharge policy that penalises missed appointments without checking work shift patterns.',
        fieldObservations: 'Neatly folded appointment letters kept in his coat pocket; visibly tenses when asked about missed slots.',
        primaryTheoryFits: ['Person-Centred Practice', 'Motivational Interviewing', 'Compassion-Focused Therapy', 'Social Determinants of Health'],
        bossModifierName: 'Motivational Ambivalence',
        bossModifierDesc: 'Psychology & Social Work theories gain +20 bonus Insight.',
        bonusTag: 'Relational',
        secondaryBonusTag: 'Person-Centred',
        mentorPrompt: 'Let\'s take a quiet breath and look past the "uncooperative" label. Marcus is trying to protect his dignity under immense financial strain.',
    },
    {
        caseNumber: 2,
        title: 'Case 2: "The Frequent Attender"',
        subtitle: 'Somatic distress vs social isolation & fuel poverty',
        complexityTier: 'Intersecting Dilemmas',
        sector: 'Urgent Care & Public Health',
        targetScore: 620,
        turns: 4,
        discards: 3,
        practitionerCapacity: 10,
        maxFormulationSlots: 4,
        clientName: 'Dorothy Wright',
        clientAge: 78,
        scenario: 'Dorothy has visited the emergency department twelve times this winter reporting tight chest discomfort and palpitations. Physical ECGs are normal. She lives alone since her husband passed away, and she keeps her heating off to avoid unaffordable gas bills.',
        backgroundSummary: 'Retired primary school teacher; lost her partner of 52 years last autumn. Fiercely independent and polite.',
        relationalDilemma: 'The emergency department staff are the only people who speak with her for days at a time.',
        environmentalPressure: 'Freezing, damp council flat with broken radiators; rising winter heating tariffs and empty cupboards.',
        emotionalVulnerability: 'Terrifying silent loneliness in the evenings, where normal bodily sensations spiral into panic.',
        unspokenVulnerabilities: 'Severe grief-induced hypervigilance; palpitations are somatic manifestations of panic in an unheated room.',
        institutionalBarriers: 'Emergency department triage silos that discharge normal ECGs within 4 hours without contacting adult social services.',
        fieldObservations: 'Wears two heavy cardigans indoors; tea bags hung up to dry and re-use; keeps a photograph of her husband in her handbag.',
        primaryTheoryFits: ['Biopsychosocial Formulation', 'Social Determinants of Health', 'Ecological Systems Theory', 'Attachment & Internal Working Models'],
        bossModifierName: 'Silo Working Trap',
        bossModifierDesc: 'Single-discipline plays suffer a -25% penalty. Playing 2+ distinct disciplines grants +0.5x Multiplier!',
        bonusTag: 'Systems',
        secondaryBonusTag: 'Social Determinants',
        mentorPrompt: 'Notice how Dorothy\'s physical symptoms are inextricably woven into grief and a freezing home. Medical tests alone will never heal this.',
    },
    {
        caseNumber: 3,
        title: 'Case 3: "Challenging Behaviour"',
        subtitle: 'Sensory overload vs punitive school discipline',
        complexityTier: 'Intersecting Dilemmas',
        sector: 'Adolescent Education & Inclusion',
        targetScore: 1100,
        turns: 4,
        discards: 3,
        practitionerCapacity: 11,
        maxFormulationSlots: 4,
        clientName: 'Kai Sharma',
        clientAge: 16,
        scenario: 'Kai experiences distressing meltdowns during crowded corridor transitions between classes. College staff interpret this as "wilful aggression" and threaten exclusion. In reality, fluorescent light flicker and booming cafeteria acoustics cause intense somatic sensory agony.',
        backgroundSummary: 'Passionate digital animator with undiagnosed sensory processing sensitivity; recently moved to a large sixth form college.',
        relationalDilemma: 'Feels misunderstood by teachers who shout instructions louder when he is already in sensory shutdown.',
        environmentalPressure: 'Overcrowded corridors, loud school bells, flickering fluorescent tubes, and no quiet de-escalation space.',
        emotionalVulnerability: 'Fears being labelled "violent" and losing his chance to study computer animation.',
        unspokenVulnerabilities: 'Extreme shame following meltdowns; masking sensory agony for hours until autonomic nervous system collapse.',
        institutionalBarriers: 'Zero-tolerance school behaviour policies that treat autonomic distress as intentional misconduct.',
        fieldObservations: 'Holds hands over ears during lesson bells; draws intricate calming geometric patterns in margins of textbooks.',
        primaryTheoryFits: ['Sensory Processing & Environmental Fit', 'Social Model of Disability', 'Neurodiversity Affirming Paradigm', 'Polyvagal Autonomic Regulation'],
        bossModifierName: 'The Deficit Label',
        bossModifierDesc: 'Disability & Inclusion theories grant +50 Insight. Purely punitive views lose points.',
        bonusTag: 'Sensory',
        secondaryBonusTag: 'Neurodiversity',
        mentorPrompt: 'Kai isn\'t being defiant—his nervous system is in unbearable pain. What happens when we adapt the sensory environment instead of punishing the child?',
    },
    {
        caseNumber: 4,
        title: 'Case 4: "Non-Compliant"',
        subtitle: 'Health literacy, power hierarchies & cultural safety',
        complexityTier: 'Intersecting Dilemmas',
        sector: 'Primary Healthcare & Community Nursing',
        targetScore: 1750,
        turns: 4,
        discards: 3,
        practitionerCapacity: 11,
        maxFormulationSlots: 4,
        clientName: 'Amina Khatun',
        clientAge: 53,
        scenario: 'Amina was diagnosed with type 2 diabetes but has not collected her prescribed insulin. The clinic interpreter speaks a different regional dialect, and she was handed complex English leaflets she cannot read. The multidisciplinary team claims she is "in denial".',
        backgroundSummary: 'Caring grandmother who arrived in the UK five years ago; relies on her 12-year-old granddaughter to translate letters.',
        relationalDilemma: 'Feels deeply embarrassed to admit she cannot read the leaflets; feels rushed by clinicians looking at computer monitors.',
        environmentalPressure: 'Language barriers, lack of culturally tailored dietary guidance, and fear of invasive medical injections.',
        emotionalVulnerability: 'Fears losing her sight or independence; feels invisible within the clinical hierarchy.',
        unspokenVulnerabilities: 'Terrified of needles due to childhood trauma in a conflict zone; ashamed that she cannot read administrative English.',
        institutionalBarriers: 'Lack of accredited dialect interpreters and clinic consultations capped at 8 minutes.',
        fieldObservations: 'Unopened prescription slips kept in a decorative tin; speaks warmly when addressed with patience and eye contact.',
        primaryTheoryFits: ['Cultural Safety & Humility', 'Anti-Oppressive Practice', 'Active Listening & Attunement', 'Co-Production & Lived Experience'],
        bossModifierName: 'The "Expert Knows Best" Stance',
        bossModifierDesc: 'Power, Communication & Cultural Safety theories gain +1.0x extra Multiplier.',
        bonusTag: 'Communication',
        secondaryBonusTag: 'Cultural Safety',
        mentorPrompt: 'When services fail to communicate with humility, the system creates its own barriers. Let\'s explore how cultural safety restores trust.',
    },
    {
        caseNumber: 5,
        title: 'Case 5: "Ready for Discharge"',
        subtitle: 'Clinical fitness vs inaccessible community housing',
        complexityTier: 'Deeply Entangled Complexities',
        sector: 'Hospital Discharge & Rehabilitation',
        targetScore: 2600,
        turns: 4,
        discards: 3,
        practitionerCapacity: 12,
        maxFormulationSlots: 4,
        clientName: 'Arthur Bennett',
        clientAge: 69,
        scenario: 'Arthur has regained mobility following a mild stroke. Facing severe bed pressures, the hospital discharge team has marked him "medically fit for discharge". However, Arthur lives in a third-floor flat with no lift, no handrails, and no family living nearby.',
        backgroundSummary: 'Former postal worker; lives alone; fiercely proud of his self-reliance and reluctant to make a fuss.',
        relationalDilemma: 'The hospital discharge team and municipal social care department are arguing over funding responsibilities.',
        environmentalPressure: 'Three flights of steep concrete steps, narrow doorways unsuitable for walking frames, and empty fridge.',
        emotionalVulnerability: 'Terrified of falling at the bottom of the stairs with no way to call for help.',
        unspokenVulnerabilities: 'Severe post-stroke spatial disorientation on staircases; hiding his terror so he won’t be seen as a burden.',
        institutionalBarriers: 'Pressure on acute wards to hit 4-hour discharge KPIs regardless of community housing adaptations.',
        fieldObservations: 'Grips bed rails tightly when standing; speaks wistfully about his small balcony garden plants.',
        primaryTheoryFits: ['Roper-Logan-Tierney Lifespan Model', 'Ecological Systems Theory', 'Social Model of Disability', 'Strengths-Based Approach'],
        bossModifierName: 'Bed Pressure & Tick-Boxes',
        bossModifierDesc: 'Consultations combining 3+ theories receive +50 bonus Insight!',
        bonusTag: 'Systems',
        secondaryBonusTag: 'Activities of Living',
        mentorPrompt: 'A patient is never just "medically fit" in isolation. True recovery requires safe environmental scaffolding in the community.',
    },
    {
        caseNumber: 6,
        title: 'Case 6: "The Right to Take Risks"',
        subtitle: 'Autonomy rights vs risk-averse institutional protection',
        complexityTier: 'Deeply Entangled Complexities',
        sector: 'Adult Social Care & Supported Living',
        targetScore: 3800,
        turns: 4,
        discards: 3,
        practitionerCapacity: 12,
        maxFormulationSlots: 4,
        clientName: 'Elena Rossi',
        clientAge: 23,
        scenario: 'Elena has cerebral palsy and uses an electric powerchair. She has won a place at university and wishes to move into adapted student accommodation. Her family and care manager, terrified of potential vulnerability, are lobbying to place her into a residential nursing home.',
        backgroundSummary: 'Passionate law student and disability rights blogger; experienced significant institutional paternalism in childhood.',
        relationalDilemma: 'Her parents love her deeply but conflate physical assistance needs with incapacity to make life choices.',
        environmentalPressure: 'Care funding bureaucracy demanding residential placement due to rigid local authority block contracts.',
        emotionalVulnerability: 'Fears having her youth, ambitions, and personal autonomy smothered under the banner of "safety".',
        unspokenVulnerabilities: 'Desperate craving for independent social life and adult identity free from round-the-clock parental surveillance.',
        institutionalBarriers: 'Risk-averse local authority panels that automatically equate physical disability with cognitive incapacity.',
        fieldObservations: 'Has already mapped accessible campus routes on her tablet; articulates legal precedents with sharp clarity.',
        primaryTheoryFits: ['Human Rights & FREDA Principles', 'Capabilities & Real Freedoms Approach', 'Self-Determination Theory', 'Critical Disability Studies & Crip Time'],
        bossModifierName: 'Diagnostic Overshadowing',
        bossModifierDesc: 'Autonomy, Human Rights & Strengths-Based theories gain +60 Insight and +0.5x Multiplier.',
        bonusTag: 'Autonomy',
        secondaryBonusTag: 'Human Rights',
        mentorPrompt: 'Protection without autonomy is mere containment. Elena has the lawful right to take positive, dignified risks in her own life.',
    },
    {
        caseNumber: 7,
        title: 'Case 7: "The Multi-Agency Impasse"',
        subtitle: 'Dual diagnosis, threshold ping-pong & housing crisis',
        complexityTier: 'Deeply Entangled Complexities',
        sector: 'Complex Needs & Harm Reduction',
        targetScore: 5300,
        turns: 4,
        discards: 3,
        practitionerCapacity: 12,
        maxFormulationSlots: 4,
        clientName: 'Leon Price',
        clientAge: 31,
        scenario: 'Leon lives with bipolar disorder and alcohol dependence. Mental health services state he must achieve total sobriety before therapy can begin; addiction services argue his acute manic mood swings prevent group work. Meanwhile, his landlord is proceeding with eviction.',
        backgroundSummary: 'Former carpenter who developed alcohol dependence following the sudden loss of his brother and job loss.',
        relationalDilemma: 'Passed between agencies like a parcel; feels no professional actually sees him as a human being.',
        environmentalPressure: 'Imminent court eviction date, street homelessness risk, and predatory local drug networks.',
        emotionalVulnerability: 'Uses alcohol to numb overwhelming manic racing thoughts and agonizing bereavement flashbacks.',
        unspokenVulnerabilities: 'Intense unresolved trauma from discovering his brother’s death; alcohol is his only somatic sedative.',
        institutionalBarriers: 'Siloed statutory commission models with exclusionary eligibility criteria (dual diagnosis ping-pong).',
        fieldObservations: 'Carries his carpenter toolbelt in a rucksack; hands tremble with exhaustion; courteous and soft-spoken.',
        primaryTheoryFits: ['Harm Reduction Philosophy', 'Trauma-Informed Practice', 'Dialectical Behaviour Therapy (DBT)', 'Anti-Oppressive Practice'],
        bossModifierName: '"Not Our Remit" Mentality',
        bossModifierDesc: 'Systems, Social Justice & Harm Reduction theories gain +1.5x Multiplier!',
        bonusTag: 'Harm Reduction',
        secondaryBonusTag: 'Social Justice',
        mentorPrompt: 'When agencies build siloed eligibility walls, the most vulnerable fall through the cracks. Leon needs collaborative, whole-person containment.',
    },
    {
        caseNumber: 8,
        title: 'Case 8: "The Whole Lifeworld (Capstone)"',
        subtitle: 'Critical synthesis across family, health, rights & community',
        complexityTier: 'Deeply Entangled Complexities',
        sector: 'Integrated Complex Casework',
        targetScore: 7200,
        turns: 4,
        discards: 3,
        practitionerCapacity: 12,
        maxFormulationSlots: 4,
        clientName: 'Sophia & The Nnamdi Family',
        clientAge: 48,
        scenario: 'Sophia is a single mother caring for her autistic teenage son and her elderly father who has progressive dementia, whilst managing her own chronic fibromyalgia and an impending section 21 eviction. Single-discipline quick fixes will shatter under this weight. A holistic, interdisciplinary synthesis is required.',
        backgroundSummary: 'Former NHS healthcare assistant whose health deteriorated under 24/7 caregiving duties; pillar of her local church.',
        relationalDilemma: 'Exhausted by constant advocacy battles with local councils while shielding her son and father from distress.',
        environmentalPressure: 'Private landlord selling the property; lack of respite services; fragmented adult and children’s social care teams.',
        emotionalVulnerability: 'Severe physical exhaustion, chronic bodily pain, and grief for her own unlived career and rest.',
        unspokenVulnerabilities: 'Silent suicidal ideation driven by the terrifying belief that she cannot survive her family’s looming eviction.',
        institutionalBarriers: 'Completely uncoordinated local authority departments requiring four separate assessment interviews in one week.',
        fieldObservations: 'Colour-coded binders of medical letters and care plans on the kitchen table; visibly trembling from sheer physical fatigue.',
        primaryTheoryFits: ['Biopsychosocial Formulation', 'Systemic Family Systems & Circularity', 'Co-Production & Lived Experience', 'Human Rights & FREDA Principles'],
        bossModifierName: 'Grand Interdisciplinary Synthesis',
        bossModifierDesc: 'All discovered combinations yield +120 Insight and +2.0x Application Multiplier!',
        bonusTag: 'Integrative',
        secondaryBonusTag: 'Co-production',
        mentorPrompt: 'This is the culmination of our practice. Hold Sophia\'s entire family in compassionate, multi-dimensional view. Every discipline has a vital note in this chord.',
    },
];
export const CASE_SCENARIOS = CURATED_CASE_SCENARIOS;
export const PROCEDURAL_CASE_POOLS = {
    firstNames: [
        'Tariq', 'Chloe', 'Dev', 'Hannah', 'Samuel', 'Priya', 'Liam', 'Fatima',
        'Niall', 'Kiran', 'Grace', 'Oluwaseun', 'Evelyn', 'Zayn', 'Maya', 'Callum',
        'Isobel', 'Arjun', 'Bethan', 'Jamal', 'Rowan', 'Sorcha', 'Mateo', 'Dalia',
    ],
    surnames: [
        'O\'Connor', 'Patel', 'MacDonald', 'Adeyemi', 'Davies', 'Chen', 'Murphy',
        'Al-Mansoor', 'Kowalski', 'Campbell', 'Goddard', 'Hussain', 'Sinclair',
        'Bhardwaj', 'Taylor', 'O\'Neill', 'Okafor', 'Venkatesh', 'Brennan', 'Farah',
    ],
    ages: [17, 21, 28, 34, 42, 49, 56, 63, 71, 79, 84],
    sectors: [
        'Community Mental Health',
        'Adult Social Care & Supported Living',
        'Youth Transitions & Education',
        'Hospital Discharge & Complex Rehabilitation',
        'Public Health & Community Outreach',
        'Neurodiversity & Sensory Advocacy',
        'Palliative Care & Bereavement Support',
        'Substance Use & Harm Reduction',
        'Restorative Justice & Youth Diversion',
        'Carer Support & Family Well-being',
    ],
    subjectProfiles: [
        {
            role: 'Former hospitality supervisor',
            background: 'Experienced sudden cardiac illness and redundancy; struggling to transition into sedentary office roles.',
            identity: 'Fiercely proud of their former work ethic; uncomfortable asking for statutory welfare assistance.',
            unspoken: 'Terrified that their physical identity and breadwinner status are gone forever.',
        },
        {
            role: 'Second-year university student',
            background: 'First in their family to attend higher education; managing undiagnosed ADHD and intense sensory overload in lecture halls.',
            identity: 'Creative and insightful, but exhausted from masking cognitive differences to fit in.',
            unspoken: 'Severe imposter syndrome; worries that failing a module will let down their entire extended family.',
        },
        {
            role: 'Retired postal worker and carer',
            background: 'Full-time carer for their partner with Parkinson\'s disease; experiencing severe sleep deprivation and isolation.',
            identity: 'Devoted and protective, but quietly reaching the brink of physical and emotional collapse.',
            unspoken: 'Harbours profound, unspoken terror about who will care for their partner if their own health collapses.',
        },
        {
            role: 'Care leaver and apprentice joiner',
            background: 'Transitioning out of local authority foster care into an independent bedsit without family safety nets.',
            identity: 'Practical and determined, yet deeply wary of statutory professionals due to past instability.',
            unspoken: 'Carries deep abandonment wounds; expects professionals to vanish as soon as casework budgets expire.',
        },
        {
            role: 'Community choir leader and grandmother',
            background: 'Living with progressive osteoarthritis and chronic pain following the bereavement of her lifelong neighbour.',
            identity: 'A cherished pillar in her local neighbourhood who now struggles with basic domestic activities.',
            unspoken: 'Feels invisible and useless when unable to host community choir practices in her living room.',
        },
        {
            role: 'Former transport driver with brain injury',
            background: 'Sustained a traumatic brain injury in a road traffic collision three years ago; experiences fatigue and executive function challenges.',
            identity: 'Yearns to regain meaningful community participation without being treated as an invalid.',
            unspoken: 'Grieves their lost cognitive processing speed; experiences panic when confronted with complex paperwork.',
        },
        {
            role: 'Single parent of an autistic child',
            background: 'Navigating tribunal appeals for an Education, Health and Care Plan (EHCP) while working shifts as a care assistant.',
            identity: 'Tireless advocate who feels perpetually dismissed by school administrative panels.',
            unspoken: 'Exhausted by constant adversarial litigation; feels judged by school staff as an "over-anxious parent".',
        },
        {
            role: 'Refugee and former community pharmacist',
            background: 'Rebuilding life in a new city while awaiting professional qualification re-accreditation; lives in temporary hotel housing.',
            identity: 'Highly qualified professional enduring profound status loss, language barriers, and social isolation.',
            unspoken: 'Grieves the loss of their community clinic and the daily dignity of serving neighbours as a healthcare professional.',
        },
    ],
    relationalDilemmas: [
        {
            title: 'Institutional Distrust & Fear of Judgment',
            description: 'Has experienced repeated tick-box clinical assessments that felt cold, leaving them hesitant to disclose their true difficulties.',
            bonusTag: 'Relational',
        },
        {
            title: 'Family Role Reversal & Protective Secrecy',
            description: 'Hides worsening physical symptoms from their adult children to avoid becoming an emotional or financial burden.',
            bonusTag: 'Attachment',
        },
        {
            title: 'Breakdown of Therapeutic Alliance',
            description: 'A previous practitioner made unannounced safeguarding referrals without consultation, destroying their sense of trust.',
            bonusTag: 'Alliance',
        },
        {
            title: 'Carer Fatigue & Resentment Guilt',
            description: 'Experiences overwhelming exhaustion and feelings of guilt for occasionally feeling resentful about 24/7 caring duties.',
            bonusTag: 'Compassion',
        },
        {
            title: 'Social Alienation & Digital Exclusion',
            description: 'All local services have moved to online portals, cutting them off from direct face-to-face human conversation.',
            bonusTag: 'Communication',
        },
    ],
    environmentalPressures: [
        {
            title: 'Precarious Tenancy & Disrepair',
            description: 'Lives in a damp private rented flat with severe mould, broken heating, and a landlord threatening section 21 eviction.',
            bonusTag: 'Systems',
            barrier: 'Inaccessible housing market and unresponsiveness of private landlords to disrepair notices.',
        },
        {
            title: 'Bureaucratic Silo Fragmentation',
            description: 'Health, housing, and social care departments refuse to take lead responsibility, leaving the case in administrative limbo.',
            bonusTag: 'Social Determinants',
            barrier: 'Disjointed statutory funding streams and restrictive eligibility thresholds across borough boundaries.',
        },
        {
            title: 'Sensory Overwhelm in Physical Premises',
            description: 'The local clinic uses buzzing strip lighting, echoing corridors, and crowded waiting rooms that trigger acute sensory distress.',
            bonusTag: 'Sensory',
            barrier: 'Rigid architectural and clinic layouts devoid of sensory quiet spaces.',
        },
        {
            title: 'Welfare Benefit Sanctions & Food Insecurity',
            description: 'A missed appointment resulted in a welfare sanction, leaving their prepayment electricity meter empty and cupboards bare.',
            bonusTag: 'Inequality',
            barrier: 'Punitive statutory welfare conditionality and automated sanctions.',
        },
        {
            title: 'Inaccessible Transport Links',
            description: 'No direct wheelchair-accessible bus route connects their housing estate to the regional hospital treatment centre.',
            bonusTag: 'Barriers',
            barrier: 'Physical infrastructure deficits and cuts to local subsidised community transport.',
        },
    ],
    emotionalVulnerabilities: [
        {
            title: 'Debilitating Internalised Shame',
            description: 'Blames themselves entirely for their physical or mental health struggles, feeling unworthy of compassionate support.',
            bonusTag: 'Compassion',
        },
        {
            title: 'Loss of Meaning & Autonomy',
            description: 'Mourns the loss of their former career and identity, feeling as though institutional decisions are made entirely over their head.',
            bonusTag: 'Autonomy',
        },
        {
            title: 'Hypervigilance & Somatic Exhaustion',
            description: 'Constant nervous system fight-or-flight activation leaves them physically depleted, with persistent headaches and insomnia.',
            bonusTag: 'Trauma',
        },
        {
            title: 'Existential Dread & Grief',
            description: 'Unprocessed grief over accumulated life losses manifests as panic attacks, tearfulness, and profound withdrawal.',
            bonusTag: 'Existential',
        },
        {
            title: 'Masking & Identity Erosion',
            description: 'Exhausts their energy every day trying to appear neurotypical and cheerful to avoid pathologising comments from colleagues.',
            bonusTag: 'Neurodiversity',
        },
    ],
    fieldObservations: [
        'Unopened brown official envelopes stacked neatly beside the front door, untouched out of acute dread.',
        'Visibly softens and exhales when offered an unhurried, warm cup of tea and a moment of quiet listening.',
        'Carries a notebook filled with meticulously noted medication times and questions they were too intimidated to ask doctors.',
        'Tenses visibly and clutches their handbag tightly whenever administrative forms or compliance terms are mentioned.',
        'A beautifully cared-for houseplant sits on the windowsill—a clear symbol of their gentle nurturing instincts amidst hardship.',
        'Uses subtle humor and polite deflection to conceal how little food remains in their kitchen cupboards.',
    ],
    bossModifiers: [
        {
            name: 'Empathetic Holding Space',
            desc: 'Person-Centred & Relational theories gain +25 Insight and +0.3x Multiplier.',
            primaryTag: 'Person-Centred',
            secondaryTag: 'Relational',
        },
        {
            name: 'Dismantling Structural Barriers',
            desc: 'Systems Theory & Disability Model theories gain +35 Insight and +0.4x Multiplier.',
            primaryTag: 'Systems',
            secondaryTag: 'Disability',
        },
        {
            name: 'Somatic & Trauma Containment',
            desc: 'Trauma-Informed & Polyvagal theories gain +30 Insight and +0.5x Multiplier.',
            primaryTag: 'Trauma',
            secondaryTag: 'Somatic',
        },
        {
            name: 'Agency & Strengths Amplification',
            desc: 'Narrative & Strengths-Based theories gain +30 Insight and +0.4x Multiplier.',
            primaryTag: 'Narrative',
            secondaryTag: 'Strengths-Based',
        },
        {
            name: 'Equitable Rights & Co-Production',
            desc: 'Human Rights & Co-Production theories gain +40 Insight and +0.5x Multiplier.',
            primaryTag: 'Human Rights',
            secondaryTag: 'Co-production',
        },
    ],
};
/**
 * Procedurally generates a bespoke, empathetic case scenario from combinatorial narrative modules.
 */
export function generateProceduralCase(caseNumber = 1, difficultyMultiplier = 1.0) {
    const p = PROCEDURAL_CASE_POOLS;
    const firstName = p.firstNames[Math.floor(Math.random() * p.firstNames.length)];
    const surname = p.surnames[Math.floor(Math.random() * p.surnames.length)];
    const age = p.ages[Math.floor(Math.random() * p.ages.length)];
    const sector = p.sectors[Math.floor(Math.random() * p.sectors.length)];
    const profile = p.subjectProfiles[Math.floor(Math.random() * p.subjectProfiles.length)];
    const dilemma = p.relationalDilemmas[Math.floor(Math.random() * p.relationalDilemmas.length)];
    const pressure = p.environmentalPressures[Math.floor(Math.random() * p.environmentalPressures.length)];
    const vulnerability = p.emotionalVulnerabilities[Math.floor(Math.random() * p.emotionalVulnerabilities.length)];
    const observation = p.fieldObservations[Math.floor(Math.random() * p.fieldObservations.length)];
    const boss = p.bossModifiers[Math.floor(Math.random() * p.bossModifiers.length)];
    const clientName = `${firstName} ${surname}`;
    const baseTarget = Math.round((250 + caseNumber * 450 + Math.floor(Math.random() * 150)) * difficultyMultiplier);
    const tier = caseNumber <= 2
        ? 'Foundational Lived Experience'
        : caseNumber <= 5
            ? 'Intersecting Dilemmas'
            : 'Deeply Entangled Complexities';
    const capacity = tier === 'Foundational Lived Experience' ? 10 : tier === 'Intersecting Dilemmas' ? 11 : 12;
    const scenarioNarrative = `${firstName} (${profile.role}) is navigating significant life changes: ${profile.background} ${dilemma.description} Concurrently, ${pressure.description.toLowerCase()} Beneath their outward resilience, ${vulnerability.description.toLowerCase()} A holistic, compassionate multidisciplinary synthesis is required to honour their lived reality and restore their agency.`;
    return {
        id: `procedural_case_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        caseNumber,
        title: `Case ${caseNumber}: "${firstName}'s Journey"`,
        subtitle: `${sector} — ${dilemma.title}`,
        complexityTier: tier,
        sector,
        targetScore: baseTarget,
        turns: Math.max(3, 4 + (caseNumber > 5 ? 1 : 0)),
        discards: 3,
        practitionerCapacity: capacity,
        maxFormulationSlots: 4,
        clientName,
        clientAge: age,
        scenario: scenarioNarrative,
        backgroundSummary: `${profile.role}. ${profile.background} ${profile.identity}`,
        relationalDilemma: `${dilemma.title}: ${dilemma.description}`,
        environmentalPressure: `${pressure.title}: ${pressure.description}`,
        emotionalVulnerability: `${vulnerability.title}: ${vulnerability.description}`,
        unspokenVulnerabilities: profile.unspoken,
        institutionalBarriers: pressure.barrier,
        fieldObservations: observation,
        bossModifierName: boss.name,
        bossModifierDesc: boss.desc,
        bonusTag: boss.primaryTag,
        secondaryBonusTag: boss.secondaryTag,
        mentorPrompt: `Let's take a thoughtful moment with ${firstName}. Notice how ${pressure.title.toLowerCase()} and ${vulnerability.title.toLowerCase()} intersect. How can we support their voice without reducing them to a case number?`,
        isProcedural: true,
    };
}
// ============================================================================
// CPU COLLEAGUES (CASE CONFERENCE RIVAL / PEER CONSULTANTS)
// ============================================================================
export const CPU_COLLEAGUES = [
    {
        id: 'dr_alistair_finch',
        name: 'Dr. Alistair Finch',
        title: 'Dr. Alistair Finch, DClinPsy',
        role: 'Senior Consultant Clinical Psychologist',
        avatarIcon: 'Brain',
        primaryDiscipline: 'Psychology',
        preferredModalities: ['Psychology', 'Education & Learning'],
        preferredTags: ['Cognitive', 'Behavioural', 'Reframing', 'Structured', 'Mindfulness', 'Regulation', 'Motivation'],
        philosophy: 'Rigorous empirical protocols, cognitive-behavioural restructuring, and measurable behavioural goals.',
        voiceQuote: '"We must operationalise distress into concrete target mechanisms before emotional speculation derails formulation."',
        badgeStyle: 'bg-teal-950 text-teal-200 border-teal-500',
        borderStyle: 'border-teal-500/70',
        bgStyle: 'from-teal-950/80 to-slate-900/90',
    },
    {
        id: 'maya_lin',
        name: 'Maya Lin',
        title: 'Maya Lin, MSW, RSW',
        role: 'Principal Systemic Social Worker & Advocate',
        avatarIcon: 'Users',
        primaryDiscipline: 'Social Work',
        preferredModalities: ['Social Work', 'Sociology', 'Disability & Inclusion', 'Ethics & Human Rights'],
        preferredTags: ['Narrative', 'Power', 'Structural', 'Social Justice', 'Advocacy', 'Co-production', 'Disability', 'Inclusion', 'Deconstruction'],
        philosophy: 'Anti-oppressive critique, narrative re-authoring, environmental justice, and equal power co-production.',
        voiceQuote: '"Never pathologise a natural human response to systemic injustice and oppressive environments."',
        badgeStyle: 'bg-purple-950 text-purple-200 border-purple-500',
        borderStyle: 'border-purple-500/70',
        bgStyle: 'from-purple-950/80 to-slate-900/90',
    },
    {
        id: 'dr_tariq_ramos',
        name: 'Dr. Tariq Ramos',
        title: 'Dr. Tariq Ramos, MD, MRCPsych',
        role: 'Consultant Neuropsychiatrist & Trauma Lead',
        avatarIcon: 'Heart',
        primaryDiscipline: 'Nursing',
        preferredModalities: ['Nursing', 'Psychology', 'Public Health', 'Systems Theory'],
        preferredTags: ['Trauma', 'Somatic', 'Attachment', 'Relational', 'Safety', 'Regulation', 'Compassion', 'Biological', 'Integrative'],
        philosophy: 'Polyvagal autonomic regulation, attachment holding, somatic pacing, and holistic biopsychosocial synthesis.',
        voiceQuote: '"Cognition cannot reason what the autonomic nervous system perceives as life-threatening terror."',
        badgeStyle: 'bg-amber-950 text-amber-200 border-amber-500',
        borderStyle: 'border-amber-500/70',
        bgStyle: 'from-amber-950/80 to-slate-900/90',
    },
];
/**
 * Generates a balanced Roguelike starter deck ensuring interdisciplinary variety.
 * Selects 7 curated starter/core cards across distinct academic traditions.
 */
export function generateStarterDeck() {
    const cards = [];
    const allStarterOrCore = ALL_THEORY_CARDS.filter((c) => c.rarity === 'Starter' || c.rarity === 'Core');
    // Guarantee 1 Humanistic/Relational
    const relational = allStarterOrCore.find((c) => c.id === 'carl_rogers' || c.tags.includes('Person-Centred'));
    if (relational)
        cards.push(relational);
    // Guarantee 1 Systemic/Structural
    const systemic = allStarterOrCore.find((c) => c.id === 'bronfenbrenner' || c.discipline === 'Systems Theory');
    if (systemic)
        cards.push(systemic);
    // Guarantee 1 Disability/Inclusion
    const disability = allStarterOrCore.find((c) => c.id === 'social_model_disability' || c.discipline === 'Disability & Inclusion');
    if (disability)
        cards.push(disability);
    // Guarantee 1 Somatic/Biopsychosocial/Nursing
    const health = allStarterOrCore.find((c) => c.id === 'biopsychosocial' || c.discipline === 'Nursing');
    if (health)
        cards.push(health);
    // Guarantee 1 Anti-Oppressive/Social Justice
    const socialWork = allStarterOrCore.find((c) => c.id === 'anti_oppressive' || c.tags.includes('Social Justice'));
    if (socialWork)
        cards.push(socialWork);
    // Guarantee 1 Cognitive/Behavioural or Public Health
    const cbtOrPh = allStarterOrCore.find((c) => c.id === 'dahlgren_whitehead' || c.id === 'cbt_beck');
    if (cbtOrPh && !cards.some((c) => c.id === cbtOrPh.id))
        cards.push(cbtOrPh);
    // Guarantee 1 Communication or Needs
    const comm = allStarterOrCore.find((c) => c.id === 'active_listening' || c.id === 'maslow_hierarchy');
    if (comm && !cards.some((c) => c.id === comm.id))
        cards.push(comm);
    // Fill up to 7 cards if needed with random starter/core
    const remaining = allStarterOrCore
        .filter((c) => !cards.some((existing) => existing.id === c.id))
        .sort(() => Math.random() - 0.5);
    while (cards.length < 7 && remaining.length > 0) {
        cards.push(remaining.pop());
    }
    return cards;
}
/**
 * Simulates a CPU Colleague formulating their case conference proposal in response
 * to the case scenario, matching their theoretical orientation and practitioner capacity.
 */
export function simulateCPUColleagueConsultation(colleague, scenario, fullCardPool = ALL_THEORY_CARDS) {
    const maxCap = scenario.practitionerCapacity || 10;
    const maxSlots = scenario.maxFormulationSlots || 4;
    // Score candidate cards based on colleague's preferences and scenario compatibility
    const scoredPool = fullCardPool.map((card) => {
        let weight = 0;
        if (colleague.preferredModalities.includes(card.discipline))
            weight += 30;
        if (card.discipline === colleague.primaryDiscipline)
            weight += 20;
        for (const tag of card.tags) {
            if (colleague.preferredTags.includes(tag))
                weight += 15;
        }
        // Scenario bonus matches
        if (scenario.bonusTag && card.tags.includes(scenario.bonusTag))
            weight += 25;
        if (scenario.secondaryBonusTag && card.tags.includes(scenario.secondaryBonusTag))
            weight += 20;
        // Add small random variation
        weight += Math.random() * 15;
        return { card, weight };
    });
    scoredPool.sort((a, b) => b.weight - a.weight);
    // Greedily pick cards respecting capacity and slot limits
    const chosenCards = [];
    let currentCap = 0;
    for (const item of scoredPool) {
        if (chosenCards.length >= maxSlots)
            break;
        const cost = item.card.capacityCost || 2;
        if (currentCap + cost <= maxCap) {
            chosenCards.push(item.card);
            currentCap += cost;
        }
    }
    // Calculate CPU Score
    const baseInsight = chosenCards.reduce((acc, c) => acc + c.baseInsight, 0);
    const avgMult = chosenCards.reduce((acc, c) => acc + c.baseApplication, 0) / (chosenCards.length || 1);
    const disciplines = new Set(chosenCards.map((c) => c.discipline));
    const diversityBonus = disciplines.size > 1 ? (disciplines.size - 1) * 0.35 : 0;
    // Check synergies for CPU
    const matchedCombos = DISCOVERED_COMBINATIONS.filter((c) => c.customCheck && c.customCheck(chosenCards));
    const comboInsight = matchedCombos.reduce((acc, c) => acc + c.insightBonus, 0);
    const comboMult = matchedCombos.reduce((acc, c) => acc + (c.multiplierBonus - 1.0), 0);
    // Scenario bonus
    let caseInsight = 0;
    let caseMult = 0;
    const allTags = new Set(chosenCards.flatMap((c) => c.tags));
    if (scenario.bonusTag && allTags.has(scenario.bonusTag)) {
        caseInsight += 30;
        caseMult += 0.35;
    }
    if (scenario.secondaryBonusTag && allTags.has(scenario.secondaryBonusTag)) {
        caseInsight += 25;
        caseMult += 0.25;
    }
    const totalInsight = Math.round(baseInsight + comboInsight + caseInsight);
    const totalMultiplier = Number((avgMult + diversityBonus + comboMult + caseMult).toFixed(2));
    const totalScore = Math.round(totalInsight * totalMultiplier);
    const synergyName = matchedCombos.length > 0 ? matchedCombos[0].name : `${colleague.name}'s ${colleague.primaryDiscipline} Stance`;
    // Create reasoning log
    const clientFirst = scenario.clientName.split(' ')[0];
    const reasoningLog = `${colleague.name} prioritises ${chosenCards.map((c) => c.title).join(', ')}. In their clinical notes, they argue: "${colleague.philosophy} For ${clientFirst}, our foremost priority is addressing their ${scenario.sector.toLowerCase()} crisis through rigorous ${colleague.primaryDiscipline} framing."`;
    const peerReviewFeedback = totalScore >= scenario.targetScore
        ? `Strong peer formulation from ${colleague.name}! Their ${synergyName} approach secured ${totalScore.toLocaleString()} Insight Points, effectively addressing the case requirements.`
        : `${colleague.name}'s formulation achieved ${totalScore.toLocaleString()} Insight Points. While theoretically coherent, their specific focus missed some of ${clientFirst}'s wider systemic or relational nuances.`;
    return {
        colleague,
        selectedCards: chosenCards,
        usedCapacity: currentCap,
        totalInsight,
        totalMultiplier,
        totalScore,
        synergyName,
        reasoningLog,
        peerReviewFeedback,
    };
}
/**
 * Pedagogical Formulation Generator:
 * Generates an individualized, educational breakdown of how selected theories specifically apply
 * to the active case study, highlighting clinical synergy, dialogue prompts, and learning moments.
 */
export function generateEducationalDebrief(scenario, selectedCards, achievedScore, discoveredCombos, cpuResult) {
    const clientName = scenario.clientName.split(' ')[0] || 'the client';
    // Determine Formulation Academic Grade
    const target = scenario.targetScore || 300;
    const ratio = achievedScore / target;
    let formulationGrade = 'Pass';
    let gradeDescription = 'Adequate clinical formulation meeting baseline threshold.';
    if (ratio >= 1.25) {
        formulationGrade = 'Distinction';
        gradeDescription = 'Exemplary interdisciplinary synthesis demonstrating profound holistic clinical depth and rigorous theoretical integration!';
    }
    else if (ratio >= 1.0) {
        formulationGrade = 'Merit';
        gradeDescription = 'Commendable multi-lens formulation successfully addressing core client dilemmas and systemic pressures.';
    }
    else if (ratio >= 0.6) {
        formulationGrade = 'Pass';
        gradeDescription = 'Foundational understanding established, but further interdisciplinary synergy is required for full casework stability.';
    }
    else {
        formulationGrade = 'Referral Required';
        gradeDescription = 'Consultation stalled; theoretical lenses did not sufficiently connect with the client’s lived vulnerabilities or structural barriers.';
    }
    // 1. Synthesis narrative
    let synthesisTitle = 'Custom Multidisciplinary Formulation';
    let synthesisNarrative = `By bringing together ${selectedCards.map((c) => c.title).join(', ')}, this consultation crafted a compassionate multi-dimensional formulation for ${scenario.clientName}.`;
    if (discoveredCombos.length > 0) {
        const mainCombo = discoveredCombos[0];
        synthesisTitle = mainCombo.name;
        synthesisNarrative = `${mainCombo.pedagogicalSynthesis} When applied directly to ${clientName}'s situation, this synergy addresses both their internal emotional safety and the external pressures surrounding them.`;
    }
    // 2. Theory-by-theory breakdown
    const appliedTheoriesAnalysis = selectedCards.map((card) => {
        let howItWorksWithClient = `Applies ${card.title} by holding ${clientName}'s subjective experience with dignity, addressing their ${scenario.sector.toLowerCase()} needs.`;
        if (card.discipline === 'Psychology') {
            howItWorksWithClient = `Provides an emotional and cognitive container for ${clientName}, helping alleviate their ${scenario.emotionalVulnerability?.toLowerCase() || 'internal emotional distress'} without imposing premature demands.`;
        }
        else if (card.discipline === 'Sociology' || card.discipline === 'Social Work') {
            howItWorksWithClient = `Identifies and challenges the institutional power imbalances and barriers that leave ${clientName} feeling isolated or unheard in the ${scenario.sector}.`;
        }
        else if (card.discipline === 'Nursing' || card.discipline === 'Public Health') {
            howItWorksWithClient = `Bridges somatic well-being and daily living with the social determinants impacting ${clientName}'s physical stamina and living conditions.`;
        }
        else if (card.discipline === 'Disability & Inclusion') {
            howItWorksWithClient = `Reframes ${clientName}'s challenges away from personal deficit toward environmental and sensory accommodations that preserve their dignity.`;
        }
        else if (card.discipline === 'Ethics & Human Rights') {
            howItWorksWithClient = `Anchors the casework in fundamental human rights, safeguarding ${clientName}'s autonomy and legal entitlement to least restrictive care.`;
        }
        const suggestedDialogue = card.practitionerQuestions[0] || `What feels most important for us to explore together today, ${clientName}?`;
        return {
            card,
            howItWorksWithClient,
            suggestedDialogue,
            relationalStance: card.relationalStance,
            clinicalPitfall: card.pitfalls,
        };
    });
    // 3. Missed Opportunities / Alternative Lenses reflection
    const disciplinesPresent = new Set(selectedCards.map((c) => c.discipline));
    const missedOpportunities = [];
    if (!disciplinesPresent.has('Sociology') && !disciplinesPresent.has('Social Work')) {
        missedOpportunities.push(`Structural / Social Lens: While internal psychological attunement was strong, incorporating Anti-Oppressive Practice or Social Determinants could further address the systemic barriers and institutional friction ${clientName} faces.`);
    }
    if (!disciplinesPresent.has('Disability & Inclusion') && (scenario.bonusTag === 'Sensory' || scenario.secondaryBonusTag === 'Neurodiversity' || scenario.bonusTag === 'Barriers')) {
        missedOpportunities.push(`Disability & Accessibility Lens: The case hints at significant environmental or sensory barriers; integrating the Social Model of Disability would ensure physical and procedural adjustments are prioritised.`);
    }
    if (!disciplinesPresent.has('Psychology') && (scenario.bonusTag === 'Relational' || scenario.bonusTag === 'Trauma')) {
        missedOpportunities.push(`Relational / Somatic Lens: Adding Trauma-Informed Practice or Polyvagal Theory would provide vital grounding for ${clientName}'s hypervigilant nervous system.`);
    }
    if (missedOpportunities.length === 0) {
        missedOpportunities.push(`Exemplary Balance: Your formulation touched across multiple complementary dimensions, leaving few blind spots in ${clientName}'s casework plan.`);
    }
    // 4. Key learning takeaways
    const keyLearningTakeaways = [
        `People are whole lifeworlds: Combining ${selectedCards.length} distinct theories prevented one-dimensional reductionism.`,
        `Managing capacity: Applying theories thoughtfully within practitioner focus boundaries ensures clinical depth over superficial breadth.`,
        `Relational pacing: Every theoretical framework is only as effective as the authentic empathy and trust between practitioner and person.`,
    ];
    // 5. APA 7th References and in-text citations for this consultation
    const apaReferences = Array.from(new Set(selectedCards.map((c) => c.apa7Reference))).sort();
    const inTextCitations = selectedCards.map((c) => c.inTextCitation);
    return {
        synthesisTitle,
        synthesisNarrative,
        formulationGrade,
        gradeDescription,
        appliedTheoriesAnalysis,
        missedOpportunities,
        keyLearningTakeaways,
        apaReferences,
        inTextCitations,
        cpuComparison: cpuResult || null,
    };
}
/**
 * Generates a full APA 7th reference list text for all theories in the compendium,
 * alphabetised by lead author's surname.
 */
export function getAlphabetisedAPABibliography() {
    return [...ALL_THEORY_CARDS].map((card) => {
        // Extract first author surname for APA alphabetical sorting
        const authorSortKey = card.apa7Reference.split(' ')[0].replace(/,/g, '');
        return { card, authorSortKey };
    }).sort((a, b) => a.authorSortKey.localeCompare(b.authorSortKey));
}
/**
 * Formats a clean, ready-to-export Case Study Formulation and APA 7th Bibliography document.
 */
export function generateFormulationExportDocument(scenario, selectedCards, achievedScore, debriefData) {
    const dateStr = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const lines = [];
    lines.push('================================================================================');
    lines.push('CASEWORK FORMULATION & ACADEMIC REFERENCE DOSSIER (APA 7th EDITION)');
    lines.push('================================================================================');
    lines.push(`Date of Formulation: ${dateStr}`);
    lines.push(`Case Study: ${scenario.title} (${scenario.subtitle})`);
    lines.push(`Client: ${scenario.clientName} (Age: ${scenario.clientAge})`);
    lines.push(`Practice Sector: ${scenario.sector}`);
    lines.push(`Complexity Tier: ${scenario.complexityTier}`);
    lines.push(`Formulation Grade: ${debriefData.formulationGrade} (${debriefData.gradeDescription})`);
    lines.push(`Achieved Insight Score: ${achievedScore.toLocaleString()} Points (Target: ${scenario.targetScore.toLocaleString()})`);
    lines.push('');
    lines.push('--------------------------------------------------------------------------------');
    lines.push('1. CLINICAL CASE NARRATIVE & CONTEXT');
    lines.push('--------------------------------------------------------------------------------');
    lines.push(scenario.scenario);
    if (scenario.backgroundSummary) {
        lines.push(`\nBackground & Lived Experience: ${scenario.backgroundSummary}`);
    }
    if (scenario.unspokenVulnerabilities) {
        lines.push(`Unspoken Vulnerabilities & Silent Fears: ${scenario.unspokenVulnerabilities}`);
    }
    if (scenario.institutionalBarriers) {
        lines.push(`Institutional & Structural Barriers: ${scenario.institutionalBarriers}`);
    }
    lines.push('');
    lines.push('--------------------------------------------------------------------------------');
    lines.push('2. THEORETICAL SYNTHESIS & APPLIED FRAMEWORKS');
    lines.push('--------------------------------------------------------------------------------');
    lines.push(`Synthesis Modality: ${debriefData.synthesisTitle}`);
    lines.push(`Clinical Formulation Narrative:`);
    lines.push(debriefData.synthesisNarrative);
    lines.push('');
    lines.push('Selected Theoretical Lenses (In-Text Citations):');
    selectedCards.forEach((c) => {
        lines.push(`• ${c.title} ${c.inTextCitation} — [${c.discipline} | Focus Cost: ${c.capacityCost} Capacity Pts]`);
    });
    lines.push('');
    lines.push('Applied Interventions & Clinical Dialogue Prompts:');
    debriefData.appliedTheoriesAnalysis.forEach(({ card, howItWorksWithClient, suggestedDialogue, relationalStance, clinicalPitfall }) => {
        lines.push(`\n[ ${card.title} ${card.inTextCitation} ]`);
        lines.push(`  - Mode of Operation: ${howItWorksWithClient}`);
        lines.push(`  - Actionable Dialogue: "${suggestedDialogue}"`);
        lines.push(`  - Relational Stance: ${relationalStance}`);
        lines.push(`  - Clinical Pitfall to Avoid: ${clinicalPitfall}`);
    });
    if (debriefData.cpuComparison) {
        const cpu = debriefData.cpuComparison;
        lines.push('');
        lines.push('--------------------------------------------------------------------------------');
        lines.push(`CASE CONFERENCE PEER COMPARISON (${cpu.colleague.name.toUpperCase()})`);
        lines.push('--------------------------------------------------------------------------------');
        lines.push(`Colleague: ${cpu.colleague.title}`);
        lines.push(`Orientation: ${cpu.colleague.philosophy}`);
        lines.push(`Colleague's Proposed Formulation: ${cpu.selectedCards.map((c) => c.title).join(', ')}`);
        lines.push(`Colleague Score: ${cpu.totalScore.toLocaleString()} Points`);
        lines.push(`Peer Review: ${cpu.peerReviewFeedback}`);
    }
    lines.push('');
    lines.push('--------------------------------------------------------------------------------');
    lines.push('3. REFLECTIVE CRITIQUE & PEDAGOGICAL TAKEAWAYS');
    lines.push('--------------------------------------------------------------------------------');
    lines.push('Alternative Lenses to Consider:');
    debriefData.missedOpportunities.forEach((opp) => lines.push(`  * ${opp}`));
    lines.push('\nCore Learning Takeaways:');
    debriefData.keyLearningTakeaways.forEach((takeaway) => lines.push(`  ✓ ${takeaway}`));
    lines.push('');
    lines.push('--------------------------------------------------------------------------------');
    lines.push('4. FORMAL APA 7th EDITION REFERENCE LIST');
    lines.push('--------------------------------------------------------------------------------');
    debriefData.apaReferences.forEach((ref) => {
        lines.push(ref);
        lines.push('');
    });
    lines.push('================================================================================');
    lines.push('Generated via Theory Lab: Critical Synthesis & Human-Centred Casework');
    lines.push('================================================================================');
    return lines.join('\n');
}
