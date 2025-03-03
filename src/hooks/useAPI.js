import { useState, useEffect } from "react";

const useAPI = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("BAD RESPONSE FROM SERVER");
            const jsonData = await response.json()
            setData(jsonData);
        
        } catch {
            error => setError(error)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useAPI;