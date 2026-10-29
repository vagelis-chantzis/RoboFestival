// Plain scripts (see index.html order): no ES modules so file:// works everywhere.

const { loadState, saveState, clearState } = window.TournamentStorage;

/** Sentinel for participants not on any team (bench / unassigned pool). */
const UNASSIGNED = "__unassigned__";
const LANG_KEY = "tournamentLanguage";
const CHANNEL_REGISTRATION_FORM = "registration_form";
const CHANNEL_IN_FESTIVAL = "in_festival";
const APP_SCHEMA_VERSION = 2;
const APP_MODE_CLASSIC = "classic";
const APP_MODE_TABLES = "tables";

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
    exportBackup: "Export Backup",
    importBackup: "Import Backup",
    exportDisabledTitle: "Enable after you end the tournament",
    appHeaderTitle: "Robofestival",
    resetTournament: "Reset tournament",
    resetYoungCoders: "Reset",
    resetYoungCodersConfirm: "Reset Young Coders? This clears its saved data in this browser.",
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
    lockParticipants: "Lock participants",
    unlockParticipants: "Unlock participants",
    participantsLockedHint: "Editing locked.",
    participantsUnlockedHint: "Add/remove allowed.",
    participantsUnlockedWithLevelsHint:
      "Editing unlocked; roster moves allowed too.",
    unlockParticipantsOpensRostersConfirm:
      "Levels have started. Unlocking participants will also allow moving players between teams and editing rosters. Continue?",
    teams: "Teams",
    teamsHelp: "Create teams randomly, add empty teams, then drag players between teams and the unassigned bench.",
    numberOfTeams: "Number of teams",
    createRandomly: "Create randomly",
    createEmptyTeams: "Create empty teams",
    reshuffle: "Re-shuffle",
    addEmptyTeam: "Add empty team",
    lockTeams: "Lock teams",
    unlockTeams: "Unlock teams",
    teamsLockedHint: "Team editing is locked.",
    teamsUnlockedHint: "You can edit teams and move players.",
    teamsLockedWithLevelsHint: "Team editing is locked. Teams auto-lock when levels start; unlock to keep editing.",
    teamsUnlockedWithLevelsHint:
      "Team editing is unlocked. You can rename teams, move players, and remove teams while levels are in progress.",
    unlockTeamsWhileLevelsConfirm:
      "Levels have started. Unlocking teams will allow renaming, moving players, and removing teams (removing a team clears existing levels). Continue?",
    collapseTeam: "Collapse team",
    expandTeam: "Expand team",
    levelsScoring: "Levels + scoring",
    levelsHelp: "All teams play each level. Enter scores for every match to complete a level.",
    modeLabel: "Mode",
    modeClassic: "Classic",
    modeTables: "With tables",
    modeLockedHint: "mode locked after first level",
    numberOfTables: "Number of tables",
    tableLabel: "Table {n}",
    tableEmpty: "Empty",
    tableOnMatch: "On match",
    tableWaitingNext: "Waiting for next match",
    matchQueue: "Up next",
    matchQueueEmpty: "No waiting matchups.",
    tableModeHelp: "Table mode: each table runs one matchup. Type both scores, then click ✓ to confirm and free the table.",
    confirmScoreTitle: "Confirm score and free the table",
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
    headerCoach: "Coach",
    headerMembers: "Members",
    headerLevel: "Level",
    headerMatch: "Match",
    headerTeamA: "Team A",
    headerScoreA: "Score A",
    headerTeamB: "Team B",
    headerScoreB: "Score B",
    headerTable: "Table",
    headerRank: "Rank",
    headerTeam: "Team",
    headerTotalPoints: "Total points",
    headerMatchesPlayed: "Matches played",
    bye: "BYE",
    dragMatchupTitle: "Drag onto another team in this level to swap pairings (scores for both matches are cleared).",
    dragMatchupLevel2Hint:
      "From level 2 onward: drag a team name onto another team in this level to swap pairings. Scores for the two affected matches are cleared.",
    rematchPairingConfirm:
      "One or more pairings already met in an earlier level:\n\n{list}\n\nApply this swap anyway?",
    teamLabel: "Team {n}",
    coachLabel: "Coach",
    coachPlaceholder: "Coach name",
    removeTeamConfirm: "Remove team \"{name}\"?",
    removeTeamWithLevelsConfirm:
      "Remove team \"{name}\"? Their matches in existing levels will be removed and any related scores will be lost. Other teams' matches stay intact.",
    notEnoughPlayingTeams: "need at least 2 teams with players",
    removeLevelConfirm: "Remove this level? Matchups and any scores for it will be discarded.",
    levelComplete: " · complete",
    levelInProgress: " · in progress",
    themeAriaLightOn: "Light theme on. Click to use dark theme.",
    themeAriaDarkOn: "Dark theme on. Click to use light theme.",
    resetConfirm: "Reset tournament? This clears saved data in this browser.",
    clearParticipantsConfirm: "Clear all participants and teams?",
    participantsLockedActionBlocked: "Participants are locked.",
    removeParticipantConfirm: "Remove {name} from the roster? They will also be removed from any team.",
    removeParticipantWhileLockedConfirm:
      "Participants are currently locked. Remove {name} from the roster anyway? They will also be removed from any team.",
    noParticipantsYet: "No participants yet.",
    inATeam: "in a team",
    notAssigned: "not assigned",
    assignToTeam: "Assign to team",
    noTeamOption: "— no team —",
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
    noMembers: "No members — this team won't be in matchups.",
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
    backupOverwriteConfirm: "Import backup and overwrite current tournament data?",
    backupOverwriteConfirmYoung: "Import backup and overwrite current Young Coders data?",
    backupImportSuccess: "Backup imported successfully.",
    backupImportInvalid: "This file is not a valid Robofestival backup.",
    backupImportInvalidYoung: "This file is not a valid Young Coders backup.",
    backupImportParseError: "Could not read backup file. Please select a valid JSON backup.",
    backupImportNoFile: "Please select a backup file first.",
    channelsManagerTitle: "Registration channels",
    manageChannels: "Manage channels",
    hideChannels: "Hide channels",
    addChannel: "Add channel",
    removeChannel: "Remove",
    channelShort: "Short",
    channelLabel: "Label",
    channelColor: "Color",
    markNoShow: "Mark no-show",
    markPresent: "Mark present",
    noShowBadge: "No-show",
    channelInUseAlert: "Cannot remove this channel while participants are assigned to it.",
    headerChannel: "Channel",
    headerNoShow: "No-show",
    cycleChannelHint: "click to change",
    cycleChannelAria: "Change registration channel",
    homePageTitle: "Robofestival",
    homeHeading: "Choose an app",
    homeLead: "Open the tournament or Young Coders.",
    appsAria: "Apps",
    openApp: "Open",
    openRobofestivalAria: "Open Robofestival",
    openYoungCodersAria: "Open Young Coders",
    home: "Home",
    backHome: "Back to home",
    youngCodersTitle: "Young Coders",
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
    exportBackup: "Εξαγωγή αντιγράφου",
    importBackup: "Εισαγωγή αντιγράφου",
    exportDisabledTitle: "Ενεργοποιείται αφού ολοκληρώσετε το τουρνουά",
    appHeaderTitle: "Robofestival",
    resetTournament: "Επαναφορά τουρνουά",
    resetYoungCoders: "Επαναφορά",
    resetYoungCodersConfirm: "Επαναφορά Young Coders; Αυτό θα διαγράψει τα αποθηκευμένα δεδομένα του σε αυτόν τον browser.",
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
    lockParticipants: "Κλείδωμα συμμετεχόντων",
    unlockParticipants: "Ξεκλείδωμα συμμετεχόντων",
    participantsLockedHint: "Επεξεργασία κλειδωμένη.",
    participantsUnlockedHint: "Προσθήκη/αφαίρεση επιτρέπεται.",
    participantsUnlockedWithLevelsHint:
      "Επεξεργασία ανοιχτή· επιτρέπονται και μετακινήσεις παικτών.",
    unlockParticipantsOpensRostersConfirm:
      "Έχουν ξεκινήσει επίπεδα. Το ξεκλείδωμα συμμετεχόντων θα επιτρέψει και τη μετακίνηση παικτών μεταξύ ομάδων. Συνέχεια;",
    teams: "Ομάδες",
    teamsHelp: "Δημιουργήστε ομάδες τυχαία, προσθέστε κενές ομάδες και μετά σύρετε παίκτες ανάμεσα στις ομάδες και στον πάγκο.",
    numberOfTeams: "Αριθμός ομάδων",
    createRandomly: "Τυχαία δημιουργία",
    createEmptyTeams: "Δημιουργία κενών ομάδων",
    reshuffle: "Ανακάτεμα",
    addEmptyTeam: "Προσθήκη κενής ομάδας",
    lockTeams: "Κλείδωμα ομάδων",
    unlockTeams: "Ξεκλείδωμα ομάδων",
    teamsLockedHint: "Η επεξεργασία ομάδων είναι κλειδωμένη.",
    teamsUnlockedHint: "Μπορείτε να επεξεργαστείτε ομάδες και να μετακινήσετε παίκτες.",
    teamsLockedWithLevelsHint:
      "Η επεξεργασία ομάδων είναι κλειδωμένη. Οι ομάδες κλειδώνουν αυτόματα όταν ξεκινούν τα επίπεδα· ξεκλειδώστε για να συνεχίσετε την επεξεργασία.",
    teamsUnlockedWithLevelsHint:
      "Η επεξεργασία ομάδων είναι ξεκλείδωτη. Μπορείτε να μετονομάζετε ομάδες, να μετακινείτε παίκτες και να αφαιρείτε ομάδες ενώ τρέχουν επίπεδα.",
    unlockTeamsWhileLevelsConfirm:
      "Έχουν ξεκινήσει επίπεδα. Το ξεκλείδωμα ομάδων θα επιτρέψει μετονομασία, μετακίνηση παικτών και αφαίρεση ομάδων (η αφαίρεση ομάδας διαγράφει τα υπάρχοντα επίπεδα). Συνέχεια;",
    collapseTeam: "Σύμπτυξη ομάδας",
    expandTeam: "Ανάπτυξη ομάδας",
    levelsScoring: "Επίπεδα + βαθμολογία",
    levelsHelp: "Όλες οι ομάδες παίζουν σε κάθε επίπεδο. Συμπληρώστε σκορ σε κάθε αγώνα για να ολοκληρωθεί το επίπεδο.",
    modeLabel: "Λειτουργία",
    modeClassic: "Κλασική",
    modeTables: "Με τραπέζια",
    modeLockedHint: "η λειτουργία κλειδώνει μετά το πρώτο επίπεδο",
    numberOfTables: "Αριθμός τραπεζιών",
    tableLabel: "Τραπέζι {n}",
    tableEmpty: "Άδειο",
    tableOnMatch: "Σε αγώνα",
    tableWaitingNext: "Αναμονή για επόμενο αγώνα",
    matchQueue: "Επόμενοι αγώνες",
    matchQueueEmpty: "Δεν υπάρχουν αγώνες σε αναμονή.",
    tableModeHelp: "Λειτουργία τραπεζιών: κάθε τραπέζι παίρνει έναν αγώνα. Συμπληρώστε και τα δύο σκορ και πατήστε ✓ για επιβεβαίωση και αποδέσμευση του τραπεζιού.",
    confirmScoreTitle: "Επιβεβαίωση σκορ και αποδέσμευση τραπεζιού",
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
    headerCoach: "Προπονητής",
    headerMembers: "Μέλη",
    headerLevel: "Επίπεδο",
    headerMatch: "Αγώνας",
    headerTeamA: "Ομάδα Α",
    headerScoreA: "Σκορ Α",
    headerTeamB: "Ομάδα Β",
    headerScoreB: "Σκορ Β",
    headerTable: "Τραπέζι",
    headerRank: "Θέση",
    headerTeam: "Ομάδα",
    headerTotalPoints: "Συνολικοί πόντοι",
    headerMatchesPlayed: "Αγώνες",
    bye: "ΡΕΠΟ",
    dragMatchupTitle: "Σύρετε πάνω σε άλλη ομάδα στο ίδιο επίπεδο για ανταλλαγή ζευγαριού (καθαρίζονται τα σκορ των δύο αγώνων).",
    dragMatchupLevel2Hint:
      "Από το 2ο επίπεδο και μετά: σύρετε ένα όνομα ομάδας πάνω σε άλλο στο ίδιο επίπεδο για ανταλλαγή. Καθαρίζονται τα σκορ των δύο αγώνων.",
    rematchPairingConfirm:
      "Ένα ή περισσότερα ζευγάρια έχουν ήδη συναντηθεί σε προηγούμενο επίπεδο:\n\n{list}\n\nΝα εφαρμοστεί η ανταλλαγή παρά ταύτα;",
    teamLabel: "Ομάδα {n}",
    coachLabel: "Προπονητής",
    coachPlaceholder: "Όνομα προπονητή",
    removeTeamConfirm: "Να αφαιρεθεί η ομάδα «{name}»;",
    removeTeamWithLevelsConfirm:
      "Να αφαιρεθεί η ομάδα «{name}»; Οι αγώνες της στα υπάρχοντα επίπεδα θα αφαιρεθούν και τα σχετικά σκορ θα χαθούν. Οι αγώνες των άλλων ομάδων παραμένουν.",
    notEnoughPlayingTeams: "χρειάζονται τουλάχιστον 2 ομάδες με παίκτες",
    removeLevelConfirm: "Να διαγραφεί αυτό το επίπεδο; Τα ζευγάρια και τυχόν σκορ θα χαθούν.",
    levelComplete: " · ολοκληρώθηκε",
    levelInProgress: " · σε εξέλιξη",
    themeAriaLightOn: "Το φωτεινό θέμα είναι ενεργό. Πατήστε για σκούρο.",
    themeAriaDarkOn: "Το σκούρο θέμα είναι ενεργό. Πατήστε για φωτεινό.",
    resetConfirm: "Επαναφορά τουρνουά; Αυτό θα διαγράψει τα αποθηκευμένα δεδομένα σε αυτόν τον browser.",
    clearParticipantsConfirm: "Να διαγραφούν όλοι οι συμμετέχοντες και οι ομάδες;",
    participantsLockedActionBlocked: "Οι συμμετέχοντες είναι κλειδωμένοι.",
    removeParticipantConfirm: "Να αφαιρεθεί ο/η {name} από τη λίστα; Θα αφαιρεθεί και από κάθε ομάδα.",
    removeParticipantWhileLockedConfirm:
      "Οι συμμετέχοντες είναι κλειδωμένοι. Να αφαιρεθεί ο/η {name} παρά ταύτα; Θα αφαιρεθεί και από κάθε ομάδα.",
    noParticipantsYet: "Δεν υπάρχουν συμμετέχοντες ακόμα.",
    inATeam: "σε ομάδα",
    notAssigned: "δεν έχει ανατεθεί",
    assignToTeam: "Ανάθεση σε ομάδα",
    noTeamOption: "— χωρίς ομάδα —",
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
    noMembers: "Δεν υπάρχουν μέλη — η ομάδα δεν θα μπει σε αγώνες.",
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
    backupOverwriteConfirm: "Να εισαχθεί το αντίγραφο και να αντικατασταθούν τα τρέχοντα δεδομένα του τουρνουά;",
    backupOverwriteConfirmYoung: "Να εισαχθεί το αντίγραφο και να αντικατασταθούν τα τρέχοντα δεδομένα του Young Coders;",
    backupImportSuccess: "Το αντίγραφο εισήχθη επιτυχώς.",
    backupImportInvalid: "Αυτό το αρχείο δεν είναι έγκυρο αντίγραφο Robofestival.",
    backupImportInvalidYoung: "Αυτό το αρχείο δεν είναι έγκυρο αντίγραφο Young Coders.",
    backupImportParseError: "Δεν ήταν δυνατή η ανάγνωση του αρχείου αντιγράφου. Επιλέξτε ένα έγκυρο JSON αντίγραφο.",
    backupImportNoFile: "Παρακαλώ επιλέξτε πρώτα αρχείο αντιγράφου.",
    channelsManagerTitle: "Κανάλια εγγραφής",
    manageChannels: "Διαχείριση καναλιών εγγραφής",
    hideChannels: "Απόκρυψη καναλιών εγγραφής",
    addChannel: "Προσθήκη καναλιού",
    removeChannel: "Αφαίρεση",
    channelShort: "Κωδικός",
    channelLabel: "Ονομασία καναλιού",
    channelColor: "Χρώμα",
    markNoShow: "Δήλωση απουσίας",
    markPresent: "Δήλωση παρουσίας",
    noShowBadge: "Απουσία",
    channelInUseAlert: "Δεν μπορείτε να αφαιρέσετε αυτό το κανάλι όσο υπάρχουν συμμετέχοντες σε αυτό.",
    headerChannel: "Κανάλι",
    headerNoShow: "Απουσία",
    cycleChannelHint: "κλικ για αλλαγή",
    cycleChannelAria: "Αλλαγή καναλιού εγγραφής",
    homePageTitle: "Robofestival",
    homeHeading: "Επιλέξτε εφαρμογή",
    homeLead: "Ανοίξτε το τουρνουά ή το Young Coders.",
    appsAria: "Εφαρμογές",
    openApp: "Άνοιγμα",
    openRobofestivalAria: "Άνοιγμα Robofestival",
    openYoungCodersAria: "Άνοιγμα Young Coders",
    home: "Αρχική",
    backHome: "Επιστροφή στην αρχική",
    youngCodersTitle: "Young Coders",
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

function defaultChannels() {
  return [
    { id: CHANNEL_REGISTRATION_FORM, short: "RF", label: "Registration Form", color: "#3b82f6" },
    { id: CHANNEL_IN_FESTIVAL, short: "IF", label: "In Festival", color: "#10b981" },
  ];
}

function normalizeChannelColor(color) {
  const s = String(color ?? "").trim();
  return /^#[0-9A-Fa-f]{6}$/.test(s) ? s : "#888888";
}

function migrateChannels(loadedChannels) {
  const defaults = defaultChannels();
  if (!Array.isArray(loadedChannels) || loadedChannels.length === 0) return [...defaults];
  const byId = new Map(defaults.map((c) => [c.id, { ...c }]));
  for (const raw of loadedChannels) {
    if (!raw || typeof raw.id !== "string") continue;
    byId.set(raw.id, {
      id: raw.id,
      short: String(raw.short ?? "?").trim().slice(0, 4) || "?",
      label: String(raw.label ?? raw.short ?? "?").trim() || "?",
      color: normalizeChannelColor(raw.color),
    });
  }
  for (const d of defaults) {
    if (!byId.has(d.id)) byId.set(d.id, { ...d });
  }
  return [...byId.values()];
}

function normalizeAppMode(value) {
  return value === APP_MODE_TABLES ? APP_MODE_TABLES : APP_MODE_CLASSIC;
}

function defaultState() {
  return {
    schemaVersion: APP_SCHEMA_VERSION,
    appMode: APP_MODE_CLASSIC,
    participants: [],
    teams: [],
    rounds: [],
    tournamentEnded: false,
    membershipLocked: false,
    participantsLocked: false,
    lastTeamCount: 4,
    tableCount: 3,
    tables: [],
    channels: defaultChannels(),
  };
}

function migrateLoadedState(loaded) {
  const base = defaultState();
  if (!loaded) return base;
  const channels = migrateChannels(loaded.channels);
  const defaultChannelId = channels[0]?.id ?? CHANNEL_REGISTRATION_FORM;
  const appMode = normalizeAppMode(loaded.appMode);
  const participants = (Array.isArray(loaded.participants) ? loaded.participants : []).map((p) => {
    const channelId =
      typeof p.channelId === "string" && channels.some((c) => c.id === p.channelId)
        ? p.channelId
        : defaultChannelId;
    return {
      ...p,
      channelId,
      noShow: Boolean(p.noShow),
    };
  });
  const rounds = (Array.isArray(loaded.rounds) ? loaded.rounds : []).map((round) => ({
    ...round,
    matches: (Array.isArray(round?.matches) ? round.matches : []).map((match) => ({
      ...match,
      tableId: typeof match?.tableId === "string" ? match.tableId : null,
      tableNumber: Number.isFinite(match?.tableNumber) ? match.tableNumber : null,
    })),
  }));
  return {
    ...base,
    ...loaded,
    schemaVersion: APP_SCHEMA_VERSION,
    appMode,
    participants,
    channels,
    teams: Array.isArray(loaded.teams) ? loaded.teams : [],
    rounds,
    tournamentEnded: Boolean(loaded.tournamentEnded),
    membershipLocked: Boolean(loaded.membershipLocked),
    participantsLocked: Boolean(loaded.participantsLocked),
    lastTeamCount: Number.isFinite(loaded.lastTeamCount) ? loaded.lastTeamCount : base.lastTeamCount,
    tableCount: clampInt(loaded.tableCount ?? base.tableCount, 1, 32),
    tables: Array.isArray(loaded.tables) ? loaded.tables : [],
  };
}

function adoptLoadedState(loaded) {
  const next = migrateLoadedState(loaded);
  if (next.rounds.length > 0) next.membershipLocked = true;
  return next;
}

const stores = {
  robofestival: { state: adoptLoadedState(loadState()) },
  youngCoders: { state: adoptLoadedState(window.YoungCodersStorage.loadState()) },
};
let activeStoreId = "robofestival";
let state = stores.robofestival.state;
let draggedMember = null;
/** { roundId, matchId, side } while dragging a matchup slot (levels 2+). */
let draggedMatchupSlot = null;
const collapsedByStore = {
  robofestival: new Set(),
  youngCoders: new Set(),
};
let collapsedTeamIds = collapsedByStore.robofestival;
reconcileTablesForActiveRound();

function replaceActiveState(next) {
  state = next;
  stores[activeStoreId].state = next;
}

function activeStorage() {
  return activeStoreId === "youngCoders" ? window.YoungCodersStorage : window.TournamentStorage;
}

function persist() {
  activeStorage().saveState(state);
}

function hasRounds() {
  return state.rounds.length > 0;
}

function isTableMode() {
  return state.appMode === APP_MODE_TABLES;
}

function setAppMode(nextMode) {
  if (hasRounds()) return;
  state.appMode = normalizeAppMode(nextMode);
  if (!isTableMode()) {
    clearTableAssignments();
  } else {
    state.tableCount = clampInt(state.tableCount ?? 3, 1, 32);
    ensureTables(state.tableCount);
  }
  persist();
  render();
}

function getActiveRound() {
  const last = state.rounds[state.rounds.length - 1] ?? null;
  if (!last || isRoundComplete(last) || state.tournamentEnded) return null;
  return last;
}

function isMatchComplete(match) {
  if (!match) return false;
  if (!match.teamBId) return true;
  return match.status === "complete";
}

function bothScoresEntered(match) {
  if (!match) return false;
  if (typeof match.scoreA !== "number") return false;
  if (match.teamBId && typeof match.scoreB !== "number") return false;
  return true;
}

function canConfirmMatch(match) {
  if (!match) return false;
  if (state.tournamentEnded) return false;
  if (!isTableMode()) return false;
  if (!match.tableId) return false;
  if (match.status === "complete") return false;
  return bothScoresEntered(match);
}

function matchTable(tableId) {
  return state.tables.find((table) => table.id === tableId) ?? null;
}

function clearTableAssignments() {
  state.tables = [];
  for (const round of state.rounds) {
    for (const match of round.matches ?? []) {
      match.tableId = null;
    }
  }
}

function ensureTables(count = state.tableCount) {
  const n = clampInt(count ?? 3, 1, 32);
  state.tableCount = n;
  const previous = Array.isArray(state.tables) ? state.tables : [];
  const next = [];
  for (let i = 1; i <= n; i++) {
    const existing = previous.find((table) => table.number === i);
    next.push({
      id: existing?.id ?? `table_${i}`,
      number: i,
      status: existing?.status === "in_match" ? "in_match" : "empty",
      currentMatchId: typeof existing?.currentMatchId === "string" ? existing.currentMatchId : null,
    });
  }
  state.tables = next;
}

function getNextQueuedMatch(round) {
  return (round?.matches ?? []).find((match) => !isMatchComplete(match) && !match.tableId) ?? null;
}

function assignMatchToTable(round, match, table) {
  if (!round || !match || !table || isMatchComplete(match)) return false;
  match.tableId = table.id;
  table.status = "in_match";
  table.currentMatchId = match.id;
  return true;
}

function fillEmptyTables(round = getActiveRound()) {
  if (!isTableMode() || !round) return;
  ensureTables(state.tableCount);
  for (const table of state.tables) {
    if (table.status === "in_match" && table.currentMatchId) continue;
    table.status = "empty";
    table.currentMatchId = null;
    const next = getNextQueuedMatch(round);
    if (!next) continue;
    assignMatchToTable(round, next, table);
  }
}

function releaseTableAndAssignNext(tableId) {
  if (!isTableMode()) return;
  const table = matchTable(tableId);
  if (!table) return;
  table.status = "empty";
  table.currentMatchId = null;
  fillEmptyTables(getActiveRound());
}

function reconcileTablesForActiveRound() {
  if (!isTableMode()) {
    clearTableAssignments();
    return;
  }
  ensureTables(state.tableCount);
  const activeRound = getActiveRound();
  const activeMatchIds = new Set((activeRound?.matches ?? []).map((match) => match.id));
  for (const round of state.rounds) {
    if (round !== activeRound) {
      for (const match of round.matches ?? []) match.tableId = null;
    }
  }
  for (const table of state.tables) {
    const currentMatch = (activeRound?.matches ?? []).find((match) => match.id === table.currentMatchId) ?? null;
    if (!activeRound || !currentMatch || isMatchComplete(currentMatch)) {
      table.status = "empty";
      table.currentMatchId = null;
      continue;
    }
    table.status = "in_match";
    currentMatch.tableId = table.id;
  }
  for (const match of activeRound?.matches ?? []) {
    if (match.tableId && (!matchTable(match.tableId) || isMatchComplete(match))) {
      match.tableId = null;
    }
  }
  for (const round of state.rounds) {
    for (const match of round.matches ?? []) {
      if (match.tableId && !activeMatchIds.has(match.id)) match.tableId = null;
    }
  }
  fillEmptyTables(activeRound);
}

function participantById(id) {
  return state.participants.find((p) => p.id === id) ?? null;
}

function channelById(id) {
  return state.channels.find((c) => c.id === id) ?? null;
}

function defaultChannelId() {
  return state.channels[0]?.id ?? CHANNEL_REGISTRATION_FORM;
}

function resolveChannelId(channelId) {
  if (typeof channelId === "string" && channelById(channelId)) return channelId;
  return defaultChannelId();
}

function channelTextColor(hex) {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.55 ? "#111111" : "#ffffff";
}

function channelDisplayLabel(channel) {
  if (!channel) return "";
  return `${channel.short} — ${channel.label}`;
}

function removeParticipantFromAllTeams(participantId) {
  for (const team of state.teams) {
    team.memberIds = (team.memberIds ?? []).filter((id) => id !== participantId);
  }
}

function setParticipantChannel(participantId, channelId) {
  const p = participantById(participantId);
  if (!p) return;
  const ch = channelById(channelId);
  if (!ch) return;
  p.channelId = ch.id;
  persist();
  render();
}

function cycleParticipantChannel(participantId) {
  const p = participantById(participantId);
  if (!p) return;
  if (!state.channels.length) return;
  const currentIdx = state.channels.findIndex((c) => c.id === p.channelId);
  const nextIdx = currentIdx === -1 ? 0 : (currentIdx + 1) % state.channels.length;
  p.channelId = state.channels[nextIdx].id;
  persist();
  render();
}

function toggleParticipantNoShow(participantId) {
  const p = participantById(participantId);
  if (!p) return;
  p.noShow = !p.noShow;
  if (p.noShow) removeParticipantFromAllTeams(participantId);
  persist();
  render();
}

function addChannel() {
  const n = state.channels.length + 1;
  const ch = {
    id: uid("channel"),
    short: `C${n}`,
    label: `Channel ${n}`,
    color: "#a855f7",
  };
  state.channels.push(ch);
  setChannelsManagerOpen(true);
  persist();
  render();
  requestAnimationFrame(() => {
    const input = els.channelsManager?.querySelector(`[data-channel-short="${cssEscape(ch.id)}"]`);
    input?.focus();
    input?.select();
  });
}

function updateChannel(channelId, patch) {
  const ch = channelById(channelId);
  if (!ch) return;
  if (patch.short !== undefined) ch.short = String(patch.short).trim().slice(0, 4) || "?";
  if (patch.label !== undefined) ch.label = String(patch.label).trim() || ch.short;
  if (patch.color !== undefined) ch.color = normalizeChannelColor(patch.color);
  persist();
  renderParticipants();
  renderChannelsManager();
}

function removeChannel(channelId) {
  if (state.channels.length <= 1) return;
  const inUse = state.participants.some((p) => p.channelId === channelId);
  if (inUse) {
    window.alert(t("channelInUseAlert"));
    return;
  }
  state.channels = state.channels.filter((c) => c.id !== channelId);
  persist();
  render();
}

function teamById(id) {
  return state.teams.find((t) => t.id === id) ?? null;
}

function teamHasMembers(team) {
  return Boolean(team) && (team.memberIds ?? []).length > 0;
}

function nonEmptyTeams() {
  return state.teams.filter((team) => teamHasMembers(team));
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

const BACKUP_APP_ID = "robofestival-tournament";
const BACKUP_SCHEMA_VERSION = 1;

function backupAppId() {
  return activeStoreId === "youngCoders" ? "young-coders" : BACKUP_APP_ID;
}

function buildBackupPayload() {
  return {
    app: backupAppId(),
    version: BACKUP_SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    state,
  };
}

function downloadTextFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function exportTournamentBackup() {
  const payload = buildBackupPayload();
  const text = `${JSON.stringify(payload, null, 2)}\n`;
  const d = new Date();
  const stamp = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const prefix = activeStoreId === "youngCoders" ? "young-coders-backup" : "robofestival-backup";
  downloadTextFile(`${prefix}-${stamp}.json`, text, "application/json");
}

function isValidBackupPayload(raw) {
  if (!raw || typeof raw !== "object") return false;
  if (raw.app !== backupAppId()) return false;
  if (!("state" in raw) || typeof raw.state !== "object" || raw.state === null) return false;
  const s = raw.state;
  return Array.isArray(s.participants) && Array.isArray(s.teams) && Array.isArray(s.rounds);
}

function importTournamentBackupFile(file) {
  if (!file) {
    window.alert(t("backupImportNoFile"));
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const raw = JSON.parse(String(reader.result ?? ""));
      if (!isValidBackupPayload(raw)) {
        window.alert(t(activeStoreId === "youngCoders" ? "backupImportInvalidYoung" : "backupImportInvalid"));
        return;
      }
      const ok = window.confirm(
        t(activeStoreId === "youngCoders" ? "backupOverwriteConfirmYoung" : "backupOverwriteConfirm"),
      );
      if (!ok) return;
      replaceActiveState(migrateLoadedState(raw.state));
      if (state.rounds.length > 0) {
        state.membershipLocked = true;
      }
      reconcileTablesForActiveRound();
      persist();
      render();
      window.alert(t("backupImportSuccess"));
    } catch {
      window.alert(t("backupImportParseError"));
    } finally {
      document.querySelectorAll("[data-import-backup-input]").forEach((input) => {
        input.value = "";
      });
    }
  };
  reader.onerror = () => {
    window.alert(t("backupImportParseError"));
    document.querySelectorAll("[data-import-backup-input]").forEach((input) => {
      input.value = "";
    });
  };
  reader.readAsText(file);
}

function exportTournamentToExcel() {
  if (typeof XLSX === "undefined" || !XLSX.utils || !XLSX.writeFile) {
    window.alert(t("excelLibMissing"));
    return;
  }
  const young = activeStoreId === "youngCoders";
  if (!young && !state.tournamentEnded) {
    window.alert(t("endTournamentFirst"));
    return;
  }
  if (!canExportTournamentData()) {
    window.alert(t("nothingToExport"));
    return;
  }

  const wb = XLSX.utils.book_new();

  const partRows = [[t("headerName"), t("headerAssignedTeam"), t("headerChannel"), t("headerNoShow")]];
  for (const p of state.participants) {
    const team = state.teams.find((tm) => (tm.memberIds ?? []).includes(p.id));
    const ch = channelById(p.channelId);
    partRows.push([
      participantDisplayName(p),
      team ? teamDisplayName(team) : "",
      ch ? channelDisplayLabel(ch) : "",
      p.noShow ? "Yes" : "No",
    ]);
  }
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(partRows), t("sheetNameParticipants"));

  const teamRows = [[t("headerTeamName"), t("headerCoach"), t("headerMembers")]];
  for (const team of state.teams) {
    const names = (team.memberIds ?? [])
      .map((id) => participantById(id))
      .filter(Boolean)
      .map((p) => participantDisplayName(p))
      .join("; ");
    teamRows.push([teamDisplayName(team), String(team.coachName ?? ""), names]);
  }
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(teamRows), t("sheetNameTeams"));

  const scoreRows = [[t("headerLevel"), t("headerMatch"), t("headerTable"), t("headerTeamA"), t("headerScoreA"), t("headerTeamB"), t("headerScoreB")]];
  state.rounds.forEach((r, ri) => {
    (r.matches ?? []).forEach((m, mi) => {
      const a = teamById(m.teamAId);
      const b = m.teamBId ? teamById(m.teamBId) : null;
      const tableNumber = m.tableNumber ?? state.tables.find((table) => table.id === m.tableId)?.number ?? "";
      scoreRows.push([
        ri + 1,
        mi + 1,
        tableNumber,
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
  const prefix = young ? "young-coders-export" : "tournament-export";
  XLSX.writeFile(wb, `${prefix}-${stamp}.xlsx`);
}

function isRoundComplete(round) {
  return (round.matches ?? []).every((m) => isMatchComplete(m));
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

/** Pair keys for completed levels before `beforeRoundIndex` (0-based round index in `state.rounds`). */
function getHistoricalPairingsSetBeforeRound(beforeRoundIndex) {
  const set = new Set();
  for (let i = 0; i < beforeRoundIndex && i < state.rounds.length; i++) {
    for (const m of state.rounds[i].matches ?? []) {
      if (m.teamAId && m.teamBId) set.add(pairKey(m.teamAId, m.teamBId));
    }
  }
  return set;
}

function simulateMatchupSwapResult(roundId, matchId1, side1, matchId2, side2) {
  if (matchId1 === matchId2 && side1 === side2) return null;
  const round = state.rounds.find((r) => r.id === roundId);
  if (!round) return null;
  const m1 = (round.matches ?? []).find((m) => m.id === matchId1);
  const m2 = (round.matches ?? []).find((m) => m.id === matchId2);
  if (!m1 || !m2) return null;
  const c1 = { teamAId: m1.teamAId, teamBId: m1.teamBId };
  const c2 = { teamAId: m2.teamAId, teamBId: m2.teamBId };
  const id1 = getMatchTeamIdOnSide(c1, side1);
  const id2 = getMatchTeamIdOnSide(c2, side2);
  if (!id1 || !id2) return null;
  setMatchTeamIdOnSide(c1, side1, id2);
  setMatchTeamIdOnSide(c2, side2, id1);
  return { c1, c2 };
}

function findRematchesAfterSwap(beforeRoundIndex, c1, c2) {
  const hist = getHistoricalPairingsSetBeforeRound(beforeRoundIndex);
  const seen = new Set();
  const out = [];
  for (const c of [c1, c2]) {
    if (!c.teamAId || !c.teamBId) continue;
    const pk = pairKey(c.teamAId, c.teamBId);
    if (hist.has(pk) && !seen.has(pk)) {
      seen.add(pk);
      out.push({ teamAId: c.teamAId, teamBId: c.teamBId });
    }
  }
  return out;
}

function formatRematchLines(rows) {
  return rows
    .map(({ teamAId, teamBId }) => {
      const a = teamById(teamAId);
      const b = teamById(teamBId);
      return `${teamDisplayName(a)} vs ${teamDisplayName(b)}`;
    })
    .join("\n");
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
      tableId: null,
      tableNumber: null,
    });
  }
  return matches;
}

function lockMembershipIfNeeded() {
  if (!state.membershipLocked && hasRounds()) {
    state.membershipLocked = true;
  }
}

function toggleTeamsLock() {
  const nextLocked = !state.membershipLocked;
  if (!nextLocked && hasRounds()) {
    if (!window.confirm(t("unlockTeamsWhileLevelsConfirm"))) return;
  }
  state.membershipLocked = nextLocked;
  persist();
  render();
}

function canEditParticipants() {
  return !state.participantsLocked;
}

function toggleParticipantsLock() {
  const nextLocked = !state.participantsLocked;
  if (!nextLocked && hasRounds()) {
    if (!window.confirm(t("unlockParticipantsOpensRostersConfirm"))) return;
    state.membershipLocked = false;
  } else if (nextLocked && hasRounds()) {
    state.membershipLocked = true;
  }
  state.participantsLocked = nextLocked;
  persist();
  render();
}

function addEmptyTeam() {
  if (state.membershipLocked) return;
  const n = state.teams.length + 1;
  state.teams.push({
    id: uid("team"),
    name: t("teamLabel", { n }),
    coachName: "",
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
    coachName: "",
    memberIds: [],
  }));
  state.teams = teams;
  state.rounds = [];
  clearTableAssignments();
  state.tournamentEnded = false;
  state.membershipLocked = false;
  state.lastTeamCount = n;
  persist();
  render();
}

function createTeamsRandom(teamCount) {
  const n = clampInt(teamCount, 2, 128);
  const participantIds = state.participants.filter((p) => !p.noShow).map((p) => p.id);
  shuffleInPlace(participantIds);

  const teams = Array.from({ length: n }, (_, i) => ({
    id: uid("team"),
    name: t("teamLabel", { n: i + 1 }),
    coachName: "",
    memberIds: [],
  }));

  // Even distribution
  for (let i = 0; i < participantIds.length; i++) {
    teams[i % n].memberIds.push(participantIds[i]);
  }

  state.teams = teams;
  state.rounds = [];
  clearTableAssignments();
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
  const p = participantById(participantId);
  if (p?.noShow) return;
  const to = teamById(toTeamId);
  if (!to || !p) return;
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
  const p = participantById(participantId);
  if (p?.noShow && toTeamId !== UNASSIGNED) return;
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

function removeTeam(teamId) {
  const team = teamById(teamId);
  if (!team) return;
  const name = teamDisplayName(team);
  const teamInAnyRound = state.rounds.some((r) =>
    (r.matches ?? []).some((m) => m.teamAId === teamId || m.teamBId === teamId),
  );
  const msg = teamInAnyRound ? t("removeTeamWithLevelsConfirm", { name }) : t("removeTeamConfirm", { name });
  if (!window.confirm(msg)) return;
  state.teams = state.teams.filter((x) => x.id !== teamId);
  if (teamInAnyRound) {
    for (const round of state.rounds) {
      round.matches = (round.matches ?? []).filter(
        (m) => m.teamAId !== teamId && m.teamBId !== teamId,
      );
    }
    state.rounds = state.rounds.filter((r) => (r.matches ?? []).length > 0);
  }
  if (!hasRounds()) {
    state.membershipLocked = false;
    state.tournamentEnded = false;
  }
  reconcileTablesForActiveRound();
  state.lastTeamCount = Math.max(2, state.teams.length);
  collapsedTeamIds.delete(teamId);
  persist();
  render();
}

function addParticipant(name, channelId) {
  if (!canEditParticipants()) return;
  const cleaned = normalizeName(name);
  if (!cleaned) return;
  state.participants.push({
    id: uid("p"),
    name: cleaned,
    channelId: resolveChannelId(channelId),
    noShow: false,
  });
  persist();
  render();
}

function removeParticipant(participantId) {
  const p = participantById(participantId);
  if (!p) return;
  const name = participantDisplayName(p);
  const msg = canEditParticipants()
    ? t("removeParticipantConfirm", { name })
    : t("removeParticipantWhileLockedConfirm", { name });
  if (!window.confirm(msg)) return;
  state.participants = state.participants.filter((x) => x.id !== participantId);
  for (const team of state.teams) {
    team.memberIds = (team.memberIds ?? []).filter((id) => id !== participantId);
  }
  persist();
  render();
}

function clearParticipants() {
  if (!canEditParticipants()) return;
  state.participants = [];
  state.teams = [];
  state.rounds = [];
  clearTableAssignments();
  state.tournamentEnded = false;
  state.membershipLocked = false;
  persist();
  render();
}

function updateTeamName(teamId, name) {
  const team = teamById(teamId);
  if (!team) return;
  team.name = String(name ?? "");
  persist();
  renderLeaderboardOnly();
}

function updateTeamCoachName(teamId, coachName) {
  const team = teamById(teamId);
  if (!team) return;
  team.coachName = String(coachName ?? "");
  persist();
  renderLeaderboardOnly();
}

function canCreateNextRound() {
  if (state.tournamentEnded) return false;
  if (nonEmptyTeams().length < 2) return false;
  const last = state.rounds[state.rounds.length - 1] ?? null;
  if (!last) return true;
  return isRoundComplete(last);
}

function createNextRound() {
  if (!canCreateNextRound()) return;
  const teamIds = nonEmptyTeams().map((t) => t.id);
  const matches = generateRandomRoundMatches(teamIds);
  const round = {
    id: uid("round"),
    createdAt: Date.now(),
    matches,
  };
  state.rounds.push(round);
  lockMembershipIfNeeded();
  if (isTableMode()) {
    ensureTables(els.tableCountInput?.value ?? state.tableCount);
    fillEmptyTables(round);
  } else {
    clearTableAssignments();
  }
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
  reconcileTablesForActiveRound();
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

  if (!isTableMode()) {
    match.status =
      match.teamBId && typeof match.scoreA === "number" && typeof match.scoreB === "number"
        ? "complete"
        : "pending";
  }
  persist();
  syncMatchScoreInputs(matchId, side, rawValue);
  updateMatchConfirmDisabled(matchId);
  renderLeaderboardOnly();
  renderControlsOnly();
  updateAllLevelStatusLabels();
}

function confirmMatchScore(roundId, matchId) {
  if (state.tournamentEnded) return;
  if (!isTableMode()) return;
  const round = state.rounds.find((r) => r.id === roundId);
  if (!round) return;
  const match = (round.matches ?? []).find((m) => m.id === matchId);
  if (!match) return;
  if (!canConfirmMatch(match)) return;
  const tableId = match.tableId;
  match.tableNumber = matchTable(tableId)?.number ?? match.tableNumber ?? null;
  match.tableId = null;
  match.status = "complete";
  releaseTableAndAssignNext(tableId);
  persist();
  render();
}

function syncMatchScoreInputs(matchId, side, rawValue) {
  if (!matchId || !side) return;
  const value = String(rawValue ?? "");
  document
    .querySelectorAll(`input[data-action="score${side}"][data-match="${cssEscape(matchId)}"]`)
    .forEach((input) => {
      if (input.value !== value) input.value = value;
    });
}

function updateMatchConfirmDisabled(matchId) {
  if (!matchId) return;
  const round = state.rounds.find((r) => (r.matches ?? []).some((m) => m.id === matchId));
  const match = (round?.matches ?? []).find((m) => m.id === matchId) ?? null;
  const disabled = !canConfirmMatch(match);
  document
    .querySelectorAll(`button[data-action="confirmMatch"][data-match="${cssEscape(matchId)}"]`)
    .forEach((btn) => {
      btn.disabled = disabled;
    });
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

function collapseStorageKey(sectionId) {
  const base = sectionId === "card-participants" ? COLLAPSE_PARTICIPANTS_KEY : COLLAPSE_TEAMS_KEY;
  return `${activeStoreId}:${base}`;
}

function readRosterCollapsed(sectionId) {
  const base = sectionId === "card-participants" ? COLLAPSE_PARTICIPANTS_KEY : COLLAPSE_TEAMS_KEY;
  try {
    const scoped = sessionStorage.getItem(collapseStorageKey(sectionId));
    if (scoped === "1" || scoped === "0") return scoped === "1";
    if (activeStoreId === "robofestival") return sessionStorage.getItem(base) === "1";
  } catch {
    /* ignore */
  }
  return false;
}

function setRosterSectionCollapsed(sectionId, btnId, collapsed) {
  const section = document.getElementById(sectionId);
  const btn = document.getElementById(btnId);
  if (!section || !btn) return;
  section.classList.toggle("card--collapsed", collapsed);
  btn.setAttribute("aria-expanded", collapsed ? "false" : "true");
  btn.textContent = collapsed ? t("expand") : t("collapse");
  try {
    sessionStorage.setItem(collapseStorageKey(sectionId), collapsed ? "1" : "0");
  } catch {
    /* ignore */
  }
}

function applyRosterCollapseFromSession() {
  const pairs = [
    { section: "card-participants", btn: "collapseParticipantsBtn" },
    { section: "card-teams", btn: "collapseTeamsBtn" },
  ];
  for (const p of pairs) {
    setRosterSectionCollapsed(p.section, p.btn, readRosterCollapsed(p.section));
  }
}

function initCollapsibleRosterCards() {
  const pairs = [
    { section: "card-participants", btn: "collapseParticipantsBtn" },
    { section: "card-teams", btn: "collapseTeamsBtn" },
  ];
  applyRosterCollapseFromSession();
  for (const p of pairs) {
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
  const light = document.documentElement.getAttribute("data-theme") === "light";
  document.querySelectorAll(".themeToggle__switch").forEach((btn) => {
    btn.setAttribute("aria-checked", light ? "true" : "false");
    btn.setAttribute("aria-label", light ? t("themeAriaLightOn") : t("themeAriaDarkOn"));
  });
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
  document.querySelectorAll(".themeToggle__switch").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      applyTheme(cur === "light" ? "dark" : "light");
    });
  });
}

function syncLanguageToggleButton() {
  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.textContent = t("langButton");
    btn.setAttribute("aria-label", t("langAria"));
  });
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage === "el" ? "el" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (key) el.setAttribute("aria-label", t(key));
  });
  document.querySelectorAll("[data-home-btn]").forEach((btn) => {
    btn.setAttribute("aria-label", t("backHome"));
  });

  const appTitle = document.querySelector("#appRobofestival .appHeader__title h1");
  if (appTitle) appTitle.textContent = t("appHeaderTitle");

  document.querySelectorAll(".themeToggle").forEach((themeWrap) => {
    themeWrap.setAttribute("title", `${t("light")} / ${t("dark")}`);
  });
  document.querySelectorAll(".themeToggle__label--dark").forEach((darkLabel) => {
    darkLabel.textContent = t("dark");
  });
  document.querySelectorAll(".themeToggle__label--light").forEach((lightLabel) => {
    lightLabel.textContent = t("light");
  });

  if (els.exportExcelBtn) els.exportExcelBtn.textContent = t("exportExcel");
  if (els.exportBackupBtn) els.exportBackupBtn.textContent = t("exportBackup");
  if (els.importBackupBtn) els.importBackupBtn.textContent = t("importBackup");
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
  if (participantsTitle) {
    participantsTitle.innerHTML = `${escapeHtml(t("participants"))} <span id="participantsCountBadge" class="countBadge">${state.participants.length}</span>`;
  }
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
  if (els.toggleTeamsLockBtn) els.toggleTeamsLockBtn.textContent = state.membershipLocked ? t("unlockTeams") : t("lockTeams");

  const levelsTitle = document.getElementById("levelsTitle");
  if (levelsTitle) levelsTitle.textContent = t("levelsScoring");
  const levelsHelp = document.querySelector("#panel-levels .card__header .muted");
  if (levelsHelp) levelsHelp.textContent = t("levelsHelp");
  const appModeLabel = document.getElementById("appModeLabel");
  if (appModeLabel) appModeLabel.textContent = t("modeLabel");
  if (els.appModeSelect) {
    const classicOption = els.appModeSelect.querySelector('option[value="classic"]');
    const tablesOption = els.appModeSelect.querySelector('option[value="tables"]');
    if (classicOption) classicOption.textContent = t("modeClassic");
    if (tablesOption) tablesOption.textContent = t("modeTables");
  }
  const tableCountLabel = document.getElementById("tableCountLabel");
  if (tableCountLabel) tableCountLabel.textContent = t("numberOfTables");
  if (els.createLevelBtn) els.createLevelBtn.textContent = t("createNextLevel");
  if (els.endTournamentBtn) els.endTournamentBtn.textContent = t("endTournament");
  if (els.resumeTournamentBtn) els.resumeTournamentBtn.textContent = t("resumeAddLevels");

  const leaderboardTitle = document.getElementById("leaderboardTitle");
  if (leaderboardTitle) leaderboardTitle.textContent = t("tabLeaderboard");
  const leaderboardHelp = document.querySelector("#panel-leaderboard .card__header .muted");
  if (leaderboardHelp) leaderboardHelp.textContent = t("leaderboardHelp");

  document.querySelectorAll("footer small").forEach((footer) => {
    footer.textContent = t("savedLocally");
  });
  const topBtn = document.getElementById("backToTopBtn");
  if (topBtn) {
    topBtn.textContent = t("top");
    topBtn.setAttribute("aria-label", t("backToTop"));
    topBtn.setAttribute("title", t("backToTop"));
  }

  syncThemeToggleButton();
  syncLanguageToggleButton();
  applyViewTitle();
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
  currentAppView = readSavedAppView();
  applyStaticTranslations();
  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(currentLanguage === "en" ? "el" : "en");
      render();
    });
  });
}

const APP_VIEW_KEY = "activeAppView";
let currentAppView = "home";

function readSavedAppView() {
  try {
    const saved = sessionStorage.getItem(APP_VIEW_KEY);
    if (saved === "robofestival" || saved === "young-coders" || saved === "home") return saved;
  } catch {
    /* ignore */
  }
  return "home";
}

function applyViewTitle() {
  if (currentAppView === "robofestival") document.title = t("pageTitle");
  else if (currentAppView === "young-coders") document.title = t("youngCodersTitle");
  else document.title = t("homePageTitle");
}

const rosterDrafts = {
  robofestival: null,
  youngCoders: null,
};
let chromeReady = false;

function readStoreFlag(storeId, base) {
  try {
    const scoped = sessionStorage.getItem(`${storeId}:${base}`);
    if (scoped === "1" || scoped === "0") return scoped === "1";
    if (storeId === "robofestival") return sessionStorage.getItem(base) === "1";
  } catch {
    /* ignore */
  }
  return false;
}

const channelsOpenByStore = {
  robofestival: readStoreFlag("robofestival", "channelsManagerOpen"),
  youngCoders: readStoreFlag("youngCoders", "channelsManagerOpen"),
};

function placeRoster(target) {
  const panel = document.getElementById("panel-roster");
  const slot = document.getElementById("rosterSlot");
  const youngMain = document.getElementById("youngCodersMain");
  if (!panel || !slot || !youngMain) return;
  if (target === "young-coders") {
    youngMain.appendChild(panel);
    panel.removeAttribute("hidden");
    return;
  }
  slot.appendChild(panel);
  const rosterTabActive = document.getElementById("tab-roster")?.classList.contains("tab--active");
  if (rosterTabActive) panel.removeAttribute("hidden");
  else panel.setAttribute("hidden", "");
}

function stashRosterChrome() {
  if (els.channelsManager) {
    channelsOpenByStore[activeStoreId] = els.channelsManager.dataset.open === "1";
  }
  rosterDrafts[activeStoreId] = {
    name: els.participantNameInput?.value ?? "",
    bulk: els.bulkParticipantsInput?.value ?? "",
    teamCount: els.teamCountInput?.value ?? String(state.lastTeamCount ?? 4),
  };
}

function restoreRosterChrome() {
  const open = Boolean(channelsOpenByStore[activeStoreId]);
  if (els.channelsManager) els.channelsManager.dataset.open = open ? "1" : "0";
  const draft = rosterDrafts[activeStoreId];
  if (els.participantNameInput) els.participantNameInput.value = draft?.name ?? "";
  if (els.bulkParticipantsInput) els.bulkParticipantsInput.value = draft?.bulk ?? "";
  if (els.teamCountInput) els.teamCountInput.value = draft?.teamCount ?? String(state.lastTeamCount ?? 4);
  applyRosterCollapseFromSession();
}

function activateStore(id) {
  if (id !== activeStoreId) {
    activeStoreId = id;
    state = stores[id].state;
    collapsedTeamIds = collapsedByStore[id];
    draggedMember = null;
    draggedMatchupSlot = null;
  }
  restoreRosterChrome();
  render();
}

function showApp(view, options = {}) {
  const next = view === "robofestival" || view === "young-coders" ? view : "home";
  if (chromeReady && (currentAppView === "robofestival" || currentAppView === "young-coders")) {
    stashRosterChrome();
    persist();
  }
  currentAppView = next;
  const home = document.getElementById("homeScreen");
  const robo = document.getElementById("appRobofestival");
  const young = document.getElementById("appYoungCoders");
  if (home) home.hidden = currentAppView !== "home";
  if (robo) robo.hidden = currentAppView !== "robofestival";
  if (young) young.hidden = currentAppView !== "young-coders";
  try {
    sessionStorage.setItem(APP_VIEW_KEY, currentAppView);
  } catch {
    /* ignore */
  }
  if (currentAppView === "young-coders") {
    document.documentElement.setAttribute("data-app", "young-coders");
    placeRoster("young-coders");
    activateStore("youngCoders");
  } else if (currentAppView === "robofestival") {
    document.documentElement.removeAttribute("data-app");
    placeRoster("robofestival");
    activateStore("robofestival");
  } else {
    document.documentElement.removeAttribute("data-app");
  }
  chromeReady = true;
  applyViewTitle();
  window.scrollTo(0, 0);
  if (!options.focus) return;
  const focusTarget =
    currentAppView === "home"
      ? document.querySelector("#homeScreen [data-open-app]")
      : document.querySelector(`#${currentAppView === "robofestival" ? "appRobofestival" : "appYoungCoders"} [data-home-btn]`);
  focusTarget?.focus();
}

function initLauncher() {
  document.querySelectorAll("[data-open-app]").forEach((btn) => {
    btn.addEventListener("click", () => showApp(btn.getAttribute("data-open-app"), { focus: true }));
  });
  document.querySelectorAll("[data-home-btn]").forEach((btn) => {
    btn.addEventListener("click", () => showApp("home", { focus: true }));
  });
  showApp(readSavedAppView());
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
  toggleParticipantsLockBtn: document.getElementById("toggleParticipantsLockBtn"),
  toggleChannelsManagerBtn: document.getElementById("toggleChannelsManagerBtn"),
  participantsLockHint: document.getElementById("participantsLockHint"),
  channelsManager: document.getElementById("channelsManager"),

  teamCountInput: document.getElementById("teamCountInput"),
  createTeamsBtn: document.getElementById("createTeamsBtn"),
  createEmptyTeamsBtn: document.getElementById("createEmptyTeamsBtn"),
  reshuffleTeamsBtn: document.getElementById("reshuffleTeamsBtn"),
  addEmptyTeamBtn: document.getElementById("addEmptyTeamBtn"),
  toggleTeamsLockBtn: document.getElementById("toggleTeamsLockBtn"),
  teamLockHint: document.getElementById("teamLockHint"),
  teamsArea: document.getElementById("teamsArea"),

  createLevelBtn: document.getElementById("createLevelBtn"),
  appModeSelect: document.getElementById("appModeSelect"),
  tableCountInput: document.getElementById("tableCountInput"),
  endTournamentBtn: document.getElementById("endTournamentBtn"),
  resumeTournamentBtn: document.getElementById("resumeTournamentBtn"),
  levelStatus: document.getElementById("levelStatus"),
  tablesArea: document.getElementById("tablesArea"),
  levelsArea: document.getElementById("levelsArea"),

  leaderboardArea: document.getElementById("leaderboardArea"),

  exportExcelBtn: document.getElementById("exportExcelBtn"),
  exportBackupBtn: document.getElementById("exportBackupBtn"),
  importBackupBtn: document.getElementById("importBackupBtn"),
  importBackupInput: document.getElementById("importBackupInput"),
};

function resetActiveApp() {
  const young = activeStoreId === "youngCoders";
  const ok = window.confirm(t(young ? "resetYoungCodersConfirm" : "resetConfirm"));
  if (!ok) return;
  activeStorage().clearState();
  replaceActiveState(defaultState());
  collapsedByStore[activeStoreId].clear();
  rosterDrafts[activeStoreId] = { name: "", bulk: "", teamCount: "4" };
  channelsOpenByStore[activeStoreId] = false;
  try {
    if (!young) {
      sessionStorage.removeItem(ACTIVE_TAB_KEY);
      sessionStorage.removeItem(COLLAPSE_PARTICIPANTS_KEY);
      sessionStorage.removeItem(COLLAPSE_TEAMS_KEY);
    }
    sessionStorage.removeItem(`${activeStoreId}:${COLLAPSE_PARTICIPANTS_KEY}`);
    sessionStorage.removeItem(`${activeStoreId}:${COLLAPSE_TEAMS_KEY}`);
    sessionStorage.removeItem(`${activeStoreId}:channelsManagerOpen`);
  } catch {
    /* ignore */
  }
  if (!young) setActiveTab(0);
  if (els.channelsManager) els.channelsManager.dataset.open = "0";
  if (els.participantNameInput) els.participantNameInput.value = "";
  if (els.bulkParticipantsInput) els.bulkParticipantsInput.value = "";
  if (els.teamCountInput) els.teamCountInput.value = "4";
  setRosterSectionCollapsed("card-participants", "collapseParticipantsBtn", false);
  setRosterSectionCollapsed("card-teams", "collapseTeamsBtn", false);
  persist();
  render();
}

function wireEvents() {
  document.querySelectorAll("[data-reset-app]").forEach((btn) => {
    btn.addEventListener("click", () => resetActiveApp());
  });

  els.addParticipantForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!canEditParticipants()) {
      window.alert(t("participantsLockedActionBlocked"));
      return;
    }
    addParticipant(els.participantNameInput.value, CHANNEL_IN_FESTIVAL);
    els.participantNameInput.value = "";
    els.participantNameInput.focus();
  });

  els.bulkAddBtn.addEventListener("click", () => {
    if (!canEditParticipants()) {
      window.alert(t("participantsLockedActionBlocked"));
      return;
    }
    const lines = String(els.bulkParticipantsInput.value ?? "")
      .split("\n")
      .map((l) => normalizeName(l))
      .filter(Boolean);
    if (!lines.length) return;
    for (const line of lines) addParticipant(line, CHANNEL_REGISTRATION_FORM);
    els.bulkParticipantsInput.value = "";
  });

  els.clearParticipantsBtn.addEventListener("click", () => {
    if (!canEditParticipants()) {
      window.alert(t("participantsLockedActionBlocked"));
      return;
    }
    const ok = window.confirm(t("clearParticipantsConfirm"));
    if (!ok) return;
    clearParticipants();
  });
  els.toggleParticipantsLockBtn?.addEventListener("click", () => toggleParticipantsLock());
  if (!els.toggleChannelsManagerBtn) {
    els.toggleChannelsManagerBtn = document.getElementById("toggleChannelsManagerBtn");
  }
  if (!els.channelsManager) {
    els.channelsManager = document.getElementById("channelsManager");
  }
  els.toggleChannelsManagerBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    try {
      setChannelsManagerOpen(!isChannelsManagerOpen());
      renderChannelsManager();
    } catch (err) {
      console.error("Failed to toggle channels manager", err);
    }
  });

  els.teamCountInput.value = String(state.lastTeamCount ?? 4);
  els.createTeamsBtn.addEventListener("click", () => createTeamsRandom(els.teamCountInput.value));
  els.createEmptyTeamsBtn.addEventListener("click", () => createEmptyTeamsFromCount(els.teamCountInput.value));
  els.reshuffleTeamsBtn.addEventListener("click", () => createTeamsRandom(els.teamCountInput.value));
  els.addEmptyTeamBtn.addEventListener("click", () => addEmptyTeam());
  els.toggleTeamsLockBtn?.addEventListener("click", () => toggleTeamsLock());

  if (els.appModeSelect) {
    els.appModeSelect.value = state.appMode;
    els.appModeSelect.addEventListener("change", () => setAppMode(els.appModeSelect.value));
  }
  if (els.tableCountInput) {
    els.tableCountInput.value = String(state.tableCount ?? 3);
    els.tableCountInput.addEventListener("input", () => {
      if (!isTableMode() || getActiveRound()) return;
      state.tableCount = clampInt(els.tableCountInput.value, 1, 32);
      ensureTables(state.tableCount);
      persist();
      renderControlsOnly();
    });
  }
  els.createLevelBtn.addEventListener("click", () => createNextRound());
  els.endTournamentBtn.addEventListener("click", () => setTournamentEnded(true));
  els.resumeTournamentBtn.addEventListener("click", () => setTournamentEnded(false));

  initTabs();
  initCollapsibleRosterCards();
  initBackToTop();
  initTheme();
  initLanguage();
  initLauncher();

  els.exportExcelBtn?.addEventListener("click", () => exportTournamentToExcel());
  document.querySelectorAll("[data-export-excel]").forEach((btn) => {
    btn.addEventListener("click", () => exportTournamentToExcel());
  });
  document.querySelectorAll("[data-export-backup]").forEach((btn) => {
    btn.addEventListener("click", () => exportTournamentBackup());
  });
  document.querySelectorAll("[data-import-backup]").forEach((btn) => {
    const input = btn.parentElement?.querySelector("[data-import-backup-input]");
    btn.addEventListener("click", () => input?.click());
    input?.addEventListener("change", () => {
      importTournamentBackupFile(input.files?.[0] ?? null);
    });
  });

}

const CHANNELS_MANAGER_OPEN_KEY = "channelsManagerOpen";

function isChannelsManagerOpen() {
  if (!els.channelsManager) return false;
  if (els.channelsManager.dataset.open === "1") return true;
  if (els.channelsManager.dataset.open === "0") return false;
  try {
    return sessionStorage.getItem(CHANNELS_MANAGER_OPEN_KEY) === "1";
  } catch {
    return false;
  }
}

function setChannelsManagerOpen(open) {
  if (!els.channelsManager) els.channelsManager = document.getElementById("channelsManager");
  if (!els.channelsManager) return;
  els.channelsManager.dataset.open = open ? "1" : "0";
  channelsOpenByStore[activeStoreId] = open;
  try {
    sessionStorage.setItem(`${activeStoreId}:${CHANNELS_MANAGER_OPEN_KEY}`, open ? "1" : "0");
  } catch {
    /* ignore */
  }
}

function renderChannelsManager() {
  if (!els.channelsManager) els.channelsManager = document.getElementById("channelsManager");
  if (!els.toggleChannelsManagerBtn) {
    els.toggleChannelsManagerBtn = document.getElementById("toggleChannelsManagerBtn");
  }
  if (!els.channelsManager) return;
  const open = isChannelsManagerOpen();

  if (els.toggleChannelsManagerBtn) {
    els.toggleChannelsManagerBtn.textContent = open ? t("hideChannels") : t("manageChannels");
    els.toggleChannelsManagerBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (!open) {
    els.channelsManager.hidden = true;
    els.channelsManager.removeAttribute("style");
    els.channelsManager.innerHTML = "";
    return;
  }
  els.channelsManager.hidden = false;
  els.channelsManager.removeAttribute("style");

  const rows = state.channels
    .map(
      (ch) => `
      <div class="channelRow" data-channel-id="${escapeAttr(ch.id)}">
        <label class="channelRow__colorLabel">
          <span class="sr-only">${escapeHtml(t("channelColor"))}</span>
          <input type="color" class="channelRow__color" value="${escapeAttr(ch.color)}" data-action="channelColor" data-id="${escapeAttr(ch.id)}" />
        </label>
        <label class="channelRow__field">
          <span class="channelRow__fieldLabel">${escapeHtml(t("channelShort"))}</span>
          <input class="input input--small channelRow__short" type="text" maxlength="4" value="${escapeAttr(ch.short)}" data-action="channelShort" data-channel-short="${escapeAttr(ch.id)}" data-id="${escapeAttr(ch.id)}" />
        </label>
        <label class="channelRow__field channelRow__field--grow">
          <span class="channelRow__fieldLabel">${escapeHtml(t("channelLabel"))}</span>
          <input class="input input--small" type="text" value="${escapeAttr(ch.label)}" data-action="channelLabel" data-id="${escapeAttr(ch.id)}" />
        </label>
        <button class="miniBtn" type="button" data-action="removeChannel" data-id="${escapeAttr(ch.id)}" ${state.channels.length <= 1 ? "disabled" : ""}>${t("removeChannel")}</button>
      </div>
    `,
    )
    .join("");

  els.channelsManager.innerHTML = `
    <div class="channelsManager__head">
      <span class="channelsManager__title">${escapeHtml(t("channelsManagerTitle"))}</span>
    </div>
    <div class="channelsManager__body">
      <div class="channelsManager__rows">${rows}</div>
      <button type="button" class="btn btn--ghost" data-action="addChannel">${t("addChannel")}</button>
    </div>
  `;

  els.channelsManager.querySelector('[data-action="addChannel"]')?.addEventListener("click", () => addChannel());

  els.channelsManager.querySelectorAll('[data-action="channelShort"]').forEach((input) => {
    input.addEventListener("input", () => updateChannel(input.getAttribute("data-id"), { short: input.value }));
  });
  els.channelsManager.querySelectorAll('[data-action="channelLabel"]').forEach((input) => {
    input.addEventListener("input", () => updateChannel(input.getAttribute("data-id"), { label: input.value }));
  });
  els.channelsManager.querySelectorAll('[data-action="channelColor"]').forEach((input) => {
    input.addEventListener("input", () => updateChannel(input.getAttribute("data-id"), { color: input.value }));
  });
  els.channelsManager.querySelectorAll('[data-action="removeChannel"]').forEach((btn) => {
    btn.addEventListener("click", () => removeChannel(btn.getAttribute("data-id")));
  });
}

function renderParticipants() {
  const list = state.participants;
  const badge = document.getElementById("participantsCountBadge");
  if (badge) badge.textContent = String(list.length);
  if (!list.length) {
    els.participantsList.innerHTML = `<div class="muted">${t("noParticipantsYet")}</div>`;
    return;
  }

  els.participantsList.innerHTML = list
    .map((p) => {
      const currentTeam = state.teams.find((tm) => (tm.memberIds ?? []).includes(p.id)) ?? null;
      const inTeams = Boolean(currentTeam);
      const ch = channelById(p.channelId) ?? channelById(defaultChannelId());
      const chipStyle = ch
        ? `background:${escapeAttr(ch.color)};color:${channelTextColor(ch.color)}`
        : "";
      const chipLabel = ch ? escapeHtml(ch.short) : "?";
      const chipTitle = ch
        ? escapeAttr(`${channelDisplayLabel(ch)} — ${t("cycleChannelHint")}`)
        : "";
      const noShowClass = p.noShow ? " pill--noShow" : "";
      const metaParts = [];
      if (p.noShow) metaParts.push(`<span class="pill__noShowBadge">${escapeHtml(t("noShowBadge"))}</span>`);
      if (inTeams) {
        metaParts.push(
          `<span class="pill__meta pill__meta--assigned"><span class="pill__check" aria-hidden="true">✓</span> ${escapeHtml(t("inATeam"))}</span>`,
        );
      } else if (!p.noShow) {
        metaParts.push(`<span class="pill__meta">${escapeHtml(t("notAssigned"))}</span>`);
      }
      const chipDisabled = state.channels.length <= 1 ? "disabled" : "";
      const canDrag = !state.membershipLocked && !p.noShow;
      const dragAttrs = canDrag
        ? ` draggable="true" data-action="draggablePill" data-from="${escapeAttr(currentTeam?.id ?? UNASSIGNED)}"`
        : "";
      const selectDisabled = state.membershipLocked || p.noShow ? "disabled" : "";
      const teamOptionsHtml =
        `<option value="${UNASSIGNED}" ${currentTeam ? "" : "selected"}>${escapeHtml(t("noTeamOption"))}</option>` +
        state.teams
          .map(
            (tm) =>
              `<option value="${escapeAttr(tm.id)}" ${currentTeam?.id === tm.id ? "selected" : ""}>${escapeHtml(teamDisplayName(tm))}</option>`,
          )
          .join("");

      return `
        <div class="pill${noShowClass}${canDrag ? " pill--draggable" : ""}" data-participant-id="${escapeAttr(p.id)}"${dragAttrs}>
          <div class="pill__main">
            <button type="button" class="pill__channel" style="${chipStyle}" title="${chipTitle}" aria-label="${escapeAttr(t("cycleChannelAria"))}" data-action="cycleChannel" data-id="${escapeAttr(p.id)}" ${chipDisabled}>${chipLabel}</button>
            <div class="pill__nameCol">
              <div class="pill__name">${escapeHtml(participantDisplayName(p))}</div>
              <div class="pill__metaRow">${metaParts.join(" ")}</div>
            </div>
          </div>
          <div class="pill__actions">
            <select class="input input--small pill__teamSelect" data-action="pillAssignTeam" data-id="${escapeAttr(p.id)}" data-from="${escapeAttr(currentTeam?.id ?? UNASSIGNED)}" aria-label="${escapeAttr(t("assignToTeam"))}" title="${escapeAttr(t("assignToTeam"))}" ${selectDisabled}>${teamOptionsHtml}</select>
            <button class="miniBtn" type="button" data-action="removeParticipant" data-id="${escapeAttr(p.id)}">${t("remove")}</button>
          </div>
        </div>
      `;
    })
    .join("");

  els.participantsList.querySelectorAll('[data-action="removeParticipant"]').forEach((btn) => {
    btn.addEventListener("click", () => removeParticipant(btn.getAttribute("data-id")));
  });

  els.participantsList.querySelectorAll('[data-action="cycleChannel"]').forEach((btn) => {
    btn.addEventListener("click", () => cycleParticipantChannel(btn.getAttribute("data-id")));
  });

  els.participantsList.querySelectorAll('[data-action="pillAssignTeam"]').forEach((select) => {
    select.addEventListener("change", () => {
      const pid = select.getAttribute("data-id");
      const from = select.getAttribute("data-from") || UNASSIGNED;
      const to = select.value || UNASSIGNED;
      if (to === UNASSIGNED) {
        if (from && from !== UNASSIGNED) removeParticipantFromTeam(pid, from);
        else render();
        return;
      }
      assignParticipantToTeam(pid, to);
    });
    select.addEventListener("mousedown", (event) => event.stopPropagation());
    select.addEventListener("click", (event) => event.stopPropagation());
  });

  els.participantsList.querySelectorAll('[data-action="draggablePill"]').forEach((pill) => {
    pill.addEventListener("dragstart", (event) => {
      if (event.target.closest("button, select, option")) {
        event.preventDefault();
        return;
      }
      draggedMember = {
        participantId: pill.getAttribute("data-participant-id"),
        fromTeamId: pill.getAttribute("data-from") || UNASSIGNED,
      };
      pill.classList.add("pill--dragging");
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", draggedMember.participantId || "");
      }
    });
    pill.addEventListener("dragend", () => {
      pill.classList.remove("pill--dragging");
      draggedMember = null;
      els.teamsArea?.querySelectorAll('[data-action="dropTeam"]').forEach((card) => {
        card.classList.remove("teamCard--dropTarget");
      });
    });
  });
}

function renderTeams() {
  const teamIdSet = new Set(state.teams.map((team) => team.id));
  for (const collapsedId of [...collapsedTeamIds]) {
    if (!teamIdSet.has(collapsedId)) collapsedTeamIds.delete(collapsedId);
  }

  if (hasRounds()) {
    els.teamLockHint.textContent = state.membershipLocked
      ? t("teamsLockedWithLevelsHint")
      : t("teamsUnlockedWithLevelsHint");
  } else {
    els.teamLockHint.textContent = state.membershipLocked ? t("teamsLockedHint") : t("teamsUnlockedHint");
  }

  function teamSelectOptionsForRow(currentTeamId) {
    return (
      `<option value="${UNASSIGNED}">${t("unassignedBench")}</option>` +
      state.teams.map((opt) => `<option value="${opt.id}" ${opt.id === currentTeamId ? "selected" : ""}>${escapeHtml(teamDisplayName(opt))}</option>`).join("")
    );
  }

  const teamsGridHtml = state.teams.length
    ? state.teams
    .map((team) => {
      const teamCollapsed = collapsedTeamIds.has(team.id);
      const members = (team.memberIds ?? [])
        .map((pid) => participantById(pid))
        .filter(Boolean);
      const membersHtml = members.length
        ? members
            .map((p) => {
              const moveDisabled = state.membershipLocked ? "disabled" : "";
              return `
                <div class="memberRow memberRow--team" ${moveDisabled ? "" : 'draggable="true"'} data-action="draggableMember" data-from="${team.id}" data-pid="${p.id}">
                  <div class="memberRow__name">${escapeHtml(participantDisplayName(p))}</div>
                  <div class="moveRow" hidden>
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
            <input class="input teamNameInput" ${state.membershipLocked ? "disabled" : ""} value="${escapeAttr(teamDisplayName(team))}" data-action="teamName" data-id="${team.id}" />
            <label class="labelInline teamCoachInline">
              <span class="labelInline__text">${t("coachLabel")}</span>
              <input
                class="input input--small teamCoachInput"
                type="text"
                ${state.membershipLocked ? "disabled" : ""}
                value="${escapeAttr(String(team.coachName ?? ""))}"
                placeholder="${escapeAttr(t("coachPlaceholder"))}"
                data-action="teamCoachName"
                data-id="${team.id}"
              />
            </label>
            <button class="miniBtn" type="button" data-action="removeTeam" data-team-id="${team.id}">
              ${t("remove")}
            </button>
            <button
              class="teamCollapseBtn"
              type="button"
              data-action="toggleTeamCollapse"
              data-team-id="${team.id}"
              aria-expanded="${teamCollapsed ? "false" : "true"}"
              aria-label="${teamCollapsed ? t("expandTeam") : t("collapseTeam")}"
            >
              <span class="teamCollapseBtn__chevron ${teamCollapsed ? "teamCollapseBtn__chevron--collapsed" : ""}" aria-hidden="true">▾</span>
            </button>
          </div>
          <div class="members" ${teamCollapsed ? "hidden" : ""}>${membersHtml}</div>
        </div>
      `;
    })
    .join("")
    : `<div class="muted teamsGrid__empty">${t("noTeamsYetCreate")}</div>`;

  els.teamsArea.innerHTML = `
    <div class="teams teamsGrid">${teamsGridHtml}</div>
  `;

  els.teamsArea.querySelectorAll('[data-action="teamName"]').forEach((input) => {
    input.addEventListener("input", () => updateTeamName(input.getAttribute("data-id"), input.value));
  });
  els.teamsArea.querySelectorAll('[data-action="teamCoachName"]').forEach((input) => {
    input.addEventListener("input", () => updateTeamCoachName(input.getAttribute("data-id"), input.value));
  });

  els.teamsArea.querySelectorAll('[data-action="toggleTeamCollapse"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const teamId = btn.getAttribute("data-team-id");
      if (!teamId) return;
      if (collapsedTeamIds.has(teamId)) collapsedTeamIds.delete(teamId);
      else collapsedTeamIds.add(teamId);
      renderTeams();
    });
  });

  els.teamsArea.querySelectorAll('[data-action="removeTeam"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      removeTeam(btn.getAttribute("data-team-id"));
    });
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

  els.teamsArea.querySelectorAll(".memberRow--team").forEach((row) => {
    row.addEventListener("click", (event) => {
      if (event.target.closest("button,select,input")) return;
      const moveRow = row.querySelector(".moveRow");
      if (!moveRow) return;
      const willOpen = moveRow.hasAttribute("hidden");
      els.teamsArea.querySelectorAll(".memberRow--team .moveRow").forEach((other) => {
        other.setAttribute("hidden", "");
      });
      if (willOpen) moveRow.removeAttribute("hidden");
      else moveRow.setAttribute("hidden", "");
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

function getMatchTeamIdOnSide(match, side) {
  return side === "A" ? match.teamAId : match.teamBId;
}

function setMatchTeamIdOnSide(match, side, teamId) {
  if (side === "A") match.teamAId = teamId;
  else match.teamBId = teamId;
}

function resetMatchScoresForPairingEdit(match) {
  match.scoreA = null;
  if (match.teamBId) {
    match.scoreB = null;
  } else {
    match.scoreB = 0;
  }
  match.status =
    match.teamBId && typeof match.scoreA === "number" && typeof match.scoreB === "number" ? "complete" : "pending";
}

function swapMatchTeamSlots(roundId, matchId1, side1, matchId2, side2) {
  if (state.tournamentEnded) return;
  if (matchId1 === matchId2 && side1 === side2) return;
  const round = state.rounds.find((r) => r.id === roundId);
  if (!round) return;
  const m1 = (round.matches ?? []).find((m) => m.id === matchId1);
  const m2 = (round.matches ?? []).find((m) => m.id === matchId2);
  if (!m1 || !m2) return;
  const id1 = getMatchTeamIdOnSide(m1, side1);
  const id2 = getMatchTeamIdOnSide(m2, side2);
  if (!id1 || !id2) return;
  setMatchTeamIdOnSide(m1, side1, id2);
  setMatchTeamIdOnSide(m2, side2, id1);
  resetMatchScoresForPairingEdit(m1);
  resetMatchScoresForPairingEdit(m2);
  persist();
  render();
}

function attachMatchupDragHandlers() {
  const root = els.levelsArea;
  if (!root) return;
  root.querySelectorAll(".matchTeam--draggable").forEach((el) => {
    el.addEventListener("dragstart", (e) => {
      draggedMatchupSlot = {
        roundId: el.getAttribute("data-dnd-round"),
        matchId: el.getAttribute("data-dnd-match"),
        side: el.getAttribute("data-dnd-side"),
      };
      el.classList.add("matchTeam--dragging");
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", "matchup");
      }
    });
    el.addEventListener("dragend", () => {
      el.classList.remove("matchTeam--dragging");
      root.querySelectorAll(".matchTeam--dragOver").forEach((n) => n.classList.remove("matchTeam--dragOver"));
      root.querySelectorAll(".matchTeam--wouldRematch").forEach((n) => n.classList.remove("matchTeam--wouldRematch"));
      draggedMatchupSlot = null;
    });
    el.addEventListener("dragover", (e) => {
      if (!draggedMatchupSlot) return;
      if (el.getAttribute("data-dnd-round") !== draggedMatchupSlot.roundId) return;
      e.preventDefault();
      el.classList.add("matchTeam--dragOver");
      const roundId = el.getAttribute("data-dnd-round");
      const matchId = el.getAttribute("data-dnd-match");
      const side = el.getAttribute("data-dnd-side");
      if (matchId === draggedMatchupSlot.matchId && side === draggedMatchupSlot.side) {
        el.classList.remove("matchTeam--wouldRematch");
        return;
      }
      const roundIndex = state.rounds.findIndex((r) => r.id === roundId);
      const sim = simulateMatchupSwapResult(
        roundId,
        draggedMatchupSlot.matchId,
        draggedMatchupSlot.side,
        matchId,
        side,
      );
      const wouldRematch = Boolean(sim && findRematchesAfterSwap(roundIndex, sim.c1, sim.c2).length);
      el.classList.toggle("matchTeam--wouldRematch", wouldRematch);
    });
    el.addEventListener("dragleave", () => {
      el.classList.remove("matchTeam--dragOver", "matchTeam--wouldRematch");
    });
    el.addEventListener("drop", (e) => {
      e.preventDefault();
      el.classList.remove("matchTeam--dragOver", "matchTeam--wouldRematch");
      if (!draggedMatchupSlot) return;
      const roundId = el.getAttribute("data-dnd-round");
      const matchId = el.getAttribute("data-dnd-match");
      const side = el.getAttribute("data-dnd-side");
      if (roundId !== draggedMatchupSlot.roundId) return;
      if (matchId === draggedMatchupSlot.matchId && side === draggedMatchupSlot.side) return;
      const roundIndex = state.rounds.findIndex((r) => r.id === roundId);
      const sim = simulateMatchupSwapResult(
        roundId,
        draggedMatchupSlot.matchId,
        draggedMatchupSlot.side,
        matchId,
        side,
      );
      if (!sim) return;
      const rematches = findRematchesAfterSwap(roundIndex, sim.c1, sim.c2);
      if (rematches.length) {
        const list = formatRematchLines(rematches);
        if (!window.confirm(t("rematchPairingConfirm", { list }))) return;
      }
      swapMatchTeamSlots(roundId, draggedMatchupSlot.matchId, draggedMatchupSlot.side, matchId, side);
    });
  });
}

function renderMatchScoreInputs(root) {
  root.querySelectorAll('input[data-action="scoreA"]').forEach((input) => {
    input.addEventListener("input", () => setMatchScore(input.getAttribute("data-round"), input.getAttribute("data-match"), "A", input.value));
  });
  root.querySelectorAll('input[data-action="scoreB"]').forEach((input) => {
    input.addEventListener("input", () => setMatchScore(input.getAttribute("data-round"), input.getAttribute("data-match"), "B", input.value));
  });
  root.querySelectorAll('button[data-action="confirmMatch"]').forEach((btn) => {
    btn.addEventListener("click", () => confirmMatchScore(btn.getAttribute("data-round"), btn.getAttribute("data-match")));
  });
}

function renderMatchRowHtml(round, match, options = {}) {
  const a = teamById(match.teamAId);
  const b = match.teamBId ? teamById(match.teamBId) : null;
  const bName = b ? teamDisplayName(b) : t("bye");
  const inTableCard = Boolean(options.inTableCard);
  const tableNum = isTableMode()
    ? (matchTable(match.tableId)?.number ?? match.tableNumber ?? null)
    : null;
  const tableBadgeHtml = tableNum
    ? `<div class="matchTable" title="${escapeAttr(t("tableLabel", { n: tableNum }))}">T${tableNum}</div>`
    : `<div class="matchTable matchTable--empty" aria-hidden="true"></div>`;
  let scoresLocked = Boolean(options.scoresLocked) || state.tournamentEnded;
  if (!scoresLocked && isTableMode()) {
    scoresLocked = !inTableCard || isMatchComplete(match) || !match.tableId;
  }
  const scoreADisabled = scoresLocked ? "disabled" : "";
  const scoreBDisabled = scoresLocked || !b ? "disabled" : "";
  const scoreAVal = typeof match.scoreA === "number" ? String(match.scoreA) : "";
  const scoreBVal = typeof match.scoreB === "number" ? String(match.scoreB) : b ? "" : "0";
  const showConfirmBtn = inTableCard && isTableMode() && Boolean(match.tableId) && !state.tournamentEnded;
  const confirmDisabled = !canConfirmMatch(match) ? "disabled" : "";
  const confirmHtml = showConfirmBtn
    ? `<button type="button" class="matchConfirmBtn" data-action="confirmMatch" data-round="${escapeAttr(round.id)}" data-match="${escapeAttr(match.id)}" title="${escapeAttr(t("confirmScoreTitle"))}" aria-label="${escapeAttr(t("confirmScoreTitle"))}" ${confirmDisabled}>✓</button>`
    : `<div class="matchConfirmPlaceholder" aria-hidden="true"></div>`;
  const pairingDragEnabled = Boolean(options.pairingDragEnabled);
  const clsA = `matchTeam${pairingDragEnabled && match.teamAId ? " matchTeam--draggable" : ""}`;
  const clsB = `matchTeam${pairingDragEnabled && match.teamBId ? " matchTeam--draggable" : ""}`;
  const dndA =
    pairingDragEnabled && match.teamAId
      ? ` draggable="true" data-dnd-round="${escapeAttr(round.id)}" data-dnd-match="${escapeAttr(match.id)}" data-dnd-side="A" title="${escapeAttr(t("dragMatchupTitle"))}"`
      : "";
  const dndB =
    pairingDragEnabled && match.teamBId
      ? ` draggable="true" data-dnd-round="${escapeAttr(round.id)}" data-dnd-match="${escapeAttr(match.id)}" data-dnd-side="B" title="${escapeAttr(t("dragMatchupTitle"))}"`
      : "";
  const rowCompleteClass = !inTableCard && isMatchComplete(match) ? " matchRow--complete" : "";
  return `
    <div class="matchRow${rowCompleteClass}">
      ${tableBadgeHtml}
      <div class="${clsA}"${dndA}>${escapeHtml(teamDisplayName(a))}</div>
      <input class="input scoreInput" inputmode="numeric" type="text" placeholder="0" autocomplete="off" ${scoreADisabled}
        value="${escapeAttr(scoreAVal)}"
        data-action="scoreA" data-round="${round.id}" data-match="${match.id}" />
      <div class="${clsB}"${dndB}>${escapeHtml(bName)}</div>
      <input class="input scoreInput" inputmode="numeric" type="text" placeholder="0" autocomplete="off" ${scoreBDisabled}
        value="${escapeAttr(scoreBVal)}"
        data-action="scoreB" data-round="${round.id}" data-match="${match.id}" />
      ${confirmHtml}
    </div>
  `;
}

function renderTables() {
  if (!els.tablesArea) return;
  if (!isTableMode()) {
    els.tablesArea.innerHTML = "";
    els.tablesArea.hidden = true;
    return;
  }
  els.tablesArea.hidden = false;
  const activeRound = getActiveRound();
  if (!activeRound) {
    els.tablesArea.innerHTML = `<div class="muted tableModeHint">${escapeHtml(t("tableModeHelp"))}</div>`;
    return;
  }

  const tableCards = state.tables
    .map((table) => {
      const match = (activeRound.matches ?? []).find((m) => m.id === table.currentMatchId) ?? null;
      const inMatch = Boolean(match && !isMatchComplete(match));
      return `
        <div class="tableCard">
          <div class="tableCard__head">
            <strong>${escapeHtml(t("tableLabel", { n: table.number }))}</strong>
            <span class="tableStatus ${inMatch ? "tableStatus--busy" : "tableStatus--empty"}">${escapeHtml(inMatch ? t("tableOnMatch") : t("tableEmpty"))}</span>
          </div>
          ${
            inMatch
              ? `<div class="matches">${renderMatchRowHtml(activeRound, match, { inTableCard: true })}</div>`
              : `<div class="muted tableCard__empty">${escapeHtml(t("tableWaitingNext"))}</div>`
          }
        </div>
      `;
    })
    .join("");

  const queued = (activeRound.matches ?? []).filter((match) => !isMatchComplete(match) && !match.tableId);
  const queueHtml = queued.length
    ? queued
        .map((match) => {
          const a = teamById(match.teamAId);
          const b = match.teamBId ? teamById(match.teamBId) : null;
          return `<div class="queueItem">${escapeHtml(teamDisplayName(a))} <span class="muted">vs</span> ${escapeHtml(b ? teamDisplayName(b) : t("bye"))}</div>`;
        })
        .join("")
    : `<div class="muted">${escapeHtml(t("matchQueueEmpty"))}</div>`;

  els.tablesArea.innerHTML = `
    <div class="tableModeHint muted">${escapeHtml(t("tableModeHelp"))}</div>
    <div class="tablesGrid">${tableCards}</div>
    <div class="matchQueue">
      <div class="matchQueue__title">${escapeHtml(t("matchQueue"))}</div>
      <div class="matchQueue__items">${queueHtml}</div>
    </div>
  `;
  renderMatchScoreInputs(els.tablesArea);
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
      const activeTableRound = isTableMode() && getActiveRound()?.id === r.id;
      const pairingDragEnabled = idx >= 1 && !complete && !activeTableRound && !state.tournamentEnded;
      const dragHintHtml = pairingDragEnabled
        ? `<p class="muted dragMatchupHelp">${escapeHtml(t("dragMatchupLevel2Hint"))}</p>`
        : "";
      const matchesHtml = (r.matches ?? [])
        .map((m) =>
          renderMatchRowHtml(r, m, {
            pairingDragEnabled,
            scoresLocked: state.tournamentEnded,
          }),
        )
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
          <div class="matches">${dragHintHtml}${matchesHtml}</div>
        </div>
      `;
    })
    .join("");

  renderMatchScoreInputs(els.levelsArea);

  els.levelsArea.querySelectorAll('[data-action="removeLevel"]').forEach((btn) => {
    btn.addEventListener("click", () => removeIncompleteLevel(btn.getAttribute("data-round-id")));
  });

  attachMatchupDragHandlers();
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
  if (els.appModeSelect) {
    els.appModeSelect.value = state.appMode;
    els.appModeSelect.disabled = hasRounds();
    els.appModeSelect.title = hasRounds() ? t("modeLockedHint") : "";
  }
  if (els.tableCountInput) {
    els.tableCountInput.value = String(state.tableCount ?? 3);
    els.tableCountInput.disabled = !isTableMode() || Boolean(getActiveRound()) || state.tournamentEnded;
  }
  els.createLevelBtn.disabled = !canCreateNextRound();
  els.endTournamentBtn.disabled = state.tournamentEnded;
  els.resumeTournamentBtn.disabled = !state.tournamentEnded;

  const last = state.rounds[state.rounds.length - 1] ?? null;
  const statusParts = [];
  if (state.tournamentEnded) statusParts.push(t("tournamentEnded"));
  if (!state.teams.length) statusParts.push(t("noTeamsStatus"));
  else if (nonEmptyTeams().length < 2) statusParts.push(t("notEnoughPlayingTeams"));
  if (last) statusParts.push(isRoundComplete(last) ? t("lastLevelComplete") : t("lastLevelIncomplete"));
  els.levelStatus.textContent = statusParts.length ? t("status", { items: statusParts.join(" · ") }) : "";

  const teamsResetDisabled = state.membershipLocked || hasRounds();
  els.createTeamsBtn.disabled = teamsResetDisabled;
  els.createEmptyTeamsBtn.disabled = teamsResetDisabled;
  els.reshuffleTeamsBtn.disabled = teamsResetDisabled;
  els.teamCountInput.disabled = teamsResetDisabled;
  els.addEmptyTeamBtn.disabled = state.membershipLocked;
  if (els.toggleTeamsLockBtn) {
    els.toggleTeamsLockBtn.textContent = state.membershipLocked ? t("unlockTeams") : t("lockTeams");
    els.toggleTeamsLockBtn.disabled = false;
  }

  if (els.participantNameInput) els.participantNameInput.disabled = state.participantsLocked;
  if (els.bulkParticipantsInput) els.bulkParticipantsInput.disabled = state.participantsLocked;
  if (els.bulkAddBtn) els.bulkAddBtn.disabled = state.participantsLocked;
  if (els.clearParticipantsBtn) els.clearParticipantsBtn.disabled = state.participantsLocked;
  if (els.toggleParticipantsLockBtn) {
    els.toggleParticipantsLockBtn.textContent = state.participantsLocked ? t("unlockParticipants") : t("lockParticipants");
    els.toggleParticipantsLockBtn.disabled = false;
  }
  if (els.participantsLockHint) {
    if (hasRounds()) {
      els.participantsLockHint.textContent = state.participantsLocked
        ? t("participantsLockedHint")
        : t("participantsUnlockedWithLevelsHint");
    } else {
      els.participantsLockHint.textContent = state.participantsLocked ? t("participantsLockedHint") : t("participantsUnlockedHint");
    }
  }

  if (els.exportExcelBtn) {
    els.exportExcelBtn.disabled = !state.tournamentEnded || !canExportTournamentData();
    els.exportExcelBtn.title = state.tournamentEnded
      ? t("exportEnabledTitle")
      : t("exportNeedEndTitle");
  }
  if (activeStoreId === "youngCoders") {
    const canExport = canExportTournamentData();
    document.querySelectorAll("[data-export-excel]").forEach((btn) => {
      btn.disabled = !canExport;
      btn.title = canExport ? t("exportEnabledTitle") : t("nothingToExport");
    });
  }
}

function render() {
  renderChannelsManager();
  renderParticipants();
  renderTeams();
  renderTables();
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

