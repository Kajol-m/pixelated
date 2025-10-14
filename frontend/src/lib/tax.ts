/**
 * Calculates GST tax on clothing based on total price.
 * @param totalPrice - The total price of the clothing item.
 * @returns The calculated tax amount.
 */
export function calculateClothingTax(totalPrice: number): number {
  if (totalPrice <= 0) {
    throw new Error("Total price must be greater than zero.");
  }

  const taxRate = totalPrice <= 1000 ? 0.05 : 0.12;
  const taxAmount = totalPrice * taxRate;

  // Round to 2 decimal places
  return Math.round(taxAmount * 100) / 100;
}
