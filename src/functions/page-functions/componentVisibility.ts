export function componentVisibility(id: string, status: 'hide' | 'show') {
  const component: HTMLElement = document.getElementById(id)!;

  const selection = status;

  if (selection == 'show') {
    component.removeAttribute('style');
  } else {
    component.setAttribute('style', 'display: none');
  }
}
