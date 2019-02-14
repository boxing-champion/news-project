/*包含n个同步异步action的集合*/

import {reqManual} from "../api"
import {RECEIVE_MUM} from "./mutations-types"

export default {
  async getMun({commit}) {
    const result = await reqManual()
    if (result.code == 200) {
      const mum = result.data
      commit(RECEIVE_MUM, {mum})
    }
  }
}
