import { useCallback, useState } from 'react';

interface UseToggleReturnType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export function useToggle(): UseToggleReturnType {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return { isOpen, toggle, close };
}
