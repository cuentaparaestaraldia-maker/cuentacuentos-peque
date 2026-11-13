#!/usr/bin/env python3
"""
Genera imágenes descriptivas específicas para cada escena de cada cuento en assets/images/scenes/.
Combina:
1. Las 9 ilustraciones acuarela dedicadas de Los Tres Cerditos + encuadre final celebratorio (pigs_10).
2. Encuadres cinematográficos de alta resolución (16:9) extraídos de las láminas acuarela 1376x768
   para las escenas donde los personajes/objetos están pintados en la lámina (ej. los 7 animales del arcoíris,
   los 3 tazones de sopa, las sillas, la casita de la abuela, la salida y la meta de la carrera).
3. Ilustraciones vectoriales estilo cuento infantil (SVG rico con personajes, escenarios e iluminación suave)
   para las escenas interiores o de diálogo específicas.
"""
from pathlib import Path
from PIL import Image, ImageEnhance, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
IMG_DIR = ROOT / "assets" / "images"
SCENES_DIR = IMG_DIR / "scenes"


def crop_16_9(img: Image.Image, cx_pct: float, cy_pct: float, zoom: float, out_size=(960, 540)) -> Image.Image:
    w, h = img.size
    crop_w = int(w / zoom)
    crop_h = int(crop_w * 9 / 16)
    if crop_h > h:
        crop_h = int(h / zoom)
        crop_w = int(crop_h * 16 / 9)
    cx = int(w * cx_pct)
    cy = int(h * cy_pct)
    x0 = max(0, min(w - crop_w, cx - crop_w // 2))
    y0 = max(0, min(h - crop_h, cy - crop_h // 2))
    cropped = img.crop((x0, y0, x0 + crop_w, y0 + crop_h))
    return cropped.resize(out_size, Image.Resampling.LANCZOS)


def make_twilight(img: Image.Image) -> Image.Image:
    # Suave efecto atardecer/noche mágica con estrellas
    dark = ImageEnhance.Brightness(img).enhance(0.72)
    cool = ImageEnhance.Color(dark).enhance(0.88)
    overlay = Image.new("RGB", cool.size, (35, 45, 95))
    blended = Image.blend(cool, overlay, 0.28)
    draw = ImageDraw.Draw(blended)
    stars = [(120, 60), (240, 90), (410, 45), (580, 75), (740, 50), (860, 85), (180, 140), (670, 120)]
    for sx, sy in stars:
        draw.ellipse((sx - 4, sy - 4, sx + 4, sy + 4), fill=(255, 250, 190))
        draw.line((sx - 9, sy, sx + 9, sy), fill=(255, 250, 210), width=2)
        draw.line((sx, sy - 9, sx, sy + 9), fill=(255, 250, 210), width=2)
    # Luna creciente suave arriba a la derecha
    draw.ellipse((800, 30, 870, 100), fill=(255, 248, 185))
    draw.ellipse((820, 25, 885, 90), fill=(52, 62, 110))
    return blended


def write_svg(filename: str, svg_content: str):
    (SCENES_DIR / filename).write_text(svg_content.strip(), encoding="utf-8")


def generate_all():
    SCENES_DIR.mkdir(parents=True, exist_ok=True)

    # 1. Los Tres Cerditos: crear pigs_10_happy_end.jpg a partir de three_little_pigs.jpg (encuadre en los cerditos y la casa de ladrillos)
    pigs_base = Image.open(IMG_DIR / "three_little_pigs.jpg").convert("RGB")
    pigs_10 = crop_16_9(pigs_base, cx_pct=0.68, cy_pct=0.55, zoom=1.45)
    pigs_10.save(SCENES_DIR / "pigs_10_happy_end.jpg", quality=90)

    # 2. La Fiesta del Arcoíris: encuadres dedicados de cada animal + noche mágica
    party_base = Image.open(IMG_DIR / "rainbow_animals_party.jpg").convert("RGB")
    crop_16_9(party_base, 0.50, 0.50, 1.00).save(SCENES_DIR / "party_1_rainbow.jpg", quality=90)
    crop_16_9(party_base, 0.22, 0.72, 1.85).save(SCENES_DIR / "party_2_ladybug.jpg", quality=90)
    crop_16_9(party_base, 0.24, 0.60, 1.75).save(SCENES_DIR / "party_3_fox.jpg", quality=90)
    crop_16_9(party_base, 0.34, 0.62, 1.85).save(SCENES_DIR / "party_4_chick.jpg", quality=90)
    crop_16_9(party_base, 0.46, 0.62, 1.85).save(SCENES_DIR / "party_5_frog.jpg", quality=90)
    crop_16_9(party_base, 0.62, 0.56, 1.75).save(SCENES_DIR / "party_6_whale.jpg", quality=90)
    crop_16_9(party_base, 0.78, 0.62, 1.65).save(SCENES_DIR / "party_7_octopus_flamingo.jpg", quality=90)
    make_twilight(crop_16_9(party_base, 0.50, 0.50, 1.05)).save(SCENES_DIR / "party_8_goodnight.jpg", quality=90)

    # 3. Caperucita Roja: encuadres acuarela + escenas ilustradas SVG de la historia
    red_base = Image.open(IMG_DIR / "red_riding_hood.jpg").convert("RGB")
    crop_16_9(red_base, 0.36, 0.54, 1.65).save(SCENES_DIR / "red_1_cape.jpg", quality=90)
    crop_16_9(red_base, 0.50, 0.50, 1.00).save(SCENES_DIR / "red_3_path.jpg", quality=90)
    crop_16_9(red_base, 0.52, 0.68, 1.65).save(SCENES_DIR / "red_5_flowers.jpg", quality=90)

    # Escenas específicas de Caperucita en ilustración estilo libro infantil (SVG 16:9)
    write_svg("red_2_mom_basket.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <defs>
    <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fef3c7"/>
      <stop offset="100%" stop-color="#fde68a"/>
    </linearGradient>
    <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
  </defs>
  <rect width="960" height="400" fill="url(#wall)"/>
  <rect y="400" width="960" height="140" fill="url(#floor)"/>
  <!-- Ventana soleada -->
  <rect x="640" y="70" width="200" height="180" rx="16" fill="#bae6fd" stroke="#92400e" stroke-width="10"/>
  <circle cx="780" cy="120" r="28" fill="#fde047"/>
  <path d="M640 210 Q700 180 760 210 T840 205 L840 250 L640 250 Z" fill="#86efac"/>
  <line x1="740" y1="70" x2="740" y2="250" stroke="#92400e" stroke-width="8"/>
  <line x1="640" y1="160" x2="840" y2="160" stroke="#92400e" stroke-width="8"/>
  <!-- Mesa de cocina con pastel, miel y manzanas -->
  <rect x="330" y="310" width="300" height="24" rx="8" fill="#78350f"/>
  <rect x="360" y="334" width="22" height="130" fill="#78350f"/>
  <rect x="578" y="334" width="22" height="130" fill="#78350f"/>
  <!-- Cesta de mimbre grande con pastel, tarro de miel y manzanas rojas -->
  <path d="M410 250 Q480 165 550 250" fill="none" stroke="#92400e" stroke-width="10"/>
  <path d="M395 250 L565 250 L545 312 L415 312 Z" fill="#d97706" stroke="#78350f" stroke-width="5"/>
  <path d="M390 250 Q480 268 570 250" fill="none" stroke="#fef08a" stroke-width="8"/>
  <!-- Manzanas rojas, pastel y miel -->
  <circle cx="440" cy="242" r="20" fill="#ef4444"/>
  <circle cx="475" cy="240" r="22" fill="#dc2626"/>
  <rect x="502" y="218" width="36" height="32" rx="6" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
  <!-- Mamá sonriendo a la izquierda -->
  <circle cx="230" cy="185" r="46" fill="#fed7aa"/>
  <path d="M182 175 Q230 120 278 175" fill="#92400e"/>
  <path d="M175 235 Q230 225 285 235 L305 420 L155 420 Z" fill="#3b82f6"/>
  <path d="M195 250 L265 250 L280 410 L180 410 Z" fill="#ffffff"/>
  <circle cx="215" cy="182" r="5" fill="#1e293b"/>
  <circle cx="245" cy="182" r="5" fill="#1e293b"/>
  <path d="M214 202 Q230 216 246 202" fill="none" stroke="#b91c1c" stroke-width="4" stroke-linecap="round"/>
  <!-- Caperucita recibiendo la cesta a la derecha -->
  <path d="M655 215 Q705 145 755 215 L785 395 L625 395 Z" fill="#dc2626"/>
  <circle cx="705" cy="225" r="40" fill="#fed7aa"/>
  <circle cx="692" cy="222" r="5" fill="#1e293b"/>
  <circle cx="718" cy="222" r="5" fill="#1e293b"/>
  <path d="M692 240 Q705 252 718 240" fill="none" stroke="#b91c1c" stroke-width="4" stroke-linecap="round"/>
</svg>
""")

    write_svg("red_4_wolf_tree.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#dcfce7"/>
    </linearGradient>
  </defs>
  <rect width="960" height="540" fill="url(#sky)"/>
  <!-- Colinas del bosque -->
  <path d="M0 370 Q260 310 520 370 T960 350 L960 540 L0 540 Z" fill="#86efac"/>
  <path d="M0 430 Q480 390 960 430 L960 540 L0 540 Z" fill="#4ade80"/>
  <!-- Sendero -->
  <path d="M180 540 Q380 430 520 380 L610 380 Q490 450 390 540 Z" fill="#fde68a"/>
  <!-- Árboles del bosque -->
  <rect x="620" y="130" width="95" height="310" rx="12" fill="#78350f"/>
  <circle cx="668" cy="110" r="125" fill="#16a34a"/>
  <circle cx="590" cy="145" r="85" fill="#22c55e"/>
  <circle cx="745" cy="145" r="85" fill="#15803d"/>
  <!-- Lobo astuto asomándose detrás del árbol -->
  <g transform="translate(515, 210)">
    <polygon points="45,25 65,-25 88,20" fill="#475569"/>
    <polygon points="95,20 120,-25 135,25" fill="#475569"/>
    <ellipse cx="90" cy="65" rx="58" ry="48" fill="#64748b"/>
    <ellipse cx="52" cy="78" rx="38" ry="24" fill="#94a3b8"/>
    <circle cx="20" cy="72" r="10" fill="#0f172a"/>
    <circle cx="68" cy="52" r="9" fill="#fef08a"/>
    <circle cx="66" cy="52" r="4" fill="#0f172a"/>
    <circle cx="102" cy="52" r="9" fill="#fef08a"/>
    <circle cx="100" cy="52" r="4" fill="#0f172a"/>
    <path d="M40 92 Q68 105 92 90" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="105" cy="165" rx="48" ry="70" fill="#64748b"/>
  </g>
  <!-- Caperucita Roja con su cesta en el sendero -->
  <g transform="translate(220, 215)">
    <path d="M20 55 Q75 -20 130 55 L160 225 L-10 225 Z" fill="#dc2626"/>
    <circle cx="75" cy="65" r="42" fill="#fed7aa"/>
    <circle cx="63" cy="60" r="5" fill="#1e293b"/>
    <circle cx="89" cy="60" r="5" fill="#1e293b"/>
    <path d="M64 80 Q76 92 88 80" fill="none" stroke="#b91c1c" stroke-width="4" stroke-linecap="round"/>
    <!-- Cesta -->
    <path d="M115 145 Q145 110 175 145" fill="none" stroke="#78350f" stroke-width="6"/>
    <rect x="110" y="145" width="70" height="45" rx="10" fill="#d97706" stroke="#78350f" stroke-width="4"/>
  </g>
</svg>
""")

    write_svg("red_6_wolf_bed.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="410" fill="#fef3c7"/>
  <rect y="410" width="960" height="130" fill="#b45309"/>
  <!-- Armario de madera donde está escondida la abuela a salvo -->
  <rect x="80" y="95" width="170" height="325" rx="10" fill="#92400e" stroke="#78350f" stroke-width="6"/>
  <line x1="165" y1="95" x2="165" y2="420" stroke="#78350f" stroke-width="5"/>
  <circle cx="150" cy="260" r="7" fill="#fbbf24"/>
  <circle cx="180" cy="260" r="7" fill="#fbbf24"/>
  <!-- Gran cama de madera de la abuela -->
  <rect x="340" y="150" width="42" height="280" rx="12" fill="#78350f"/>
  <rect x="820" y="210" width="38" height="220" rx="12" fill="#78350f"/>
  <rect x="360" y="280" width="480" height="120" rx="16" fill="#fde68a" stroke="#78350f" stroke-width="6"/>
  <!-- Almohada y edredón de flores -->
  <rect x="385" y="225" width="140" height="65" rx="28" fill="#ffffff" stroke="#cbd5e1" stroke-width="4"/>
  <path d="M500 265 Q660 245 830 280 L830 395 L500 395 Z" fill="#f472b6" stroke="#db2777" stroke-width="5"/>
  <!-- Lobo disfrazado con gorro de dormir y gafas -->
  <g transform="translate(415, 165)">
    <polygon points="35,35 52,-12 75,28" fill="#475569"/>
    <polygon points="85,28 108,-12 122,35" fill="#475569"/>
    <ellipse cx="80" cy="70" rx="55" ry="44" fill="#64748b"/>
    <!-- Gorro blanco de la abuelita -->
    <path d="M22 52 Q80 -10 138 52 Q80 42 22 52 Z" fill="#ffffff" stroke="#fda4af" stroke-width="5"/>
    <circle cx="80" cy="14" r="14" fill="#ffffff"/>
    <!-- Hocico y gafas redondas doradas -->
    <ellipse cx="115" cy="82" rx="36" ry="22" fill="#94a3b8"/>
    <circle cx="145" cy="76" r="9" fill="#0f172a"/>
    <circle cx="68" cy="64" r="16" fill="none" stroke="#fbbf24" stroke-width="5"/>
    <circle cx="104" cy="64" r="16" fill="none" stroke="#fbbf24" stroke-width="5"/>
    <line x1="84" y1="64" x2="88" y2="64" stroke="#fbbf24" stroke-width="5"/>
    <circle cx="68" cy="64" r="5" fill="#0f172a"/>
    <circle cx="104" cy="64" r="5" fill="#0f172a"/>
  </g>
</svg>
""")

    write_svg("red_7_big_eyes_ears.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="#fef3c7"/>
  <!-- Cabecero de la cama en primer plano -->
  <rect x="280" y="70" width="580" height="420" rx="28" fill="#92400e"/>
  <rect x="320" y="110" width="500" height="360" rx="24" fill="#ffffff"/>
  <!-- Lobo con OREJAS GIGANTES y OJOS GIGANTES bajo el gorro -->
  <g transform="translate(430, 85)">
    <!-- Orejas enormes -->
    <polygon points="10,120 45,-55 110,105" fill="#475569" stroke="#334155" stroke-width="6"/>
    <polygon points="38,105 52,-15 92,95" fill="#fda4af"/>
    <polygon points="170,105 235,-55 270,120" fill="#475569" stroke="#334155" stroke-width="6"/>
    <polygon points="188,95 228,-15 242,105" fill="#fda4af"/>
    <!-- Cara del lobo -->
    <ellipse cx="140" cy="185" rx="115" ry="95" fill="#64748b"/>
    <!-- Gorrito blanco -->
    <path d="M35 135 Q140 45 245 135 Z" fill="#ffffff" stroke="#f472b6" stroke-width="6"/>
    <!-- Ojos enormes con gafas -->
    <circle cx="98" cy="175" r="34" fill="#fef08a" stroke="#eab308" stroke-width="6"/>
    <circle cx="98" cy="175" r="14" fill="#0f172a"/>
    <circle cx="92" cy="168" r="5" fill="#ffffff"/>
    <circle cx="182" cy="175" r="34" fill="#fef08a" stroke="#eab308" stroke-width="6"/>
    <circle cx="182" cy="175" r="14" fill="#0f172a"/>
    <circle cx="176" cy="168" r="5" fill="#ffffff"/>
    <!-- Hocico -->
    <ellipse cx="140" cy="238" rx="52" ry="34" fill="#94a3b8"/>
    <circle cx="140" cy="226" r="14" fill="#0f172a"/>
  </g>
  <!-- Caperucita mirando sorprendida a la izquierda -->
  <g transform="translate(80, 210)">
    <path d="M20 65 Q90 -20 160 65 L185 280 L-5 280 Z" fill="#dc2626"/>
    <circle cx="90" cy="78" r="50" fill="#fed7aa"/>
    <circle cx="76" cy="72" r="6" fill="#0f172a"/>
    <circle cx="106" cy="72" r="6" fill="#0f172a"/>
    <circle cx="92" cy="96" r="10" fill="#b91c1c"/>
  </g>
</svg>
""")

    write_svg("red_8_big_teeth.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="#fee2e2"/>
  <rect x="260" y="90" width="600" height="400" rx="28" fill="#78350f"/>
  <!-- Lobo incorporándose mostrando sus grandes dientes blancos -->
  <g transform="translate(410, 85)">
    <polygon points="30,95 65,-30 115,85" fill="#475569"/>
    <polygon points="185,85 235,-30 270,95" fill="#475569"/>
    <ellipse cx="150" cy="175" rx="120" ry="100" fill="#64748b"/>
    <circle cx="105" cy="145" r="26" fill="#fef08a"/>
    <circle cx="105" cy="145" r="11" fill="#0f172a"/>
    <circle cx="195" cy="145" r="26" fill="#fef08a"/>
    <circle cx="195" cy="145" r="11" fill="#0f172a"/>
    <!-- Boca grande con dientes blancos grandes -->
    <rect x="75" y="205" width="150" height="72" rx="20" fill="#991b1b" stroke="#0f172a" stroke-width="5"/>
    <polygon points="88,205 106,242 124,205" fill="#ffffff"/>
    <polygon points="126,205 144,242 162,205" fill="#ffffff"/>
    <polygon points="164,205 182,242 200,205" fill="#ffffff"/>
    <polygon points="98,277 115,246 132,277" fill="#ffffff"/>
    <polygon points="158,277 175,246 192,277" fill="#ffffff"/>
  </g>
  <!-- Caperucita dando un paso atrás sorprendida -->
  <g transform="translate(85, 210)">
    <path d="M20 65 Q90 -20 160 65 L185 280 L-5 280 Z" fill="#dc2626"/>
    <circle cx="90" cy="78" r="50" fill="#fed7aa"/>
    <circle cx="76" cy="72" r="7" fill="#0f172a"/>
    <circle cx="106" cy="72" r="7" fill="#0f172a"/>
    <ellipse cx="92" cy="98" rx="12" ry="15" fill="#991b1b"/>
  </g>
</svg>
""")

    write_svg("red_9_woodcutter.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="#bae6fd"/>
  <path d="M0 380 Q480 330 960 380 L960 540 L0 540 Z" fill="#86efac"/>
  <path d="M180 540 Q480 410 920 430 L960 510 L260 540 Z" fill="#fde68a"/>
  <!-- Leñador valiente en la puerta de la casita -->
  <g transform="translate(150, 140)">
    <circle cx="100" cy="85" r="46" fill="#fed7aa"/>
    <path d="M52 70 Q100 20 148 70 Z" fill="#15803d"/>
    <path d="M62 105 Q100 145 138 105" fill="#78350f"/>
    <rect x="48" y="132" width="104" height="135" rx="16" fill="#dc2626"/>
    <line x1="75" y1="132" x2="75" y2="267" stroke="#1e293b" stroke-width="8"/>
    <line x1="125" y1="132" x2="125" y2="267" stroke="#1e293b" stroke-width="8"/>
    <rect x="55" y="265" width="38" height="95" fill="#1e3a8a"/>
    <rect x="107" y="265" width="38" height="95" fill="#1e3a8a"/>
  </g>
  <!-- Lobo corriendo asustado hacia el bosque -->
  <g transform="translate(570, 230)">
    <ellipse cx="110" cy="95" rx="75" ry="42" fill="#64748b"/>
    <circle cx="185" cy="65" r="38" fill="#64748b"/>
    <polygon points="165,35 180,-5 198,35" fill="#475569"/>
    <polygon points="195,35 212,-5 225,35" fill="#475569"/>
    <path d="M35 90 Q-15 65 -25 110" fill="none" stroke="#64748b" stroke-width="18" stroke-linecap="round"/>
    <!-- Líneas de velocidad -->
    <line x1="-60" y1="55" x2="-5" y2="55" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
    <line x1="-80" y1="95" x2="-20" y2="95" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
    <line x1="-50" y1="135" x2="10" y2="135" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
  </g>
</svg>
""")

    write_svg("red_10_happy_tea.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="410" fill="#fef3c7"/>
  <rect y="410" width="960" height="130" fill="#b45309"/>
  <!-- Abuelita y Caperucita abrazándose felices junto a la mesa con pastel -->
  <!-- Abuelita -->
  <g transform="translate(240, 145)">
    <circle cx="95" cy="85" r="46" fill="#fed7aa"/>
    <circle cx="95" cy="40" r="28" fill="#e2e8f0"/>
    <circle cx="80" cy="82" r="14" fill="none" stroke="#fbbf24" stroke-width="4"/>
    <circle cx="110" cy="82" r="14" fill="none" stroke="#fbbf24" stroke-width="4"/>
    <path d="M80 104 Q95 116 110 104" fill="none" stroke="#b91c1c" stroke-width="4" stroke-linecap="round"/>
    <path d="M40 132 Q95 120 150 132 L170 280 L20 280 Z" fill="#a855f7"/>
  </g>
  <!-- Caperucita -->
  <g transform="translate(390, 175)">
    <path d="M20 55 Q80 -10 140 55 L165 250 L-5 250 Z" fill="#dc2626"/>
    <circle cx="80" cy="68" r="40" fill="#fed7aa"/>
    <path d="M65 82 Q80 94 95 82" fill="none" stroke="#b91c1c" stroke-width="4" stroke-linecap="round"/>
  </g>
  <!-- Corazón de cariño -->
  <path d="M385 115 C385 95 355 95 355 115 C355 135 385 150 385 162 C385 150 415 135 415 115 C415 95 385 95 385 115 Z" fill="#ef4444"/>
  <!-- Mesa con pastel, miel y flores -->
  <rect x="570" y="310" width="280" height="24" rx="8" fill="#78350f"/>
  <rect x="600" y="334" width="20" height="110" fill="#78350f"/>
  <rect x="800" y="334" width="20" height="110" fill="#78350f"/>
  <!-- Pastel con fresa -->
  <rect x="635" y="255" width="90" height="55" rx="10" fill="#fde047" stroke="#ca8a04" stroke-width="4"/>
  <path d="M635 275 Q680 290 725 275" fill="none" stroke="#f43f5e" stroke-width="6"/>
  <circle cx="680" cy="245" r="12" fill="#ef4444"/>
  <!-- Tarro de miel -->
  <rect x="755" y="260" width="45" height="50" rx="10" fill="#f59e0b" stroke="#78350f" stroke-width="4"/>
</svg>
""")

    # 4. Ricitos de Oro y los Tres Osos: encuadres acuarela + escenas ilustradas SVG
    gold_base = Image.open(IMG_DIR / "goldilocks_bears.jpg").convert("RGB")
    crop_16_9(gold_base, 0.50, 0.50, 1.00).save(SCENES_DIR / "gold_3_door.jpg", quality=90)
    crop_16_9(gold_base, 0.64, 0.56, 1.70).save(SCENES_DIR / "gold_4_bowls.jpg", quality=90)
    crop_16_9(gold_base, 0.72, 0.58, 2.10).save(SCENES_DIR / "gold_5_small_bowl.jpg", quality=90)

    write_svg("gold_1_three_bears.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="#bae6fd"/>
  <path d="M0 370 Q480 310 960 370 L960 540 L0 540 Z" fill="#86efac"/>
  <!-- Casita del bosque al fondo -->
  <rect x="680" y="210" width="190" height="160" fill="#fde68a" stroke="#78350f" stroke-width="6"/>
  <polygon points="660,210 775,120 890,210" fill="#b45309" stroke="#78350f" stroke-width="6"/>
  <rect x="750" y="280" width="50" height="90" rx="8" fill="#78350f"/>
  <!-- Papá Oso (Grande) -->
  <g transform="translate(130, 120)">
    <circle cx="55" cy="45" r="24" fill="#78350f"/>
    <circle cx="145" cy="45" r="24" fill="#78350f"/>
    <circle cx="100" cy="85" r="62" fill="#92400e"/>
    <ellipse cx="100" cy="102" rx="30" ry="22" fill="#fde68a"/>
    <circle cx="100" cy="94" r="10" fill="#1e293b"/>
    <circle cx="78" cy="72" r="6" fill="#1e293b"/>
    <circle cx="122" cy="72" r="6" fill="#1e293b"/>
    <ellipse cx="100" cy="235" rx="78" ry="105" fill="#92400e"/>
    <rect x="52" y="145" width="96" height="95" rx="18" fill="#2563eb"/>
  </g>
  <!-- Mamá Osa (Mediana) -->
  <g transform="translate(340, 165)">
    <circle cx="52" cy="42" r="20" fill="#92400e"/>
    <circle cx="128" cy="42" r="20" fill="#92400e"/>
    <circle cx="90" cy="78" r="52" fill="#b45309"/>
    <ellipse cx="90" cy="92" rx="25" ry="18" fill="#fde68a"/>
    <circle cx="90" cy="85" r="8" fill="#1e293b"/>
    <circle cx="72" cy="66" r="5" fill="#1e293b"/>
    <circle cx="108" cy="66" r="5" fill="#1e293b"/>
    <path d="M30 130 L150 130 L170 285 L10 285 Z" fill="#ec4899"/>
  </g>
  <!-- Osito Bebé (Pequeño) -->
  <g transform="translate(525, 235)">
    <circle cx="42" cy="32" r="16" fill="#b45309"/>
    <circle cx="98" cy="32" r="16" fill="#b45309"/>
    <circle cx="70" cy="60" r="40" fill="#d97706"/>
    <ellipse cx="70" cy="72" rx="20" ry="14" fill="#fef3c7"/>
    <circle cx="70" cy="66" r="7" fill="#1e293b"/>
    <circle cx="56" cy="52" r="5" fill="#1e293b"/>
    <circle cx="84" cy="52" r="5" fill="#1e293b"/>
    <ellipse cx="70" cy="145" rx="48" ry="60" fill="#38bdf8"/>
  </g>
</svg>
""")

    write_svg("gold_2_walk_forest.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="#e0f2fe"/>
  <circle cx="820" cy="95" r="52" fill="#fde047"/>
  <path d="M0 360 Q320 290 640 360 T960 340 L960 540 L0 540 Z" fill="#86efac"/>
  <!-- Tres tazones humeantes en la ventana de la casita a la izquierda -->
  <rect x="60" y="170" width="260" height="220" rx="14" fill="#fef3c7" stroke="#78350f" stroke-width="10"/>
  <rect x="85" y="310" width="210" height="20" fill="#92400e"/>
  <!-- Tazón grande, mediano y pequeño con vapor -->
  <path d="M95 275 L155 275 L145 310 L105 310 Z" fill="#b45309"/>
  <path d="M165 282 L215 282 L207 310 L173 310 Z" fill="#eab308"/>
  <path d="M225 288 L265 288 L258 310 L232 310 Z" fill="#38bdf8"/>
  <path d="M120 260 Q110 235 125 215" fill="none" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
  <path d="M190 268 Q180 245 195 225" fill="none" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
  <!-- Los 3 osos paseando por el sendero del bosque a la derecha -->
  <path d="M360 540 Q560 410 880 390 L960 440 L520 540 Z" fill="#fde68a"/>
  <circle cx="520" cy="275" r="46" fill="#92400e"/>
  <ellipse cx="520" cy="375" rx="55" ry="75" fill="#2563eb"/>
  <circle cx="660" cy="300" r="38" fill="#b45309"/>
  <ellipse cx="660" cy="385" rx="46" ry="65" fill="#ec4899"/>
  <circle cx="780" cy="335" r="30" fill="#d97706"/>
  <ellipse cx="780" cy="400" rx="35" ry="48" fill="#38bdf8"/>
</svg>
""")

    write_svg("gold_6_chair_break.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="410" fill="#fef3c7"/>
  <rect y="410" width="960" height="130" fill="#b45309"/>
  <!-- Silla grande de Papá Oso -->
  <rect x="110" y="130" width="150" height="170" rx="12" fill="#78350f"/>
  <rect x="100" y="290" width="170" height="28" rx="8" fill="#92400e"/>
  <rect x="115" y="318" width="22" height="115" fill="#78350f"/>
  <rect x="233" y="318" width="22" height="115" fill="#78350f"/>
  <!-- Silla mediana de Mamá Osa con cojín rosa -->
  <rect x="355" y="175" width="130" height="135" rx="12" fill="#92400e"/>
  <rect x="345" y="295" width="150" height="26" rx="10" fill="#f472b6"/>
  <rect x="360" y="321" width="18" height="110" fill="#92400e"/>
  <rect x="462" y="321" width="18" height="110" fill="#92400e"/>
  <!-- Sillita pequeña del Osito rompiéndose ¡CRAC! con Ricitos de Oro -->
  <g transform="translate(620, 215) rotate(12)">
    <rect x="20" y="20" width="110" height="95" rx="10" fill="#d97706"/>
    <rect x="10" y="110" width="130" height="22" rx="8" fill="#b45309"/>
    <!-- Patas rotas -->
    <rect x="15" y="132" width="16" height="75" transform="rotate(-28 15 132)" fill="#78350f"/>
    <rect x="110" y="132" width="16" height="75" transform="rotate(32 110 132)" fill="#78350f"/>
    <!-- Ricitos sorprendida -->
    <circle cx="75" cy="25" r="38" fill="#fed7aa"/>
    <circle cx="42" cy="18" r="18" fill="#facc15"/>
    <circle cx="108" cy="18" r="18" fill="#facc15"/>
    <path d="M40 -2 Q75 -25 110 -2" fill="#facc15"/>
    <path d="M40 62 L110 62 L125 125 L25 125 Z" fill="#38bdf8"/>
  </g>
  <!-- Destello de ¡CRAC! -->
  <polygon points="610,360 635,340 625,375 655,365 620,400" fill="#ef4444"/>
  <polygon points="790,350 820,335 805,370 835,365 795,395" fill="#f59e0b"/>
</svg>
""")

    write_svg("gold_7_sleeping_bed.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="410" fill="#e0e7ff"/>
  <rect y="410" width="960" height="130" fill="#92400e"/>
  <!-- Cama grande (izquierda) -->
  <rect x="60" y="210" width="230" height="190" rx="14" fill="#78350f"/>
  <rect x="75" y="260" width="200" height="120" rx="12" fill="#3b82f6"/>
  <rect x="85" y="230" width="80" height="36" rx="14" fill="#ffffff"/>
  <!-- Cama mediana (centro) -->
  <rect x="335" y="240" width="200" height="160" rx="14" fill="#92400e"/>
  <rect x="350" y="280" width="170" height="100" rx="12" fill="#f472b6"/>
  <rect x="360" y="254" width="70" height="32" rx="12" fill="#ffffff"/>
  <!-- Camita pequeña (derecha) con Ricitos de Oro durmiendo plácidamente -->
  <rect x="590" y="260" width="290" height="150" rx="16" fill="#b45309"/>
  <rect x="610" y="270" width="95" height="45" rx="18" fill="#ffffff"/>
  <!-- Ricitos dormida -->
  <circle cx="645" cy="272" r="24" fill="#facc15"/>
  <circle cx="685" cy="268" r="24" fill="#facc15"/>
  <circle cx="668" cy="285" r="32" fill="#fed7aa"/>
  <path d="M654 282 Q660 288 666 282" fill="none" stroke="#1e293b" stroke-width="3"/>
  <path d="M674 282 Q680 288 686 282" fill="none" stroke="#1e293b" stroke-width="3"/>
  <!-- Edredón verde suave -->
  <path d="M695 280 Q785 265 865 295 L865 395 L695 395 Z" fill="#4ade80" stroke="#16a34a" stroke-width="4"/>
  <!-- Zzz de sueño -->
  <path d="M720 180 L750 180 L720 210 L750 210" fill="none" stroke="#6366f1" stroke-width="6" stroke-linecap="round"/>
  <path d="M775 135 L810 135 L775 170 L810 170" fill="none" stroke="#6366f1" stroke-width="6" stroke-linecap="round"/>
</svg>
""")

    write_svg("gold_8_bears_bowls.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="410" fill="#fef3c7"/>
  <rect y="410" width="960" height="130" fill="#b45309"/>
  <!-- Los 3 osos mirando sus tazones en la mesa -->
  <g transform="translate(150, 110)">
    <circle cx="95" cy="80" r="58" fill="#92400e"/>
    <ellipse cx="95" cy="95" rx="28" ry="20" fill="#fde68a"/>
    <ellipse cx="95" cy="220" rx="70" ry="95" fill="#2563eb"/>
  </g>
  <g transform="translate(380, 145)">
    <circle cx="85" cy="75" r="50" fill="#b45309"/>
    <ellipse cx="85" cy="88" rx="24" ry="17" fill="#fde68a"/>
    <ellipse cx="85" cy="200" rx="60" ry="85" fill="#ec4899"/>
  </g>
  <g transform="translate(595, 200)">
    <circle cx="70" cy="65" r="42" fill="#d97706"/>
    <ellipse cx="70" cy="76" rx="20" ry="14" fill="#fef3c7"/>
    <ellipse cx="70" cy="155" rx="48" ry="65" fill="#38bdf8"/>
  </g>
  <!-- Mesa en primer plano con el tazón pequeño vacío boca arriba -->
  <rect x="140" y="340" width="680" height="28" rx="10" fill="#78350f"/>
  <path d="M210 295 L290 295 L275 340 L225 340 Z" fill="#b45309"/>
  <path d="M430 302 L495 302 L485 340 L440 340 Z" fill="#eab308"/>
  <!-- Tazón pequeño vacío con cuchara -->
  <path d="M635 312 L695 312 L685 340 L645 340 Z" fill="#38bdf8"/>
  <line x1="680" y1="315" x2="705" y2="285" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
</svg>
""")

    write_svg("gold_9_bears_find_goldilocks.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="410" fill="#e0e7ff"/>
  <rect y="410" width="960" height="130" fill="#92400e"/>
  <!-- Los 3 osos sorprendidos junto a la camita pequeña -->
  <g transform="translate(100, 125)">
    <circle cx="85" cy="75" r="54" fill="#92400e"/>
    <ellipse cx="85" cy="90" rx="26" ry="18" fill="#fde68a"/>
    <ellipse cx="85" cy="210" rx="65" ry="90" fill="#2563eb"/>
  </g>
  <g transform="translate(265, 160)">
    <circle cx="75" cy="68" r="46" fill="#b45309"/>
    <ellipse cx="75" cy="80" rx="22" ry="15" fill="#fde68a"/>
    <ellipse cx="75" cy="185" rx="55" ry="78" fill="#ec4899"/>
  </g>
  <g transform="translate(415, 215)">
    <circle cx="65" cy="58" r="38" fill="#d97706"/>
    <ellipse cx="65" cy="68" rx="18" ry="13" fill="#fef3c7"/>
    <ellipse cx="65" cy="140" rx="44" ry="58" fill="#38bdf8"/>
  </g>
  <!-- Camita con Ricitos despertando -->
  <rect x="555" y="250" width="330" height="165" rx="16" fill="#b45309"/>
  <rect x="580" y="260" width="110" height="50" rx="20" fill="#ffffff"/>
  <circle cx="650" cy="240" r="38" fill="#fed7aa"/>
  <circle cx="618" cy="232" r="20" fill="#facc15"/>
  <circle cx="682" cy="232" r="20" fill="#facc15"/>
  <circle cx="638" cy="236" r="5" fill="#0f172a"/>
  <circle cx="662" cy="236" r="5" fill="#0f172a"/>
  <path d="M680 285 L870 285 L870 400 L680 400 Z" fill="#4ade80"/>
</svg>
""")

    write_svg("gold_10_friends_end.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="#dcfce7"/>
  <path d="M0 370 Q480 320 960 370 L960 540 L0 540 Z" fill="#86efac"/>
  <circle cx="840" cy="90" r="48" fill="#fde047"/>
  <!-- Los 3 osos y Ricitos compartiendo el desayuno felices -->
  <rect x="220" y="330" width="520" height="26" rx="10" fill="#78350f"/>
  <!-- Papá Oso, Mamá Osa, Osito y Ricitos de Oro sonriendo juntos -->
  <circle cx="260" cy="210" r="50" fill="#92400e"/>
  <ellipse cx="260" cy="224" rx="24" ry="16" fill="#fde68a"/>
  <circle cx="405" cy="225" r="44" fill="#b45309"/>
  <ellipse cx="405" cy="238" rx="20" ry="14" fill="#fde68a"/>
  <circle cx="535" cy="245" r="36" fill="#d97706"/>
  <ellipse cx="535" cy="255" rx="17" ry="12" fill="#fef3c7"/>
  <!-- Ricitos de Oro -->
  <circle cx="645" cy="235" r="22" fill="#facc15"/>
  <circle cx="715" cy="235" r="22" fill="#facc15"/>
  <circle cx="680" cy="242" r="38" fill="#fed7aa"/>
  <path d="M666 254 Q680 266 694 254" fill="none" stroke="#b91c1c" stroke-width="4" stroke-linecap="round"/>
  <!-- 4 tazones en la mesa -->
  <path d="M240 295 L295 295 L285 330 L250 330 Z" fill="#b45309"/>
  <path d="M385 300 L435 300 L425 330 L395 330 Z" fill="#eab308"/>
  <path d="M515 305 L560 305 L552 330 L523 330 Z" fill="#38bdf8"/>
  <path d="M660 305 L705 305 L697 330 L668 330 Z" fill="#f472b6"/>
</svg>
""")

    # 5. La Tortuga y la Liebre: encuadres acuarela + escenas ilustradas SVG
    race_base = Image.open(IMG_DIR / "tortoise_and_hare.jpg").convert("RGB")
    crop_16_9(race_base, 0.64, 0.62, 1.75).save(SCENES_DIR / "race_1_hare_fast.jpg", quality=90)
    crop_16_9(race_base, 0.39, 0.66, 1.85).save(SCENES_DIR / "race_2_tortoise_slow.jpg", quality=90)
    crop_16_9(race_base, 0.50, 0.50, 1.00).save(SCENES_DIR / "race_3_challenge.jpg", quality=90)
    crop_16_9(race_base, 0.24, 0.52, 1.80).save(SCENES_DIR / "race_4_animals_cheer.jpg", quality=90)

    write_svg("race_5_hare_zoom.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="#bae6fd"/>
  <circle cx="830" cy="90" r="46" fill="#fde047"/>
  <path d="M0 350 Q480 290 960 350 L960 540 L0 540 Z" fill="#86efac"/>
  <path d="M0 430 Q480 370 960 410 L960 510 Q480 470 0 520 Z" fill="#fde68a"/>
  <!-- Estela de velocidad de la liebre corriendo como una flecha -->
  <line x1="120" y1="360" x2="420" y2="360" stroke="#ffffff" stroke-width="10" stroke-linecap="round"/>
  <line x1="80" y1="395" x2="390" y2="395" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
  <line x1="160" y1="430" x2="430" y2="430" stroke="#ffffff" stroke-width="10" stroke-linecap="round"/>
  <!-- Liebre saltando a toda velocidad -->
  <g transform="translate(520, 260) rotate(-12)">
    <ellipse cx="95" cy="95" rx="75" ry="42" fill="#b45309"/>
    <circle cx="170" cy="65" r="38" fill="#b45309"/>
    <ellipse cx="145" cy="5" rx="14" ry="48" transform="rotate(-25 145 5)" fill="#b45309"/>
    <ellipse cx="175" cy="5" rx="14" ry="48" transform="rotate(-15 175 5)" fill="#b45309"/>
    <circle cx="15" cy="92" r="18" fill="#ffffff"/>
    <circle cx="185" cy="58" r="6" fill="#0f172a"/>
    <ellipse cx="45" cy="130" rx="28" ry="12" transform="rotate(25 45 130)" fill="#92400e"/>
    <ellipse cx="155" cy="125" rx="28" ry="12" transform="rotate(-25 155 125)" fill="#92400e"/>
  </g>
</svg>
""")

    write_svg("race_6_hare_nap_carrots.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="#dbeafe"/>
  <path d="M0 360 Q480 310 960 360 L960 540 L0 540 Z" fill="#86efac"/>
  <!-- Gran roble con sombra -->
  <rect x="190" y="130" width="110" height="260" rx="14" fill="#78350f"/>
  <circle cx="245" cy="110" r="145" fill="#16a34a"/>
  <circle cx="140" cy="145" r="105" fill="#22c55e"/>
  <circle cx="355" cy="145" r="105" fill="#15803d"/>
  <!-- Liebre dormida apoyada en el árbol con zanahorias -->
  <g transform="translate(275, 290)">
    <ellipse cx="95" cy="75" rx="68" ry="44" fill="#b45309"/>
    <circle cx="150" cy="48" r="38" fill="#b45309"/>
    <ellipse cx="130" cy="-5" rx="12" ry="42" transform="rotate(-35 130 -5)" fill="#b45309"/>
    <ellipse cx="155" cy="0" rx="12" ry="42" transform="rotate(-25 155 0)" fill="#b45309"/>
    <path d="M142 46 Q152 54 162 46" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
    <!-- Zanahorias crujientes al lado -->
    <polygon points="220,95 285,80 225,118" fill="#f97316"/>
    <polygon points="240,115 305,105 245,138" fill="#ea580c"/>
  </g>
  <!-- Zzz flotando -->
  <text x="480" y="245" font-family="sans-serif" font-weight="bold" font-size="44" fill="#4f46e5">Zzz...</text>
</svg>
""")

    write_svg("race_7_tortoise_walking.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="#e0f2fe"/>
  <circle cx="480" cy="85" r="54" fill="#fde047"/>
  <path d="M0 360 Q480 310 960 360 L960 540 L0 540 Z" fill="#86efac"/>
  <path d="M0 430 Q480 390 960 420 L960 520 L0 520 Z" fill="#fde68a"/>
  <!-- Tortuga caminando paso a paso con determinación -->
  <g transform="translate(340, 265)">
    <ellipse cx="115" cy="95" rx="95" ry="68" fill="#15803d" stroke="#14532d" stroke-width="6"/>
    <polygon points="75,55 115,35 155,55 155,95 115,115 75,95" fill="#eab308" stroke="#ca8a04" stroke-width="4"/>
    <circle cx="235" cy="75" r="36" fill="#4ade80"/>
    <circle cx="248" cy="66" r="6" fill="#0f172a"/>
    <path d="M232 88 Q248 98 260 86" fill="none" stroke="#14532d" stroke-width="4" stroke-linecap="round"/>
    <rect x="45" y="145" width="28" height="38" rx="10" fill="#4ade80"/>
    <rect x="155" y="145" width="28" height="38" rx="10" fill="#4ade80"/>
  </g>
  <!-- Huellas paso a paso -->
  <ellipse cx="140" cy="465" rx="14" ry="8" fill="#d97706"/>
  <ellipse cx="205" cy="455" rx="14" ry="8" fill="#d97706"/>
  <ellipse cx="270" cy="465" rx="14" ry="8" fill="#d97706"/>
</svg>
""")

    write_svg("race_8_tortoise_passes_hare.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="#dbeafe"/>
  <path d="M0 350 Q480 300 960 350 L960 540 L0 540 Z" fill="#86efac"/>
  <path d="M0 435 Q480 400 960 420 L960 520 L0 520 Z" fill="#fde68a"/>
  <!-- Roble y liebre roncando al fondo a la izquierda -->
  <rect x="140" y="130" width="90" height="230" fill="#78350f"/>
  <circle cx="185" cy="115" r="120" fill="#16a34a"/>
  <ellipse cx="255" cy="345" rx="55" ry="34" fill="#b45309"/>
  <circle cx="295" cy="325" r="28" fill="#b45309"/>
  <text x="310" y="275" font-family="sans-serif" font-weight="bold" font-size="34" fill="#4f46e5">Zzz</text>
  <!-- Tortuga pasando en silencio hacia la meta a la derecha -->
  <g transform="translate(520, 310)">
    <ellipse cx="95" cy="75" rx="78" ry="54" fill="#15803d" stroke="#14532d" stroke-width="5"/>
    <circle cx="195" cy="60" r="30" fill="#4ade80"/>
    <circle cx="205" cy="54" r="5" fill="#0f172a"/>
    <rect x="40" y="115" width="24" height="32" rx="8" fill="#4ade80"/>
    <rect x="130" y="115" width="24" height="32" rx="8" fill="#4ade80"/>
  </g>
</svg>
""")

    write_svg("race_9_finish_line.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="#bae6fd"/>
  <path d="M0 350 Q480 300 960 350 L960 540 L0 540 Z" fill="#86efac"/>
  <path d="M0 430 Q480 390 960 420 L960 520 L0 520 Z" fill="#fde68a"/>
  <!-- Arco de Meta de colores -->
  <rect x="620" y="120" width="18" height="330" fill="#92400e"/>
  <rect x="840" y="120" width="18" height="330" fill="#92400e"/>
  <rect x="620" y="140" width="238" height="48" fill="#ef4444" stroke="#ffffff" stroke-width="4"/>
  <rect x="660" y="140" width="40" height="48" fill="#fde047"/>
  <rect x="740" y="140" width="40" height="48" fill="#22c55e"/>
  <rect x="818" y="140" width="40" height="48" fill="#3b82f6"/>
  <!-- Tortuga cruzando la cinta de meta -->
  <g transform="translate(590, 310)">
    <ellipse cx="95" cy="75" rx="78" ry="54" fill="#15803d" stroke="#14532d" stroke-width="5"/>
    <circle cx="195" cy="55" r="32" fill="#4ade80"/>
    <circle cx="206" cy="48" r="5" fill="#0f172a"/>
    <path d="M192 68 Q208 78 220 66" fill="none" stroke="#14532d" stroke-width="4" stroke-linecap="round"/>
    <rect x="40" y="115" width="24" height="32" rx="8" fill="#4ade80"/>
    <rect x="130" y="115" width="24" height="32" rx="8" fill="#4ade80"/>
  </g>
  <!-- Liebre corriendo a lo lejos demasiado tarde -->
  <ellipse cx="180" cy="410" rx="45" ry="26" fill="#b45309"/>
  <circle cx="225" cy="390" r="22" fill="#b45309"/>
</svg>
""")

    write_svg("race_10_trophy_winner.svg", """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
  <rect width="960" height="540" fill="#dcfce7"/>
  <path d="M0 370 Q480 320 960 370 L960 540 L0 540 Z" fill="#86efac"/>
  <!-- Podio y Gran Copa Dorada -->
  <rect x="350" y="340" width="260" height="120" rx="12" fill="#fde047" stroke="#ca8a04" stroke-width="6"/>
  <!-- Tortuga campeona sobre el podio -->
  <g transform="translate(380, 210)">
    <ellipse cx="95" cy="75" rx="78" ry="54" fill="#15803d" stroke="#14532d" stroke-width="5"/>
    <circle cx="195" cy="55" r="32" fill="#4ade80"/>
    <circle cx="206" cy="48" r="5" fill="#0f172a"/>
    <path d="M192 68 Q208 78 220 66" fill="none" stroke="#14532d" stroke-width="4" stroke-linecap="round"/>
    <rect x="40" y="115" width="24" height="32" rx="8" fill="#4ade80"/>
    <rect x="130" y="115" width="24" height="32" rx="8" fill="#4ade80"/>
  </g>
  <!-- Trofeo de oro brillante -->
  <g transform="translate(445, 85)">
    <path d="M10 10 L90 10 L75 75 Q50 95 25 75 Z" fill="#fbbf24" stroke="#d97706" stroke-width="5"/>
    <rect x="42" y="82" width="16" height="28" fill="#d97706"/>
    <rect x="22" y="108" width="56" height="14" rx="5" fill="#92400e"/>
  </g>
  <!-- Liebre aplaudiendo con deportividad a la derecha -->
  <g transform="translate(680, 260)">
    <ellipse cx="70" cy="110" rx="48" ry="70" fill="#b45309"/>
    <circle cx="70" cy="35" r="36" fill="#b45309"/>
    <ellipse cx="55" cy="-25" rx="11" ry="40" fill="#b45309"/>
    <ellipse cx="85" cy="-25" rx="11" ry="40" fill="#b45309"/>
  </g>
</svg>
""")

    print(f"Generadas {len(list(SCENES_DIR.iterdir()))} imágenes descriptivas en {SCENES_DIR}")


if __name__ == "__main__":
    generate_all()
