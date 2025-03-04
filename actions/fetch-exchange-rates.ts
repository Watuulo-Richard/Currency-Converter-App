import { ExchangeRatesType } from "@/types/types";

export async function fetchExchangeRatesFromAPI(countryCurrencyCode:string) {
    try {
        const ExchangeRatesFromAPI = `https://v6.exchangerate-api.com/v6/37abf601c6487ad6f71f6647/latest/${countryCurrencyCode}`
        const response = await fetch(ExchangeRatesFromAPI)
        const fetchedExchangeRates = await response.json()
        console.log(fetchedExchangeRates);
        return fetchedExchangeRates as ExchangeRatesType
    } catch (error) {
        console.log(error);
        return null
    }
}