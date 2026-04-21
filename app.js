// Plain scripts (see index.html order): no ES modules so file:// works everywhere.

const { loadState, saveState, clearState } = window.TournamentStorage;

/** Sentinel for participants not on any team (bench / unassigned pool). */
const UNASSIGNED = "__unassigned__";
const LANG_KEY = "tournamentLanguage";

const I18N = {
  en: {
    pageTitle: "Robofestival Tournament",
    appTitle: "Robofestival Tournament",
    appSubtitle: "Teams • Levels • Leaderboard",
    langButton: "EN / EL",
    langAria: "Switch language",
    dark: "Dark",
    light: "Light",
    exportExcel: "Export Excel",
    exportDisabledTitle: "Enable after you end the tournament",
    resetTournament: "Reset tournament",
    tabsAria: "Tournament views",
    tabRoster: "Participants + teams",
    tabLevels: "Levels + scoring",
    tabLeaderboard: "Leaderboard",
    participants: "Participants",
    collapse: "Collapse",
    expand: "Expand",
    participantsHelp: "Add names, or paste one per line.",
    participantName: "Participant name",
    add: "Add",
    bulkPaste: "Bulk paste",
    oneNamePerLine: "One name per line",
    addLines: "Add lines",
    clearParticipants: "Clear participants",
    teams: "Teams",
    teamsHelp: "Create teams randomly, add empty teams, then drag players between teams and the unassigned bench.",
    numberOfTeams: "Number of teams",
    createRandomly: "Create randomly",
    createEmptyTeams: "Create empty teams",
    reshuffle: "Re-shuffle",
    addEmptyTeam: "Add empty team",
    levelsScoring: "Levels + scoring",
    levelsHelp: "All teams play each level. Enter scores for every match to complete a level.",
    createNextLevel: "Create next level",
    endTournament: "End tournament",
    resumeAddLevels: "Resume / add levels",
    leaderboardHelp: "Total points = sum of all level scores.",
    savedLocally: "Saved locally in this browser (localStorage).",
    backToTop: "Back to top",
    top: "Top",
    unnamedTeam: "Unnamed team",
    unnamedParticipant: "Unnamed",
    excelLibMissing: "Excel export library did not load. Check your network connection and try again.",
    endTournamentFirst: "End the tournament first, then export.",
    nothingToExport: "Nothing to export yet.",
    sheetNameParticipants: "Participants",
    sheetNameTeams: "Teams",
    sheetNameScores: "Scores",
    sheetNameLeaderboard: "Leaderboard",
    headerName: "Name",
    headerAssignedTeam: "Assigned team",
    headerTeamName: "Team name",
    headerMembers: "Members",
    headerLevel: "Level",
    headerMatch: "Match",
    headerTeamA: "Team A",
    headerScoreA: "Score A",
    headerTeamB: "Team B",
    headerScoreB: "Score B",
    headerRank: "Rank",
    headerTeam: "Team",
    headerTotalPoints: "Total points",
    headerMatchesPlayed: "Matches played",
    bye: "BYE",
    teamLabel: "Team {n}",
    removeLevelConfirm: "Remove this level? Matchups and any scores for it will be discarded.",
    levelComplete: " · complete",
    levelInProgress: " · in progress",
    themeAriaLightOn: "Light theme on. Click to use dark theme.",
    themeAriaDarkOn: "Dark theme on. Click to use light theme.",
    resetConfirm: "Reset tournament? This clears saved data in this browser.",
    clearParticipantsConfirm: "Clear all participants and teams?",
    noParticipantsYet: "No participants yet.",
    inATeam: "in a team",
    notAssigned: "not assigned",
    remove: "Remove",
    lockHintLocked: "Team membership locked (levels started). You can still rename teams.",
    lockHintUnlocked: "Drag players between teams, or to/from Unassigned. Use Move -> Unassigned or drop on Unassigned to bench a player.",
    dragIntoTeam: "Drag into a team",
    noUnassigned: "No unassigned players. Drop someone here from a team to bench them.",
    unassignedBench: "Unassigned (bench)",
    playerCount: "{count} player{suffix}",
    playerPluralSuffix: "s",
    unassignedHint: "Drop a team member here to remove them from that team (they stay enrolled).",
    move: "Move",
    noMembers: "No members.",
    noTeamsYetCreate: "No teams yet. Use \"Create empty teams\" (number above), \"Add empty team\", or \"Create randomly\".",
    createTeamsToStart: "Create teams to start levels.",
    noLevelsYet: "No levels yet. Click \"Create next level\".",
    removeLevel: "Remove level",
    levelLabel: "Level {n}",
    noTeamsYet: "No teams yet.",
    status: "Status: {items}",
    tournamentEnded: "tournament ended",
    noTeamsStatus: "no teams",
    lastLevelComplete: "last level complete",
    lastLevelIncomplete: "last level incomplete",
    exportEnabledTitle: "Download .xlsx with participants, teams, scores, leaderboard",
    exportNeedEndTitle: "End the tournament to enable export",
  },
  el: {
    pageTitle: "Τουρνουά Robofestival",
    appTitle: "Τουρνουά Robofestival",
    appSubtitle: "Ομάδες • Επίπεδα • Κατάταξη",
    langButton: "EL / EN",
    langAria: "Αλλαγή γλώσσας",
    dark: "Σκούρο",
    light: "Φωτεινό",
    exportExcel: "Εξαγωγή Excel",
    exportDisabledTitle: "Ενεργοποιείται αφού ολοκληρώσετε το τουρνουά",
    resetTournament: "Επαναφορά τουρνουά",
    tabsAria: "Προβολές τουρνουά",
    tabRoster: "Συμμετέχοντες + ομάδες",
    tabLevels: "Επίπεδα + βαθμολογία",
    tabLeaderboard: "Κατάταξη",
    participants: "Συμμετέχοντες",
    collapse: "Σύμπτυξη",
    expand: "Ανάπτυξη",
    participantsHelp: "Προσθέστε ονόματα ή επικολλήστε ένα ανά γραμμή.",
    participantName: "Όνομα συμμετέχοντα",
    add: "Προσθήκη",
    bulkPaste: "Μαζική επικόλληση",
    oneNamePerLine: "Ένα όνομα ανά γραμμή",
    addLines: "Προσθήκη γραμμών",
    clearParticipants: "Εκκαθάριση συμμετεχόντων",
    teams: "Ομάδες",
    teamsHelp: "Δημιουργήστε ομάδες τυχαία, προσθέστε κενές ομάδες και μετά σύρετε παίκτες ανάμεσα στις ομάδες και στον πάγκο.",
    numberOfTeams: "Αριθμός ομάδων",
    createRandomly: "Τυχαία δημιουργία",
    createEmptyTeams: "Δημιουργία κενών ομάδων",
    reshuffle: "Ανακάτεμα",
    addEmptyTeam: "Προσθήκη κενής ομάδας",
    levelsScoring: "Επίπεδα + βαθμολογία",
    levelsHelp: "Όλες οι ομάδες παίζουν σε κάθε επίπεδο. Συμπληρώστε σκορ σε κάθε αγώνα για να ολοκληρωθεί το επίπεδο.",
    createNextLevel: "Δημιουργία επόμενου επιπέδου",
    endTournament: "Τερματισμός τουρνουά",
    resumeAddLevels: "Συνέχιση / προσθήκη επιπέδων",
    leaderboardHelp: "Συνολικοί πόντοι = άθροισμα όλων των σκορ επιπέδων.",
    savedLocally: "Αποθηκεύεται τοπικά σε αυτόν τον browser (localStorage).",
    backToTop: "Επιστροφή στην κορυφή",
    top: "Πάνω",
    unnamedTeam: "Ομάδα χωρίς όνομα",
    unnamedParticipant: "Χωρίς όνομα",
    excelLibMissing: "Η βιβλιοθήκη εξαγωγής Excel δεν φορτώθηκε. Ελέγξτε το δίκτυο και δοκιμάστε ξανά.",
    endTournamentFirst: "Ολοκληρώστε πρώτα το τουρνουά και μετά κάντε εξαγωγή.",
    nothingToExport: "Δεν υπάρχει ακόμα τίποτα για εξαγωγή.",
    sheetNameParticipants: "Συμμετέχοντες",
    sheetNameTeams: "Ομάδες",
    sheetNameScores: "Σκορ",
    sheetNameLeaderboard: "Κατάταξη",
    headerName: "Όνομα",
    headerAssignedTeam: "Ανατεθειμένη ομάδα",
    headerTeamName: "Όνομα ομάδας",
    headerMembers: "Μέλη",
    headerLevel: "Επίπεδο",
    headerMatch: "Αγώνας",
    headerTeamA: "Ομάδα Α",
    headerScoreA: "Σκορ Α",
    headerTeamB: "Ομάδα Β",
    headerScoreB: "Σκορ Β",
    headerRank: "Θέση",
    headerTeam: "Ομάδα",
    headerTotalPoints: "Συνολικοί πόντοι",
    headerMatchesPlayed: "Αγώνες",
    bye: "ΡΕΠΟ",
    teamLabel: "Ομάδα {n}",
    removeLevelConfirm: "Να διαγραφεί αυτό το επίπεδο; Τα ζευγάρια και τυχόν σκορ θα χαθούν.",
    levelComplete: " · ολοκληρώθηκε",
    levelInProgress: " · σε εξέλιξη",
    themeAriaLightOn: "Το φωτεινό θέμα είναι ενεργό. Πατήστε για σκούρο.",
    themeAriaDarkOn: "Το σκούρο θέμα είναι ενεργό. Πατήστε για φωτεινό.",
    resetConfirm: "Επαναφορά τουρνουά; Αυτό θα διαγράψει τα αποθηκευμένα δεδομένα σε αυτόν τον browser.",
    clearParticipantsConfirm: "Να διαγραφούν όλοι οι συμμετέχοντες και οι ομάδες;",
    noParticipantsYet: "Δεν υπάρχουν συμμετέχοντες ακόμα.",
    inATeam: "σε ομάδα",
    notAssigned: "δεν έχει ανατεθεί",
    remove: "Αφαίρεση",
    lockHintLocked: "Η σύνθεση ομάδων κλείδωσε (ξεκίνησαν τα επίπεδα). Μπορείτε ακόμα να μετονομάσετε ομάδες.",
    lockHintUnlocked: "Σύρετε παίκτες μεταξύ ομάδων ή προς/από τον πάγκο. Χρησιμοποιήστε Μετακίνηση -> Πάγκος ή ρίξτε στον πάγκο.",
    dragIntoTeam: "Σύρετε σε ομάδα",
    noUnassigned: "Δεν υπάρχουν παίκτες στον πάγκο. Ρίξτε κάποιον εδώ από ομάδα.",
    unassignedBench: "Πάγκος (μη ανατεθειμένοι)",
    playerCount: "{count} παίκτ{suffix}",
    playerPluralSuffix: "ες",
    unassignedHint: "Ρίξτε εδώ μέλος ομάδας για να αφαιρεθεί από την ομάδα (παραμένει εγγεγραμμένο).",
    move: "Μετακίνηση",
    noMembers: "Δεν υπάρχουν μέλη.",
    noTeamsYetCreate: "Δεν υπάρχουν ομάδες ακόμα. Χρησιμοποιήστε «Δημιουργία κενών ομάδων», «Προσθήκη κενής ομάδας» ή «Τυχαία δημιουργία».",
    createTeamsToStart: "Δημιουργήστε ομάδες για να ξεκινήσουν τα επίπεδα.",
    noLevelsYet: "Δεν υπάρχουν επίπεδα ακόμα. Πατήστε «Δημιουργία επόμενου επιπέδου».",
    removeLevel: "Διαγραφή επιπέδου",
    levelLabel: "Επίπεδο {n}",
    noTeamsYet: "Δεν υπάρχουν ομάδες ακόμα.",
    status: "Κατάσταση: {items}",
    tournamentEnded: "το τουρνουά ολοκληρώθηκε",
    noTeamsStatus: "δεν υπάρχουν ομάδες",
    lastLevelComplete: "τελευταίο επίπεδο ολοκληρωμένο",
    lastLevelIncomplete: "τελευταίο επίπεδο ημιτελές",
    exportEnabledTitle: "Λήψη .xlsx με συμμετέχοντες, ομάδες, σκορ, κατάταξη",
    exportNeedEndTitle: "Ολοκληρώστε το τουρνουά για να ενεργοποιηθεί η εξαγωγή",
  },
};

let currentLanguage = "en";

function loadLanguagePreference() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "el") return saved;
  } catch {
    /* ignore */
  }
  return "en";
}

function t(key, vars = {}) {
  const dict = I18N[currentLanguage] ?? I18N.en;
  let text = dict[key] ?? I18N.en[key] ?? key;
  for (const [k, v] of Object.entries(vars)) {
    text = text.replaceAll(`{${k}}`, String(v));
  }
  return text;
}

function uid(prefix) {
  return `${prefix}_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
}

function clampInt(value, min, max) {
  const n = Number.parseInt(String(value), 10);
  if (Number.isNaN(n)) return min;
  return Math.min(max, Math.max(min, n));
}

/** Integer 0–999999 or null (empty / invalid while typing). */
function parseScoreInput(raw) {
  const s = String(raw ?? "").trim();
  if (s === "") return null;
  const n = Number.parseInt(s, 10);
  if (Number.isNaN(n)) return null;
  return Math.min(999999, Math.max(0, n));
}

function normalizeName(name) {
  return String(name ?? "").trim().replace(/\s+/g, " ");
}

function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pairKey(aId, bId) {
  const a = String(aId);
  const b = String(bId);
  return a < b ? `${a}|${b}` : `${b}|${a}`;
}

function defaultState() {
  return {
    participants: [],
    teams: [],
    rounds: [],
    tournamentEnded: false,
    membershipLocked: false,
    lastTeamCount: 4,
  };
}

function migrateLoadedState(loaded) {
  const base = defaultState();
  if (!loaded) return base;
  return {
    ...base,
    ...loaded,
    participants: Array.isArray(loaded.participants) ? loaded.participants : [],
    teams: Array.isArray(loaded.teams) ? loaded.teams : [],
    rounds: Array.isArray(loaded.rounds) ? loaded.rounds : [],
    tournamentEnded: Boolean(loaded.tournamentEnded),
    membershipLocked: Boolean(loaded.membershipLocked),
    lastTeamCount: Number.isFinite(loaded.lastTeamCount) ? loaded.lastTeamCount : base.lastTeamCount,
  };
}

let state = migrateLoadedState(loadState());
let draggedMember = null;

function persist() {
  saveState(state);
}

function hasRounds() {
  return state.rounds.length > 0;
}

function participantById(id) {
  return state.participants.find((p) => p.id === id) ?? null;
}

function teamById(id) {
  return state.teams.find((t) => t.id === id) ?? null;
}

function teamDisplayName(team) {
  const name = normalizeName(team?.name);
  return name || t("unnamedTeam");
}

function participantDisplayName(p) {
  const name = normalizeName(p?.name);
  return name || t("unnamedParticipant");
}

function computeTotals() {
  const totals = Object.fromEntries(state.teams.map((t) => [t.id, 0]));
  const matchesPlayed = Object.fromEntries(state.teams.map((t) => [t.id, 0]));

  for (const round of state.rounds) {
    for (const m of round.matches ?? []) {
      if (m.teamAId && typeof m.scoreA === "number") {
        totals[m.teamAId] = (totals[m.teamAId] ?? 0) + m.scoreA;
        matchesPlayed[m.teamAId] = (matchesPlayed[m.teamAId] ?? 0) + 1;
      }
      if (m.teamBId && typeof m.scoreB === "number") {
        totals[m.teamBId] = (totals[m.teamBId] ?? 0) + m.scoreB;
        matchesPlayed[m.teamBId] = (matchesPlayed[m.teamBId] ?? 0) + 1;
      }
    }
  }

  return { totals, matchesPlayed };
}

function getSortedLeaderboardTeams() {
  const { totals, matchesPlayed } = computeTotals();
  return [...state.teams].sort((a, b) => {
    const ta = totals[a.id] ?? 0;
    const tb = totals[b.id] ?? 0;
    if (tb !== ta) return tb - ta;
    const ma = matchesPlayed[a.id] ?? 0;
    const mb = matchesPlayed[b.id] ?? 0;
    if (mb !== ma) return mb - ma;
    return teamDisplayName(a).localeCompare(teamDisplayName(b));
  });
}

function canExportTournamentData() {
  return state.participants.length > 0 || state.teams.length > 0 || state.rounds.length > 0;
}

function exportTournamentToExcel() {
  if (typeof XLSX === "undefined" || !XLSX.utils || !XLSX.writeFile) {
    window.alert(t("excelLibMissing"));
    return;
  }
  if (!state.tournamentEnded) {
    window.alert(t("endTournamentFirst"));
    return;
  }
  if (!canExportTournamentData()) {
    window.alert(t("nothingToExport"));
    return;
  }

  const wb = XLSX.utils.book_new();

  const partRows = [[t("headerName"), t("headerAssignedTeam")]];
  for (const p of state.participants) {
    const team = state.teams.find((t) => (t.memberIds ?? []).includes(p.id));
    partRows.push([participantDisplayName(p), team ? teamDisplayName(team) : ""]);
  }
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(partRows), t("sheetNameParticipants"));

  const teamRows = [[t("headerTeamName"), t("headerMembers")]];
  for (const t of state.teams) {
    const names = (t.memberIds ?? [])
      .map((id) => participantById(id))
      .filter(Boolean)
      .map((p) => participantDisplayName(p))
      .join("; ");
    teamRows.push([teamDisplayName(t), names]);
  }
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(teamRows), t("sheetNameTeams"));

  const scoreRows = [[t("headerLevel"), t("headerMatch"), t("headerTeamA"), t("headerScoreA"), t("headerTeamB"), t("headerScoreB")]];
  state.rounds.forEach((r, ri) => {
    (r.matches ?? []).forEach((m, mi) => {
      const a = teamById(m.teamAId);
      const b = m.teamBId ? teamById(m.teamBId) : null;
      scoreRows.push([
        ri + 1,
        mi + 1,
        a ? teamDisplayName(a) : "",
        typeof m.scoreA === "number" ? m.scoreA : "",
        b ? teamDisplayName(b) : t("bye"),
        typeof m.scoreB === "number" ? m.scoreB : "",
      ]);
    });
  });
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(scoreRows), t("sheetNameScores"));

  const { totals, matchesPlayed } = computeTotals();
  const lbRows = [[t("headerRank"), t("headerTeam"), t("headerTotalPoints"), t("headerMatchesPlayed")]];
  getSortedLeaderboardTeams().forEach((t, i) => {
    lbRows.push([i + 1, teamDisplayName(t), totals[t.id] ?? 0, matchesPlayed[t.id] ?? 0]);
  });
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(lbRows), t("sheetNameLeaderboard"));

  const d = new Date();
  const stamp = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  XLSX.writeFile(wb, `tournament-export-${stamp}.xlsx`);
}

function isRoundComplete(round) {
  return (round.matches ?? []).every((m) => {
    if (!m.teamBId) return true;
    return typeof m.scoreA === "number" && typeof m.scoreB === "number";
  });
}

function getAllPairingsSet() {
  const set = new Set();
  for (const round of state.rounds) {
    for (const m of round.matches ?? []) {
      if (!m.teamAId || !m.teamBId) continue;
      set.add(pairKey(m.teamAId, m.teamBId));
    }
  }
  return set;
}

function generateRandomRoundMatches(teamIds) {
  const previousPairs = getAllPairingsSet();
  const ids = [...teamIds];
  shuffleInPlace(ids);

  // Greedy with simple swap attempts to avoid repeats.
  for (let i = 0; i + 1 < ids.length; i += 2) {
    const a = ids[i];
    const b = ids[i + 1];
    if (!previousPairs.has(pairKey(a, b))) continue;

    let swapped = false;
    for (let j = i + 2; j < ids.length; j++) {
      const c = ids[j];
      if (!previousPairs.has(pairKey(a, c))) {
        ids[i + 1] = c;
        ids[j] = b;
        swapped = true;
        break;
      }
    }
    if (!swapped) {
      for (let j = i + 2; j < ids.length; j++) {
        const c = ids[j];
        if (!previousPairs.has(pairKey(b, c))) {
          ids[i] = c;
          ids[j] = a;
          swapped = true;
          break;
        }
      }
    }
  }

  const matches = [];
  for (let i = 0; i < ids.length; i += 2) {
    const a = ids[i];
    const b = ids[i + 1] ?? null;
    matches.push({
      id: uid("match"),
      teamAId: a,
      teamBId: b,
      scoreA: null,
      scoreB: b ? null : 0,
      status: "pending",
    });
  }
  return matches;
}

function lockMembershipIfNeeded() {
  if (!state.membershipLocked && hasRounds()) {
    state.membershipLocked = true;
  }
}

function addEmptyTeam() {
  if (state.membershipLocked) return;
  const n = state.teams.length + 1;
  state.teams.push({
    id: uid("team"),
    name: t("teamLabel", { n }),
    memberIds: [],
  });
  state.lastTeamCount = Math.max(state.lastTeamCount ?? 4, state.teams.length);
  persist();
  render();
}

function createEmptyTeamsFromCount(teamCount) {
  if (state.membershipLocked) return;
  const n = clampInt(teamCount, 2, 128);
  const teams = Array.from({ length: n }, (_, i) => ({
    id: uid("team"),
    name: t("teamLabel", { n: i + 1 }),
    memberIds: [],
  }));
  state.teams = teams;
  state.rounds = [];
  state.tournamentEnded = false;
  state.membershipLocked = false;
  state.lastTeamCount = n;
  persist();
  render();
}

function createTeamsRandom(teamCount) {
  const n = clampInt(teamCount, 2, 128);
  const participantIds = state.participants.map((p) => p.id);
  shuffleInPlace(participantIds);

  const teams = Array.from({ length: n }, (_, i) => ({
    id: uid("team"),
    name: t("teamLabel", { n: i + 1 }),
    memberIds: [],
  }));

  // Even distribution
  for (let i = 0; i < participantIds.length; i++) {
    teams[i % n].memberIds.push(participantIds[i]);
  }

  state.teams = teams;
  state.rounds = [];
  state.tournamentEnded = false;
  state.membershipLocked = false;
  state.lastTeamCount = n;
  persist();
  render();
}

function participantIsOnAnyTeam(participantId) {
  return state.teams.some((t) => (t.memberIds ?? []).includes(participantId));
}

function getUnassignedParticipantIds() {
  return state.participants.map((p) => p.id).filter((id) => !participantIsOnAnyTeam(id));
}

function assignParticipantToTeam(participantId, toTeamId) {
  if (state.membershipLocked) return;
  const to = teamById(toTeamId);
  if (!to || !participantById(participantId)) return;
  for (const t of state.teams) {
    const idx = (t.memberIds ?? []).indexOf(participantId);
    if (idx !== -1) t.memberIds.splice(idx, 1);
  }
  if (!(to.memberIds ?? []).includes(participantId)) to.memberIds.push(participantId);
  persist();
  render();
}

function moveParticipant(participantId, fromTeamId, toTeamId) {
  if (state.membershipLocked) return;
  if (fromTeamId === toTeamId) return;
  if (fromTeamId === UNASSIGNED) {
    assignParticipantToTeam(participantId, toTeamId);
    return;
  }
  const from = teamById(fromTeamId);
  const to = teamById(toTeamId);
  if (!from || !to) return;
  const idx = from.memberIds.indexOf(participantId);
  if (idx === -1) return;
  from.memberIds.splice(idx, 1);
  to.memberIds.push(participantId);
  persist();
  render();
}

function removeParticipantFromTeam(participantId, teamId) {
  if (state.membershipLocked) return;
  const team = teamById(teamId);
  if (!team) return;
  const idx = team.memberIds.indexOf(participantId);
  if (idx === -1) return;
  team.memberIds.splice(idx, 1);
  persist();
  render();
}

function addParticipant(name) {
  const cleaned = normalizeName(name);
  if (!cleaned) return;
  state.participants.push({ id: uid("p"), name: cleaned });
  persist();
  render();
}

function removeParticipant(participantId) {
  state.participants = state.participants.filter((p) => p.id !== participantId);
  for (const t of state.teams) {
    t.memberIds = (t.memberIds ?? []).filter((id) => id !== participantId);
  }
  persist();
  render();
}

function clearParticipants() {
  state.participants = [];
  state.teams = [];
  state.rounds = [];
  state.tournamentEnded = false;
  state.membershipLocked = false;
  persist();
  render();
}

function updateTeamName(teamId, name) {
  const t = teamById(teamId);
  if (!t) return;
  t.name = String(name ?? "");
  persist();
  renderLeaderboardOnly();
}

function canCreateNextRound() {
  if (state.tournamentEnded) return false;
  if (state.teams.length < 2) return false;
  const last = state.rounds[state.rounds.length - 1] ?? null;
  if (!last) return true;
  return isRoundComplete(last);
}

function createNextRound() {
  if (!canCreateNextRound()) return;
  const teamIds = state.teams.map((t) => t.id);
  const matches = generateRandomRoundMatches(teamIds);
  const round = {
    id: uid("round"),
    createdAt: Date.now(),
    matches,
  };
  state.rounds.push(round);
  lockMembershipIfNeeded();
  persist();
  render();
}

function removeIncompleteLevel(roundId) {
  const round = state.rounds.find((r) => r.id === roundId);
  if (!round) return;
  if (isRoundComplete(round)) return;
  const ok = window.confirm(t("removeLevelConfirm"));
  if (!ok) return;
  state.rounds = state.rounds.filter((r) => r.id !== roundId);
  if (!hasRounds()) {
    state.membershipLocked = false;
  }
  persist();
  render();
}

function setTournamentEnded(ended) {
  state.tournamentEnded = Boolean(ended);
  persist();
  render();
}

function setMatchScore(roundId, matchId, side, rawValue) {
  if (state.tournamentEnded) return;
  const round = state.rounds.find((r) => r.id === roundId);
  if (!round) return;
  const match = (round.matches ?? []).find((m) => m.id === matchId);
  if (!match) return;
  const val = parseScoreInput(rawValue);
  if (side === "A") match.scoreA = val;
  if (side === "B") match.scoreB = val;

  match.status = match.teamBId && typeof match.scoreA === "number" && typeof match.scoreB === "number" ? "complete" : "pending";
  persist();
  renderLeaderboardOnly();
  renderControlsOnly();
  updateAllLevelStatusLabels();
}

function updateAllLevelStatusLabels() {
  if (!els.levelsArea) return;
  const cards = els.levelsArea.querySelectorAll("[data-level-id]");
  state.rounds.forEach((r) => {
    for (const card of cards) {
      if (card.getAttribute("data-level-id") !== r.id) continue;
      const el = card.querySelector('[data-role="levelStatus"]');
      if (el) el.textContent = isRoundComplete(r) ? t("levelComplete") : t("levelInProgress");
      break;
    }
  });
}

const TAB_CONFIG = [
  { tabId: "tab-roster", panelId: "panel-roster" },
  { tabId: "tab-levels", panelId: "panel-levels" },
  { tabId: "tab-leaderboard", panelId: "panel-leaderboard" },
];

const ACTIVE_TAB_KEY = "tournamentActiveTab";

function setActiveTab(index) {
  const n = Math.max(0, Math.min(TAB_CONFIG.length - 1, index));
  TAB_CONFIG.forEach((t, i) => {
    const tab = document.getElementById(t.tabId);
    const panel = document.getElementById(t.panelId);
    if (!tab || !panel) return;
    const active = i === n;
    tab.classList.toggle("tab--active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
    tab.tabIndex = active ? 0 : -1;
    if (active) panel.removeAttribute("hidden");
    else panel.setAttribute("hidden", "");
  });
  try {
    sessionStorage.setItem(ACTIVE_TAB_KEY, String(n));
  } catch {
    /* ignore */
  }
}

function initTabs() {
  let idx = 0;
  try {
    const s = sessionStorage.getItem(ACTIVE_TAB_KEY);
    if (s !== null) {
      const parsed = Number.parseInt(s, 10);
      if (!Number.isNaN(parsed) && parsed >= 0 && parsed < TAB_CONFIG.length) idx = parsed;
    }
  } catch {
    /* ignore */
  }
  setActiveTab(idx);

  const tablist = document.querySelector('.tabs[role="tablist"]');
  TAB_CONFIG.forEach((t, i) => {
    const tab = document.getElementById(t.tabId);
    if (!tab) return;
    tab.addEventListener("click", () => setActiveTab(i));
  });

  if (tablist) {
    tablist.addEventListener("keydown", (e) => {
      const current = TAB_CONFIG.findIndex((t) => document.getElementById(t.tabId)?.classList.contains("tab--active"));
      if (current === -1) return;
      let next = current;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next = (current + 1) % TAB_CONFIG.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        next = (current - 1 + TAB_CONFIG.length) % TAB_CONFIG.length;
      } else if (e.key === "Home") {
        e.preventDefault();
        next = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        next = TAB_CONFIG.length - 1;
      } else {
        return;
      }
      setActiveTab(next);
      document.getElementById(TAB_CONFIG[next].tabId)?.focus();
    });
  }
}

const COLLAPSE_PARTICIPANTS_KEY = "rosterCollapseParticipants";
const COLLAPSE_TEAMS_KEY = "rosterCollapseTeams";

function setRosterSectionCollapsed(sectionId, btnId, collapsed) {
  const section = document.getElementById(sectionId);
  const btn = document.getElementById(btnId);
  if (!section || !btn) return;
  section.classList.toggle("card--collapsed", collapsed);
  btn.setAttribute("aria-expanded", collapsed ? "false" : "true");
  btn.textContent = collapsed ? t("expand") : t("collapse");
  try {
    const key = sectionId === "card-participants" ? COLLAPSE_PARTICIPANTS_KEY : COLLAPSE_TEAMS_KEY;
    sessionStorage.setItem(key, collapsed ? "1" : "0");
  } catch {
    /* ignore */
  }
}

function initCollapsibleRosterCards() {
  const pairs = [
    { section: "card-participants", btn: "collapseParticipantsBtn" },
    { section: "card-teams", btn: "collapseTeamsBtn" },
  ];
  for (const p of pairs) {
    const key = p.section === "card-participants" ? COLLAPSE_PARTICIPANTS_KEY : COLLAPSE_TEAMS_KEY;
    let collapsed = false;
    try {
      collapsed = sessionStorage.getItem(key) === "1";
    } catch {
      /* ignore */
    }
    setRosterSectionCollapsed(p.section, p.btn, collapsed);
    document.getElementById(p.btn)?.addEventListener("click", () => {
      const sec = document.getElementById(p.section);
      if (!sec) return;
      const cur = sec.classList.contains("card--collapsed");
      setRosterSectionCollapsed(p.section, p.btn, !cur);
    });
  }
}

function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;
  const threshold = 320;
  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (y > threshold) btn.removeAttribute("hidden");
    else btn.setAttribute("hidden", "");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const THEME_KEY = "tournamentTheme";

function syncThemeToggleButton() {
  const btn = document.getElementById("themeToggleBtn");
  if (!btn) return;
  const light = document.documentElement.getAttribute("data-theme") === "light";
  btn.setAttribute("aria-checked", light ? "true" : "false");
  btn.setAttribute(
    "aria-label",
    light ? t("themeAriaLightOn") : t("themeAriaDarkOn"),
  );
}

function applyTheme(next) {
  const t = next === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", t);
  document.documentElement.style.colorScheme = t === "light" ? "light" : "dark";
  try {
    localStorage.setItem(THEME_KEY, t);
  } catch {
    /* ignore */
  }
  syncThemeToggleButton();
}

function initTheme() {
  syncThemeToggleButton();
  document.getElementById("themeToggleBtn")?.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    applyTheme(cur === "light" ? "dark" : "light");
  });
}

function syncLanguageToggleButton() {
  const btn = document.getElementById("langToggleBtn");
  if (!btn) return;
  btn.textContent = t("langButton");
  btn.setAttribute("aria-label", t("langAria"));
}

function applyStaticTranslations() {
  document.title = t("pageTitle");
  document.documentElement.lang = currentLanguage === "el" ? "el" : "en";

  const appTitle = document.querySelector(".appHeader__title h1");
  if (appTitle) appTitle.textContent = t("appTitle");
  const appSubtitle = document.querySelector(".appHeader__title .muted");
  if (appSubtitle) appSubtitle.textContent = t("appSubtitle");

  const themeWrap = document.querySelector(".themeToggle");
  if (themeWrap) themeWrap.setAttribute("title", `${t("light")} / ${t("dark")}`);
  const darkLabel = document.querySelector(".themeToggle__label--dark");
  if (darkLabel) darkLabel.textContent = t("dark");
  const lightLabel = document.querySelector(".themeToggle__label--light");
  if (lightLabel) lightLabel.textContent = t("light");

  if (els.exportExcelBtn) els.exportExcelBtn.textContent = t("exportExcel");
  if (els.resetBtn) els.resetBtn.textContent = t("resetTournament");

  const tablist = document.querySelector('.tabs[role="tablist"]');
  if (tablist) tablist.setAttribute("aria-label", t("tabsAria"));
  const tabRoster = document.getElementById("tab-roster");
  if (tabRoster) tabRoster.textContent = t("tabRoster");
  const tabLevels = document.getElementById("tab-levels");
  if (tabLevels) tabLevels.textContent = t("tabLevels");
  const tabLeaderboard = document.getElementById("tab-leaderboard");
  if (tabLeaderboard) tabLeaderboard.textContent = t("tabLeaderboard");

  const participantsTitle = document.getElementById("participantsTitle");
  if (participantsTitle) participantsTitle.textContent = t("participants");
  const participantsHeaderHelp = document.querySelector("#card-participants .card__header .muted");
  if (participantsHeaderHelp) participantsHeaderHelp.textContent = t("participantsHelp");
  if (els.participantNameInput) els.participantNameInput.placeholder = t("participantName");
  const addParticipantBtn = els.addParticipantForm?.querySelector('button[type="submit"]');
  if (addParticipantBtn) addParticipantBtn.textContent = t("add");
  const bulkLabel = document.querySelector('label[for="bulkParticipantsInput"]');
  if (bulkLabel) bulkLabel.textContent = t("bulkPaste");
  if (els.bulkParticipantsInput) els.bulkParticipantsInput.placeholder = t("oneNamePerLine");
  if (els.bulkAddBtn) els.bulkAddBtn.textContent = t("addLines");
  if (els.clearParticipantsBtn) els.clearParticipantsBtn.textContent = t("clearParticipants");

  const teamsTitle = document.getElementById("teamsTitle");
  if (teamsTitle) teamsTitle.textContent = t("teams");
  const teamsHeaderHelp = document.querySelector("#card-teams .card__header .muted");
  if (teamsHeaderHelp) teamsHeaderHelp.textContent = t("teamsHelp");
  const countLabel = document.querySelector(".labelInline__text");
  if (countLabel) countLabel.textContent = t("numberOfTeams");
  if (els.createTeamsBtn) els.createTeamsBtn.textContent = t("createRandomly");
  if (els.createEmptyTeamsBtn) els.createEmptyTeamsBtn.textContent = t("createEmptyTeams");
  if (els.reshuffleTeamsBtn) els.reshuffleTeamsBtn.textContent = t("reshuffle");
  if (els.addEmptyTeamBtn) els.addEmptyTeamBtn.textContent = t("addEmptyTeam");

  const levelsTitle = document.getElementById("levelsTitle");
  if (levelsTitle) levelsTitle.textContent = t("levelsScoring");
  const levelsHelp = document.querySelector("#panel-levels .card__header .muted");
  if (levelsHelp) levelsHelp.textContent = t("levelsHelp");
  if (els.createLevelBtn) els.createLevelBtn.textContent = t("createNextLevel");
  if (els.endTournamentBtn) els.endTournamentBtn.textContent = t("endTournament");
  if (els.resumeTournamentBtn) els.resumeTournamentBtn.textContent = t("resumeAddLevels");

  const leaderboardTitle = document.getElementById("leaderboardTitle");
  if (leaderboardTitle) leaderboardTitle.textContent = t("tabLeaderboard");
  const leaderboardHelp = document.querySelector("#panel-leaderboard .card__header .muted");
  if (leaderboardHelp) leaderboardHelp.textContent = t("leaderboardHelp");

  const footer = document.querySelector("footer small");
  if (footer) footer.textContent = t("savedLocally");
  const topBtn = document.getElementById("backToTopBtn");
  if (topBtn) {
    topBtn.textContent = t("top");
    topBtn.setAttribute("aria-label", t("backToTop"));
    topBtn.setAttribute("title", t("backToTop"));
  }

  syncThemeToggleButton();
  syncLanguageToggleButton();
}

function applyLanguage(nextLanguage) {
  currentLanguage = nextLanguage === "el" ? "el" : "en";
  try {
    localStorage.setItem(LANG_KEY, currentLanguage);
  } catch {
    /* ignore */
  }
  applyStaticTranslations();
}

function initLanguage() {
  currentLanguage = loadLanguagePreference();
  applyStaticTranslations();
  document.getElementById("langToggleBtn")?.addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "el" : "en");
    render();
  });
}

// DOM
const els = {
  resetBtn: document.getElementById("resetBtn"),
  addParticipantForm: document.getElementById("addParticipantForm"),
  participantNameInput: document.getElementById("participantNameInput"),
  participantsList: document.getElementById("participantsList"),
  bulkParticipantsInput: document.getElementById("bulkParticipantsInput"),
  bulkAddBtn: document.getElementById("bulkAddBtn"),
  clearParticipantsBtn: document.getElementById("clearParticipantsBtn"),

  teamCountInput: document.getElementById("teamCountInput"),
  createTeamsBtn: document.getElementById("createTeamsBtn"),
  createEmptyTeamsBtn: document.getElementById("createEmptyTeamsBtn"),
  reshuffleTeamsBtn: document.getElementById("reshuffleTeamsBtn"),
  addEmptyTeamBtn: document.getElementById("addEmptyTeamBtn"),
  teamLockHint: document.getElementById("teamLockHint"),
  teamsArea: document.getElementById("teamsArea"),

  createLevelBtn: document.getElementById("createLevelBtn"),
  endTournamentBtn: document.getElementById("endTournamentBtn"),
  resumeTournamentBtn: document.getElementById("resumeTournamentBtn"),
  levelStatus: document.getElementById("levelStatus"),
  levelsArea: document.getElementById("levelsArea"),

  leaderboardArea: document.getElementById("leaderboardArea"),

  exportExcelBtn: document.getElementById("exportExcelBtn"),
};

function wireEvents() {
  els.resetBtn.addEventListener("click", () => {
    const ok = window.confirm(t("resetConfirm"));
    if (!ok) return;
    clearState();
    state = defaultState();
    try {
      sessionStorage.removeItem(ACTIVE_TAB_KEY);
      sessionStorage.removeItem(COLLAPSE_PARTICIPANTS_KEY);
      sessionStorage.removeItem(COLLAPSE_TEAMS_KEY);
    } catch {
      /* ignore */
    }
    setActiveTab(0);
    setRosterSectionCollapsed("card-participants", "collapseParticipantsBtn", false);
    setRosterSectionCollapsed("card-teams", "collapseTeamsBtn", false);
    persist();
    render();
  });

  els.addParticipantForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addParticipant(els.participantNameInput.value);
    els.participantNameInput.value = "";
    els.participantNameInput.focus();
  });

  els.bulkAddBtn.addEventListener("click", () => {
    const lines = String(els.bulkParticipantsInput.value ?? "")
      .split("\n")
      .map((l) => normalizeName(l))
      .filter(Boolean);
    if (!lines.length) return;
    for (const line of lines) addParticipant(line);
    els.bulkParticipantsInput.value = "";
  });

  els.clearParticipantsBtn.addEventListener("click", () => {
    const ok = window.confirm(t("clearParticipantsConfirm"));
    if (!ok) return;
    clearParticipants();
  });

  els.teamCountInput.value = String(state.lastTeamCount ?? 4);
  els.createTeamsBtn.addEventListener("click", () => createTeamsRandom(els.teamCountInput.value));
  els.createEmptyTeamsBtn.addEventListener("click", () => createEmptyTeamsFromCount(els.teamCountInput.value));
  els.reshuffleTeamsBtn.addEventListener("click", () => createTeamsRandom(els.teamCountInput.value));
  els.addEmptyTeamBtn.addEventListener("click", () => addEmptyTeam());

  els.createLevelBtn.addEventListener("click", () => createNextRound());
  els.endTournamentBtn.addEventListener("click", () => setTournamentEnded(true));
  els.resumeTournamentBtn.addEventListener("click", () => setTournamentEnded(false));

  initTabs();
  initCollapsibleRosterCards();
  initBackToTop();
  initTheme();
  initLanguage();

  els.exportExcelBtn?.addEventListener("click", () => exportTournamentToExcel());
}

function renderParticipants() {
  const list = state.participants;
  if (!list.length) {
    els.participantsList.innerHTML = `<div class="muted">${t("noParticipantsYet")}</div>`;
    return;
  }

  els.participantsList.innerHTML = list
    .map((p) => {
      const inTeams = state.teams.some((t) => (t.memberIds ?? []).includes(p.id));
      return `
        <div class="pill">
          <div class="pill__main">
            <div class="pill__name">${escapeHtml(participantDisplayName(p))}</div>
            <div class="pill__meta">${inTeams ? t("inATeam") : t("notAssigned")}</div>
          </div>
          <div class="pill__actions">
            <button class="miniBtn" type="button" data-action="removeParticipant" data-id="${p.id}">${t("remove")}</button>
          </div>
        </div>
      `;
    })
    .join("");

  els.participantsList.querySelectorAll('[data-action="removeParticipant"]').forEach((btn) => {
    btn.addEventListener("click", () => removeParticipant(btn.getAttribute("data-id")));
  });
}

function renderTeams() {
  els.teamLockHint.textContent = state.membershipLocked
    ? t("lockHintLocked")
    : t("lockHintUnlocked");

  const unassignedIds = getUnassignedParticipantIds();
  const unassignedRows =
    unassignedIds.length > 0
      ? unassignedIds
          .map((pid) => participantById(pid))
          .filter(Boolean)
          .map((p) => {
            const moveDisabled = state.membershipLocked ? "disabled" : "";
            return `
              <div class="memberRow" ${moveDisabled ? "" : 'draggable="true"'} data-action="draggableMember" data-from="${UNASSIGNED}" data-pid="${p.id}">
                <div class="memberRow__name">${escapeHtml(participantDisplayName(p))}</div>
                <div class="moveRow"><span class="muted" style="font-size:12px;">${t("dragIntoTeam")}</span></div>
              </div>
            `;
          })
          .join("")
      : `<div class="muted">${t("noUnassigned")}</div>`;

  function teamSelectOptionsForRow(currentTeamId) {
    return (
      `<option value="${UNASSIGNED}">${t("unassignedBench")}</option>` +
      state.teams.map((opt) => `<option value="${opt.id}" ${opt.id === currentTeamId ? "selected" : ""}>${escapeHtml(teamDisplayName(opt))}</option>`).join("")
    );
  }

  const teamsGridHtml = state.teams.length
    ? state.teams
    .map((team) => {
      const members = (team.memberIds ?? [])
        .map((pid) => participantById(pid))
        .filter(Boolean);
      const membersHtml = members.length
        ? members
            .map((p) => {
              const moveDisabled = state.membershipLocked ? "disabled" : "";
              return `
                <div class="memberRow" ${moveDisabled ? "" : 'draggable="true"'} data-action="draggableMember" data-from="${team.id}" data-pid="${p.id}">
                  <div class="memberRow__name">${escapeHtml(participantDisplayName(p))}</div>
                  <div class="moveRow">
                    <select class="input input--small" ${moveDisabled} data-action="moveTo" data-from="${team.id}" data-pid="${p.id}">
                      ${teamSelectOptionsForRow(team.id)}
                    </select>
                    <button class="miniBtn" type="button" ${moveDisabled} data-action="moveBtn" data-from="${team.id}" data-pid="${p.id}">${t("move")}</button>
                    <button class="miniBtn" type="button" ${moveDisabled} data-action="removeFromTeam" data-from="${team.id}" data-pid="${p.id}">${t("remove")}</button>
                  </div>
                </div>
              `;
            })
            .join("")
        : `<div class="muted">${t("noMembers")}</div>`;

      return `
        <div class="teamCard" data-action="dropTeam" data-team-id="${team.id}">
          <div class="teamCard__head">
            <input class="input teamNameInput" value="${escapeAttr(teamDisplayName(team))}" data-action="teamName" data-id="${team.id}" />
          </div>
          <div class="members">${membersHtml}</div>
        </div>
      `;
    })
    .join("")
    : `<div class="muted teamsGrid__empty">${t("noTeamsYetCreate")}</div>`;

  els.teamsArea.innerHTML = `
    <div class="unassignedCard" data-action="dropUnassigned">
      <div class="unassignedCard__head">
        <strong>${t("unassignedBench")}</strong>
        <span class="muted" style="font-size:12px;">${t("playerCount", { count: unassignedIds.length, suffix: unassignedIds.length === 1 ? "" : t("playerPluralSuffix") })}</span>
      </div>
      <p class="muted unassignedCard__hint">${t("unassignedHint")}</p>
      <div class="members unassignedCard__members">${unassignedRows}</div>
    </div>
    <div class="teams teamsGrid">${teamsGridHtml}</div>
  `;

  els.teamsArea.querySelectorAll('[data-action="teamName"]').forEach((input) => {
    input.addEventListener("input", () => updateTeamName(input.getAttribute("data-id"), input.value));
  });

  els.teamsArea.querySelectorAll('[data-action="moveBtn"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const from = btn.getAttribute("data-from");
      const pid = btn.getAttribute("data-pid");
      const select = els.teamsArea.querySelector(`select[data-action="moveTo"][data-from="${cssEscape(from)}"][data-pid="${cssEscape(pid)}"]`);
      const to = select?.value;
      if (!to) return;
      if (to === UNASSIGNED) {
        removeParticipantFromTeam(pid, from);
        return;
      }
      moveParticipant(pid, from, to);
    });
  });

  els.teamsArea.querySelectorAll('[data-action="removeFromTeam"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const from = btn.getAttribute("data-from");
      const pid = btn.getAttribute("data-pid");
      removeParticipantFromTeam(pid, from);
    });
  });

  if (!state.membershipLocked) {
    els.teamsArea.querySelectorAll('[data-action="draggableMember"]').forEach((row) => {
      row.addEventListener("dragstart", (event) => {
        draggedMember = {
          participantId: row.getAttribute("data-pid"),
          fromTeamId: row.getAttribute("data-from"),
        };
        row.classList.add("memberRow--dragging");
        if (event.dataTransfer) {
          event.dataTransfer.effectAllowed = "move";
          event.dataTransfer.setData("text/plain", draggedMember.participantId || "");
        }
      });
      row.addEventListener("dragend", () => {
        row.classList.remove("memberRow--dragging");
        draggedMember = null;
        els.teamsArea.querySelectorAll('[data-action="dropTeam"]').forEach((card) => {
          card.classList.remove("teamCard--dropTarget");
        });
        const bench = els.teamsArea.querySelector('[data-action="dropUnassigned"]');
        if (bench) bench.classList.remove("unassignedCard--dropTarget");
      });
    });

    els.teamsArea.querySelectorAll('[data-action="dropTeam"]').forEach((card) => {
      card.addEventListener("dragover", (event) => {
        if (!draggedMember) return;
        event.preventDefault();
        card.classList.add("teamCard--dropTarget");
      });
      card.addEventListener("dragleave", () => {
        card.classList.remove("teamCard--dropTarget");
      });
      card.addEventListener("drop", (event) => {
        event.preventDefault();
        card.classList.remove("teamCard--dropTarget");
        if (!draggedMember) return;
        const toTeamId = card.getAttribute("data-team-id");
        if (draggedMember.fromTeamId === toTeamId) return;
        moveParticipant(draggedMember.participantId, draggedMember.fromTeamId, toTeamId);
      });
    });

    const bench = els.teamsArea.querySelector('[data-action="dropUnassigned"]');
    if (bench) {
      bench.addEventListener("dragover", (event) => {
        if (!draggedMember || draggedMember.fromTeamId === UNASSIGNED) return;
        event.preventDefault();
        bench.classList.add("unassignedCard--dropTarget");
      });
      bench.addEventListener("dragleave", () => {
        bench.classList.remove("unassignedCard--dropTarget");
      });
      bench.addEventListener("drop", (event) => {
        event.preventDefault();
        bench.classList.remove("unassignedCard--dropTarget");
        if (!draggedMember || draggedMember.fromTeamId === UNASSIGNED) return;
        removeParticipantFromTeam(draggedMember.participantId, draggedMember.fromTeamId);
      });
    }
  }
}

function renderRounds() {
  if (!state.teams.length) {
    els.levelsArea.innerHTML = `<div class="muted">${t("createTeamsToStart")}</div>`;
    return;
  }

  if (!state.rounds.length) {
    els.levelsArea.innerHTML = `<div class="muted">${t("noLevelsYet")}</div>`;
    return;
  }

  els.levelsArea.innerHTML = state.rounds
    .map((r, idx) => {
      const complete = isRoundComplete(r);
      const matchesHtml = (r.matches ?? [])
        .map((m) => {
          const a = teamById(m.teamAId);
          const b = m.teamBId ? teamById(m.teamBId) : null;
          const bName = b ? teamDisplayName(b) : t("bye");
          const scoresLocked = state.tournamentEnded;
          const scoreADisabled = scoresLocked ? "disabled" : "";
          const scoreBDisabled = scoresLocked || !b ? "disabled" : "";
          const scoreAVal = typeof m.scoreA === "number" ? String(m.scoreA) : "";
          const scoreBVal = typeof m.scoreB === "number" ? String(m.scoreB) : b ? "" : "0";
          return `
            <div class="matchRow">
              <div class="matchTeam">${escapeHtml(teamDisplayName(a))}</div>
              <input class="input scoreInput" inputmode="numeric" type="text" placeholder="0" autocomplete="off" ${scoreADisabled}
                value="${escapeAttr(scoreAVal)}"
                data-action="scoreA" data-round="${r.id}" data-match="${m.id}" />
              <div class="matchTeam">${escapeHtml(bName)}</div>
              <input class="input scoreInput" inputmode="numeric" type="text" placeholder="0" autocomplete="off" ${scoreBDisabled}
                value="${escapeAttr(scoreBVal)}"
                data-action="scoreB" data-round="${r.id}" data-match="${m.id}" />
            </div>
          `;
        })
        .join("");

      const removeBtn = complete
        ? ""
        : `<button type="button" class="miniBtn" data-action="removeLevel" data-round-id="${r.id}">${t("removeLevel")}</button>`;

      return `
        <div class="levelCard" data-level-id="${r.id}">
          <div class="row row--space levelCard__head">
            <div>
              <strong>${t("levelLabel", { n: idx + 1 })}</strong>
              <span class="muted" data-role="levelStatus">${complete ? t("levelComplete") : t("levelInProgress")}</span>
            </div>
            <div class="levelCard__meta row row--gap">
              ${removeBtn}
              <small class="muted">${new Date(r.createdAt).toLocaleString()}</small>
            </div>
          </div>
          <div class="matches">${matchesHtml}</div>
        </div>
      `;
    })
    .join("");

  els.levelsArea.querySelectorAll('input[data-action="scoreA"]').forEach((input) => {
    input.addEventListener("input", () => setMatchScore(input.getAttribute("data-round"), input.getAttribute("data-match"), "A", input.value));
  });
  els.levelsArea.querySelectorAll('input[data-action="scoreB"]').forEach((input) => {
    input.addEventListener("input", () => setMatchScore(input.getAttribute("data-round"), input.getAttribute("data-match"), "B", input.value));
  });

  els.levelsArea.querySelectorAll('[data-action="removeLevel"]').forEach((btn) => {
    btn.addEventListener("click", () => removeIncompleteLevel(btn.getAttribute("data-round-id")));
  });
}

function renderLeaderboardOnly() {
  if (!state.teams.length) {
    els.leaderboardArea.innerHTML = `<div class="muted">${t("noTeamsYet")}</div>`;
    return;
  }

  const { totals, matchesPlayed } = computeTotals();
  const rows = getSortedLeaderboardTeams();

  els.leaderboardArea.innerHTML = `
    <table class="leaderboardTable">
      <thead>
        <tr>
          <th style="width: 56px;">#</th>
          <th>${t("headerTeam")}</th>
          <th style="width: 120px;">${t("headerTotalPoints")}</th>
          <th style="width: 130px;">${t("headerMatchesPlayed")}</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map((teamRow, i) => {
            return `
              <tr>
                <td>${i + 1}</td>
                <td>${escapeHtml(teamDisplayName(teamRow))}</td>
                <td><strong>${totals[teamRow.id] ?? 0}</strong></td>
                <td>${matchesPlayed[teamRow.id] ?? 0}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function renderControlsOnly() {
  els.createLevelBtn.disabled = !canCreateNextRound();
  els.endTournamentBtn.disabled = state.tournamentEnded;
  els.resumeTournamentBtn.disabled = !state.tournamentEnded;

  const last = state.rounds[state.rounds.length - 1] ?? null;
  const statusParts = [];
  if (state.tournamentEnded) statusParts.push(t("tournamentEnded"));
  if (!state.teams.length) statusParts.push(t("noTeamsStatus"));
  if (last) statusParts.push(isRoundComplete(last) ? t("lastLevelComplete") : t("lastLevelIncomplete"));
  els.levelStatus.textContent = statusParts.length ? t("status", { items: statusParts.join(" · ") }) : "";

  els.createTeamsBtn.disabled = state.membershipLocked;
  els.createEmptyTeamsBtn.disabled = state.membershipLocked;
  els.reshuffleTeamsBtn.disabled = state.membershipLocked;
  els.addEmptyTeamBtn.disabled = state.membershipLocked;
  els.teamCountInput.disabled = state.membershipLocked;

  if (els.exportExcelBtn) {
    els.exportExcelBtn.disabled = !state.tournamentEnded || !canExportTournamentData();
    els.exportExcelBtn.title = state.tournamentEnded
      ? t("exportEnabledTitle")
      : t("exportNeedEndTitle");
  }
}

function render() {
  renderParticipants();
  renderTeams();
  renderRounds();
  renderLeaderboardOnly();
  renderControlsOnly();
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(s) {
  return escapeHtml(s).replaceAll("\n", " ");
}

function cssEscape(s) {
  // Limited escape for attribute selector usage in this app.
  return String(s).replaceAll('"', '\\"');
}

wireEvents();
render();

