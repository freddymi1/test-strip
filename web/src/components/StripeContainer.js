import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51LMz7LHHPOnTqKjqXnyLyqx845opVnM0Fb4uZFUvVw2mvzDSRPAlbVKxO7uDacp6g6tJowJqe8k7hYADXb8yt0HN00TvpdviLK"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
