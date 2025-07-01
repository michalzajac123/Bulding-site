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
    image: "Home1/ReadyHome4.jpeg",
    title: "Nowoczesny Dom Jednorodzinny",
    description:
      "Dom jednorodzinny z tarasem nad wiatą garażową W ramach tej inwestycji wykonaliśmy kompleksową budowę nowoczesnego domu jednorodzinnego o powierzchni około 200 m². Prace prowadziliśmy od podstaw – począwszy od robót ziemnych, przez wykonanie fundamentów, aż po dach. Budynek wyróżnia się przemyślaną bryłą oraz funkcjonalnym układem, w tym dużą wiatą garażową, nad którą znajduje się przestronny taras",
    area: "200",
    features: ["wiata z garażem", "funkcjonalny układ", "taras z widokiem"],
    imageAlt: "Nowoczesny dom jednorodzinny z tarasem",
    detailedDescription:
      "Pierwszym etapem była realizacja fundamentów – na zdjęciach można zobaczyć solidne zbrojenia i przygotowanie ław fundamentowych, które stanowią bazę dla całej konstrukcji. Następnie przeszliśmy do wznoszenia ścian nośnych oraz wykonania stropu – na tym etapie budynek zaczął nabierać realnych kształtów, a jego układ funkcjonalny stawał się coraz bardziej widoczny. Kolejnym charakterystycznym elementem była konstrukcja wiaty garażowej, nad którą zaprojektowano taras. Została ona wykonana jako żelbetowa płyta nośna, co zapewnia jej trwałość oraz możliwość użytkowania przestrzeni powyżej jako dodatkowej strefy wypoczynku. Po zakończeniu prac murarskich przystąpiliśmy do wykonania dachu – na zdjęciach widać montaż więźby dachowej oraz pokrycia, które stanowi finalne zwieńczenie całej inwestycji. Zastosowane materiały zapewniają wysoką trwałość oraz estetykę, dopasowaną do nowoczesnego stylu budynku. Na końcowych zdjęciach prezentujemy gotowy dom z zewnątrz – z wyraźnie zaznaczoną wiatą i tarasem, stanowiącymi ważny element architektoniczny. Całość to efekt ścisłej współpracy z inwestorem i starannej realizacji każdego etapu budowy.",
    year: "2024",
    location: "Bochnia",
    materials: "Beton, drewno, kamień naturalny, szkło",
    galleryImages: [
      "Home1/Foundation1.jpeg",
      "Home1/Foundation2.jpeg",
      "Home1/WallConstruction.jpeg",
      "Home1/ReadyHome1.jpeg",
      "Home1/ReadyHome2.jpeg",
      "Home1/ReadyHome3.jpeg",
      "Home1/ReadyHome4.jpeg",
    ],
  },
  {
    id: "dom-jednorodzinny",
    image: "Home2/WallConstruction1.jpeg",
    title: "Dom Jednorodzinny",
    description:
      "Nowoczesny dom jednorodzinny w miejscowości Bębło Prezentujemy jedną z naszych ostatnich realizacji – budowę nowoczesnego domu jednorodzinnego o powierzchni około 300 m², zlokalizowanego w miejscowości Bębło. Projekt wyróżnia się nowoczesną formą oraz wyjątkową ścianą szczytową wykonaną w całości ze szkła, która nadaje budynkowi lekkości i otwiera wnętrze na otaczającą przyrodę.",
    area: "300",
    features: [
      "Garaż z wiatą",
      "Taras z widokiem",
      "ogród zimowy",
      "podcień wejściowy",
    ],
    imageAlt: "Elegancki dom w stylu dworkowym z podcieniem",
    detailedDescription:
      "Zakres naszych prac objął kompleksowe wykonanie inwestycji – od fundamentów, przez stan surowy otwarty i zamknięty, aż po dach. Już na etapie robót ziemnych i fundamentowych zadbaliśmy o solidną bazę pod dużą i wymagającą konstrukcję. W kolejnych etapach wznosiliśmy ściany nośne i działowe, montowaliśmy stropy i przygotowaliśmy konstrukcję pod wyjątkowy element tej inwestycji – dużą przeszkloną ścianę szczytową, która stała się głównym akcentem elewacyjnym budynku. Na zdjęciach można zobaczyć, jak stopniowo nabierała ona kształtu – od surowej konstrukcji po gotową formę z dużymi przeszkleniami, wpuszczającymi do wnętrza naturalne światło. Równolegle realizowaliśmy konstrukcję dachu, który ze względu na powierzchnię i charakter budynku wymagał starannego zaprojektowania i precyzyjnego wykonania. Dzięki zastosowaniu odpowiednich materiałów i dokładności naszych ekip, finalny efekt łączy trwałość z nowoczesnym wyglądem. Na końcowych zdjęciach można zobaczyć gotowy budynek w pełnej okazałości – z dominującym przeszkleniem ściany szczytowej, elegancką formą i wykończeniem, które idealnie wpisuje się w otaczający krajobraz. To inwestycja, która łączy estetykę z funkcjonalnością, i z której jesteśmy szczególnie dumni.",
    year: "2024",
    location: "Bębło",
    materials: "Cegła, drewno, kamień, dachówka ceramiczna",
    galleryImages: [
      "Home2/WallConstruction1.jpeg",
      "Home2/WallConstruction2.jpeg",
    ],
  },
  {
    id: "dom-dworkowy",
    image: "Home3/FrontWall.jpeg",
    title: "Dom w stylu dworkowym",
    description:
      "W ramach tej realizacji mieliśmy przyjemność wybudować elegancki dom jednorodzinny w klasycznym stylu dworkowym. Budynek o reprezentacyjnym charakterze i powierzchni użytkowej blisko 250 m² łączy tradycyjną architekturę z nowoczesnymi rozwiązaniami technologicznymi.",
    area: "250",
    features: [
      "3 sypialnie",
      "pompa ciepła",
      "wentylacja mechaniczna",
      "panele fotowoltaiczne",
    ],
    imageAlt: "Nowoczesny dom pasywny z dużymi przeszkleniami",
    detailedDescription: `Nasze prace rozpoczęliśmy od wykonania fundamentów – precyzyjnie przygotowanych pod konstrukcję o symetrycznej bryle i charakterystycznym, centralnym wejściu z kolumnowym gankiem. Już na tym etapie szczególną uwagę zwracaliśmy na detale i proporcje, które są kluczowe w architekturze dworkowej.

    W dalszej części budowy wznosiliśmy mury nośne i działowe, przygotowując budynek pod tradycyjny, czterospadowy dach z lukarnami, które podkreślają klasyczny styl inwestycji. Na zdjęciach widać etapy montażu więźby dachowej oraz pokrycia – wybraliśmy wysokiej jakości materiały dachowe, które nie tylko zapewniają trwałość, ale też wpisują się w estetykę dworku.

    Charakterystycznym elementem realizacji jest ganek wejściowy wsparty na ozdobnych kolumnach oraz stylowe wykończenia elewacji – gzymsy, opaski okienne i subtelne detale, które oddają ducha tradycyjnego polskiego dworku.
    Efekt końcowy to elegancki, ponadczasowy budynek, który zachwyca klasyczną formą, a jednocześnie spełnia wszystkie współczesne wymagania użytkowe. To inwestycja, która pokazuje, że tradycja i nowoczesność mogą iść w parze – z dużym sukcesem`,
    year: "2023",
    location: "Uszew",
    materials: "Beton, szkło, izolacja wysokiej gęstości, dachówka ceramiczna",
    galleryImages: ["Home3/FrontWall.jpeg", "Home3/BigWindow.jpeg"],
  },
];
