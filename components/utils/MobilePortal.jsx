'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const MobilePortal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const target = document.getElementById('mobile-nav-root');
  return target ? createPortal(children, target) : null;
};

export default MobilePortal;
