import { RefObject, useEffect } from 'react';

const useClickOutside = (ref: RefObject<HTMLInputElement>, handler: () => void) => {
    const onClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            handler();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', onClickOutside);

        return () => {
            document.removeEventListener('mousedown', onClickOutside);
        };
    });
};

export default useClickOutside;
