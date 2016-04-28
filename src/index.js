import fetch from 'node-fetch'

const BASE_URL = 'https://www.wikidata.org/w/api.php'

class Client {

  webSearchEntitis (searchTerm, options) {
    let defaults = {
      language: 'en',
      uselang: 'en',
      type: 'item',
      continue: 0
    }
    options = [ defaults, options ].reduce(Object.assign, {})
    let actionUrl = `${BASE_URL}?action=wbsearchentities` +
        `&search=${searchTerm}` +
        `&format=json` +
        `&language=${options.language}` +
        `&uselang=${options.uselang}` +
        `&type=${options.type}` +
        `&continue=${options.continue}`

    return fetch(actionUrl)
              .then(response => response.json())
  }
}

export { Client as default }
