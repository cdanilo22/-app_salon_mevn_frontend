export const formatCurrency = price => 
    Number(price).toLocaleString('es-GT', {
        style: 'currency',
        currency: 'GTQ'
    })