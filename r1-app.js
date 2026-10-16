import { ALL_THEORY_CARDS, CURATED_CASE_SCENARIOS, generateProceduralCase } from './theoryData.js';
import { INTERVENTION_CARDS, PROFESSIONAL_WILDS, CASE_REACTIONS, GENERIC_REACTIONS } from './gameDataV2.js';

const app = document.getElementById('app');
const THEORY_LIMIT = 4;
const HAND_SIZE = 7;
const FOCUS_LIMIT = 10;
const TARGET_PROGRESS = 135;
const MAX_TURNS = 6;

const state = {
  screen: 'home',
  cursor: 0,
  mode: 'STORY',
  caseIndex: 0,
  casePage: 0,
  proceduralIndex: 1,
  activeScenario: null,
  playerCount: 2,
  players: [],
  activePlayerIndex: 0,
  detail: null,
  resultPage: 0,
  turnResult: null,
  toast: null,
  savedSession: null,
};

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
const byId = (collection, id) => collection.find(x => x.id === id);
const getCase = () => state.activeScenario || CURATED_CASE_SCENARIOS[state.caseIndex] || CURATED_CASE_SCENARIOS[0];
const getPlayer = () => state.players[state.activePlayerIndex];

function shuffle(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const THEORY_PURPOSE_RULES = [
  { tags:['Person-Centred','Empathy','Humanistic'], label:'Voice & meaning', reveal:'Brings the person’s priorities, meaning and own account into the formulation.', special:'VOICE FIRST', progress:1, trust:2 },
  { tags:['Systems','Ecological','Structural','Social Determinants','Context'], label:'Systems & context', reveal:'Looks beyond the presenting problem to services, housing, money, policy, relationships and environmental pressures.', special:'WIDEN THE FRAME', progress:2, trust:0 },
  { tags:['Disability','Inclusion','Barriers','Neurodiversity'], label:'Barriers & adjustments', reveal:'Tests whether distress or exclusion is being produced by inaccessible environments, expectations or communication.', special:'REMOVE THE BARRIER', progress:2, trust:1 },
  { tags:['Communication','Language','Accessibility'], label:'Communication access', reveal:'Checks what has actually been understood, expressed and made accessible rather than assuming capacity or engagement.', special:'MAKE IT UNDERSTANDABLE', progress:1, trust:2 },
  { tags:['Trauma','Attachment','Relational','Compassion','Safety'], label:'Safety & relationships', reveal:'Explores how safety, previous experiences and relationships may shape present responses without reducing everything to trauma.', special:'SAFETY BEFORE DEMAND', progress:1, trust:2 },
  { tags:['Human Rights','Autonomy','Advocacy','Co-production','Power','Social Justice'], label:'Rights & power', reveal:'Makes power, choice, rights and whose voice carries most weight visible in the case.', special:'SHIFT THE POWER', progress:1, trust:2 },
  { tags:['Biological','Health','Somatic','Physical Health','Nursing'], label:'Health & body', reveal:'Keeps physical health, medication, pain, sleep and bodily changes in view alongside psychological and social explanations.', special:'DO NOT DIAGNOSTICALLY OVERSHADOW', progress:2, trust:0 },
  { tags:['Cognitive','Behavioural','Motivation','Learning'], label:'Patterns & learning', reveal:'Looks for patterns between thoughts, behaviour, reinforcement, expectations and the situations in which they occur.', special:'TEST THE PATTERN', progress:2, trust:0 },
  { tags:['Strengths','Strengths-Based','Capabilities','Narrative','Agency','Recovery'], label:'Strengths & possibility', reveal:'Identifies abilities, relationships, preferred identities and existing ways of coping that a deficit account may overlook.', special:'BUILD FROM WHAT WORKS', progress:1, trust:2 },
];

function purposeForCard(card) {
  const tags = card.tags || [];
  const rule = THEORY_PURPOSE_RULES.find(r => r.tags.some(tag => tags.includes(tag))) || {
    label: card.discipline || 'Practice lens',
    reveal: card.strength || card.concept || 'Offers another way to understand the person’s situation.',
    special: 'CHANGE THE ANGLE', progress:1, trust:0,
  };
  return {
    ...rule,
    practice: card.practicalApplication || card.strength || card.concept || '',
    watch: card.limitation || card.pitfalls || 'Use alongside other perspectives and the person’s own account.'
  };
}

function createPlayer(index) {
  const ids = shuffle(ALL_THEORY_CARDS.map(c => c.id));
  return {
    id: `p${index + 1}`,
    name: `Player ${index + 1}`,
    turn: 1,
    maxTurns: MAX_TURNS,
    progress: 0,
    trust: 50,
    score: 0,
    status: 'playing',
    handIds: ids.splice(0, HAND_SIZE),
    drawIds: ids,
    discardIds: [],
    selectedTheoryIds: [],
    selectedInterventionId: null,
    interventionToken: true,
    selectedWildId: null,
    wildUsed: false,
    wildOptions: shuffle(PROFESSIONAL_WILDS).slice(0, 4).map(w => w.id),
    redraws: 2,
    storyLog: [],
    reactionIds: [],
    outcomeReason: ''
  };
}

function focusUsed(player = getPlayer()) {
  return (player?.selectedTheoryIds || []).reduce((sum, id) => sum + (byId(ALL_THEORY_CARDS, id)?.capacityCost || 2), 0);
}

function snapshot() {
  return {
    version: 2,
    mode: state.mode,
    caseIndex: state.caseIndex,
    casePage: state.casePage,
    proceduralIndex: state.proceduralIndex,
    activeScenario: state.activeScenario,
    playerCount: state.playerCount,
    players: state.players,
    activePlayerIndex: state.activePlayerIndex,
    screen: ['theoryDetail','detail','help'].includes(state.screen) ? 'consult' : state.screen,
    cursor: 0,
    resultPage: state.resultPage,
    turnResult: state.turnResult,
  };
}

async function persist() {
  if (!state.players.length) return;
  await R1Bridge.save(snapshot());
  state.savedSession = snapshot();
}

function restoreSession(saved) {
  if (!saved?.players?.length) return false;
  state.mode = saved.mode || 'STORY';
  state.caseIndex = saved.caseIndex || 0;
  state.casePage = saved.casePage || 0;
  state.proceduralIndex = saved.proceduralIndex || 1;
  state.activeScenario = saved.activeScenario || null;
  state.playerCount = saved.playerCount || 2;
  state.players = saved.players;
  state.activePlayerIndex = saved.activePlayerIndex || 0;
  state.screen = saved.screen || 'case';
  state.cursor = 0;
  state.resultPage = saved.resultPage || 0;
  state.turnResult = saved.turnResult || null;
  state.detail = null;
  state.toast = null;
  return true;
}

function startGame() {
  if (state.mode === 'ENDLESS') {
    state.activeScenario = generateProceduralCase(state.proceduralIndex, 1 + Math.max(0, state.proceduralIndex - 1) * 0.05);
  } else {
    state.activeScenario = null;
  }
  const count = state.mode === 'PASS' ? state.playerCount : 1;
  state.players = Array.from({ length: count }, (_, i) => createPlayer(i));
  state.activePlayerIndex = 0;
  state.casePage = 0;
  state.turnResult = null;
  state.resultPage = 0;
  state.cursor = 0;
  state.screen = state.mode === 'PASS' ? 'pass' : 'case';
  render();
  persist();
}

function restartCurrentCase() {
  const count = state.mode === 'PASS' ? state.playerCount : 1;
  state.players = Array.from({ length: count }, (_, i) => createPlayer(i));
  state.activePlayerIndex = 0;
  state.casePage = 0;
  state.turnResult = null;
  state.resultPage = 0;
  state.cursor = 0;
  state.screen = state.mode === 'PASS' ? 'pass' : 'case';
  render();
  persist();
}

function nextEndlessCase() {
  state.proceduralIndex += 1;
  state.activeScenario = generateProceduralCase(state.proceduralIndex, 1 + Math.max(0, state.proceduralIndex - 1) * 0.05);
  restartCurrentCase();
}

function drawReplacementCards(player, count) {
  let needed = count;
  while (needed > 0) {
    if (player.drawIds.length === 0) {
      if (player.discardIds.length === 0) break;
      player.drawIds = shuffle(player.discardIds);
      player.discardIds = [];
    }
    const next = player.drawIds.shift();
    if (!next) break;
    if (!player.handIds.includes(next)) {
      player.handIds.push(next);
      needed -= 1;
    }
  }
}

function refreshHand() {
  const p = getPlayer();
  if (!p || p.redraws <= 0) return toast('No redraws left');
  p.discardIds.push(...p.handIds);
  p.handIds = [];
  drawReplacementCards(p, HAND_SIZE);
  p.redraws -= 1;
  p.selectedTheoryIds = [];
  state.cursor = 0;
  toast(`New hand · ${p.redraws} redraw${p.redraws === 1 ? '' : 's'} left`);
  persist();
}

function selectedTags(theories, intervention, wild) {
  return new Set([
    ...theories.flatMap(c => c.tags || []),
    ...(intervention?.tags || []),
    ...(wild?.tags || []),
  ]);
}

function scoreTurn(player, scenario) {
  const theories = player.selectedTheoryIds.map(id => byId(ALL_THEORY_CARDS, id)).filter(Boolean);
  const intervention = byId(INTERVENTION_CARDS, player.selectedInterventionId);
  const wild = byId(PROFESSIONAL_WILDS, player.selectedWildId);
  const tags = selectedTags(theories, intervention, wild);
  const disciplines = new Set(theories.map(c => c.discipline));
  const theoryPurposes = theories.map(card => ({ card, purpose: purposeForCard(card) }));

  let gain = theories.reduce((sum, card) => sum + 3 + Math.round((card.baseInsight || 30) / 30), 0);
  let score = theories.reduce((sum, card) => sum + Math.round((card.baseInsight || 20) * (card.baseApplication || 1)), 0);

  let directFits = 0;
  theories.forEach(card => {
    if ((scenario.primaryTheoryFits || []).includes(card.title)) {
      gain += 5; score += 70; directFits += 1;
    }
  });
  if (disciplines.size > 1) {
    gain += Math.min(5, (disciplines.size - 1) * 2);
    score += (disciplines.size - 1) * 35;
  }

  let bonusMatches = 0;
  if (scenario.bonusTag && tags.has(scenario.bonusTag)) { gain += 6; score += 90; bonusMatches += 1; }
  if (scenario.secondaryBonusTag && tags.has(scenario.secondaryBonusTag)) { gain += 4; score += 60; bonusMatches += 1; }

  let interventionText = '';
  if (intervention) {
    const relevance = intervention.tags.filter(t =>
      t === scenario.bonusTag || t === scenario.secondaryBonusTag ||
      ['Person-Centred','Relational','Systems','Communication','Autonomy','Social Justice','Integrative'].includes(t)
    ).length;
    gain += 4 + Math.min(5, relevance * 2);
    score += 55 + relevance * 25;
    if (player.interventionToken) interventionText = `${intervention.title} used the free intervention token.`;
    else {
      gain = Math.max(0, gain - 3);
      score = Math.max(0, score - 25);
      interventionText = `${intervention.title} used some limited consultation capacity.`;
    }
  }

  let wildText = '';
  if (wild) {
    const matches = wild.tags.filter(t => t === scenario.bonusTag || t === scenario.secondaryBonusTag).length;
    gain += 5 + matches * 3;
    score += 70 + matches * 35;
    wildText = `${wild.title}: ${wild.effect}`;
  }

  let trustDelta = 0;
  const trustTags = ['Relational','Person-Centred','Communication','Co-production','Cultural Safety','Autonomy','Empathy'];
  trustDelta += Math.min(8, trustTags.filter(t => tags.has(t)).length * 2);
  if (directFits === 0 && bonusMatches === 0) trustDelta -= 5;
  if (theories.length >= 3 && disciplines.size === 1) trustDelta -= 2;
  if (intervention?.tags.includes('Person-Centred')) trustDelta += 2;

  gain += Math.min(5, theoryPurposes.reduce((sum, item) => sum + (item.purpose.progress || 0), 0));
  trustDelta += Math.min(5, theoryPurposes.reduce((sum, item) => sum + (item.purpose.trust || 0), 0));
  gain = Math.max(7, Math.min(33, Math.round(gain)));
  const quality = gain >= 25 ? 'good' : gain >= 17 ? 'mixed' : 'poor';
  return { theories, theoryPurposes, intervention, wild, tags, gain, score: Math.max(50, Math.round(score)), trustDelta, quality, interventionText, wildText, directFits, bonusMatches };
}

function proceduralReactionOptions(scenario) {
  const first = (scenario.clientName || 'The person').split(' ')[0];
  return [
    { id:'proc-voice', tags:['Person-Centred','Empathy','Humanistic','Co-production','Autonomy'], text:`${first} is given more space to shape the conversation. ${scenario.emotionalVulnerability || scenario.unspokenVulnerabilities || ''} What had looked like a professional problem starts to sound different when their own priorities are treated as evidence.` },
    { id:'proc-system', tags:['Systems','Ecological','Structural','Social Determinants','Social Justice'], text:`The formulation widens beyond the individual. ${scenario.environmentalPressure || scenario.institutionalBarriers || ''} This is no longer treated as background context; it becomes part of what the team needs to change.` },
    { id:'proc-access', tags:['Disability','Inclusion','Barriers','Communication','Accessibility','Neurodiversity'], text:`An access issue becomes visible that could easily have been mistaken for disengagement or resistance. ${scenario.institutionalBarriers || scenario.fieldObservations || ''} The next plan begins with removing the barrier rather than correcting the person.` },
    { id:'proc-trauma', tags:['Trauma','Attachment','Relational','Compassion','Safety'], text:`The pace of the conversation changes. ${scenario.unspokenVulnerabilities || scenario.emotionalVulnerability || ''} A response that first looked difficult becomes more understandable when safety, shame and previous experiences are considered.` },
    { id:'proc-health', tags:['Biological','Health','Somatic','Physical Health','Nursing'], text:`Physical health is kept in the formulation rather than being eclipsed by the social or psychological story. ${scenario.fieldObservations || ''} The team agrees that bodily symptoms, medication and daily circumstances need to be considered together.` },
    { id:'proc-strengths', tags:['Strengths','Strengths-Based','Capabilities','Narrative','Agency','Recovery'], text:`The conversation notices more than risk and deficit. ${scenario.backgroundSummary || ''} Existing strengths, relationships and preferred identity begin to shape what a realistic next step could look like.` },
  ];
}

function chooseReaction(player, scenario, result) {
  const reactions = scenario.isProcedural ? proceduralReactionOptions(scenario) : (CASE_REACTIONS[scenario.caseNumber] || []);
  const available = reactions.filter(r => !player.reactionIds.includes(r.id));
  const ranked = available.map(r => ({ r, matches:r.tags.filter(tag => result.tags.has(tag)).length })).sort((a,b) => b.matches - a.matches);
  const selected = ranked.find(x => x.matches > 0)?.r || (scenario.isProcedural ? available[0] : null);
  if (selected) {
    player.reactionIds.push(selected.id);
    return selected.text;
  }
  return GENERIC_REACTIONS[result.quality];
}

function submitTurn() {
  const p = getPlayer();
  const scenario = getCase();
  if (!p?.selectedTheoryIds.length) return toast('Play at least one theory lens first');

  const result = scoreTurn(p, scenario);
  const reaction = chooseReaction(p, scenario, result);
  p.progress = Math.min(TARGET_PROGRESS, p.progress + result.gain);
  p.trust = clamp(p.trust + result.trustDelta, 0, 100);
  p.score += result.score;
  if (result.intervention && p.interventionToken) p.interventionToken = false;
  if (result.wild) p.wildUsed = true;

  p.storyLog.unshift({
    turn: p.turn,
    quality: result.quality,
    text: reaction,
    theories: result.theories.map(c => c.title),
    reveals: result.theoryPurposes.map(item => item.purpose.label),
    intervention: result.intervention?.title || null,
    wild: result.wild?.title || null,
    gain: result.gain,
    trustDelta: result.trustDelta,
  });

  const played = new Set(p.selectedTheoryIds);
  p.handIds = p.handIds.filter(id => !played.has(id));
  p.discardIds.push(...played);
  drawReplacementCards(p, HAND_SIZE - p.handIds.length);

  const turnsRemaining = p.maxTurns - p.turn;
  let outcome = null;
  if (p.progress >= TARGET_PROGRESS) {
    p.status = 'win';
    p.outcomeReason = 'You reached a workable, person-centred formulation and translated it into action.';
    p.score += 500 + turnsRemaining * 75;
    outcome = 'win';
  } else if (p.trust <= 15) {
    p.status = 'lose';
    p.outcomeReason = 'The response became too disconnected from the person’s priorities and trust broke down.';
    outcome = 'lose';
  } else if (p.turn >= p.maxTurns) {
    p.status = 'lose';
    p.outcomeReason = `Six consultations were used and the case remained ${p.progress}/${TARGET_PROGRESS} towards a workable resolution.`;
    outcome = 'lose';
  }

  state.turnResult = {
    quality: result.quality,
    gain: result.gain,
    score: result.score,
    trustDelta: result.trustDelta,
    reaction,
    theories: result.theories.map(c => c.title),
    reveals: result.theoryPurposes.map(item => item.purpose.label),
    intervention: result.intervention?.title || null,
    wild: result.wild?.title || null,
    interventionText: result.interventionText,
    wildText: result.wildText,
    progress: p.progress,
    trust: p.trust,
    turnsRemaining: Math.max(0, turnsRemaining),
    outcome,
  };

  if (p.status === 'playing') p.turn += 1;
  p.selectedTheoryIds = [];
  p.selectedInterventionId = null;
  p.selectedWildId = null;
  state.resultPage = 0;
  state.cursor = 0;
  state.screen = 'outcome';
  render();
  persist();
}

function advanceAfterOutcome() {
  state.turnResult = null;
  const unfinished = state.players.map((p,i) => ({p,i})).filter(x => x.p.status === 'playing');
  if (!unfinished.length) {
    state.screen = 'results'; state.cursor = 0; render(); persist(); return;
  }
  if (state.mode !== 'PASS') {
    state.screen = 'case'; state.casePage = 0; state.cursor = 0; render(); persist(); return;
  }
  for (let step = 1; step <= state.players.length; step++) {
    const candidate = (state.activePlayerIndex + step) % state.players.length;
    if (state.players[candidate].status === 'playing') {
      state.activePlayerIndex = candidate;
      break;
    }
  }
  state.screen = 'pass'; state.cursor = 0; state.casePage = 0; render(); persist();
}

function toggleTheory(id) {
  const p = getPlayer();
  const card = byId(ALL_THEORY_CARDS, id);
  if (!p || !card) return;
  if (p.selectedTheoryIds.includes(id)) {
    p.selectedTheoryIds = p.selectedTheoryIds.filter(x => x !== id);
    toast('Lens removed');
    return;
  }
  if (p.selectedTheoryIds.length >= THEORY_LIMIT) return toast(`Only ${THEORY_LIMIT} theory slots`);
  if (focusUsed(p) + (card.capacityCost || 2) > FOCUS_LIMIT) return toast(`Needs ${card.capacityCost || 2} Focus · ${focusUsed(p)}/${FOCUS_LIMIT} used`);
  p.selectedTheoryIds.push(id);
  toast('Lens added to formulation');
  persist();
}

function splitText(text, max = 205) {
  const words = String(text || '').trim().split(/\s+/).filter(Boolean);
  if (!words.length) return ['No further information recorded.'];
  const chunks = [];
  let current = '';
  for (const word of words) {
    if ((current + ' ' + word).trim().length > max && current) {
      chunks.push(current);
      current = word;
    } else current = (current + ' ' + word).trim();
  }
  if (current) chunks.push(current);
  return chunks;
}

function casePages() {
  const s = getCase();
  const p = getPlayer();
  const source = [];
  if (p?.storyLog?.length) source.push(['LATEST DEVELOPMENT', p.storyLog[0].text]);
  source.push(['OPENING STORY', s.scenario]);
  source.push(['BACKGROUND', s.backgroundSummary]);
  source.push(['RELATIONSHIPS', s.relationalDilemma]);
  source.push(['ENVIRONMENT', s.environmentalPressure]);
  source.push(['EMOTIONAL CONTEXT', s.emotionalVulnerability]);
  source.push(['WHAT MAY BE UNSAID', s.unspokenVulnerabilities]);
  source.push(['SYSTEM BARRIERS', s.institutionalBarriers]);
  source.push(['OBSERVATIONS', s.fieldObservations]);
  const pages = [];
  source.forEach(([label, text]) => splitText(text).forEach((body, i, arr) => pages.push({ label: arr.length > 1 ? `${label} ${i+1}/${arr.length}` : label, body })));
  return pages;
}

function disciplineClass(discipline='') {
  const d = discipline.toLowerCase();
  if (d.includes('psych')) return 'psychology';
  if (d.includes('public')) return 'public-health';
  if (d.includes('social work')) return 'social-work';
  if (d.includes('nursing')) return 'nursing';
  if (d.includes('communication')) return 'communication';
  if (d.includes('disability')) return 'disability';
  if (d.includes('system')) return 'systems';
  if (d.includes('sociology')) return 'sociology';
  if (d.includes('ethics')) return 'ethics';
  if (d.includes('education')) return 'education';
  return 'generic';
}

const iconFor = (discipline='') => {
  const d = discipline.toLowerCase();
  if (d.includes('psych')) return 'icon_psychology.png';
  if (d.includes('sociology')) return 'icon_sociology.png';
  if (d.includes('social work')) return 'icon_social_work.png';
  if (d.includes('nursing')) return 'icon_nursing.png';
  if (d.includes('public')) return 'icon_public_health.png';
  if (d.includes('disability')) return 'icon_disability_inclusion.png';
  if (d.includes('communication')) return 'icon_communication.png';
  if (d.includes('system')) return 'icon_systems.png';
  return null;
};

function topbar(left='THEORY LAB', right='') {
  return `<header class="topbar"><div class="brand">${esc(left)}</div><div class="hud-mini">${esc(right)}</div></header>`;
}
function controls(left='WHEEL move', right='SIDE select') {
  return `<footer class="controls"><span>${esc(left)}</span><span>${esc(right)}</span></footer>`;
}
function statusStrip(p=getPlayer()) {
  if (!p) return '';
  return `<div class="status-strip"><span>TURN <b>${p.turn}/${p.maxTurns}</b></span><span>CASE <b>${p.progress}/${TARGET_PROGRESS}</b></span><span>TRUST <b>${p.trust}</b></span></div>`;
}
function toastHtml() { return state.toast ? `<div class="toast">${esc(state.toast)}</div>` : ''; }
function dots(count, current) { return `<div class="dots">${Array.from({length:count},(_,i)=>`<i class="${i===current?'on':''}"></i>`).join('')}</div>`; }

function homeItems() {
  const items = [];
  if (state.savedSession?.players?.length) items.push({ id:'continue', title:'CONTINUE', sub:`${state.savedSession.mode || 'STORY'} · saved case` });
  items.push(
    { id:'story', title:'STORY MODE', sub:'8 authored branching cases' },
    { id:'endless', title:'ENDLESS CASEWORK', sub:'procedurally generated practice' },
    { id:'pass', title:'PASS THE DEVICE', sub:'2–4 players · same case' },
    { id:'help', title:'HOW TO PLAY', sub:'wheel · side button · long press' },
  );
  if (state.savedSession?.players?.length) items.push({ id:'clear', title:'CLEAR SAVE', sub:'remove saved run' });
  return items;
}

function renderHome() {
  const items = homeItems();
  state.cursor = clamp(state.cursor, 0, items.length - 1);
  const offset = Math.max(0, state.cursor - 2) * 43;
  return `<section class="screen home-screen">
    ${topbar('THEORY LAB', R1Bridge.isR1() ? 'r1' : 'PREVIEW')}
    <div class="home-hero">
      <div class="mark">♥</div><div><h1>THEORY<br>LAB</h1><p>Critical synthesis in your pocket.</p></div>
    </div>
    <div class="menu-window"><div class="menu-track" style="transform:translateY(-${offset}px)">
      ${items.map((x,i)=>`<div class="menu-row ${i===state.cursor?'selected':''}"><b>${esc(x.title)}</b><small>${esc(x.sub)}</small></div>`).join('')}
    </div></div>
    ${controls()}${toastHtml()}
  </section>`;
}

function renderCaseSelect() {
  const s = CURATED_CASE_SCENARIOS[state.caseIndex];
  return `<section class="screen board-screen">
    ${topbar(state.mode === 'PASS' ? 'SHARED CASE' : 'STORY CASE', `${state.caseIndex+1}/${CURATED_CASE_SCENARIOS.length}`)}
    <article class="case-ticket">
      <div class="eyebrow">${esc(s.complexityTier)}</div>
      <h2>${esc(s.title.replace(/^Case\s*\d+:\s*/,''))}</h2>
      <p class="person">${esc(s.clientName)} · ${esc(String(s.clientAge))}</p>
      <p class="case-sub">${esc(s.subtitle)}</p>
      <div class="sector">${esc(s.sector)}</div>
    </article>
    ${dots(CURATED_CASE_SCENARIOS.length, state.caseIndex)}
    ${controls('WHEEL cases','SIDE start')}${toastHtml()}
  </section>`;
}

function renderPassCount() {
  return `<section class="screen board-screen">
    ${topbar('PASS THE DEVICE','SETUP')}
    <div class="centre-card"><div class="eyebrow">HOW MANY PLAYERS?</div><div class="big-number">${state.playerCount}</div><p>Each player gets a private hand and formulates the same case. Pass the r1 when prompted.</p></div>
    ${dots(3,state.playerCount-2)}
    ${controls('WHEEL 2–4','SIDE choose case')}${toastHtml()}
  </section>`;
}

function renderPass() {
  const p = getPlayer();
  return `<section class="screen privacy-screen">
    ${topbar('THEORY LAB','PRIVATE')}
    <div class="pass-card"><div class="pass-icon">↔</div><div class="eyebrow">PASS THE r1</div><h2>${esc(p.name)}</h2><p>Only continue when you are holding the device. Your hand and formulation stay private from the next player.</p></div>
    ${controls('','SIDE ready')}${toastHtml()}
  </section>`;
}

function renderCase() {
  const s = getCase();
  const p = getPlayer();
  const pages = casePages();
  state.casePage = ((state.casePage % pages.length) + pages.length) % pages.length;
  const pg = pages[state.casePage];
  return `<section class="screen board-screen">
    ${topbar((s.clientName || 'CASE').split(' ')[0].toUpperCase(), `${state.casePage+1}/${pages.length}`)}
    ${statusStrip(p)}
    <article class="dossier-card">
      <div class="eyebrow">${esc(pg.label)}</div>
      <h2>${esc(s.title.replace(/^Case\s*\d+:\s*/,''))}</h2>
      <p>${esc(pg.body)}</p>
    </article>
    ${dots(Math.min(pages.length,9), Math.min(state.casePage,8))}
    ${controls('WHEEL ↑↓','SIDE consult')}${toastHtml()}
  </section>`;
}

function consultItems() {
  const p = getPlayer();
  return [
    { id:'theory', title:'THEORY HAND', sub:`${p.selectedTheoryIds.length}/${THEORY_LIMIT} lenses · ${focusUsed(p)}/${FOCUS_LIMIT} Focus` },
    { id:'intervention', title:'INTERVENTION', sub:p.selectedInterventionId ? byId(INTERVENTION_CARDS,p.selectedInterventionId)?.title : (p.interventionToken ? 'free token available' : 'optional action') },
    { id:'wild', title:'PROFESSIONAL JOKER', sub:p.wildUsed ? 'already used this case' : (p.selectedWildId ? byId(PROFESSIONAL_WILDS,p.selectedWildId)?.title : 'one wild per case') },
    { id:'review', title:'REVIEW & COMMIT', sub:p.selectedTheoryIds.length ? 'see your formulation' : 'play at least one theory' },
    { id:'dossier', title:'RETURN TO DOSSIER', sub:'re-read the case before deciding' },
  ];
}

function renderConsult() {
  const p = getPlayer();
  const items = consultItems();
  state.cursor = clamp(state.cursor,0,items.length-1);
  return `<section class="screen board-screen">
    ${topbar(`TURN ${p.turn}`,'CONSULT')}${statusStrip(p)}
    <div class="consult-title"><div class="eyebrow">BUILD A FORMULATION</div><h2>What do you bring in?</h2></div>
    <div class="menu-list compact">${items.map((x,i)=>`<div class="menu-row ${i===state.cursor?'selected':''}"><b>${esc(x.title)}</b><small>${esc(x.sub)}</small></div>`).join('')}</div>
    ${controls()}${toastHtml()}
  </section>`;
}

function theoryEntries() {
  const p = getPlayer();
  return [
    ...p.handIds.map(id => ({ type:'card', id })),
    { type:'done' },
    { type:'redraw' },
  ];
}

function renderTheory() {
  const p = getPlayer();
  const entries = theoryEntries();
  state.cursor = ((state.cursor % entries.length) + entries.length) % entries.length;
  const rowH = 73;
  const offset = Math.max(0, Math.min(entries.length - 3, state.cursor - 1)) * rowH;

  const rows = entries.map((item, i) => {
    if (item.type === 'done') {
      return `<div class="deck-tile utility-tile ${i===state.cursor?'active':''}">
        <div class="tile-kicker">FORMULATION</div>
        <div class="tile-main"><b>Done choosing</b><span>${p.selectedTheoryIds.length} lens${p.selectedTheoryIds.length===1?'':'es'} · ${focusUsed(p)}/${FOCUS_LIMIT} Focus</span></div>
        <div class="tile-mark">✓</div>
      </div>`;
    }
    if (item.type === 'redraw') {
      return `<div class="deck-tile utility-tile ${i===state.cursor?'active':''}">
        <div class="tile-kicker">RESHUFFLE</div>
        <div class="tile-main"><b>Draw a new hand</b><span>${p.redraws} redraw${p.redraws===1?'':'s'} remaining</span></div>
        <div class="tile-mark">↻</div>
      </div>`;
    }
    const card = byId(ALL_THEORY_CARDS,item.id);
    const selected = p.selectedTheoryIds.includes(card.id);
    const purpose = purposeForCard(card);
    return `<div class="deck-tile theory-tile ${disciplineClass(card.discipline)} ${selected?'chosen':''} ${i===state.cursor?'active':''}">
      <div class="tile-top"><span>${esc(card.discipline)}</span><b>${selected?'SELECTED':`${card.capacityCost || 2} FOCUS`}</b></div>
      <div class="tile-main"><b>${esc(card.title)}</b><span>${esc(purpose.label)} · ${esc((card.concept || '').slice(0,86))}${(card.concept||'').length>86?'…':''}</span></div>
      <div class="tile-mark">${selected?'✓':'›'}</div>
    </div>`;
  }).join('');

  return `<section class="screen card-screen vertical-deck-screen">
    ${topbar('THEORY HAND',`${p.selectedTheoryIds.length}/${THEORY_LIMIT} · ${focusUsed(p)}/${FOCUS_LIMIT}`)}
    <div class="deck-window">
      <div class="deck-track" style="transform:translateY(-${offset}px)">${rows}</div>
      <div class="deck-focus"></div>
    </div>
    ${controls('WHEEL ↑↓','SIDE select · LONG read')}${toastHtml()}
  </section>`;
}

function renderTheoryDetail() {
  const card = byId(ALL_THEORY_CARDS,state.detail?.id);
  if (!card) { state.screen='theory'; return renderTheory(); }
  const purpose = purposeForCard(card);
  const pages = [
    { label:'PURPOSE', title:purpose.label, body:purpose.reveal },
    { label:'PRACTICE', title:purpose.special, body:purpose.practice },
    { label:'WATCH FOR', title:'What may be missed?', body:purpose.watch },
    { label:'REFERENCE', title:card.inTextCitation || card.theorist || card.title, body:card.apa7Reference || card.academicDisciplineNotes || '' },
    { label:'QUESTION', title:'Ask differently', body:(card.practitionerQuestions || []).join(' • ') || 'What becomes visible through this lens, and what still remains uncertain?' },
  ];
  state.detail.page = ((state.detail.page % pages.length) + pages.length) % pages.length;
  const pg=pages[state.detail.page];
  return `<section class="screen detail-screen">${topbar('THEORY DETAIL',`${state.detail.page+1}/${pages.length}`)}
    <article class="detail-card ${disciplineClass(card.discipline)}"><div class="eyebrow">${esc(pg.label)}</div><h2>${esc(pg.title)}</h2><p>${esc(pg.body)}</p><div class="detail-name">${esc(card.title)}</div></article>
    ${dots(pages.length,state.detail.page)}${controls('WHEEL ↑↓','SIDE back')}${toastHtml()}</section>`;
}

function interventionEntries() {
  return [...INTERVENTION_CARDS.map(x=>({type:'card',id:x.id})),{type:'none'}];
}
function renderIntervention() {
  const p=getPlayer(), entries=interventionEntries();
  state.cursor=((state.cursor%entries.length)+entries.length)%entries.length;
  const rowH=78;
  const offset=Math.max(0,Math.min(entries.length-3,state.cursor-1))*rowH;
  const rows=entries.map((item,i)=>{
    if(item.type==='none') return `<div class="deck-tile action-tile utility-tile ${i===state.cursor?'active':''}">
      <div class="tile-kicker">OPTIONAL</div>
      <div class="tile-main"><b>No intervention</b><span>Return to the consultation without changing your selection.</span></div>
      <div class="tile-mark">←</div>
    </div>`;
    const card=byId(INTERVENTION_CARDS,item.id), selected=p.selectedInterventionId===card.id;
    return `<div class="deck-tile action-tile green ${selected?'chosen':''} ${i===state.cursor?'active':''}">
      <div class="tile-top"><span>INTERVENTION</span><b>${selected?'SELECTED':p.interventionToken?'FREE':'ACTION'}</b></div>
      <div class="tile-main"><b>${esc(card.title)}</b><span>${esc((card.description||'').slice(0,96))}${(card.description||'').length>96?'…':''}</span></div>
      <div class="tile-mark">${selected?'✓':'›'}</div>
    </div>`;
  }).join('');
  return `<section class="screen card-screen vertical-deck-screen">${topbar('INTERVENTION',`${Math.min(state.cursor+1,INTERVENTION_CARDS.length)}/${INTERVENTION_CARDS.length}`)}
    <div class="deck-window action-window"><div class="deck-track" style="transform:translateY(-${offset}px)">${rows}</div><div class="deck-focus"></div></div>
    ${controls('WHEEL ↑↓','SIDE select · LONG read')}${toastHtml()}</section>`;
}

function renderActionDetail(kind,id) {
  const card = kind==='intervention' ? byId(INTERVENTION_CARDS,id) : byId(PROFESSIONAL_WILDS,id);
  const pages = kind==='intervention'
    ? [{label:'WHAT IT DOES',body:card.description},{label:'IN PRACTICE',body:card.practice},{label:'LINKS TO',body:(card.tags||[]).join(' · ')}]
    : [{label:'PROFESSIONAL WILD',body:card.strapline},{label:'WHAT THEY ADD',body:card.effect},{label:'LINKS TO',body:(card.tags||[]).join(' · ')}];
  state.detail.page=((state.detail.page%pages.length)+pages.length)%pages.length;
  const pg=pages[state.detail.page];
  return `<section class="screen detail-screen">${topbar(kind==='intervention'?'ACTION DETAIL':'JOKER DETAIL',`${state.detail.page+1}/${pages.length}`)}
    <article class="detail-card ${kind==='intervention'?'green':'purple'}"><div class="eyebrow">${esc(pg.label)}</div><h2>${esc(card.title)}</h2><p>${esc(pg.body)}</p></article>${dots(pages.length,state.detail.page)}${controls('WHEEL ↑↓','SIDE back')}${toastHtml()}</section>`;
}

function wildEntries() {
  const p=getPlayer(); return [...p.wildOptions.map(id=>({type:'card',id})),{type:'none'}];
}
function renderWild() {
  const p=getPlayer();
  if(p.wildUsed) return `<section class="screen card-screen">${topbar('PROFESSIONAL JOKER','USED')}
    <div class="utility-card wild"><div class="eyebrow">ONE PER CASE</div><h2>Joker spent</h2><p>You have already brought one professional wild into this case. The limit makes the choice meaningful.</p></div>${controls('','SIDE back')}${toastHtml()}</section>`;
  const entries=wildEntries();
  state.cursor=((state.cursor%entries.length)+entries.length)%entries.length;
  const rowH=78;
  const offset=Math.max(0,Math.min(entries.length-3,state.cursor-1))*rowH;
  const rows=entries.map((item,i)=>{
    if(item.type==='none') return `<div class="deck-tile action-tile utility-tile ${i===state.cursor?'active':''}">
      <div class="tile-kicker">OPTIONAL</div>
      <div class="tile-main"><b>Keep the Joker</b><span>Return without using the professional wild this consultation.</span></div>
      <div class="tile-mark">←</div>
    </div>`;
    const card=byId(PROFESSIONAL_WILDS,item.id), selected=p.selectedWildId===card.id;
    return `<div class="deck-tile action-tile purple ${selected?'chosen':''} ${i===state.cursor?'active':''}">
      <div class="tile-top"><span>PROFESSIONAL WILD</span><b>${selected?'SELECTED':'★ ONE USE'}</b></div>
      <div class="tile-main"><b>${esc(card.title)}</b><span>${esc((card.strapline||card.effect||'').slice(0,96))}${(card.strapline||card.effect||'').length>96?'…':''}</span></div>
      <div class="tile-mark">${selected?'✓':'★'}</div>
    </div>`;
  }).join('');
  return `<section class="screen card-screen vertical-deck-screen">${topbar('PROFESSIONAL JOKER',`${Math.min(state.cursor+1,p.wildOptions.length)}/${p.wildOptions.length}`)}
    <div class="deck-window action-window"><div class="deck-track" style="transform:translateY(-${offset}px)">${rows}</div><div class="deck-focus"></div></div>
    ${controls('WHEEL ↑↓','SIDE select · LONG read')}${toastHtml()}</section>`;
}

function renderReview() {
  const p=getPlayer(); const theories=p.selectedTheoryIds.map(id=>byId(ALL_THEORY_CARDS,id)).filter(Boolean);
  const items=[{id:'commit',label:'COMMIT CONSULTATION'},{id:'back',label:'GO BACK'}]; state.cursor=clamp(state.cursor,0,1);
  return `<section class="screen review-screen">${topbar('REVIEW',`FOCUS ${focusUsed(p)}/${FOCUS_LIMIT}`)}
    <article class="review-card"><div class="eyebrow">YOUR FORMULATION</div><div class="mini-stack">${theories.length?theories.map(c=>`<span class="${disciplineClass(c.discipline)}">${esc(c.title)}</span>`).join(''):'<span>No theory selected</span>'}</div><div class="review-line"><b>ACTION</b><span>${esc(byId(INTERVENTION_CARDS,p.selectedInterventionId)?.title || 'None')}</span></div><div class="review-line"><b>JOKER</b><span>${esc(byId(PROFESSIONAL_WILDS,p.selectedWildId)?.title || (p.wildUsed?'Already spent':'None'))}</span></div></article>
    <div class="two-actions">${items.map((x,i)=>`<div class="menu-row ${i===state.cursor?'selected':''}"><b>${x.label}</b></div>`).join('')}</div>
    ${controls('WHEEL choose','SIDE select')}${toastHtml()}</section>`;
}

function outcomePages() {
  const r=state.turnResult || {};
  return [
    {label:r.quality==='good'?'CASE OPENS UP':r.quality==='mixed'?'PARTIAL MOVEMENT':'CASE NARROWS', title:'What changed?', body:r.reaction || ''},
    {label:'FORMULATION EFFECT', title:`+${r.gain || 0} case · ${r.trustDelta>=0?'+':''}${r.trustDelta || 0} trust`, body:`${(r.reveals||[]).join(' · ') || 'A different lens was applied.'}`},
    {label:'WHAT YOU USED', title:(r.theories||[]).join(' + ') || 'Theory lens', body:[r.interventionText,r.wildText].filter(Boolean).join(' ') || 'No additional intervention or professional wild was used this consultation.'},
  ];
}
function renderOutcome() {
  const p=getPlayer(), pages=outcomePages(); state.resultPage=((state.resultPage%pages.length)+pages.length)%pages.length; const pg=pages[state.resultPage];
  return `<section class="screen outcome-screen">${topbar('CONSULTATION RESULT',`${state.resultPage+1}/${pages.length}`)}${statusStrip(p)}
    <article class="outcome-card ${state.turnResult?.quality||'mixed'}"><div class="eyebrow">${esc(pg.label)}</div><h2>${esc(pg.title)}</h2><p>${esc(pg.body)}</p>${state.turnResult?.outcome?`<div class="end-stamp ${state.turnResult.outcome}">${state.turnResult.outcome==='win'?'CASE RESOLVED':'CASE CLOSED'}</div>`:''}</article>
    ${dots(pages.length,state.resultPage)}${controls('WHEEL ↑↓','SIDE continue')}${toastHtml()}</section>`;
}

function resultActions() {
  const items=[{id:'replay',title:'REPLAY CASE'}];
  if(state.mode==='ENDLESS') items.push({id:'next',title:'NEW ENDLESS CASE'});
  else if(state.mode==='STORY') items.push({id:'next',title:'NEXT STORY CASE'});
  items.push({id:'home',title:'HOME'}); return items;
}
function renderResults() {
  const s=getCase(); const actions=resultActions(); state.cursor=clamp(state.cursor,0,actions.length-1);
  if(state.mode==='PASS') {
    const ranked=[...state.players].sort((a,b)=>b.score-a.score);
    return `<section class="screen result-screen">${topbar('CASE COMPLETE','COMPARE')}
      <article class="score-card"><div class="eyebrow">SAME CASE · DIFFERENT FORMULATIONS</div><h2>${esc(s.clientName)}</h2>${ranked.map((p,i)=>`<div class="score-row"><b>${i+1}. ${esc(p.name)}</b><span>${p.score} pts · ${p.progress}/${TARGET_PROGRESS} · trust ${p.trust}</span></div>`).join('')}</article>
      <div class="two-actions">${actions.filter(x=>x.id!=='next').map((x,i)=>`<div class="menu-row ${i===state.cursor?'selected':''}"><b>${x.title}</b></div>`).join('')}</div>${controls()}${toastHtml()}</section>`;
  }
  const p=getPlayer();
  return `<section class="screen result-screen">${topbar('CASE COMPLETE',p.status.toUpperCase())}
    <article class="score-card"><div class="eyebrow">${esc(s.clientName)}</div><h2>${p.status==='win'?'WORKABLE FORMULATION':'REVIEW THE ROUTE'}</h2><p>${esc(p.outcomeReason)}</p><div class="final-score"><b>${p.score}</b><span>POINTS</span></div><div class="result-grid"><span>CASE ${p.progress}/${TARGET_PROGRESS}</span><span>TRUST ${p.trust}</span></div></article>
    <div class="two-actions">${actions.map((x,i)=>`<div class="menu-row ${i===state.cursor?'selected':''}"><b>${x.title}</b></div>`).join('')}</div>${controls()}${toastHtml()}</section>`;
}

function renderHelp() {
  const pages=[
    ['CONTROLS','Turn the wheel to move. Press the side button to select. Long press a theory, intervention or Joker to inspect it.'],
    ['THEORY','You draw seven random theory cards. Play up to four within 10 Focus. Cards are not answers; they change what you notice.'],
    ['ACTION','Choose an intervention if useful. The first intervention in a case is free. Later actions use some consultation capacity.'],
    ['JOKER','A professional wild can be used once per case. It adds another discipline to the formulation rather than simply awarding points.'],
    ['AIM','Across six consultations, build enough case progress while keeping trust. There is no single perfect deck, and replay can produce a different route.'],
  ];
  state.casePage=((state.casePage%pages.length)+pages.length)%pages.length;
  const [title,body]=pages[state.casePage];
  return `<section class="screen detail-screen">${topbar('HOW TO PLAY',`${state.casePage+1}/${pages.length}`)}<article class="detail-card gold"><div class="eyebrow">QUICK GUIDE</div><h2>${title}</h2><p>${body}</p></article>${dots(pages.length,state.casePage)}${controls('WHEEL ↑↓','SIDE home')}</section>`;
}

function render() {
  let html='';
  if(state.screen==='home') html=renderHome();
  else if(state.screen==='caseSelect') html=renderCaseSelect();
  else if(state.screen==='passCount') html=renderPassCount();
  else if(state.screen==='pass') html=renderPass();
  else if(state.screen==='case') html=renderCase();
  else if(state.screen==='consult') html=renderConsult();
  else if(state.screen==='theory') html=renderTheory();
  else if(state.screen==='theoryDetail') html=renderTheoryDetail();
  else if(state.screen==='intervention') html=renderIntervention();
  else if(state.screen==='wild') html=renderWild();
  else if(state.screen==='actionDetail') html=renderActionDetail(state.detail.kind,state.detail.id);
  else if(state.screen==='review') html=renderReview();
  else if(state.screen==='outcome') html=renderOutcome();
  else if(state.screen==='results') html=renderResults();
  else if(state.screen==='help') html=renderHelp();
  app.innerHTML=html;
}

function flash() { app.classList.remove('flash'); void app.offsetWidth; app.classList.add('flash'); }
function toast(text) {
  state.toast=text; render();
  clearTimeout(toast.timer);
  toast.timer=setTimeout(()=>{ if(state.toast===text){state.toast=null;render();} },1250);
}

function move(delta) {
  flash();
  if(state.screen==='home') {
    const n=homeItems().length; state.cursor=(state.cursor+delta+n)%n;
  } else if(state.screen==='caseSelect') {
    state.caseIndex=(state.caseIndex+delta+CURATED_CASE_SCENARIOS.length)%CURATED_CASE_SCENARIOS.length;
  } else if(state.screen==='passCount') {
    state.playerCount=2+((state.playerCount-2+delta+3)%3);
  } else if(state.screen==='case') {
    const n=casePages().length; state.casePage=(state.casePage+delta+n)%n;
  } else if(state.screen==='consult') {
    const n=consultItems().length; state.cursor=(state.cursor+delta+n)%n;
  } else if(state.screen==='theory') {
    const n=theoryEntries().length; state.cursor=(state.cursor+delta+n)%n;
  } else if(state.screen==='theoryDetail' || state.screen==='actionDetail') {
    const n=state.screen==='theoryDetail'?5:3; state.detail.page=(state.detail.page+delta+n)%n;
  } else if(state.screen==='intervention') {
    const n=interventionEntries().length; state.cursor=(state.cursor+delta+n)%n;
  } else if(state.screen==='wild' && !getPlayer()?.wildUsed) {
    const n=wildEntries().length; state.cursor=(state.cursor+delta+n)%n;
  } else if(state.screen==='review') state.cursor=(state.cursor+delta+2)%2;
  else if(state.screen==='outcome') state.resultPage=(state.resultPage+delta+3)%3;
  else if(state.screen==='results') {
    const n=state.mode==='PASS'?2:resultActions().length; state.cursor=(state.cursor+delta+n)%n;
  } else if(state.screen==='help') state.casePage=(state.casePage+delta+5)%5;
  render();
}

async function select() {
  flash();
  if(state.screen==='home') {
    const item=homeItems()[state.cursor];
    if(item.id==='continue') { restoreSession(state.savedSession); render(); return; }
    if(item.id==='story') { state.mode='STORY'; state.caseIndex=0; state.screen='caseSelect'; state.cursor=0; render(); return; }
    if(item.id==='endless') { state.mode='ENDLESS'; startGame(); return; }
    if(item.id==='pass') { state.mode='PASS'; state.playerCount=2; state.screen='passCount'; state.cursor=0; render(); return; }
    if(item.id==='help') { state.casePage=0; state.screen='help'; render(); return; }
    if(item.id==='clear') { await R1Bridge.clear(); state.savedSession=null; state.cursor=0; toast('Save cleared'); return; }
  }
  else if(state.screen==='caseSelect') startGame();
  else if(state.screen==='passCount') { state.screen='caseSelect'; state.caseIndex=0; state.cursor=0; render(); }
  else if(state.screen==='pass') { state.screen='case'; state.casePage=0; render(); }
  else if(state.screen==='case') { state.screen='consult'; state.cursor=0; render(); persist(); }
  else if(state.screen==='consult') {
    const item=consultItems()[state.cursor];
    if(item.id==='theory') { state.screen='theory'; state.cursor=0; }
    if(item.id==='intervention') { state.screen='intervention'; state.cursor=0; }
    if(item.id==='wild') { state.screen='wild'; state.cursor=0; }
    if(item.id==='review') { state.screen='review'; state.cursor=0; }
    if(item.id==='dossier') { state.screen='case'; state.casePage=0; }
    render();
  }
  else if(state.screen==='theory') {
    const item=theoryEntries()[state.cursor];
    if(item.type==='card') toggleTheory(item.id);
    else if(item.type==='done') { state.screen='consult'; state.cursor=0; render(); }
    else if(item.type==='redraw') refreshHand();
  }
  else if(state.screen==='theoryDetail') { state.screen='theory'; render(); }
  else if(state.screen==='intervention') {
    const item=interventionEntries()[state.cursor];
    if(item.type==='none') { state.screen='consult'; state.cursor=1; render(); }
    else {
      const p=getPlayer(); p.selectedInterventionId = p.selectedInterventionId===item.id ? null : item.id;
      state.screen='consult'; state.cursor=1; render(); persist();
    }
  }
  else if(state.screen==='wild') {
    const p=getPlayer();
    if(p.wildUsed) { state.screen='consult'; state.cursor=2; render(); }
    else {
      const item=wildEntries()[state.cursor];
      if(item.type==='none') { state.screen='consult'; state.cursor=2; render(); }
      else { p.selectedWildId=p.selectedWildId===item.id?null:item.id; state.screen='consult'; state.cursor=2; render(); persist(); }
    }
  }
  else if(state.screen==='actionDetail') { state.screen=state.detail.returnScreen; render(); }
  else if(state.screen==='review') {
    if(state.cursor===0) submitTurn(); else { state.screen='consult'; state.cursor=0; render(); }
  }
  else if(state.screen==='outcome') advanceAfterOutcome();
  else if(state.screen==='results') {
    if(state.mode==='PASS') {
      const items=[{id:'replay'},{id:'home'}]; const item=items[state.cursor];
      if(item.id==='replay') restartCurrentCase(); else goHome();
    } else {
      const item=resultActions()[state.cursor];
      if(item.id==='replay') restartCurrentCase();
      else if(item.id==='next') {
        if(state.mode==='ENDLESS') nextEndlessCase();
        else { state.caseIndex=(state.caseIndex+1)%CURATED_CASE_SCENARIOS.length; startGame(); }
      } else goHome();
    }
  }
  else if(state.screen==='help') { state.screen='home'; state.cursor=0; render(); }
}

function goHome() {
  state.screen='home'; state.cursor=0; state.players=[]; state.activeScenario=null; state.turnResult=null; render();
}

function longPress() {
  flash();
  if(state.screen==='theory') {
    const item=theoryEntries()[state.cursor];
    if(item.type==='card') { state.detail={kind:'theory',id:item.id,page:0}; state.screen='theoryDetail'; render(); }
  } else if(state.screen==='intervention') {
    const item=interventionEntries()[state.cursor];
    if(item.type==='card') { state.detail={kind:'intervention',id:item.id,page:0,returnScreen:'intervention'}; state.screen='actionDetail'; render(); }
  } else if(state.screen==='wild' && !getPlayer()?.wildUsed) {
    const item=wildEntries()[state.cursor];
    if(item.type==='card') { state.detail={kind:'wild',id:item.id,page:0,returnScreen:'wild'}; state.screen='actionDetail'; render(); }
  } else if(['case','consult','review'].includes(state.screen)) {
    toast('Tip: long press cards to inspect their purpose');
  }
}

R1Bridge.onUp(()=>move(-1));
R1Bridge.onDown(()=>move(1));
R1Bridge.onClick(()=>select());
R1Bridge.onLong(()=>longPress());

(async function init(){
  const saved=await R1Bridge.load();
  if(saved?.players?.length) state.savedSession=saved;
  render();
})();
