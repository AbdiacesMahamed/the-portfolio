let quote = []
const button = document.querySelector(`.new-quote`)
const authorText = document.querySelector(`.author`)
const quoteText = document.querySelector(`.quote`)






async function getQuote(){

    const apiUrl = `https://type.fit/api/quotes`;

    try {
        const response = await fetch(apiUrl)
        quoteApi = await response.json()
        let quote = quoteApi[Math.trunc(Math.random()*1643)]
        console.log(quote)
        authorText.textContent = quote.author + `-`
        quoteText.textContent = quote.text
    } catch (error) {
        
    }
    
    
}
button.addEventListener(`click`,getQuote)


