// Catálogo de cuentos completos y expresivos para "Cuenta Cuentos · English Learning"
// Cada cuento tiene dos versiones narrativas reales:
// - 'classic': El cuento clásico completo (10 escenas ricas con diálogos tradicionales, emociones y moraleja).
// - 'short': Versión breve narrativa (6 escenas con frases completas y expresivas, ideal para sesiones cortas).

window.STORIES = [
  {
    id: 'three_little_pigs',
    titleEn: 'The Three Little Pigs',
    titleEs: 'Los Tres Cerditos y el Lobo Feroz',
    emoji: '🐷',
    cover: 'assets/images/three_little_pigs.jpg',
    accent: '#f97316',
    ageTag: 'Cuento Clásico',
    versions: {
      classic: {
        label: 'Cuento Clásico Completo · 10 escenas',
        scenes: [
          {
            id: 'pigs_c_1',
            image: 'assets/images/three_little_pigs.jpg',
            en: 'Once upon a time, in a sunny green valley, three little pigs said goodbye to their mother and set off to build their own houses.',
            es: 'Érase una vez, en un valle verde y soleado, tres pequeños cerditos se despidieron de su mamá y salieron a construir sus propias casas.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef3c7 100%)',
            anim: 'bounce',
            hero: '🐷🐷🐷',
            hotspots: [
              { emoji: '🐷', en: 'Three little pigs', es: 'Tres pequeños cerditos', x: 25, y: 65 },
              { emoji: '🏡', en: 'Build a house', es: 'Construir una casa', x: 75, y: 58 },
              { emoji: '☀️', en: 'Sunny valley', es: 'Valle soleado', x: 78, y: 24 }
            ]
          },
          {
            id: 'pigs_c_2',
            image: 'assets/images/pigs_2_straw.jpg',
            en: 'The youngest pig wanted to play his flute all day, so he quickly built a light house out of yellow straw.',
            es: 'El cerdito más pequeño quería tocar la flauta y jugar todo el día, así que construyó muy rápido una casa ligera de paja amarilla.',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #fef08a 100%)',
            anim: 'float',
            hero: '🐷🌾🎵',
            hotspots: [
              { emoji: '🌾', en: 'Yellow straw house', es: 'Casa de paja amarilla', x: 68, y: 58 },
              { emoji: '🎵', en: 'Play the flute', es: 'Tocar la flauta', x: 28, y: 42 }
            ]
          },
          {
            id: 'pigs_c_3',
            image: 'assets/images/pigs_3_sticks.jpg',
            en: 'The middle pig loved to sing and dance, so he gathered brown wooden sticks from the forest and built a wooden cabin.',
            es: 'Al cerdito mediano le encantaba cantar y bailar, así que recogió ramas y palos del bosque y construyó una cabaña de madera.',
            sky: 'linear-gradient(180deg, #dbeafe 0%, #fed7aa 100%)',
            anim: 'float',
            hero: '🐷🪵🎶',
            hotspots: [
              { emoji: '🪵', en: 'Wooden sticks', es: 'Palos de madera', x: 66, y: 60 },
              { emoji: '🏠', en: 'Wooden cabin', es: 'Cabaña de madera', x: 30, y: 55 }
            ]
          },
          {
            id: 'pigs_c_4',
            image: 'assets/images/pigs_4_bricks.jpg',
            en: 'The oldest pig was very clever and hardworking. Brick by brick, with cement and care, he built a strong house with a red roof and a chimney.',
            es: 'El cerdito mayor era muy listo y trabajador. Ladrillo a ladrillo, con cemento y paciencia, construyó una casa fuerte con tejado rojo y chimenea.',
            sky: 'linear-gradient(180deg, #bfdbfe 0%, #fecaca 100%)',
            anim: 'pulse',
            hero: '🐷🧱🏠',
            hotspots: [
              { emoji: '🧱', en: 'Strong red bricks', es: 'Ladrillos rojos fuertes', x: 64, y: 60 },
              { emoji: '💪', en: 'Hardworking', es: 'Muy trabajador', x: 26, y: 44 }
            ]
          },
          {
            id: 'pigs_c_5',
            image: 'assets/images/pigs_5_wolf_knock.jpg',
            en: 'Soon, the big bad wolf came out of the dark woods. He knocked on the straw door and growled: Little pig, little pig, let me come in!',
            es: 'Pronto, el lobo feroz salió del bosque. Llamó a la puerta de la casa de paja y gruñó: ¡Cerdito, cerdito, abre la puerta y déjame entrar!',
            sky: 'linear-gradient(180deg, #cbd5e1 0%, #fde68a 100%)',
            anim: 'shake',
            hero: '🐺🚪🐷',
            hotspots: [
              { emoji: '🐺', en: 'Big bad wolf', es: 'El lobo feroz', x: 32, y: 58 },
              { emoji: '🚪', en: 'Let me come in!', es: '¡Déjame entrar!', x: 70, y: 56 }
            ]
          },
          {
            id: 'pigs_c_6',
            image: 'assets/images/pigs_6_wolf_blow_straw.jpg',
            en: 'Not by the hair on my chinny-chin-chin! cried the little pig. Then I will huff, and I will puff, and I will blow your house in! roared the wolf.',
            es: '¡No, ni hablar, en mi casa no entrarás! gritó el cerdito. ¡Entonces soplaré, y resoplaré, y tu casa derribaré! rugió el lobo.',
            sky: 'linear-gradient(180deg, #e2e8f0 0%, #fef08a 100%)',
            anim: 'wind',
            hero: '🐺💨🌾',
            hotspots: [
              { emoji: '💨', en: 'I will huff and puff!', es: '¡Soplaré y resoplaré!', x: 48, y: 38 },
              { emoji: '🌾', en: 'Straw flying away', es: 'La paja volando', x: 74, y: 64 }
            ]
          },
          {
            id: 'pigs_c_7',
            image: 'assets/images/pigs_7_run_to_wood.jpg',
            en: 'With one giant blow, the straw house flew through the air! The frightened little pig ran as fast as he could to his brother’s wooden house.',
            es: 'De un enorme soplido, ¡la casa de paja salió volando por los aires! El cerdito asustado corrió a toda velocidad hasta la casa de madera de su hermano.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'run',
            hero: '🐷💨🪵',
            hotspots: [
              { emoji: '🏃', en: 'Run as fast as he could', es: 'Correr a toda velocidad', x: 34, y: 60 },
              { emoji: '🪵', en: 'Brother’s wooden house', es: 'La casa de su hermano', x: 72, y: 54 }
            ]
          },
          {
            id: 'pigs_c_8',
            image: 'assets/images/pigs_8_blow_wood_run_brick.jpg',
            en: 'The wolf followed him, took a deep breath, and blew the wooden stick house down too! Both little pigs raced together to the brick house and locked the door.',
            es: 'El lobo lo siguió, tomó mucho aire, ¡y derribó también la casa de madera! Los dos cerditos corrieron juntos a la casa de ladrillos y cerraron con llave.',
            sky: 'linear-gradient(180deg, #cbd5e1 0%, #fecaca 100%)',
            anim: 'wind',
            hero: '🐺💨🧱',
            hotspots: [
              { emoji: '🔑', en: 'Lock the door', es: 'Cerrar con llave', x: 68, y: 56 },
              { emoji: '🐷', en: 'Safe inside', es: 'A salvo dentro', x: 28, y: 58 }
            ]
          },
          {
            id: 'pigs_c_9',
            image: 'assets/images/pigs_9_brick_strong.jpg',
            en: 'The wolf huffed and puffed with all his strength until his cheeks turned red and he ran out of breath, but the strong brick house did not move at all!',
            es: 'El lobo sopló y resopló con todas sus fuerzas hasta ponerse colorado y quedarse sin aliento, ¡pero la fuerte casa de ladrillos no se movió ni un poquito!',
            sky: 'linear-gradient(180deg, #bfdbfe 0%, #fed7aa 100%)',
            anim: 'pulse',
            hero: '🥵🐺🧱',
            hotspots: [
              { emoji: '🥵', en: 'Out of breath', es: 'Sin aliento', x: 30, y: 46 },
              { emoji: '🏠', en: 'Strong brick house', es: 'Casa fuerte de ladrillos', x: 72, y: 58 }
            ]
          },
          {
            id: 'pigs_c_10',
            image: 'assets/images/scenes/pigs_10_happy_end.jpg',
            en: 'When the wolf tried to slide down the chimney, a pot of hot water scared him away into the forest forever, and the three little pigs sang happily ever after!',
            es: 'Cuando el lobo intentó bajar por la chimenea, el caldero caliente le dio tal susto que huyó al bosque para siempre, ¡y los tres cerditos cantaron felices!',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🐷🎉🐷',
            hotspots: [
              { emoji: '🍲', en: 'Hot pot', es: 'Caldero caliente', x: 30, y: 56 },
              { emoji: '🎶', en: 'Happily ever after', es: 'Felices para siempre', x: 74, y: 40 }
            ]
          }
        ]
      },
      short: {
        label: 'Versión Breve · 6 escenas',
        scenes: [
          {
            id: 'pigs_s_1',
            image: 'assets/images/three_little_pigs.jpg',
            en: 'Once upon a time, three little pigs built three houses: one of yellow straw, one of wooden sticks, and one of strong red bricks.',
            es: 'Érase una vez, tres cerditos construyeron tres casas: una de paja amarilla, una de palos de madera y otra de ladrillos rojos muy fuertes.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef3c7 100%)',
            anim: 'bounce',
            hero: '🐷🐷🐷',
            hotspots: [
              { emoji: '🌾', en: 'Straw house', es: 'Casa de paja', x: 24, y: 62 },
              { emoji: '🧱', en: 'Brick house', es: 'Casa de ladrillos', x: 76, y: 58 }
            ]
          },
          {
            id: 'pigs_s_2',
            image: 'assets/images/pigs_5_wolf_knock.jpg',
            en: 'Soon, the big bad wolf knocked on the door and shouted: Little pig, little pig, let me come in!',
            es: 'Pronto, el lobo feroz llamó a la puerta y gritó con voz fuerte: ¡Cerdito, cerdito, déjame entrar!',
            sky: 'linear-gradient(180deg, #cbd5e1 0%, #fde68a 100%)',
            anim: 'shake',
            hero: '🐺🚪',
            hotspots: [
              { emoji: '🐺', en: 'Big bad wolf', es: 'Lobo feroz', x: 48, y: 56 },
              { emoji: '🚪', en: 'Knock on the door', es: 'Llamar a la puerta', x: 74, y: 52 }
            ]
          },
          {
            id: 'pigs_s_3',
            image: 'assets/images/pigs_6_wolf_blow_straw.jpg',
            en: 'Not by the hair on my chinny-chin-chin! said the pig. So the wolf huffed and puffed and blew the straw house down!',
            es: '¡No, ni hablar, no entrarás! dijo el cerdito. Así que el lobo sopló y resopló, ¡y la casa de paja derribó!',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #fef08a 100%)',
            anim: 'wind',
            hero: '🐺💨🌾',
            hotspots: [
              { emoji: '💨', en: 'Huff and puff', es: 'Soplar y resoplar', x: 34, y: 44 },
              { emoji: '🌾', en: 'Straw house', es: 'Casa de paja', x: 70, y: 62 }
            ]
          },
          {
            id: 'pigs_s_4',
            image: 'assets/images/pigs_8_blow_wood_run_brick.jpg',
            en: 'The wolf blew the wooden stick house down too, and the two little pigs ran fast to their brother’s brick house.',
            es: 'El lobo derribó también la casa de madera, y los dos cerditos corrieron rápido a la casa de ladrillos de su hermano.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'run',
            hero: '🐷💨🏠',
            hotspots: [
              { emoji: '🏃', en: 'Run fast', es: 'Correr rápido', x: 34, y: 60 },
              { emoji: '🏠', en: 'Safe house', es: 'Casa segura', x: 74, y: 54 }
            ]
          },
          {
            id: 'pigs_s_5',
            image: 'assets/images/pigs_9_brick_strong.jpg',
            en: 'The wolf blew and blew with all his might, but the strong red brick house did not move at all!',
            es: 'El lobo sopló y sopló con todas sus fuerzas, ¡pero la fuerte casa de ladrillos rojos no se movió ni un poquito!',
            sky: 'linear-gradient(180deg, #bfdbfe 0%, #fed7aa 100%)',
            anim: 'pulse',
            hero: '🧱🏠💪',
            hotspots: [
              { emoji: '🧱', en: 'Strong bricks', es: 'Ladrillos fuertes', x: 64, y: 62 },
              { emoji: '💪', en: 'Very strong', es: 'Muy fuerte', x: 28, y: 48 }
            ]
          },
          {
            id: 'pigs_s_6',
            image: 'assets/images/scenes/pigs_10_happy_end.jpg',
            en: 'Tired and dizzy, the wolf ran away into the forest, and the three little pigs danced happily together!',
            es: 'Cansado y mareado, el lobo huyó al bosque, ¡y los tres cerditos bailaron felices y seguros juntos!',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🐷🎉🐷',
            hotspots: [
              { emoji: '🎶', en: 'Dance happily', es: 'Bailar felices', x: 32, y: 54 },
              { emoji: '🌟', en: 'Happy ending', es: 'Final feliz', x: 72, y: 40 }
            ]
          }
        ]
      }
    }
  },
  {
    id: 'red_riding_hood',
    titleEn: 'Little Red Riding Hood',
    titleEs: 'Caperucita Roja',
    emoji: '🧺',
    cover: 'assets/images/red_riding_hood.jpg',
    accent: '#ef4444',
    ageTag: 'Cuento Clásico',
    versions: {
      classic: {
        label: 'Cuento Clásico Completo · 10 escenas',
        scenes: [
          {
            id: 'red_c_1',
            image: 'assets/images/scenes/red_1_cape.jpg',
            en: 'Once upon a time, there was a sweet little girl who always wore a bright red hooded cape that her grandmother had made for her.',
            es: 'Érase una vez una niña muy dulce que siempre llevaba una preciosa capa roja con capucha que le había tejido su abuelita.',
            sky: 'linear-gradient(180deg, #fde68a 0%, #bbf7d0 100%)',
            anim: 'float',
            hero: '👧❤️',
            hotspots: [
              { emoji: '🔴', en: 'Red hooded cape', es: 'Capa roja con capucha', x: 30, y: 54 },
              { emoji: '👵', en: 'Grandmother', es: 'Abuelita', x: 72, y: 58 }
            ]
          },
          {
            id: 'red_c_2',
            image: 'assets/images/scenes/red_2_mom_basket.svg',
            en: 'One sunny morning, her mother gave her a basket with fresh cake, honey, and red apples to take to Grandma’s cottage in the woods.',
            es: 'Una mañana soleada, su mamá le dio una cesta con pastel recién hecho, miel y manzanas rojas para llevar a la casita de la abuela en el bosque.',
            sky: 'linear-gradient(180deg, #fef3c7 0%, #fed7aa 100%)',
            anim: 'bounce',
            hero: '🧺🍰🍎',
            hotspots: [
              { emoji: '🧺', en: 'Wicker basket', es: 'Cesta de mimbre', x: 34, y: 60 },
              { emoji: '🍰', en: 'Fresh cake and honey', es: 'Pastel y miel', x: 70, y: 54 }
            ]
          },
          {
            id: 'red_c_3',
            image: 'assets/images/scenes/red_3_path.jpg',
            en: 'Walk straight along the path and do not talk to strangers in the forest! said her mother with a warm kiss goodbye.',
            es: '¡Camina siempre por el sendero y no hables con extraños en el bosque! le dijo su mamá dándole un beso de despedida.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #86efac 100%)',
            anim: 'float',
            hero: '👩💋👧',
            hotspots: [
              { emoji: '🛤️', en: 'Forest path', es: 'Sendero del bosque', x: 30, y: 62 },
              { emoji: '🌲', en: 'Tall green trees', es: 'Árboles altos', x: 74, y: 44 }
            ]
          },
          {
            id: 'red_c_4',
            image: 'assets/images/scenes/red_4_wolf_tree.svg',
            en: 'In the middle of the woods, a sneaky wolf stepped out from behind a tree and asked: Where are you going, Little Red Riding Hood?',
            es: 'En mitad del bosque, un lobo astuto salió de detrás de un árbol y le preguntó: ¿Adónde vas tan temprano, Caperucita Roja?',
            sky: 'linear-gradient(180deg, #cbd5e1 0%, #bbf7d0 100%)',
            anim: 'shake',
            hero: '🐺🌲👧',
            hotspots: [
              { emoji: '🐺', en: 'Sneaky wolf', es: 'Lobo astuto', x: 54, y: 56 },
              { emoji: '❓', en: 'Where are you going?', es: '¿Adónde vas?', x: 26, y: 42 }
            ]
          },
          {
            id: 'red_c_5',
            image: 'assets/images/scenes/red_5_flowers.jpg',
            en: 'I am going to visit my Grandma! she said. Look at those pretty wildflowers! said the tricky wolf, and while she picked a bouquet, he ran ahead.',
            es: '¡Voy a visitar a mi abuelita! contestó ella. ¡Mira qué flores tan bonitas! dijo el lobo tramposo, y mientras ella hacía un ramo, él corrió por el atajo.',
            sky: 'linear-gradient(180deg, #fbcfe8 0%, #bbf7d0 100%)',
            anim: 'sparkle',
            hero: '🌷🌼🦋',
            hotspots: [
              { emoji: '💐', en: 'Bouquet of flowers', es: 'Ramo de flores', x: 32, y: 62 },
              { emoji: '🦋', en: 'Colorful butterflies', es: 'Mariposas de colores', x: 72, y: 42 }
            ]
          },
          {
            id: 'red_c_6',
            image: 'assets/images/scenes/red_6_wolf_bed.svg',
            en: 'The wolf reached the cottage first, hid Grandma safely in the wardrobe, and put on her nightcap and glasses in the big bed.',
            es: 'El lobo llegó primero a la casita, escondió a la abuelita en el armario, y se puso su gorro de dormir y sus gafas dentro de la cama.',
            sky: 'linear-gradient(180deg, #fed7aa 0%, #fde68a 100%)',
            anim: 'pulse',
            hero: '🐺👓🛏️',
            hotspots: [
              { emoji: '👓', en: 'Grandma’s glasses', es: 'Las gafas de la abuela', x: 34, y: 48 },
              { emoji: '🛏️', en: 'Big cozy bed', es: 'Cama grande', x: 70, y: 60 }
            ]
          },
          {
            id: 'red_c_7',
            image: 'assets/images/scenes/red_7_big_eyes_ears.svg',
            en: 'When Little Red Riding Hood came in, she looked closely and asked: Oh Grandma, what big ears and what big eyes you have!',
            es: 'Cuando Caperucita Roja entró en la habitación, se acercó sorprendida y preguntó: ¡Ay, abuelita, qué orejas y qué ojos tan grandes tienes!',
            sky: 'linear-gradient(180deg, #e2e8f0 0%, #fde68a 100%)',
            anim: 'pulse',
            hero: '👀👂🐺',
            hotspots: [
              { emoji: '👂', en: 'What big ears!', es: '¡Qué orejas tan grandes!', x: 32, y: 44 },
              { emoji: '👀', en: 'What big eyes!', es: '¡Qué ojos tan grandes!', x: 70, y: 46 }
            ]
          },
          {
            id: 'red_c_8',
            image: 'assets/images/scenes/red_8_big_teeth.svg',
            en: 'All the better to hear you and see you with, my dear! said the wolf. Oh Grandma, what big teeth you have! — All the better to eat you with!',
            es: '¡Son para oírte y para verte mejor, cariño! dijo el lobo. ¡Pero abuelita, qué dientes tan grandes tienes! — ¡Son para comerte mejor!',
            sky: 'linear-gradient(180deg, #fecaca 0%, #fde68a 100%)',
            anim: 'shake',
            hero: '🐺🦷😱',
            hotspots: [
              { emoji: '🦷', en: 'What big teeth!', es: '¡Qué dientes tan grandes!', x: 48, y: 46 },
              { emoji: '😱', en: 'Watch out!', es: '¡Cuidado!', x: 76, y: 56 }
            ]
          },
          {
            id: 'red_c_9',
            image: 'assets/images/scenes/red_9_woodcutter.svg',
            en: 'Just in time, a brave woodcutter heard Little Red Riding Hood shout! He burst through the door and chased the frightened wolf far away.',
            es: '¡Justo a tiempo, un valiente leñador del bosque oyó gritar a Caperucita! Abrió la puerta de par en par e hizo huir al lobo muy lejos.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fde68a 100%)',
            anim: 'run',
            hero: '🪓🐺💨',
            hotspots: [
              { emoji: '🦸', en: 'Brave woodcutter', es: 'Leñador valiente', x: 30, y: 56 },
              { emoji: '💨', en: 'Chase the wolf away', es: 'Ahuyentar al lobo', x: 74, y: 56 }
            ]
          },
          {
            id: 'red_c_10',
            image: 'assets/images/scenes/red_10_happy_tea.svg',
            en: 'Grandma came out safe and sound, gave Little Red Riding Hood a big warm hug, and together they shared the delicious cake and honey!',
            es: 'La abuelita salió sana y salva, le dio un abrazo enorme a Caperucita Roja, ¡y juntos merendaron el rico pastel con miel y manzanas!',
            sky: 'linear-gradient(180deg, #fbcfe8 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '👵❤️👧',
            hotspots: [
              { emoji: '🤗', en: 'Big warm hug', es: 'Un abrazo enorme', x: 34, y: 52 },
              { emoji: '🍰', en: 'Delicious cake', es: 'Pastel delicioso', x: 72, y: 60 }
            ]
          }
        ]
      },
      short: {
        label: 'Versión Breve · 6 escenas',
        scenes: [
          {
            id: 'red_s_1',
            image: 'assets/images/scenes/red_2_mom_basket.svg',
            en: 'Once upon a time, Little Red Riding Hood took a basket of cake and apples to her Grandma’s house in the forest.',
            es: 'Érase una vez, Caperucita Roja llevaba una cesta con pastel y manzanas a la casita de su abuela en el bosque.',
            sky: 'linear-gradient(180deg, #fde68a 0%, #bbf7d0 100%)',
            anim: 'float',
            hero: '👧🧺🍎',
            hotspots: [
              { emoji: '🔴', en: 'Red cape', es: 'Capa roja', x: 30, y: 54 },
              { emoji: '🧺', en: 'Basket of food', es: 'Cesta de comida', x: 72, y: 60 }
            ]
          },
          {
            id: 'red_s_2',
            image: 'assets/images/scenes/red_4_wolf_tree.svg',
            en: 'Along the green forest path, a sneaky wolf asked her where she was going and ran ahead to the cottage.',
            es: 'Por el sendero verde del bosque, un lobo astuto le preguntó adónde iba y corrió por un atajo hasta la casita.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #86efac 100%)',
            anim: 'run',
            hero: '🐺🌲🦋',
            hotspots: [
              { emoji: '🐺', en: 'Sneaky wolf', es: 'Lobo astuto', x: 38, y: 56 },
              { emoji: '🌲', en: 'Green forest', es: 'Bosque verde', x: 72, y: 48 }
            ]
          },
          {
            id: 'red_s_3',
            image: 'assets/images/scenes/red_6_wolf_bed.svg',
            en: 'While Little Red Riding Hood picked pretty flowers, the wolf hid Grandma and dressed up in her bed.',
            es: 'Mientras Caperucita recogía flores bonitas, el lobo escondió a la abuelita y se disfrazó dentro de su cama.',
            sky: 'linear-gradient(180deg, #fbcfe8 0%, #fde68a 100%)',
            anim: 'pulse',
            hero: '🌷🐺🛏️',
            hotspots: [
              { emoji: '🌷', en: 'Pretty flowers', es: 'Flores bonitas', x: 30, y: 60 },
              { emoji: '🛏️', en: 'In the bed', es: 'En la cama', x: 72, y: 56 }
            ]
          },
          {
            id: 'red_s_4',
            image: 'assets/images/scenes/red_7_big_eyes_ears.svg',
            en: 'Grandma, what big eyes and big ears you have! she said. All the better to see you and hear you with! replied the wolf.',
            es: '¡Abuelita, qué ojos y qué orejas tan grandes tienes! dijo ella. ¡Son para verte y oírte mejor! respondió el lobo.',
            sky: 'linear-gradient(180deg, #e2e8f0 0%, #fde68a 100%)',
            anim: 'shake',
            hero: '👀👂🐺',
            hotspots: [
              { emoji: '👀', en: 'Big eyes', es: 'Ojos grandes', x: 34, y: 45 },
              { emoji: '👂', en: 'Big ears', es: 'Orejas grandes', x: 68, y: 45 }
            ]
          },
          {
            id: 'red_s_5',
            image: 'assets/images/scenes/red_9_woodcutter.svg',
            en: 'And what big teeth you have! — All the better to eat you with! shouted the wolf, but a brave woodcutter came to save them.',
            es: '¡Y qué dientes tan grandes tienes! — ¡Para comerte mejor! gritó el lobo, pero un leñador valiente entró a salvarlas.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fecaca 100%)',
            anim: 'run',
            hero: '🪓🐺💨',
            hotspots: [
              { emoji: '🦷', en: 'Big teeth', es: 'Dientes grandes', x: 32, y: 48 },
              { emoji: '🦸', en: 'Woodcutter', es: 'Leñador', x: 74, y: 56 }
            ]
          },
          {
            id: 'red_s_6',
            image: 'assets/images/scenes/red_10_happy_tea.svg',
            en: 'The wolf ran away forever, and Little Red Riding Hood hugged her Grandma and shared the yummy cake!',
            es: 'El lobo huyó para siempre, ¡y Caperucita Roja abrazó a su abuelita y compartieron el rico pastel!',
            sky: 'linear-gradient(180deg, #fbcfe8 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '👵❤️👧',
            hotspots: [
              { emoji: '🤗', en: 'Warm hug', es: 'Abrazo cálido', x: 46, y: 52 },
              { emoji: '🍰', en: 'Yummy cake', es: 'Rico pastel', x: 75, y: 62 }
            ]
          }
        ]
      }
    }
  },
  {
    id: 'goldilocks_bears',
    titleEn: 'Goldilocks & the Three Bears',
    titleEs: 'Ricitos de Oro y los Tres Osos',
    emoji: '🐻',
    cover: 'assets/images/goldilocks_bears.jpg',
    accent: '#eab308',
    ageTag: 'Cuento Clásico',
    versions: {
      classic: {
        label: 'Cuento Clásico Completo · 10 escenas',
        scenes: [
          {
            id: 'gold_c_1',
            image: 'assets/images/scenes/gold_1_three_bears.svg',
            en: 'Once upon a time, in a cozy cottage in the woods, lived big Papa Bear, medium Mama Bear, and little Baby Bear.',
            es: 'Érase una vez, en una acogedora casita del bosque, vivían el gran Papá Oso, la mediana Mamá Osa y el pequeño Osito.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #bbf7d0 100%)',
            anim: 'bounce',
            hero: '🐻🐻🧸',
            hotspots: [
              { emoji: '🐻', en: 'Big Papa Bear', es: 'El gran Papá Oso', x: 26, y: 56 },
              { emoji: '🧸', en: 'Little Baby Bear', es: 'El pequeño Osito', x: 74, y: 62 }
            ]
          },
          {
            id: 'gold_c_2',
            image: 'assets/images/scenes/gold_2_walk_forest.svg',
            en: 'One morning, Mama Bear made sweet hot porridge for breakfast. Since it was steaming hot, the three bears went for a morning walk.',
            es: 'Una mañana, Mamá Osa preparó gachas dulces para desayunar. Como estaban muy calientes, los tres osos salieron a dar un paseo por el bosque.',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #fef08a 100%)',
            anim: 'float',
            hero: '🥣♨️🌲',
            hotspots: [
              { emoji: '🥣', en: 'Hot porridge', es: 'Gachas calientes', x: 34, y: 58 },
              { emoji: '🌲', en: 'Morning walk', es: 'Paseo por la mañana', x: 74, y: 48 }
            ]
          },
          {
            id: 'gold_c_3',
            image: 'assets/images/scenes/gold_3_door.jpg',
            en: 'Soon, a curious little girl with golden curly hair named Goldilocks knocked on the door, peeked inside, and smelled the delicious breakfast.',
            es: 'Pronto, una niña curiosa de cabellos dorados llamada Ricitos de Oro llamó a la puerta, se asomó dentro y olió aquel rico desayuno.',
            sky: 'linear-gradient(180deg, #fef3c7 0%, #fed7aa 100%)',
            anim: 'pulse',
            hero: '👧🚪🏠',
            hotspots: [
              { emoji: '👧', en: 'Golden curly hair', es: 'Cabellos dorados y rizados', x: 30, y: 56 },
              { emoji: '🏠', en: 'Cozy cottage', es: 'Casita acogedora', x: 72, y: 52 }
            ]
          },
          {
            id: 'gold_c_4',
            image: 'assets/images/scenes/gold_4_bowls.jpg',
            en: 'Goldilocks tasted the big bowl: Ouch, this porridge is too hot! Then she tasted the medium bowl: Brrr, this porridge is too cold!',
            es: 'Ricitos probó el tazón grande: ¡Ay, esta sopa está demasiado caliente! Luego probó el tazón mediano: ¡Brrr, esta sopa está demasiado fría!',
            sky: 'linear-gradient(180deg, #fecaca 0%, #bfdbfe 100%)',
            anim: 'shake',
            hero: '🔥🥣❄️',
            hotspots: [
              { emoji: '🔥', en: 'Too hot!', es: '¡Demasiado caliente!', x: 26, y: 48 },
              { emoji: '❄️', en: 'Too cold!', es: '¡Demasiado fría!', x: 74, y: 48 }
            ]
          },
          {
            id: 'gold_c_5',
            image: 'assets/images/scenes/gold_5_small_bowl.jpg',
            en: 'Then she tasted Baby Bear’s little blue bowl: Mmm, this porridge is just right! she smiled, and she ate every single spoonful.',
            es: 'Entonces probó el tazón pequeño y azul del Osito: ¡Mmm, esta sopa está en su punto perfecto! sonrió, y se la tomó todita hasta la última cucharada.',
            sky: 'linear-gradient(180deg, #fef08a 0%, #bbf7d0 100%)',
            anim: 'bounce',
            hero: '😋🥣✨',
            hotspots: [
              { emoji: '🥣', en: 'Just right!', es: '¡En su punto perfecto!', x: 48, y: 60 },
              { emoji: '😋', en: 'Delicious spoonful', es: 'Cucharada deliciosa', x: 74, y: 42 }
            ]
          },
          {
            id: 'gold_c_6',
            image: 'assets/images/scenes/gold_6_chair_break.svg',
            en: 'In the living room, Papa Bear’s chair was too hard and Mama Bear’s chair was too soft, so she sat in Baby Bear’s little chair—and CRACK, it broke!',
            es: 'En el salón, la silla de Papá Oso era muy dura y la de Mamá Osa muy blanda; se sentó en la sillita del Osito y ¡CRAC!, una pata se rompió.',
            sky: 'linear-gradient(180deg, #fde68a 0%, #fed7aa 100%)',
            anim: 'shake',
            hero: '🪑💥😮',
            hotspots: [
              { emoji: '🪑', en: 'Little wooden chair', es: 'Sillita de madera', x: 34, y: 58 },
              { emoji: '💥', en: 'It broke!', es: '¡Se rompió!', x: 70, y: 50 }
            ]
          },
          {
            id: 'gold_c_7',
            image: 'assets/images/scenes/gold_7_sleeping_bed.svg',
            en: 'Yawning with sleepiness, Goldilocks went upstairs to the bedroom. The big bed was too high, the medium bed was too soft, and the little bed was just right!',
            es: 'Bostezando de sueño, Ricitos subió al dormitorio. La cama grande era muy alta, la mediana muy blanda, ¡pero la camita pequeña era comodísima!',
            sky: 'linear-gradient(180deg, #c7d2fe 0%, #fbcfe8 100%)',
            anim: 'sleep',
            hero: '👧🛏️💤',
            hotspots: [
              { emoji: '😴', en: 'Fast asleep', es: 'Profundamente dormida', x: 32, y: 44 },
              { emoji: '🛏️', en: 'Little cozy bed', es: 'Camita pequeña', x: 68, y: 60 }
            ]
          },
          {
            id: 'gold_c_8',
            image: 'assets/images/scenes/gold_8_bears_bowls.svg',
            en: 'Soon the three bears came home hungry! Who has been eating my porridge? roared Papa Bear. Look, someone ate mine all up! cried Baby Bear.',
            es: 'Pronto regresaron los tres osos con apetito. ¿Quién ha estado probando mi sopa? gruñó Papá Oso. ¡Mirad, se han comido toda la mía! exclamó el Osito.',
            sky: 'linear-gradient(180deg, #fed7aa 0%, #fde68a 100%)',
            anim: 'shake',
            hero: '🐻🥣🧸',
            hotspots: [
              { emoji: '🐻', en: 'Who ate my porridge?', es: '¿Quién probó mi sopa?', x: 30, y: 52 },
              { emoji: '🥣', en: 'Empty bowl', es: 'Plato vacío', x: 72, y: 60 }
            ]
          },
          {
            id: 'gold_c_9',
            image: 'assets/images/scenes/gold_9_bears_find_goldilocks.svg',
            en: 'When they went upstairs, Baby Bear pointed at his bed in surprise: Someone has been sleeping in my bed, and look, she is still here!',
            es: 'Al subir las escaleras, el Osito señaló su cama muy sorprendido: ¡Alguien ha estado durmiendo en mi camita, y mirad, todavía sigue aquí!',
            sky: 'linear-gradient(180deg, #e9d5ff 0%, #bae6fd 100%)',
            anim: 'pulse',
            hero: '🧸👉👧',
            hotspots: [
              { emoji: '🧸', en: 'Surprise!', es: '¡Qué sorpresa!', x: 32, y: 56 },
              { emoji: '👧', en: 'Wake up', es: 'Despertar', x: 72, y: 56 }
            ]
          },
          {
            id: 'gold_c_10',
            image: 'assets/images/scenes/gold_10_friends_end.svg',
            en: 'Goldilocks woke up, said she was sorry, and helped fix the little chair. The three kind bears smiled and invited her to share a new bowl of porridge!',
            es: 'Ricitos despertó, pidió disculpas con cariño y ayudó a arreglar la sillita. ¡Los tres osos amables sonrieron y la invitaron a desayunar juntos!',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🐻👧🧸',
            hotspots: [
              { emoji: '🤝', en: 'Good friends', es: 'Buenos amigos', x: 46, y: 46 },
              { emoji: '😊', en: 'Kind smile', es: 'Sonrisa amable', x: 74, y: 58 }
            ]
          }
        ]
      },
      short: {
        label: 'Versión Breve · 6 escenas',
        scenes: [
          {
            id: 'gold_s_1',
            image: 'assets/images/scenes/gold_2_walk_forest.svg',
            en: 'Once upon a time, Papa Bear, Mama Bear, and Baby Bear went for a walk while their hot breakfast cooled down.',
            es: 'Érase una vez, Papá Oso, Mamá Osa y el pequeño Osito salieron a pasear mientras se enfriaba su rico desayuno.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #bbf7d0 100%)',
            anim: 'bounce',
            hero: '🐻🐻🧸',
            hotspots: [
              { emoji: '🐻', en: 'Three bears', es: 'Tres osos', x: 35, y: 58 },
              { emoji: '🌲', en: 'Forest walk', es: 'Paseo por el bosque', x: 74, y: 52 }
            ]
          },
          {
            id: 'gold_s_2',
            image: 'assets/images/scenes/gold_3_door.jpg',
            en: 'Curious Goldilocks entered the cottage and saw three bowls of porridge on the wooden table: big, medium, and small.',
            es: 'La curiosa Ricitos de Oro entró en la casita y vio tres tazones de sopa en la mesa de madera: grande, mediano y pequeño.',
            sky: 'linear-gradient(180deg, #fef3c7 0%, #fed7aa 100%)',
            anim: 'float',
            hero: '🥣🥣🥣',
            hotspots: [
              { emoji: '🥣', en: 'Three bowls', es: 'Tres tazones', x: 50, y: 60 },
              { emoji: '👧', en: 'Goldilocks', es: 'Ricitos de Oro', x: 24, y: 52 }
            ]
          },
          {
            id: 'gold_s_3',
            image: 'assets/images/scenes/gold_5_small_bowl.jpg',
            en: 'The big bowl was too hot and the medium bowl was too cold, but Baby Bear’s small bowl was just right, so she ate it all!',
            es: 'El tazón grande estaba muy caliente y el mediano muy frío, ¡pero el pequeño del Osito estaba perfecto y se lo comió todito!',
            sky: 'linear-gradient(180deg, #fde68a 0%, #fecaca 100%)',
            anim: 'pulse',
            hero: '😋🥣✨',
            hotspots: [
              { emoji: '🔥', en: 'Too hot', es: 'Muy caliente', x: 26, y: 46 },
              { emoji: '😋', en: 'Just right!', es: '¡Perfecto!', x: 74, y: 46 }
            ]
          },
          {
            id: 'gold_s_4',
            image: 'assets/images/scenes/gold_7_sleeping_bed.svg',
            en: 'After trying the three chairs, sleepy Goldilocks went upstairs and fell fast asleep in Baby Bear’s cozy small bed.',
            es: 'Tras probar las tres sillas, Ricitos tenía mucho sueño, subió las escaleras y se quedó dormida en la camita del Osito.',
            sky: 'linear-gradient(180deg, #c7d2fe 0%, #fbcfe8 100%)',
            anim: 'sleep',
            hero: '👧🛏️💤',
            hotspots: [
              { emoji: '🛏️', en: 'Small bed', es: 'Cama pequeña', x: 50, y: 62 },
              { emoji: '💤', en: 'Fast asleep', es: 'Dormida', x: 72, y: 36 }
            ]
          },
          {
            id: 'gold_s_5',
            image: 'assets/images/scenes/gold_9_bears_find_goldilocks.svg',
            en: 'When the bears returned home, they cried: Who has been eating our porridge? And look, someone is sleeping in the small bed!',
            es: 'Cuando los osos volvieron a casa, exclamaron: ¿Quién ha probado nuestra sopa? ¡Y mirad, alguien duerme en la cama pequeña!',
            sky: 'linear-gradient(180deg, #fed7aa 0%, #fde68a 100%)',
            anim: 'shake',
            hero: '🐻😮🧸',
            hotspots: [
              { emoji: '😮', en: 'Who is here?', es: '¿Quién está aquí?', x: 34, y: 50 },
              { emoji: '🧸', en: 'Baby Bear', es: 'Osito', x: 70, y: 58 }
            ]
          },
          {
            id: 'gold_s_6',
            image: 'assets/images/scenes/gold_10_friends_end.svg',
            en: 'Goldilocks woke up, apologized with a smile, and the three kind bears waved goodbye as new friends!',
            es: 'Ricitos despertó, pidió disculpas con una sonrisa, ¡y los tres osos amables se hicieron sus amigos!',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🐻👋👧',
            hotspots: [
              { emoji: '👋', en: 'Wave goodbye', es: 'Decir adiós', x: 50, y: 42 },
              { emoji: '😊', en: 'New friends', es: 'Nuevos amigos', x: 74, y: 58 }
            ]
          }
        ]
      }
    }
  },
  {
    id: 'tortoise_and_hare',
    titleEn: 'The Tortoise and the Hare',
    titleEs: 'La Tortuga y la Liebre',
    emoji: '🐢',
    cover: 'assets/images/tortoise_and_hare.jpg',
    accent: '#22c55e',
    ageTag: 'Fábula Clásica',
    versions: {
      classic: {
        label: 'Cuento Clásico Completo · 10 escenas',
        scenes: [
          {
            id: 'race_c_1',
            image: 'assets/images/scenes/race_1_hare_fast.jpg',
            en: 'Once upon a time in the sunny meadow, there lived a speedy brown hare who loved to brag about how fast he could run.',
            es: 'Érase una vez en la pradera soleada, vivía una veloz liebre marrón a la que le encantaba presumir de lo rápido que corría.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef08a 100%)',
            anim: 'run',
            hero: '🐇⚡',
            hotspots: [
              { emoji: '🐇', en: 'Speedy hare', es: 'Liebre veloz', x: 38, y: 58 },
              { emoji: '⚡', en: 'Run super fast', es: 'Correr súper rápido', x: 74, y: 42 }
            ]
          },
          {
            id: 'race_c_2',
            image: 'assets/images/scenes/race_2_tortoise_slow.jpg',
            en: 'Every day, the hare laughed at the little green tortoise because she carried her heavy shell and walked very slowly.',
            es: 'Todos los días, la liebre se reía de la pequeña tortuga verde porque llevaba su caparazón a cuestas y caminaba muy despacito.',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #bbf7d0 100%)',
            anim: 'float',
            hero: '🐢🌿',
            hotspots: [
              { emoji: '🐢', en: 'Little green tortoise', es: 'Tortuga verde', x: 36, y: 60 },
              { emoji: '🐚', en: 'Heavy shell', es: 'Caparazón pesado', x: 72, y: 56 }
            ]
          },
          {
            id: 'race_c_3',
            image: 'assets/images/scenes/race_3_challenge.jpg',
            en: 'One morning, the calm tortoise smiled and said: Let us have a race to the old hill, and we will see who wins!',
            es: 'Una mañana, la tortuga tranquila sonrió y dijo: ¡Hagamos una carrera hasta la colina del bosque y veremos quién llega primero!',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #bbf7d0 100%)',
            anim: 'bounce',
            hero: '🐢💬🐇',
            hotspots: [
              { emoji: '🏁', en: 'Let us have a race!', es: '¡Hagamos una carrera!', x: 50, y: 44 },
              { emoji: '😊', en: 'Calm and brave', es: 'Tranquila y valiente', x: 26, y: 58 }
            ]
          },
          {
            id: 'race_c_4',
            image: 'assets/images/scenes/race_4_animals_cheer.jpg',
            en: 'All the forest animals gathered by the path. The wise fox waved the flag and shouted: Ready, steady, one, two, three, go!',
            es: 'Todos los animales del bosque se reunieron junto al camino. El zorro agitó el banderín y gritó: ¡Preparados, listos, uno, dos, tres, ya!',
            sky: 'linear-gradient(180deg, #fde68a 0%, #fed7aa 100%)',
            anim: 'pulse',
            hero: '🦊🏁🐿️',
            hotspots: [
              { emoji: '🦊', en: 'Ready, steady, go!', es: '¡Preparados, listos, ya!', x: 30, y: 56 },
              { emoji: '🐿️', en: 'Cheering animals', es: 'Animales animando', x: 74, y: 50 }
            ]
          },
          {
            id: 'race_c_5',
            image: 'assets/images/scenes/race_5_hare_zoom.svg',
            en: 'Whoosh! The hare zoomed down the road like an arrow, jumping over rocks and flowers until he was far ahead.',
            es: '¡Zas! La liebre salió disparada por el sendero como una flecha, saltando sobre piedras y flores hasta quedar muy lejos por delante.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fde68a 100%)',
            anim: 'run',
            hero: '🐇💨💨',
            hotspots: [
              { emoji: '💨', en: 'Zoom like an arrow', es: 'Correr como una flecha', x: 34, y: 48 },
              { emoji: '🌸', en: 'Jump over flowers', es: 'Saltar sobre las flores', x: 72, y: 64 }
            ]
          },
          {
            id: 'race_c_6',
            image: 'assets/images/scenes/race_6_hare_nap_carrots.svg',
            en: 'Looking back, the hare could not even see the tortoise. I have plenty of time to eat Crunchy carrots and take a nap! he yawned.',
            es: 'Al mirar atrás, la liebre ni siquiera veía a la tortuga. ¡Tengo tiempo de sobra para comer zanahorias y echarme una siesta! bostezó.',
            sky: 'linear-gradient(180deg, #c7d2fe 0%, #bbf7d0 100%)',
            anim: 'sleep',
            hero: '🌳🐇🥕',
            hotspots: [
              { emoji: '🥕', en: 'Crunchy carrots', es: 'Zanahorias crujientes', x: 30, y: 60 },
              { emoji: '😴', en: 'Take a long nap', es: 'Echar una larga siesta', x: 72, y: 46 }
            ]
          },
          {
            id: 'race_c_7',
            image: 'assets/images/scenes/race_7_tortoise_walking.svg',
            en: 'Meanwhile, under the warm sun, the little tortoise did not stop for a single moment. Step by step, little by little, she kept walking forward.',
            es: 'Mientras tanto, bajo el sol templado, la pequeña tortuga no se detuvo ni un instante. Paso a paso, poquito a poco, siguió caminando hacia adelante.',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #fef08a 100%)',
            anim: 'float',
            hero: '🐢🐾☀️',
            hotspots: [
              { emoji: '👣', en: 'Step by step', es: 'Paso a paso', x: 66, y: 62 },
              { emoji: '🐢', en: 'Never give up', es: 'Nunca rendirse', x: 30, y: 58 }
            ]
          },
          {
            id: 'race_c_8',
            image: 'assets/images/scenes/race_8_tortoise_passes_hare.svg',
            en: 'Quietly, on tiptoes, the tortoise walked right past the snoring hare under the oak tree and approached the colorful finish line!',
            es: 'En silencio y sin hacer ruido, la tortuga pasó justo por delante de la liebre que roncaba bajo el roble ¡y se acercó a la meta de colores!',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #bbf7d0 100%)',
            anim: 'float',
            hero: '🐢🤫💤',
            hotspots: [
              { emoji: '🤫', en: 'Quietly past the hare', es: 'En silencio junto a la liebre', x: 34, y: 54 },
              { emoji: '🏁', en: 'Finish line ahead', es: 'La meta delante', x: 74, y: 44 }
            ]
          },
          {
            id: 'race_c_9',
            image: 'assets/images/scenes/race_9_finish_line.svg',
            en: 'Hearing the animals cheer, the hare woke up with a jump! He ran with all his speed, but it was too late: the tortoise crossed the line first!',
            es: 'Al oír los aplausos de los animales, ¡la liebre despertó de un salto! Corrió con todas sus fuerzas, pero ya era tarde: ¡la tortuga cruzó la meta primero!',
            sky: 'linear-gradient(180deg, #fed7aa 0%, #fecaca 100%)',
            anim: 'shake',
            hero: '😲🐇🏁',
            hotspots: [
              { emoji: '⏰', en: 'Too late!', es: '¡Demasiado tarde!', x: 28, y: 44 },
              { emoji: '🏁', en: 'Cross the finish line', es: 'Cruzar la meta', x: 72, y: 56 }
            ]
          },
          {
            id: 'race_c_10',
            image: 'assets/images/scenes/race_10_trophy_winner.svg',
            en: 'The hare congratulated the happy tortoise and learned a great lesson: slow and steady, with patience and effort, wins the race!',
            es: 'La liebre felicitó a la tortuga feliz y aprendió una gran lección: ¡despacito y con constancia se llega siempre a la meta!',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🐢🏆🎉',
            hotspots: [
              { emoji: '🏆', en: 'Slow and steady wins!', es: '¡Despacio y constante gana!', x: 48, y: 40 },
              { emoji: '🎉', en: 'Champion tortoise', es: 'Tortuga campeona', x: 74, y: 56 }
            ]
          }
        ]
      },
      short: {
        label: 'Versión Breve · 6 escenas',
        scenes: [
          {
            id: 'race_s_1',
            image: 'assets/images/scenes/race_3_challenge.jpg',
            en: 'Once upon a time, a speedy hare laughed at a slow green tortoise, so the tortoise invited him to run a race.',
            es: 'Érase una vez, una liebre muy veloz se reía de una tortuga lenta, así que la tortuga la retó a hacer una carrera.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef08a 100%)',
            anim: 'run',
            hero: '🐇🏁🐢',
            hotspots: [
              { emoji: '🐇', en: 'Speedy hare', es: 'Liebre veloz', x: 34, y: 58 },
              { emoji: '🐢', en: 'Slow tortoise', es: 'Tortuga lenta', x: 72, y: 58 }
            ]
          },
          {
            id: 'race_s_2',
            image: 'assets/images/scenes/race_5_hare_zoom.svg',
            en: 'One, two, three, go! shouted the fox, and the hare zoomed ahead like the wind down the forest path.',
            es: '¡Uno, dos, tres, ya! gritó el zorro, y la liebre salió corriendo como el viento por el camino del bosque.',
            sky: 'linear-gradient(180deg, #fde68a 0%, #fed7aa 100%)',
            anim: 'run',
            hero: '🐇💨💨',
            hotspots: [
              { emoji: '🏁', en: 'Start the race', es: 'Empezar la carrera', x: 28, y: 44 },
              { emoji: '💨', en: 'Like the wind', es: 'Como el viento', x: 72, y: 56 }
            ]
          },
          {
            id: 'race_s_3',
            image: 'assets/images/scenes/race_6_hare_nap_carrots.svg',
            en: 'Seeing he was far ahead, the confident hare lay down under a shady green tree and fell fast asleep.',
            es: 'Al ver que llevaba mucha ventaja, la liebre confiada se tumbó bajo la sombra de un árbol y se quedó dormida.',
            sky: 'linear-gradient(180deg, #c7d2fe 0%, #bbf7d0 100%)',
            anim: 'sleep',
            hero: '🌳🐇💤',
            hotspots: [
              { emoji: '💤', en: 'Sleeping hare', es: 'Liebre dormida', x: 46, y: 40 },
              { emoji: '🌳', en: 'Shady tree', es: 'Árbol con sombra', x: 76, y: 54 }
            ]
          },
          {
            id: 'race_s_4',
            image: 'assets/images/scenes/race_8_tortoise_passes_hare.svg',
            en: 'Step by step, without stopping to rest, the patient tortoise walked past the sleeping hare.',
            es: 'Paso a paso, sin detenerse a descansar, la paciente tortuga caminó y adelantó a la liebre dormida.',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #fef08a 100%)',
            anim: 'float',
            hero: '🐢🐾💤',
            hotspots: [
              { emoji: '👣', en: 'Step by step', es: 'Paso a paso', x: 32, y: 60 },
              { emoji: '🐢', en: 'Patient tortoise', es: 'Tortuga paciente', x: 70, y: 58 }
            ]
          },
          {
            id: 'race_s_5',
            image: 'assets/images/scenes/race_9_finish_line.svg',
            en: 'The hare woke up and ran fast, but the tortoise was already crossing the finish line while everyone cheered!',
            es: 'La liebre despertó de pronto y corrió, ¡pero la tortuga ya estaba cruzando la meta entre grandes aplausos!',
            sky: 'linear-gradient(180deg, #fed7aa 0%, #fecaca 100%)',
            anim: 'shake',
            hero: '🐢🏁🎉',
            hotspots: [
              { emoji: '🏁', en: 'Finish line', es: 'Línea de meta', x: 34, y: 48 },
              { emoji: '👏', en: 'Everyone cheered', es: 'Todos aplaudieron', x: 72, y: 54 }
            ]
          },
          {
            id: 'race_s_6',
            image: 'assets/images/scenes/race_10_trophy_winner.svg',
            en: 'Slow and steady wins the race! smiled the champion tortoise holding her golden trophy.',
            es: '¡Despacito y con constancia se gana la carrera! sonrió la tortuga campeona levantando su trofeo.',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🐢🏆🌟',
            hotspots: [
              { emoji: '🏆', en: 'Golden trophy', es: 'Trofeo de oro', x: 50, y: 42 },
              { emoji: '🌟', en: 'Winner', es: 'Ganadora', x: 74, y: 56 }
            ]
          }
        ]
      }
    }
  },
  {
    id: 'rainbow_animals_party',
    titleEn: 'The Rainbow Animals Party',
    titleEs: 'La Gran Fiesta de los Animalitos del Arcoíris',
    emoji: '🌈',
    cover: 'assets/images/rainbow_animals_party.jpg',
    accent: '#a855f7',
    ageTag: 'Colores y Amigos',
    versions: {
      classic: {
        label: 'Cuento Clásico Completo · 8 escenas',
        scenes: [
          {
            id: 'party_c_1',
            image: 'assets/images/scenes/party_1_rainbow.jpg',
            en: 'After a gentle spring rain, a giant seven-color rainbow appeared in the sky, and the seven animal friends decided to have a picnic party!',
            es: 'Tras una suave lluvia de primavera, un arcoíris gigante de siete colores brilló en el cielo, ¡y los siete amigos animales organizaron una fiesta de picnic!',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef08a 100%)',
            anim: 'sparkle',
            hero: '☀️🌈🎉',
            hotspots: [
              { emoji: '🌈', en: 'Seven-color rainbow', es: 'Arcoíris de siete colores', x: 42, y: 38 },
              { emoji: '🧺', en: 'Picnic party', es: 'Fiesta de picnic', x: 74, y: 60 }
            ]
          },
          {
            id: 'party_c_2',
            image: 'assets/images/scenes/party_2_ladybug.jpg',
            en: 'First came the little red ladybug flying on a daisy. Hello friends! she said, bringing a basket of sweet red apples and strawberries.',
            es: 'Primero llegó volando la pequeña mariquita roja sobre una margarita. ¡Hola amigos! saludó, trayendo manzanas rojas y fresas dulces.',
            sky: 'linear-gradient(180deg, #fecaca 0%, #fef3c7 100%)',
            anim: 'float',
            hero: '🐞🍎🍓',
            hotspots: [
              { emoji: '🐞', en: 'Red ladybug', es: 'Mariquita roja', x: 32, y: 58 },
              { emoji: '🍎', en: 'Sweet red apples', es: 'Manzanas rojas dulces', x: 70, y: 60 }
            ]
          },
          {
            id: 'party_c_3',
            image: 'assets/images/scenes/party_3_fox.jpg',
            en: 'Next arrived the clever orange fox wearing a cozy scarf. Look what I made! he smiled, sharing delicious sandwiches and fresh orange juice.',
            es: 'Después llegó el simpático zorro naranja con su bufanda. ¡Mirad lo que he preparado! sonrió, compartiendo ricos sándwiches y zumo de naranja.',
            sky: 'linear-gradient(180deg, #fed7aa 0%, #fef9c3 100%)',
            anim: 'bounce',
            hero: '🦊🥪🍊',
            hotspots: [
              { emoji: '🦊', en: 'Orange fox', es: 'Zorro naranja', x: 34, y: 58 },
              { emoji: '🍊', en: 'Orange juice', es: 'Zumo de naranja', x: 70, y: 60 }
            ]
          },
          {
            id: 'party_c_4',
            image: 'assets/images/scenes/party_4_chick.jpg',
            en: 'The fluffy yellow chick hopped onto the picnic blanket singing cheep, cheep, cheep! and brought sweet yellow bananas for everyone.',
            es: 'El esponjoso pollito amarillo saltó sobre el mantel cantando ¡pío, pío, pío! y trajo plátanos amarillos para todos sus amigos.',
            sky: 'linear-gradient(180deg, #fef08a 0%, #bbf7d0 100%)',
            anim: 'bounce',
            hero: '🐥🍌🎵',
            hotspots: [
              { emoji: '🐥', en: 'Yellow chick', es: 'Pollito amarillo', x: 34, y: 58 },
              { emoji: '🍌', en: 'Yellow bananas', es: 'Plátanos amarillos', x: 70, y: 56 }
            ]
          },
          {
            id: 'party_c_5',
            image: 'assets/images/scenes/party_5_frog.jpg',
            en: 'Ribbit, ribbit! The happy green frog with a bow tie jumped super high over the flowers and made all his friends laugh out loud.',
            es: '¡Croac, croac! La alegre rana verde con pajarita dio un salto altísimo por encima de las flores e hizo reír a carcajadas a todos.',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #bae6fd 100%)',
            anim: 'bounce',
            hero: '🐸⬆️😂',
            hotspots: [
              { emoji: '🐸', en: 'Green frog jumps high', es: 'La rana verde salta alto', x: 44, y: 56 },
              { emoji: '🟢', en: 'Bright green', es: 'Verde brillante', x: 74, y: 42 }
            ]
          },
          {
            id: 'party_c_6',
            image: 'assets/images/scenes/party_6_whale.jpg',
            en: 'In the crystal blue pond, the gentle blue whale spouted a fountain of sparkling water—splash, splash!—cooling everyone in the sunshine.',
            es: 'En el estanque cristalino, la amable ballena azul lanzó un chorrito de agua brillante —¡chof, chof!— refrescando a todos bajo el sol.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #60a5fa 100%)',
            anim: 'float',
            hero: '🐳💦☀️',
            hotspots: [
              { emoji: '🐳', en: 'Gentle blue whale', es: 'Ballena azul amable', x: 44, y: 58 },
              { emoji: '💦', en: 'Water fountain', es: 'Chorrito de agua', x: 74, y: 40 }
            ]
          },
          {
            id: 'party_c_7',
            image: 'assets/images/scenes/party_7_octopus_flamingo.jpg',
            en: 'The friendly purple octopus clapped with his eight arms while the tall pink flamingo danced and served vanilla cupcakes with cherries!',
            es: 'El simpático pulpo morado aplaudió con sus ocho tentáculos mientras el elegante flamenco rosa bailaba y repartía magdalenas con cereza.',
            sky: 'linear-gradient(180deg, #e9d5ff 0%, #fbcfe8 100%)',
            anim: 'pulse',
            hero: '🐙🧁🦩',
            hotspots: [
              { emoji: '🐙', en: 'Purple octopus', es: 'Pulpo morado', x: 26, y: 58 },
              { emoji: '🦩', en: 'Pink flamingo', es: 'Flamenco rosa', x: 74, y: 56 }
            ]
          },
          {
            id: 'party_c_8',
            image: 'assets/images/scenes/party_8_goodnight.jpg',
            en: 'As the golden sun went down, red, orange, yellow, green, blue, purple, and pink sang together under the stars: Goodnight, best friends!',
            es: 'Cuando el sol dorado se escondió, rojo, naranja, amarillo, verde, azul, morado y rosa cantaron juntos bajo las estrellas: ¡Buenas noches, amigos!',
            sky: 'linear-gradient(180deg, #c7d2fe 0%, #fbcfe8 100%)',
            anim: 'sleep',
            hero: '🌙⭐🌈',
            hotspots: [
              { emoji: '🌙', en: 'Goodnight friends', es: 'Buenas noches amigos', x: 32, y: 38 },
              { emoji: '🌈', en: 'All seven colors', es: 'Los siete colores', x: 72, y: 46 }
            ]
          }
        ]
      },
      short: {
        label: 'Versión Breve · 5 escenas',
        scenes: [
          {
            id: 'party_s_1',
            image: 'assets/images/scenes/party_1_rainbow.jpg',
            en: 'Under a bright rainbow, the red ladybug and the orange fox spread a colorful blanket for a joyful picnic!',
            es: 'Bajo un brillante arcoíris, la mariquita roja y el zorro naranja extendieron un mantel de colores para hacer un picnic.',
            sky: 'linear-gradient(180deg, #fecaca 0%, #fed7aa 100%)',
            anim: 'bounce',
            hero: '🐞🦊🌈',
            hotspots: [
              { emoji: '🐞', en: 'Red ladybug', es: 'Mariquita roja', x: 30, y: 58 },
              { emoji: '🦊', en: 'Orange fox', es: 'Zorro naranja', x: 70, y: 58 }
            ]
          },
          {
            id: 'party_s_2',
            image: 'assets/images/scenes/party_4_chick.jpg',
            en: 'The little yellow chick sang a happy song while the green frog jumped high over the picnic basket!',
            es: 'El pequeño pollito amarillo cantó una canción alegre mientras la rana verde daba grandes saltos junto a la cesta.',
            sky: 'linear-gradient(180deg, #fef08a 0%, #bbf7d0 100%)',
            anim: 'bounce',
            hero: '🐥🎵🐸',
            hotspots: [
              { emoji: '🐥', en: 'Yellow chick', es: 'Pollito amarillo', x: 30, y: 58 },
              { emoji: '🐸', en: 'Green frog', es: 'Rana verde', x: 70, y: 58 }
            ]
          },
          {
            id: 'party_s_3',
            image: 'assets/images/scenes/party_6_whale.jpg',
            en: 'Splash, splash! The big blue whale smiled and sprayed cool water from the blue pond.',
            es: '¡Chof, chof! La gran ballena azul sonrió y lanzó un chorrito de agua fresca desde el estanque azul.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #93c5fd 100%)',
            anim: 'float',
            hero: '🐳💦',
            hotspots: [
              { emoji: '🐳', en: 'Blue whale', es: 'Ballena azul', x: 45, y: 58 },
              { emoji: '💧', en: 'Cool water', es: 'Agua fresca', x: 75, y: 62 }
            ]
          },
          {
            id: 'party_s_4',
            image: 'assets/images/scenes/party_7_octopus_flamingo.jpg',
            en: 'The purple octopus clapped his eight arms and the pink flamingo shared delicious sweet cupcakes!',
            es: '¡El pulpo morado aplaudió con sus ocho brazos y el flamenco rosa repartió deliciosas magdalenas dulces!',
            sky: 'linear-gradient(180deg, #e9d5ff 0%, #fbcfe8 100%)',
            anim: 'pulse',
            hero: '🐙🧁🦩',
            hotspots: [
              { emoji: '🐙', en: 'Purple octopus', es: 'Pulpo morado', x: 32, y: 58 },
              { emoji: '🦩', en: 'Pink flamingo', es: 'Flamenco rosa', x: 70, y: 56 }
            ]
          },
          {
            id: 'party_s_5',
            image: 'assets/images/scenes/party_8_goodnight.jpg',
            en: 'All seven colorful animal friends sang and danced happily together under the magic rainbow!',
            es: '¡Los siete amigos animales de colores cantaron y bailaron muy felices bajo el arcoíris mágico!',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🌈🎶✨',
            hotspots: [
              { emoji: '🌈', en: 'Magic rainbow', es: 'Arcoíris mágico', x: 50, y: 36 },
              { emoji: '🎶', en: 'Sing together', es: 'Cantar juntos', x: 75, y: 56 }
            ]
          }
        ]
      }
    }
  }
];
