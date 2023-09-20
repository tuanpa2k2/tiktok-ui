import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebounedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;
