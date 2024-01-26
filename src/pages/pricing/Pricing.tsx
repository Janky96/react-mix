import Card from "./Card";
import styles from "./Pricing.module.css";

const Pricing = () => {

  const data = [
    {
      title: "Basic",
      price: "€9,99",
      features: [
        "Access to standard workouts and nutrition plans",
        "Email support"
      ]
    },
    {
      title: "Pro",
      price: "€19,99",
      features: [
        "Access to advanced workouts and nutrition plans",
        "Priority Email support",
        "Exclusive access to live Q&A sessions"
      ]
    },
    {
      title: "Ultimate",
      price: "€29,99",
      features: [
        "Access to all premium workouts and nutrition plans",
        "24/7 Priority support",
        "1-on-1 virtual coaching session every month",
        "Exclusive content and early access to new features"
      ]
    }
  ]

  return <div className={styles["cards-container"]}>
    {data.map(cardData => (<Card {...cardData}/>))}
  </div>
}

export default Pricing;