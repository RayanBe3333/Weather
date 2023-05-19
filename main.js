let cityName = document.querySelector(".cityName");
let btn = document.querySelector(".btn");
let temp = document.querySelector(".temp");
let main = document.querySelector(".main");
let humidity = document.querySelector(".humidity");
let api = "Put The Api Here -- api in openweathermap.org";

btn.addEventListener("click", () => {
  let city = cityName.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod == 404) {
        document.querySelector('.true').style.display = "none";
        let img = document.createElement('img');
        img.src = `./icons/unknown.png`
        document.querySelector('.error').appendChild(img)
        document.querySelector(".error").style.display = "block";
        alert("City not found");
      } else if (data.cod == 200) {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".true").style.display = "block";
        console.log(data);
        let a = data.weather[0].description;
        let b = Math.round(data.main.temp - 273.15);
        let h = data.main.humidity;
        let icon = data.weather[0].icon;
        console.log(h);
        console.log(a);
        console.log(b);
        if (icon == '01d' || icon == '02d' || icon == '03d' || icon == '04d' || icon == '09d' || icon == '10d' || icon == '11d' || icon == '13d' || icon == '50d') {
          console.log('1');
          console.log(typeof icon);
          let img = document.createElement('img');
          img.src = `./icons/${icon}.png`
          document.querySelector('.true').appendChild(img)
        };

        
        
        temp.innerHTML = `Temperature: ${b}C`;
        main.innerHTML = `Weather: ${a}`;
        humidity.innerHTML = `Humidity: ${h}%`;

        //C = K==(289.89) – 273.15
      }
    });
});
