import { Add, AddItemToList, RemoveOneItemFromCart } from './util'

test('Add 2 numbers', () => {
    const result = Add(2, 3)
    expect(result).toBe(5)
})

describe('AddItemToList function', () => {
    const item1 = {
        id: '1OUgYsXNA8ZSTBcV9BEmZD',
    }
    const item2 = {
        id: '2',
    }
    test('add an item to empty list', () => {
        const newList1 = AddItemToList(undefined, item1)
        expect(newList1.length).toBe(1)
        expect(newList1[0].count).toBe(1)

        const newList2 = AddItemToList(newList1, item2)
        expect(newList2.length).toBe(2)
        expect(newList2[1].count).toBe(1)

        const newList3 = AddItemToList(newList2, item1)
        expect(newList3.length).toBe(2)
        expect(newList3[0].count).toBe(2)
    })

    test('add an item to the list with one different item in it', () => {
        const newList1 = AddItemToList(undefined, item1)
        const newList2 = AddItemToList(newList1, item2)
        expect(newList2.length).toBe(2)
        expect(newList2[1].count).toBe(1)
    })
    test('add an existing item to the list', () => {
        const newList1 = AddItemToList(undefined, item1)
        const newList2 = AddItemToList(newList1, item2)
        const newList3 = AddItemToList(newList2, item1)
        expect(newList3.length).toBe(2)
        expect(newList3[0].count).toBe(2)
    })
})

// describe("RemoveFromCart function", () => {
//   const item1 = {
//     id: "1",
//   };
//   const item2 = {
//     id: "2",
//   };
//   test("remove an item to empty list", () => {
//     const newList1 = RemoveFromCart(undefined, item1);
//     expect(newList1.length).toBe(1);
//     expect(newList1[0].count).toBe(1);

//     const newList2 = RemoveFromCart(newList1, item2);
//     expect(newList2.length).toBe(2);
//     expect(newList2[1].count).toBe(1);

//     const newList3 = RemoveFromCart(newList2, item1);
//     expect(newList3.length).toBe(2);
//     expect(newList3[0].count).toBe(2);
//   });
// });

let lidt = []
beforeEach(() => {
    list = [
        { id: 'item1', count: 7 },
        { id: 'item2', count: 2 },
        { id: 'item: 3', count: 1 },
    ]
})
test('remove item from list', () => {
    const newList = RemoveOneItemFromCart(list, { id: 'item1' })
    expect(newList.length).toBe(3)
    expect(newList[0].count).toBe(6)
    expect(newList[1].count).toBe(2)
    expect(newList[2].count).toBe(1)
})

test('remove item  with 1 count from list', () => {
    const newList = RemoveOneItemFromCart(list, { id: 'item3' })
    expect(newList.length).toBe(3)
    expect(newList[0].count).toBe(7)
    expect(newList[1].count).toBe(2)
})
