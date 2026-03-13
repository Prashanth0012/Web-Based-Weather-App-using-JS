// const button = document.getElementById("btn");
// const result = document.getElementById("result");

// const apiKey = "c395db2edf1159c8d8ccec498db3fbe9";

// button.addEventListener("click", async () => {
//     const city = document.getElementById("city").value;

//     if (city === "") {
//         result.textContent = "Please enter a city name.";
//         return;
//     }

//     try {
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//         );

//         if (!response.ok) {
//             throw new Error("City not found");
//         }

//         const data = await response.json();
//         changeBackground(data.main.temp);

//         result.innerHTML = `
//             <h3>${data.name}</h3>
//             <p>Temperature: ${data.main.temp} &#8451;</p>
//             <p>Weather: ${data.weather[0].description}</p>
//             <p>Humidity: ${data.main.humidity}%</p>
//         `;
//         // console.log(data)

//     } catch (error) {
//         result.textContent = error.message;
//     }


// });

// function changeBackground(temp) {
//     if (temp < 0) {
//         document.body.style.backgroundColor = "#74b9ff";  
//     } 
//     else if(temp >=0 && temp <=20){
//         document.body.style.backgroundImage = "url('https://in.pinterest.com/pin/75857574972374992/')";
//     }
//     else if (temp >=20 && temp <=35) {
//         document.body.style.backgroundColor = "#fab1a0"; 
//     } 
//     else {
//         document.body.style.backgroundColor = "#ff7675"; 
//     }
// }




const button = document.getElementById("btn");
const result = document.getElementById("result");

const apiKey = "c395db2edf1159c8d8ccec498db3fbe9";

button.addEventListener("click", async () => {
    const city = document.getElementById("city").value.trim();

    if (city === "") {
        result.textContent = "Please enter a city name.";
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        // changeBackground(data.main.temp);

        result.innerHTML = `
            <h3>${data.name}</h3>
            <p>🌡 Temp: ${data.main.temp} &#8451;</p>
            <p>🌤 Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        `;

    } catch (error) {
        result.textContent = error.message;
    }
});

function changeBackground(temp) {

    if (temp < 0) {
        document.body.style.backgroundImage = "url('images/snow.png')";
    }
    else if(temp >=0 && temp <=20) {
        document.body.style.backgroundImage = "url('images/autumn.jpg')";
    }
    else if (temp >=20 && temp <=30) {
        document.body.style.backgroundImage = "url('images/clear.png')";
    }
    else {
        document.body.style.backgroundImage = "url('images/sunny.jpg')";
    }
}
