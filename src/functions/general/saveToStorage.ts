export function saveToStorage(key: string, array: any[]) {
  localStorage.setItem(key, JSON.stringify(array));
}
