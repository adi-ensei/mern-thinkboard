export function formatDate(date) {
  const d = new Date(date); // convert string to Date object
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
