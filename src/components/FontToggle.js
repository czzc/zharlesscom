'use client';
import { useFont } from '../contexts/FontContext';

export default function FontToggle() {
  const { useSpaceGrotesk, toggleFont } = useFont();

  return (
    <button
      onClick={toggleFont}
      className="fixed top-4 left-4 z-50 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center text-white font-bold text-sm"
      style={{
        background: useSpaceGrotesk 
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      }}
      title={`Switch to ${useSpaceGrotesk ? 'Chivo' : 'Space Grotesk'} font`}
    >
      {useSpaceGrotesk ? 'C' : 'S'}
    </button>
  );
}