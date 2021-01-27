<template>
  <v-data-table
    :headers="headers"
    :items="history"
    :items-per-page="10"
    class="elevation-1">
       <template slot="items" slot-scope="props">
         <td>{{ props.item.data | datetime }}</td>
         <td>{{ props.item.operation}}</td>
         <td>{{ props.item.stockName}}</td>
         <td class="text-xs-right">{{ props.item.quantity}}</td>
         <td class="text-xs-right">{{props.item.stockPrice | currency }}</td>
       </template>    
  </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    components: { },
    data() {
        return {
            headers: [
                { text: 'Data', value: 'data' },
                { text: 'Operação', value: 'operation' },
                { text: 'Papel', value: 'stockName' },
                { text: 'Quantidade', value: 'quantity' },
                { text: 'Preço', value: 'stockPrice' },
            ]
        }
    },
    computed: {
        ...mapGetters({           
            history: 'history'
        })
    }, 

}
</script>

<style>

</style>