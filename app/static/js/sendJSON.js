function sendChange(sendJSON) {
    if (sendJSON[0]['action'] === 'delete') {
        fetch('/delete', {
            method: 'POST',
            body: JSON.stringify(sendJSON)
        }).then(function (response) {
            let resp = response.text();
            console.log(resp);
            return resp;
        }).then(function (text) {
            console.log('POST response: ');
            console.log(text);
        });
    } else if (sendJSON[0]['action'] === 'edit') {
        fetch('/edit', {
            method: 'POST',
            body: JSON.stringify(sendJSON)
        }).then(function (response) {
            let resp = response.text();
            console.log(resp);
            return resp;
        }).then(function (text) {

            console.log('POST response: ');

            console.log(text);
        });
    } else {
        console.log("Something's up..")
    }
}