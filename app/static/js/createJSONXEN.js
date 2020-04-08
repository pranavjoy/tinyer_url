function createJSONXEN(objButton) {
    temp = objButton.value;
    console.log(objButton.value);
    let table = "xenTable";
    let rowID;
    if (temp.startsWith("delete")) {
        sendJSON = [];
        sendJSON.push({"action": "delete"});
        sendJSON.push({"table": "Xen"});
        sendJSON.push({"id": parseInt(temp.substring(9))});
        rowID = parseInt(temp.substring(9));
    }

    if (temp.startsWith("edit")) {
        sendJSON = [];
        sendJSON.push({"action": "edit"});
        sendJSON.push({"table": "Xen"});
        sendJSON.push({"id": parseInt(temp.substring(7))});
        rowID = parseInt(temp.substring(7));
    }

    document.getElementById("service_name_edit").value = document.getElementById(table + rowID).cells[0].innerText;
    document.getElementById("service_endpoint_edit").value = document.getElementById(table + rowID).cells[1].innerText;

}