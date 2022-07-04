import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi"; /* conectarlo con lo que deseamos fecthear*/

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer, /* especificar esto para cada reducer (cryptoApi) que haremos*/
    },
});