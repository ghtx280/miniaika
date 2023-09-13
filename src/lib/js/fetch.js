function createParams(params) {
  const types = {
    json:  'application/json',
    xml:   'application/xml',
    html:  'text/html',
    plain: 'text/plain',
    css:   'text/css',
    js:    'application/javascript',
    jpeg:  'image/jpeg',
    png:   'image/png',
    pdf:   'application/pdf',
    mp3:   'audio/mpeg',
    wav:   'audio/wav',
    mp4:   'video/mp4',
    webm:  'video/webm',
    ico:   'image/x-icon',
    svg:   'image/svg+xml',
    zip:   'application/zip',
    doc:   'application/msword',
    xls:   'application/vnd.ms-excel',
    ppt:   'application/vnd.ms-powerpoint',
    csv:   'text/csv',
    octet: 'application/octet-stream'
  };
 
  let data = {}
  
  let method  = params.method  || 'GET';
  let type    = params.type    || '';
  let headers = params.headers || '';
  let body    = params.body    || '';

  data.method = method.toUpperCase();
 
  if (body) {
    data.body = typeof body === "object" ? JSON.stringify(body) : body 
  }
  if (headers || type) {
    if (type) headers["Content-Type"] = types[type]
    data.headers = headers
  }
  
  return data
}

async function createFetch(url, params, resolveMethod) {
  try {
    let promise = await fetch(url, createParams(params))

    return {
      ...promise, value: await promise[resolveMethod]()
    }
  }
  catch (error) { return { err: error.toString() } }
}

export default {
  json:        async (url, params) => createFetch(url, params, "json"       ),
  text:        async (url, params) => createFetch(url, params, "text"       ),
  blob:        async (url, params) => createFetch(url, params, "blob"       ),
  formData:    async (url, params) => createFetch(url, params, "formData"   ),
  arrayBuffer: async (url, params) => createFetch(url, params, "arrayBuffer"),
}



