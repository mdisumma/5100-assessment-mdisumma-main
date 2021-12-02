const displayTable = document.querySelector("#displayTable")
const submit = document.querySelector("#submit")
const leaderName = document.querySelector("#leader_name")
console.log(leaderName)
const leaderCountry = document.querySelector("#leader_country")
console.log(leaderCountry)
const leaderAge = document.querySelector("#leader_age")
console.log(leaderAge)

    fetch("http://localhost:3000/api")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        data.map((item) => {
        displayTable.innerHTML += `
        <ul class="leader">
          <li>${item.name}</li>
          <li>${item.country}</li>
          <li>${item.age}</li>
        </ul>`
        })
    })

    submit.addEventListener("click", (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: leaderName.value,
                country: leaderCountry.value,
                age: leaderAge.value, 
            }),
        })
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    });


		
