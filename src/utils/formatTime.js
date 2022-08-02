export default function formatTime(str) {
  const hour = Number(str.substring(0, 2));
  if (hour > 12) {
    return `${hour - 12}pm`;
  }

  return `${hour}am`;
}
