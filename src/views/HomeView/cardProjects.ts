interface ProjectInfo {
  id: string;
  image: string;
  title: string;
  description: string;
  area: string;
  features: string[];
  imageAlt: string;
  detailedDescription: string;
  year: string;
  location: string;
  materials: string;
  galleryImages: string[];
}

export const projects: ProjectInfo[] = [
  {
    id: "nowoczesny-dom",
    image: "HomePreview.jpeg",
    title: "Nowoczesny Dom Jednorodzinny",
    description: "Kompleksowa realizacja domu parterowego z poddaszem użytkowym. Wykonanie w technologii murowanej z elewacją z drewna i kamienia.",
    area: "145",
    features: ["3 sypialnie", "2 łazienki", "garaż dwustanowiskowy", "taras z widokiem"],
    imageAlt: "Nowoczesny dom jednorodzinny z tarasem",
    detailedDescription: "Nowoczesny dom jednorodzinny zaprojektowany z myślą o funkcjonalności i estetyce. Parter mieści przestronny salon połączony z jadalnią i kuchnią w układzie otwartym, gabinet oraz łazienkę. Na poddaszu umieszczono trzy sypialnie, w tym główną z prywatną garderobą i łazienką. Elewacja łączy elementy drewna i kamienia, nadając budynkowi nowoczesny, a zarazem przytulny charakter.",
    year: "2023",
    location: "Warszawa",
    materials: "Beton, drewno, kamień naturalny, szkło",
    galleryImages: [
      "HomePreview.jpeg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  },
  {
    id: "dom-dworkowy",
    image: "HomePreview.jpeg",
    title: "Dom w Stylu Dworkowym",
    description: "Pełna realizacja domu w stylu dworkowym z podcieniem i charakterystycznym dachem czterospadowym.",
    area: "210",
    features: ["4 sypialnie", "salon z kominkiem", "ogród zimowy", "podcień wejściowy"],
    imageAlt: "Elegancki dom w stylu dworkowym z podcieniem",
    detailedDescription: "Elegancki dom w stylu dworkowym nawiązujący do polskiej tradycji architektonicznej. Wyróżnia się symetryczną fasadą, kolumnowym podcieniem przy wejściu oraz charakterystycznym dachem czterospadowym. Wnętrze łączy tradycyjne elementy z nowoczesnym komfortem. Przestronny salon z kominkiem stanowi serce domu. Cztery sypialnie oraz trzy łazienki zapewniają komfort dużej rodzinie. Dopełnieniem jest ogród zimowy i taras z widokiem na zadbany ogród.",
    year: "2022",
    location: "Kraków",
    materials: "Cegła, drewno, kamień, dachówka ceramiczna",
    galleryImages: [
      "HomePreview.jpeg",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  },
  {
    id: "dom-pasywny",
    image: "HomePreview.jpeg",
    title: "Dom Pasywny",
    description: "Innowacyjna realizacja domu energooszczędnego klasy A+ z rekuperacją i panelami fotowoltaicznymi.",
    area: "160",
    features: ["3 sypialnie", "pompa ciepła", "wentylacja mechaniczna", "panele fotowoltaiczne"],
    imageAlt: "Nowoczesny dom pasywny z dużymi przeszkleniami",
    detailedDescription: "Innowacyjny projekt domu pasywnego zapewniający minimalne zużycie energii. Budynek charakteryzuje się doskonałą izolacją termiczną, zastosowaniem potrójnie szklonych okien oraz systemem rekuperacji ciepła. Instalacja fotowoltaiczna o mocy 9,8 kW w połączeniu z pompą ciepła pozwala na niemal całkowitą niezależność energetyczną. Wentylacja mechaniczna z odzyskiem ciepła zapewnia komfort termiczny i wysoką jakość powietrza przez cały rok.",
    year: "2023",
    location: "Wrocław",
    materials: "Beton, szkło, izolacja wysokiej gęstości, materiały ekologiczne",
    galleryImages: [
      "HomePreview.jpeg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  },
  {
    id: "dom-z-poddaszem",
    image: "HomePreview.jpeg",
    title: "Dom z Poddaszem",
    description: "Kompleksowa budowa domu z przestronnym poddaszem użytkowym i antresolą łączącą kondygnacje.",
    area: "185",
    features: ["Sypialnia główna z garderobą", "otwarta kuchnia", "antresola", "taras na dachu"],
    imageAlt: "Dom z poddaszem użytkowym i antresolą",
    detailedDescription: "Dom z efektownym poddaszem użytkowym i antresolą, która optycznie zwiększa przestrzeń i pozwala na przenikanie światła przez obie kondygnacje. Parter zawiera strefę dzienną z otwartą kuchnią, jadalnią i salonem o podwójnej wysokości. Poddasze mieści część prywatną z trzema sypialniami, w tym główną z garderobą i prywatną łazienką. Dodatkowo na poddaszu znajduje się pokój rekreacyjny z wyjściem na częściowo zadaszony taras na dachu.",
    year: "2022",
    location: "Poznań",
    materials: "Drewno, szkło, stal, płyty betonowe",
    galleryImages: [
      "HomePreview.jpeg",
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ]
  },
  {
    id: "dom-na-trudnej-dzialce",
    image: "HomePreview.jpeg",
    title: "Dom na Trudnej Działce",
    description: "Specjalistyczna realizacja budynku na działce ze spadkiem terenu z tarasami wielopoziomowymi.",
    area: "175",
    features: ["Taras widokowy", "niestandardowa konstrukcja", "przeszklenia panoramiczne", "patio"],
    imageAlt: "Dom na skarpie z tarasami na różnych poziomach",
    detailedDescription: "Unikatowy projekt dostosowany do trudnych warunków terenowych działki ze znacznym spadkiem. Budynek został zaprojektowany kaskadowo, z pomieszczeniami rozmieszczonymi na różnych poziomach, co pozwoliło wykorzystać naturalne ukształtowanie terenu. Wielopoziomowe tarasy oferują zapierające dech w piersiach widoki na okolicę. Konstrukcja oparta na żelbetowych słupach i stalowych elementach nośnych zapewnia stabilność całego obiektu, mimo trudnych warunków gruntowych.",
    year: "2023",
    location: "Gdynia",
    materials: "Beton architektoniczny, stal, szkło hartowane, drewno egzotyczne",
    galleryImages: [
      "HomePreview.jpeg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]
  }
];