#!/usr/bin/env python3
"""
Agrega el nuevo cuento de Barkville a data/stories.js.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STORIES_JS = ROOT / "data" / "stories.js"

story_code = """  {
    id: 'dogs_barkville',
    titleEn: 'The Mystery of the Golden Bone',
    titleEs: 'El Misterio del Hueso Dorado en Barkville',
    emoji: '🐶',
    cover: 'assets/images/dogs_barkville.jpg',
    accent: '#0284c7',
    ageTag: 'Cuento de Perros',
    versions: {
      classic: {
        label: 'Cuento Completo · 21 escenas',
        scenes: [
          {
            id: 'dogs_c_1',
            image: 'assets/images/scenes/dogs_1_park.jpg',
            en: 'Once upon a time, in a sunny town called Barkville, there was a big green park where dogs of every size and breed met to play every morning.',
            es: 'Érase una vez, en un pueblo soleado llamado Barkville, había un gran parque verde donde perros de todos los tamaños y razas se reunían para jugar cada mañana.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef3c7 100%)',
            anim: 'bounce',
            hero: '🐶🌳☀️',
            hotspots: [
              { emoji: '🐶', en: 'Dogs playing', es: 'Perros jugando', x: 45, y: 65 },
              { emoji: '🌳', en: 'Green park', es: 'Parque verde', x: 22, y: 45 },
              { emoji: '☀️', en: 'Sunny morning', es: 'Mañana soleada', x: 78, y: 24 }
            ]
          },
          {
            id: 'dogs_c_2',
            image: 'assets/images/scenes/dogs_2_max_shepherd.jpg',
            en: 'The leader of the group was Max, a brave German Shepherd with pointed ears and a very loud bark.',
            es: 'El líder del grupo era Max, un valiente pastor alemán con orejas puntiagudas y un ladrido muy fuerte.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'pulse',
            hero: '🐕🔊',
            hotspots: [
              { emoji: '🐕', en: 'German Shepherd', es: 'Pastor alemán', x: 38, y: 55 },
              { emoji: '👂', en: 'Pointed ears', es: 'Orejas puntiagudas', x: 38, y: 35 },
              { emoji: '🔊', en: 'Loud bark', es: 'Ladrido fuerte', x: 72, y: 45 }
            ]
          },
          {
            id: 'dogs_c_3',
            image: 'assets/images/scenes/dogs_3_bella_golden.jpg',
            en: 'Next to him was Bella, a friendly Golden Retriever with soft yellow fur who loved to swim in the lake and fetch tennis balls.',
            es: 'Junto a él estaba Bella, una simpática golden retriever de suave pelaje amarillo a la que le encantaba nadar en el lago y traer pelotas de tenis.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #bbf7d0 100%)',
            anim: 'float',
            hero: '🦮🎾💦',
            hotspots: [
              { emoji: '🦮', en: 'Golden Retriever', es: 'Golden retriever', x: 60, y: 56 },
              { emoji: '🎾', en: 'Tennis ball', es: 'Pelota de tenis', x: 40, y: 48 },
              { emoji: '💦', en: 'Swim in the lake', es: 'Nadar en el lago', x: 75, y: 62 }
            ]
          },
          {
            id: 'dogs_c_4',
            image: 'assets/images/scenes/dogs_4_pepe_chihuahua.jpg',
            en: 'One morning, a tiny Chihuahua named Pepe came running across the grass, shaking with excitement.',
            es: 'Una mañana, un diminuto chihuahua llamado Pepe llegó corriendo por la hierba, temblando de emoción.',
            sky: 'linear-gradient(180deg, #fef08a 0%, #bbf7d0 100%)',
            anim: 'run',
            hero: '🐕‍🦺💨',
            hotspots: [
              { emoji: '🐕‍🦺', en: 'Tiny Chihuahua', es: 'Diminuto chihuahua', x: 62, y: 68 },
              { emoji: '🌿', en: 'Green grass', es: 'Hierba verde', x: 32, y: 65 },
              { emoji: '⚡', en: 'Excited', es: 'Emocionado', x: 74, y: 42 }
            ]
          },
          {
            id: 'dogs_c_5',
            image: 'assets/images/scenes/dogs_5_fountain_footprints.jpg',
            en: 'Friends, I have bad news! cried Pepe. The golden bone of the park has disappeared, and someone left muddy footprints near the fountain!',
            es: '¡Amigos, tengo malas noticias!, exclamó Pepe. ¡El hueso dorado del parque ha desaparecido y alguien ha dejado huellas de barro cerca de la fuente!',
            sky: 'linear-gradient(180deg, #cbd5e1 0%, #fde68a 100%)',
            anim: 'shake',
            hero: '⛲🐾🦴',
            hotspots: [
              { emoji: '⛲', en: 'Stone fountain', es: 'Fuente de piedra', x: 74, y: 48 },
              { emoji: '🐾', en: 'Muddy footprints', es: 'Huellas de barro', x: 36, y: 66 },
              { emoji: '🦴', en: 'Golden bone', es: 'Hueso dorado', x: 50, y: 38 }
            ]
          },
          {
            id: 'dogs_c_6',
            image: 'assets/images/scenes/dogs_6_toby_dachshund.jpg',
            en: 'Do not worry, we will find it together! said Toby, a long and low Dachshund, also known as a sausage dog, who had an amazing nose for sniffing out clues.',
            es: '¡No os preocupéis, lo encontraremos juntos!, dijo Toby, un perro salchicha largo y bajito, que tenía un olfato increíble para rastrear pistas.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'bounce',
            hero: '🌭🐶👃',
            hotspots: [
              { emoji: '🌭', en: 'Sausage dog', es: 'Perro salchicha', x: 52, y: 68 },
              { emoji: '👃', en: 'Amazing nose', es: 'Olfato increíble', x: 38, y: 55 },
              { emoji: '🔎', en: 'Find clues', es: 'Encontrar pistas', x: 74, y: 45 }
            ]
          },
          {
            id: 'dogs_c_7',
            image: 'assets/images/scenes/dogs_7_toby_sniffing.jpg',
            en: 'Toby put his nose to the ground and followed the smell of mud toward the tall oak trees.',
            es: 'Toby pegó la nariz al suelo y siguió el olor a barro hacia los altos robles.',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #bbf7d0 100%)',
            anim: 'float',
            hero: '👃🐾🌳',
            hotspots: [
              { emoji: '👃', en: 'Nose to the ground', es: 'Nariz al suelo', x: 42, y: 68 },
              { emoji: '🌳', en: 'Tall oak trees', es: 'Altos robles', x: 26, y: 44 },
              { emoji: '🐾', en: 'Mud tracks', es: 'Rastro de barro', x: 68, y: 62 }
            ]
          },
          {
            id: 'dogs_c_8',
            image: 'assets/images/scenes/dogs_8_bulldog_dalmatian.jpg',
            en: 'Right behind him trotted Rocky, a strong English Bulldog with a wrinkled face, and Pongo, a cheerful Dalmatian covered in black spots.',
            es: 'Justo detrás de él trotaban Rocky, un fuerte bulldog inglés con la cara arrugada, y Pongo, un alegre dálmata cubierto de manchas negras.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'bounce',
            hero: '🐶🐾',
            hotspots: [
              { emoji: '🐶', en: 'English Bulldog', es: 'Bulldog inglés', x: 45, y: 62 },
              { emoji: '⚪', en: 'Black spots', es: 'Manchas negras', x: 68, y: 48 },
              { emoji: '🐕', en: 'Dalmatian', es: 'Dálmata', x: 30, y: 55 }
            ]
          },
          {
            id: 'dogs_c_9',
            image: 'assets/images/scenes/dogs_9_snowy_hill.jpg',
            en: 'Soon, the path became very steep and led up to a snowy hill outside the town.',
            es: 'Pronto, el sendero se volvió muy empinado y subió hacia una colina nevada a las afueras del pueblo.',
            sky: 'linear-gradient(180deg, #dbeafe 0%, #f1f5f9 100%)',
            anim: 'float',
            hero: '🏔️❄️🌲',
            hotspots: [
              { emoji: '🏔️', en: 'Snowy hill', es: 'Colina nevada', x: 50, y: 38 },
              { emoji: '❄️', en: 'White snow', es: 'Nieve blanca', x: 30, y: 65 },
              { emoji: '🌲', en: 'Pine trees', es: 'Pinos', x: 75, y: 48 }
            ]
          },
          {
            id: 'dogs_c_10',
            image: 'assets/images/scenes/dogs_10_husky_stbernard.jpg',
            en: 'This cold weather is perfect for us! howled Maya, a Siberian Husky with bright blue eyes, and Bruno, a giant Saint Bernard with thick brown and white fur.',
            es: '¡Este clima frío es perfecto para nosotros!, aullaron Maya, una husky siberiana de brillantes ojos azules, y Bruno, un gigante san bernardo de espeso pelaje marrón y blanco.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #e0f2fe 100%)',
            anim: 'pulse',
            hero: '🐺❄️🐻',
            hotspots: [
              { emoji: '🐺', en: 'Siberian Husky', es: 'Husky siberiana', x: 45, y: 58 },
              { emoji: '🐻', en: 'Saint Bernard', es: 'San bernardo', x: 74, y: 56 },
              { emoji: '👀', en: 'Bright blue eyes', es: 'Ojos azules brillantes', x: 52, y: 44 }
            ]
          },
          {
            id: 'dogs_c_11',
            image: 'assets/images/scenes/dogs_11_wooden_sled.jpg',
            en: 'Maya and Bruno pulled a wooden sled up the mountain so the little dogs would not get tired.',
            es: 'Maya y Bruno tiraron de un trineo de madera montaña arriba para que los perros pequeños no se cansaran.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'run',
            hero: '🛷❄️🐕',
            hotspots: [
              { emoji: '🛷', en: 'Wooden sled', es: 'Trineo de madera', x: 35, y: 66 },
              { emoji: '💪', en: 'Pull the sled', es: 'Tirar del trineo', x: 65, y: 55 },
              { emoji: '🏔️', en: 'Up the mountain', es: 'Montaña arriba', x: 78, y: 32 }
            ]
          },
          {
            id: 'dogs_c_12',
            image: 'assets/images/scenes/dogs_12_poodle_pug.jpg',
            en: 'Sitting comfortably on the sled were Coco, a curly white Poodle, and Leo, a round little Pug with a curly tail who snorted happily.',
            es: 'Sentados cómodamente en el trineo iban Coco, una caniche blanca de pelo rizado, y Leo, un pequeño carlino rechoncho con la cola enroscada que resoplaba feliz.',
            sky: 'linear-gradient(180deg, #fbcfe8 0%, #fed7aa 100%)',
            anim: 'bounce',
            hero: '🐩🐷🛷',
            hotspots: [
              { emoji: '🐩', en: 'White Poodle', es: 'Caniche blanca', x: 38, y: 55 },
              { emoji: '🐶', en: 'Round Pug', es: 'Carlino rechoncho', x: 62, y: 58 },
              { emoji: '😊', en: 'Happy friends', es: 'Amigos felices', x: 50, y: 35 }
            ]
          },
          {
            id: 'dogs_c_13',
            image: 'assets/images/scenes/dogs_13_raccoon_bone.jpg',
            en: 'At the top of the hill, they saw a cheeky raccoon running away with the shiny golden bone in its paws!',
            es: '¡En lo alto de la colina, vieron a un mapache travieso que huía con el brillante hueso dorado entre sus patas!',
            sky: 'linear-gradient(180deg, #fed7aa 0%, #fecaca 100%)',
            anim: 'shake',
            hero: '🦝✨🦴',
            hotspots: [
              { emoji: '🦝', en: 'Cheeky raccoon', es: 'Mapache travieso', x: 42, y: 62 },
              { emoji: '🦴', en: 'Shiny golden bone', es: 'Hueso dorado brillante', x: 35, y: 72 },
              { emoji: '🏃', en: 'Running away', es: 'Huyendo', x: 74, y: 52 }
            ]
          },
          {
            id: 'dogs_c_14',
            image: 'assets/images/scenes/dogs_14_flash_greyhound.jpg',
            en: 'Now it is my turn to run! shouted Flash, a sleek and slender Greyhound, the fastest dog in the whole world.',
            es: '¡Ahora me toca correr a mí!, gritó Flash, un galgo esbelto y elegante, el perro más rápido del mundo entero.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef08a 100%)',
            anim: 'run',
            hero: '🐕⚡💨',
            hotspots: [
              { emoji: '🐕', en: 'Sleek Greyhound', es: 'Galgo elegante', x: 55, y: 52 },
              { emoji: '⚡', en: 'Super fast', es: 'Súper rápido', x: 76, y: 44 },
              { emoji: '💨', en: 'Fastest in the world', es: 'El más rápido del mundo', x: 30, y: 62 }
            ]
          },
          {
            id: 'dogs_c_15',
            image: 'assets/images/scenes/dogs_15_chase_wind.jpg',
            en: 'Flash sprinted like the wind, while Luna, a clever black and white Border Collie, circled around the trees to block the raccoon’s path.',
            es: 'Flash corrió como el viento, mientras Luna, una astuta border collie blanco y negro, rodeaba los árboles para bloquear el camino del mapache.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'run',
            hero: '💨🌲🦝',
            hotspots: [
              { emoji: '🐕', en: 'Border Collie', es: 'Border collie', x: 75, y: 56 },
              { emoji: '💨', en: 'Like the wind', es: 'Como el viento', x: 48, y: 48 },
              { emoji: '🌲', en: 'Pine forest', es: 'Bosque de pinos', x: 26, y: 38 }
            ]
          },
          {
            id: 'dogs_c_16',
            image: 'assets/images/scenes/dogs_16_rabbit_hole.jpg',
            en: 'Startled by the fast Greyhound and the smart Border Collie, the raccoon dropped the golden bone into a deep, narrow rabbit hole and climbed up a tree.',
            es: 'Asustado por el veloz galgo y la inteligente border collie, el mapache dejó caer el hueso dorado dentro de una madriguera estrecha y profunda, y se subió a un árbol.',
            sky: 'linear-gradient(180deg, #cbd5e1 0%, #fed7aa 100%)',
            anim: 'shake',
            hero: '🕳️🦴🌳',
            hotspots: [
              { emoji: '🕳️', en: 'Rabbit hole', es: 'Madriguera', x: 28, y: 68 },
              { emoji: '🦴', en: 'Golden bone dropped', es: 'El hueso cayó', x: 40, y: 72 },
              { emoji: '🌳', en: 'Climbed up a tree', es: 'Se subió al árbol', x: 72, y: 42 }
            ]
          },
          {
            id: 'dogs_c_17',
            image: 'assets/images/scenes/dogs_17_big_dogs_paws.jpg',
            en: 'The big dogs tried to reach the bone with their paws, but the hole was much too small for the Saint Bernard, the Golden Retriever, and the German Shepherd.',
            es: 'Los perros grandes intentaron alcanzar el hueso con sus patas, pero el agujero era demasiado pequeño para el san bernardo, la golden retriever y el pastor alemán.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'pulse',
            hero: '🐾🕳️',
            hotspots: [
              { emoji: '🐾', en: 'Big paws', es: 'Patas grandes', x: 65, y: 56 },
              { emoji: '🕳️', en: 'Hole too small', es: 'Agujero muy pequeño', x: 28, y: 68 },
              { emoji: '🐕', en: 'Big dogs', es: 'Perros grandes', x: 74, y: 45 }
            ]
          },
          {
            id: 'dogs_c_18',
            image: 'assets/images/scenes/dogs_18_toby_crawls.jpg',
            en: 'Step aside, my friends! My long body is made for tunnels! said Toby the Dachshund, and he crawled right into the dark hole with his short little legs.',
            es: '¡Apartaos, amigos míos! ¡Mi cuerpo alargado está hecho para los túneles!, dijo Toby el perro salchicha, y se metió directo en el agujero oscuro con sus patitas cortas.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'bounce',
            hero: '🌭🕳️💪',
            hotspots: [
              { emoji: '🌭', en: 'Long body', es: 'Cuerpo alargado', x: 38, y: 72 },
              { emoji: '🕳️', en: 'Dark tunnel', es: 'Túnel oscuro', x: 22, y: 68 },
              { emoji: '🐾', en: 'Short legs', es: 'Patitas cortas', x: 50, y: 78 }
            ]
          },
          {
            id: 'dogs_c_19',
            image: 'assets/images/scenes/dogs_19_yorkie_pulls.jpg',
            en: 'A moment later, a cute Yorkshire Terrier with a little bow on her head grabbed Toby’s tail, and together all the dogs pulled him out.',
            es: 'Un momento después, una linda yorkshire terrier con un pequeño lazo en la cabeza agarró la cola de Toby y, juntos, todos los perros tiraron de él hacia fuera.',
            sky: 'linear-gradient(180deg, #fbcfe8 0%, #bae6fd 100%)',
            anim: 'pulse',
            hero: '🎀🐕🤝',
            hotspots: [
              { emoji: '🎀', en: 'Yorkie with a bow', es: 'Yorkie con lazo', x: 42, y: 68 },
              { emoji: '🤝', en: 'Pulled together', es: 'Tiraron juntos', x: 65, y: 56 },
              { emoji: '🐕', en: 'Helping friends', es: 'Amigos ayudando', x: 76, y: 52 }
            ]
          },
          {
            id: 'dogs_c_20',
            image: 'assets/images/scenes/dogs_20_pop_bone.jpg',
            en: 'Pop! Out came Toby holding the shiny golden bone in his mouth, and all the dogs barked, howled, and wagged their tails with joy.',
            es: '¡Plop! Salió Toby sujetando el brillante hueso dorado en la boca, y todos los perros ladraron, aullaron y movieron la cola de alegría.',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '✨🦴🎉',
            hotspots: [
              { emoji: '🦴', en: 'Golden bone in mouth', es: 'Hueso dorado en la boca', x: 52, y: 72 },
              { emoji: '🎉', en: 'Celebration', es: 'Celebración', x: 72, y: 45 },
              { emoji: '🔊', en: 'Barking with joy', es: 'Ladrando de alegría', x: 30, y: 55 }
            ]
          },
          {
            id: 'dogs_c_21',
            image: 'assets/images/scenes/dogs_21_special_talent.jpg',
            en: 'That evening, back in the sunny park, they learned that whether a dog is huge like a Great Dane or tiny like a Chihuahua, every single dog has a special talent to share.',
            es: 'Esa tarde, de vuelta en el parque soleado, aprendieron que tanto si un perro es enorme como un gran danés o diminuto como un chihuahua, cada perro tiene un talento especial para compartir.',
            sky: 'linear-gradient(180deg, #fed7aa 0%, #fef3c7 100%)',
            anim: 'sparkle',
            hero: '🐕❤️🐕‍🦺',
            hotspots: [
              { emoji: '🐕', en: 'Huge Great Dane', es: 'Enorme gran danés', x: 38, y: 48 },
              { emoji: '🐕‍🦺', en: 'Tiny Chihuahua', es: 'Diminuto chihuahua', x: 34, y: 75 },
              { emoji: '🌟', en: 'Special talent', es: 'Talento especial', x: 52, y: 68 }
            ]
          }
        ]
      },
      short: {
        label: 'Versión Breve · 10 escenas',
        scenes: [
          {
            id: 'dogs_s_1',
            image: 'assets/images/scenes/dogs_1_park.jpg',
            en: 'In Barkville park, dogs of every size and breed met happily to play every morning.',
            es: 'En el parque de Barkville, perros de todos los tamaños y razas se reunían felices a jugar cada mañana.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fef3c7 100%)',
            anim: 'bounce',
            hero: '🐶🌳☀️',
            hotspots: [
              { emoji: '🐶', en: 'Park dogs', es: 'Perros del parque', x: 45, y: 65 },
              { emoji: '☀️', en: 'Sunny morning', es: 'Mañana soleada', x: 78, y: 24 }
            ]
          },
          {
            id: 'dogs_s_2',
            image: 'assets/images/scenes/dogs_5_fountain_footprints.jpg',
            en: 'Friends, bad news! cried tiny Pepe. The golden bone has disappeared near the fountain!',
            es: '¡Amigos, malas noticias!, gritó el pequeño Pepe. ¡El hueso dorado ha desaparecido junto a la fuente!',
            sky: 'linear-gradient(180deg, #cbd5e1 0%, #fde68a 100%)',
            anim: 'shake',
            hero: '⛲🐾🦴',
            hotspots: [
              { emoji: '⛲', en: 'Stone fountain', es: 'Fuente', x: 74, y: 48 },
              { emoji: '🐾', en: 'Muddy footprints', es: 'Huellas de barro', x: 36, y: 66 }
            ]
          },
          {
            id: 'dogs_s_3',
            image: 'assets/images/scenes/dogs_7_toby_sniffing.jpg',
            en: 'Toby the sausage dog had an amazing nose, and he followed the mud tracks toward the trees.',
            es: 'Toby el perro salchicha tenía un olfato increíble, y siguió el rastro de barro hacia los árboles.',
            sky: 'linear-gradient(180deg, #e0f2fe 0%, #bbf7d0 100%)',
            anim: 'float',
            hero: '🌭👃🐾',
            hotspots: [
              { emoji: '🌭', en: 'Sausage dog', es: 'Perro salchicha', x: 42, y: 68 },
              { emoji: '👃', en: 'Amazing nose', es: 'Olfato increíble', x: 68, y: 45 }
            ]
          },
          {
            id: 'dogs_s_4',
            image: 'assets/images/scenes/dogs_8_bulldog_dalmatian.jpg',
            en: 'Rocky the strong bulldog and Pongo the cheerful spotted dalmatian followed close behind.',
            es: 'Rocky el fuerte bulldog y Pongo el alegre dálmata de manchas lo seguían muy de cerca.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'bounce',
            hero: '🐶🐾',
            hotspots: [
              { emoji: '🐶', en: 'Bulldog', es: 'Bulldog', x: 45, y: 62 },
              { emoji: '🐕', en: 'Dalmatian', es: 'Dálmata', x: 68, y: 48 }
            ]
          },
          {
            id: 'dogs_s_5',
            image: 'assets/images/scenes/dogs_11_wooden_sled.jpg',
            en: 'Maya the husky and Bruno the Saint Bernard pulled the wooden sled up the snowy mountain.',
            es: 'Maya la husky y Bruno el san bernardo tiraron del trineo de madera montaña nevada arriba.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'run',
            hero: '🛷❄️🐕',
            hotspots: [
              { emoji: '🛷', en: 'Wooden sled', es: 'Trineo', x: 35, y: 66 },
              { emoji: '🐺', en: 'Husky and Bruno', es: 'Husky y Bruno', x: 65, y: 55 }
            ]
          },
          {
            id: 'dogs_s_6',
            image: 'assets/images/scenes/dogs_13_raccoon_bone.jpg',
            en: 'At the top of the hill, they saw a cheeky raccoon running away with the shiny golden bone!',
            es: '¡En lo alto de la colina, vieron a un mapache travieso que huía con el brillante hueso dorado!',
            sky: 'linear-gradient(180deg, #fed7aa 0%, #fecaca 100%)',
            anim: 'shake',
            hero: '🦝✨🦴',
            hotspots: [
              { emoji: '🦝', en: 'Cheeky raccoon', es: 'Mapache travieso', x: 42, y: 62 },
              { emoji: '🦴', en: 'Golden bone', es: 'Hueso dorado', x: 35, y: 72 }
            ]
          },
          {
            id: 'dogs_s_7',
            image: 'assets/images/scenes/dogs_15_chase_wind.jpg',
            en: 'Flash the greyhound sprinted like the wind, while smart Luna circled around to block the raccoon.',
            es: 'Flash el galgo corrió como el viento, mientras la lista Luna rodeaba los árboles para bloquear al mapache.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'run',
            hero: '🐕⚡💨',
            hotspots: [
              { emoji: '⚡', en: 'Fast Greyhound', es: 'Galgo veloz', x: 55, y: 52 },
              { emoji: '🐕', en: 'Smart Luna', es: 'Luna inteligente', x: 75, y: 56 }
            ]
          },
          {
            id: 'dogs_s_8',
            image: 'assets/images/scenes/dogs_18_toby_crawls.jpg',
            en: 'The bone fell into a deep rabbit hole, and long Toby crawled right in with his short little legs.',
            es: 'El hueso cayó en una madriguera, y el largo Toby se metió directo con sus patitas cortas.',
            sky: 'linear-gradient(180deg, #bae6fd 0%, #fed7aa 100%)',
            anim: 'bounce',
            hero: '🌭🕳️💪',
            hotspots: [
              { emoji: '🌭', en: 'Toby crawls in', es: 'Toby entra', x: 38, y: 72 },
              { emoji: '🕳️', en: 'Rabbit hole', es: 'Madriguera', x: 22, y: 68 }
            ]
          },
          {
            id: 'dogs_s_9',
            image: 'assets/images/scenes/dogs_19_yorkie_pulls.jpg',
            en: 'A cute little Yorkie with a pink bow grabbed Toby’s tail, and all the dogs pulled him out!',
            es: '¡Una linda yorkshire con lazo rosa agarró la cola de Toby, y todos los perros tiraron hacia fuera!',
            sky: 'linear-gradient(180deg, #fbcfe8 0%, #bae6fd 100%)',
            anim: 'pulse',
            hero: '🎀🐕🤝',
            hotspots: [
              { emoji: '🎀', en: 'Cute Yorkie', es: 'Linda yorkie', x: 42, y: 68 },
              { emoji: '🤝', en: 'Pull together', es: 'Tirar juntos', x: 65, y: 56 }
            ]
          },
          {
            id: 'dogs_s_10',
            image: 'assets/images/scenes/dogs_21_special_talent.jpg',
            en: 'Pop! Toby had the golden bone, and whether huge or tiny, every dog celebrated their special talent!',
            es: '¡Plop! Toby sacó el hueso dorado, y tanto enormes como diminutos, ¡todos celebraron su talento especial!',
            sky: 'linear-gradient(180deg, #bbf7d0 0%, #fef9c3 100%)',
            anim: 'sparkle',
            hero: '✨🦴🎉',
            hotspots: [
              { emoji: '🦴', en: 'Golden bone', es: 'Hueso dorado', x: 52, y: 68 },
              { emoji: '🌟', en: 'Special talent', es: 'Talento especial', x: 34, y: 75 }
            ]
          }
        ]
      }
    }
  }
"""

text = STORIES_JS.read_text(encoding="utf-8")
if "'dogs_barkville'" not in text:
    last_bracket = text.rfind("];")
    if last_bracket != -1:
        # Añade coma al elemento anterior si no la tiene
        prev_text = text[:last_bracket].rstrip()
        if not prev_text.endswith(","):
            prev_text += ","
        new_text = prev_text + "\n" + story_code + "\n];\n"
        STORIES_JS.write_text(new_text, encoding="utf-8")
        print("Cuento de Barkville añadido con éxito a data/stories.js!")
    else:
        print("Error: No se encontró '];' en stories.js")
else:
    print("El cuento 'dogs_barkville' ya existe en data/stories.js")
