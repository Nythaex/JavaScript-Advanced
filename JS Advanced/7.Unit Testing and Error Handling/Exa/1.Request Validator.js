function check(object) {
    
        let expectedMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let expectedVersions=['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1' ,'HTTP/2.0'];
        let uriRegex=RegExp('[\w.]+');
        let messageText=/[\<\>\\\&\'\"]/g;
    
        if (object.method===undefined||(!expectedMethod.includes(object.method))) {
            throw new Error('Invalid request header: Invalid Method')
        }
        if ((object.uri===undefined||(!uriRegex.test(object.uri)))&&object.uri!=='*') {
           
            throw new Error('Invalid request header: Invalid URI')
        }
        if (object.version===undefined||(!expectedVersions.includes(object.version))) {
            throw new Error('Invalid request header: Invalid Version')
        }
    
        if (object.message===undefined||(messageText.test(object.message))) {
            throw new Error('Invalid request header: Invalid Message')
        }
    

    return object;
}



