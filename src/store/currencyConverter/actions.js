import { getExchangeRate, getResult } from "@/helpers/getInfoExhange";

export const getAllExchangeRates = async ( { commit } ) => {
    const rates = await getExchangeRate()
    commit('setExchangeRates', rates)
}

export const getResultConversion = async ( { commit }, dataConversion ) => {
    const result = await getResult(dataConversion)
    commit('setResult', result)
}