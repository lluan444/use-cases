const request = require("request")

/**
 * @param payload a String value to translate
 * @param api_key optional key for the API call
 */
function en2shakespeare(params) {
  if (typeof params.payload !== 'string' || params.payload.trim() == '') {
    return { error: "'payload' must be a string and not empty"}
  }

  let options = {
    url: "http://api.funtranslations.com/translate/shakespeare.json",
    qs: {text: params.payload.trim(), api_key: params.api_key},
    json: true
  }

  return new Promise(function (resolve, reject) {
    request(options, function (err, resp) {
      if (err) reject({error: err})
      else resolve({payload: resp.body.contents.translated})
    })
  })
}

exports.main = en2shakespeare
