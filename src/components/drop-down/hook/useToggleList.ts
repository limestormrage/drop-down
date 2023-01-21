import { useEffect, useRef, useState } from 'react';

interface IUseToggleList {
  isOpenList: boolean;
  setIsOpenList: React.Dispatch<React.SetStateAction<boolean>>;
  containerRef: React.RefObject<HTMLDivElement>
}

export function useToggleList(): IUseToggleList {
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // добавляет обработчик для закрытия при нажатии вне компонента
  useEffect(() => {
    const handleClick = (e: Event): void => {
      if (!(e.target instanceof HTMLElement)) {
        return;
      }

      if (!containerRef.current?.contains(e.target) && isOpenList) {
        setIsOpenList(false);
      }
    };

    if (isOpenList) {
      document.addEventListener('click', handleClick);
    }

    return (() => document.removeEventListener('click', handleClick));
  }, [isOpenList]);

  return ({
    isOpenList,
    setIsOpenList,
    containerRef,
  });
}
