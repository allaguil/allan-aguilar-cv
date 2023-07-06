import { FC, useEffect, useState } from "react";

import { DB_HOST, DB_PORT } from '../config';

interface CardData {
  _id: string;
  company: string;
  role: string;
  description: string;
  img: string;
  technologies: string;
  urlValue: string;
  url: string;
  year: string;
  order: number;
}

export const useFetchWorkData = () => {
  const [data, setData] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const url = `http://${DB_HOST}:${DB_PORT}`;
        const response = await fetch(`${url}/api/data`);
        const result = await response.json();
        setData(result);

      } catch (error) {
        console.error("Error fetching data in the Front End:", error);
      }

    };

    fetchData();
  }, []);

  return data;
};

