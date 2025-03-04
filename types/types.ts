export type ExchangeRatesType = {
    base_code: "string",
    conversion_rates: ConversionRates
}

type ConversionRates = {
    [currencyCode: string] : number
}