
const whitelist = ['en', 'es']

export default (language) => {
  const languageName = language.split('-')[0]
  const lng = whitelist.indexOf(languageName) < 0 ? 'en' : languageName

  const file = require(`./${lng}.js`)
  return Object.assign({}, file)
}
