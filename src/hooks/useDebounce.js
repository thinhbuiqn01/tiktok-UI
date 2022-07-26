import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value); /* gia tri mat dinh ='' */

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value); /* chờ khoảng thời gian {delay} de set lai value */
        }, delay);

        /* clear timeout  */
        return () => clearTimeout(handler);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debouncedValue;
}

export default useDebounce;
