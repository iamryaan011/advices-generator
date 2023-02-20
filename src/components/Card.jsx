//next components
import Image from "next/image";

//styles
import styles from "../styles/sass/Card.module.scss";

const Card = ({ id, advice, handleGetAdvice }) => {
  const handleRefreshAdvice = () => {
    handleGetAdvice();
  };

  return (
    <section className={styles.Card}>
      <article>
        <h1>ADVICE #{id}</h1>

        <p>{advice}</p>
      </article>

      <Image
        src={"/images/pattern-divider-desktop.svg"}
        alt={"divider"}
        width={300}
        height={16}
        priority
        id={styles.divider}
      />

      <button onClick={handleRefreshAdvice}>
        <Image
          src={"/images/icon-dice.svg"}
          alt={"icon dice button"}
          priority
          width={18}
          height={18}
        />
      </button>
    </section>
  );
};

export default Card;
