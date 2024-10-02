"use server"

export const postNewProductAction = async (formData) =>{
    const productTitle = formData.get('productTitle').trim()
    const productDescription = formData.get('productDescription').trim()
    const productPrice = formData.get('productPrice')

    const apiCall = await fetch('https://dummyjson.com/produscts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            productTitle: productTitle,
            productDescription: productDescription,
            productPrice: productPrice
        })
      })
      
    const response = await apiCall.json()

    if(response.id) console.log('product created')        
}