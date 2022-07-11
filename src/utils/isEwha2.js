export default function IsEwha2(value) {
  // console.log("IsEwha", value);
  const regExp = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?].*ewhain.net$/;
  return !!regExp.test(value);
}
