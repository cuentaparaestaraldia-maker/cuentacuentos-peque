// Catálogo extensible de cuentos para "Cuenta Cuentos · English Learning"
// Cada cuento incluye versión 'short' (5 escenas, frases muy cortas) y 'classic' (8 escenas, más detalle).
// Para añadir nuevos cuentos en el futuro, agrega un objeto al array STORIES y ejecuta scripts/generate_tts.py.

window.STORIES = [
  {
    id: 'three_little_pigs',
    titleEn: 'The Three Little Pigs',
    titleEs: 'Los Tres Cerditos',
    emoji: '🐷',
    cover: 'assets/images/three_little_pigs.jpg',
    accent: '#f97316',
    ageTag: '3-6 años',
    versions: {
      short: {
        label: 'Corta · 5 escenas',
        scenes: [
          {
            id: 'pigs_s_1',
            en: 'Three little pigs build houses.',
            es: 'Tres cerditos construyen casas.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef3c7 100%)',
            anim: 'bounce',
            hero: '🐷🐷🐷',
            hotspots: [
              { emoji: '🐷', en: 'Little pig', es: 'Cerdito', x: 24, y: 66 },
              { emoji: '🏡', en: 'House', es: 'Casa', x: 74, y: 58 }
            ]
          },
          {
            id: 'pigs_s_2',
            en: 'A big bad wolf comes!',
            es: '¡Llega un lobo grande y malo!',
            sky: 'linear-gradient(180deg, #cbd5e1 0%, #fde68a 100%)',
            anim: 'shake',
            hero: '🐺',
            hotspots: [
              { emoji: '🐺', en: 'Big wolf', es: 'Lobo grande', x: 50, y: 56 },
              { emoji: '🌲', en: 'Forest', es: 'Bosque', x: 18, y: 45 }
            ]
          },
          {
            id: 'pigs_s_3',
            en: 'He blows the straw house.',
            es: 'Sopla la casa de paja.',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #fef08a 100%)',
            anim: 'wind',
            hero: '💨🌾',
            hotspots: [
              { emoji: '🌾', en: 'Straw', es: 'Paja', x: 68, y: 62 },
              { emoji: '💨', en: 'Blow', es: 'Soplar', x: 32, y: 44 }
            ]
          },
          {
            id: 'pigs_s_4',
            en: 'The brick house is strong!',
            es: '¡La casa de ladrillos es fuerte!',
            sky: 'linear-gradient(180deg, #bfdbfe 0%, #fed7aa 100%)',
            anim: 'pulse',
            hero: '🧱🏠',
            hotspots: [
              { emoji: '🧱', en: 'Bricks', es: 'Ladrillos', x: 64, y: 64 },
              { emoji: '💪', en: 'Strong', es: 'Fuerte', x: 28, y: 52 }
            ]
          },
          {
            id: 'pigs_s_5',
            en: 'The pigs are happy and safe.',
            es: 'Los cerditos están felices y seguros.',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🐷🎉🐷',
            hotspots: [
              { emoji: '😊', en: 'Happy', es: 'Feliz', x: 30, y: 55 },
              { emoji: '🌟', en: 'Safe', es: 'Seguro', x: 72, y: 42 }
            ]
          }
        ]
      },
      classic: {
        label: 'Clásica · 8 escenas',
        scenes: [
          {
            id: 'pigs_c_1',
            en: 'Once upon a time, three little pigs lived together.',
            es: 'Érase una vez, tres cerditos vivían juntos.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef3c7 100%)',
            anim: 'bounce',
            hero: '🐷🐷🐷',
            hotspots: [
              { emoji: '🐷', en: 'Three pigs', es: 'Tres cerditos', x: 26, y: 64 },
              { emoji: '☀️', en: 'Sunny day', es: 'Día soleado', x: 78, y: 24 }
            ]
          },
          {
            id: 'pigs_c_2',
            en: 'The first pig builds a yellow straw house.',
            es: 'El primer cerdito construye una casa amarilla de paja.',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #fef08a 100%)',
            anim: 'float',
            hero: '🐷🌾',
            hotspots: [
              { emoji: '🌾', en: 'Straw house', es: 'Casa de paja', x: 68, y: 58 },
              { emoji: '💛', en: 'Yellow', es: 'Amarillo', x: 25, y: 40 }
            ]
          },
          {
            id: 'pigs_c_3',
            en: 'The second pig builds a brown stick house.',
            es: 'El segundo cerdito construye una casa marrón de madera.',
            sky: 'linear-gradient(180deg, #dbeafe 0%, #fed7aa 100%)',
            anim: 'float',
            hero: '🐷🪵',
            hotspots: [
              { emoji: '🪵', en: 'Wood sticks', es: 'Palos de madera', x: 66, y: 60 },
              { emoji: '🏠', en: 'Wooden house', es: 'Casa de madera', x: 30, y: 55 }
            ]
          },
          {
            id: 'pigs_c_4',
            en: 'The third pig works hard with red bricks.',
            es: 'El tercer cerdito trabaja duro con ladrillos rojos.',
            sky: 'linear-gradient(180deg, #bfdbfe 0%, #fecaca 100%)',
            anim: 'pulse',
            hero: '🐷🧱',
            hotspots: [
              { emoji: '🧱', en: 'Red bricks', es: 'Ladrillos rojos', x: 64, y: 60 },
              { emoji: '❤️', en: 'Red', es: 'Rojo', x: 26, y: 42 }
            ]
          },
          {
            id: 'pigs_c_5',
            en: 'Then, a big bad wolf knocks on the door!',
            es: '¡Entonces, un lobo grande y malo llama a la puerta!',
            sky: 'linear-gradient(180deg, #cbd5e1 0%, #fde68a 100%)',
            anim: 'shake',
            hero: '🐺🚪',
            hotspots: [
              { emoji: '🐺', en: 'Big bad wolf', es: 'Lobo malo', x: 34, y: 58 },
              { emoji: '🚪', en: 'Door', es: 'Puerta', x: 68, y: 56 }
            ]
          },
          {
            id: 'pigs_c_6',
            en: 'He huffs and puffs and blows the straw down!',
            es: '¡Sopla y resopla y tira la casa de paja!',
            sky: 'linear-gradient(180deg, #e2e8f0 0%, #fef08a 100%)',
            anim: 'wind',
            hero: '🐺💨🌾',
            hotspots: [
              { emoji: '💨', en: 'Wind', es: 'Viento', x: 50, y: 40 },
              { emoji: '🌾', en: 'Straw', es: 'Paja', x: 75, y: 65 }
            ]
          },
          {
            id: 'pigs_c_7',
            en: 'The pigs run fast to the brick house.',
            es: 'Los cerditos corren rápido a la casa de ladrillos.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'run',
            hero: '🐷💨🏠',
            hotspots: [
              { emoji: '🏃', en: 'Run fast', es: 'Correr rápido', x: 35, y: 62 },
              { emoji: '🏠', en: 'Brick house', es: 'Casa de ladrillos', x: 72, y: 54 }
            ]
          },
          {
            id: 'pigs_c_8',
            en: 'The wolf cannot blow it, and they dance happily!',
            es: '¡El lobo no puede tirarla, y bailan felices!',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🐷🎶🐷',
            hotspots: [
              { emoji: '🎶', en: 'Dance', es: 'Bailar', x: 50, y: 38 },
              { emoji: '🌈', en: 'Happy end', es: 'Final feliz', x: 78, y: 30 }
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
    ageTag: '3-6 años',
    versions: {
      short: {
        label: 'Corta · 5 escenas',
        scenes: [
          {
            id: 'red_s_1',
            en: 'Little Red wears a red cape.',
            es: 'Caperucita lleva una capa roja.',
            sky: 'linear-gradient(180deg, #fde68a 0%, #bbf7d0 100%)',
            anim: 'float',
            hero: '👧❤️',
            hotspots: [
              { emoji: '🔴', en: 'Red', es: 'Rojo', x: 30, y: 52 },
              { emoji: '🧺', en: 'Basket', es: 'Cesta', x: 70, y: 62 }
            ]
          },
          {
            id: 'red_s_2',
            en: 'She walks in the green forest.',
            es: 'Camina por el bosque verde.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #86efac 100%)',
            anim: 'bounce',
            hero: '🌲🦋🌸',
            hotspots: [
              { emoji: '🦋', en: 'Butterfly', es: 'Mariposa', x: 35, y: 40 },
              { emoji: '🌸', en: 'Flower', es: 'Flor', x: 72, y: 68 }
            ]
          },
          {
            id: 'red_s_3',
            en: 'She goes to Grandma’s house.',
            es: 'Va a la casa de la abuela.',
            sky: 'linear-gradient(180deg, #fed7aa 0%, #bbf7d0 100%)',
            anim: 'pulse',
            hero: '🏡👵',
            hotspots: [
              { emoji: '👵', en: 'Grandma', es: 'Abuela', x: 68, y: 56 },
              { emoji: '🏡', en: 'House', es: 'Casa', x: 32, y: 56 }
            ]
          },
          {
            id: 'red_s_4',
            en: 'Look! Big eyes and big ears!',
            es: '¡Mira! ¡Ojos grandes y orejas grandes!',
            sky: 'linear-gradient(180deg, #e2e8f0 0%, #fde68a 100%)',
            anim: 'shake',
            hero: '🐺👀',
            hotspots: [
              { emoji: '👀', en: 'Big eyes', es: 'Ojos grandes', x: 35, y: 45 },
              { emoji: '👂', en: 'Big ears', es: 'Orejas grandes', x: 68, y: 45 }
            ]
          },
          {
            id: 'red_s_5',
            en: 'Grandma and Red hug happily.',
            es: 'La abuela y Caperucita se abrazan felices.',
            sky: 'linear-gradient(180deg, #fbcfe8 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '👵❤️👧',
            hotspots: [
              { emoji: '🤗', en: 'Hug', es: 'Abrazo', x: 50, y: 52 },
              { emoji: '🍎', en: 'Apple', es: 'Manzana', x: 75, y: 65 }
            ]
          }
        ]
      },
      classic: {
        label: 'Clásica · 8 escenas',
        scenes: [
          {
            id: 'red_c_1',
            en: 'Little Red Riding Hood loves her red cape.',
            es: 'A Caperucita Roja le encanta su capa roja.',
            sky: 'linear-gradient(180deg, #fde68a 0%, #bbf7d0 100%)',
            anim: 'float',
            hero: '👧🔴',
            hotspots: [
              { emoji: '🔴', en: 'Red cape', es: 'Capa roja', x: 30, y: 52 },
              { emoji: '👧', en: 'Little girl', es: 'Niña pequeña', x: 68, y: 58 }
            ]
          },
          {
            id: 'red_c_2',
            en: 'Mommy gives her a basket with yummy fruit.',
            es: 'Mamá le da una cesta con fruta rica.',
            sky: 'linear-gradient(180deg, #fef3c7 0%, #fed7aa 100%)',
            anim: 'bounce',
            hero: '🧺🍎🍌',
            hotspots: [
              { emoji: '🧺', en: 'Basket', es: 'Cesta', x: 35, y: 60 },
              { emoji: '🍎', en: 'Sweet apple', es: 'Manzana dulce', x: 70, y: 55 }
            ]
          },
          {
            id: 'red_c_3',
            en: 'She walks happily along the sunny forest path.',
            es: 'Camina feliz por el camino soleado del bosque.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #86efac 100%)',
            anim: 'float',
            hero: '🌲🦋🌸',
            hotspots: [
              { emoji: '🌲', en: 'Trees', es: 'Árboles', x: 24, y: 45 },
              { emoji: '🦋', en: 'Butterflies', es: 'Mariposas', x: 72, y: 38 }
            ]
          },
          {
            id: 'red_c_4',
            en: 'She meets a sneaky wolf in the woods.',
            es: 'Se encuentra con un lobo astuto en el bosque.',
            sky: 'linear-gradient(180deg, #cbd5e1 0%, #bbf7d0 100%)',
            anim: 'shake',
            hero: '🐺🌲',
            hotspots: [
              { emoji: '🐺', en: 'Wolf', es: 'Lobo', x: 55, y: 56 },
              { emoji: '🌿', en: 'Woods', es: 'Bosque', x: 24, y: 62 }
            ]
          },
          {
            id: 'red_c_5',
            en: 'Little Red picks pretty flowers for Grandma.',
            es: 'Caperucita recoge flores bonitas para la abuela.',
            sky: 'linear-gradient(180deg, #fbcfe8 0%, #bbf7d0 100%)',
            anim: 'sparkle',
            hero: '🌷🌼🌺',
            hotspots: [
              { emoji: '🌷', en: 'Flowers', es: 'Flores', x: 32, y: 62 },
              { emoji: '💛', en: 'Pretty', es: 'Bonito', x: 70, y: 45 }
            ]
          },
          {
            id: 'red_c_6',
            en: 'At the cottage, she sees very big ears!',
            es: '¡En la casita, ve unas orejas muy grandes!',
            sky: 'linear-gradient(180deg, #e2e8f0 0%, #fde68a 100%)',
            anim: 'pulse',
            hero: '🐺👂',
            hotspots: [
              { emoji: '👂', en: 'Big ears', es: 'Orejas grandes', x: 40, y: 44 },
              { emoji: '👀', en: 'Big eyes', es: 'Ojos grandes', x: 68, y: 52 }
            ]
          },
          {
            id: 'red_c_7',
            en: 'A kind woodcutter helps and scares the wolf away.',
            es: 'Un leñador amable ayuda y asusta al lobo.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fde68a 100%)',
            anim: 'run',
            hero: '🪓🐺💨',
            hotspots: [
              { emoji: '🦸', en: 'Hero', es: 'Héroe', x: 34, y: 55 },
              { emoji: '💨', en: 'Run away', es: 'Huir', x: 74, y: 55 }
            ]
          },
          {
            id: 'red_c_8',
            en: 'Grandma, Red, and the woodcutter eat sweet cake!',
            es: '¡La abuela, Caperucita y el leñador comen pastel dulce!',
            sky: 'linear-gradient(180deg, #fbcfe8 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🍰👵👧',
            hotspots: [
              { emoji: '🍰', en: 'Cake', es: 'Pastel', x: 50, y: 60 },
              { emoji: '❤️', en: 'Love', es: 'Amor', x: 75, y: 38 }
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
    ageTag: '3-6 años',
    versions: {
      short: {
        label: 'Corta · 5 escenas',
        scenes: [
          {
            id: 'gold_s_1',
            en: 'Three bears go for a walk.',
            es: 'Tres osos salen a pasear.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #bbf7d0 100%)',
            anim: 'bounce',
            hero: '🐻🐻🐻',
            hotspots: [
              { emoji: '🐻', en: 'Three bears', es: 'Tres osos', x: 35, y: 58 },
              { emoji: '🌲', en: 'Walk', es: 'Pasear', x: 74, y: 52 }
            ]
          },
          {
            id: 'gold_s_2',
            en: 'Goldilocks sees three bowls of soup.',
            es: 'Ricitos ve tres platos de sopa.',
            sky: 'linear-gradient(180deg, #fef3c7 0%, #fed7aa 100%)',
            anim: 'float',
            hero: '🥣🥣🥣',
            hotspots: [
              { emoji: '🥣', en: 'Soup bowl', es: 'Plato de sopa', x: 50, y: 60 },
              { emoji: '👧', en: 'Goldilocks', es: 'Ricitos de Oro', x: 24, y: 52 }
            ]
          },
          {
            id: 'gold_s_3',
            en: 'The baby bowl is just right!',
            es: '¡El plato pequeño está perfecto!',
            sky: 'linear-gradient(180deg, #fde68a 0%, #fecaca 100%)',
            anim: 'pulse',
            hero: '😋🥣',
            hotspots: [
              { emoji: '🔥', en: 'Hot', es: 'Caliente', x: 26, y: 46 },
              { emoji: '❄️', en: 'Cold', es: 'Frío', x: 74, y: 46 }
            ]
          },
          {
            id: 'gold_s_4',
            en: 'She sleeps on the small bed.',
            es: 'Se duerme en la cama pequeña.',
            sky: 'linear-gradient(180deg, #c7d2fe 0%, #fbcfe8 100%)',
            anim: 'sleep',
            hero: '🛏️💤',
            hotspots: [
              { emoji: '🛏️', en: 'Small bed', es: 'Cama pequeña', x: 50, y: 62 },
              { emoji: '💤', en: 'Sleep', es: 'Dormir', x: 72, y: 36 }
            ]
          },
          {
            id: 'gold_s_5',
            en: 'The bears smile and say goodbye!',
            es: '¡Los osos sonríen y dicen adiós!',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🐻👋👧',
            hotspots: [
              { emoji: '👋', en: 'Bye-bye', es: 'Adiós', x: 50, y: 42 },
              { emoji: '😊', en: 'Smile', es: 'Sonreír', x: 74, y: 58 }
            ]
          }
        ]
      },
      classic: {
        label: 'Clásica · 8 escenas',
        scenes: [
          {
            id: 'gold_c_1',
            en: 'Papa Bear, Mama Bear, and Baby Bear live together.',
            es: 'Papá Oso, Mamá Osa y Osito viven juntos.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #bbf7d0 100%)',
            anim: 'bounce',
            hero: '🐻🐻🧸',
            hotspots: [
              { emoji: '🐻', en: 'Big bear', es: 'Oso grande', x: 26, y: 56 },
              { emoji: '🧸', en: 'Baby bear', es: 'Osito', x: 74, y: 64 }
            ]
          },
          {
            id: 'gold_c_2',
            en: 'They go for a walk while breakfast cools down.',
            es: 'Salen a pasear mientras se enfría el desayuno.',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #fef08a 100%)',
            anim: 'float',
            hero: '🌲☀️🐻',
            hotspots: [
              { emoji: '☀️', en: 'Morning', es: 'Mañana', x: 76, y: 26 },
              { emoji: '🌲', en: 'Forest', es: 'Bosque', x: 24, y: 52 }
            ]
          },
          {
            id: 'gold_c_3',
            en: 'Curious Goldilocks knocks and enters the cozy house.',
            es: 'La curiosa Ricitos llama y entra en la casita.',
            sky: 'linear-gradient(180deg, #fef3c7 0%, #fed7aa 100%)',
            anim: 'pulse',
            hero: '👧🚪🏠',
            hotspots: [
              { emoji: '👧', en: 'Goldilocks', es: 'Ricitos', x: 30, y: 56 },
              { emoji: '🏠', en: 'Cozy house', es: 'Casita', x: 72, y: 52 }
            ]
          },
          {
            id: 'gold_c_4',
            en: 'One bowl is too hot, one is too cold!',
            es: '¡Un plato está muy caliente, otro muy frío!',
            sky: 'linear-gradient(180deg, #fecaca 0%, #bfdbfe 100%)',
            anim: 'shake',
            hero: '🔥🥣❄️',
            hotspots: [
              { emoji: '🔥', en: 'Too hot', es: 'Muy caliente', x: 26, y: 48 },
              { emoji: '❄️', en: 'Too cold', es: 'Muy frío', x: 74, y: 48 }
            ]
          },
          {
            id: 'gold_c_5',
            en: 'Baby Bear’s small bowl is yummy and just right.',
            es: 'El plato pequeño del Osito está rico y perfecto.',
            sky: 'linear-gradient(180deg, #fef08a 0%, #bbf7d0 100%)',
            anim: 'bounce',
            hero: '😋🥣✨',
            hotspots: [
              { emoji: '🥣', en: 'Small bowl', es: 'Plato pequeño', x: 50, y: 60 },
              { emoji: '😋', en: 'Yummy', es: 'Rico', x: 74, y: 42 }
            ]
          },
          {
            id: 'gold_c_6',
            en: 'She tries a big chair, a medium chair, and a small chair.',
            es: 'Prueba una silla grande, una mediana y una pequeña.',
            sky: 'linear-gradient(180deg, #fde68a 0%, #fed7aa 100%)',
            anim: 'float',
            hero: '🪑🪑🪑',
            hotspots: [
              { emoji: '🪑', en: 'Chair', es: 'Silla', x: 50, y: 60 },
              { emoji: '📏', en: 'Big and small', es: 'Grande y pequeño', x: 26, y: 46 }
            ]
          },
          {
            id: 'gold_c_7',
            en: 'Goldilocks feels sleepy and naps in the small bed.',
            es: 'Ricitos tiene sueño y duerme en la cama pequeña.',
            sky: 'linear-gradient(180deg, #c7d2fe 0%, #fbcfe8 100%)',
            anim: 'sleep',
            hero: '👧🛏️💤',
            hotspots: [
              { emoji: '😴', en: 'Sleepy', es: 'Con sueño', x: 32, y: 44 },
              { emoji: '🛏️', en: 'Bed', es: 'Cama', x: 68, y: 62 }
            ]
          },
          {
            id: 'gold_c_8',
            en: 'The bears come home, and they all become friends!',
            es: '¡Los osos vuelven a casa, y todos se hacen amigos!',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🐻👧🧸',
            hotspots: [
              { emoji: '🤝', en: 'Friends', es: 'Amigos', x: 50, y: 45 },
              { emoji: '🏡', en: 'Home', es: 'Hogar', x: 76, y: 58 }
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
    ageTag: '3-6 años',
    versions: {
      short: {
        label: 'Corta · 5 escenas',
        scenes: [
          {
            id: 'race_s_1',
            en: 'The hare is very fast!',
            es: '¡La liebre es muy rápida!',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef08a 100%)',
            anim: 'run',
            hero: '🐇💨',
            hotspots: [
              { emoji: '🐇', en: 'Hare', es: 'Liebre', x: 38, y: 58 },
              { emoji: '⚡', en: 'Fast', es: 'Rápido', x: 72, y: 42 }
            ]
          },
          {
            id: 'race_s_2',
            en: 'The tortoise walks very slow.',
            es: 'La tortuga camina muy despacio.',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #bbf7d0 100%)',
            anim: 'float',
            hero: '🐢🌿',
            hotspots: [
              { emoji: '🐢', en: 'Tortoise', es: 'Tortuga', x: 48, y: 60 },
              { emoji: '🌿', en: 'Slow', es: 'Despacio', x: 74, y: 65 }
            ]
          },
          {
            id: 'race_s_3',
            en: 'Ready, steady, go! The race starts!',
            es: '¡Preparados, listos, ya! ¡Empieza la carrera!',
            sky: 'linear-gradient(180deg, #fde68a 0%, #fed7aa 100%)',
            anim: 'bounce',
            hero: '🏁🐢🐇',
            hotspots: [
              { emoji: '🏁', en: 'Start', es: 'Salida', x: 28, y: 44 },
              { emoji: '🏃', en: 'Run', es: 'Correr', x: 72, y: 58 }
            ]
          },
          {
            id: 'race_s_4',
            en: 'The hare stops to sleep.',
            es: 'La liebre se para a dormir.',
            sky: 'linear-gradient(180deg, #c7d2fe 0%, #fde68a 100%)',
            anim: 'sleep',
            hero: '🐇💤🌳',
            hotspots: [
              { emoji: '💤', en: 'Sleep', es: 'Dormir', x: 48, y: 38 },
              { emoji: '🌳', en: 'Tree', es: 'Árbol', x: 76, y: 52 }
            ]
          },
          {
            id: 'race_s_5',
            en: 'Slow and steady wins the race!',
            es: '¡Despacio y constante gana la carrera!',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🐢🏆🎉',
            hotspots: [
              { emoji: '🏆', en: 'Winner', es: 'Ganador', x: 50, y: 42 },
              { emoji: '🐢', en: 'Green tortoise', es: 'Tortuga verde', x: 26, y: 62 }
            ]
          }
        ]
      },
      classic: {
        label: 'Clásica · 8 escenas',
        scenes: [
          {
            id: 'race_c_1',
            en: 'The proud hare boasts that he runs super fast.',
            es: 'La liebre orgullosa presume de que corre súper rápido.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef08a 100%)',
            anim: 'run',
            hero: '🐇⚡',
            hotspots: [
              { emoji: '🐇', en: 'Fast hare', es: 'Liebre rápida', x: 42, y: 58 },
              { emoji: '⚡', en: 'Super fast', es: 'Súper rápido', x: 74, y: 42 }
            ]
          },
          {
            id: 'race_c_2',
            en: 'The calm tortoise smiles and says: let us race!',
            es: 'La tortuga tranquila sonríe y dice: ¡hagamos una carrera!',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #bbf7d0 100%)',
            anim: 'bounce',
            hero: '🐢😊',
            hotspots: [
              { emoji: '🐢', en: 'Tortoise', es: 'Tortuga', x: 35, y: 60 },
              { emoji: '🏁', en: 'Race', es: 'Carrera', x: 72, y: 46 }
            ]
          },
          {
            id: 'race_c_3',
            en: 'All the forest animals cheer: one, two, three, go!',
            es: 'Todos los animales animan: ¡uno, dos, tres, ya!',
            sky: 'linear-gradient(180deg, #fde68a 0%, #fed7aa 100%)',
            anim: 'pulse',
            hero: '🦊🐿️🏁',
            hotspots: [
              { emoji: '🦊', en: 'Fox', es: 'Zorro', x: 24, y: 58 },
              { emoji: '📣', en: 'Cheer', es: 'Animar', x: 72, y: 44 }
            ]
          },
          {
            id: 'race_c_4',
            en: 'The hare jumps ahead like the wind.',
            es: 'La liebre salta adelante como el viento.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fde68a 100%)',
            anim: 'run',
            hero: '🐇💨💨',
            hotspots: [
              { emoji: '💨', en: 'Wind', es: 'Viento', x: 35, y: 48 },
              { emoji: '🐾', en: 'Jump', es: 'Saltar', x: 70, y: 64 }
            ]
          },
          {
            id: 'race_c_5',
            en: 'He feels tired and takes a long nap under a tree.',
            es: 'Se siente cansado y duerme una siesta bajo un árbol.',
            sky: 'linear-gradient(180deg, #c7d2fe 0%, #bbf7d0 100%)',
            anim: 'sleep',
            hero: '🌳🐇💤',
            hotspots: [
              { emoji: '😴', en: 'Take a nap', es: 'Echar una siesta', x: 48, y: 44 },
              { emoji: '🌳', en: 'Big tree', es: 'Árbol grande', x: 24, y: 48 }
            ]
          },
          {
            id: 'race_c_6',
            en: 'Step by step, the tortoise keeps walking forward.',
            es: 'Paso a paso, la tortuga sigue caminando hacia adelante.',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #fef08a 100%)',
            anim: 'float',
            hero: '🐢🐾🐾',
            hotspots: [
              { emoji: '👣', en: 'Step by step', es: 'Paso a paso', x: 66, y: 65 },
              { emoji: '🐢', en: 'Keep going', es: 'Seguir adelante', x: 32, y: 58 }
            ]
          },
          {
            id: 'race_c_7',
            en: 'The hare wakes up too late and runs!',
            es: '¡La liebre se despierta demasiado tarde y corre!',
            sky: 'linear-gradient(180deg, #fed7aa 0%, #fecaca 100%)',
            anim: 'shake',
            hero: '😲🐇💨',
            hotspots: [
              { emoji: '⏰', en: 'Late', es: 'Tarde', x: 28, y: 42 },
              { emoji: '🐇', en: 'Run', es: 'Correr', x: 70, y: 58 }
            ]
          },
          {
            id: 'race_c_8',
            en: 'The tortoise crosses the finish line and wins!',
            es: '¡La tortuga cruza la meta y gana!',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🐢🏆🏁',
            hotspots: [
              { emoji: '🏆', en: 'Trophy', es: 'Trofeo', x: 50, y: 40 },
              { emoji: '🎉', en: 'Victory', es: 'Victoria', x: 76, y: 46 }
            ]
          }
        ]
      }
    }
  },
  {
    id: 'rainbow_animals_party',
    titleEn: 'The Rainbow Animals Party',
    titleEs: 'La Fiesta de los Animalitos de Colores',
    emoji: '🌈',
    cover: 'assets/images/rainbow_animals_party.jpg',
    accent: '#a855f7',
    ageTag: '3-5 años',
    versions: {
      short: {
        label: 'Corta · 5 escenas',
        scenes: [
          {
            id: 'party_s_1',
            en: 'Hello red ladybug and orange fox!',
            es: '¡Hola mariquita roja y zorro naranja!',
            sky: 'linear-gradient(180deg, #fecaca 0%, #fed7aa 100%)',
            anim: 'bounce',
            hero: '🐞🦊',
            hotspots: [
              { emoji: '🐞', en: 'Red ladybug', es: 'Mariquita roja', x: 30, y: 58 },
              { emoji: '🦊', en: 'Orange fox', es: 'Zorro naranja', x: 70, y: 58 }
            ]
          },
          {
            id: 'party_s_2',
            en: 'Look! Yellow chick and green frog!',
            es: '¡Mira! ¡Pollito amarillo y rana verde!',
            sky: 'linear-gradient(180deg, #fef08a 0%, #bbf7d0 100%)',
            anim: 'bounce',
            hero: '🐥🐸',
            hotspots: [
              { emoji: '🐥', en: 'Yellow chick', es: 'Pollito amarillo', x: 30, y: 58 },
              { emoji: '🐸', en: 'Green frog', es: 'Rana verde', x: 70, y: 58 }
            ]
          },
          {
            id: 'party_s_3',
            en: 'Splash! Blue whale in the water!',
            es: '¡Chof! ¡Ballena azul en el agua!',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #93c5fd 100%)',
            anim: 'float',
            hero: '🐳💦',
            hotspots: [
              { emoji: '🐳', en: 'Blue whale', es: 'Ballena azul', x: 45, y: 58 },
              { emoji: '💧', en: 'Water', es: 'Agua', x: 75, y: 65 }
            ]
          },
          {
            id: 'party_s_4',
            en: 'Purple octopus and pink flamingo dance!',
            es: '¡Pulpo morado y flamenco rosa bailan!',
            sky: 'linear-gradient(180deg, #e9d5ff 0%, #fbcfe8 100%)',
            anim: 'pulse',
            hero: '🐙🦩',
            hotspots: [
              { emoji: '🐙', en: 'Purple octopus', es: 'Pulpo morado', x: 32, y: 58 },
              { emoji: '🦩', en: 'Pink flamingo', es: 'Flamenco rosa', x: 70, y: 56 }
            ]
          },
          {
            id: 'party_s_5',
            en: 'Seven friends sing under the rainbow!',
            es: '¡Siete amigos cantan bajo el arcoíris!',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '🌈🎶✨',
            hotspots: [
              { emoji: '🌈', en: 'Rainbow', es: 'Arcoíris', x: 50, y: 35 },
              { emoji: '🎶', en: 'Sing', es: 'Cantar', x: 75, y: 55 }
            ]
          }
        ]
      },
      classic: {
        label: 'Clásica · 8 escenas',
        scenes: [
          {
            id: 'party_c_1',
            en: 'It is a sunny morning for a rainbow party!',
            es: '¡Es una mañana soleada para una fiesta arcoíris!',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef08a 100%)',
            anim: 'sparkle',
            hero: '☀️🌈',
            hotspots: [
              { emoji: '☀️', en: 'Sun', es: 'Sol', x: 76, y: 26 },
              { emoji: '🌈', en: 'Rainbow', es: 'Arcoíris', x: 38, y: 42 }
            ]
          },
          {
            id: 'party_c_2',
            en: 'Red ladybug brings sweet red apples.',
            es: 'La mariquita roja trae manzanas rojas dulces.',
            sky: 'linear-gradient(180deg, #fecaca 0%, #fef3c7 100%)',
            anim: 'float',
            hero: '🐞🍎',
            hotspots: [
              { emoji: '🐞', en: 'Red ladybug', es: 'Mariquita roja', x: 34, y: 58 },
              { emoji: '🍎', en: 'Red apple', es: 'Manzana roja', x: 68, y: 60 }
            ]
          },
          {
            id: 'party_c_3',
            en: 'Orange fox shares a yummy sandwich.',
            es: 'El zorro naranja comparte un sándwich rico.',
            sky: 'linear-gradient(180deg, #fed7aa 0%, #fef9c3 100%)',
            anim: 'bounce',
            hero: '🦊🥪',
            hotspots: [
              { emoji: '🦊', en: 'Orange fox', es: 'Zorro naranja', x: 34, y: 58 },
              { emoji: '🥪', en: 'Sandwich', es: 'Sándwich', x: 68, y: 60 }
            ]
          },
          {
            id: 'party_c_4',
            en: 'Yellow chick sings cheep cheep happily!',
            es: '¡El pollito amarillo canta pío pío feliz!',
            sky: 'linear-gradient(180deg, #fef08a 0%, #bbf7d0 100%)',
            anim: 'bounce',
            hero: '🐥🎵',
            hotspots: [
              { emoji: '🐥', en: 'Yellow chick', es: 'Pollito amarillo', x: 38, y: 58 },
              { emoji: '🎵', en: 'Music', es: 'Música', x: 68, y: 42 }
            ]
          },
          {
            id: 'party_c_5',
            en: 'Green frog jumps high: ribbit, ribbit!',
            es: 'La rana verde salta alto: ¡croac, croac!',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #bae6fd 100%)',
            anim: 'bounce',
            hero: '🐸⬆️',
            hotspots: [
              { emoji: '🐸', en: 'Green frog', es: 'Rana verde', x: 45, y: 56 },
              { emoji: '🟢', en: 'Green', es: 'Verde', x: 74, y: 42 }
            ]
          },
          {
            id: 'party_c_6',
            en: 'Blue whale splashes in the cool blue pond.',
            es: 'La ballena azul salpica en el estanque azul.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #60a5fa 100%)',
            anim: 'float',
            hero: '🐳💦',
            hotspots: [
              { emoji: '🐳', en: 'Blue whale', es: 'Ballena azul', x: 45, y: 58 },
              { emoji: '🔵', en: 'Blue', es: 'Azul', x: 75, y: 40 }
            ]
          },
          {
            id: 'party_c_7',
            en: 'Purple octopus and pink flamingo bring cupcakes!',
            es: '¡El pulpo morado y el flamenco rosa traen magdalenas!',
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
            en: 'Goodnight rainbow friends, see you soon!',
            es: '¡Buenas noches amigos del arcoíris, hasta pronto!',
            sky: 'linear-gradient(180deg, #c7d2fe 0%, #fbcfe8 100%)',
            anim: 'sleep',
            hero: '🌙⭐🌈',
            hotspots: [
              { emoji: '🌙', en: 'Moon', es: 'Luna', x: 30, y: 34 },
              { emoji: '⭐', en: 'Stars', es: 'Estrellas', x: 72, y: 36 }
            ]
          }
        ]
      }
    }
  }
];
