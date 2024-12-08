import axios from 'axios'
import React from 'react'
import { BaseUrl } from '../Utils/BaseUrl'


const PayButton = ({ cartItems }) => {

    axios.defaults.withCredentials = true
    const handleCheckOut = async () => {
        try {
            const response = await axios.post(`${BaseUrl}/payments/create-checkout-session`, { cartItems })
            if (response.data.url) {
				window.location.href = response.data.url;
			} else {
				console.error('Checkout URL not found in response');
			}
        } catch (err) {
            console.log(err)
        }
    }

    console.log(cartItems)
    return (
        <div>
            <button onClick={() => handleCheckOut()}>
                Checkout
            </button>
        </div>
    )
}

export default PayButton