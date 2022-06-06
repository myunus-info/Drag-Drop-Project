export function autobind(target: any, methodName: string, _: PropertyDescriptor) {
  const originalMethod = target[methodName];
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return originalMethod.bind(this);
    },
  };
  return adjDescriptor;
}
