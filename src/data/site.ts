export type Dish = {
  name: string;
  detail: string;
  price: string;
  note?: string;
};

export type Course = {
  title: string;
  dishes: Dish[];
};

export const menuCourses: Course[] = [
  {
    title: "Durian Signatures",
    dishes: [
      {
        name: "Durian Mousse",
        detail:
          "Our icon since 2008 — silky chilled mousse crowned with real D24 pulp.",
        price: "S$7.80",
        note: "Bestseller",
      },
      {
        name: "Durian Mousse Double Shot",
        detail: "Twice the D24 pulp for the truly devoted.",
        price: "S$8.90",
      },
      {
        name: "Durian Snow Mountain",
        detail: "Durian mousse over vanilla ice cream on shaved ice.",
        price: "S$8.70",
      },
      {
        name: "Durian with Glutinous Rice",
        detail: "Classic pairing — fragrant durian pulp, chewy glutinous rice.",
        price: "S$8.30",
      },
      {
        name: "Durian Crepe",
        detail: "Delicate crepe wrapped around durian cream.",
        price: "S$8.40",
      },
      {
        name: "MSW Mochi",
        detail: "Mao Shan Wang in a chewy mochi skin. Our premium bite.",
        price: "S$16.60",
        note: "Premium",
      },
    ],
  },
  {
    title: "Mango, Fruit & Cold",
    dishes: [
      {
        name: "Mango Pomelo (杨枝甘露)",
        detail:
          "Hong Kong-style — fresh mango, pomelo sacs, sago pearls, coconut milk.",
        price: "S$7.30",
        note: "Bestseller",
      },
      {
        name: "Aiyu Mango",
        detail: "Silky aiyu jelly with ripe mango.",
        price: "S$7.30",
      },
      {
        name: "Jackfruit Sago",
        detail: "Fragrant jackfruit with chewy sago in coconut milk.",
        price: "S$7.30",
      },
      {
        name: "Mango Snow Mountain",
        detail: "Shaved ice mountain with mango and condensed milk.",
        price: "S$7.50",
      },
      {
        name: "Black Glutinous Rice with Coconut Ice Cream",
        detail: "Chewy black glutinous rice, a scoop of coconut ice cream.",
        price: "S$6.70",
        note: "Regulars' favourite",
      },
      {
        name: "Strawberry Snow Mountain",
        detail: "Shaved ice with strawberries and condensed milk.",
        price: "S$7.50",
      },
      {
        name: "Lychee Ice / Longan Ice",
        detail: "Ice-cold, light, and refreshing.",
        price: "S$6.30",
      },
    ],
  },
  {
    title: "Hot Tong Sui",
    dishes: [
      {
        name: "Snow Pear White Fungus",
        detail: "Nourishing and gently sweet. Served hot or cold.",
        price: "S$6.70",
      },
      {
        name: "Red Date Longan White Fungus",
        detail: "A traditional restorative, slow-simmered.",
        price: "S$6.20",
      },
      {
        name: "Bean-Curd Gingko Barley Soup",
        detail: "Silky bean curd with gingko nuts and barley.",
        price: "S$6.00",
      },
      {
        name: "Glutinous Rice Balls in Ginger Soup",
        detail: "Black sesame, peanut, or mixed — in warming ginger soup.",
        price: "S$6.20",
        note: "Comfort classic",
      },
      {
        name: "Black Glutinous Rice",
        detail: "Slow-cooked, served warm with coconut milk.",
        price: "S$6.00",
      },
      {
        name: "Green Bean Soup",
        detail: "Light, clean, and cooling.",
        price: "S$6.00",
      },
    ],
  },
  {
    title: "Crepes & Tarts",
    dishes: [
      {
        name: "Mango / Strawberry / Red Bean / Taro / Apple Crepe",
        detail: "Hand-made crepes with generous fillings.",
        price: "S$7.80",
      },
      {
        name: "Mini Durian Tart (6 pcs)",
        detail: "Bite-sized tarts with real durian filling.",
        price: "S$7.80",
      },
      {
        name: "Mini Taro Tart",
        detail: "Smooth taro in a buttery shell.",
        price: "S$7.80",
      },
      {
        name: "Mini Yuenyeung Tart (3x Durian & 3x Taro)",
        detail: "Can't decide? Have both.",
        price: "S$7.80",
      },
      {
        name: "Durian Coco Jelly",
        detail: "Wobbly coconut jelly with durian.",
        price: "S$10.50",
      },
      {
        name: "Caramel Pudding Coco",
        detail: "Silky caramel pudding on coconut.",
        price: "S$9.40",
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Just a few simple, top quality ingredients and you've got the best of both worlds — real durian fruit and an icy-sweet indulgence in one glorious bowl.",
    name: "CNA Lifestyle",
    detail: "Best eats, Serangoon Gardens",
  },
  {
    quote:
      "Super rich and such a generous portion of durian — it makes you crave more than one bowl because it's that good!",
    name: "TheAugustHearts",
    detail: "Food blog",
  },
  {
    quote:
      "They've been making their signature durian mousse since 2008 and you can definitely taste the experience in their desserts.",
    name: "Family regular",
    detail: "via Lemon8",
  },
];

export const faqs = [
  {
    question: "Do I need to queue?",
    answer:
      "On weekend evenings there can be a wait — scan the QR code downstairs for a queue number when you arrive. Weekday afternoons are usually calm.",
  },
  {
    question: "How do I order and pay?",
    answer:
      "Order and pay first via QR at your table, and your desserts will be served to you. It's quick and cashless.",
  },
  {
    question: "Is there a dining time limit?",
    answer:
      "During peak weekend periods we may ask tables to finish within about 45 minutes so everyone gets their dessert fix.",
  },
  {
    question: "Do you do takeaway or delivery?",
    answer:
      "Yes — takeaway is available in-store, and you can also find us on GrabFood for delivery.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're on the second floor at 80A Serangoon Garden Way, Singapore 555976 — look for the shophouse stairs.",
  },
];

export const stats = [
  { value: "2008", label: "Serving durian mousse since" },
  { value: "4.5★", label: "Google rating" },
  { value: "1,300+", label: "Happy reviews" },
  { value: "11:30pm", label: "Open late on weekends" },
];

export const openingHours = [
  { days: "Tuesday – Thursday", hours: "3:00pm – 5:30pm, 6:15pm – 10:30pm" },
  { days: "Friday", hours: "3:00pm – 5:30pm, 6:15pm – 11:30pm" },
  { days: "Saturday – Sunday", hours: "2:00pm – 5:30pm, 6:15pm – 11:30pm" },
  { days: "Monday", hours: "Closed" },
];
