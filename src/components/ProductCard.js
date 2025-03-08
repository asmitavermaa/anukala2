import React from 'react';

const ProductCard = ({ painting }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={painting.imageUrl}
          alt={painting.title}
          className="object-cover object-center transition-opacity group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">
            <a href={`/painting/${painting.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {painting.title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{painting.artist}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${painting.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;