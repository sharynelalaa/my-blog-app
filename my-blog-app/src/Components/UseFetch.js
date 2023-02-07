import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setData(data);
                    setisPending(false);
                });
        }, 1000);
    }, [url]);

    return { data, isPending };
};

export default useFetch;
