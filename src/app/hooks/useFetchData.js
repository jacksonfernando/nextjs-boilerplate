import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = (endPoint, initialHeader) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false)
  const [header, setHeader] = useState(initialHeader)
  const [error, setError] = useState(null)
  const [refetchIndex, setRefetchIndex] = useState(0)

  const refetch = () => setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1)

  const fetchData = useCallback(async () => {
    try {
      const { data: response } = await axios.get(endPoint, header);
      setData(response);
    } catch (error) {
      setError(error)
    }
    setLoading(false);
  }, [header, endPoint]);

  useEffect(() => {
    setIsHydrated(true)
    if (isHydrated) {
      fetchData();
    }
  }, [isHydrated, header, refetchIndex, fetchData]);

  return {
    data,
    loading,
    setHeader,
    header,
    refetch,
    error
  };
};

export default useFetchData;
