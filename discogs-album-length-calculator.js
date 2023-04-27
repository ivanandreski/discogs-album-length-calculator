function fmtMSS(s) {
  return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
}

const albumLengthInSeconds = [
  ...document.querySelectorAll(".duration_2t4qr > span"),
]
  .map((tag) => tag.innerHTML)
  .map((time) => {
    const split = time.split(":");

    return parseInt(split[0]) * 60 + parseInt(split[1]);
  })
  .reduce((prevSum, time) => prevSum + time);

console.log(albumLengthInSeconds);

const totalElement = `
    <tr>
        <td class="trackPos_2RCje">*</td>
        <td class="artist_3zAQD"></td>
        <td class="trackTitle_CTKp4">Total time</td>
        <td class="duration_2t4qr">${fmtMSS(albumLengthInSeconds)}</td>
    </tr>
`;

document.querySelector(".tracklist_3QGRS > tbody").innerHTML += totalElement;
