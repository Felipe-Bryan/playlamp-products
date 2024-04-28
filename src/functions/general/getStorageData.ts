export function getStorageData(key: string) {
  const data = JSON.parse(localStorage.getItem(key) || '[]');
  return data;
}
