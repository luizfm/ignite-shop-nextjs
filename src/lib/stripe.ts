import Stripe from 'stripe'

console.log('aqui info', process.env.STRIPE_SECRET_KEY, process.env.NEXT_URL, process.env)

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
    appInfo: {
        name: 'Ignite Shop'
    }
})