# PAQUETE — 620 Trío
Fuente: Dossier 620 TRIO.pdf (4 págs). No inventar lo que está en [FALTA].
Mergeá esto en `src/content/site.ts` respetando las keys que ya existen.
No toques componentes ni el layout. No crees páginas.

## Identidad
- Nombre: 620 Trío
- Tagline / género: Fusión — folklore argentino, música latinoamericana, rock y jazz
- Color marca: celeste (~#5EC4D4) + negro + blanco. Logo: bondi 620.

## site.hero
- title: 620 Trío
- subtitle / kicker: Trío fusión
- description: Folklore argentino y música latinoamericana, con rock y un discurso jazzístico.
- CTA primario: WhatsApp — https://wa.me/5491167354208
- CTA secundario: Escuchar — https://www.youtube.com/watch?v=KPjOeZRlXdcs

## site.band
- name: 620 Trío
- email: 620musicafusion@gmail.com   ← reemplazar hola@620trio.com
- bio: |
    A partir de composiciones propias y repertorio latinoamericano, 620 Trío amalgama
    el lenguaje de la música popular con la improvisación. La fusión es la sonoridad
    principal: el folklore argentino y la música latinoamericana se entrelazan con la
    fuerza del rock y un discurso jazzístico.

    El nombre viene del movimiento que los une: Sergio, Walter y Nicolás viven en
    distintos barrios y una línea emblemática del distrito —la 620— recorre su ruta
    e identidad.

    Primeros ensayos en el verano de 2025; debut en marzo en un ciclo de Palermo.
    Hoy preparan la presentación de su álbum debut, grabado en los estudios ION
    de Buenos Aires.

## site.members
1. Walter Zelaya — Guitarra
2. Nico Fernández — Bajo
3. Sergio Morán — Batería
Fotos: [FALTA] — van a `public/members/{walter,nico,sergio}.jpg` cuando las elijas de FOTOS ION.

## site.shows (pasados)
1. Ciclo musical, Palermo — marzo 2025 — Debut
2. Vivero Club, Palomar — Inauguración, escenario con el grupo de Javier Malosetti
3. Festival Blackfest, Tanque Cultural (Liniers)
4. “Colectivísimo”, Jazzvoyeur (Recoleta) — show temático con artistas invitados
   (Ricardo Culotta, Andrés Alcoba, Federico Ramírez)
Próximas: [FALTA]

## site.releases / site.media
- Álbum debut — grabado en Estudios ION, Buenos Aires — [FALTA fecha de salida]
- Video / lanzamiento: https://www.youtube.com/watch?v=KPjOeZRlXdcs
  (YouTube id: KPjOeZRlXdcs)
- No hostear mp4 ni wav del Drive.

## site.socials
- Instagram: https://instagram.com/620triofusion  (@620triofusion)
- YouTube: 620 trío
- Email: 620musicafusion@gmail.com
- WhatsApp: +54 9 11 6735-4208  → https://wa.me/5491167354208

## site.gallery
[FALTA rutas]. Elegir 6–8 fotos de la carpeta FOTOS ION:
- 1 hero → `public/hero.jpg`
- 1 por integrante → `public/members/`
- 4–6 show/estudio → `public/gallery/01.jpg` …
No subir TEMAS CON MASTER, EDITANDO, ni los reels de 100 MB.

## site.navigation
Inicio (#inicio) · Bio (#bio) · Integrantes (#integrantes) · Música (#musica) · Fechas (#fechas) · Galería (#galeria) · Contacto (#contacto)

## No tocar
- Componentes .astro, layout, routing.
- No inventar Spotify, fechas futuras, ni bios individuales de cada músico.
