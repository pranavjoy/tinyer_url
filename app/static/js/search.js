function searchFunction(column) {
    let input, filter, table1, tr1, td, i, txtValue, table2, tr2, table3, tr3, table4, tr4;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table1 = document.getElementById("botsTable");
    tr1 = table1.getElementsByTagName("tr");
    let counter1 = 0;
    let flag = false;
    let row1display;

    for (i = 0; i < tr1.length; i++) {
        td1 = tr1[i].getElementsByTagName("td")[column];
        td2 = tr1[i].getElementsByTagName("td")[column + 1];
        td3 = tr1[i].getElementsByTagName("td")[column + 2];
        td4 = tr1[i].getElementsByTagName("td")[column + 3];
        if (td1) {
            txtValue1 = td1.textContent || td1.innerText;
            txtValue2 = td2.textContent || td2.innerText;
            txtValue3 = td3.textContent || td3.innerText;
            txtValue4 = td4.textContent || td4.innerText;

            if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1 || txtValue4.toUpperCase().indexOf(filter) > -1) {
                tr1[i].style.display = "";
            } else {
                tr1[i].style.display = "none";
            }
        }
    }

for (i = 0; i < tr1.length; i++) {
    row1display = tr1[i].style.display;
    if (tr1[i].style.display === "none") {
        counter1++;
    }
    if (counter1 === tr1.length - 1) {
        table1.style.display = "none";
        document.getElementById("general").style.display = "none";
    } else {
        table1.style.display = "";
        document.getElementById("general").style.display = "";
    }
}

if (table1.style.display === "none") {
    document.getElementById("searchInput").style.color = "#ff0000";
} else {
    document.getElementById("searchInput").style.color = "#000000";
}
}