import React from 'react';
import ProductCard from './ProductCard';

export const sampleArtworks = [
  {
    id: 1,
    title: 'Radha Krishna on Swing',
    artist: 'Anukala',
    imageUrl: '/images/radha-krishna-swing-canvas6.jpg',
    price: 2500,
    medium: 'Oil on Canvas',
    dimensions: '36" × 48"',
    description: 'A divine portrayal of Radha and Krishna on a swing, capturing their eternal love and playfulness in vibrant colors.'
  },
  {
    id: 2,
    title: 'Knife Radha Krishna',
    artist: 'Anukala',
    imageUrl: '/images/Knife Radha Krishna.jpg',
    price: 1800,
    medium: 'Palette Knife on Canvas',
    dimensions: '30" × 40"',
    description: 'A unique interpretation of Radha Krishna using palette knife technique, creating rich texture and depth.'
  },
  {
    id: 3,
    title: 'Serene Buddha',
    artist: 'Anukala',
    imageUrl: '/images/black-buddha.jpg',
    price: 3200,
    medium: 'Acrylic on Canvas',
    dimensions: '40" × 60"',
    description: 'A powerful black and white portrayal of Buddha, emanating peace and tranquility.'
  },
  {
    id: 4,
    title: 'Lotus Harmony',
    artist: 'Anukala',
    imageUrl: '/images/lotus-circle-final.jpg',
    price: 2800,
    medium: 'Mixed Media',
    dimensions: '24" × 36"',
    description: 'A circular composition featuring lotus flowers, symbolizing purity and enlightenment.'
  },
  {
    id: 5,
    title: 'Blue Abstract',
    artist: 'Anukala',
    imageUrl: '/images/blue-abstract-2.jpg',
    price: 4200,
    medium: 'Acrylic on Canvas',
    dimensions: '48" × 48"',
    description: 'An energetic abstract composition in shades of blue, creating a sense of movement and depth.'
  },
  {
    id: 6,
    title: 'Textured Radha Krishna',
    artist: 'Anukala',
    imageUrl: '/images/TEXTURE radha krishna.jpg',
    price: 3500,
    medium: 'Mixed Media on Canvas',
    dimensions: '36" × 54"',
    description: 'A textured interpretation of Radha Krishna, combining traditional imagery with contemporary techniques.'
  },
  {
    id: 7,
    title: 'Tranquil Buddha',
    artist: 'Anukala',
    imageUrl: '/images/budhha.jpg',
    price: 2900,
    medium: 'Oil on Canvas',
    dimensions: '30" × 40"',
    description: 'A serene portrayal of Buddha in meditation, expressing inner peace and spiritual awakening.'
  },
  {
    id: 8,
    title: 'Water Lily',
    artist: 'Anukala',
    imageUrl: '/images/lily.jpg',
    price: 2200,
    medium: 'Acrylic on Canvas',
    dimensions: '24" × 36"',
    description: 'A delicate water lily floating on a tranquil pond, capturing the beauty of nature.'
  },
  {
    id: 9,
    title: 'Golden Buddha',
    artist: 'Anukala',
    imageUrl: '/images/oil-buddha.jpg',
    price: 3800,
    medium: 'Oil on Canvas',
    dimensions: '36" × 48"',
    description: 'A majestic portrayal of Buddha in golden hues, symbolizing enlightenment and wisdom.'
  },
  {
    id: 10,
    title: 'Tree of Life',
    artist: 'Anukala',
    imageUrl: '/images/tree canvas.jpg',
    price: 2600,
    medium: 'Mixed Media on Canvas',
    dimensions: '30" × 40"',
    description: 'A symbolic representation of the tree of life, showcasing the interconnectedness of all living things.'
  },
  {
    id: 11,
    title: 'Exotic Parrot',
    artist: 'Anukala',
    imageUrl: '/images/parrot-2-w.jpg',
    price: 2400,
    medium: 'Watercolor',
    dimensions: '24" × 36"',
    description: 'A vibrant portrayal of an exotic parrot, bringing tropical colors and energy to life.'
  },
  {
    id: 12,
    title: 'Graceful Swan',
    artist: 'Anukala',
    imageUrl: '/images/swan.jpg',
    price: 2300,
    medium: 'Acrylic on Canvas',
    dimensions: '24" × 36"',
    description: 'An elegant swan gliding through water, symbolizing grace and natural beauty.'
  }
];

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-serif text-center mb-12">Featured Artworks</h2>
      <div className="masonry-grid">
        {sampleArtworks.map((painting) => (
          <div key={painting.id} className="mb-4">
            <ProductCard painting={painting} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;