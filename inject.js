console.log(`H~~~`);

/* zhihu */
document.title = "H";
const header = document.querySelector('.AppHeader ');

function doWork(){
    document.title = "H";
    header ? header.style.display = 'none' :  null;
}

[500, 1000, 1500, 2000, 2500 ].forEach((t)=>{
    setTimeout(doWork,t)
});


const   APPID = '12345678',
        SECRET = '12345678',
        SALT = (new Date).getTime();


const script = document.createElement('script');
document.body.appendChild(script)

function translate(query){
    query = query || 'hello'
    const p = {
        q: query,
        appid: APPID,
        salt: SALT,
        from: 'en',
        to: 'zh',
        sign: MD5(`${APPID}${query}${SALT}${SECRET}`)
    };
    const xhr = new XMLHttpRequest()
    // xhr.open('GET', 'https://fanyi-api.baidu.com/api/trans/vip/translate', true);
    
    // xhr.send(p)
    let q= "";
    for( k in p){
        q += `${k}=${p[k]}&`
    }
    // q+="callback=handleTranslate"
    // script.src = `https://fanyi-api.baidu.com/api/trans/vip/translate?${q}`;
    chrome.runtime.sendMessage({
        contentScriptQuery: 'fetchUrl',
        url: `https://fanyi-api.baidu.com/api/trans/vip/translate?${q}`
    }, response=>{
        console.log(response)
    })

}
translate('good')

function handleTranslate(result){
    console.log(result)
}
