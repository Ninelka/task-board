import React, { ReactNode, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  isShow: boolean;
  children: ReactNode;
  id: string;
}

const Portal: React.FC<IPortal> = ({ isShow, children, id }) => {
  const [showPortal, setShowPortal] = React.useState(false);
  const portal = React.useRef<any>(null);

  useLayoutEffect(() => {
    setShowPortal(isShow);
  }, [isShow]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useLayoutEffect(() => {
    const originalBodyOverflow = window.getComputedStyle(
      document.body
    ).overflow;

    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = originalBodyOverflow);
  }, [isShow]);

  if (Boolean(typeof window) && showPortal) {
    portal.current = portal.current ?? document.getElementById(id);

    if (portal.current) {
      return createPortal(children, portal.current);
    }
  }

  return null;
};

export default Portal;
