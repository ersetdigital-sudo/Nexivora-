export function rupiah(n: number): string {
  return "Rp " + n.toLocaleString("id-ID");
}

export function formatOrderId(): string {
  const stamp = Date.now().toString(36).toUpperCase().slice(-6);
  return "TPX-" + stamp + Math.floor(Math.random() * 90 + 10);
}
