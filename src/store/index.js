import { createStore } from "vuex";
import currencyConverterStore from "./currencyConverter";

export default createStore ({
    modules:{
        converter: currencyConverterStore
    }
})