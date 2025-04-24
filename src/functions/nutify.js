export default function nuttify(string) {
  const regex = /n[a-zA-Z]t/gi;
  return string.replace(regex, (match) =>
    match[0] === match[0].toUpperCase() ? 'Nut' : 'nut'
  );
}
