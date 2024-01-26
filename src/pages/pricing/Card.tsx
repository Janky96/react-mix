import styles from "./Pricing.module.css";
import { Check } from "@phosphor-icons/react";

type Prop = {
  title: string;
  price: string;
  features: string[];
}

const Card = ({ title, price, features }: Prop) => {

  return <div className={styles["card"]}>
    <div className={styles["container"]}>
      <span style={{ fontSize: '19px' }}>{title}</span>
      <span style={{ fontSize: '31px', fontWeight: '700'}}>{price}</span>
      {features.map(feature => (<div style={{ fontSize: '17px' }}><Check weight="bold" color="#ECEFF1" size="20" style={{ paddingRight: '5px', verticalAlign: 'center'}}/><span>{feature}</span></div>))}
    </div>
    <button className={styles["card-btn"]}>
      Get started
    </button>
  </div>
}

export default Card;