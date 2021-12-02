const displayTable = document.querySelector("#displayTable")


    fetch("http://localhost:3000/api")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        displayTable.innerHTML = `

<ul class="leader">
<li>${data[0].name}</li>
<li>${data[0].country}</li>
<li>${data[0].age}</li>
</ul>
`})


		
