export function getStorageData(key: string): void {
  const data = JSON.parse(localStorage.getItem(key) || '[]');
  return data;
}
