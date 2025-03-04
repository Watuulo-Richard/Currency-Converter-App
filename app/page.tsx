import CurrencyConverterModal from "@/components/currency-converter-modal"

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-3xl shadow-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Currency Converter</h1>
        <p className="text-gray-500 mb-6 text-center">Click the button below to open the currency converter</p>
        <div className="flex justify-center">
          <CurrencyConverterModal />
        </div>
      </div>
    </main>
  )
}

