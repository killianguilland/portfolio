"use client";
import { useState, useEffect } from 'react';
import ChromeDinoGame from 'react-chrome-dino-ts';
import 'react-chrome-dino-ts/index.css';

export default function Game() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Or a loading spinner

  return <ChromeDinoGame hideInstructions />;
}