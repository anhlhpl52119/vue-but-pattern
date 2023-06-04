export const randomPick = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
export const scrollTo = (refsElement: HTMLElement, timeout?: number) => {
  setTimeout(() => {
    refsElement.scrollIntoView({ behavior: 'smooth' });
  }, timeout);
};
