// Приклад використання декораторів класу
@logged
class Calculator {
}

function logged(target: Function) {
  console.log(`Клас ${target.name} був створений.`);
}

// Приклад використання декораторів властивостей
class PersonClass {
    @readonly
    name: string;
  
    constructor(name: string) {
        this.name = name;
    }
}
  
function readonly(target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, { writable: false });
}

// Приклад використання декораторів методів
class MathUtils {
    @logExecutionTime
    static add(a: number, b: number) {
      return a + b;
    }
}
  
function logExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const start = Date.now();
        const result = originalMethod.apply(this, args);
        const executionTime = Date.now() - start;

        console.log(`Метод ${propertyKey} виконався за ${executionTime} мс.`);
        return result;
    };

    return descriptor;
}

// Приклад використання декораторів параметрів
class Greeting {
    greet(@uppercase name: string) {
      console.log(`Привіт, ${name}!`);
    }
}
  
function uppercase(target: any, propertyKey: string, parameterIndex: number) {
    const method = target[propertyKey];

    target[propertyKey] = function (...args: any[]) {
        const name = args[parameterIndex].toUpperCase();
        args[parameterIndex] = name;
        method.apply(this, args);
    };
}
  
  