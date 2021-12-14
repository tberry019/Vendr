
export class VendingController {
  constructor() {
    console.log('Vending Controller connected')
  }
  buySnack() {
    if (money >= Snack.price) {
      Snack.name.quantity++

      draw()

    }
    else {
      alert("You need more $!")
    }
  }

  addMoney() {
    console.log('Add Money button works')


  }








}


