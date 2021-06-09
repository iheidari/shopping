import { createSourceEventStream } from 'graphql'

export const Add = (num1 = 0, num2 = 0) => {
    return num1 + num2
}

// test('Add undefined with a number', () => {
//     const result = Add(undefined, 3)
//     expect(result).toBe(3)
// })

export const AddItemToList = (list, newItem) => {
    let isNew = true
    const newList = list
        ? list.map((item) => {
              if (item.id === newItem.id) {
                  item.count++
                  isNew = false
              }
              return item
          })
        : []
    if (isNew) {
        newList.push({ ...newItem, count: 1 })
    }
    return newList
}

export const RemoveOneItemFromList = (list, item) => {
    return list.reduce((acc, current) => {
        const newItem = { ...current }
        if (newItem.id === item.id) {
            if (newItem.count > 1) {
                newItem.count--
                acc.push(newItem)
            }
        } else {
            acc.push(newItem)
        }
        return acc
    }, [])

    //   const newList = list.map((listItem) => {
    //     const newItem = { ...listItem };
    //     if (newItem.id === item.id) {
    //       newItem.count--;
    //     }
    //     return newItem;
    //   });

    // return newList.filter((listItem) => listItem.count > 0);
}
