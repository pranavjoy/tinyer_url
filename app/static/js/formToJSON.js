function formToJSON1(name) {
    let form = document.getElementById("add");
    let obj = {};
    let elements = form.querySelectorAll("input, select");
    for (let i = 0; i < elements.length; ++i) {
        let element = elements[i];
        let name = element.name;
        let value = element.value;

        if (name) {
            obj[name] = value;
        }
    }
    return JSON.stringify(obj);
}