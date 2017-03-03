'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

// const cart =
//   (customer, ...items) => ({
//     customer,
//     items
//   })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => new Array(count).fill(itemName)

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
// entries(customer.shoppingList) displays [['hennessey', 1], ['carlos', 2]] etc.
// iterate entries(customer.shoppinglist) over itemRepeater since there are possible multiple items in a cart

const constructCarts =
  listings =>
    customers => {
      let arr = []
      customers.forEach(customer =>
        arr.push({
          customer: customer.name,
          items: entries(customer.shoppingList).map(
            x => itemRepeater(x[0])(x[1])).reduce(
            (p, c) => { return [...p, ...c] }, []
          )
        })
      )
      return arr
    }
// const fullShoppingList = entries(customer.shoppingList)
// const mapShoppingList = fullShoppingList.map(x => itemRepeater(x[0])(x[1]))
// const arrayOfStrings = mapShoppingList.reduce((p, c) => { return [...p, ...c] }, [])
// const customerName = customer.name

module.exports = {
  listing,
  customer,
  constructCarts
}
