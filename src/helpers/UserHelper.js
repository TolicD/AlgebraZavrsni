function randomName() {
  const nameList = [
    "Mia",
    "Lucija",
    "Nika",
    "Rita",
    "Ema ",
    "Mila ",
    "Luka",
    "Jakov",
    "Roko",
    "Niko",
    "Josip"
  ];
  const surnameList = [
    "Knežević",
    "Horvat",
    "Kovačević",
    "Pavlović",
    "Blažević",
    "Božić",
    "Lovrić",
    "Babić",
    "Grgić",
    "Kovačić",
    "Martinović"
  ];
  const name = nameList[Math.floor(Math.random() * nameList.length)];
  const surname = surnameList[Math.floor(Math.random() * surnameList.length)];
  return name + " " + surname;
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

export { randomName, randomColor };
