import { notFound } from 'next/navigation';

export default function CatchAllPage() {
  // Déclenche instantanément la page 404 locale
  notFound(); 
}