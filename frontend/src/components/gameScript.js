import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Line from '../stripes.svg';  // Path to your SVG
import '../App.css';
import '../tailwind.css';

function GameScript() {
// Fetch the gamecode from the GET
  const location = useLocation();
  const [gameCode, setGameCode] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('gameCode');
    setGameCode(code);  
  }, [location]);

  return (
    <div className="gameScript">
      <div className="bg-cyan-700 flex flex-col min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          {/* Show the user the gamecode  */}
          <a name="codeDisplay" id="codeDisplay">Game Code: {gameCode || 'Not Provided'}</a>

          {/* Below is the current implementation of lanes */}

          <div className="relative bg-gray-400 min-h-screen w-1/4 flex items-center justify-center">
            <div
              className="absolute top-0 right-0 h-full w-[10px]"
              style={{
                backgroundImage: `url(${Line})`,
                backgroundRepeat: 'repeat',
              }}
            ></div>
            Lane 1
          </div>

          <div className="relative bg-gray-400 min-h-screen w-1/4 flex items-center justify-center">
            <div
              className="absolute top-0 left-0 h-full w-[10px]"
              style={{
                backgroundImage: `url(${Line})`,
                backgroundRepeat: 'repeat',
              }}
            ></div>
            <div
              className="absolute top-0 right-0 h-full w-[10px]"
              style={{
                backgroundImage: `url(${Line})`,
                backgroundRepeat: 'repeat',
              }}
            ></div>
            Lane 2
          </div>

          <div className="relative bg-gray-400 min-h-screen w-1/4 flex items-center justify-center">
            <div
              className="absolute top-0 left-0 h-full w-[10px]"
              style={{
                backgroundImage: `url(${Line})`,
                backgroundRepeat: 'repeat',
              }}
            ></div>
            Lane 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameScript;
