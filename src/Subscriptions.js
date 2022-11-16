import React, { useState } from "react";

export default function Subscriptions() {
  const [subscribed, setSubscribed] = useState(false);
  function handleClick() {
    setSubscribed(!subscribed);
  }

  return (
    <div>
      <p>{subscribed ?
        "Thanks for subscribing!" :
        "Click below to subscribe"}
      </p>
      <button onClick={handleClick}>
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
    </div>
  );
}

