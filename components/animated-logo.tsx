'use client';

import type { CSSProperties } from 'react';
import { useState } from 'react';
import { PawPrint } from 'lucide-react';

const pawTrail = [
  { x: 42, y: -6, delay: 0, rotate: 39, tone: 'cyan' },
  { x: 66, y: 7, delay: 110, rotate: 51, tone: 'pink' },
  { x: 90, y: -7, delay: 220, rotate: 40, tone: 'cyan' },
  { x: 114, y: 6, delay: 330, rotate: 50, tone: 'pink' },
  { x: 138, y: -6, delay: 440, rotate: 39, tone: 'cyan' },
  { x: 162, y: 7, delay: 550, rotate: 51, tone: 'pink' },
  { x: 186, y: -7, delay: 660, rotate: 40, tone: 'cyan' },
  { x: 210, y: 6, delay: 770, rotate: 50, tone: 'pink' },
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
          {pawTrail.map((paw, index) => (
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
