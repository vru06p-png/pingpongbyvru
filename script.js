const events = [
  { id:"big-bang", year:-13800000000, date:"13.8 BILLION YEARS AGO", title:"Big Bang & cosmic inflation", era:"COSMIC ORIGIN", category:"cosmos", visual:"cosmic", labelScale:30000000, description:"The observable universe began in an extraordinarily hot, dense state. In its earliest fraction of a second, space expanded extremely rapidly — an idea called cosmic inflation.", fact:"This is the starting condition for every later atom, star, world, and observer in this atlas.", source:"https://science.nasa.gov/universe/overview/" },
  { id:"nucleosynthesis", year:-13799999990, date:"THE FIRST MINUTES", title:"The first elements", era:"COSMIC ORIGIN", category:"cosmos", visual:"cosmic", labelScale:1000, description:"As the young universe cooled, protons and neutrons combined to make hydrogen, helium, and traces of lithium. Heavier elements had to wait for stars.", fact:"Most of the helium in the universe was produced in these first minutes.", source:"https://science.nasa.gov/universe/overview/" },
  { id:"afterglow", year:-13799620000, date:"380,000 YEARS AFTER THE BEGINNING", title:"The cosmic afterglow", era:"THE FIRST LIGHT", category:"cosmos", visual:"cosmic", labelScale:1000000, description:"Electrons joined atomic nuclei, clearing the early fog. Light was finally able to travel freely; we still observe this relic light as the cosmic microwave background.", fact:"It is the oldest light we can see — a baby picture of the universe.", source:"https://science.nasa.gov/universe/overview/" },
  { id:"cosmic-dawn", year:-13600000000, date:"HUNDREDS OF MILLIONS OF YEARS LATER", title:"Cosmic dawn", era:"FIRST STARS", category:"cosmos", visual:"cosmic", labelScale:18000000, description:"Gravity gathered gas into the first stars and galaxies. Their light began to transform the hydrogen filling intergalactic space.", fact:"Stars became the furnaces that made most of the chemical ingredients of planets and life.", source:"https://science.nasa.gov/universe/overview/" },
  { id:"galaxies", year:-13000000000, date:"EARLY COSMIC HISTORY", title:"Galaxies assemble", era:"COSMIC STRUCTURE", category:"cosmos", visual:"cosmic", labelScale:18000000, description:"Over billions of years, gravity drew stars, gas, and dark matter into galaxies. Collisions and mergers helped build the large-scale cosmic web.", fact:"The Milky Way is one evolving island in a universe filled with galaxies.", source:"https://science.nasa.gov/universe/overview/" },
  { id:"sun", year:-4600000000, date:"4.6 BILLION YEARS AGO", title:"The Sun and solar system form", era:"SOLAR SYSTEM", category:"earth", visual:"space", labelScale:7000000, description:"A spinning cloud of gas and dust collapsed. The center became the Sun; material in the surrounding disk gathered into planets, moons, asteroids, and comets.", fact:"The Sun contains about 99.8% of the solar system’s mass.", source:"https://science.nasa.gov/astrobiology/learning-resources/alp/how-did-our-solar-system-form/" },
  { id:"earth", year:-4540000000, date:"4.54 BILLION YEARS AGO", title:"Earth coalesces", era:"EARLY EARTH", category:"earth", visual:"earth", labelScale:5000000, description:"Gravity pulled rock and metal into the third planet from the Sun. The young Earth differentiated into core, mantle, and crust while collisions continued.", fact:"Early Earth was radically unlike today’s blue world.", source:"https://science.nasa.gov/earth/facts/" },
  { id:"moon", year:-4500000000, date:"ABOUT 4.5 BILLION YEARS AGO", title:"A giant impact makes the Moon", era:"EARLY EARTH", category:"earth", visual:"earth", labelScale:4000000, description:"Leading models propose that a Mars-sized body struck the young Earth, throwing molten debris into orbit. That debris eventually became the Moon.", fact:"The Moon’s origin is still actively studied; the impact story remains a leading family of models.", source:"https://science.nasa.gov/moon/formation/" },
  { id:"oceans", year:-4400000000, date:"ABOUT 4.4 BILLION YEARS AGO", title:"Water finds a surface", era:"EARLY EARTH", category:"earth", visual:"earth", labelScale:3000000, description:"As Earth cooled, a crust and liquid water may have appeared surprisingly early. Our picture comes from ancient minerals because rocks from this era are scarce.", fact:"Zircon crystals preserve clues about a planet whose original surface has mostly been recycled.", source:"https://science.nasa.gov/earth/earth-observatory/ancient-crystals-suggest-earlier-ocean/" },
  { id:"life", year:-3800000000, date:"AROUND 3.8–4 BILLION YEARS AGO", title:"Life leaves early traces", era:"LIFE", category:"life", visual:"life", labelScale:3000000, description:"Evidence suggests living systems were present on Earth very early in its history, although exactly when and how life began remains a major scientific question.", fact:"Life may have been on Earth for almost as long as the planet has existed.", source:"https://science.nasa.gov/astrobiology/learning-resources/alp/how-did-life-first-emerge-on-earth/" },
  { id:"oxygen", year:-2400000000, date:"ABOUT 2.4 BILLION YEARS AGO", title:"Oxygen changes the sky", era:"LIFE", category:"life", visual:"life", labelScale:2000000, description:"Oxygen-producing microbes altered Earth’s atmosphere during the Great Oxidation Event, remaking chemistry and the possibilities for later life.", fact:"An atmosphere can be a record of what a planet’s living systems are doing.", source:"https://science.nasa.gov/astrobiology/learning-resources/alp/how-did-life-first-emerge-on-earth/" },
  { id:"complex-life", year:-600000000, date:"ABOUT 600 MILLION YEARS AGO", title:"Complex life diversifies", era:"LIFE", category:"life", visual:"life", labelScale:800000, description:"Multicellular organisms diversified in the oceans before the dramatic expansion of animal forms in the Cambrian.", fact:"Evolution is a branching experiment, shaped by opportunity, extinction, and changing environments.", source:"https://science.nasa.gov/resource/planet-earth-through-the-ages/" },
  { id:"cambrian", year:-541000000, date:"541 MILLION YEARS AGO", title:"Cambrian explosion", era:"LIFE", category:"life", visual:"life", labelScale:500000, description:"Many major animal groups appear in the fossil record during this interval, leaving a much richer archive of complex life.", fact:"The fossil record becomes strikingly more diverse and visible.", source:"https://science.nasa.gov/resource/planet-earth-through-the-ages/" },
  { id:"plants", year:-470000000, date:"ABOUT 470 MILLION YEARS AGO", title:"Plants move onto land", era:"LIFE", category:"life", visual:"life", labelScale:500000, description:"Plants and their descendants helped reshape land ecosystems, soils, and the cycling of carbon.", fact:"Land was not always green; its ecology had to be built.", source:"https://science.nasa.gov/resource/planet-earth-through-the-ages/" },
  { id:"dinosaurs", year:-230000000, date:"ABOUT 230 MILLION YEARS AGO", title:"Dinosaurs rise", era:"LIFE", category:"life", visual:"life", labelScale:250000, description:"Dinosaurs became a dominant part of terrestrial ecosystems for more than 160 million years, alongside many other evolving lineages.", fact:"For most of their era, mammals were present but not the largest animals on land.", source:"https://science.nasa.gov/resource/planet-earth-through-the-ages/" },
  { id:"extinction", year:-66000000, date:"66 MILLION YEARS AGO", title:"An impact redraws ecosystems", era:"LIFE", category:"life", visual:"life", labelScale:120000, description:"A mass extinction ended the age of non-avian dinosaurs and reshaped ecosystems, opening ecological space for survivors and new lineages.", fact:"Earth’s living history is punctuated by both gradual change and abrupt turning points.", source:"https://science.nasa.gov/resource/planet-earth-through-the-ages/" },
  { id:"hominins", year:-7000000, date:"ABOUT 7 MILLION YEARS AGO", title:"Early hominins", era:"HUMAN ORIGINS", category:"human", visual:"human", labelScale:16000, description:"The human family tree branches within the wider primate story. Multiple hominin species would appear, adapt, and disappear.", fact:"Human evolution is not a single-file march toward the present.", source:"https://humanorigins.si.edu/human-characteristics/humans-change-world" },
  { id:"sapiens", year:-300000, date:"ABOUT 300,000 YEARS AGO", title:"Homo sapiens emerges", era:"HUMAN ORIGINS", category:"human", visual:"human", labelScale:700, description:"Modern humans evolved in Africa, later spreading and interacting with a world of changing climates, landscapes, and other human relatives.", fact:"On a cosmic timeline, our entire species occupies a nearly invisible sliver.", source:"https://humanorigins.si.edu/human-characteristics/humans-change-world" },
  { id:"migration", year:-70000, date:"ABOUT 70,000 YEARS AGO", title:"Human migrations expand", era:"HUMAN ORIGINS", category:"human", visual:"human", labelScale:250, description:"Groups of Homo sapiens expanded across continents over many generations, carrying languages, technologies, stories, and adaptations.", fact:"Human history is a story of movement and connection as much as settlement.", source:"https://humanorigins.si.edu/human-characteristics/humans-change-world" },
  { id:"agriculture", year:-12000, date:"ABOUT 12,000 YEARS AGO", title:"Food production transforms societies", era:"HUMAN ACHIEVEMENT", category:"human", visual:"human", labelScale:35, description:"In several regions, people began producing food and changing landscapes in new ways. Agriculture enabled larger, more settled communities.", fact:"This is a recent change: almost all of human existence came before it.", source:"https://humanorigins.si.edu/human-characteristics/humans-change-world" },
  { id:"cities", year:-4000, date:"ABOUT 4,000 BCE", title:"The first cities grow", era:"HUMAN ACHIEVEMENT", category:"human", visual:"human", labelScale:15, description:"Dense settlements, institutions, trade networks, and new forms of coordination emerged in multiple parts of the world.", fact:"Cities concentrate knowledge, power, infrastructure, and environmental impact.", source:"https://humanorigins.si.edu/human-characteristics/humans-change-world" },
  { id:"writing", year:-3200, date:"ABOUT 3,200 BCE", title:"Writing preserves memory", era:"HUMAN ACHIEVEMENT", category:"human", visual:"human", labelScale:10, description:"Writing systems turned speech and records into durable marks, allowing information to travel farther across time and space.", fact:"Recorded history is only the last fraction of the human story.", source:"https://humanorigins.si.edu/human-characteristics/humans-change-world" },
  { id:"printing", year:1450, date:"c. 1450 CE", title:"Printing spreads ideas", era:"HUMAN ACHIEVEMENT", category:"human", visual:"human", labelScale:3, description:"Movable-type printing accelerated the copying and circulation of texts in Europe, part of a larger global history of print and knowledge exchange.", fact:"Information technologies repeatedly change who can create, store, and distribute ideas.", source:"https://www.nasa.gov/history/" },
  { id:"industry", year:1760, date:"c. 1760 CE", title:"Industrial transformation", era:"HUMAN ACHIEVEMENT", category:"human", visual:"human", labelScale:2, description:"Mechanized production, fossil fuels, transport, and new institutions rapidly transformed economies and landscapes.", fact:"The human footprint on Earth accelerated across only a few centuries.", source:"https://humanorigins.si.edu/human-characteristics/humans-change-world" },
  { id:"flight", year:1903, date:"1903", title:"Powered flight", era:"HUMAN ACHIEVEMENT", category:"human", visual:"human", labelScale:.6, description:"Controlled powered flight connected engineering, imagination, and a new relationship with distance and the sky.", fact:"Less than seven decades later, humans would stand on the Moon.", source:"https://www.nasa.gov/history/" },
  { id:"dna", year:1953, date:"1953", title:"DNA’s double-helix structure", era:"HUMAN ACHIEVEMENT", category:"human", visual:"human", labelScale:.3, description:"The structure of DNA clarified how genetic information can be stored and copied, transforming biology and medicine.", fact:"One discovery connected inheritance to a physical molecular code.", source:"https://www.nasa.gov/history/" },
  { id:"sputnik", year:1957, date:"1957", title:"Sputnik opens the space age", era:"SPACE AGE", category:"space", visual:"space", labelScale:.25, description:"Sputnik 1 became the first artificial satellite to orbit Earth, beginning the age of satellites and human spaceflight.", fact:"The sky became a place where people could build instruments that look both down at Earth and outward.", source:"https://www.nasa.gov/history/" },
  { id:"moon-landing", year:1969, date:"1969", title:"Humans walk on the Moon", era:"SPACE AGE", category:"space", visual:"space", labelScale:.18, description:"Apollo 11 carried humans to the lunar surface, a landmark in exploration made possible by vast international networks of science and engineering.", fact:"The view back toward Earth helped turn a planet into a shared image.", source:"https://www.nasa.gov/history/" },
  { id:"earthrise", year:1968, date:"1968", title:"Earthrise changes perspective", era:"SPACE AGE", category:"space", visual:"space", labelScale:.18, description:"Apollo 8’s view of Earth rising over the Moon gave millions a powerful image of a bright, finite world in darkness.", fact:"A photograph can alter the scale at which people imagine home.", source:"https://science.nasa.gov/earth/advancing-earth-observation-at-nasa-since-release-of-earthrise-photo/" },
  { id:"hubble", year:1990, date:"1990", title:"Hubble begins its long look", era:"SPACE AGE", category:"space", visual:"space", labelScale:.1, description:"The Hubble Space Telescope opened a long-running window onto planets, stars, galaxies, and the evolving universe.", fact:"Looking far away also means looking far back in time.", source:"https://science.nasa.gov/missions/hubble/" },
  { id:"web", year:1991, date:"1991", title:"The World Wide Web connects", era:"HUMAN ACHIEVEMENT", category:"human", visual:"human", labelScale:.1, description:"The web became a global information layer, changing communication, science, education, commerce, and culture.", fact:"Human knowledge can now move at a scale and speed unprecedented in history.", source:"https://www.nasa.gov/history/" },
  { id:"iss", year:1998, date:"1998", title:"The International Space Station", era:"SPACE AGE", category:"space", visual:"space", labelScale:.08, description:"A continuously inhabited laboratory in low-Earth orbit became a long-term experiment in international cooperation and microgravity research.", fact:"For decades, people from many nations have lived above the atmosphere.", source:"https://www.nasa.gov/mission_pages/station/main/index.html" },
  { id:"jwst", year:2021, date:"2021", title:"Webb launches", era:"SPACE AGE", category:"space", visual:"space", labelScale:.05, description:"The James Webb Space Telescope launched to study the universe in infrared light, from nearby worlds to some of the earliest galaxies.", fact:"Its observations help test and refine our earliest cosmic timelines.", source:"https://science.nasa.gov/mission/webb/" },
  { id:"now", year:2026, date:"NOW", title:"A planet that can look back", era:"THE PRESENT", category:"space", visual:"space", labelScale:.04, description:"Humans are mapping genomes, monitoring climate from orbit, studying distant worlds, and making models of beginnings and endings — all within one planetary moment.", fact:"This atlas ends at the present only to make the next questions visible.", source:"https://science.nasa.gov/earth/facts/" },
  { id:"warm-earth", year:1000000000, date:"ABOUT 1 BILLION YEARS FROM NOW", title:"A warmer Sun narrows habitability", era:"MODELED FUTURE", category:"future", visual:"future", labelScale:1500000, forecast:true, description:"Models of stellar evolution indicate that a brighter Sun will make Earth increasingly difficult for higher forms of life long before the Sun becomes a red giant.", fact:"This is a long-horizon scientific projection, not a calendar prediction.", source:"https://science.nasa.gov/exoplanets/stars/" },
  { id:"andromeda", year:4000000000, date:"AROUND 4–5 BILLION YEARS FROM NOW", title:"Andromeda’s uncertain rendezvous", era:"MODELED FUTURE", category:"future", visual:"future", labelScale:5000000, forecast:true, description:"The future interaction of the Milky Way and Andromeda is no longer treated as guaranteed. New work finds several plausible outcomes, including a close pass or a later merger.", fact:"At this distance in time, even precise observations leave multiple futures open.", source:"https://science.nasa.gov/missions/hubble/apocalypse-when-hubble-casts-doubt-on-certainty-of-galactic-collision/" },
  { id:"red-giant", year:5000000000, date:"ABOUT 5 BILLION YEARS FROM NOW", title:"The Sun becomes a red giant", era:"MODELED FUTURE", category:"future", visual:"future", labelScale:6000000, forecast:true, description:"When the Sun exhausts core hydrogen, it is expected to swell into a red giant. Mercury and Venus will be engulfed; Earth’s final fate is less certain.", fact:"Every star is a clock. The Sun is a little under halfway through its main lifetime.", source:"https://science.nasa.gov/sun/facts/" },
  { id:"cosmic-horizon", year:100000000000, date:"THE FAR COSMIC FUTURE", title:"A lonelier observable universe", era:"MODELED FUTURE", category:"future", visual:"future", labelScale:180000000, forecast:true, description:"If accelerated expansion continues, light from sufficiently distant galaxies will eventually no longer be able to reach observers in our local region.", fact:"This is a consequence of an expanding universe, not a known final ending.", source:"https://imagine.gsfc.nasa.gov/ask_astro/cosmology.html" }
];

const categoryColors = { cosmos:"#ad8bff", earth:"#78e4e6", life:"#8ce4aa", human:"#ffca78", space:"#ff9b6c", future:"#fb9abd" };
const categoryNames = { cosmos:"Cosmos", earth:"Earth", life:"Life", human:"Humanity", space:"Space age", future:"Modeled future" };
const presets = {
  all: { center:-3400000000, scale:22000000 },
  earth: { center:-2350000000, scale:5500000 },
  human: { center:0, scale:18 },
  space: { center:1990, scale:.12 },
  future: { center:2800000000, scale:6500000 }
};

const canvas = document.getElementById("timeline-canvas");
const stage = document.getElementById("timeline-stage");
const context = canvas.getContext("2d");
const range = document.getElementById("zoom-range");
const windowLabel = document.getElementById("window-label");
const scaleLabel = document.getElementById("scale-label");
const zoomLabel = document.getElementById("zoom-label");
const meterSource = document.getElementById("event-source");
const eventVisual = document.getElementById("event-visual");
const eventEra = document.getElementById("event-era");
const eventDate = document.getElementById("event-date");
const eventTitle = document.getElementById("event-title");
const eventDescription = document.getElementById("event-description");
const eventFact = document.getElementById("event-fact");
const modelNote = document.getElementById("model-note");
const eventList = document.getElementById("event-list");
const visibleCount = document.getElementById("visible-count");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let width = 0;
let height = 0;
let pixelRatio = 1;
let centerYear = presets.all.center;
let yearsPerPixel = presets.all.scale;
let selected = events[0];
let activeCategories = new Set(Object.keys(categoryColors));
let hitRegions = [];
let dragging = false;
let dragged = false;
let dragStart = null;
let stars = [];
let animationTime = 0;
let targetView = null;

function makeStars() {
  return Array.from({ length: Math.max(90, Math.min(230, Math.round(width / 5))) }, function() {
    return { x: Math.random() * width, y: Math.random() * height, size: Math.random() * 1.15 + .22, speed: Math.random() * .18 + .03, alpha: Math.random() * .55 + .15 };
  });
}

function resizeCanvas() {
  const bounds = stage.getBoundingClientRect();
  pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  width = Math.max(1, bounds.width);
  height = Math.max(1, bounds.height);
  canvas.width = Math.round(width * pixelRatio);
  canvas.height = Math.round(height * pixelRatio);
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  stars = makeStars();
  drawTimeline();
}

function yearsText(value, compact) {
  const abs = Math.abs(value);
  let amount;
  let unit;
  if (abs >= 1000000000) { amount = abs / 1000000000; unit = compact ? "B" : "billion"; }
  else if (abs >= 1000000) { amount = abs / 1000000; unit = compact ? "M" : "million"; }
  else if (abs >= 1000) { amount = abs / 1000; unit = compact ? "k" : "thousand"; }
  else { amount = Math.round(abs); unit = ""; }
  const digits = amount >= 10 || Number.isInteger(amount) ? 0 : 1;
  return amount.toFixed(digits).replace(".0", "") + (unit ? (compact ? unit : " " + unit) : "");
}

function axisLabel(year) {
  if (year <= -1000000000) return yearsText(year, true) + " YA";
  if (year <= -1000000) return yearsText(year, true) + " YA";
  if (year < -1000) return yearsText(year, true) + " BCE";
  if (year < 0) return Math.abs(Math.round(year)) + " BCE";
  if (year === 0) return "NOW";
  if (year < 10000) return Math.round(year) + " CE";
  return "+" + yearsText(year, true) + " Y";
}

function relativeLabel(year) {
  if (year === 2026) return "now";
  if (year < 0) return yearsText(year, false) + " years ago";
  return "in " + yearsText(year, false) + " years";
}

function scaleText(scale) {
  if (scale < 1) return Math.round(scale * 365) + " days / px";
  if (scale < 1000) return Math.round(scale) + " years / px";
  return yearsText(scale, true) + " years / px";
}

function niceStep(raw) {
  const power = Math.pow(10, Math.floor(Math.log10(Math.max(raw, .0001))));
  const normalized = raw / power;
  if (normalized <= 1) return power;
  if (normalized <= 2) return 2 * power;
  if (normalized <= 5) return 5 * power;
  return 10 * power;
}

function xForYear(year) {
  return width / 2 + (year - centerYear) / yearsPerPixel;
}

function yearForX(x) {
  return centerYear + (x - width / 2) * yearsPerPixel;
}

function visibleEvents() {
  const min = yearForX(-70);
  const max = yearForX(width + 70);
  return events.filter(function(event) {
    return activeCategories.has(event.category) && event.year >= min && event.year <= max;
  });
}

function drawBackground() {
  const gradient = context.createRadialGradient(width * .47, height * .48, 0, width * .47, height * .48, Math.max(width, height) * .7);
  gradient.addColorStop(0, "#141933");
  gradient.addColorStop(.55, "#080a17");
  gradient.addColorStop(1, "#04050b");
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  const drift = animationTime * .012;
  stars.forEach(function(star) {
    const y = (star.y + drift * star.speed) % height;
    context.beginPath();
    context.arc(star.x, y, star.size, 0, Math.PI * 2);
    context.fillStyle = "rgba(232, 236, 255, " + star.alpha + ")";
    context.fill();
  });
}

function drawEraBands(axisY) {
  const bands = [
    { from:-13800000000, to:-4600000000, label:"COSMOS", color:"rgba(173,139,255,.10)" },
    { from:-4600000000, to:-600000000, label:"EARTH", color:"rgba(120,228,230,.09)" },
    { from:-600000000, to:-300000, label:"LIFE", color:"rgba(140,228,170,.09)" },
    { from:-300000, to:2026, label:"HUMANITY", color:"rgba(255,202,120,.09)" },
    { from:2026, to:100000000000, label:"FUTURES", color:"rgba(251,154,189,.09)" }
  ];

  bands.forEach(function(band) {
    const left = Math.max(-10, xForYear(band.from));
    const right = Math.min(width + 10, xForYear(band.to));
    if (right <= 0 || left >= width) return;
    context.fillStyle = band.color;
    context.fillRect(left, axisY - 14, Math.max(1, right - left), 28);
    if (right - left > 78) {
      context.fillStyle = "rgba(231,231,246,.34)";
      context.font = "500 9px DM Mono";
      context.fillText(band.label, left + 8, axisY + 4);
    }
  });
}

function drawTicks(axisY) {
  const step = niceStep(yearsPerPixel * 125);
  const minorStep = step / 5;
  const minYear = yearForX(0);
  const maxYear = yearForX(width);
  const start = Math.floor(minYear / minorStep) * minorStep;

  context.textAlign = "center";
  context.font = "500 10px DM Mono";
  for (let year = start; year <= maxYear + minorStep; year += minorStep) {
    const x = xForYear(year);
    if (x < -2 || x > width + 2) continue;
    const major = Math.abs(year / step - Math.round(year / step)) < .0001;
    context.strokeStyle = major ? "rgba(230,230,255,.23)" : "rgba(230,230,255,.075)";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(x, axisY - (major ? 26 : 11));
    context.lineTo(x, axisY + (major ? 26 : 11));
    context.stroke();
    if (major && x > 30 && x < width - 30) {
      context.fillStyle = "rgba(221,220,237,.65)";
      context.fillText(axisLabel(year), x, axisY + 49);
    }
  }
}

function eventY(index, axisY) {
  const lanes = [-94, 86, -150, 143, -52, 49];
  return axisY + lanes[index % lanes.length];
}

function drawEvent(event, index, axisY, labelEnds) {
  const x = xForYear(event.year);
  const y = eventY(index, axisY);
  const color = categoryColors[event.category];
  const baseRadius = event.forecast ? 5.1 : 4.2;
  const selectedEvent = event.id === selected.id;

  context.strokeStyle = color + "88";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(x, axisY);
  context.lineTo(x, y);
  context.stroke();

  if (event.forecast) {
    context.beginPath();
    context.arc(x, y, baseRadius + 1, 0, Math.PI * 2);
    context.strokeStyle = color;
    context.lineWidth = 1.4;
    context.stroke();
  } else {
    context.beginPath();
    context.arc(x, y, baseRadius, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
  }

  if (selectedEvent) {
    context.beginPath();
    context.arc(x, y, 11 + Math.sin(animationTime * .004) * 1.4, 0, Math.PI * 2);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 1;
    context.stroke();
  }

  hitRegions.push({ x:x, y:y, radius:22, event:event });
  const canShowLabel = yearsPerPixel <= event.labelScale;
  const labelText = event.title.toUpperCase();
  const labelWidth = Math.min(152, context.measureText(labelText).width);
  const labelLeft = x - labelWidth / 2;
  const overlaps = labelEnds.some(function(end) { return labelLeft < end && labelLeft + labelWidth > end - 140; });

  if (canShowLabel && !overlaps && x > 30 && x < width - 30) {
    const above = y < axisY;
    const textY = y + (above ? -13 : 18);
    context.fillStyle = selectedEvent ? "#ffffff" : "rgba(239,238,250,.83)";
    context.font = (selectedEvent ? "500 " : "400 ") + "10px DM Mono";
    context.textAlign = "center";
    context.fillText(labelText, x, textY);
    labelEnds.push(labelLeft + labelWidth);
  }
}

function drawTimeline() {
  if (!width || !height) return;
  context.clearRect(0, 0, width, height);
  drawBackground();
  const axisY = height * .56;
  drawEraBands(axisY);
  context.strokeStyle = "rgba(240,240,255,.42)";
  context.lineWidth = 1.2;
  context.beginPath();
  context.moveTo(0, axisY);
  context.lineTo(width, axisY);
  context.stroke();
  drawTicks(axisY);

  hitRegions = [];
  const labelEnds = [];
  visibleEvents().forEach(function(event, index) {
    drawEvent(event, index, axisY, labelEnds);
  });

  const nowX = xForYear(2026);
  if (nowX > 0 && nowX < width) {
    context.strokeStyle = "rgba(255,255,255,.5)";
    context.setLineDash([3, 5]);
    context.beginPath();
    context.moveTo(nowX, 0);
    context.lineTo(nowX, height);
    context.stroke();
    context.setLineDash([]);
    context.fillStyle = "rgba(255,255,255,.72)";
    context.font = "500 9px DM Mono";
    context.textAlign = "center";
    context.fillText("NOW", nowX, axisY - 35);
  }
}

function updateWindowText() {
  const start = yearForX(0);
  const end = yearForX(width);
  windowLabel.textContent = relativeLabel(start) + "  —  " + relativeLabel(end);
  scaleLabel.textContent = "1 pixel = " + scaleText(yearsPerPixel);
  zoomLabel.textContent = scaleText(yearsPerPixel);
  const minLog = Math.log10(.03);
  const maxLog = Math.log10(1000000000);
  const progress = (maxLog - Math.log10(yearsPerPixel)) / (maxLog - minLog);
  range.value = Math.round(Math.max(0, Math.min(1, progress)) * 1000);
}

function renderPanel(event) {
  selected = event;
  eventEra.textContent = event.era;
  eventDate.textContent = event.date;
  eventTitle.textContent = event.title;
  eventDescription.textContent = event.description;
  eventFact.textContent = event.fact;
  meterSource.href = event.source;
  meterSource.textContent = event.category === "future" ? "Open model context ↗" : "Open scientific reference ↗";
  modelNote.hidden = !event.forecast;
  eventVisual.className = "event-visual visual-" + event.visual;
  renderVisibleList();
  drawTimeline();
}

function renderVisibleList() {
  const list = visibleEvents();
  visibleCount.textContent = list.length;
  eventList.replaceChildren();
  const ranked = list.slice().sort(function(a, b) { return Math.abs(a.year - centerYear) - Math.abs(b.year - centerYear); }).slice(0, 10);
  if (!ranked.length) {
    const empty = document.createElement("p");
    empty.className = "empty-list";
    empty.textContent = "No selected categories in this window.";
    eventList.append(empty);
    return;
  }
  ranked.forEach(function(event) {
    const button = document.createElement("button");
    button.type = "button";
    if (event.id === selected.id) button.classList.add("is-selected");
    const time = document.createElement("time");
    time.textContent = event.date;
    const title = document.createElement("span");
    title.textContent = event.title;
    button.append(time, title);
    button.addEventListener("click", function() {
      flyTo(event.year, Math.min(yearsPerPixel, event.labelScale * .55));
      renderPanel(event);
    });
    eventList.append(button);
  });
}

function clampScale(value) {
  return Math.max(.03, Math.min(1000000000, value));
}

function zoomAt(factor, x) {
  const anchor = yearForX(x);
  yearsPerPixel = clampScale(yearsPerPixel * factor);
  centerYear = anchor - (x - width / 2) * yearsPerPixel;
  updateWindowText();
  renderVisibleList();
  drawTimeline();
}

function flyTo(center, scale) {
  const startCenter = centerYear;
  const startScale = yearsPerPixel;
  const targetCenter = center;
  const targetScale = clampScale(scale);
  const startTime = performance.now();
  targetView = { startTime:startTime, startCenter:startCenter, startScale:startScale, targetCenter:targetCenter, targetScale:targetScale };
}

function stepFly(time) {
  if (!targetView) return;
  const elapsed = Math.min(1, (time - targetView.startTime) / 560);
  const ease = 1 - Math.pow(1 - elapsed, 3);
  centerYear = targetView.startCenter + (targetView.targetCenter - targetView.startCenter) * ease;
  const logScale = Math.log(targetView.startScale) + (Math.log(targetView.targetScale) - Math.log(targetView.startScale)) * ease;
  yearsPerPixel = Math.exp(logScale);
  updateWindowText();
  renderVisibleList();
  if (elapsed >= 1) targetView = null;
}

function pointerPosition(event) {
  const rect = canvas.getBoundingClientRect();
  return { x:event.clientX - rect.left, y:event.clientY - rect.top };
}

function nearestEvent(x, y) {
  let nearest = null;
  let best = Infinity;
  hitRegions.forEach(function(region) {
    const distance = Math.hypot(region.x - x, region.y - y);
    if (distance < region.radius && distance < best) { best = distance; nearest = region.event; }
  });
  return nearest;
}

canvas.addEventListener("wheel", function(event) {
  event.preventDefault();
  zoomAt(event.deltaY > 0 ? 1.25 : .8, pointerPosition(event).x);
}, { passive:false });

canvas.addEventListener("pointerdown", function(event) {
  const point = pointerPosition(event);
  targetView = null;
  dragging = true;
  dragged = false;
  dragStart = { x:point.x, center:centerYear };
  canvas.setPointerCapture(event.pointerId);
  canvas.classList.add("is-dragging");
});

canvas.addEventListener("pointermove", function(event) {
  const point = pointerPosition(event);
  if (dragging && dragStart) {
    const offset = point.x - dragStart.x;
    if (Math.abs(offset) > 3) dragged = true;
    centerYear = dragStart.center - offset * yearsPerPixel;
    updateWindowText();
    renderVisibleList();
    drawTimeline();
  } else {
    canvas.style.cursor = nearestEvent(point.x, point.y) ? "pointer" : "grab";
  }
});

canvas.addEventListener("pointerup", function(event) {
  const point = pointerPosition(event);
  if (!dragged) {
    const eventAtPoint = nearestEvent(point.x, point.y);
    if (eventAtPoint) renderPanel(eventAtPoint);
  }
  dragging = false;
  dragStart = null;
  canvas.classList.remove("is-dragging");
});

canvas.addEventListener("keydown", function(event) {
  if (event.key === "+" || event.key === "=") { event.preventDefault(); zoomAt(.72, width / 2); }
  if (event.key === "-" || event.key === "_") { event.preventDefault(); zoomAt(1.38, width / 2); }
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    const direction = event.key === "ArrowLeft" ? -1 : 1;
    centerYear += direction * width * yearsPerPixel * .24;
    updateWindowText();
    renderVisibleList();
    drawTimeline();
  }
});

document.getElementById("zoom-in").addEventListener("click", function() { zoomAt(.72, width / 2); });
document.getElementById("zoom-out").addEventListener("click", function() { zoomAt(1.38, width / 2); });
document.getElementById("reset-view").addEventListener("click", function() { setPreset("all"); });
document.querySelector(".brand").addEventListener("click", function(event) { event.preventDefault(); setPreset("all"); });

range.addEventListener("input", function() {
  const minLog = Math.log10(.03);
  const maxLog = Math.log10(1000000000);
  const percent = Number(range.value) / 1000;
  yearsPerPixel = Math.pow(10, maxLog - percent * (maxLog - minLog));
  updateWindowText();
  renderVisibleList();
  drawTimeline();
});

function setPreset(name) {
  const preset = presets[name];
  document.querySelectorAll(".preset").forEach(function(button) {
    button.classList.toggle("is-active", button.dataset.preset === name);
  });
  flyTo(preset.center, preset.scale);
}

document.querySelectorAll(".preset").forEach(function(button) {
  button.addEventListener("click", function() { setPreset(button.dataset.preset); });
});

document.querySelectorAll(".filter").forEach(function(button) {
  button.addEventListener("click", function() {
    const category = button.dataset.category;
    if (activeCategories.has(category)) activeCategories.delete(category); else activeCategories.add(category);
    button.classList.toggle("is-on", activeCategories.has(category));
    button.setAttribute("aria-pressed", String(activeCategories.has(category)));
    renderVisibleList();
    drawTimeline();
  });
});

const sources = document.getElementById("sources");
document.getElementById("sources-button").addEventListener("click", function(event) {
  event.preventDefault();
  sources.showModal();
});
document.getElementById("close-sources").addEventListener("click", function() { sources.close(); });
sources.addEventListener("click", function(event) {
  if (event.target === sources) sources.close();
});

function animationFrame(time) {
  animationTime = time;
  stepFly(time);
  drawTimeline();
  if (!reducedMotion.matches) requestAnimationFrame(animationFrame);
}

window.addEventListener("resize", resizeCanvas, { passive:true });
resizeCanvas();
updateWindowText();
renderPanel(selected);
if (!reducedMotion.matches) requestAnimationFrame(animationFrame);