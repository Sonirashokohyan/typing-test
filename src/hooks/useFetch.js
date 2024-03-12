import { useEffect, useState } from "react";

function useFetch(url, x, y) {
  let [loading, setLoading] = useState(false);
  const [product, setProduct] = useState("");
  //   const token = localStorage.getItem("token");
  setLoading(true);
  useEffect(() => {
    let getproduct = async () => {
      if (x) {
        try {
          console.log(url, x, y);
          let getp = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              //   authorization: token,
            },
            body: JSON.stringify({ x, y }),
          });
          getp = await getp.json();

          if (getp) {
            setLoading(false);
            setProduct(getp);
          } else {
            setProduct(false);
          }
        } catch (error) {
          setProduct(false);
        }
      } else {
        setProduct(false);
      }
    };
    getproduct();
  }, [y]);
  return { product, loading };
}

export default useFetch;
