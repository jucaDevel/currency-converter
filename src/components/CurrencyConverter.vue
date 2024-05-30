<template>
    <div class="w-screen h-screen font-roboto bg-gradient-to-t from-zinc-200 to-gray-100 flex items-center justify-center">
        <div class="w-10/12 h-5/6 bg-white border-2 rounded-lg flex p-5 flex-col md:flex-row">
            <div>
                <h1 class="text-3xl font-bold tracking-tight text-black sm:text-4xl">Currency converter</h1>
            </div> 
            <div class="bg-white-900 w-full h-full md:w-10/12 md:h-5/6 mx-auto md:p-5 border-2 rounded-lg flex flex-wrap content-start justify-center">    
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-2 h-full p-2 md:p-5">
                    <div class="relative flex flex-wrap content-center md:content-start md:my-3">
                        <label
                        for="origin-coin"
                        class="absolute top-5 md:top-2 left-2 text-gray-600 transition-transform origin-[0_0] transform pointer-events-none duration-200 ease-in-out">
                        Selecciona moneda de origen
                        </label>
                        <select
                        id="origin-coin"
                        v-model="originCoin"
                        class="p-3 border rounded w-full bg-white focus:outline-none focus:border-blue-500"
                        @focus="onFocusField"
                        @blur="onBlurField"
                        >
                            <option
                            v-for="rate in exchangeRates"
                            :key="rate.code"
                            :value="rate.code"
                            >
                                {{ rate.name }}
                            </option>
                        </select>
                    </div>
                    <div class="relative flex flex-wrap content-center md:content-start md:my-3">
                        <label
                        for="target-coin"
                        class="absolute top-5 md:top-2 left-2 text-gray-600 transition-transform origin-[0_0] transform pointer-events-none duration-200 ease-in-out">
                        Selecciona moneda de destino
                        </label>
                        <select
                        id="target-coin"
                        v-model="targetCoin"
                        class="p-3 border rounded w-full bg-white focus:outline-none focus:border-blue-500"
                        @focus="onFocusField"
                        @blur="onBlurField"
                        >
                            <option
                            v-for="rate in exchangeRates"
                            :key="rate.code"
                            :value="rate.code"
                            >
                                {{ rate.name }}
                            </option>
                        </select>
                    </div>
                    <div class="relative flex flex-wrap content-center md:content-start md:my-3">
                        <label
                        for="cant-convert"
                        class="absolute top-5 md:top-2 left-2 text-gray-600 transition-transform origin-[0_0] transform pointer-events-none duration-200 ease-in-out">
                        Ingrese cantidad
                        </label>
                        <input
                        type="number"
                        id="cant-convert"
                        v-model="quantity"
                        class="p-3 border rounded w-full bg-white focus:outline-none focus:border-blue-500"
                        @focus="onFocusField"
                        @blur="onBlurField"
                        >
                    </div>
                    <div class="flex flex-wrap content-start">
                        <button
                        @click="makeConversion"
                        class="bg-blue-800 text-white p-3 rounded w-full"
                        >Convertir</button>
                    </div>
                    <div class="col-1 md:col-span-2 bg-gray-100 p-5 h-auto rounded">
                        <h2 class="text-center">{{ result }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState} from "vuex";

export default {
    data(){
        return{
            originCoin:null,
            targetCoin: null,
            quantity: null
        }
    },
    computed:{
        ...mapState('converter',['exchangeRates','result'])
    },
    methods:{
        ...mapActions('converter',['getAllExchangeRates', 'getResultConversion']),
        makeConversion(){
            if(this.originCoin && this.targetCoin && this.quantity){
                const paramsConversion = {
                    origin:this.originCoin,
                    target: this.targetCoin,
                    amount: this.quantity
                }
    
                this.getResultConversion(paramsConversion)
            }
            console.log('No se puede');
        },
        onFocusField(event){
            const labelElement = event.target.previousElementSibling;
            labelElement.classList.add('transform','-translate-y-6', 'scale-75')
        },
        onBlurField(event){
            if (!event.target.value) {
                const label = event.target.previousElementSibling;
                label.classList.remove('transform', '-translate-y-6', 'scale-75');
            }
        }
    },
    mounted(){
        this.getAllExchangeRates()
    }
}
</script>

<style scoped>
button{
    margin: 15px;
}

input, select{
    margin: 0px 5px;
}

.container-inputs{
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 40%;
    height: 30px;
}
</style>