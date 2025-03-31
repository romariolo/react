import { useState, useEffect } from "react";

export const useFetch = (url) =>{
    const [data, setData] = useState(null)

    //Refatorando POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //loading
    const [load, setLoad] = useState(false)

    //Tratando erros
    const [error, setError] = useState(null)

    //Deletando produtos
    const [intemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(data)

            });
            setMethod(method);
            //Removendo produto
            
        }else if(method === "DELETE"){
            setConfig({
                method,
                headers: {"Content-type": "application/json"},

            });
            setMethod(method);
            setItemId(data);
            
        }
    }

    useEffect(() =>{

        
        const fetchData = async () =>{
            setLoad(true)
            
            try {
                const res = await fetch(url)
                const json = await res.json()

                setData(json)
            } catch (error) {
                setError("Houve algum erro ao carregar os dados!")
            }

        setLoad(false)

        }

        fetchData();
        
    },[url, callFetch])

    //Refatorando POST
    useEffect(() => {
      const httpRequest = async () =>{
        if(method === "POST"){

            let fechtOptions = [url, config]
    
            const res = await fetch(...fechtOptions);
            const json = await res.json();
    
            setCallFetch(json)
            }else if(method === "DELETE"){
                const deleteUrl = `${url}/${intemId}`;

                const res = await fetch(deleteUrl, config);

                const json = res.json()

                setCallFetch(json)
            }
    
      }

      httpRequest();

    },[config, method, url])

    return {data, httpConfig, load, error};
}
