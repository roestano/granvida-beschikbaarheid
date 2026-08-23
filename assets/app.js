const TIME_SLOTS = [
  'Ma 09:00–10:30', 'Ma 10:30–12:00', 'Ma 13:30–15:00', 'Ma 15:00–16:30',
  'Di 09:00–10:30', 'Di 10:30–12:00', 'Di 13:30–15:00', 'Di 15:00–16:30',
  'Wo 09:00–10:30', 'Wo 10:30–12:00', 'Wo 13:30–15:00', 'Wo 15:00–16:30',
  'Do 09:00–10:30', 'Do 10:30–12:00', 'Do 13:30–15:00', 'Do 15:00–16:30',
  'Vr 09:00–10:30', 'Vr 10:30–12:00', 'Vr 13:30–15:00', 'Vr 15:00–16:30'
];

const LOCATIONS = ['2e Braamstraat 6, Den Haag', 'Eekhoornrade 215, Den Haag'];

// Vervang na Taak 3 door de echte Web App-URL (eindigt op /exec)
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzMfuegP9oWTpNlRgoZZZnqOw28YLqWdIcvaAvSd9vu2rZ8ADyGZ2segPAxiVCvs19v/exec';

async function postAction(action, params) {
  const body = new URLSearchParams({ action, ...params });
  const res = await fetch(APPS_SCRIPT_URL, { method: 'POST', body });
  return res.json();
}

async function getAdminData(token) {
  const res = await fetch(APPS_SCRIPT_URL + '?token=' + encodeURIComponent(token));
  return res.json();
}
