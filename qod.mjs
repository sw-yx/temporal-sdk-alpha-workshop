import axios from 'axios'

const foo = await axios.get('http://quotes.rest/qod')
console.log('Quote: ' + foo.data.contents.quotes[0].quote)