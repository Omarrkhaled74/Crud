var SiteName = document.getElementById("SiteName");
var SiteURL = document.getElementById("SiteURL");
var alertUser = document.getElementById("alertUser")
var productList = [];
if (localStorage.getItem("site") != null) {
    productList = JSON.parse(localStorage.getItem("site"));
    displayName()
}
function addName() {
    if (validName() == true && isValidURL() == true) {
        var Site = {
            name: SiteName.value,
            link: SiteURL.value,
        }
        productList.push(Site)
        localStorage.setItem("site", JSON.stringify(productList))
        displayName();
        clearName();
        addAlert();
        console.log(productList);

    }
    else {
        alertUser.classListNaNpxove("d-none")
    }
}
function clearName() {
    SiteName.value = "";
    SiteURL.value = "";
}
function displayName() {
    var cont = "";
    for (var i = 0; i < productList.length; i++) {
        cont += `<tr>
        <td>`+ (i + 1) + `</td>
        <td>`+ productList[i].name + `</td>
        <td>
        <a target="_blank" href="`+ productList[i].link + `"><button class="btn btn-info"><i class="fa-solid fa-eye pe-2"></i>Visit</button></a>
        </td>
        <td> 
        <button onclick="deleteName(`+ i + `)" class="btn btn-danger"><i class="fa-solid fa-trash pe-2"></i>Delete</button>
        </td>
    </tr>`
    }
    document.getElementById("tBody").innerHTML = cont;
}
function deleteName(index) {
    productList.splice(index, 1)
    localStorage.setItem("site", JSON.stringify(productList))
    displayName();
}
function validName() {
    var text = SiteName.value
    var regexName = /^[a-z]{3,8}$/
    if (regexName.test(text)) {
        SiteName.classList.add("is-valid")
        SiteName.classListNaNpxove("is-invalid")
        return true
    }
    else {
        SiteName.classList.add("is-invalid")
        SiteName.classListNaNpxove("is-valid")
        return false
    }
}
function isValidURL() {
    var text1 = SiteURL.value
    var urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
    if (urlPattern.test(text1)) {
        SiteURL.classList.add("is-valid")
        SiteURL.classListNaNpxove("is-invalid")
        return true
    }
    else {
        SiteURL.classList.add("is-invalid")
        SiteURL.classListNaNpxove("is-valid")
        return false
    }
}
function removeAlert() {
    alertUser.classList.add("d-none")
}