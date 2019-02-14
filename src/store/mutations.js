/*包含多个直接更新的集合*/

import {RECEIVE_MUM} from "./mutations-types"

export default {
  [RECEIVE_MUM](state, {mum}) {
    state.mum = mum
  },
}
