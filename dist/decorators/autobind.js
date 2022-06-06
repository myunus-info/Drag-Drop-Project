export function autobind(target, methodName, _) {
    var originalMethod = target[methodName];
    var adjDescriptor = {
        configurable: true,
        get: function () {
            return originalMethod.bind(this);
        },
    };
    return adjDescriptor;
}
