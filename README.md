# simple-plainjs-apicaller-promises
Simple function for doing POST and GET requests using promises with plain Javascript

## Usage
- Simply include the script and make sure the function is visible to your code.
- Use like any other promise   
```
  api(urlToCall, JSONObject)
    .then((response)=>{
      /** Response gotten **/
    })
    .catch((potentialResponse)=>{
      /** Potential success, but err on the side of caution **/
     })
```  
