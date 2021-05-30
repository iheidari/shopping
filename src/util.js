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

// export const RemoveFromCart = (list, newItem) => {
//   const newList = list.map((item) => {
//     if (item.id === newItem.id) {
//       item.count--;
//     }
//     return item;
//   });

//   newList(newList.filter((item) => item.count > 0));

//   return newList;
// };

//.........Removecart
export const RemoveOneItemFromCart = (List, item) => {
    return List.reduce((acc, curren) => {
        if (curren.id === item.id) {
            if (current.count > 1) {
                current.count--
            } else {
                acc.push(curren)
            }
            return acc
        }
    }, [])
    // const newList = List.map((ListItem) => {
    //     if (listItem.id === item.id) {
    //         ListItem.count--
    //     }
    //     return ListItem
    // })

    // return newList.filter((ListItem) => ListItem.count > 0)
}
