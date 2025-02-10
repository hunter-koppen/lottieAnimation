import { useEffect, useState } from "react";

export const useFetchRemoteJson = url => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        if (!url) return;

        // eslint-disable-next-line space-before-function-paren
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResponse(json);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [url]);

    return { response };
};
