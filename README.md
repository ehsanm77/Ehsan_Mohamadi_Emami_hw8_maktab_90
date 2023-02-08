# ehsanm77-Ehsan_Mohamadi_Emami_hw8_maktab_90

function elemCreator(elementType, callback) {
    const elem = document.createElement(elementType);
    const elem2 = document.createElement(elementType);
    document.body.appendChild(elem);
    elem.appendChild(elem2);
    callback(elem);
    callback2(elem2);
}
const callback = elem => {
    elem.style.backgroundColor = "red";
    elem.style.borderRadius = "20px 60px";
    elem.style.display = "flex";
    elem.style.alignItems = "center";
    elem.style.justifyContent = "center";
}
const callback2 = elem2 => {
    elem2.style.backgroundColor = "black";
    elem2.style.borderRadius = "100%";
    elem2.style.width = "3rem";
    elem2.style.height = "3rem";
}
elemCreator("div", callback);