/**
 * Single source of editable content for this band site.
 * To reuse this project for another band, update this file and the assets in /public.
 */
export const site = {
  band: {
    name: '620 Trío',
    shortName: '620',
    genre: 'Fusión — folklore argentino, música latinoamericana, rock y jazz',
    description: 'Folklore argentino y música latinoamericana, con rock y un discurso jazzístico.',
    bio: `A partir de composiciones propias y repertorio latinoamericano, 620 Trío amalgama el lenguaje de la música popular con la improvisación. La fusión es la sonoridad principal: el folklore argentino y la música latinoamericana se entrelazan con la fuerza del rock y un discurso jazzístico.

El nombre viene del movimiento que los une: Sergio, Walter y Nicolás viven en distintos barrios y una línea emblemática del distrito —la 620— recorre su ruta e identidad.

Primeros ensayos en el verano de 2025; debut en marzo en un ciclo de Palermo. Hoy preparan la presentación de su álbum debut, grabado en los estudios ION de Buenos Aires.`,
    email: '620musicafusion@gmail.com',
  },
  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Bio', href: '#bio' },
    { label: 'Integrantes', href: '#integrantes' },
    { label: 'Música', href: '#musica' },
    { label: 'Fechas', href: '#fechas' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    eyebrow: 'Trío fusión',
    title: ['620', 'Trío'],
    primaryAction: { label: 'WhatsApp', href: 'https://wa.me/5491167354208' },
    secondaryAction: { label: 'Escuchar', href: 'https://www.youtube.com/watch?v=KPjOeZRlXdcs' },
  },
  sections: {
    members: { number: '01', eyebrow: 'Tripulación', title: 'Integrantes', intro: 'Tres músicos y un mismo punto de partida: la canción en movimiento.' },
    music: { number: '02', eyebrow: 'Discografía', title: 'Música', intro: 'Un primer viaje que ya empezó y un álbum que está por salir a la ruta.' },
    shows: { number: '03', eyebrow: 'En escena', title: 'Fechas', intro: 'Una bitácora abierta: shows compartidos y próximas paradas.' },
    gallery: { number: '04', eyebrow: 'Registro de viaje', title: 'Galería', intro: 'Luces, aire libre y momentos de música en vivo.' },
  },
  members: [
    { name: 'Walter Zelaya', role: 'Guitarra', detail: 'Guitarra', initials: 'WZ' },
    { name: 'Nico Fernández', role: 'Bajo', detail: 'Bajo', initials: 'NF' },
    { name: 'Sergio Morán', role: 'Batería', detail: 'Batería', initials: 'SM' },
  ],
  releases: [
    {
      title: 'Álbum debut',
      format: 'Álbum',
      detail: 'Grabado en los estudios ION de Buenos Aires.',
      status: 'Próximamente',
      art: '620',
      featured: true,
    },
  ],
  shows: [
    { date: 'Marzo 2025', venue: 'Ciclo musical (Debut)', city: 'Palermo · Buenos Aires', state: 'Pasada' as 'Pasada' | 'Próxima' },
    { date: 'Show realizado', venue: 'Vivero Club (con Javier Malosetti)', city: 'El Palomar · Buenos Aires', state: 'Pasada' as 'Pasada' | 'Próxima' },
    { date: 'Show realizado', venue: 'Festival Blackfest · Tanque Cultural', city: 'Liniers · Buenos Aires', state: 'Pasada' as 'Pasada' | 'Próxima' },
    { date: 'Show realizado', venue: '“Colectivísimo” · Jazzvoyeur', city: 'Recoleta · Buenos Aires', state: 'Pasada' as 'Pasada' | 'Próxima' },
  ],
  gallery: [
    { label: 'En vivo · 01', shape: 'wide' },
    { label: 'En vivo · 02', shape: 'tall' },
    { label: 'Estudio · 01', shape: 'square' },
    { label: 'En vivo · 03', shape: 'wide' },
    { label: 'En vivo · 04', shape: 'square' },
  ],
  media: {
    youtubeUrl: 'https://www.youtube.com/embed/KPjOeZRlXdcs' as string | null,
    youtubeTitle: '620 Trío — En vivo',
  },
  contact: { eyebrow: 'Contacto / contrataciones', title: ['Subite al', 'viaje.'] },
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/620triofusion' },
    { label: 'YouTube', href: 'https://www.youtube.com/watch?v=KPjOeZRlXdcs' },
    { label: 'WhatsApp', href: 'https://wa.me/5491167354208' },
  ],
} as const;

export type Member = (typeof site.members)[number];
export type Release = (typeof site.releases)[number];
export type Show = (typeof site.shows)[number];
