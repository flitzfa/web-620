import type { ImageMetadata } from 'astro';
import groupPhoto from '../assets/images/620-3juntos.jpg';
import nicoGalleryPhoto from '../assets/images/620-nicogaleria1.jpg';
import nicoPhoto from '../assets/images/620-nico.jpg';
import sergioGalleryPhoto from '../assets/images/620-sergiogaleria1.jpg';
import sergioPhoto from '../assets/images/620-sergio.jpg';
import walterGalleryPhoto from '../assets/images/620-waltergaleria1.jpg';
import walterPhoto from '../assets/images/620-walter.jpg';
import walterSergioGalleryPhoto from '../assets/images/620-waltersergiogaleria.jpg';

export type Show = {
  date: string;
  venue: string;
  city: string;
  state: 'Pasada' | 'Próxima';
  ticketUrl?: string;
  price?: string;
  time?: string;
};

export type Release = {
  title: string;
  format: string;
  detail: string;
  status?: string | null;
  youtubeUrl: string;
};

export type Member = {
  name: string;
  role: string;
  detail: string;
  initials: string;
  photo?: ImageMetadata;
};

export type GalleryImage = {
  label: string;
  shape: 'wide' | 'tall' | 'square' | 'feature';
  photo?: ImageMetadata;
  alt?: string;
  focus?: string;
};

/**
 * Single source of editable content for this band site.
 * To reuse this project for another band, update this file and the assets in /public.
 */
const shows: readonly Show[] = [
  {
    date: '13 de Septiembre',
    venue: 'Tanque Cultural',
    city: 'Liniers · Buenos Aires',
    state: 'Próxima',
    ticketUrl: 'https://www.meteleticket.com.ar/eventos/620-trio-e202',
    price: 'Desde $15.000',
    time: '18:00hs',
  },
  { date: 'Show realizado', venue: '“Colectivíssimo” · Jazzvoyeur', city: 'Recoleta · Buenos Aires', state: 'Pasada' },
  { date: 'Show realizado', venue: 'Festival Blackfest · Tanque Cultural', city: 'Liniers · Buenos Aires', state: 'Pasada' },
  { date: 'Show realizado', venue: 'Vivero Club (con Javier Malosetti)', city: 'El Palomar · Buenos Aires', state: 'Pasada' },
  { date: 'Marzo 2025', venue: 'Ciclo musical (Debut)', city: 'Palermo · Buenos Aires', state: 'Pasada' },
];

const releases: readonly Release[] = [
  {
    title: 'Transporte Ideal',
    format: 'Tema',
    detail: 'Grabado en Estudios ION.',
    status: 'Nuevo',
    youtubeUrl: 'https://www.youtube.com/embed/jk506IdW_hc',
  },
  {
    title: 'Muchos Colores',
    format: 'Tema',
    detail: 'Primer simple de la banda.',
    status: null,
    youtubeUrl: 'https://www.youtube.com/embed/KPjOeZRlXdc',
  },
  {
    title: 'Sesiones de Ensayo — Tambor, tambora',
    format: 'Sesión',
    detail: 'Ensayo grabado.',
    status: null,
    youtubeUrl: 'https://www.youtube.com/embed/XrhVRBdOMwU',
  },
];

const members: readonly Member[] = [
  { name: 'Walter Zelaya', role: 'Guitarra', detail: 'Guitarra', initials: 'WZ', photo: walterPhoto },
  { name: 'Nico Fernández', role: 'Bajo', detail: 'Bajo', initials: 'NF', photo: nicoPhoto },
  { name: 'Sergio Morán', role: 'Batería', detail: 'Batería', initials: 'SM', photo: sergioPhoto },
];

const gallery: readonly GalleryImage[] = [
  { label: '620 Trío · retrato grupal', shape: 'feature', photo: groupPhoto, alt: 'Los integrantes de 620 Trío reunidos', focus: 'center' },
  { label: 'Nico Fernández · bajo', shape: 'square', photo: nicoGalleryPhoto, alt: 'Nico Fernández tocando el bajo durante una sesión', focus: '70% center' },
  { label: 'Walter Zelaya · guitarra', shape: 'square', photo: walterGalleryPhoto, alt: 'Walter Zelaya durante una sesión de grabación', focus: '80% center' },
  { label: 'Walter Zelaya y Sergio Morán', shape: 'square', photo: walterSergioGalleryPhoto, alt: 'Walter Zelaya y Sergio Morán durante una sesión', focus: 'center' },
  { label: 'Sergio Morán · batería', shape: 'square', photo: sergioGalleryPhoto, alt: 'Sergio Morán tocando la batería durante una sesión', focus: 'center' },
];

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
    secondaryAction: { label: 'Escuchar', href: '#musica' },
  },
  sections: {
    members: { number: '01', eyebrow: 'Tripulación', title: 'Integrantes', intro: 'Tres músicos y un mismo punto de partida: la canción en movimiento.' },
    music: { number: '02', eyebrow: 'Canciones en ruta', title: 'Música', intro: 'Tres temas propios para escuchar, compartir y volver a poner en marcha.' },
    shows: { number: '03', eyebrow: 'En escena', title: 'Fechas', intro: 'Una bitácora abierta: shows compartidos y próximas paradas.' },
    gallery: { number: '04', eyebrow: 'Registro de viaje', title: 'Galería', intro: 'Luces, aire libre y momentos de música en vivo.' },
  },
  members,
  releases,
  shows,
  gallery,
  contact: { eyebrow: 'Contacto / contrataciones', title: ['Subite al', 'viaje.'] },
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/620trio' },
    { label: 'YouTube', href: 'https://www.youtube.com/@620trio' },
    { label: 'WhatsApp', href: 'https://wa.me/5491167354208' },
  ],
} as const;
