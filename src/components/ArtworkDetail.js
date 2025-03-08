import React from 'react';
import { useParams } from 'react-router-dom';
import { sampleArtworks } from './Gallery';

const ArtworkDetail = () => {
  const { id } = useParams();

  // In a real application, this would fetch data from an API
  // For now, we'll use the sample data from the Gallery component
  const findArtwork = () => {
    const artwork = sampleArtworks.find(art => art.id === parseInt(id));
    return artwork || null;
  };

  const artwork = findArtwork();

  if (!artwork) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-xl">Artwork not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-serif mb-4">{artwork.title}</h1>
          <p className="text-xl text-gray-600 mb-6">by {artwork.artist}</p>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800">{artwork.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Medium</h3>
                <p className="mt-1">{artwork.medium}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Dimensions</h3>
                <p className="mt-1">{artwork.dimensions}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <p className="text-3xl font-medium text-gray-900">${artwork.price}</p>
            <button
              className="mt-6 w-full bg-primary text-white py-3 px-8 rounded-md hover:bg-accent transition-colors duration-300"
              onClick={() => alert('Contact gallery for purchase details')}
            >
              Inquire About This Piece
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;