export function getHasParams() {
  const hash = window.location.hash.substring(1).split("&");
  const accesToken = hash[0].split("=")[1];

  return { accesToken };
}
