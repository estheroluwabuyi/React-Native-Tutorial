import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const useFetch = (url: string) => {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return { data };
};

export default useFetch;
