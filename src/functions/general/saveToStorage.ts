export function saveToStorage(key: string, array: any[]): void {
  localStorage.setItem(key, JSON.stringify(array));
}
