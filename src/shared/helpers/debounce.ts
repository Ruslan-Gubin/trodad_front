
export function debounce<T extends (...args: any[]) => void>(func: T, timeout = 400) {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => { 
      //@ts-ignore
      func.apply(this, args);
    }, timeout);
  };
}