//next components
import Head from "next/head";

//components
import Card from "../components/Card";

//states
import { useState, useEffect } from "react";

//axios
import axios from "axios";

export default function Home() {
  const [advice, setAdvice] = useState();

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => setAdvice(res.data.slip))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Head>
        <title>Advice Generator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {advice ? (
        <Card
          id={advice.id}
          advice={advice.advice}
          handleGetAdvice={getAdvice}
        />
      ) : (
        ""
      )}
    </>
  );
}
