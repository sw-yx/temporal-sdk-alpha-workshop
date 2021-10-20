import axios from 'axios'
export async function greet(name: string): Promise<string> {
  const foo = await axios.get('http://quotes.rest/qod') as any
  return name + ' Quote: ' + foo.data.contents.quotes[0].quote
}
