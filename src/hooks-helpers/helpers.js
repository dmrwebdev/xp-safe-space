export function getCurrentTime() {
  const now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  const amPM = hour < 12 ? "AM" : "PM";
  /* appending 0 before time elements if less than 10 */
  hour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  min = min < 10 ? "0" + min : min;

  return `${hour}:${min} ${amPM}`;
}
