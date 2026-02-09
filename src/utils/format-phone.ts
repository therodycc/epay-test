export function formatPhone(phone: string): string {
  if (!phone) return "";

  // separar extensión (x12345)
  const [numberPart, extPart] = phone.split(/x/i);

  // dejar solo números del teléfono principal
  const digits = numberPart.replace(/\D/g, "");

  // country + area + local
  const country = digits.length === 11 ? digits[0] : "1";
  const area = digits.slice(-10, -7);
  const prefix = digits.slice(-7, -4);
  const line = digits.slice(-4);

  let formatted = `+${country} (${area}) ${prefix}-${line}`;

  if (extPart) {
    formatted += ` ext. ${extPart.trim()}`;
  }

  return formatted;
}
