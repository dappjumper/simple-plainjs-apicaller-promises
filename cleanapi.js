api = (url, payload)=>{
	return new Promise((resolve, reject)=>{
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
		    if (this.readyState == 4 && this.status == 200) {
		    	try {
		    		//Try parsing response as JSON, since that is the expected response
		    		let result = JSON.parse(this.responseText)
		    		resolve(result)
		    	} catch(e) {
		    		console.log(e)
		    		reject(this.responseText) //Pick either reject or resolve based on how you want to handle edge cases
		    	}
		        resolve(JSON.parse(this.responseText))
		    } else {
		        if (this.readyState == 4 && this.status != 200) {
		            reject() //The api call failed
		        }
		    }
		};
		//Open the connection based on payload included, GET for no payload included
		xhttp.open((payload ? 'POST' : 'GET'), url, true);

		//Support both GET and POST based on payload paramter, remembers to stringify objects if not already.
	    if(payload) xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send((payload ? (typeof payload !== 'string' ? payload : JSON.stringify(payload)) : null));
	})
}


//Example usage
/*
api("https://www.vam.ac.uk/api/json/museumobject/O12345")
	.then((response)=>{
		//Success
		console.log(response)
	})
	.catch((potentialResponse)=>{
		//Chance of bad reply if potentialResponse is something, but assume something like 404 page or other error.
		console.log((potentialResponse ? potentialResponse : "Could not get content"))
	})
*/
