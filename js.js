async function GOT() {
    const res = await axios.get(`https://api.tvmaze.com/shows/82/episodes`);
    console.log(res);
    let j2 = 0,
        j3 = 0,
        j4 = 0,
        j5 = 0,
        j6 = 0,
        j7 = 0,
        j8 = 0

    for (let i = 0; i < 73; i++) {

        if (i < 10) {
            const ul01 = document.querySelector("#S01")
            const li = document.createElement("li")
            ul01.appendChild(li)
            li.setAttribute("id", `${i}`)

            const divOfLi = document.createElement("div")
            li.appendChild(divOfLi)
            divOfLi.setAttribute("class", "border-top border-2 p-3")
            const div1 = document.createElement("div")
            divOfLi.append(div1)
            const div2 = document.createElement("div")
            divOfLi.append(div2)
            div1.setAttribute("class", "clearfix")
            const h5 = document.createElement("h5")
            div1.append(h5)
            h5.innerText = `Episode ${i+1} : ${ res.data[i].name }`
            const img = document.createElement("img")
            div2.append(img)
            img.setAttribute("class", "img rounded")
            img.src = res.data[i].image.medium;
            const p = document.createElement("p")
            div2.append(p)
            p.setAttribute("class", "pt-3")
            p.innerHTML = res.data[i].summary;
            p.style.fontStyle = "italic"
                // add link
            const link = document.createElement("a")
            div2.append(link)
            link.setAttribute("class", "btn btn-dark")
            link.innerText = "Go to tvmaze for more info . . ."
            link.href = res.data[i].url
            link.target = "_blank"



        } else if (i >= 10 && i < 20) {
            const ul02 = document.querySelector("#S02")
            const li = document.createElement("li")
            ul02.appendChild(li)
            li.setAttribute("id", `${i}`)

            const divOfLi = document.createElement("div")
            li.appendChild(divOfLi)
            divOfLi.setAttribute("class", "border-top border-2 p-3")
            const div1 = document.createElement("div")
            divOfLi.append(div1)
            const div2 = document.createElement("div")
            divOfLi.append(div2)
            div1.setAttribute("class", "clearfix")
            const h5 = document.createElement("h5")
            div1.append(h5)
            h5.innerText = `Episode ${j2+1} : ${ res.data[i].name }`
            const img = document.createElement("img")
            div2.append(img)
            img.setAttribute("class", "img rounded ")
            img.src = res.data[i].image.medium;
            const p = document.createElement("p")
            div2.append(p)
            p.setAttribute("class", "pt-3")
            p.innerHTML = res.data[i].summary;
            p.style.fontStyle = "italic"
                // add link
            const link = document.createElement("a")
            div2.append(link)
            link.setAttribute("class", "btn btn-dark")
            link.innerText = "Go to tvmaze for more info . . ."
            link.href = res.data[i].url
            link.target = "_blank"
            j2 += 1

        } else if (i >= 20 && i < 30) {
            const ul03 = document.querySelector("#S03")
            const li = document.createElement("li")
            ul03.appendChild(li)
            li.setAttribute("id", `${i}`)

            const divOfLi = document.createElement("div")
            li.appendChild(divOfLi)
            divOfLi.setAttribute("class", "border-top border-2 p-3")
            const div1 = document.createElement("div")
            divOfLi.append(div1)
            const div2 = document.createElement("div")
            divOfLi.append(div2)
            div1.setAttribute("class", "clearfix")
            const h5 = document.createElement("h5")
            div1.append(h5)
            h5.innerText = `Episode ${j3+1} : ${ res.data[i].name }`
            const img = document.createElement("img")
            div2.append(img)
            img.setAttribute("class", "img rounded ")
            img.src = res.data[i].image.medium;
            const p = document.createElement("p")
            div2.append(p)
            p.setAttribute("class", "pt-3")
            p.innerHTML = res.data[i].summary;
            p.style.fontStyle = "italic"
                // add link
            const link = document.createElement("a")
            div2.append(link)
            link.setAttribute("class", "btn btn-dark")
            link.innerText = "Go to tvmaze for more info . . ."
            link.href = res.data[i].url
            link.target = "_blank"
            j3 += 1

        } else if (i >= 30 && i < 40) {
            const ul04 = document.querySelector("#S04")
            const li = document.createElement("li")
            ul04.appendChild(li)
            li.setAttribute("id", `${i}`)

            const divOfLi = document.createElement("div")
            li.appendChild(divOfLi)
            divOfLi.setAttribute("class", "border-top border-2 p-3")
            const div1 = document.createElement("div")
            divOfLi.append(div1)
            const div2 = document.createElement("div")
            divOfLi.append(div2)
            div1.setAttribute("class", "clearfix")
            const h5 = document.createElement("h5")
            div1.append(h5)
            h5.innerText = `Episode ${j4+1} : ${ res.data[i].name }`
            const img = document.createElement("img")
            div2.append(img)
            img.setAttribute("class", "img rounded ")
            img.src = res.data[i].image.medium;
            const p = document.createElement("p")
            div2.append(p)
            p.setAttribute("class", "pt-3")
            p.innerHTML = res.data[i].summary;
            p.style.fontStyle = "italic"
                // add link
            const link = document.createElement("a")
            div2.append(link)
            link.setAttribute("class", "btn btn-dark")
            link.innerText = "Go to tvmaze for more info . . ."
            link.href = res.data[i].url
            link.target = "_blank"
            j4 += 1

        } else if (i >= 40 && i < 50) {
            const ul05 = document.querySelector("#S05")
            const li = document.createElement("li")
            ul05.appendChild(li)
            li.setAttribute("id", `${i}`)

            const divOfLi = document.createElement("div")
            li.appendChild(divOfLi)
            divOfLi.setAttribute("class", "border-top border-2 p-3")
            const div1 = document.createElement("div")
            divOfLi.append(div1)
            const div2 = document.createElement("div")
            divOfLi.append(div2)
            div1.setAttribute("class", "clearfix")
            const h5 = document.createElement("h5")
            div1.append(h5)
            h5.innerText = `Episode ${j5+1} : ${ res.data[i].name }`
            const img = document.createElement("img")
            div2.append(img)
            img.setAttribute("class", "img rounded ")
            img.src = res.data[i].image.medium;
            const p = document.createElement("p")
            div2.append(p)
            p.setAttribute("class", "pt-3")
            p.style.fontStyle = "italic"
            p.innerHTML = res.data[i].summary;
            // add link
            const link = document.createElement("a")
            div2.append(link)
            link.setAttribute("class", "btn btn-dark")
            link.innerText = "Go to tvmaze for more info . . ."
            link.href = res.data[i].url
            link.target = "_blank"
            j5 += 1
        } else if (i >= 50 && i < 60) {
            const ul06 = document.querySelector("#S06")
            const li = document.createElement("li")
            ul06.appendChild(li)
            li.setAttribute("id", `${i}`)

            const divOfLi = document.createElement("div")
            li.appendChild(divOfLi)
            divOfLi.setAttribute("class", "border-top border-2 p-3")
            const div1 = document.createElement("div")
            divOfLi.append(div1)
            const div2 = document.createElement("div")
            divOfLi.append(div2)
            div1.setAttribute("class", "clearfix")
            const h5 = document.createElement("h5")
            div1.append(h5)
            h5.innerText = `Episode ${j6+1} : ${ res.data[i].name }`
            const img = document.createElement("img")
            div2.append(img)
            img.setAttribute("class", "img rounded ")
            img.src = res.data[i].image.medium;
            const p = document.createElement("p")
            div2.append(p)
            p.setAttribute("class", "pt-3")
            p.style.fontStyle = "italic"
            p.innerHTML = res.data[i].summary;
            // add link
            const link = document.createElement("a")
            div2.append(link)
            link.setAttribute("class", "btn btn-dark")
            link.innerText = "Go to tvmaze for more info . . ."
            link.href = res.data[i].url
            link.target = "_blank"
            j6 += 1

        } else if (i >= 60 && i < 67) {
            const ul07 = document.querySelector("#S07")
            const li = document.createElement("li")
            ul07.appendChild(li)
            li.setAttribute("id", `${i}`)

            const divOfLi = document.createElement("div")
            li.appendChild(divOfLi)
            divOfLi.setAttribute("class", "border-top border-2 p-3")
            const div1 = document.createElement("div")
            divOfLi.append(div1)
            const div2 = document.createElement("div")
            divOfLi.append(div2)
            div1.setAttribute("class", "clearfix")
            const h5 = document.createElement("h5")
            div1.append(h5)
            h5.innerText = `Episode ${j7+1} : ${ res.data[i].name }`
            const img = document.createElement("img")
            div2.append(img)
            img.setAttribute("class", "img rounded ")
            img.src = res.data[i].image.medium;
            const p = document.createElement("p")
            div2.append(p)
            p.setAttribute("class", "pt-3")
            p.style.fontStyle = "italic"
            p.innerHTML = res.data[i].summary;
            // add link
            const link = document.createElement("a")
            div2.append(link)
            link.setAttribute("class", "btn btn-dark")
            link.innerText = "Go to tvmaze for more info . . ."
            link.href = res.data[i].url
            link.target = "_blank"
            j7 += 1

        } else if (i >= 67 && i < 73) {
            const ul08 = document.querySelector("#S08")
            const li = document.createElement("li")
            ul08.appendChild(li)
            li.setAttribute("id", `${i}`)

            const divOfLi = document.createElement("div")
            li.appendChild(divOfLi)
            divOfLi.setAttribute("class", "border-top border-2 p-3")
            const div1 = document.createElement("div")
            divOfLi.append(div1)
            const div2 = document.createElement("div")
            divOfLi.append(div2)
            div1.setAttribute("class", "clearfix")
            const h5 = document.createElement("h5")
            div1.append(h5)
            h5.innerText = `Episode ${j8+1} : ${ res.data[i].name }`
            const img = document.createElement("img")
            div2.append(img)
            img.setAttribute("class", "img rounded ")
            img.src = res.data[i].image.medium;
            const p = document.createElement("p")
            div2.append(p)
            p.setAttribute("class", "pt-3")
            p.style.fontStyle = "italic"
            p.innerHTML = res.data[i].summary;
            // add link
            const link = document.createElement("a")
            div2.append(link)
            link.setAttribute("class", "btn btn-dark")
            link.innerText = "Go to tvmaze for more info . . ."
            link.href = res.data[i].url
            link.target = "_blank"
            j8 += 1
        }
    }

    const S1ulOfDropDown = document.getElementById("S1ul")
    const S2ulOfDropDown = document.getElementById("S2ul")
    const S3ulOfDropDown = document.getElementById("S3ul")
    const S4ulOfDropDown = document.getElementById("S4ul")
    const S5ulOfDropDown = document.getElementById("S5ul")
    const S6ulOfDropDown = document.getElementById("S6ul")
    const S7ulOfDropDown = document.getElementById("S7ul")
    const S8ulOfDropDown = document.getElementById("S8ul")
    let t2 = 0,
        t3 = 0,
        t4 = 0,
        t5 = 0,
        t6 = 0,
        t7 = 0,
        t8 = 0
    for (let i = 0; i < 73; i++) {
        if (i < 10) {
            const liOfDropDown = document.createElement("li")
            S1ulOfDropDown.append(liOfDropDown)
            const aOfli = document.createElement("a")
            liOfDropDown.append(aOfli)
            aOfli.setAttribute("class", "dropdown-item")
            i == 9 ? aOfli.innerText = `S01E${i+1} : ${res.data[i].name}` : aOfli.innerText = `S01E0${i+1} : ${res.data[i].name}`
            aOfli.setAttribute("href", `#${i}`)
                // add style when item selected
            let liEl = document.getElementById(`${i}`)
            aOfli.addEventListener("click", function() {
                liEl.setAttribute("class", "afterClick")
                liEl.addEventListener("click", function() {
                    liEl.setAttribute("class", "afterMouseLeave")
                })
            })

        } else if (i >= 10 && i < 20) {
            const liOfDropDown = document.createElement("li")
            S2ulOfDropDown.append(liOfDropDown)
            const aOfli = document.createElement("a")
            liOfDropDown.append(aOfli)
            aOfli.setAttribute("class", "dropdown-item")
            t2 < 9 ? aOfli.innerText = `S02E0${t2+1} : ${res.data[i].name}` : aOfli.innerText = `S02E${t2+1} : ${res.data[i].name}`
            aOfli.setAttribute("href", `#${i}`)
                // add style when item selected
            let liEl = document.getElementById(`${i}`)
            aOfli.addEventListener("click", function() {
                liEl.setAttribute("class", "afterClick")
                liEl.addEventListener("click", function() {
                    liEl.setAttribute("class", "afterMouseLeave")
                })
            })
            t2 += 1
        } else if (i >= 20 && i < 30) {
            const liOfDropDown = document.createElement("li")
            S3ulOfDropDown.append(liOfDropDown)
            const aOfli = document.createElement("a")
            liOfDropDown.append(aOfli)
            aOfli.setAttribute("class", "dropdown-item")
            t3 < 9 ? aOfli.innerText = `S03E0${t3+1} : ${res.data[i].name}` : aOfli.innerText = `S03E${t3+1} : ${res.data[i].name}`
            aOfli.setAttribute("href", `#${i}`)
                // add style when item selected
            let liEl = document.getElementById(`${i}`)
            aOfli.addEventListener("click", function() {
                liEl.setAttribute("class", "afterClick")
                liEl.addEventListener("click", function() {
                    liEl.setAttribute("class", "afterMouseLeave")
                })
            })
            t3 += 1
        } else if (i >= 30 && i < 40) {
            const liOfDropDown = document.createElement("li")
            S4ulOfDropDown.append(liOfDropDown)
            const aOfli = document.createElement("a")
            liOfDropDown.append(aOfli)
            aOfli.setAttribute("class", "dropdown-item")
            t4 < 9 ? aOfli.innerText = `S04E0${t4+1} : ${res.data[i].name}` : aOfli.innerText = `S04E${t4+1} : ${res.data[i].name}`
            aOfli.setAttribute("href", `#${i}`)
                // add style when item selected
            let liEl = document.getElementById(`${i}`)
            aOfli.addEventListener("click", function() {
                liEl.setAttribute("class", "afterClick")
                liEl.addEventListener("click", function() {
                    liEl.setAttribute("class", "afterMouseLeave")
                })
            })
            t4 += 1
        } else if (i >= 40 && i < 50) {
            const liOfDropDown = document.createElement("li")
            S5ulOfDropDown.append(liOfDropDown)
            const aOfli = document.createElement("a")
            liOfDropDown.append(aOfli)
            aOfli.setAttribute("class", "dropdown-item")
            t5 < 9 ? aOfli.innerText = `S05E0${t5+1} : ${res.data[i].name}` : aOfli.innerText = `S05E${t5+1} : ${res.data[i].name}`
            aOfli.setAttribute("href", `#${i}`)
                // add style when item selected
            let liEl = document.getElementById(`${i}`)
            aOfli.addEventListener("click", function() {
                liEl.setAttribute("class", "afterClick")
                liEl.addEventListener("click", function() {
                    liEl.setAttribute("class", "afterMouseLeave")
                })
            })
            t5 += 1
        } else if (i >= 50 && i < 60) {
            const liOfDropDown = document.createElement("li")
            S6ulOfDropDown.append(liOfDropDown)
            const aOfli = document.createElement("a")
            liOfDropDown.append(aOfli)
            aOfli.setAttribute("class", "dropdown-item")
            t6 < 9 ? aOfli.innerText = `S06E0${t6+1} : ${res.data[i].name}` : aOfli.innerText = `S06E${t6+1} : ${res.data[i].name}`
            aOfli.setAttribute("href", `#${i}`)
                // add style when item selected
            let liEl = document.getElementById(`${i}`)
            aOfli.addEventListener("click", function() {
                liEl.setAttribute("class", "afterClick")
                liEl.addEventListener("click", function() {
                    liEl.setAttribute("class", "afterMouseLeave")
                })
            })
            t6 += 1
        } else if (i >= 60 && i < 67) {
            const liOfDropDown = document.createElement("li")
            S7ulOfDropDown.append(liOfDropDown)
            const aOfli = document.createElement("a")
            liOfDropDown.append(aOfli)
            aOfli.setAttribute("class", "dropdown-item")
            t7 < 9 ? aOfli.innerText = `S07E0${t7+1} : ${res.data[i].name}` : aOfli.innerText = `S07E${t7+1} : ${res.data[i].name}`
            aOfli.setAttribute("href", `#${i}`)
                // add style when item selected
            let liEl = document.getElementById(`${i}`)
            aOfli.addEventListener("click", function() {
                liEl.setAttribute("class", "afterClick")
                liEl.addEventListener("click", function() {
                    liEl.setAttribute("class", "afterMouseLeave")
                })
            })
            t7 += 1
        } else if (i >= 67 && i < 73) {
            const liOfDropDown = document.createElement("li")
            S8ulOfDropDown.append(liOfDropDown)
            const aOfli = document.createElement("a")
            liOfDropDown.append(aOfli)
            aOfli.setAttribute("class", "dropdown-item")
            t8 < 9 ? aOfli.innerText = `S08E0${t8+1} : ${res.data[i].name}` : aOfli.innerText = `S08E${t8+1} : ${res.data[i].name}`
            aOfli.setAttribute("href", `#${i}`)
                // add style when item selected
            let liEl = document.getElementById(`${i}`)
            aOfli.addEventListener("click", function() {
                liEl.setAttribute("class", "afterClick")
                liEl.addEventListener("click", function() {
                    liEl.setAttribute("class", "afterMouseLeave")
                })
            })
            t8 += 1
        }

    }



}

GOT();


// live search

function myFunction() {

    let details = document.querySelectorAll("details")
        // let seasonSections = document.querySelectorAll(".seasonSection")
    for (let i = 0; i < details.length; i++) {
        let input, filter, ul, li, txtValue;
        input = document.getElementById("query");
        filter = input.value.toUpperCase();
        // ////////////////////////////////////////////
        ul = details[i].querySelector("ul");
        li = ul.getElementsByTagName("li");
        // //////////////////////
        for (let j = 0; j < li.length; j++) {
            h5 = li[j].getElementsByTagName("h5")[0];
            txtValue = h5.textContent || h5.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                details[i].open = true
                li[j].style.display = "";
            } else {
                li[j].style.display = "none";
                // details[i].open = false
            }
        }
    }
}