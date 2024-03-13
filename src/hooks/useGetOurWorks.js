import { useDidMount } from "@/hooks";
import { useEffect, useState } from "react";
import firebase from "@/services/firebase";

const useGetOurWorks = (itemsCount) => {
  const [ourWorks, setOurWorks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  const fetchOurWorks = async () => {
    try {
      setLoading(true);
      setError("");

      const docs = await firebase.getOurWorks(itemsCount);

      if (docs.empty) {
        if (didMount) {
          setError("No featured products found.");
          setLoading(false);
        }
      } else {
        const items = [];

        docs.forEach((snap) => {
          const data = snap.data();
          items.push({ id: snap.ref.id, ...data });
        });

        if (didMount) {
          setOurWorks(items);
          setLoading(false);
        }
      }
    } catch (e) {
      if (didMount) {
        setError("Failed to fetch featured products");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (ourWorks.length === 0 && didMount) {
      fetchOurWorks();
    }
  }, []);

  return {
    ourWorks,
    fetchOurWorks,
    isLoading,
    error
  };
};

export default useGetOurWorks;
