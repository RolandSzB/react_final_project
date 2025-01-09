import * as React from "react";
import SubscriptionForm from "./subscriptionForm";
import AboutUs from "./aboutUs";

export default function Footer() {
  return (
    <div className="flex flex-col content-center items-center bg-gradient-to-br from-gray-400 to-emerald-600">
      <SubscriptionForm />
      <AboutUs />
    </div>
  );
}
