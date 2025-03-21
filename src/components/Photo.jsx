import { useEffect, useState } from 'react';
import photo from '../assets/photo.png'; // Mengimpor gambar

const Photo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative">
      <div
        className={`xl:w-[500px] xl:h-[300px] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} -mt-16`}
      >
        <img
          src={photo} 
          alt="Photo"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default Photo;
