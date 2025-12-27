import { useState } from "react";
import OrderForm from "../components/Order/orderform";
import Confirmation from "../components/Order/confirmation";

export default function Order() {
  const [confirmation, setConfirmation] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-50">
      {!confirmation ? (
        <OrderForm onConfirm={setConfirmation} />
      ) : (
        <Confirmation
          data={confirmation}
          reset={() => setConfirmation(null)}
        />
      )}
    </div>
  );
}
