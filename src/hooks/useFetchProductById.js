import { useCallback, useEffect, useState } from "react";

export const useFetchProductById = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = useCallback(async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error fetching Data");
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        getData();
    }, [getData]);

    return { data, loading, error };
};
