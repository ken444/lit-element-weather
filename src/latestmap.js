
export default async () => {
  const response = await fetch('https://cors-anywhere.herokuapp.com/https://weather.gc.ca/radar/index_e.html?id=wkr');
  const domparser = new DOMParser();
  const doc = domparser.parseFromString(await response.text(), "text/html")
  const g = doc.querySelector('#animation-image').src

  const jj = g.indexOf('/',g.indexOf("//") + 2)

  return g.slice(jj)

  // await new Promise(_ => setTimeout(_, 1000))
  // return "hello"
}