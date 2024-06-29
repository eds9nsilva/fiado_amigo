export function formatCurrencyToNumber(currencyString: string): number {
  // Remove the currency symbol and any commas
  const numberString = currencyString.replace('R$', '').replace(',', '.').trim();
  // Convert to number
  return parseFloat(numberString);
}