# Robofestival Tournament - User Guide

This guide explains how to use the app end-to-end: setup, participants, teams, levels, scoring, leaderboard, backup/restore, and troubleshooting.

## Table of Contents

1. [Open the app](#open-the-app)
2. [Main screen overview](#main-screen-overview)
3. [Participants workflow](#participants-workflow)
4. [Teams workflow](#teams-workflow)
5. [Levels and scoring](#levels-and-scoring)
6. [Leaderboard](#leaderboard)
7. [Backup and restore](#backup-and-restore)
8. [Export to Excel](#export-to-excel)
9. [Reset and safety locks](#reset-and-safety-locks)
10. [Troubleshooting](#troubleshooting)

## Open the app

1. Open `index.html` in your browser.
2. The app loads the last saved session automatically from browser storage.
3. You can switch language (`EN / EL`) and theme (`Dark / Light`) from the header.

![App header and tabs](docs/screenshots/01-header-and-tabs.png)

## Main screen overview

The app is split into 3 tabs:

- `Participants + teams`
- `Levels + scoring`
- `Leaderboard`

Header actions:

- `EN / EL`: switch language
- Theme switch: dark/light mode
- `Export Excel`: enabled only after tournament is ended
- `Export Backup`: saves full session to JSON
- `Import Backup`: restores full session from JSON
- `Reset tournament`: clears current tournament data

![Header actions](docs/screenshots/02-header-actions.png)

## Participants workflow

### Add participants

- Use the single input (`Participant name`) and click `Add`.
- Or use `Bulk paste` and click `Add lines` (one name per line).

### Participant indicators

- The badge next to `Participants` shows total count.
- Assigned players show a green check (`in a team`).
- Unassigned players show `not assigned`.

### Lock/Unlock participants

- Use `Lock participants` to prevent add/remove changes.
- Use `Unlock participants` to allow edits again at any time, including after levels have started.
- When levels are active, unlocking participants also unlocks team roster moves (you will be asked to confirm).
- Locking participants again while levels are active will re-lock team roster moves.

![Participants section](docs/screenshots/03-participants-section.png)

## Teams workflow

### Create teams

- Set `Number of teams`.
- Click:
  - `Create randomly` to distribute participants
  - `Create empty teams` to start with empty teams
  - `Re-shuffle` to randomize again
  - `Add empty team` to append one team

### Team management

- Rename team names directly in team cards.
- Drag players between teams.
- Drag players to `Unassigned (bench)` to remove them from a team.
- In each team row, click a player to show `Move` / `Remove` options.

### Team card controls

- Team name is highlighted for visibility.
- Arrow button on each team card collapses/expands team members.

### Lock/Unlock teams

- Use `Lock teams` to freeze team editing and movement.
- Use `Unlock teams` to allow changes again (only before levels start).
- After first level is created, teams are automatically locked.
- Team name editing is also locked when teams are locked.

![Teams section and cards](docs/screenshots/04-teams-section.png)
![Collapsed team card](docs/screenshots/05-team-collapsed.png)

## Levels and scoring

Go to `Levels + scoring`.

### Create levels

- Click `Create next level` to generate random pairings.
- If odd number of teams, one gets `BYE` (or `ΡΕΠΟ` in Greek).

### Adjust pairings (level 2 and later)

- From **level 2 onward**, while a level is still **in progress** and the tournament is not ended, you can **drag a team name onto another team name in the same level** to swap those two slots.
- If a swap would recreate a pairing that **already happened in an earlier level**, the drop target is highlighted in amber and you get a **confirmation** before the swap is applied (you can cancel).
- Scores for the **two affected matches** are cleared so you can re-enter them for the new pairings.
- Level 1 pairings stay fixed (no drag).

### Enter scores

- Fill score inputs for each match.
- Level status updates between `in progress` and `complete`.

### Level controls

- `End tournament`: locks scoring and enables Excel export.
- `Resume / add levels`: allows new levels again.
- Incomplete levels can be removed using `Remove level`.

![Levels and scoring tab](docs/screenshots/06-levels-scoring.png)

## Leaderboard

Go to `Leaderboard` tab to view ranking.

Sorting priority:

1. Total points (descending)
2. Matches played (descending)
3. Team name (alphabetical)

![Leaderboard table](docs/screenshots/07-leaderboard.png)

## Backup and restore

### Export backup

1. Click `Export Backup`.
2. A JSON file is downloaded as:
   - `robofestival-backup-YYYY-MM-DD.json`
3. This file contains full tournament state and metadata.

### Import backup

1. Click `Import Backup`.
2. Select a previously exported `.json` file.
3. Confirm overwrite when prompted.
4. App restores participants, teams, levels, scores, and locks.

Notes:

- Invalid JSON or wrong file format shows a clear error message.
- After import, session is saved back to browser storage automatically.

![Backup buttons](docs/screenshots/08-backup-buttons.png)
![Import confirmation](docs/screenshots/09-import-confirmation.png)

## Export to Excel

`Export Excel` is enabled only after clicking `End tournament`.

Generated workbook includes:

- Participants
- Teams
- Scores
- Leaderboard

![Excel export enabled](docs/screenshots/10-excel-export.png)

## Reset and safety locks

- `Reset tournament` clears current tournament data for this app.
- You are asked to confirm before reset.
- Locks protect data consistency once competition starts.

![Reset confirmation](docs/screenshots/11-reset-confirmation.png)

## Troubleshooting

### Data did not persist

- Make sure you opened the same file in the same browser/profile.
- Avoid private/incognito mode for persistent sessions.
- Do not clear browser site data/local storage.
- Use `Export Backup` regularly for safety.

### Import does not work

- Ensure file is JSON from this app (`Export Backup` output).
- If import fails, re-export from source device and try again.

### Excel export disabled

- Click `End tournament` first.

### Team/participant editing disabled

- Check `Lock participants` / `Lock teams` and the on-screen hints.
- If participants are locked, add/bulk/clear are blocked (Remove still works with its own confirmation).
- Team roster moves follow `membership` lock rules (see teams section).
