export interface Nominal {
  label: string;
  price: number;
}

export interface Game {
  slug: string;
  name: string;
  range: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  logoStyle?: "contain" | "fill";
  nominals: Nominal[];
}

export const GAMES: Game[] = [
  {
    slug: "pubg-mobile",
    name: "PUBG Mobile",
    range: "UC 60 – 8100",
    logo: "/images/2152abaf-2c67-44a4-aa81-b8cfee21fb8c.png",
    logoWidth: 512,
    logoHeight: 380,
    nominals: [
      { label: "60 UC", price: 15000 },
      { label: "120 UC", price: 28000 },
      { label: "180 UC", price: 42000 },
      { label: "325 UC", price: 75000 },
      { label: "660 UC", price: 149000 },
      { label: "985 UC", price: 219000 },
      { label: "1800 UC", price: 389000 },
      { label: "3850 UC", price: 799000 },
      { label: "8100 UC", price: 1599000 },
    ],
  },
  {
    slug: "mobile-legends",
    name: "Mobile Legends",
    range: "Diamond 5 – 5000",
    logo: "/images/mlbb.svg",
    logoWidth: 120,
    logoHeight: 120,
    logoStyle: "fill",
    nominals: [
      { label: "5 Diamond", price: 1500 },
      { label: "12 Diamond", price: 3300 },
      { label: "28 Diamond", price: 7500 },
      { label: "86 Diamond", price: 21000 },
      { label: "172 Diamond", price: 41000 },
      { label: "257 Diamond", price: 62000 },
      { label: "706 Diamond", price: 168000 },
      { label: "1412 Diamond", price: 332000 },
      { label: "5000 Diamond", price: 1150000 },
    ],
  },
  {
    slug: "free-fire",
    name: "Free Fire",
    range: "Diamond 5 – 7290",
    logo: "/images/8b9500ef-e94d-484d-b247-3f975ef0f35a.png",
    logoWidth: 616,
    logoHeight: 90,
    logoStyle: "fill",
    nominals: [
      { label: "5 Diamond", price: 1600 },
      { label: "12 Diamond", price: 3400 },
      { label: "50 Diamond", price: 7300 },
      { label: "70 Diamond", price: 10000 },
      { label: "140 Diamond", price: 19500 },
      { label: "355 Diamond", price: 48000 },
      { label: "720 Diamond", price: 95000 },
      { label: "1450 Diamond", price: 188000 },
      { label: "7290 Diamond", price: 920000 },
    ],
  },
  {
    slug: "magic-chess-go-go",
    name: "Magic Chess Go Go",
    range: "Diamond & Pass",
    logo: "/images/9a74910c-df0a-435b-a592-ab4be4fe33ac.png",
    logoWidth: 154,
    logoHeight: 62,
    logoStyle: "fill",
    nominals: [
      { label: "5 Diamond", price: 1500 },
      { label: "12 Diamond", price: 3300 },
      { label: "28 Diamond", price: 7500 },
      { label: "86 Diamond", price: 21000 },
      { label: "172 Diamond", price: 41000 },
      { label: "257 Diamond", price: 62000 },
      { label: "706 Diamond", price: 168000 },
      { label: "1412 Diamond", price: 332000 },
      { label: "Magic Pass", price: 49000 },
    ],
  },
  {
    slug: "call-of-duty-mobile",
    name: "Call of Duty: Mobile",
    range: "CP 80 – 10800",
    logo: "/images/5b821f40-5788-45dc-84c4-c4f4433e7314.webp",
    logoWidth: 445,
    logoHeight: 227,
    logoStyle: "fill",
    nominals: [
      { label: "80 CP", price: 15000 },
      { label: "160 CP", price: 29000 },
      { label: "420 CP", price: 72000 },
      { label: "880 CP", price: 149000 },
      { label: "1760 CP", price: 289000 },
      { label: "2400 CP", price: 389000 },
      { label: "5000 CP", price: 789000 },
      { label: "8000 CP", price: 1249000 },
      { label: "10800 CP", price: 1649000 },
    ],
  },
];

export function getGame(slug: string): Game | undefined {
  return GAMES.find((g) => g.slug === slug);
}
