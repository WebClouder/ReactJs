let getCookie = function(name){
    var cookieArr, cookies = document.cookie.split(';').map(function(c){return c.replace(/\s/g,'')});
    for(var i = 0, length=cookies.length; i < length; i++){
        cookieArr = cookies[i].split('=');
        if(cookieArr[0] === name && cookieArr[1] !== ''){
            return cookieArr[1];
        }
    }
    return '';
};
const urlBase = '/', urlRoot = (location.protocol + '//' + location.host + urlBase);
const settings = {
    title: 'Sample Application',
    urlBase: urlBase,
    urlRoot: urlRoot ,
    productionRequestUrl: 'api/productions',
    userName: getCookie('username'),
    userRole: getCookie('role')
}
export default settings;