/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    const person = { ...data };

    if (person.gender === 'female') {
        delete person.age;
    } else if (person.gender === 'male') {
        if (!('income' in person)) {
            person.income = 100000;
        }
    }

    return person;
}

/*
В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    const allKeys = new Set([
        ...Object.keys(obj1),
        ...Object.keys(obj2),
        ...Object.keys(obj3),
    ]);

    return Array.from(allKeys).sort();
}

/*
Верните в результате работы функции массив с клонами объекта obj.
При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
Количество клонов - count.
*/
export function objectClone(obj, count) {
    const result = [];

    for (let i = 0; i < count; i++) {
        const clone = JSON.parse(JSON.stringify(obj));
        clone.id = i; // Начинаем с 0
        result.push(clone);
    }

    return result;
}
