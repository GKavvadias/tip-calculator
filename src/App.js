import { useState } from "react";
import { Bill } from "./components/Bill";
import { Opinion } from "./components/Opinion";
import { Payment } from "./components/Payment";
import { Reset } from "./components/Reset";

export default function App() {
  const [bill, setBill] = useState("");
  const [myOpinion, setMyOpinion] = useState(0);
  const [friendsOpinion, setFriendsOpinion] = useState(0);

  const tip = bill * ((myOpinion + friendsOpinion) / 2 / 100);

  function handleReset() {
    setBill(0);
    setMyOpinion(0);
    setFriendsOpinion(0);
  }

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Opinion
        text="How did you like the service?"
        opinion={myOpinion}
        setOpinion={setMyOpinion}
      />
      <Opinion
        text="How did your friend like the service?"
        opinion={friendsOpinion}
        setOpinion={setFriendsOpinion}
      />
      <Payment bill={bill} tip={tip} />
      <Reset handleReset={handleReset} />
    </div>
  );
}
