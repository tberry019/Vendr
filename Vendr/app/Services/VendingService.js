import { ProxyState } from "../AppState"
import { valuesService } from "./ValuesService"

class VendingService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value()]
  }





}







export const vendingService = new VendingService()