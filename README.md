# simple-plainjs-apicaller-promises
Simple function for doing POST and GET requests using promises with plain Javascript

## Usage
- Simply include the script and make sure the function is visible to your code.
- Use like any other promise   

### POST Request
```javascript
api(urlToCall, JSONObject)
  .then((response)=>{
    /** Response gotten as JSON**/
  })
  .catch((potentialResponse)=>{
    /** Error in request or response not JSON, if so potentialResponse contains the response as string **/
  })
```  

### GET Request
```javascript
api(urlToCall)
  .then((response)=>{
    /** Response gotten as JSON**/
  })
  .catch((potentialResponse)=>{
    /** Error in request or response not JSON, if so potentialResponse contains the response as string **/
  })
```  
