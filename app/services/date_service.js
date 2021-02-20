export default function setDateDisplay(displayLabel, evt) {
  let today = evt.date;
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = `${month}/${day}/${year}`;
  displayLabel.text = date;
}