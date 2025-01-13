import { useState, useEffect } from 'react';

export const useSession = () => {
    const [session, setSession] = useState(false)

    // Efeito para carregar o valor inicial do localStorage (não é mais necessário)
    useEffect(() => {
        setSession((prev) => prev)
    }, [session]);

    return { session, setSession };
};
