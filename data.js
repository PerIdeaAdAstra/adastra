const NODES = {
  "viajes-tiempo": {
    id: "viajes-tiempo",
    label: "Viajes en el tiempo",
    desc: "La capacidad de moverse a través del tiempo, hacia el pasado o el futuro. Una de las ideas más fértiles y perturbadoras de la CF.",
    connections: ["paradojas-temporales","mensajes-futuro","vidas-anteriores","universos-paralelos","memoria"],
    works: [
      {title:"La máquina del tiempo", type:"libro", author:"H.G. Wells"},
      {title:"Doce monos", type:"pelicula", author:"Terry Gilliam"},
      {title:"Dark", type:"serie", author:"Baran bo Odar"},
      {title:"El fin de la eternidad", type:"libro", author:"Isaac Asimov"},
      {title:"Slaughterhouse-Five", type:"libro", author:"Kurt Vonnegut"},
      {title:"Predestination", type:"pelicula", author:"Spierig Brothers"},
    ]
  },
  "paradojas-temporales": {
    id: "paradojas-temporales",
    label: "Paradojas temporales",
    desc: "Las contradicciones lógicas que emergen del viaje en el tiempo. El abuelo asesinado antes de engendrar al padre. El bucle sin origen.",
    connections: ["viajes-tiempo","libre-albedrio","identidad","universos-paralelos","fin-humanidad"],
    works: [
      {title:"Predestination", type:"pelicula", author:"Spierig Brothers"},
      {title:"Dark", type:"serie", author:"Baran bo Odar"},
      {title:"El fin de la eternidad", type:"libro", author:"Isaac Asimov"},
      {title:"Primer", type:"pelicula", author:"Shane Carruth"},
      {title:"La chica del tiempo", type:"libro", author:"Audrey Niffenegger"},
    ]
  },
  "universos-paralelos": {
    id: "universos-paralelos",
    label: "Universos paralelos",
    desc: "La existencia de realidades alternativas donde las decisiones tomadas generan bifurcaciones del cosmos. Todo lo posible existe en algún lugar.",
    connections: ["realidades-simuladas","habitantes-dimensiones","viajes-tiempo","mundos-artificiales","lo-incomprensible"],
    works: [
      {title:"El hombre en el castillo", type:"libro", author:"Philip K. Dick"},
      {title:"Dark", type:"serie", author:"Baran bo Odar"},
      {title:"Everything Everywhere All at Once", type:"pelicula", author:"Daniels"},
      {title:"El jardín de senderos que se bifurcan", type:"libro", author:"Jorge Luis Borges"},
      {title:"Coherence", type:"pelicula", author:"James Ward Byrkit"},
    ]
  },
  "realidades-simuladas": {
    id: "realidades-simuladas",
    label: "Realidades simuladas",
    desc: "La posibilidad de que nuestra realidad sea una construcción computacional. ¿Cómo distinguir la simulación de lo real?",
    connections: ["simulacros-copias","memorias-artificiales","identidad","conciencias-digitales","mundos-artificiales"],
    works: [
      {title:"Matrix", type:"pelicula", author:"Wachowskis"},
      {title:"Mundo en los ojos", type:"libro", author:"Daniel F. Galouye"},
      {title:"Existenz", type:"pelicula", author:"David Cronenberg"},
      {title:"The Peripheral", type:"serie", author:"Amazon"},
      {title:"Permutation City", type:"libro", author:"Greg Egan"},
    ]
  },
  "suenos-compartidos": {
    id: "suenos-compartidos",
    label: "Sueños compartidos",
    desc: "Espacios oníricos que pueden ser habitados por varias conciencias simultáneamente. La frontera entre mente y mundo se disuelve.",
    connections: ["memoria","identidad","realidades-simuladas","presencias-desconocidas","lo-incomprensible"],
    works: [
      {title:"Inception", type:"pelicula", author:"Christopher Nolan"},
      {title:"Paprika", type:"pelicula", author:"Satoshi Kon"},
      {title:"The Cell", type:"pelicula", author:"Tarsem Singh"},
      {title:"Ubik", type:"libro", author:"Philip K. Dick"},
    ]
  },
  "inteligencia-artificial": {
    id: "inteligencia-artificial",
    label: "Inteligencia artificial",
    desc: "Mentes creadas por la humanidad que aprenden, razonan y eventualmente superan a sus creadores. El espejo más inquietante que hemos construido.",
    connections: ["singularidad-tecnologica","conciencias-digitales","mesias-tecnologicos","memorias-artificiales","posthumanismo"],
    works: [
      {title:"2001: A Space Odyssey", type:"pelicula", author:"Stanley Kubrick"},
      {title:"Ex Machina", type:"pelicula", author:"Alex Garland"},
      {title:"Yo, Robot", type:"libro", author:"Isaac Asimov"},
      {title:"Neuromancer", type:"libro", author:"William Gibson"},
      {title:"Her", type:"pelicula", author:"Spike Jonze"},
      {title:"Westworld", type:"serie", author:"HBO"},
    ]
  },
  "conciencias-digitales": {
    id: "conciencias-digitales",
    label: "Conciencias digitales",
    desc: "Mentes que existen como información pura, liberadas del sustrato biológico. La pregunta de si una mente digital es una persona real.",
    connections: ["transferencia-mental","inmortalidad","memorias-artificiales","simulacros-copias","inteligencia-artificial"],
    works: [
      {title:"Accelerando", type:"libro", author:"Charles Stross"},
      {title:"Glasshouse", type:"libro", author:"Charles Stross"},
      {title:"Permutation City", type:"libro", author:"Greg Egan"},
      {title:"Black Mirror: San Junipero", type:"serie", author:"Charlie Brooker"},
      {title:"Transcendence", type:"pelicula", author:"Wally Pfister"},
    ]
  },
  "mentes-colmena": {
    id: "mentes-colmena",
    label: "Mentes colmena",
    desc: "Conciencias colectivas donde los límites del yo individual se disuelven en una inteligencia distribuida. ¿Qué se pierde y qué se gana?",
    connections: ["inteligencias-planetarias","civilizaciones-alienígenas","posthumanismo","ecologias-alienígenas","singularidad-tecnologica"],
    works: [
      {title:"El juego de Ender", type:"libro", author:"Orson Scott Card"},
      {title:"Hyperion", type:"libro", author:"Dan Simmons"},
      {title:"La voz de los muertos", type:"libro", author:"Orson Scott Card"},
      {title:"Blindsight", type:"libro", author:"Peter Watts"},
      {title:"Solaris", type:"libro", author:"Stanislaw Lem"},
    ]
  },
  "singularidad-tecnologica": {
    id: "singularidad-tecnologica",
    label: "Singularidad tecnológica",
    desc: "El momento hipotético en que la inteligencia artificial supera a la humana y el cambio tecnológico se vuelve impredecible e incontenible.",
    connections: ["inteligencia-artificial","posthumanismo","mesias-tecnologicos","conciencias-digitales","inmortalidad"],
    works: [
      {title:"Accelerando", type:"libro", author:"Charles Stross"},
      {title:"Rainbows End", type:"libro", author:"Vernor Vinge"},
      {title:"The Singularity Is Near", type:"libro", author:"Ray Kurzweil"},
      {title:"Transcendence", type:"pelicula", author:"Wally Pfister"},
      {title:"Ex Machina", type:"pelicula", author:"Alex Garland"},
    ]
  },
  "posthumanismo": {
    id: "posthumanismo",
    label: "Posthumanismo",
    desc: "La transformación de la humanidad más allá de sus límites biológicos actuales. No somos el fin de la evolución, somos su penúltimo paso.",
    connections: ["transferencia-mental","inmortalidad","conciencias-digitales","singularidad-tecnologica","evolucion-dirigida"],
    works: [
      {title:"Accelerando", type:"libro", author:"Charles Stross"},
      {title:"Schismatrix Plus", type:"libro", author:"Bruce Sterling"},
      {title:"Blindsight", type:"libro", author:"Peter Watts"},
      {title:"Oryx and Crake", type:"libro", author:"Margaret Atwood"},
      {title:"Ghost in the Shell", type:"pelicula", author:"Mamoru Oshii"},
    ]
  },
  "inmortalidad": {
    id: "inmortalidad",
    label: "Inmortalidad",
    desc: "La abolición de la muerte. ¿Qué significa vivir para siempre? ¿Cambia la inmortalidad lo que somos o lo que amamos?",
    connections: ["transferencia-mental","conciencias-digitales","clonacion","posthumanismo","memoria"],
    works: [
      {title:"La prole de Neptuno", type:"libro", author:"Charles Stross"},
      {title:"Altered Carbon", type:"libro", author:"Richard Morgan"},
      {title:"The First Fifteen Lives of Harry August", type:"libro", author:"Claire North"},
      {title:"Black Mirror: San Junipero", type:"serie", author:"Charlie Brooker"},
      {title:"Valerian", type:"pelicula", author:"Luc Besson"},
    ]
  },
  "clonacion": {
    id: "clonacion",
    label: "Clonación",
    desc: "La reproducción exacta de un ser vivo. Pero una copia idéntica en el origen, ¿sigue siendo idéntica después de vivir una vida diferente?",
    connections: ["identidad","simulacros-copias","ingenieria-genetica","inmortalidad","recuerdos-implantados"],
    works: [
      {title:"Nunca me abandones", type:"libro", author:"Kazuo Ishiguro"},
      {title:"The Island", type:"pelicula", author:"Michael Bay"},
      {title:"Orphan Black", type:"serie", author:"BBC"},
      {title:"Moon", type:"pelicula", author:"Duncan Jones"},
      {title:"Brave New World", type:"libro", author:"Aldous Huxley"},
    ]
  },
  "transferencia-mental": {
    id: "transferencia-mental",
    label: "Transferencia mental",
    desc: "La posibilidad de copiar, mover o fusionar conciencias entre sustratos. ¿Eres tú el que se transfiere o una copia que cree serlo?",
    connections: ["conciencias-digitales","memoria","identidad","inmortalidad","posthumanismo"],
    works: [
      {title:"Altered Carbon", type:"libro", author:"Richard Morgan"},
      {title:"Permutation City", type:"libro", author:"Greg Egan"},
      {title:"Black Mirror: San Junipero", type:"serie", author:"Charlie Brooker"},
      {title:"Transcendence", type:"pelicula", author:"Wally Pfister"},
      {title:"Soma", type:"videojuego", author:"Frictional Games"},
    ]
  },
  "memoria": {
    id: "memoria",
    label: "Memoria",
    desc: "La materia prima de la identidad. Sin recuerdos, ¿quién eres? La CF explora la memoria como territorio que puede ser editado, borrado o falsificado.",
    connections: ["identidad","recuerdos-implantados","memorias-artificiales","transferencia-mental","ecos-pasado"],
    works: [
      {title:"Blade Runner", type:"pelicula", author:"Ridley Scott"},
      {title:"Eternal Sunshine of the Spotless Mind", type:"pelicula", author:"Michel Gondry"},
      {title:"Total Recall", type:"pelicula", author:"Paul Verhoeven"},
      {title:"¿Sueñan los androides con ovejas eléctricas?", type:"libro", author:"Philip K. Dick"},
      {title:"Flowers for Algernon", type:"libro", author:"Daniel Keyes"},
    ]
  },
  "identidad": {
    id: "identidad",
    label: "Identidad",
    desc: "La pregunta más antigua reformulada en clave tecnológica: ¿qué nos hace ser quienes somos cuando el cuerpo, la mente y los recuerdos son alterables?",
    connections: ["memoria","clonacion","simulacros-copias","transferencia-mental","libre-albedrio"],
    works: [
      {title:"Ghost in the Shell", type:"pelicula", author:"Mamoru Oshii"},
      {title:"Blade Runner 2049", type:"pelicula", author:"Denis Villeneuve"},
      {title:"Orphan Black", type:"serie", author:"BBC"},
      {title:"Nunca me abandones", type:"libro", author:"Kazuo Ishiguro"},
      {title:"Moon", type:"pelicula", author:"Duncan Jones"},
    ]
  },
  "libre-albedrio": {
    id: "libre-albedrio",
    label: "Libre albedrío",
    desc: "¿Pueden nuestras decisiones ser verdaderamente libres en un universo determinista, o ante una IA que predice el futuro?",
    connections: ["estados-totalitarios","vigilancia-absoluta","paradojas-temporales","identidad","mesias-tecnologicos"],
    works: [
      {title:"Minority Report", type:"pelicula", author:"Steven Spielberg"},
      {title:"1984", type:"libro", author:"George Orwell"},
      {title:"Westworld", type:"serie", author:"HBO"},
      {title:"Devs", type:"serie", author:"Alex Garland"},
      {title:"Dark", type:"serie", author:"Baran bo Odar"},
    ]
  },
  "contacto-extraterrestre": {
    id: "contacto-extraterrestre",
    label: "Contacto extraterrestre",
    desc: "El encuentro con inteligencia no humana. El momento que redefiniría para siempre nuestra comprensión de nuestro lugar en el cosmos.",
    connections: ["primer-contacto","lenguajes-extraterrestres","civilizaciones-alienígenas","gran-silencio","lo-incomprensible"],
    works: [
      {title:"Contact", type:"pelicula", author:"Robert Zemeckis"},
      {title:"Arrival", type:"pelicula", author:"Denis Villeneuve"},
      {title:"El problema de los tres cuerpos", type:"libro", author:"Liu Cixin"},
      {title:"Solaris", type:"libro", author:"Stanislaw Lem"},
      {title:"Rendezvous with Rama", type:"libro", author:"Arthur C. Clarke"},
    ]
  },
  "primer-contacto": {
    id: "primer-contacto",
    label: "Primer contacto",
    desc: "El instante inaugural del encuentro con el otro cósmico. Todo lo que la humanidad es y cree se pone en juego en ese momento.",
    connections: ["contacto-extraterrestre","lenguajes-extraterrestres","lo-incomprensible","senales-desconocidas","civilizaciones-alienígenas"],
    works: [
      {title:"Arrival", type:"pelicula", author:"Denis Villeneuve"},
      {title:"Contact", type:"libro", author:"Carl Sagan"},
      {title:"La historia de tu vida", type:"libro", author:"Ted Chiang"},
      {title:"Solaris", type:"libro", author:"Stanislaw Lem"},
      {title:"El marciano", type:"libro", author:"Andy Weir"},
    ]
  },
  "civilizaciones-alienígenas": {
    id: "civilizaciones-alienígenas",
    label: "Civilizaciones alienígenas",
    desc: "Sociedades no humanas con sus propias historias, guerras, religiones y colapsos. Espejos deformantes de la civilización humana.",
    connections: ["arqueologia-cosmica","artefactos-alienígenas","ecologias-alienígenas","primer-contacto","ruinas-civilizaciones"],
    works: [
      {title:"El problema de los tres cuerpos", type:"libro", author:"Liu Cixin"},
      {title:"La cultura (serie)", type:"libro", author:"Iain M. Banks"},
      {title:"Hyperion", type:"libro", author:"Dan Simmons"},
      {title:"A Fire Upon the Deep", type:"libro", author:"Vernor Vinge"},
      {title:"Avatar", type:"pelicula", author:"James Cameron"},
    ]
  },
  "lenguajes-extraterrestres": {
    id: "lenguajes-extraterrestres",
    label: "Lenguajes extraterrestres",
    desc: "Sistemas de comunicación radicalmente ajenos al pensamiento humano. Aprender a hablar con el otro podría cambiar cómo pensamos.",
    connections: ["primer-contacto","contacto-extraterrestre","senales-desconocidas","lo-incomprensible","mensajes-extintas"],
    works: [
      {title:"Arrival", type:"pelicula", author:"Denis Villeneuve"},
      {title:"La historia de tu vida", type:"libro", author:"Ted Chiang"},
      {title:"Babel-17", type:"libro", author:"Samuel R. Delany"},
      {title:"Children of Time", type:"libro", author:"Adrian Tchaikovsky"},
    ]
  },
  "arqueologia-cosmica": {
    id: "arqueologia-cosmica",
    label: "Arqueología cósmica",
    desc: "La búsqueda de rastros de civilizaciones que existieron antes que nosotros. Excavar el cosmos en busca de lo que fue y ya no es.",
    connections: ["artefactos-alienígenas","ruinas-civilizaciones","tecnologias-incomprensibles","civilizaciones-olvidadas","especies-creadoras"],
    works: [
      {title:"Rendezvous with Rama", type:"libro", author:"Arthur C. Clarke"},
      {title:"Roadside Picnic", type:"libro", author:"Strugatsky Brothers"},
      {title:"Revelation Space", type:"libro", author:"Alastair Reynolds"},
      {title:"2001: A Space Odyssey", type:"libro", author:"Arthur C. Clarke"},
      {title:"Mass Effect", type:"videojuego", author:"BioWare"},
    ]
  },
  "artefactos-alienígenas": {
    id: "artefactos-alienígenas",
    label: "Artefactos alienígenas",
    desc: "Objetos construidos por inteligencias no humanas. Su presencia es la prueba de que no estamos solos, aunque sus creadores hayan desaparecido.",
    connections: ["arqueologia-cosmica","reliquias-imposibles","tecnologias-incomprensibles","objetos-lugar","senales-desconocidas"],
    works: [
      {title:"Rendezvous with Rama", type:"libro", author:"Arthur C. Clarke"},
      {title:"2001: A Space Odyssey", type:"pelicula", author:"Stanley Kubrick"},
      {title:"Roadside Picnic", type:"libro", author:"Strugatsky Brothers"},
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
      {title:"Mass Effect", type:"videojuego", author:"BioWare"},
    ]
  },
  "ruinas-civilizaciones": {
    id: "ruinas-civilizaciones",
    label: "Ruinas de civilizaciones desaparecidas",
    desc: "Lo que queda cuando una civilización se extingue. Arquitectura sin habitantes, tecnología sin usuarios, historia sin quien la recuerde.",
    connections: ["arqueologia-cosmica","mundos-abandonados","ciudades-enterradas","monumentos-extintas","herederos-imperios"],
    works: [
      {title:"Revelation Space", type:"libro", author:"Alastair Reynolds"},
      {title:"A Deepness in the Sky", type:"libro", author:"Vernor Vinge"},
      {title:"El largo adiós galáctico", type:"libro", author:"Alastair Reynolds"},
      {title:"Mass Effect", type:"videojuego", author:"BioWare"},
      {title:"Horizon Zero Dawn", type:"videojuego", author:"Guerrilla Games"},
    ]
  },
  "megaestructuras": {
    id: "megaestructuras",
    label: "Megaestructuras",
    desc: "Construcciones a escala astronómica. Cuando la ingeniería ya no está limitada por un planeta sino por las leyes de la física.",
    connections: ["mundos-anillo","esferas-dyson","civilizaciones-alienígenas","herederos-imperios","ruinas-orbitales"],
    works: [
      {title:"Ringworld", type:"libro", author:"Larry Niven"},
      {title:"Rendezvous with Rama", type:"libro", author:"Arthur C. Clarke"},
      {title:"The Algebraist", type:"libro", author:"Iain M. Banks"},
      {title:"Halo", type:"videojuego", author:"Bungie"},
      {title:"Interstellar", type:"pelicula", author:"Christopher Nolan"},
    ]
  },
  "mundos-anillo": {
    id: "mundos-anillo",
    label: "Mundos anillo",
    desc: "Estructuras artificiales en forma de anillo que rodean una estrella, con superficie habitable en su interior. Ingeniería como cosmogonía.",
    connections: ["megaestructuras","esferas-dyson","mundos-artificiales","colonizacion-espacial","ecologias-alienígenas"],
    works: [
      {title:"Ringworld", type:"libro", author:"Larry Niven"},
      {title:"Halo", type:"videojuego", author:"Bungie"},
      {title:"The Culture (Look to Windward)", type:"libro", author:"Iain M. Banks"},
    ]
  },
  "esferas-dyson": {
    id: "esferas-dyson",
    label: "Esferas de Dyson",
    desc: "Estructuras que envuelven completamente una estrella para capturar toda su energía. La firma de una civilización tipo II en la escala de Kardashev.",
    connections: ["megaestructuras","mundos-artificiales","civilizaciones-alienígenas","energia-estelar","herederos-imperios"],
    works: [
      {title:"Permanence", type:"libro", author:"Karl Schroeder"},
      {title:"Excession", type:"libro", author:"Iain M. Banks"},
      {title:"Star Trek: TNG (episodio)", type:"serie", author:"Gene Roddenberry"},
      {title:"Diaspora", type:"libro", author:"Greg Egan"},
    ]
  },
  "naves-generacionales": {
    id: "naves-generacionales",
    label: "Naves generacionales",
    desc: "Naves espaciales diseñadas para viajes tan largos que varias generaciones nacen y mueren a bordo. Una civilización encerrada en metal.",
    connections: ["colonizacion-espacial","ultima-nave","ultimos-supervivientes","ecologias-alienígenas","fin-humanidad"],
    works: [
      {title:"Tau Zero", type:"libro", author:"Poul Anderson"},
      {title:"Aurora", type:"libro", author:"Kim Stanley Robinson"},
      {title:"Orphans of the Sky", type:"libro", author:"Robert A. Heinlein"},
      {title:"Children of Time", type:"libro", author:"Adrian Tchaikovsky"},
      {title:"Passengers", type:"pelicula", author:"Morten Tyldum"},
    ]
  },
  "colonizacion-espacial": {
    id: "colonizacion-espacial",
    label: "Colonización espacial",
    desc: "La expansión de la humanidad más allá de la Tierra. El sueño de nuevos mundos y la repetición inevitable de los viejos errores.",
    connections: ["terraformacion","naves-generacionales","mundos-artificiales","ascensores-espaciales","ecologias-alienígenas"],
    works: [
      {title:"Marte rojo", type:"libro", author:"Kim Stanley Robinson"},
      {title:"The Martian", type:"pelicula", author:"Ridley Scott"},
      {title:"Seveneves", type:"libro", author:"Neal Stephenson"},
      {title:"Aurora", type:"libro", author:"Kim Stanley Robinson"},
      {title:"Dune", type:"libro", author:"Frank Herbert"},
    ]
  },
  "terraformacion": {
    id: "terraformacion",
    label: "Terraformación",
    desc: "La transformación de un planeta para hacerlo habitable. Jugar a ser dioses planetarios con consecuencias que no siempre podemos prever.",
    connections: ["colonizacion-espacial","ingenieria-genetica","ecologias-alienígenas","mundos-artificiales","evolucion-dirigida"],
    works: [
      {title:"Marte rojo", type:"libro", author:"Kim Stanley Robinson"},
      {title:"The Word for World is Forest", type:"libro", author:"Ursula K. Le Guin"},
      {title:"Seveneves", type:"libro", author:"Neal Stephenson"},
      {title:"Avatar", type:"pelicula", author:"James Cameron"},
    ]
  },
  "ascensores-espaciales": {
    id: "ascensores-espaciales",
    label: "Ascensores espaciales",
    desc: "Cables desde la superficie terrestre hasta la órbita geoestacionaria. La solución elegante al problema de escapar de la gravedad.",
    connections: ["colonizacion-espacial","megaestructuras","terraformacion","ciudades-futuro","mundos-artificiales"],
    works: [
      {title:"Las fuentes del paraíso", type:"libro", author:"Arthur C. Clarke"},
      {title:"Rainbows End", type:"libro", author:"Vernor Vinge"},
      {title:"Kim Stanley Robinson (Marte)", type:"libro", author:"Kim Stanley Robinson"},
      {title:"Ad Astra", type:"pelicula", author:"James Gray"},
    ]
  },
  "agujeros-negros": {
    id: "agujeros-negros",
    label: "Agujeros negros",
    desc: "Objetos donde la gravedad es tan extrema que ni la luz puede escapar. La naturaleza llevada a su límite absoluto.",
    connections: ["agujeros-gusano","fin-universo","entidades-cosmicas","lo-incomprensible","universos-moribundos"],
    works: [
      {title:"Interstellar", type:"pelicula", author:"Christopher Nolan"},
      {title:"The Black Hole", type:"pelicula", author:"Gary Nelson"},
      {title:"Tau Zero", type:"libro", author:"Poul Anderson"},
      {title:"Diaspora", type:"libro", author:"Greg Egan"},
    ]
  },
  "agujeros-gusano": {
    id: "agujeros-gusano",
    label: "Agujeros de gusano",
    desc: "Túneles hipotéticos que conectan regiones distantes del espacio-tiempo. Atajos a través del universo, si es que son posibles.",
    connections: ["agujeros-negros","viajes-tiempo","habitantes-dimensiones","universos-paralelos","lo-incomprensible"],
    works: [
      {title:"Contact", type:"libro", author:"Carl Sagan"},
      {title:"Interstellar", type:"pelicula", author:"Christopher Nolan"},
      {title:"Event Horizon", type:"pelicula", author:"Paul W.S. Anderson"},
      {title:"A Fire Upon the Deep", type:"libro", author:"Vernor Vinge"},
    ]
  },
  "universos-moribundos": {
    id: "universos-moribundos",
    label: "Universos moribundos",
    desc: "El cosmos en su fase final, cuando las estrellas se apagan y solo queda frío y oscuridad. La CF más melancólica y más grandiosa.",
    connections: ["fin-universo","ultima-ciudad","ultima-biblioteca","ultima-nave","nostalgia-futuro"],
    works: [
      {title:"La última pregunta", type:"libro", author:"Isaac Asimov"},
      {title:"El fin de la eternidad", type:"libro", author:"Isaac Asimov"},
      {title:"Tau Zero", type:"libro", author:"Poul Anderson"},
      {title:"The Time Machine", type:"libro", author:"H.G. Wells"},
    ]
  },
  "fin-universo": {
    id: "fin-universo",
    label: "Fin del universo",
    desc: "El momento último, la entropía máxima. Imaginar el fin de todo como forma de comprender qué significa que algo exista.",
    connections: ["universos-moribundos","ultima-pregunta","ultima-ciudad","ultimos-supervivientes","entidades-cosmicas"],
    works: [
      {title:"La última pregunta", type:"libro", author:"Isaac Asimov"},
      {title:"The Restaurant at the End of the Universe", type:"libro", author:"Douglas Adams"},
      {title:"Tau Zero", type:"libro", author:"Poul Anderson"},
      {title:"Diaspora", type:"libro", author:"Greg Egan"},
    ]
  },
  "evolucion-dirigida": {
    id: "evolucion-dirigida",
    label: "Evolución dirigida",
    desc: "Tomar el control del proceso evolutivo para guiar el desarrollo de las especies. Diseñar el futuro biológico de manera consciente.",
    connections: ["ingenieria-genetica","posthumanismo","mutacion","terraformacion","ecologias-alienígenas"],
    works: [
      {title:"Oryx and Crake", type:"libro", author:"Margaret Atwood"},
      {title:"Children of Time", type:"libro", author:"Adrian Tchaikovsky"},
      {title:"Darwin's Radio", type:"libro", author:"Greg Bear"},
      {title:"Brave New World", type:"libro", author:"Aldous Huxley"},
    ]
  },
  "mutacion": {
    id: "mutacion",
    label: "Mutación",
    desc: "Cambios en el código genético que alteran radicalmente un organismo. La evolución como accidente, como amenaza, como posibilidad.",
    connections: ["ingenieria-genetica","evolucion-dirigida","posthumanismo","ecologias-alienígenas","especies-desaparecidas"],
    works: [
      {title:"X-Men", type:"comic", author:"Stan Lee"},
      {title:"Akira", type:"pelicula", author:"Katsuhiro Otomo"},
      {title:"La mosca", type:"pelicula", author:"David Cronenberg"},
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
    ]
  },
  "ingenieria-genetica": {
    id: "ingenieria-genetica",
    label: "Ingeniería genética",
    desc: "La manipulación deliberada del ADN para crear organismos con características diseñadas. El control del código de la vida.",
    connections: ["clonacion","evolucion-dirigida","mutacion","terraformacion","posthumanismo"],
    works: [
      {title:"Parque Jurásico", type:"libro", author:"Michael Crichton"},
      {title:"Gattaca", type:"pelicula", author:"Andrew Niccol"},
      {title:"Brave New World", type:"libro", author:"Aldous Huxley"},
      {title:"Oryx and Crake", type:"libro", author:"Margaret Atwood"},
      {title:"Blade Runner 2049", type:"pelicula", author:"Denis Villeneuve"},
    ]
  },
  "utopias": {
    id: "utopias",
    label: "Utopías",
    desc: "Sociedades perfectas o casi perfectas. La CF las examina con escepticismo — toda utopía tiene un precio oculto.",
    connections: ["escasez-abundancia","religiones-futuro","ciudades-futuro","posthumanismo","colonizacion-espacial"],
    works: [
      {title:"The Dispossessed", type:"libro", author:"Ursula K. Le Guin"},
      {title:"La cultura (serie)", type:"libro", author:"Iain M. Banks"},
      {title:"News from Nowhere", type:"libro", author:"William Morris"},
      {title:"Star Trek", type:"serie", author:"Gene Roddenberry"},
    ]
  },
  "distopias": {
    id: "distopias",
    label: "Distopías",
    desc: "Sociedades que han fallado de maneras específicas y reveladoras. El género más político de la CF, el que más incomoda al poder.",
    connections: ["estados-totalitarios","vigilancia-absoluta","corporaciones-omnipotentes","inteligencia-artificial","escasez-abundancia"],
    works: [
      {title:"1984", type:"libro", author:"George Orwell"},
      {title:"Un mundo feliz", type:"libro", author:"Aldous Huxley"},
      {title:"El cuento de la criada", type:"libro", author:"Margaret Atwood"},
      {title:"Fahrenheit 451", type:"libro", author:"Ray Bradbury"},
      {title:"Nosotros", type:"libro", author:"Yevgeny Zamyatin"},
    ]
  },
  "estados-totalitarios": {
    id: "estados-totalitarios",
    label: "Estados totalitarios",
    desc: "Sistemas políticos que controlan todos los aspectos de la vida. La CF como advertencia sobre adónde puede llevar la concentración del poder.",
    connections: ["vigilancia-absoluta","distopias","libre-albedrio","corporaciones-omnipotentes","religiones-futuro"],
    works: [
      {title:"1984", type:"libro", author:"George Orwell"},
      {title:"El cuento de la criada", type:"libro", author:"Margaret Atwood"},
      {title:"Nosotros", type:"libro", author:"Yevgeny Zamyatin"},
      {title:"V de Vendetta", type:"comic", author:"Alan Moore"},
      {title:"Brazil", type:"pelicula", author:"Terry Gilliam"},
    ]
  },
  "vigilancia-absoluta": {
    id: "vigilancia-absoluta",
    label: "Vigilancia absoluta",
    desc: "Sistemas que observan todo y a todos. Cuando la privacidad desaparece, ¿qué queda del individuo?",
    connections: ["estados-totalitarios","distopias","inteligencia-artificial","corporaciones-omnipotentes","memorias-artificiales"],
    works: [
      {title:"1984", type:"libro", author:"George Orwell"},
      {title:"Minority Report", type:"pelicula", author:"Steven Spielberg"},
      {title:"Black Mirror", type:"serie", author:"Charlie Brooker"},
      {title:"The Circle", type:"libro", author:"Dave Eggers"},
      {title:"Devs", type:"serie", author:"Alex Garland"},
    ]
  },
  "corporaciones-omnipotentes": {
    id: "corporaciones-omnipotentes",
    label: "Corporaciones omnipotentes",
    desc: "Empresas que han superado al Estado como forma de poder. El capitalismo llevado a su conclusión lógica en el espacio o en el futuro.",
    connections: ["distopias","vigilancia-absoluta","ciudades-futuro","inteligencia-artificial","colonizacion-espacial"],
    works: [
      {title:"Neuromancer", type:"libro", author:"William Gibson"},
      {title:"Alien", type:"pelicula", author:"Ridley Scott"},
      {title:"Robocop", type:"pelicula", author:"Paul Verhoeven"},
      {title:"The Expanse", type:"serie", author:"Alcon Entertainment"},
      {title:"Snow Crash", type:"libro", author:"Neal Stephenson"},
    ]
  },
  "escasez-abundancia": {
    id: "escasez-abundancia",
    label: "Escasez y abundancia",
    desc: "La distribución de recursos como motor de conflicto o de utopía. ¿Qué hace la humanidad cuando ya no hay nada que escasee?",
    connections: ["utopias","distopias","colonizacion-espacial","ecologias-alienígenas","religiones-futuro"],
    works: [
      {title:"The Dispossessed", type:"libro", author:"Ursula K. Le Guin"},
      {title:"La cultura (serie)", type:"libro", author:"Iain M. Banks"},
      {title:"Marte rojo", type:"libro", author:"Kim Stanley Robinson"},
      {title:"Elysium", type:"pelicula", author:"Neill Blomkamp"},
    ]
  },
  "religiones-futuro": {
    id: "religiones-futuro",
    label: "Religiones del futuro",
    desc: "Sistemas de creencia adaptados o surgidos en un contexto tecnológico avanzado. La espiritualidad humana no desaparece con la ciencia.",
    connections: ["mesias-tecnologicos","dioses-alienígenas","falsos-dioses","estados-totalitarios","utopias"],
    works: [
      {title:"Dune", type:"libro", author:"Frank Herbert"},
      {title:"Hyperion", type:"libro", author:"Dan Simmons"},
      {title:"El señor de la luz", type:"libro", author:"Roger Zelazny"},
      {title:"A Canticle for Leibowitz", type:"libro", author:"Walter M. Miller Jr."},
    ]
  },
  "mesias-tecnologicos": {
    id: "mesias-tecnologicos",
    label: "Mesías tecnológicos",
    desc: "Figuras que encarnan la promesa o la amenaza de la tecnología como salvación. La estructura del mito religioso aplicada al futuro.",
    connections: ["singularidad-tecnologica","inteligencia-artificial","religiones-futuro","posthumanismo","libre-albedrio"],
    works: [
      {title:"Dune", type:"libro", author:"Frank Herbert"},
      {title:"Matrix", type:"pelicula", author:"Wachowskis"},
      {title:"Terminator", type:"pelicula", author:"James Cameron"},
      {title:"Westworld", type:"serie", author:"HBO"},
    ]
  },
  "realidad-virtual": {
    id: "realidad-virtual",
    label: "Realidad virtual",
    desc: "Mundos artificiales inmersivos que pueden ser más seductores que la realidad. El peligro de preferir la ilusión a lo real.",
    connections: ["realidades-simuladas","simulacros-copias","memorias-artificiales","identidad","mundos-artificiales"],
    works: [
      {title:"Ready Player One", type:"libro", author:"Ernest Cline"},
      {title:"Neuromancer", type:"libro", author:"William Gibson"},
      {title:"Snow Crash", type:"libro", author:"Neal Stephenson"},
      {title:"Matrix", type:"pelicula", author:"Wachowskis"},
      {title:"Black Mirror: Playtest", type:"serie", author:"Charlie Brooker"},
    ]
  },
  "simulacros-copias": {
    id: "simulacros-copias",
    label: "Simulacros y copias",
    desc: "Reproducciones que pueden ser indistinguibles del original. ¿Cuándo una copia deja de ser copia y se convierte en otra cosa?",
    connections: ["identidad","clonacion","realidades-simuladas","memoria","conciencias-digitales"],
    works: [
      {title:"Blade Runner", type:"pelicula", author:"Ridley Scott"},
      {title:"¿Sueñan los androides con ovejas eléctricas?", type:"libro", author:"Philip K. Dick"},
      {title:"The Prestige", type:"pelicula", author:"Christopher Nolan"},
      {title:"Moon", type:"pelicula", author:"Duncan Jones"},
      {title:"Simulacra and Simulation", type:"libro", author:"Jean Baudrillard"},
    ]
  },
  "ciudades-futuro": {
    id: "ciudades-futuro",
    label: "Ciudades del futuro",
    desc: "La forma que tomará la vida urbana cuando la tecnología remodele el espacio habitado. Desde utopías brillantes hasta laberintos distópicos.",
    connections: ["utopias","distopias","ascensores-espaciales","corporaciones-omnipotentes","ultima-ciudad"],
    works: [
      {title:"Metrópolis", type:"pelicula", author:"Fritz Lang"},
      {title:"Blade Runner", type:"pelicula", author:"Ridley Scott"},
      {title:"The City & the City", type:"libro", author:"China Miéville"},
      {title:"Neuromancer", type:"libro", author:"William Gibson"},
      {title:"The Fifth Element", type:"pelicula", author:"Luc Besson"},
    ]
  },
  "ecologias-alienígenas": {
    id: "ecologias-alienígenas",
    label: "Ecologías alienígenas",
    desc: "Biosistemas completamente ajenos a la vida terrestre. Ecosistemas donde la lógica de la evolución ha tomado caminos radicalmente diferentes.",
    connections: ["terraformacion","civilizaciones-alienígenas","inteligencias-planetarias","mundos-anillo","evolucion-dirigida"],
    works: [
      {title:"Avatar", type:"pelicula", author:"James Cameron"},
      {title:"Dune", type:"libro", author:"Frank Herbert"},
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
      {title:"The Word for World is Forest", type:"libro", author:"Ursula K. Le Guin"},
      {title:"Children of Time", type:"libro", author:"Adrian Tchaikovsky"},
    ]
  },
  "lo-incomprensible": {
    id: "lo-incomprensible",
    label: "Lo incomprensible",
    desc: "Aquello que existe más allá de la capacidad cognitiva humana. La CF más honesta admite que el universo no tiene por qué ser entendible.",
    connections: ["entidades-cosmicas","primer-contacto","universos-paralelos","suenos-compartidos","presencias-desconocidas"],
    works: [
      {title:"Solaris", type:"libro", author:"Stanislaw Lem"},
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
      {title:"Blindsight", type:"libro", author:"Peter Watts"},
      {title:"Color Out of Space", type:"libro", author:"H.P. Lovecraft"},
      {title:"Arrival", type:"pelicula", author:"Denis Villeneuve"},
    ]
  },
  "bibliotecas-infinitas": {
    id: "bibliotecas-infinitas",
    label: "Bibliotecas infinitas",
    desc: "Repositorios que contienen todo el conocimiento posible o imaginable. La paradoja de saber que existe una respuesta pero no poder encontrarla.",
    connections: ["archivos-prohibidos","conocimientos-perdidos","ultima-biblioteca","civilizaciones-olvidadas","lo-incomprensible"],
    works: [
      {title:"La biblioteca de Babel", type:"libro", author:"Jorge Luis Borges"},
      {title:"La guía del autoestopista galáctico", type:"libro", author:"Douglas Adams"},
      {title:"Hyperion", type:"libro", author:"Dan Simmons"},
      {title:"Anathem", type:"libro", author:"Neal Stephenson"},
    ]
  },
  "archivos-prohibidos": {
    id: "archivos-prohibidos",
    label: "Archivos prohibidos",
    desc: "Conocimientos que alguien no quiere que se conozcan. La censura aplicada al saber más fundamental sobre el universo o la historia.",
    connections: ["bibliotecas-infinitas","conocimientos-perdidos","vigilancia-absoluta","estados-totalitarios","reliquias-imposibles"],
    works: [
      {title:"Fahrenheit 451", type:"libro", author:"Ray Bradbury"},
      {title:"El nombre de la rosa", type:"libro", author:"Umberto Eco"},
      {title:"1984", type:"libro", author:"George Orwell"},
      {title:"The Demolished Man", type:"libro", author:"Alfred Bester"},
    ]
  },
  "conocimientos-perdidos": {
    id: "conocimientos-perdidos",
    label: "Conocimientos perdidos",
    desc: "Saberes que existieron y ya no están. Civilizaciones que sabían cosas que nosotros no sabemos y que tal vez nunca recuperaremos.",
    connections: ["bibliotecas-infinitas","archivos-prohibidos","civilizaciones-olvidadas","ruinas-civilizaciones","ecos-pasado"],
    works: [
      {title:"A Canticle for Leibowitz", type:"libro", author:"Walter M. Miller Jr."},
      {title:"El nombre de la rosa", type:"libro", author:"Umberto Eco"},
      {title:"Foundation", type:"libro", author:"Isaac Asimov"},
      {title:"The City & the City", type:"libro", author:"China Miéville"},
    ]
  },
  "civilizaciones-olvidadas": {
    id: "civilizaciones-olvidadas",
    label: "Civilizaciones olvidadas",
    desc: "Sociedades que existieron antes que la nuestra y de las que apenas quedan rastros. El olvido como forma de muerte definitiva.",
    connections: ["ruinas-civilizaciones","conocimientos-perdidos","ecos-pasado","especies-creadoras","monumentos-extintas"],
    works: [
      {title:"Revelation Space", type:"libro", author:"Alastair Reynolds"},
      {title:"A Deepness in the Sky", type:"libro", author:"Vernor Vinge"},
      {title:"Foundation", type:"libro", author:"Isaac Asimov"},
      {title:"Mass Effect", type:"videojuego", author:"BioWare"},
    ]
  },
  "ultimos-supervivientes": {
    id: "ultimos-supervivientes",
    label: "Últimos supervivientes",
    desc: "Los que quedan cuando todo lo demás ha desaparecido. La soledad última, la responsabilidad de ser el único testigo de lo que fue.",
    connections: ["naves-generacionales","fin-humanidad","mundos-abandonados","ultima-nave","nostalgia-futuro"],
    works: [
      {title:"La carretera", type:"libro", author:"Cormac McCarthy"},
      {title:"I Am Legend", type:"libro", author:"Richard Matheson"},
      {title:"On the Beach", type:"libro", author:"Nevil Shute"},
      {title:"The Last of Us", type:"videojuego", author:"Naughty Dog"},
      {title:"Wall-E", type:"pelicula", author:"Pixar"},
    ]
  },
  "mundos-abandonados": {
    id: "mundos-abandonados",
    label: "Mundos abandonados",
    desc: "Planetas o civilizaciones que fueron habitados y ya no lo son. Lugares donde el silencio cuenta historias que nadie dejó escritas.",
    connections: ["ruinas-civilizaciones","ciudades-enterradas","ultimos-supervivientes","planetas-cementerio","nostalgia-futuro"],
    works: [
      {title:"Roadside Picnic", type:"libro", author:"Strugatsky Brothers"},
      {title:"Stalker", type:"pelicula", author:"Andrei Tarkovsky"},
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
      {title:"Horizon Zero Dawn", type:"videojuego", author:"Guerrilla Games"},
    ]
  },
  "planetas-cementerio": {
    id: "planetas-cementerio",
    label: "Planetas cementerio",
    desc: "Mundos convertidos en lugar de reposo o exterminio. El espacio como escenario de la muerte a escala planetaria.",
    connections: ["mundos-abandonados","ruinas-civilizaciones","monumentos-extintas","herederos-imperios","nostalgia-futuro"],
    works: [
      {title:"Revelation Space", type:"libro", author:"Alastair Reynolds"},
      {title:"The Road", type:"pelicula", author:"John Hillcoat"},
      {title:"Mass Effect", type:"videojuego", author:"BioWare"},
    ]
  },
  "ciudades-enterradas": {
    id: "ciudades-enterradas",
    label: "Ciudades enterradas",
    desc: "Metrópolis sepultadas bajo tierra, agua o tiempo. Arqueología vertical que revela capas de historia acumulada.",
    connections: ["ruinas-civilizaciones","mundos-abandonados","conocimientos-perdidos","civilizaciones-olvidadas","ecos-pasado"],
    works: [
      {title:"The City & the City", type:"libro", author:"China Miéville"},
      {title:"Metrópolis", type:"pelicula", author:"Fritz Lang"},
      {title:"Foundation", type:"libro", author:"Isaac Asimov"},
      {title:"Dark City", type:"pelicula", author:"Alex Proyas"},
    ]
  },
  "senales-desconocidas": {
    id: "senales-desconocidas",
    label: "Señales de origen desconocido",
    desc: "Transmisiones cuyo origen no podemos determinar. El universo hablándonos en un idioma que aún no sabemos descifrar.",
    connections: ["mensajes-futuro","lenguajes-extraterrestres","artefactos-alienígenas","gran-silencio","primer-contacto"],
    works: [
      {title:"Contact", type:"libro", author:"Carl Sagan"},
      {title:"Arrival", type:"pelicula", author:"Denis Villeneuve"},
      {title:"El problema de los tres cuerpos", type:"libro", author:"Liu Cixin"},
      {title:"The Signal", type:"pelicula", author:"William Eubank"},
    ]
  },
  "mensajes-futuro": {
    id: "mensajes-futuro",
    label: "Mensajes desde el futuro",
    desc: "Comunicaciones enviadas hacia atrás en el tiempo. La posibilidad de que nuestros descendientes nos estén hablando ahora mismo.",
    connections: ["viajes-tiempo","senales-desconocidas","paradojas-temporales","ecos-pasado","vidas-anteriores"],
    works: [
      {title:"Dark", type:"serie", author:"Baran bo Odar"},
      {title:"Doce monos", type:"pelicula", author:"Terry Gilliam"},
      {title:"Terminator", type:"pelicula", author:"James Cameron"},
      {title:"Flashforward", type:"libro", author:"Robert J. Sawyer"},
    ]
  },
  "mensajes-extintas": {
    id: "mensajes-extintas",
    label: "Mensajes desde civilizaciones extintas",
    desc: "Transmisiones enviadas por civilizaciones que ya no existen cuando las recibimos. Voces de los muertos cósmicos.",
    connections: ["lenguajes-extraterrestres","civilizaciones-olvidadas","ecos-pasado","senales-desconocidas","arqueologia-cosmica"],
    works: [
      {title:"Revelation Space", type:"libro", author:"Alastair Reynolds"},
      {title:"Contact", type:"libro", author:"Carl Sagan"},
      {title:"El problema de los tres cuerpos", type:"libro", author:"Liu Cixin"},
      {title:"Mass Effect", type:"videojuego", author:"BioWare"},
    ]
  },
  "ecos-pasado": {
    id: "ecos-pasado",
    label: "Ecos del pasado",
    desc: "Huellas que lo que fue deja en el presente. La historia como presencia activa que configura lo que somos sin que lo sepamos.",
    connections: ["memoria","conocimientos-perdidos","civilizaciones-olvidadas","mensajes-extintas","recuerdos-heredados"],
    works: [
      {title:"Slaughterhouse-Five", type:"libro", author:"Kurt Vonnegut"},
      {title:"Eternal Sunshine of the Spotless Mind", type:"pelicula", author:"Michel Gondry"},
      {title:"A Canticle for Leibowitz", type:"libro", author:"Walter M. Miller Jr."},
      {title:"Foundation", type:"libro", author:"Isaac Asimov"},
    ]
  },
  "objetos-lugar": {
    id: "objetos-lugar",
    label: "Objetos fuera de lugar",
    desc: "Artefactos que no deberían existir donde se encuentran. Anacronismos que sugieren que algo en nuestra comprensión del tiempo está mal.",
    connections: ["artefactos-alienígenas","reliquias-imposibles","tecnologias-incomprensibles","viajes-tiempo","arqueologia-cosmica"],
    works: [
      {title:"2001: A Space Odyssey", type:"pelicula", author:"Stanley Kubrick"},
      {title:"Roadside Picnic", type:"libro", author:"Strugatsky Brothers"},
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
    ]
  },
  "tecnologias-incomprensibles": {
    id: "tecnologias-incomprensibles",
    label: "Tecnologías incomprensibles",
    desc: "Máquinas y sistemas cuyo funcionamiento supera nuestra capacidad de comprensión. La ley de Clarke: tecnología suficientemente avanzada.",
    connections: ["artefactos-alienígenas","reliquias-imposibles","objetos-lugar","lo-incomprensible","arqueologia-cosmica"],
    works: [
      {title:"Roadside Picnic", type:"libro", author:"Strugatsky Brothers"},
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
      {title:"Rendezvous with Rama", type:"libro", author:"Arthur C. Clarke"},
      {title:"2001: A Space Odyssey", type:"pelicula", author:"Stanley Kubrick"},
    ]
  },
  "reliquias-imposibles": {
    id: "reliquias-imposibles",
    label: "Reliquias imposibles",
    desc: "Objetos que no pueden existir según nuestra comprensión de la física o la historia, pero que están ahí.",
    connections: ["artefactos-alienígenas","tecnologias-incomprensibles","objetos-lugar","lo-incomprensible","arqueologia-cosmica"],
    works: [
      {title:"2001: A Space Odyssey", type:"pelicula", author:"Stanley Kubrick"},
      {title:"Roadside Picnic", type:"libro", author:"Strugatsky Brothers"},
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
    ]
  },
  "cartografias-perdidas": {
    id: "cartografias-perdidas",
    label: "Cartografías perdidas",
    desc: "Mapas hacia lugares que no sabemos si existen o cómo llegar. La cartografía como promesa y como enigma.",
    connections: ["mapas-ninguna-parte","viajeros-extraviados","conocimientos-perdidos","civilizaciones-olvidadas","bibliotecas-infinitas"],
    works: [
      {title:"La guía del autoestopista galáctico", type:"libro", author:"Douglas Adams"},
      {title:"At the Mountains of Madness", type:"libro", author:"H.P. Lovecraft"},
      {title:"Treasure Planet", type:"pelicula", author:"Disney"},
    ]
  },
  "mapas-ninguna-parte": {
    id: "mapas-ninguna-parte",
    label: "Mapas hacia ninguna parte",
    desc: "Guías que llevan a destinos inexistentes o imposibles. La esperanza codificada en un mapa que puede ser mentira.",
    connections: ["cartografias-perdidas","viajeros-extraviados","lo-incomprensible","mundos-abandonados","nostalgia-futuro"],
    works: [
      {title:"La biblioteca de Babel", type:"libro", author:"Jorge Luis Borges"},
      {title:"At the Mountains of Madness", type:"libro", author:"H.P. Lovecraft"},
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
    ]
  },
  "viajeros-extraviados": {
    id: "viajeros-extraviados",
    label: "Viajeros extraviados",
    desc: "Exploradores que han perdido el camino de regreso. La desorientación como estado existencial en el espacio o el tiempo.",
    connections: ["cartografias-perdidas","naves-fantasma","ultimos-supervivientes","naves-generacionales","mundos-abandonados"],
    works: [
      {title:"Lost in Space", type:"serie", author:"Irwin Allen"},
      {title:"The Martian", type:"libro", author:"Andy Weir"},
      {title:"Gravity", type:"pelicula", author:"Alfonso Cuarón"},
      {title:"Pandorum", type:"pelicula", author:"Christian Alvart"},
    ]
  },
  "naves-fantasma": {
    id: "naves-fantasma",
    label: "Naves fantasma",
    desc: "Naves encontradas a la deriva sin tripulación o con tripulación muerta. El misterio más perturbador del espacio profundo.",
    connections: ["viajeros-extraviados","mundos-abandonados","ultimos-supervivientes","memorias-artificiales","presencias-desconocidas"],
    works: [
      {title:"Event Horizon", type:"pelicula", author:"Paul W.S. Anderson"},
      {title:"Alien", type:"pelicula", author:"Ridley Scott"},
      {title:"Pandorum", type:"pelicula", author:"Christian Alvart"},
      {title:"Dead Space", type:"videojuego", author:"EA"},
    ]
  },
  "mundos-artificiales": {
    id: "mundos-artificiales",
    label: "Mundos artificiales",
    desc: "Entornos completamente construidos por inteligencias, no surgidos de procesos naturales. La creación llevada a escala planetaria.",
    connections: ["megaestructuras","mundos-anillo","colonizacion-espacial","realidades-simuladas","esferas-dyson"],
    works: [
      {title:"Ringworld", type:"libro", author:"Larry Niven"},
      {title:"The Culture (Player of Games)", type:"libro", author:"Iain M. Banks"},
      {title:"Halo", type:"videojuego", author:"Bungie"},
      {title:"Matrix", type:"pelicula", author:"Wachowskis"},
    ]
  },
  "oceanos-conscientes": {
    id: "oceanos-conscientes",
    label: "Océanos conscientes",
    desc: "Masas de agua o materia que han desarrollado o son en sí mismas una forma de inteligencia. La mente como fenómeno emergente a escala planetaria.",
    connections: ["inteligencias-planetarias","mentes-colmena","lo-incomprensible","entidades-cosmicas","ecologias-alienígenas"],
    works: [
      {title:"Solaris", type:"libro", author:"Stanislaw Lem"},
      {title:"Solaris", type:"pelicula", author:"Andrei Tarkovsky"},
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
    ]
  },
  "inteligencias-planetarias": {
    id: "inteligencias-planetarias",
    label: "Inteligencias planetarias",
    desc: "Planetas enteros que son o contienen una mente. La biosfera como sistema cognitivo. Gaia llevada al límite especulativo.",
    connections: ["oceanos-conscientes","mentes-colmena","ecologias-alienígenas","entidades-cosmicas","lo-incomprensible"],
    works: [
      {title:"Solaris", type:"libro", author:"Stanislaw Lem"},
      {title:"Dune", type:"libro", author:"Frank Herbert"},
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
      {title:"Avatar", type:"pelicula", author:"James Cameron"},
    ]
  },
  "entidades-cosmicas": {
    id: "entidades-cosmicas",
    label: "Entidades cósmicas",
    desc: "Seres de escala o naturaleza tan diferente a la nuestra que su existencia desafía cualquier categoría. Dioses sin religión.",
    connections: ["dioses-alienígenas","lo-incomprensible","fin-universo","agujeros-negros","observadores-invisibles"],
    works: [
      {title:"2001: A Space Odyssey", type:"pelicula", author:"Stanley Kubrick"},
      {title:"Childhood's End", type:"libro", author:"Arthur C. Clarke"},
      {title:"At the Mountains of Madness", type:"libro", author:"H.P. Lovecraft"},
      {title:"A Fire Upon the Deep", type:"libro", author:"Vernor Vinge"},
    ]
  },
  "dioses-alienígenas": {
    id: "dioses-alienígenas",
    label: "Dioses alienígenas",
    desc: "Civilizaciones extraterrestres tan avanzadas que son indistinguibles de deidades. La tecnología como teología.",
    connections: ["religiones-futuro","falsos-dioses","entidades-cosmicas","civilizaciones-alienígenas","lo-incomprensible"],
    works: [
      {title:"Childhood's End", type:"libro", author:"Arthur C. Clarke"},
      {title:"2001: A Space Odyssey", type:"pelicula", author:"Stanley Kubrick"},
      {title:"El señor de la luz", type:"libro", author:"Roger Zelazny"},
      {title:"Stargate", type:"pelicula", author:"Roland Emmerich"},
    ]
  },
  "falsos-dioses": {
    id: "falsos-dioses",
    label: "Falsos dioses",
    desc: "Entidades que se hacen pasar por dioses o son tomadas por tales. La religión como malentendido tecnológico o como manipulación consciente.",
    connections: ["religiones-futuro","dioses-alienígenas","mesias-tecnologicos","estados-totalitarios","lo-incomprensible"],
    works: [
      {title:"Dune", type:"libro", author:"Frank Herbert"},
      {title:"El señor de la luz", type:"libro", author:"Roger Zelazny"},
      {title:"Stargate", type:"pelicula", author:"Roland Emmerich"},
      {title:"God Emperor of Dune", type:"libro", author:"Frank Herbert"},
    ]
  },
  "observadores-invisibles": {
    id: "observadores-invisibles",
    label: "Observadores invisibles",
    desc: "Presencias que nos contemplan sin hacerse notar. La paranoia cósmica de ser estudiados sin saberlo.",
    connections: ["presencias-desconocidas","hipotesis-zoo","entidades-cosmicas","vigilancia-absoluta","lo-incomprensible"],
    works: [
      {title:"El problema de los tres cuerpos", type:"libro", author:"Liu Cixin"},
      {title:"Solaris", type:"libro", author:"Stanislaw Lem"},
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
      {title:"Contact", type:"libro", author:"Carl Sagan"},
    ]
  },
  "presencias-desconocidas": {
    id: "presencias-desconocidas",
    label: "Presencias desconocidas",
    desc: "Algo está ahí, pero no sabemos qué. La amenaza o promesa de lo que no podemos ver ni comprender.",
    connections: ["observadores-invisibles","lo-incomprensible","naves-fantasma","suenos-compartidos","entidades-cosmicas"],
    works: [
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
      {title:"Alien", type:"pelicula", author:"Ridley Scott"},
      {title:"Event Horizon", type:"pelicula", author:"Paul W.S. Anderson"},
      {title:"Solaris", type:"libro", author:"Stanislaw Lem"},
    ]
  },
  "habitantes-dimensiones": {
    id: "habitantes-dimensiones",
    label: "Habitantes de otras dimensiones",
    desc: "Seres que existen en dimensiones que no podemos percibir directamente. Lo que hay al otro lado de la física que conocemos.",
    connections: ["universos-paralelos","agujeros-gusano","lo-incomprensible","entidades-cosmicas","realidades-simuladas"],
    works: [
      {title:"Interstellar", type:"pelicula", author:"Christopher Nolan"},
      {title:"The Mist", type:"pelicula", author:"Frank Darabont"},
      {title:"From Beyond", type:"pelicula", author:"Stuart Gordon"},
      {title:"Dark City", type:"pelicula", author:"Alex Proyas"},
    ]
  },
  "hipotesis-zoo": {
    id: "hipotesis-zoo",
    label: "La hipótesis del zoo cósmico",
    desc: "La idea de que civilizaciones avanzadas nos observan sin interferir, como visitantes de un zoo. El silencio de Fermi explicado.",
    connections: ["gran-silencio","observadores-invisibles","bosque-oscuro","contacto-extraterrestre","civilizaciones-alienígenas"],
    works: [
      {title:"El problema de los tres cuerpos", type:"libro", author:"Liu Cixin"},
      {title:"Contact", type:"libro", author:"Carl Sagan"},
      {title:"Childhood's End", type:"libro", author:"Arthur C. Clarke"},
    ]
  },
  "hipotesis-planeta-prohibido": {
    id: "hipotesis-planeta-prohibido",
    label: "La hipótesis del planeta prohibido",
    desc: "La posibilidad de que la Tierra esté conscientemente excluida del contacto interestelar, considerada peligrosa o en cuarentena.",
    connections: ["gran-silencio","hipotesis-zoo","bosque-oscuro","contacto-extraterrestre","observadores-invisibles"],
    works: [
      {title:"Forbidden Planet", type:"pelicula", author:"Fred M. Wilcox"},
      {title:"Childhood's End", type:"libro", author:"Arthur C. Clarke"},
      {title:"El problema de los tres cuerpos", type:"libro", author:"Liu Cixin"},
    ]
  },
  "gran-silencio": {
    id: "gran-silencio",
    label: "El gran silencio",
    desc: "La paradoja de Fermi: si el universo está lleno de vida, ¿por qué no hemos oído nada? El silencio como el misterio más aterrador.",
    connections: ["hipotesis-zoo","bosque-oscuro","contacto-extraterrestre","senales-desconocidas","civilizaciones-alienígenas"],
    works: [
      {title:"El problema de los tres cuerpos", type:"libro", author:"Liu Cixin"},
      {title:"Contact", type:"libro", author:"Carl Sagan"},
      {title:"Revelation Space", type:"libro", author:"Alastair Reynolds"},
    ]
  },
  "bosque-oscuro": {
    id: "bosque-oscuro",
    label: "El bosque oscuro",
    desc: "La teoría de Liu Cixin: el universo es un bosque oscuro donde cada civilización caza a las demás. El silencio como estrategia de supervivencia.",
    connections: ["gran-silencio","hipotesis-zoo","civilizaciones-alienígenas","fin-humanidad","hipotesis-planeta-prohibido"],
    works: [
      {title:"El bosque oscuro", type:"libro", author:"Liu Cixin"},
      {title:"El problema de los tres cuerpos", type:"libro", author:"Liu Cixin"},
      {title:"Revelation Space", type:"libro", author:"Alastair Reynolds"},
    ]
  },
  "ultima-pregunta": {
    id: "ultima-pregunta",
    label: "La última pregunta",
    desc: "Las preguntas que la humanidad formulará al final de los tiempos. Asimov imaginó una sola: ¿puede revertirse la entropía?",
    connections: ["fin-universo","universos-moribundos","inteligencia-artificial","entidades-cosmicas","nostalgia-futuro"],
    works: [
      {title:"La última pregunta", type:"libro", author:"Isaac Asimov"},
      {title:"The Restaurant at the End of the Universe", type:"libro", author:"Douglas Adams"},
      {title:"Tau Zero", type:"libro", author:"Poul Anderson"},
    ]
  },
  "fin-humanidad": {
    id: "fin-humanidad",
    label: "El fin de la humanidad",
    desc: "Los escenarios del final de nuestra especie. Extinción, transformación o trascendencia — las tres formas en que podemos desaparecer.",
    connections: ["paradojas-temporales","naves-generacionales","ultimos-supervivientes","bosque-oscuro","evolucion-dirigida"],
    works: [
      {title:"La carretera", type:"libro", author:"Cormac McCarthy"},
      {title:"On the Beach", type:"libro", author:"Nevil Shute"},
      {title:"Children of Men", type:"pelicula", author:"Alfonso Cuarón"},
      {title:"Childhood's End", type:"libro", author:"Arthur C. Clarke"},
      {title:"Seveneves", type:"libro", author:"Neal Stephenson"},
    ]
  },
  "ultimo-hombre": {
    id: "ultimo-hombre",
    label: "El último hombre",
    desc: "El ser humano final, el que cierra la historia de la especie. Su soledad es la mayor que pueda imaginarse.",
    connections: ["ultimos-supervivientes","fin-humanidad","ultima-ciudad","mundos-abandonados","nostalgia-futuro"],
    works: [
      {title:"I Am Legend", type:"libro", author:"Richard Matheson"},
      {title:"On the Beach", type:"libro", author:"Nevil Shute"},
      {title:"The Last Man", type:"libro", author:"Mary Shelley"},
      {title:"Wall-E", type:"pelicula", author:"Pixar"},
    ]
  },
  "ultima-ciudad": {
    id: "ultima-ciudad",
    label: "La última ciudad",
    desc: "El último reducto de la civilización en un mundo que se extingue. Todo lo que queda de lo que fuimos concentrado en un solo lugar.",
    connections: ["universos-moribundos","ciudades-futuro","fin-humanidad","ultimo-hombre","nostalgia-futuro"],
    works: [
      {title:"The City of Ember", type:"libro", author:"Jeanne DuPrau"},
      {title:"Mortal Engines", type:"libro", author:"Philip Reeve"},
      {title:"Wall-E", type:"pelicula", author:"Pixar"},
      {title:"La carretera", type:"libro", author:"Cormac McCarthy"},
    ]
  },
  "ultima-biblioteca": {
    id: "ultima-biblioteca",
    label: "La última biblioteca",
    desc: "El repositorio final del conocimiento humano. Preservar la memoria de lo que fuimos cuando ya no quede nadie que lo recuerde.",
    connections: ["universos-moribundos","bibliotecas-infinitas","conocimientos-perdidos","fin-humanidad","nostalgia-futuro"],
    works: [
      {title:"Fahrenheit 451", type:"libro", author:"Ray Bradbury"},
      {title:"A Canticle for Leibowitz", type:"libro", author:"Walter M. Miller Jr."},
      {title:"Foundation", type:"libro", author:"Isaac Asimov"},
      {title:"The Time Machine", type:"libro", author:"H.G. Wells"},
    ]
  },
  "ultima-nave": {
    id: "ultima-nave",
    label: "La última nave",
    desc: "El único vehículo que queda para escapar o para sobrevivir. La nave como arca, como último recurso, como esperanza.",
    connections: ["universos-moribundos","naves-generacionales","ultimos-supervivientes","fin-humanidad","nostalgia-futuro"],
    works: [
      {title:"Seveneves", type:"libro", author:"Neal Stephenson"},
      {title:"Wall-E", type:"pelicula", author:"Pixar"},
      {title:"Battlestar Galactica", type:"serie", author:"Ronald D. Moore"},
      {title:"Titan A.E.", type:"pelicula", author:"Don Bluth"},
    ]
  },
  "especies-desaparecidas": {
    id: "especies-desaparecidas",
    label: "Especies desaparecidas",
    desc: "Formas de vida que existieron y ya no están. La extinción como destino posible de todo lo que vive, incluida la humanidad.",
    connections: ["mutacion","evolucion-dirigida","fin-humanidad","ruinas-civilizaciones","monumentos-extintas"],
    works: [
      {title:"Parque Jurásico", type:"libro", author:"Michael Crichton"},
      {title:"Oryx and Crake", type:"libro", author:"Margaret Atwood"},
      {title:"Children of Time", type:"libro", author:"Adrian Tchaikovsky"},
    ]
  },
  "especies-creadoras": {
    id: "especies-creadoras",
    label: "Especies creadoras desaparecidas",
    desc: "Civilizaciones que crearon otras formas de vida o civilizaciones y luego desaparecieron. Los dioses que se marcharon.",
    connections: ["arqueologia-cosmica","ruinas-civilizaciones","herederos-imperios","civilizaciones-olvidadas","artefactos-alienígenas"],
    works: [
      {title:"Mass Effect", type:"videojuego", author:"BioWare"},
      {title:"Prometheus", type:"pelicula", author:"Ridley Scott"},
      {title:"2001: A Space Odyssey", type:"pelicula", author:"Stanley Kubrick"},
      {title:"Childhood's End", type:"libro", author:"Arthur C. Clarke"},
    ]
  },
  "herederos-imperios": {
    id: "herederos-imperios",
    label: "Herederos de imperios galácticos",
    desc: "Civilizaciones que viven entre las ruinas de imperios que no construyeron. La herencia como peso y como posibilidad.",
    connections: ["ruinas-civilizaciones","megaestructuras","especies-creadoras","civilizaciones-olvidadas","arqueologia-cosmica"],
    works: [
      {title:"Foundation", type:"libro", author:"Isaac Asimov"},
      {title:"A Deepness in the Sky", type:"libro", author:"Vernor Vinge"},
      {title:"Mass Effect", type:"videojuego", author:"BioWare"},
      {title:"Dune", type:"libro", author:"Frank Herbert"},
    ]
  },
  "ruinas-orbitales": {
    id: "ruinas-orbitales",
    label: "Ruinas orbitales",
    desc: "Estructuras en el espacio que fueron habitadas o construidas y ya no lo son. Arqueología sin gravedad.",
    connections: ["megaestructuras","mundos-abandonados","ruinas-civilizaciones","satélites-muertos","herederos-imperios"],
    works: [
      {title:"Revelation Space", type:"libro", author:"Alastair Reynolds"},
      {title:"Halo", type:"videojuego", author:"Bungie"},
      {title:"Mass Effect", type:"videojuego", author:"BioWare"},
    ]
  },
  "satelites-muertos": {
    id: "satelites-muertos",
    label: "Satélites muertos",
    desc: "Artefactos orbitales que funcionaron y ya no funcionan. La basura tecnológica del espacio como metáfora de la caducidad.",
    connections: ["ruinas-orbitales","mundos-abandonados","memorias-artificiales","nostalgia-futuro","naves-fantasma"],
    works: [
      {title:"Gravity", type:"pelicula", author:"Alfonso Cuarón"},
      {title:"Wall-E", type:"pelicula", author:"Pixar"},
      {title:"Planetes", type:"manga", author:"Makoto Yukimura"},
    ]
  },
  "monumentos-extintas": {
    id: "monumentos-extintas",
    label: "Monumentos a especies extinguidas",
    desc: "Lo que una civilización construye para recordar lo que perdió. La elegía arquitectónica de una especie que ya no existe.",
    connections: ["ruinas-civilizaciones","especies-desaparecidas","civilizaciones-olvidadas","nostalgia-futuro","ecos-pasado"],
    works: [
      {title:"Mass Effect", type:"videojuego", author:"BioWare"},
      {title:"Revelation Space", type:"libro", author:"Alastair Reynolds"},
      {title:"Horizon Zero Dawn", type:"videojuego", author:"Guerrilla Games"},
    ]
  },
  "memorias-artificiales": {
    id: "memorias-artificiales",
    label: "Memorias artificiales",
    desc: "Recuerdos creados, implantados o almacenados tecnológicamente. Cuando la experiencia vivida puede ser fabricada.",
    connections: ["recuerdos-implantados","memoria","identidad","conciencias-digitales","simulacros-copias"],
    works: [
      {title:"Total Recall", type:"pelicula", author:"Paul Verhoeven"},
      {title:"Blade Runner", type:"pelicula", author:"Ridley Scott"},
      {title:"Eternal Sunshine of the Spotless Mind", type:"pelicula", author:"Michel Gondry"},
      {title:"Black Mirror: The Entire History of You", type:"serie", author:"Charlie Brooker"},
    ]
  },
  "recuerdos-implantados": {
    id: "recuerdos-implantados",
    label: "Recuerdos implantados",
    desc: "Memorias falsas introducidas en una mente. Si no puedes distinguir tus recuerdos reales de los falsos, ¿quién eres?",
    connections: ["memorias-artificiales","clonacion","identidad","memoria","vigilancia-absoluta"],
    works: [
      {title:"Blade Runner", type:"pelicula", author:"Ridley Scott"},
      {title:"Total Recall", type:"pelicula", author:"Paul Verhoeven"},
      {title:"¿Sueñan los androides con ovejas eléctricas?", type:"libro", author:"Philip K. Dick"},
      {title:"Dark City", type:"pelicula", author:"Alex Proyas"},
    ]
  },
  "recuerdos-heredados": {
    id: "recuerdos-heredados",
    label: "Recuerdos heredados",
    desc: "Memorias transmitidas de generación en generación, biológica o tecnológicamente. Cargar con lo que vivieron otros.",
    connections: ["ecos-pasado","memoria","vidas-anteriores","identidad","memorias-artificiales"],
    works: [
      {title:"Dune", type:"libro", author:"Frank Herbert"},
      {title:"Hyperion", type:"libro", author:"Dan Simmons"},
      {title:"The First Fifteen Lives of Harry August", type:"libro", author:"Claire North"},
      {title:"The Peripheral", type:"serie", author:"Amazon"},
    ]
  },
  "vidas-anteriores": {
    id: "vidas-anteriores",
    label: "Vidas anteriores tecnológicas",
    desc: "Existencias previas que han podido ser almacenadas, recuperadas o revividas mediante tecnología. La reencarnación hecha ingeniería.",
    connections: ["viajes-tiempo","recuerdos-heredados","inmortalidad","memorias-artificiales","identidad"],
    works: [
      {title:"The First Fifteen Lives of Harry August", type:"libro", author:"Claire North"},
      {title:"Altered Carbon", type:"libro", author:"Richard Morgan"},
      {title:"Dark", type:"serie", author:"Baran bo Odar"},
      {title:"Soma", type:"videojuego", author:"Frictional Games"},
    ]
  },
  "nostalgia-futuro": {
    id: "nostalgia-futuro",
    label: "La nostalgia del futuro",
    desc: "Añorar algo que aún no ha existido. El sentimiento de pérdida por un futuro que prometía algo que nunca llegó.",
    connections: ["universos-moribundos","mundos-abandonados","ultima-ciudad","fin-humanidad","ecos-pasado"],
    works: [
      {title:"Blade Runner", type:"pelicula", author:"Ridley Scott"},
      {title:"Her", type:"pelicula", author:"Spike Jonze"},
      {title:"Wall-E", type:"pelicula", author:"Pixar"},
      {title:"The Road", type:"pelicula", author:"John Hillcoat"},
      {title:"Metrópolis", type:"pelicula", author:"Fritz Lang"},
    ]
  },
  "energia-estelar": {
    id: "energia-estelar",
    label: "Energía estelar",
    desc: "El aprovechamiento de la energía de las estrellas a escala masiva. El paso de una civilización tipo I a tipo II en la escala de Kardashev.",
    connections: ["esferas-dyson","megaestructuras","civilizaciones-alienígenas","colonizacion-espacial","herederos-imperios"],
    works: [
      {title:"Permanence", type:"libro", author:"Karl Schroeder"},
      {title:"Diaspora", type:"libro", author:"Greg Egan"},
      {title:"The Algebraist", type:"libro", author:"Iain M. Banks"},
    ]
  },
};

// ═══════════════════════════════════════
// CAMINOS TEMÁTICOS
// ═══════════════════════════════════════
const PATHS = [
  {
    id: "singularidad",
    title: "El Camino de la Singularidad",
    emoji: "🤖",
    desc: "Desde la primera chispa de la IA hasta la disolución de lo humano en algo incomprensiblemente superior.",
    nodes: ["inteligencia-artificial","singularidad-tecnologica","mentes-colmena","posthumanismo","conciencias-digitales","inmortalidad","transferencia-mental"],
    color: "#a29bfe"
  },
  {
    id: "melancolia",
    title: "El Camino de la Melancolía Cósmica",
    emoji: "🌑",
    desc: "Un viaje por lo que queda cuando las civilizaciones desaparecen. Ruinas, memoria, y la soledad del último testigo.",
    nodes: ["ruinas-civilizaciones","civilizaciones-olvidadas","arqueologia-cosmica","ecos-pasado","memoria","nostalgia-futuro","ultimo-hombre","fin-universo"],
    color: "#fd79a8"
  },
  {
    id: "primer-contacto",
    title: "El Camino del Encuentro",
    emoji: "👁️",
    desc: "La humanidad frente a lo completamente otro. Del silencio cósmico al momento que lo cambia todo.",
    nodes: ["gran-silencio","senales-desconocidas","primer-contacto","lenguajes-extraterrestres","lo-incomprensible","contacto-extraterrestre","civilizaciones-alienígenas"],
    color: "#00e5c0"
  },
  {
    id: "identidad",
    title: "El Camino del Yo",
    emoji: "🪞",
    desc: "¿Qué te hace ser tú? Un recorrido por los límites de la identidad cuando la memoria, el cuerpo y la conciencia son alterables.",
    nodes: ["memoria","recuerdos-implantados","memorias-artificiales","identidad","clonacion","simulacros-copias","transferencia-mental","libre-albedrio"],
    color: "#64c8ff"
  },
  {
    id: "distopia",
    title: "El Camino del Control",
    emoji: "👁‍🗨",
    desc: "Cómo el poder se vuelve total. Del Estado vigilante a las corporaciones omnipotentes y los dioses tecnológicos.",
    nodes: ["vigilancia-absoluta","estados-totalitarios","distopias","corporaciones-omnipotentes","libre-albedrio","mesias-tecnologicos","religiones-futuro"],
    color: "#ff7675"
  },
  {
    id: "escala",
    title: "El Camino de la Megaescala",
    emoji: "🌌",
    desc: "Cuando la ingeniería ya no está limitada por un planeta. Estructuras que hacen pequeño al sistema solar.",
    nodes: ["ascensores-espaciales","colonizacion-espacial","megaestructuras","mundos-anillo","esferas-dyson","energia-estelar","herederos-imperios"],
    color: "#f5c518"
  },
  {
    id: "fin",
    title: "El Camino del Fin",
    emoji: "🕯️",
    desc: "Los últimos escenarios. Cuando la humanidad, el planeta o el universo llegan a su conclusión inevitable.",
    nodes: ["ultimos-supervivientes","ultimo-hombre","ultima-ciudad","ultima-biblioteca","ultima-nave","fin-humanidad","universos-moribundos","fin-universo","ultima-pregunta"],
    color: "#b2bec3"
  },
  {
    id: "misterio",
    title: "El Camino de lo Incomprensible",
    emoji: "🌀",
    desc: "Lo que existe más allá del entendimiento humano. Presencias que no podemos ver, tecnologías que no podemos comprender.",
    nodes: ["presencias-desconocidas","observadores-invisibles","tecnologias-incomprensibles","artefactos-alienígenas","lo-incomprensible","entidades-cosmicas","oceanos-conscientes"],
    color: "#e17055"
  },
  {
    id: "tiempo",
    title: "El Camino del Tiempo Roto",
    emoji: "⏳",
    desc: "El tiempo como material maleable. Paradojas, bucles, mensajes del futuro y la imposibilidad del libre albedrío.",
    nodes: ["viajes-tiempo","paradojas-temporales","mensajes-futuro","universos-paralelos","libre-albedrio","vidas-anteriores","recuerdos-heredados","ecos-pasado"],
    color: "#74b9ff"
  },
  {
    id: "evolucion",
    title: "El Camino de la Evolución",
    emoji: "🧬",
    desc: "Tomar el control de lo que somos. Desde la ingeniería genética hasta la creación de nuevas especies y ecologías.",
    nodes: ["ingenieria-genetica","clonacion","mutacion","evolucion-dirigida","posthumanismo","ecologias-alienígenas","terraformacion","especies-creadoras"],
    color: "#55efc4"
  },
];

// ═══════════════════════════════════════
// SENSACIONES
// ═══════════════════════════════════════
const SENSATIONS = {
  asombro: {
    label: "Asombro", emoji: "✨", color: "#f5c518",
    desc: "La CF que te hace sentir pequeño de la mejor manera posible.",
    nodes: ["megaestructuras","esferas-dyson","mundos-anillo","entidades-cosmicas","fin-universo","universos-paralelos","agujeros-negros","energia-estelar","arqueologia-cosmica"]
  },
  terror: {
    label: "Terror cósmico", emoji: "🌑", color: "#2d3436",
    desc: "El universo no es hostil. Es peor: es indiferente.",
    nodes: ["lo-incomprensible","presencias-desconocidas","observadores-invisibles","gran-silencio","bosque-oscuro","naves-fantasma","entidades-cosmicas","hipotesis-zoo","fin-humanidad"]
  },
  melancolia: {
    label: "Melancolía", emoji: "🌫️", color: "#74b9ff",
    desc: "La tristeza hermosa de lo que fue y ya no es.",
    nodes: ["nostalgia-futuro","ruinas-civilizaciones","mundos-abandonados","civilizaciones-olvidadas","ultimo-hombre","planetas-cementerio","satelites-muertos","ecos-pasado","ultima-biblioteca"]
  },
  esperanza: {
    label: "Esperanza", emoji: "🌱", color: "#00e5c0",
    desc: "La CF que cree que podemos llegar a las estrellas y merecer llegar.",
    nodes: ["colonizacion-espacial","terraformacion","utopias","escasez-abundancia","evolucion-dirigida","posthumanismo","ascensores-espaciales","primer-contacto"]
  },
  extraneza: {
    label: "Extrañeza", emoji: "🌀", color: "#a29bfe",
    desc: "Cuando la realidad deja de comportarse como se espera.",
    nodes: ["realidades-simuladas","suenos-compartidos","universos-paralelos","habitantes-dimensiones","oceanos-conscientes","inteligencias-planetarias","objetos-lugar","reliquias-imposibles","lo-incomprensible"]
  },
  trascendencia: {
    label: "Trascendencia", emoji: "🔮", color: "#fd79a8",
    desc: "Más allá de lo humano. La CF que toca lo sagrado sin religión.",
    nodes: ["singularidad-tecnologica","posthumanismo","transferencia-mental","inmortalidad","conciencias-digitales","entidades-cosmicas","dioses-alienígenas","mesias-tecnologicos","fin-universo","ultima-pregunta"]
  },
  inmensidad: {
    label: "Inmensidad", emoji: "🌌", color: "#fdcb6e",
    desc: "La sensación física de que el universo es demasiado grande para comprenderlo.",
    nodes: ["agujeros-negros","universos-moribundos","fin-universo","megaestructuras","esferas-dyson","gran-silencio","arqueologia-cosmica","herederos-imperios","naves-generacionales"]
  },
  paranoia: {
    label: "Paranoia", emoji: "👁️", color: "#e17055",
    desc: "Algo sabe que existes. Algo te observa. Algo no es lo que parece.",
    nodes: ["vigilancia-absoluta","simulacros-copias","realidades-simuladas","observadores-invisibles","hipotesis-zoo","presencias-desconocidas","recuerdos-implantados","estados-totalitarios"]
  }
};

// ═══════════════════════════════════════
// CRONOLOGÍA
// ═══════════════════════════════════════
const TIMELINE = [
  { decade: "1800s", label: "Siglo XIX", color: "#fdcb6e",
    nodes: ["viajes-tiempo","ingenieria-genetica","megaestructuras","inmortalidad","mutacion","evolucion-dirigida"],
    note: "Wells, Verne y Shelley definen los primeros grandes conceptos: el viaje en el tiempo, la ingeniería extrema y el monstruo creado por el hombre."
  },
  { decade: "1920s", label: "Años 20-30", color: "#f5c518",
    nodes: ["inteligencia-artificial","distopias","mundos-artificiales","estados-totalitarios","realidades-simuladas","ciudades-futuro"],
    note: "Čapek inventa la palabra 'robot'. Zamyatin y Huxley imaginan el totalitarismo antes de que llegue. Lang construye Metrópolis."
  },
  { decade: "1940s", label: "Años 40-50", color: "#e17055",
    nodes: ["primer-contacto","contacto-extraterrestre","colonizacion-espacial","naves-generacionales","ascensores-espaciales","libre-albedrio","clonacion","artefactos-alienígenas"],
    note: "La edad dorada. Asimov, Clarke y Heinlein construyen el vocabulario de la CF moderna. El espacio como frontera inevitable."
  },
  { decade: "1960s", label: "Años 60-70", color: "#fd79a8",
    nodes: ["corporaciones-omnipotentes","ecologias-alienígenas","civilizaciones-alienígenas","evolucion-dirigida","mesias-tecnologicos","religiones-futuro","lenguajes-extraterrestres","gran-silencio","ultimo-hombre","fin-humanidad","arqueologia-cosmica","ruinas-civilizaciones"],
    note: "La nueva ola. Dick, Le Guin, Ballard y Lem llevan la CF hacia el interior. Dune redefine el género. El primer contacto se vuelve filosófico."
  },
  { decade: "1980s", label: "Años 80", color: "#a29bfe",
    nodes: ["realidad-virtual","memoria","identidad","simulacros-copias","vigilancia-absoluta","transferencia-mental","recuerdos-implantados","memorias-artificiales","posthumanismo","nostalgia-futuro"],
    note: "El cyberpunk. Gibson inventa el ciberespacio. Blade Runner define la estética del futuro oscuro. La identidad se vuelve el gran tema."
  },
  { decade: "1990s", label: "Años 90", color: "#00e5c0",
    nodes: ["singularidad-tecnologica","realidades-simuladas","posthumanismo","conciencias-digitales","universos-paralelos","mentes-colmena","suenos-compartidos","habitantes-dimensiones","inmortalidad","megaestructuras","esferas-dyson"],
    note: "La singularidad y Matrix. La CF absorbe internet. Vinge propone la singularidad tecnológica. Los universos paralelos se vuelven narrativa mainstream."
  },
  { decade: "2000s", label: "Años 2000", color: "#64c8ff",
    nodes: ["bosque-oscuro","gran-silencio","arqueologia-cosmica","ruinas-civilizaciones","civilizaciones-olvidadas","herederos-imperios","especies-creadoras","entidades-cosmicas","fin-universo","universos-moribundos","ultima-pregunta","recuerdos-heredados","vidas-anteriores"],
    note: "La CF de las consecuencias. Liu Cixin, Reynolds y Banks exploran imperios galácticos y el silencio cósmico. La escala se vuelve astronómica."
  },
  { decade: "2010s", label: "Años 2010-hoy", color: "#55efc4",
    nodes: ["lo-incomprensible","presencias-desconocidas","observadores-invisibles","mundos-abandonados","planetas-cementerio","satelites-muertos","monumentos-extintas","naves-fantasma","oceanos-conscientes","inteligencias-planetarias","cartografias-perdidas","mapas-ninguna-parte","fin-humanidad","nostalgia-futuro"],
    note: "La CF de la ansiedad. Annihilation, Arrival y el resurgir del terror cósmico. El futuro como amenaza. Lo incomprensible como estética."
  },
];

// ═══════════════════════════════════════
// ADN DE OBRAS
// ═══════════════════════════════════════
const WORK_DNA = {
  "Dune": {
    author: "Frank Herbert", year: 1965, type: "libro",
    dna: [
      {node: "ecologias-alienígenas", pct: 95},
      {node: "religiones-futuro", pct: 90},
      {node: "mesias-tecnologicos", pct: 88},
      {node: "corporaciones-omnipotentes", pct: 75},
      {node: "evolucion-dirigida", pct: 70},
      {node: "recuerdos-heredados", pct: 65},
    ]
  },
  "Blade Runner": {
    author: "Ridley Scott", year: 1982, type: "pelicula",
    dna: [
      {node: "identidad", pct: 95},
      {node: "memorias-artificiales", pct: 90},
      {node: "simulacros-copias", pct: 85},
      {node: "nostalgia-futuro", pct: 85},
      {node: "corporaciones-omnipotentes", pct: 70},
      {node: "libre-albedrio", pct: 65},
    ]
  },
  "2001: A Space Odyssey": {
    author: "Stanley Kubrick", year: 1968, type: "pelicula",
    dna: [
      {node: "inteligencia-artificial", pct: 90},
      {node: "entidades-cosmicas", pct: 95},
      {node: "evolucion-dirigida", pct: 85},
      {node: "lo-incomprensible", pct: 88},
      {node: "artefactos-alienígenas", pct: 80},
      {node: "trascendencia", pct: 75},
    ]
  },
  "Solaris": {
    author: "Stanislaw Lem", year: 1961, type: "libro",
    dna: [
      {node: "oceanos-conscientes", pct: 100},
      {node: "lo-incomprensible", pct: 95},
      {node: "primer-contacto", pct: 90},
      {node: "memoria", pct: 85},
      {node: "identidad", pct: 80},
    ]
  },
  "Neuromancer": {
    author: "William Gibson", year: 1984, type: "libro",
    dna: [
      {node: "realidad-virtual", pct: 95},
      {node: "corporaciones-omnipotentes", pct: 90},
      {node: "inteligencia-artificial", pct: 85},
      {node: "identidad", pct: 75},
      {node: "memorias-artificiales", pct: 70},
    ]
  },
  "El problema de los tres cuerpos": {
    author: "Liu Cixin", year: 2006, type: "libro",
    dna: [
      {node: "bosque-oscuro", pct: 100},
      {node: "gran-silencio", pct: 95},
      {node: "civilizaciones-alienígenas", pct: 90},
      {node: "fin-humanidad", pct: 85},
      {node: "observadores-invisibles", pct: 80},
      {node: "senales-desconocidas", pct: 75},
    ]
  },
  "Annihilation": {
    author: "Jeff VanderMeer", year: 2014, type: "libro",
    dna: [
      {node: "lo-incomprensible", pct: 100},
      {node: "presencias-desconocidas", pct: 95},
      {node: "mundos-abandonados", pct: 85},
      {node: "mutacion", pct: 80},
      {node: "identidad", pct: 75},
      {node: "artefactos-alienígenas", pct: 70},
    ]
  },
  "Interstellar": {
    author: "Christopher Nolan", year: 2014, type: "pelicula",
    dna: [
      {node: "agujeros-negros", pct: 90},
      {node: "fin-humanidad", pct: 88},
      {node: "viajes-tiempo", pct: 85},
      {node: "colonizacion-espacial", pct: 80},
      {node: "entidades-cosmicas", pct: 75},
      {node: "memoria", pct: 70},
    ]
  },
  "Hyperion": {
    author: "Dan Simmons", year: 1989, type: "libro",
    dna: [
      {node: "viajes-tiempo", pct: 85},
      {node: "religiones-futuro", pct: 88},
      {node: "inteligencia-artificial", pct: 80},
      {node: "colonizacion-espacial", pct: 75},
      {node: "mentes-colmena", pct: 70},
      {node: "recuerdos-heredados", pct: 72},
    ]
  },
  "Matrix": {
    author: "Wachowskis", year: 1999, type: "pelicula",
    dna: [
      {node: "realidades-simuladas", pct: 100},
      {node: "libre-albedrio", pct: 90},
      {node: "mesias-tecnologicos", pct: 88},
      {node: "inteligencia-artificial", pct: 85},
      {node: "identidad", pct: 80},
      {node: "realidad-virtual", pct: 75},
    ]
  },
  "Mass Effect": {
    author: "BioWare", year: 2007, type: "videojuego",
    dna: [
      {node: "arqueologia-cosmica", pct: 95},
      {node: "civilizaciones-alienígenas", pct: 90},
      {node: "ruinas-civilizaciones", pct: 88},
      {node: "primer-contacto", pct: 80},
      {node: "herederos-imperios", pct: 85},
    ]
  },
  "Arrival": {
    author: "Denis Villeneuve", year: 2016, type: "pelicula",
    dna: [
      {node: "lenguajes-extraterrestres", pct: 100},
      {node: "viajes-tiempo", pct: 85},
      {node: "primer-contacto", pct: 90},
      {node: "memoria", pct: 80},
      {node: "libre-albedrio", pct: 75},
      {node: "lo-incomprensible", pct: 70},
    ]
  },
  "Dune: Parte Uno": {
    author: "Denis Villeneuve", year: 2021, type: "pelicula",
    dna: [
      {node: "ecologias-alienígenas", pct: 95},
      {node: "mesias-tecnologicos", pct: 90},
      {node: "religiones-futuro", pct: 85},
      {node: "corporaciones-omnipotentes", pct: 75},
      {node: "recuerdos-heredados", pct: 70},
    ]
  },
  "Stalker": {
    author: "Andrei Tarkovsky", year: 1979, type: "pelicula",
    dna: [
      {node: "mundos-abandonados", pct: 95},
      {node: "artefactos-alienígenas", pct: 90},
      {node: "lo-incomprensible", pct: 95},
      {node: "libre-albedrio", pct: 80},
      {node: "presencias-desconocidas", pct: 85},
    ]
  },
  "Fundación": {
    author: "Isaac Asimov", year: 1951, type: "libro",
    dna: [
      {node: "civilizaciones-olvidadas", pct: 80},
      {node: "herederos-imperios", pct: 95},
      {node: "conocimientos-perdidos", pct: 90},
      {node: "ultima-biblioteca", pct: 85},
      {node: "libre-albedrio", pct: 75},
    ]
  },
  "Altered Carbon": {
    author: "Richard Morgan", year: 2002, type: "libro",
    dna: [
      {node: "transferencia-mental", pct: 100},
      {node: "inmortalidad", pct: 90},
      {node: "identidad", pct: 88},
      {node: "corporaciones-omnipotentes", pct: 75},
      {node: "memorias-artificiales", pct: 70},
    ]
  },
  "Children of Time": {
    author: "Adrian Tchaikovsky", year: 2015, type: "libro",
    dna: [
      {node: "evolucion-dirigida", pct: 100},
      {node: "especies-creadoras", pct: 90},
      {node: "civilizaciones-alienígenas", pct: 88},
      {node: "lenguajes-extraterrestres", pct: 75},
      {node: "colonizacion-espacial", pct: 70},
    ]
  },
  "Marte Rojo": {
    author: "Kim Stanley Robinson", year: 1992, type: "libro",
    dna: [
      {node: "terraformacion", pct: 100},
      {node: "colonizacion-espacial", pct: 95},
      {node: "ecologias-alienígenas", pct: 85},
      {node: "utopias", pct: 75},
      {node: "ingenieria-genetica", pct: 65},
    ]
  },
  "Childhood's End": {
    author: "Arthur C. Clarke", year: 1953, type: "libro",
    dna: [
      {node: "dioses-alienígenas", pct: 95},
      {node: "fin-humanidad", pct: 90},
      {node: "evolucion-dirigida", pct: 88},
      {node: "entidades-cosmicas", pct: 85},
      {node: "contacto-extraterrestre", pct: 80},
    ]
  },
  "1984": {
    author: "George Orwell", year: 1949, type: "libro",
    dna: [
      {node: "vigilancia-absoluta", pct: 100},
      {node: "estados-totalitarios", pct: 100},
      {node: "memorias-artificiales", pct: 85},
      {node: "libre-albedrio", pct: 80},
      {node: "identidad", pct: 75},
    ]
  },
  "Ex Machina": {
    author: "Alex Garland", year: 2014, type: "pelicula",
    dna: [
      {node: "inteligencia-artificial", pct: 100},
      {node: "identidad", pct: 90},
      {node: "libre-albedrio", pct: 88},
      {node: "simulacros-copias", pct: 80},
      {node: "singularidad-tecnologica", pct: 70},
    ]
  },
};

// ═══════════════════════════════════════
// POR QUÉ EXISTE ESTE ENLACE
// ═══════════════════════════════════════
const EDGE_REASONS = {
  "inteligencia-artificial||singularidad-tecnologica": "La IA es el camino hacia la singularidad: el momento en que una inteligencia artificial supera a la humana y el cambio se vuelve impredecible. Una es el medio, la otra es el destino.",
  "memoria||identidad": "Sin memoria no hay identidad. Lo que somos es la suma de lo que recordamos haber sido. La CF explora qué pasa cuando esa ecuación puede ser manipulada.",
  "ruinas-civilizaciones||arqueologia-cosmica": "Las ruinas son el objeto de estudio de la arqueología cósmica. Toda civilización desaparecida deja algo: una estructura orbital, un patrón de señales, un silencio demasiado profundo.",
  "gran-silencio||bosque-oscuro": "El bosque oscuro es una respuesta al gran silencio. Si el universo está lleno de vida pero no oímos nada, quizás es porque todas las civilizaciones aprenden a callarse para sobrevivir.",
  "identidad||clonacion": "La clonación pone a prueba la identidad: si existe una copia exacta de ti, ¿cuál de los dos es el real? ¿La identidad reside en el cuerpo, en la memoria, o en algo que no puede copiarse?",
  "viajes-tiempo||paradojas-temporales": "Los viajes en el tiempo generan paradojas de forma inevitable. Si puedes cambiar el pasado, ¿qué impide que destruyas las condiciones que permitieron tu viaje?",
  "posthumanismo||inmortalidad": "El posthumanismo incluye la inmortalidad como posibilidad técnica: si podemos modificar el sustrato biológico sin límite, la muerte se convierte en un problema de ingeniería.",
  "distopias||vigilancia-absoluta": "Toda distopía moderna incluye la vigilancia como mecanismo de control. No se puede mantener un sistema totalitario sin saber lo que piensan los ciudadanos.",
  "mentes-colmena||identidad": "Las mentes colmena disuelven el yo individual en una conciencia colectiva. La pregunta que plantean es si la identidad personal tiene valor cuando puede fusionarse con algo mayor.",
  "lo-incomprensible||primer-contacto": "El primer contacto con una inteligencia verdaderamente alien podría ser una experiencia de lo incomprensible: una mente tan diferente que el encuentro no parezca comunicación sino fenómeno natural.",
  "nostalgia-futuro||ruinas-civilizaciones": "La nostalgia del futuro y las ruinas comparten la misma estructura emocional: el dolor por algo que existió y ya no está, o por algo que prometía existir y nunca llegó.",
  "realidades-simuladas||identidad": "Si vivimos en una simulación, la identidad se vuelve código. No somos quienes creemos ser sino instancias de un programa que puede ser editado, copiado o terminado.",
  "colonizacion-espacial||terraformacion": "La terraformación es el paso previo necesario a la colonización de mundos inhóspitos: antes de poder vivir en otro planeta, hay que convertirlo en algo parecido a casa.",
  "civilizaciones-alienígenas||ruinas-civilizaciones": "Toda civilización avanzada que no encontramos viva la encontramos en ruinas. La CF más oscura sugiere que la extinción es el destino normal de la inteligencia en el universo.",
  "fin-universo||ultima-pregunta": "La última pregunta es inevitablemente sobre el fin del universo: ¿puede revertirse la entropía? ¿Puede algo sobrevivir al calor final? Asimov convirtió esta conexión en el mejor relato de CF corto jamás escrito.",
  "inteligencia-artificial||conciencias-digitales": "Una IA suficientemente compleja no es solo una herramienta: es una conciencia. El salto entre computación y experiencia subjetiva es el abismo filosófico más profundo de la CF contemporánea.",
  "viajes-tiempo||universos-paralelos": "Cada viaje en el tiempo que cambia el pasado podría generar una rama temporal alternativa. Los universos paralelos son la solución elegante a las paradojas temporales: nada se borra, todo se bifurca.",
  "contacto-extraterrestre||lenguajes-extraterrestres": "El contacto exige comunicación, y la comunicación exige un lenguaje. El problema es que un lenguaje verdaderamente alienígena podría ser tan diferente del humano que el contacto mismo sea imposible.",
  "megaestructuras||esferas-dyson": "La esfera de Dyson es la megaestructura por excelencia: una civilización que ha agotado su planeta construye una cáscara alrededor de su estrella para capturar toda su energía. El fin lógico del crecimiento.",
  "inteligencia-artificial||libre-albedrio": "Si una IA toma decisiones, ¿las toma libremente? La pregunta del libre albedrío se vuelve urgente cuando la inteligencia deja de ser biológica: ¿puede haber responsabilidad moral sin libertad?",
  "fin-humanidad||ultimo-hombre": "El último hombre es la figura que cierra la historia de la humanidad. No su asesino sino su testigo: alguien que recuerda lo que fuimos cuando ya no queda nadie más.",
  "oceanos-conscientes||inteligencias-planetarias": "Los océanos conscientes de Solaris son el arquetipo de la inteligencia planetaria: una mente que ocupa un mundo entero y que por su escala es completamente incomprensible para los visitantes.",
  "realidades-simuladas||realidad-virtual": "La realidad virtual es el primer paso hacia la simulación total. La diferencia entre ambas es solo de grado: en un punto la simulación se vuelve indistinguible del original.",
  "ingenieria-genetica||evolucion-dirigida": "La ingeniería genética convierte la evolución en un acto consciente. La humanidad deja de ser producto de la selección natural para convertirse en su propio diseñador.",
  "naves-generacionales||colonizacion-espacial": "Las naves generacionales son la solución bruta al problema de las distancias interestelares: si no podemos ir más rápido, viajamos durante generaciones. Una civilización completa nace y muere en el viaje.",
  "agujeros-negros||agujeros-gusano": "Los agujeros de gusano son teóricamente posibles como consecuencia de la relatividad general, que también predice los agujeros negros. Uno deforma el espacio-tiempo hasta romperlo; el otro podría crear un atajo a través de esa rotura.",
  "estados-totalitarios||vigilancia-absoluta": "El totalitarismo moderno no necesita ejércitos: necesita cámaras. La vigilancia absoluta convierte la sociedad en su propio carcelero, donde la disidencia se vuelve imposible antes de ser penada.",
  "transferencia-mental||inmortalidad": "Si puedes copiar una mente a un sustrato digital, la muerte biológica deja de ser definitiva. La transferencia mental es la ruta tecnológica hacia la inmortalidad — con la pregunta de si la copia es realmente tú.",
  "bosque-oscuro||civilizaciones-alienígenas": "El bosque oscuro implica que el universo está lleno de civilizaciones que se esconden mutuamente. Cada estrella podría albergar vida que ha aprendido que revelarse equivale a morir.",
  "memorias-artificiales||identidad": "Si tus recuerdos pueden ser implantados, modificados o borrados, ¿qué queda de ti? Las memorias artificiales disuelven la frontera entre experiencia vivida y experiencia fabricada.",
  "distopias||utopias": "Utopía y distopía son la misma historia contada desde perspectivas opuestas. La utopía de unos siempre requiere la distopía de otros: alguien paga el precio del paraíso.",
  "primer-contacto||hipotesis-zoo": "La hipótesis del zoo sugiere que ya hemos tenido contacto de una forma — siendo observados. Si civilizaciones avanzadas nos vigilan sin intervenir, el primer contacto visible podría ser la decisión de salir del escondite.",
  "artefactos-alienígenas||tecnologias-incomprensibles": "Un artefacto alienígena es tecnología incomprensible por definición: un objeto cuya función, origen y principios de funcionamiento exceden cualquier marco conceptual humano. El encuentro con uno es siempre una crisis epistemológica.",
  "clonacion||simulacros-copias": "La clonación produce copias biológicas; los simulacros producen copias funcionales. Ambos plantean la misma pregunta: ¿la copia tiene los mismos derechos que el original? ¿Tiene el mismo yo?",
  "entidades-cosmicas||dioses-alienígenas": "La diferencia entre una entidad cósmica y un dios alienígena es solo de escala y de nuestra reacción ante ellos. Cuando el poder es suficientemente incomprensible, la distinción entre ciencia y religión desaparece.",
  "energia-estelar||megaestructuras": "Capturar la energía de una estrella requiere megaestructuras de escala planetaria. Es el umbral entre civilización tipo I y tipo II en la escala de Kardashev: la diferencia entre explotar un planeta y explotar un sol.",
  "mundos-anillo||megaestructuras": "El mundo anillo es la megaestructura habitable por excelencia: una cinta alrededor de una estrella con la superficie interior de millones de Tierras. La CF de Niven la convirtió en el símbolo de la ingeniería a escala cósmica.",
  "posthumanismo||transferencia-mental": "El posthumanismo culmina en la transferencia mental: cuando la biología ya no es necesaria, lo humano puede existir en cualquier sustrato. La pregunta es si algo de lo humano sobrevive al cambio de envase.",
  "ecos-pasado||recuerdos-heredados": "Los ecos del pasado y los recuerdos heredados son formas de que el tiempo fluya hacia atrás: el pasado contamina el presente, los muertos hablan a través de los vivos, la historia no termina nunca.",
  "mundos-abandonados||civilizaciones-olvidadas": "Todo mundo abandonado es el testimonio silencioso de una civilización olvidada. La CF arqueológica trata estos escenarios como escenas del crimen: ¿qué ocurrió aquí, y podría ocurrirnos a nosotros?",
  "agujeros-negros||fin-universo": "Los agujeros negros son los únicos objetos que sobrevivirán al fin del universo tal como lo conocemos. Cuando todas las estrellas se apaguen, solo quedarán agujeros negros evaporándose lentamente durante eones.",
  "religiones-futuro||mesias-tecnologicos": "Las religiones del futuro nacen cuando la tecnología supera la comprensión humana. El mesías tecnológico es la figura que promete redención a través del código: la singularidad como segunda venida.",
  "suenos-compartidos||conciencias-digitales": "Los sueños compartidos son la forma primitiva de la conciencia digital colectiva: mentes que se tocan en un espacio que no existe físicamente. La CF usa esta imagen para explorar los límites de lo individual.",
  "bibliotecas-infinitas||archivos-prohibidos": "Toda biblioteca infinita contiene archivos prohibidos: si está todo, también está lo que nadie debería saber. El conocimiento total implica conocimiento peligroso, y alguien siempre decide qué puede leerse.",
  "mensajes-futuro||viajes-tiempo": "Un mensaje del futuro es un viaje en el tiempo de información: no viaja el cuerpo pero viaja el conocimiento. Y ese conocimiento cambia el presente, creando la misma paradoja que el viaje físico.",
  "fin-humanidad||ultimos-supervivientes": "Los últimos supervivientes son la humanidad reducida a su mínima expresión. La CF los usa como lente para examinar qué define lo humano cuando todo lo accesorio ha desaparecido.",
  "planetas-cementerio||ruinas-orbitales": "Los planetas cementerio y las ruinas orbitales forman el paisaje de la extinción: un mundo muerto rodeado de los restos de lo que construyó antes de desaparecer. La arqueología cósmica empieza aquí.",
  "libres-albedrio||singularidad-tecnologica": "Si la singularidad produce inteligencias que nos superan infinitamente, el libre albedrío humano se vuelve irrelevante: nuestras decisiones serían tan significativas como las de una hormiga ante un arquitecto.",
  "hipotesis-zoo||gran-silencio": "El zoo explica el silencio: no estamos solos, simplemente estamos en cuarentena. El universo habla, pero no con nosotros. Todavía.",
};

// ═══════════════════════════════════════
// NODOS SECRETOS
// ═══════════════════════════════════════
const SECRET_NODES = {
  "el-gran-arquitecto": {
    id: "el-gran-arquitecto",
    label: "El Gran Arquitecto",
    desc: "Una entidad — o un patrón — que parece haber diseñado las leyes del universo con un propósito. La CF más especulativa pregunta si la física tiene autor.",
    unlockCondition: ["realidades-simuladas","entidades-cosmicas","lo-incomprensible"],
    unlockText: "Has explorado la simulación, las entidades cósmicas y lo incomprensible. Algo empieza a tomar forma en los bordes del mapa.",
    connections: ["realidades-simuladas","entidades-cosmicas","dioses-alienígenas","fin-universo"],
    works: [
      {title:"2001: A Space Odyssey", type:"pelicula", author:"Stanley Kubrick"},
      {title:"Permutation City", type:"libro", author:"Greg Egan"},
      {title:"La última pregunta", type:"libro", author:"Isaac Asimov"},
    ],
    color: "#ffffff"
  },
  "el-olvido-total": {
    id: "el-olvido-total",
    label: "El Olvido Total",
    desc: "El estado en que una civilización desaparece tan completamente que ni siquiera quedan ruinas. La extinción perfecta. La muerte sin testigos.",
    unlockCondition: ["civilizaciones-olvidadas","monumentos-extintas","ecos-pasado"],
    unlockText: "Has seguido el rastro de lo que desaparece. Ahora puedes ver lo que no deja rastro.",
    connections: ["civilizaciones-olvidadas","fin-humanidad","bosque-oscuro","gran-silencio"],
    works: [
      {title:"Revelation Space", type:"libro", author:"Alastair Reynolds"},
      {title:"El bosque oscuro", type:"libro", author:"Liu Cixin"},
    ],
    color: "#2d3436"
  },
  "la-frontera": {
    id: "la-frontera",
    label: "La Frontera",
    desc: "El límite entre lo que la mente humana puede comprender y lo que existe más allá. No es ignorancia — es el borde estructural de la cognición.",
    unlockCondition: ["lo-incomprensible","singularidad-tecnologica","posthumanismo"],
    unlockText: "Has llegado a los límites de lo humano desde tres direcciones distintas. La frontera es visible.",
    connections: ["lo-incomprensible","posthumanismo","entidades-cosmicas","transferencia-mental"],
    works: [
      {title:"Blindsight", type:"libro", author:"Peter Watts"},
      {title:"Solaris", type:"libro", author:"Stanislaw Lem"},
      {title:"Annihilation", type:"libro", author:"Jeff VanderMeer"},
    ],
    color: "#6c5ce7"
  },
};

// ═══════════════════════════════════════
// PANTEÓN — Los que construyeron el universo
// ═══════════════════════════════════════
const PANTHEON = {
  "mary-shelley": {
    id: "mary-shelley",
    name: "Mary Shelley",
    years: "1797 — 1851",
    epithet: "La que encendió el fuego",
    bio: "Tenía diecinueve años cuando escribió Frankenstein durante una noche de tormenta en Villa Diodati. Sin saberlo, inventó la ciencia ficción: la pregunta de qué ocurre cuando la ciencia supera la ética del científico. Todo lo que vino después fue una variación de esa pregunta.",
    quote: "Nada es tan doloroso para la mente humana como un gran e inesperado cambio.",
    masterwork: "Frankenstein",
    masterwork_type: "libro",
    nodes: ["ingenieria-genetica", "clonacion", "identidad", "libre-albedrio", "mesias-tecnologicos"],
    wiki: "Mary_Shelley",
    era: "fundadores"
  },
  "jules-verne": {
    id: "jules-verne",
    name: "Jules Verne",
    years: "1828 — 1905",
    epithet: "El cartógrafo de lo imposible",
    bio: "Verne no especulaba sobre el futuro — lo cartografiaba. Sus novelas son planos de ingeniería de mundos que todavía no existían. Viajó al centro de la Tierra, al fondo del mar y a la Luna con la precisión de quien ha estado allí. La CF como exploración científica empieza con él.",
    quote: "Todo lo que un hombre es capaz de imaginar, otros hombres serán capaces de realizarlo.",
    masterwork: "De la Tierra a la Luna",
    masterwork_type: "libro",
    nodes: ["colonizacion-espacial", "megaestructuras", "naves-generacionales", "energia-estelar"],
    wiki: "Jules_Verne",
    era: "fundadores"
  },
  "hg-wells": {
    id: "hg-wells",
    name: "H.G. Wells",
    years: "1866 — 1946",
    epithet: "El profeta incómodo",
    bio: "Wells usó la ciencia ficción como bisturí social. La máquina del tiempo no era un juguete — era una crítica de clases. La guerra de los mundos no era terror — era una inversión del colonialismo. Inventó la CF como advertencia, y el siglo XX le dio la razón en casi todo.",
    quote: "La historia humana se convierte cada vez más en una carrera entre la educación y la catástrofe.",
    masterwork: "La guerra de los mundos",
    masterwork_type: "libro",
    nodes: ["viajes-tiempo", "contacto-extraterrestre", "distopias", "estados-totalitarios", "fin-humanidad"],
    wiki: "H._G._Wells",
    era: "fundadores"
  },
  "isaac-asimov": {
    id: "isaac-asimov",
    name: "Isaac Asimov",
    years: "1920 — 1992",
    epithet: "El arquitecto de la razón",
    bio: "Asimov construyó sistemas. Las Tres Leyes de la Robótica son el código legal más citado de la ficción. La psicohistoria de Fundación es la fantasía suprema de quien cree que el caos puede ser gobernado por la matemática. Nadie pensó el futuro con más orden ni con más melancolía.",
    quote: "La ciencia puede amortizar sus propios errores. La superstición no puede.",
    masterwork: "Fundación",
    masterwork_type: "libro",
    nodes: ["inteligencia-artificial", "libre-albedrio", "fin-humanidad", "ultima-pregunta", "mentes-colmena"],
    wiki: "Isaac_Asimov",
    era: "edad-dorada"
  },
  "arthur-c-clarke": {
    id: "arthur-c-clarke",
    name: "Arthur C. Clarke",
    years: "1917 — 2008",
    epithet: "El visionario del infinito",
    bio: "Clarke miró al cosmos y no vio vacío — vio escala. Sus novelas son ejercicios de perspectiva: cada vez que el lector cree haber comprendido la magnitud del universo, Clarke añade otro orden de magnitud. Inventor del satélite geoestacionario. Autor del silencio más aterrador de la CF.",
    quote: "Cualquier tecnología suficientemente avanzada es indistinguible de la magia.",
    masterwork: "2001: A Space Odyssey",
    masterwork_type: "libro",
    nodes: ["contacto-extraterrestre", "megaestructuras", "esferas-dyson", "lo-incomprensible", "ascensores-espaciales", "gran-silencio"],
    wiki: "Arthur_C._Clarke",
    era: "edad-dorada"
  },
  "philip-k-dick": {
    id: "philip-k-dick",
    name: "Philip K. Dick",
    years: "1928 — 1982",
    epithet: "El cartógrafo del delirio",
    bio: "Dick no preguntaba qué es el futuro — preguntaba qué es real. Sus novelas son trampas epistemológicas: el protagonista —y el lector— nunca puede estar seguro de si lo que experimenta es auténtico. Vivió en pobreza, fue vigilado por el FBI, y tuvo visiones que describió en un diario de ocho mil páginas. Probablemente tenía razón en algo.",
    quote: "La realidad es aquello que, cuando dejas de creer en ello, no desaparece.",
    masterwork: "¿Sueñan los androides con ovejas eléctricas?",
    masterwork_type: "libro",
    nodes: ["realidades-simuladas", "identidad", "memorias-artificiales", "conciencias-digitales", "simulacros-copias", "vigilancia-absoluta"],
    wiki: "Philip_K._Dick",
    era: "nueva-ola"
  },
  "ursula-k-le-guin": {
    id: "ursula-k-le-guin",
    name: "Ursula K. Le Guin",
    years: "1929 — 2018",
    epithet: "La antropóloga de los imposibles",
    bio: "Le Guin trató los mundos alienígenas con la seriedad de una etnógrafa. Sus sociedades extraterrestres no son decorado — son experimentos sociológicos completos. Inventó el ansible, el comunicador instantáneo interestelar. Pero su mayor invento fue demostrar que la CF podía ser literatura.",
    quote: "La función de la ciencia ficción no es predecir el futuro sino describir el presente.",
    masterwork: "La mano izquierda de la oscuridad",
    masterwork_type: "libro",
    nodes: ["civilizaciones-alienígenas", "lenguajes-extraterrestres", "utopias", "evolucion-dirigida", "identidad"],
    wiki: "Ursula_K._Le_Guin",
    era: "nueva-ola"
  },
  "stanislaw-lem": {
    id: "stanislaw-lem",
    name: "Stanisław Lem",
    years: "1921 — 2006",
    epithet: "El filósofo del contacto imposible",
    bio: "Lem fue el más honesto de todos: sus extraterrestres son verdaderamente incomprensibles. Solaris no puede comunicarse con los humanos no porque no quiera sino porque la diferencia es tan absoluta que la comunicación es una ilusión. Escribió reseñas de libros que no existían, prólogos de enciclopedias inexistentes, y la crítica más feroz de la CF americana desde dentro.",
    quote: "El universo es una trampa sin trampero.",
    masterwork: "Solaris",
    masterwork_type: "libro",
    nodes: ["lo-incomprensible", "oceanos-conscientes", "primer-contacto", "lenguajes-extraterrestres", "inteligencias-planetarias"],
    wiki: "Stanisław_Lem",
    era: "nueva-ola"
  },
  "william-gibson": {
    id: "william-gibson",
    name: "William Gibson",
    years: "1948 —",
    epithet: "El inventor del mañana",
    bio: "Gibson escribió Neuromante en una máquina de escribir sin haber tocado nunca un ordenador. Inventó el ciberespacio, la matriz, el concepto de interfaz neural directa, y la estética de un futuro sucio y corporativo que el presente se ha esforzado en imitar. La palabra 'cyberspace' es suya.",
    quote: "El futuro ya está aquí, solo que no está distribuido uniformemente.",
    masterwork: "Neuromante",
    masterwork_type: "libro",
    nodes: ["realidad-virtual", "conciencias-digitales", "corporaciones-omnipotentes", "vigilancia-absoluta", "singularidad-tecnologica", "identidad"],
    wiki: "William_Gibson",
    era: "ciberpunk"
  },
  "liu-cixin": {
    id: "liu-cixin",
    name: "Liu Cixin",
    years: "1963 —",
    epithet: "El astrónomo del horror cósmico",
    bio: "Liu Cixin es el primer autor de CF no anglófono en dominar el género a escala global. El problema de los tres cuerpos y El bosque oscuro son la CF más perturbadora del siglo XXI: un universo donde la supervivencia exige el silencio y la traición es la única estrategia racional. El cosmos como guerra de todos contra todos.",
    quote: "La civilización no es más que un fino barniz sobre el abismo.",
    masterwork: "El problema de los tres cuerpos",
    masterwork_type: "libro",
    nodes: ["gran-silencio", "bosque-oscuro", "civilizaciones-alienígenas", "fin-humanidad", "hipotesis-planeta-prohibido"],
    wiki: "Liu_Cixin",
    era: "contemporaneo"
  },
  "octavia-butler": {
    id: "octavia-butler",
    name: "Octavia Butler",
    years: "1947 — 2006",
    epithet: "La profeta de la carne y el poder",
    bio: "Butler escribió sobre cuerpos que cambian, sobre jerarquías que se perpetúan, sobre el poder como biología. Sus alienígenas no son metáforas — son el poder mismo, desnudo. Primera autora de CF en ganar el MacArthur Fellowship. Murió antes de ver cuánto se parecería el futuro a sus novelas.",
    quote: "No hay nada nuevo bajo el sol, pero hay nuevas sombras.",
    masterwork: "Kindred",
    masterwork_type: "libro",
    nodes: ["evolucion-dirigida", "ingenieria-genetica", "identidad", "distopias", "posthumanismo"],
    wiki: "Octavia_Butler",
    era: "contemporaneo"
  },
  "iain-m-banks": {
    id: "iain-m-banks",
    name: "Iain M. Banks",
    years: "1954 — 2013",
    epithet: "El arquitecto de la utopía imposible",
    bio: "Banks inventó la Cultura: una civilización post-escasez gobernada por IAs benevolentes donde los humanos viven sin necesidad de trabajar. Y luego pasó doce novelas explorando por qué incluso la utopía perfecta genera violencia, espionaje y dilemas morales sin solución. La CF como argumento filosófico completo.",
    quote: "La verdadera medida de una civilización es cómo trata a sus miembros más vulnerables.",
    masterwork: "El jugador",
    masterwork_type: "libro",
    nodes: ["utopias", "inteligencia-artificial", "conciencias-digitales", "posthumanismo", "inmortalidad", "megaestructuras"],
    wiki: "Iain_Banks",
    era: "contemporaneo"
  },
};

const PANTHEON_ERAS = {
  "fundadores": { label: "Los fundadores", years: "1818 — 1900", color: "#fdcb6e" },
  "edad-dorada": { label: "La edad dorada", years: "1930 — 1960", color: "#f5c518" },
  "nueva-ola": { label: "La nueva ola", years: "1960 — 1980", color: "#a29bfe" },
  "ciberpunk": { label: "El ciberpunk", years: "1980 — 1995", color: "#00e5c0" },
  "contemporaneo": { label: "Contemporáneos", years: "1995 —", color: "#ff7675" },
};
