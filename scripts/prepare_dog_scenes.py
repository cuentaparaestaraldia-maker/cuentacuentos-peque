#!/usr/bin/env python3
"""
Genera y organiza las 21 imágenes descriptivas para el cuento:
"The Mystery of the Golden Bone in Barkville" / "El Misterio del Hueso Dorado en Barkville"
en assets/images/scenes/dogs_*.jpg
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
IMG_DIR = ROOT / "assets" / "images"
SCENES_DIR = IMG_DIR / "scenes"


def crop_16_9(img: Image.Image, cx_pct: float, cy_pct: float, zoom: float, out_size=(1024, 576)) -> Image.Image:
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


def main():
    SCENES_DIR.mkdir(parents=True, exist_ok=True)

    img_park = Image.open(IMG_DIR / "dogs_barkville.jpg").convert("RGB")
    img_fountain = Image.open(IMG_DIR / "dogs_pepe_fountain.jpg").convert("RGB")
    img_sled = Image.open(IMG_DIR / "dogs_husky_sled.jpg").convert("RGB")
    img_chase = Image.open(IMG_DIR / "dogs_raccoon_chase.jpg").convert("RGB")
    img_tunnel = Image.open(IMG_DIR / "dogs_toby_tunnel.jpg").convert("RGB")
    img_celebration = Image.open(IMG_DIR / "dogs_happy_celebration.jpg").convert("RGB")

    # 1. Parque de Barkville
    crop_16_9(img_park, 0.50, 0.50, 1.0).save(SCENES_DIR / "dogs_1_park.jpg", quality=92)
    # 2. Max el Pastor Alemán
    crop_16_9(img_park, 0.35, 0.58, 1.65).save(SCENES_DIR / "dogs_2_max_shepherd.jpg", quality=92)
    # 3. Bella la Golden Retriever
    crop_16_9(img_park, 0.62, 0.56, 1.65).save(SCENES_DIR / "dogs_3_bella_golden.jpg", quality=92)
    # 4. Pepe el diminuto Chihuahua corriendo
    crop_16_9(img_fountain, 0.60, 0.68, 2.1).save(SCENES_DIR / "dogs_4_pepe_chihuahua.jpg", quality=92)
    # 5. La fuente y las huellas de barro
    crop_16_9(img_fountain, 0.50, 0.50, 1.0).save(SCENES_DIR / "dogs_5_fountain_footprints.jpg", quality=92)
    # 6. Toby el perro salchicha
    crop_16_9(img_celebration, 0.53, 0.72, 1.95).save(SCENES_DIR / "dogs_6_toby_dachshund.jpg", quality=92)
    # 7. Toby olfateando hacia los robles
    crop_16_9(img_fountain, 0.28, 0.55, 1.45).save(SCENES_DIR / "dogs_7_toby_sniffing.jpg", quality=92)

    # 8. Rocky el Bulldog y Pongo el Dálmata
    crop_16_9(img_celebration, 0.50, 0.62, 1.5).save(SCENES_DIR / "dogs_8_bulldog_dalmatian.jpg", quality=92)

    # 9. Sendero hacia la colina nevada
    crop_16_9(img_sled, 0.30, 0.38, 1.5).save(SCENES_DIR / "dogs_9_snowy_hill.jpg", quality=92)
    # 10. Maya la Husky y Bruno el San Bernardo
    crop_16_9(img_sled, 0.64, 0.60, 1.65).save(SCENES_DIR / "dogs_10_husky_stbernard.jpg", quality=92)
    # 11. Trineo de madera tirado por Maya y Bruno
    crop_16_9(img_sled, 0.50, 0.50, 1.0).save(SCENES_DIR / "dogs_11_wooden_sled.jpg", quality=92)
    # 12. Coco la Caniche y Leo el Carlino en el trineo
    crop_16_9(img_sled, 0.36, 0.58, 2.05).save(SCENES_DIR / "dogs_12_poodle_pug.jpg", quality=92)

    # 13. Mapache con el hueso dorado en lo alto de la colina
    crop_16_9(img_chase, 0.36, 0.66, 1.85).save(SCENES_DIR / "dogs_13_raccoon_bone.jpg", quality=92)
    # 14. Flash el galgo veloz
    crop_16_9(img_chase, 0.56, 0.52, 1.75).save(SCENES_DIR / "dogs_14_flash_greyhound.jpg", quality=92)
    # 15. Flash y Luna el Border Collie persiguiendo al mapache
    crop_16_9(img_chase, 0.50, 0.50, 1.0).save(SCENES_DIR / "dogs_15_chase_wind.jpg", quality=92)

    # 16. El mapache deja caer el hueso en la madriguera y sube al árbol
    crop_16_9(img_tunnel, 0.22, 0.62, 1.6).save(SCENES_DIR / "dogs_16_rabbit_hole.jpg", quality=92)
    # 17. Los perros grandes intentan alcanzarlo
    crop_16_9(img_tunnel, 0.68, 0.56, 1.45).save(SCENES_DIR / "dogs_17_big_dogs_paws.jpg", quality=92)
    # 18. Toby se mete al túnel con sus patas cortas
    crop_16_9(img_tunnel, 0.28, 0.72, 1.95).save(SCENES_DIR / "dogs_18_toby_crawls.jpg", quality=92)
    # 19. La Yorkie agarra la cola de Toby y tiran todos
    crop_16_9(img_tunnel, 0.50, 0.50, 1.0).save(SCENES_DIR / "dogs_19_yorkie_pulls.jpg", quality=92)
    # 20. ¡Plop! Sale Toby con el hueso dorado brillante
    crop_16_9(img_celebration, 0.53, 0.72, 1.75).save(SCENES_DIR / "dogs_20_pop_bone.jpg", quality=92)
    # 21. El Gran Danés y el Chihuahua: cada perro tiene su talento especial
    crop_16_9(img_celebration, 0.50, 0.50, 1.0).save(SCENES_DIR / "dogs_21_special_talent.jpg", quality=92)

    print("Generadas exitosamente las 21 escenas ilustradas de Barkville!")


if __name__ == "__main__":
    main()
