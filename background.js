console.log(1)

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.contentScriptQuery == 'fetchUrl'){
        console.log('xxxxx')
        fetch( request.url )
            .then(response=>response.text())
            .then(text=> sendResponse(text))
            .catch(err=>{
                console.log(err)
            })
    }
})