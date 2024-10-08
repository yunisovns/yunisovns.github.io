/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
type Category = {
    id: string;
    name: string;
    photo?: string;
  };
  
  type Product = {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    oldPrice?: number;
    price: number;
    category: Category;
  };
  
  type Cost = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Cost';
  };
  
  type Profit = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Profit';
  };
  
  type OperationValue = Cost | Profit;
  
  type Operation = {
    type: 'Cost' | 'Profit';
    value: OperationValue;
  };
  
  /**
   * Создает случайный продукт (Product).
   * Принимает дату создания (строка)
   * */
  export const createRandomProduct = (createdAt: string): Product => {
    return {
      id: Math.random().toString(),
      name: `Product ${Math.random().toString()}`,
      photo: `https:${Math.random().toString()}`,
      desc: `Product ${Math.random().toString()}`,
      createdAt: createdAt,
      price: Math.random(),
      oldPrice: Math.random(),
      category: {
        id: Math.random().toString(),
        name: `Category ${Math.random().toString()}`,
        photo: `https:${Math.random().toString()}`,
      },
    };
  };
  
  /**
   * Создает случайную операцию (Operation).
   * Принимает дату создания (строка)
   * */
  export const createRandomOperation = (createdAt: string): Operation => {
    const operationType: 'Cost' | 'Profit' = Math.random() < 0.5 ? 'Cost' : 'Profit';
    const randomOperation: OperationValue = {
      id: Math.random().toString(),
      name: `Operation ${Math.random().toString()}`,
      desc: `Description ${Math.random().toString()}`,
      createdAt: createdAt,
      amount: Math.random(),
      category: {
        id: Math.random().toString(),
        name: `Category ${Math.random().toString()}`,
        photo: `https:${Math.random().toString()}`,
      },
      type: operationType
    };
    return {type: operationType, value: randomOperation};
  };
  