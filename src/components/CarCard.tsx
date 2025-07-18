import React from 'react';
import { Car } from '../types';
import { Users, Zap, Settings, Fuel } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onSelect: (car: Car) => void;
  isSelected: boolean;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onSelect, isSelected }) => {
  return (
    <div 
      className={`bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        isSelected ? 'ring-4 ring-blue-500 dark:ring-blue-400 ring-opacity-50' : ''
      }`}
      onClick={() => onSelect(car)}
    >
      <div className="relative">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white dark:bg-dark-700 bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{car.type}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{car.name}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Users className="w-4 h-4 mr-2" />
            <span className="text-sm">{car.seats} Seats</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Settings className="w-4 h-4 mr-2" />
            <span className="text-sm">{car.transmission}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Fuel className="w-4 h-4 mr-2" />
            <span className="text-sm">{car.fuel}</span>
          </div>
          <div className="flex items-center text-blue-600 dark:text-blue-400">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">${car.pricePerDay}/day</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Features:</h4>
          <div className="flex flex-wrap gap-1">
            {car.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs"
              >
                {feature}
              </span>
            ))}
            {car.features.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">+{car.features.length - 3} more</span>
            )}
          </div>
        </div>
        
        <div className={`w-full py-2 px-4 rounded-lg text-center font-semibold transition-colors ${
          isSelected 
            ? 'bg-blue-600 dark:bg-blue-500 text-white' 
            : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
        }`}>
          {isSelected ? 'Selected' : 'Select Car'}
        </div>
      </div>
    </div>
  );
};