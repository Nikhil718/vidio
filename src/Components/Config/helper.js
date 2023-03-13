export const calculateViews = (views) => {
  try {
    if (views < 1000) return views;
    if (views > 999 && views < 1000000) {
      return (views / 1000).toPrecision(3) + "K";
    }
    if (views > 999999 && views < 100000000) {
      return (views / 1000000).toPrecision(3) + "M";
    }
    return (views / 10000000).toPrecision(3) + "B";
  } catch {
    return null;
  }
};

export function timeAgo(value) {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(value).getTime()) / 1000
  );
  let interval = seconds / 31536000;
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  if (interval > 1) {
    return rtf.format(-Math.floor(interval), "year");
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return rtf.format(-Math.floor(interval), "month");
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return rtf.format(-Math.floor(interval), "day");
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return rtf.format(-Math.floor(interval), "hour");
  }
  interval = seconds / 60;
  if (interval > 1) {
    return rtf.format(-Math.floor(interval), "minute");
  }
  return rtf.format(-Math.floor(interval), "second");
}

var nameList = [
  "Emily",
  "Hannah",
  "Madison",
  "Ashley",
  "Sarah",
  "Alexis",
  "Samantha",
  "Jessica",
  "Elizabeth",
  "Taylor",
  "Lauren",
  "Alyssa",
  "Kayla",
  "Abigail",
  "Brianna",
  "Olivia",
  "Emma",
  "Megan",
  "Grace",
  "Victoria",
  "Rachel",
  "Anna",
  "Sydney",
  "Destiny",
  "Morgan",
  "Jennifer",
  "Jasmine",
  "Haley",
  "Julia",
  "Kaitlyn",
  "Nicole",
  "Amanda",
  "Katherine",
  "Natalie",
  "Hailey",
  "Alexandra",
  "Savannah",
  "Chloe",
  "Rebecca",
  "Stephanie",
  "Maria",
  "Sophia",
  "Mackenzie",
  "Allison",
  "Isabella",
  "Amber",
  "Mary",
  "Danielle",
  "Gabrielle",
  "Jordan",
  "Brooke",
  "Michelle",
  "Sierra",
  "Katelyn",
  "Andrea",
  "Madeline",
  "Sara",
  "Kimberly",
  "Courtney",
  "Erin",
  "Brittany",
  "Vanessa",
  "Jenna",
  "Jacqueline",
  "Caroline",
  "Faith",
  "Makayla",
  "Bailey",
  "Paige",
  "Shelby",
  "Melissa",
  "Kaylee",
  "Christina",
  "Trinity",
  "Mariah",
  "Caitlin",
  "Autumn",
  "Marissa",
  "Breanna",
  "Angela",
  "Catherine",
  "Zoe",
  "Briana",
  "Jada",
  "Laura",
  "Claire",
  "Alexa",
  "Kelsey",
  "Kathryn",
  "Leslie",
  "Alexandria",
  "Sabrina",
  "Mia",
  "Isabel",
  "Molly",
  "Leah",
  "Katie",
  "Gabriella",
  "Cheyenne",
  "Cassandra",
  "Tiffany",
  "Erica",
  "Lindsey",
  "Kylie",
  "Amy",
  "Diana",
  "Cassidy",
  "Mikayla",
  "Ariana",
  "Margaret",
  "Kelly",
  "Miranda",
  "Maya",
  "Melanie",
  "Audrey",
  "Jade",
  "Gabriela",
  "Caitlyn",
  "Angel",
  "Jillian",
  "Alicia",
  "Jocelyn",
  "Erika",
  "Lily",
  "Heather",
  "Madelyn",
  "Adriana",
  "Arianna",
  "Lillian",
  "Kiara",
  "Riley",
  "Crystal",
  "Mckenzie",
  "Meghan",
  "Skylar",
  "Ana",
  "Britney",
  "Angelica",
  "Kennedy",
  "Chelsea",
  "Daisy",
  "Kristen",
  "Veronica",
  "Isabelle",
  "Summer",
  "Hope",
  "Brittney",
  "Lydia",
  "Hayley",
  "Evelyn",
  "Bethany",
  "Shannon",
  "Michaela",
  "Karen",
  "Jamie",
  "Daniela",
  "Angelina",
  "Kaitlin",
  "Karina",
  "Sophie",
  "Sofia",
  "Diamond",
  "Payton",
  "Cynthia",
  "Alexia",
  "Valerie",
  "Monica",
  "Peyton",
  "Carly",
  "Bianca",
  "Hanna",
  "Brenda",
  "Rebekah",
  "Alejandra",
  "Mya",
  "Avery",
  "Brooklyn",
  "Ashlyn",
  "Lindsay",
  "Ava",
  "Desiree",
  "Alondra",
  "Camryn",
  "Ariel",
  "Naomi",
  "Jordyn",
  "Kendra",
  "Mckenna",
  "Holly",
  "Julie",
  "Kendall",
  "Kara",
  "Jasmin",
  "Selena",
  "Esmeralda",
  "Amaya",
  "Kylee",
  "Maggie",
  "Makenzie",
  "Claudia",
  "Kyra",
  "Cameron",
  "Karla",
  "Kathleen",
  "Abby",
  "Delaney",
  "Amelia",
  "Casey",
];
export function generateName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

var verbs, nouns, adjectives, adverbs, emoji;
nouns = [
  "bird",
  "clock",
  "boy",
  "plastic",
  "duck",
  "teacher",
  "old lady",
  "professor",
  "hamster",
  "dog",
];
verbs = [
  "kicked",
  "ran",
  "flew",
  "dodged",
  "sliced",
  "rolled",
  "died",
  "breathed",
  "slept",
  "killed",
];
adjectives = [
  "beautiful",
  "lazy",
  "professional",
  "lovely",
  "dumb",
  "rough",
  "soft",
  "hot",
  "vibrating",
  "slimy",
];
adverbs = [
  "slowly",
  "elegantly",
  "precisely",
  "quickly",
  "sadly",
  "humbly",
  "proudly",
  "shockingly",
  "calmly",
  "passionately",
];

emoji = ["😀", "😁", "😂", "😉", "😇"];

export function sentenceGenerate() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 7);
  var rand6 = Math.floor(Math.random() * 10);

  return (
    "The " +
    adjectives[rand1] +
    " " +
    nouns[rand2] +
    " " +
    adverbs[rand3] +
    " " +
    verbs[rand4] +
    nouns[rand6] +
    " " +
    emoji[rand5]
  );
}
