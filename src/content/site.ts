/**
 * Single source of editable content for this band site.
 * To reuse this project for another band, update this file and the assets in /public.
 */
export const site = {
  band: {
    name: '620 Trío',
    shortName: '620',
    genre: 'Fusión folclore · jazz · rock · música latinoamericana',
    description: '620 Trío es una banda de Buenos Aires que cruza folclore, jazz, rock y músicas latinoamericanas.',
    bio: '620 Trío encuentra en el cruce de ritmos, canciones e improvisación una manera propia de viajar. En su primer año de recorrido, el grupo viene construyendo un repertorio de música original entre el pulso del folclore, el jazz, el rock y la raíz latinoamericana.',
    // TODO: Reemplazar con bio real de la banda.
    email: 'hola@620trio.com', // TODO: Reemplazar por el correo real.
  },
  navigation: [
    { label: 'Integrantes', href: '#integrantes' },
    { label: 'Música', href: '#musica' },
    { label: 'Fechas', href: '#fechas' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    eyebrow: 'Buenos Aires · música en movimiento',
    title: ['620', 'Trío'],
    primaryAction: { label: 'Escuchá', href: '#musica' },
    secondaryAction: { label: 'Fechas', href: '#fechas' },
  },
  sections: {
    members: { number: '01', eyebrow: 'Tripulación', title: 'Integrantes', intro: 'Tres músicos y un mismo punto de partida: la canción en movimiento.' },
    music: { number: '02', eyebrow: 'Discografía', title: 'Música', intro: 'Un primer viaje que ya empezó y un álbum que está por salir a la ruta.' },
    shows: { number: '03', eyebrow: 'En escena', title: 'Fechas', intro: 'Una bitácora abierta: shows compartidos y próximas paradas.' },
    gallery: { number: '04', eyebrow: 'Registro de viaje', title: 'Galería', intro: 'Luces, aire libre y momentos de música en vivo.' },
  },
  members: [
    { name: 'Walter Zelaya', role: 'Guitarra', detail: 'Guitarra, composición y arreglos.', initials: 'WZ' },
    { name: 'Nombre pendiente', role: 'Bajo', detail: 'Colaborador habitual del proyecto.', initials: 'BA' },
    { name: 'Nombre pendiente', role: 'Batería / percusión', detail: 'Pulso, texturas y percusión.', initials: 'BP' },
  ],
  releases: [
    { title: 'Muchos Colores', format: 'Simple · publicado', detail: 'El primer simple de 620 Trío: una postal sonora entre melodía, ritmo y paisaje.', status: 'Disponible ahora', art: 'MC', featured: true },
    { title: 'Transporte Ideal', format: 'Álbum debut', detail: 'El primer álbum de la banda. Próxima parada: canciones nuevas, cruces y recorrido.', status: 'Próximamente', art: 'TI', featured: false },
  ],
  shows: [
    { date: 'Show realizado', venue: 'Jazz Voyeur', city: 'Buenos Aires', state: 'Pasada' as 'Pasada' | 'Próxima' },
    { date: 'Show realizado', venue: 'Las Noches del Depo', city: 'San Telmo · Buenos Aires', state: 'Pasada' as 'Pasada' | 'Próxima' },
    // TODO: Agregar futuras fechas aquí. Usar state: 'Próxima' para destacarlas.
  ],
  gallery: [
    { label: 'En vivo · 01', shape: 'wide' },
    { label: 'En vivo · 02', shape: 'tall' },
    { label: 'Estudio · 01', shape: 'square' },
    { label: 'En vivo · 03', shape: 'wide' },
    { label: 'En vivo · 04', shape: 'square' },
  ],
  media: {
    youtubeUrl: null as string | null, // TODO: Pegar aquí la URL completa del embed de YouTube de “Muchos Colores”.
    youtubeTitle: '620 Trío — Muchos Colores',
  },
  contact: { eyebrow: 'Contacto / contrataciones', title: ['Subite al', 'viaje.'] },
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/620trio/' },
    { label: 'YouTube', href: '#' }, // TODO: Reemplazar enlaces reales.
    { label: 'Spotify', href: '#' },
  ],
} as const;

export type Member = (typeof site.members)[number];
export type Release = (typeof site.releases)[number];
export type Show = (typeof site.shows)[number];
