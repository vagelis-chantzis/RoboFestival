/**
 * Non-module script: works when opening index.html via file:// (ES import would fail).
 */
(function () {
  const STORAGE_KEY = "roboFestivalTournament.v1";

  window.TournamentStorage = {
    loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") return null;
        return parsed;
      } catch {
        return null;
      }
    },
    saveState(state) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    },
    clearState() {
      localStorage.removeItem(STORAGE_KEY);
    },
  };
})();
