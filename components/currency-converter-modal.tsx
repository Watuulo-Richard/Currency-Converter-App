"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Loader2, RefreshCw, ArrowLeftRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Card } from "@/components/ui/card"
import FormSelectInput from "./FormSelectInput"
import currencyCodes from "@/lib/Countries-Array/coutries"
import { fetchExchangeRatesFromAPI } from "@/actions/fetch-exchange-rates"
import { MarqueeDemoVertical } from "./marquee"
import { MarqueeDemo } from "./marquee-two"

type CurrencyFormValues = {
  amount: string
}

export default function CurrencyConverterModal() {
  
  const importedCountries = currencyCodes.map((countryCode) => ({
    label : countryCode.label,
    value : countryCode.value
  }));
  
  // State for selected currencies
  const [fromCurrency, setFromCurrency] = useState(currencyCodes[0])
  const [toCurrency, setToCurrency] = useState(currencyCodes[0])
  const [amount, setAmount] = useState("100")
  const [conversionResult, setConversionResult] = useState<number>()
  async function handleFetchExchangeRatesAPI(){
    const fetchedExchangeRates = await fetchExchangeRatesFromAPI(fromCurrency.value)
    console.log(fetchedExchangeRates?.conversion_rates, toCurrency.value);
    const rates = fetchedExchangeRates?.conversion_rates
    if(!rates)return
    console.log(rates[toCurrency.value]*Number(amount));
    setConversionResult(rates[toCurrency.value]*Number(amount))
  }
  // Form setup with react-hook-form
  const {
    register,
    handleSubmit,
    // formState: { isSubmitting },
  } = useForm<CurrencyFormValues>({
    defaultValues: {
      amount: "100.00",
    },
  })

  // Currency options
  // const currencyOptions = [
  //   { value: "USD", label: "USD", image: "🇺🇸" },
  //   { value: "EUR", label: "EUR", image: "🇪🇺" },
  //   { value: "GBP", label: "GBP", image: "🇬🇧" },
  //   { value: "JPY", label: "JPY", image: "🇯🇵" },
  //   { value: "CAD", label: "CAD", image: "🇨🇦" },
  // ]
  // State for selected currencies
  // const [fromCurrency, setFromCurrency] = useState({ value: "UGX", label: "UGX", image: "🇺g" })
  // const [toCurrency, setToCurrency] = useState({ value: "EUR", label: "EUR", image: "🇪🇺" })

  

  // State for conversion result
  const [isConverting, setIsConverting] = useState(false)
  // const [conversionResult, setConversionResult] = useState({
  //   exchangeRate: "0.94",
  //   tax: "2.00",
  //   fee: "1.00",
  //   total: "90.7",
  // })

  // Function to swap currencies
  const swapCurrencies = () => {
    const temp = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(temp)
  }

  // Mock conversion function
  const onSubmit = async () => {
    setIsConverting(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsConverting(false)
    // In a real app, you would calculate these values based on actual conversion rates
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full">
          <RefreshCw className="h-4 w-4 mr-2" />
          Exchange
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-xl p-0">
        <div className="p-6 space-y-6">
          <DialogHeader className="flex flex-col items-center justify-between p-0">
            {/* <div className=""></div>
            <div className=""></div> */}
            <div className="flex  items-center">
              <RefreshCw className="h-5 w-5 mr-2" />
              <DialogTitle className="text-xl font-medium">Exchange</DialogTitle>
            </div>
            <Button variant="outline" className="rounded-full bg-gray-50 text-gray-700">
             <MarqueeDemoVertical/>
            </Button>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Card className="border-0 shadow-none">
              <div className="flex items-center bg-white rounded-lg border">
                <div className="w-1/2">
                  <FormSelectInput
                    label="From"
                    options={importedCountries}
                    option={fromCurrency}
                    setOption={setFromCurrency}
                    labelShown={false}
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={swapCurrencies}
                    className="rounded-full h-8 w-8"
                  >
                    <ArrowLeftRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="w-1/2">
                  <FormSelectInput
                    label="To"
                    options={importedCountries}
                    option={toCurrency}
                    setOption={setToCurrency}
                    labelShown={false}
                  />
                </div>
              </div>

              <div className="mt-4 p-4 border rounded-lg">
                <div className="text-center">
                  <div className="relative">
                    {/* <span className="absolute left-0 top-1 text-3xl font-bold">$</span> */}
                    <Input
                      {...register("amount")}
                      type="number"
                      value={amount}
                      className="text-center text-4xl font-bold border-none shadow-none focus-visible:ring-0 h-auto py-0"
                      defaultValue="100.00"
                      onChange={(e)=>setAmount(e.target.value)}
                    />
                  </div>
                  <p className="text-gray-500 mt-2"> {fromCurrency.value} = {conversionResult}</p>
                </div>
              </div>

              {/* <div className="text-center text-sm text-gray-500 mt-2"> */}
                {/* 1 {fromCurrency.value} = {conversionResult.exchangeRate} {toCurrency.value} */}
              {/* </div> */}
            </Card>

            <div className="space-y-3 mt-4">
              <MarqueeDemo/>
            </div>

            <Button onClick={()=>handleFetchExchangeRatesAPI()} type="submit" className="w-full mt-6 rounded-lg" disabled={isConverting}>
              {isConverting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Converting...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Exchange
                </>
              )}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

