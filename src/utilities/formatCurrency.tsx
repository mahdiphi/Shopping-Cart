const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
    currency: "USD", style:"currency"
})

function formatCurrency(number: number) {
  return (
    CURRENCY_FORMATER.format(number)
  )
}

export default formatCurrency