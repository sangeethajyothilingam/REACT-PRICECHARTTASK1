import "./App.css";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

var priceCards = [
  {
    plan: "FREE",
    price: "$0",
    period: "/month",
    features: [
      {
        title: "Single User",
        correct: true,
      },
      {
        title: "5GB Storage",
        correct: true,
      },
      {
        title: "Unlimited Public Projects",
        correct: true,
      },
      {
        title: "Community Access",
        correct: true,
      },
      {
        title: "Unlimited Private Projects",
        correct: false,
      },
      {
        title: "Dedicated Phone Support",
        correct: false,
      },
      {
        title: "Free Subdomain",
        correct: false,
      },
      {
        title: "Monthly Status Reports",
        correct: false,
      },
    ],
  },
  {
    plan: "PLUS",
    price: "$9",
    period: "/month",
    features: [
      {
        title: "5 Users",
        correct: true,
        highlight: true,
      },
      {
        title: "50GB Storage",
        correct: true,
      },
      {
        title: "Unlimited Public Projects",
        correct: true,
      },
      {
        title: "Community Access",
        correct: true,
      },
      {
        title: "Unlimited Private Projects",
        correct: true,
      },
      {
        title: "Dedicated Phone Support",
        correct: true,
      },
      {
        title: "Free Subdomain",
        correct: true,
      },
      {
        title: "Monthly Status Reports",
        correct: false,
      },
    ],
  },
  {
    plan: "PRO",
    price: "$49",
    period: "/month",
    features: [
      {
        title: "Unlimited Users",
        correct: true,
        highlight: true,
      },
      {
        title: "150GB Storage",
        correct: true,
      },
      {
        title: "Unlimited Public Projects",
        correct: true,
      },
      {
        title: "Community Access",
        correct: true,
      },
      {
        title: "Unlimited Private Projects",
        correct: true,
      },
      {
        title: "Dedicated Phone Support",
        correct: true,
      },
      {
        title: "Unlimited Free Subdomains",
        correct: true,
      },
      {
        title: "Monthly Status Reports",
        correct: true,
      },
    ],
  },
];

function App() {
  return (
    <section class="pricing py-5">
      <div className="container">
        <div className="row mt-3">
          {priceCards.map((card) => {
            return <Card card={card}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}
export default App;
