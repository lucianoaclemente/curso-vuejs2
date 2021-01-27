export default {
    state: {
        funds: 10000,
        stocks: [],
        history: []
    },
    mutations: {
        buyStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(
                element => element.id == stockId       
            )

            if (record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }

            state.funds -= stockPrice * quantity

            const operacao = { data: new Date(), operation: 'compra', stockId, quantity, stockPrice }
            state.history.push(operacao)
        },
        sellStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(
                element => element.id == stockId       
            )

            if (record.quantity > quantity) {
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            
            state.funds += stockPrice * quantity
            
            const operacao = { data: new Date(), operation: 'venda', stockId, quantity, stockPrice }
            state.history.push(operacao)            
        },
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
            state.history = portfolio.history ? portfolio.history : []
        }
    },
    actions: {
            sellStock({ commit }, order) {
                commit('sellStock', order)
            }
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                const record = getters.stocks.find(
                    element => element.id == stock.id       
                )

                return { 
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        },
        history(state, getters) {
            return state.history.map(operation => {
                const record = getters.stocks.find(
                    element => element.id == operation.stockId      
                )

                return { 
                    data: operation.data,
                    operation: operation.operation,
                    stockId: operation.stockId,
                    stockName: record.name,
                    quantity: operation.quantity,
                    stockPrice: operation.stockPrice
                }
            })
        }
    }
}