'use client';

import type { CSSProperties } from 'react';
import { useState } from 'react';
import { PawPrint } from 'lucide-react';

const pawTrails = [
  { x: 20, y: -18, delay: 0, rotate: 30, tone: 'cyan' },
  { x: 42, y: -30, delay: 65, rotate: 38, tone: 'pink' },
  { x: 68, y: -36, delay: 130, rotate: 30, tone: 'cyan' },
  { x: 25, y: 3, delay: 20, rotate: 86, tone: 'pink' },
  { x: 51, y: 4, delay: 85, rotate: 96, tone: 'cyan' },
  { x: 78, y: 8, delay: 150, rotate: 87, tone: 'pink' },
  { x: 19, y: 20, delay: 40, rotate: 140, tone: 'cyan' },
  { x: 41, y: 38, delay: 105, rotate: 150, tone: 'pink' },
  { x: 65, y: 54, delay: 170, rotate: 142, tone: 'cyan' },
  { x: -15, y: 18, delay: 60, rotate: 215, tone: 'pink' },
  { x: -27, y: 35, delay: 125, rotate: 205, tone: 'cyan' },
  { x: -38, y: 53, delay: 190, rotate: 214, tone: 'pink' },
] as const;

export function AnimatedLogo() {
  const [burstId, setBurstId] = useState(0);

  return (
    <button
      className="brand"
      type="button"
      aria-label="Запустить анимацию с неоновыми кошачьими лапками"
      onClick={() => setBurstId((current) => current + 1)}
    >
      <img
        src="images/ekaterina-kozina-logo.png"
        alt=""
        width="180"
        height="180"
        draggable="false"
      />
      {burstId > 0 && (
        <span className="logo-paw-burst" key={burstId} aria-hidden="true">
          {pawTrails.map((paw, index) => (
            <PawPrint
              className={`logo-paw logo-paw-${paw.tone}`}
              key={`${burstId}-${index}`}
              strokeWidth={2.2}
              style={{
                '--paw-x': `${paw.x}px`,
                '--paw-y': `${paw.y}px`,
                '--paw-delay': `${paw.delay}ms`,
                '--paw-rotate': `${paw.rotate}deg`,
              } as CSSProperties}
            />
          ))}
        </span>
      )}
    </button>
  );
}
