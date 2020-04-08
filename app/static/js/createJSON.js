function createJSON(objButton) {

    let objectID = objButton.value;
    let tableName = objButton.className;
    let action = objButton.alt;
    let id = objButton.id;
    sendJSON = [];
    sendJSON.push({"action": action});
    sendJSON.push({"table": tableName});
    sendJSON.push({"id": objectID});

}