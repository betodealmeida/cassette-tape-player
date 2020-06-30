const pi = 3.1415;
const totalRadius = 25.45;
const gearRadius = 6.5;

function addCassetteSVG(audio) {
  const xmlns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(xmlns, "svg");
  svg.setAttributeNS(null, "viewBox", "2.5 2.5 95 55");

  // add cassette body
  const cassetteBody = document.createElementNS(xmlns, "path");
  svg.appendChild(cassetteBody);
  cassetteBody.setAttributeNS(null, "id", "cassette-body");
  cassetteBody.setAttributeNS(null, "d", "M5 5 95 5 95 55 5 55 z");
  cassetteBody.setAttributeNS(null, "stroke-width", "5");
  cassetteBody.setAttributeNS(null, "stroke-linecap", "square");
  cassetteBody.setAttributeNS(null, "stroke-linejoin", "round");

  // add trapezoid shape
  const cassetteBottom = document.createElementNS(xmlns, "path");
  svg.appendChild(cassetteBottom);
  cassetteBottom.setAttributeNS(null, "id", "cassette-bottom");
  cassetteBottom.setAttributeNS(null, "d", "M18 57 21 45 79 45 82 57 z");

  // add paper label
  const paperLabel = document.createElementNS(xmlns, "path");
  svg.appendChild(paperLabel);
  paperLabel.setAttributeNS(null, "id", "paper-label");
  paperLabel.setAttributeNS(null, "d", "M10 10 90 10 90 40 10 40 z");
  paperLabel.setAttributeNS(null, "stroke-width", "5");
  paperLabel.setAttributeNS(null, "stroke-linecap", "square");
  paperLabel.setAttributeNS(null, "stroke-linejoin", "round");

  // add rainbow colors
  const colors = ["red", "orange", "yellow", "green", "blue"];
  for (let i = 0; i < colors.length; i++) {
    const color = document.createElementNS(xmlns, "path");
    svg.appendChild(color);
    color.setAttributeNS(null, "d", `M7.5 ${21.5 + i * 3.4} 92.5 ${21.5 + i * 3.4} 92.5 38.5 7.5 38.5 z`);
    color.setAttributeNS(null, "fill", colors[i]);
  }

  // add center detail
  const center = document.createElementNS(xmlns, "path");
  svg.appendChild(center);
  center.setAttributeNS(null, "id", "cassette-center");
  center.setAttributeNS(null, "d", "M20 24 80 24 80 36 20 36 z");
  center.setAttributeNS(null, "stroke-width", "5");
  center.setAttributeNS(null, "stroke-linecap", "square");
  center.setAttributeNS(null, "stroke-linejoin", "round");

  // add window as clipping path
  const cassetteWindow = document.createElementNS(xmlns, "clipPath");
  svg.appendChild(cassetteWindow);
  cassetteWindow.setAttributeNS(null, "id", "cassetteWindow");
  const windowPath = document.createElementNS(xmlns, "path");
  cassetteWindow.appendChild(windowPath);
  windowPath.setAttributeNS(null, "d", "M40 24 60 24 60 36 40 36 z");

  // add spools and background behind window
  const group = document.createElementNS(xmlns, "g");
  svg.appendChild(group);
  group.setAttributeNS(null, "clip-path", "url(#cassetteWindow)");
  const background = document.createElementNS(xmlns, "path");
  group.appendChild(background);
  background.setAttributeNS(null, "d", "M40 24 60 24 60 36 40 36 z");
  background.setAttributeNS(null, "class", "hole");
  const leftSpool = document.createElementNS(xmlns, "circle");
  group.appendChild(leftSpool);
  leftSpool.setAttributeNS(null, "id", "left-spool");
  leftSpool.setAttributeNS(null, "cx", "30");
  leftSpool.setAttributeNS(null, "cy", "30");
  leftSpool.setAttributeNS(null, "r", totalRadius);
  const rightSpool = document.createElementNS(xmlns, "circle");
  group.appendChild(rightSpool);
  rightSpool.setAttributeNS(null, "id", "right-spool");
  rightSpool.setAttributeNS(null, "cx", "70");
  rightSpool.setAttributeNS(null, "cy", "30");
  rightSpool.setAttributeNS(null, "r", gearRadius);

  // add gears
  for (let i = 0; i < 2; i++) {
    const gear = document.createElementNS(xmlns, "circle");
    svg.appendChild(gear);
    gear.setAttributeNS(null, "class", "gears");
    gear.setAttributeNS(null, "cx", 30 + i * 40);
    gear.setAttributeNS(null, "cy", "30");
    gear.setAttributeNS(null, "r", 5);
  }

  // add bottom holes
  for (let i = 0; i < 2; i++) {
    const roundHole = document.createElementNS(xmlns, "circle");
    svg.appendChild(roundHole);
    roundHole.setAttributeNS(null, "class", "hole");
    roundHole.setAttributeNS(null, "cx", 25 + i * 50);
    roundHole.setAttributeNS(null, "cy", "54");
    roundHole.setAttributeNS(null, "r", "1.75");
    const squareHole = document.createElementNS(xmlns, "path");
    svg.appendChild(squareHole);
    squareHole.setAttributeNS(null, "d", `M${35 + i * 30} 51 ${37 + i * 26} 51 ${37 + i * 26} 53 ${35 + i * 30} 53 z`);
    squareHole.setAttributeNS(null, "class", "hole");
    squareHole.setAttributeNS(null, "stroke-width", "2");
    squareHole.setAttributeNS(null, "stroke-linecap", "square");
    squareHole.setAttributeNS(null, "stroke-linejoin", "round");
  }

  // add lines
  for (let i = 0; i < 2; i++) {
    const line = document.createElementNS(xmlns, "line");
    svg.appendChild(line);
    line.setAttributeNS(null, "class", "label-lines");
    line.setAttributeNS(null, "x1", "12.5");
    line.setAttributeNS(null, "y1", 12.5 + i * 5);
    line.setAttributeNS(null, "x2", "87.5");
    line.setAttributeNS(null, "y2", 12.5 + i * 5);
    line.setAttributeNS(null, "stroke-width", "0.25");
  }

  // metadata
  const heights = [12, 17, 21];
  const ids = ["artist", "title", "album"];
  for (let i = 0; i < 3; i++) {
    const text = document.createElementNS(xmlns, "text");
    svg.appendChild(text);
    text.setAttributeNS(null, "id", ids[i]);
    text.setAttributeNS(null, "x", "50");
    text.setAttributeNS(null, "y", heights[i]);
    text.setAttributeNS(null, "class", "cassette-label");
    text.setAttributeNS(null, "text-anchor", "middle");
  }

  // wobble spools when playing
  audio.addEventListener("play", (event) => {
    leftSpool.style.animationPlayState = "running";
    rightSpool.style.animationPlayState = "running";
  });
  audio.addEventListener("pause", (event) => {
    leftSpool.style.animationPlayState = "paused";
    rightSpool.style.animationPlayState = "paused";
  });
  audio.addEventListener("ended", (event) => {
    leftSpool.style.animationPlayState = "paused";
    rightSpool.style.animationPlayState = "paused";
  });

  // update spool sizes
  audio.addEventListener("timeupdate", (event) => {
    const progress = audio.currentTime / audio.duration;
    const totalArea = Math.PI * totalRadius * totalRadius;
    const gearArea = Math.PI * gearRadius * gearRadius;
    const tapeArea = totalArea - gearArea;
    const leftRadius = Math.sqrt((gearArea + tapeArea * (1 - progress)) / Math.PI);
    const rightRadius = Math.sqrt((gearArea + tapeArea * progress) / Math.PI);
    leftSpool.setAttribute("r", leftRadius);
    rightSpool.setAttribute("r", rightRadius);
  });

  // write song metadata
  svg.getElementById("artist").textContent = audio.dataset.artist;
  svg.getElementById("title").textContent = `- ${audio.dataset.title} -`;
  svg.getElementById("album").textContent = `(${audio.dataset.album})`;

  return svg;
}

function addPlayer(audio) {
  const svg = addCassetteSVG(audio);
  let dragging = false;
  let lastX;
  svg.addEventListener("mousedown", (event) => {
    lastX = event.clientX;
    dragging = true;
  }, false);
  svg.addEventListener("mouseout", (event) => {
    if (!dragging) return;

    const movement = (event.clientX - lastX) / svg.clientWidth;
    audio.currentTime += audio.duration * movement;
    dragging = false;
  }, false);
  svg.addEventListener("mouseup", (event) => {
    const movement = (event.clientX - lastX) / svg.clientWidth;
    audio.currentTime += audio.duration * movement;
    dragging = false;
  }, false);

  // insert before audio
  if (audio.dataset.targetId) {
    document.getElementById(audio.dataset.targetId).appendChild(svg);
  } else {
    audio.parentNode.insertBefore(svg, audio);
  }
}

function addPlayers() {
  const audioElements = document.querySelectorAll('audio.cassette');
  for (let i = 0; i < audioElements.length; i++) {
    addPlayer(audioElements[i]);
  }
}

window.addEventListener('load', addPlayers);
