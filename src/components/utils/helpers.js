import { AUTH_TOKEN } from "../../constants";

export function getLocalItem(item) {
  return localStorage.getItem(item);
}

export function getAuth() {
  return getLocalItem(AUTH_TOKEN);
}

export function setLocalItem(key, value) {
  return localStorage.setItem(key, value);
}

export function setAuth(value) {
  return setLocalItem(AUTH_TOKEN, value);
}

function timeDifference(current, previous) {
  const milliSecondsPerMinute = 60 * 1000;
  const milliSecondsPerHour = milliSecondsPerMinute * 60;
  const milliSecondsPerDay = milliSecondsPerHour * 24;
  const milliSecondsPerMonth = milliSecondsPerDay * 30;
  const milliSecondsPerYear = milliSecondsPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < milliSecondsPerMinute / 3) {
    return "just now";
  }

  if (elapsed < milliSecondsPerMinute) {
    return "less than 1 min ago";
  } else if (elapsed < milliSecondsPerHour) {
    return Math.round(elapsed / milliSecondsPerMinute) + " min ago";
  } else if (elapsed < milliSecondsPerDay) {
    return Math.round(elapsed / milliSecondsPerHour) + " h ago";
  } else if (elapsed < milliSecondsPerMonth) {
    return Math.round(elapsed / milliSecondsPerDay) + " days ago";
  } else if (elapsed < milliSecondsPerYear) {
    return Math.round(elapsed / milliSecondsPerMonth) + " mo ago";
  } else {
    return Math.round(elapsed / milliSecondsPerYear) + " years ago";
  }
}

export function timeDifferenceForDate(date) {
  const now = new Date().getTime();
  return timeDifference(now, date);
}
