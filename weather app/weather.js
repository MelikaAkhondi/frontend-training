const apiKey = "ffb2f8fbe985fe9e2ff3357988add1f0";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const suggestionsBox=document.querySelector(".suggestions");
const weatherIcon=document.querySelector(".weather-icon");

const iranianCities = [
    "تهران", "مشهد", "اصفهان", "شیراز", "تبریز", "کرج", "اهواز", "قم", "کرمانشاه", "رشت",
    "یزد", "ارومیه", "زنجان", "اردبیل", "بندرعباس", "همدان", "کرمان", "قزوین", "بوشهر", "ساری"
];

async function checkWeather(city) {
    // ساخت URL با نام شهر ورودی
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();  // دریافت پاسخ به فرمت JSON

    if (data.cod === 200) {  // اطمینان از موفقیت‌آمیز بودن درخواست
        // نمایش اطلاعات در HTML
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = ` ${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = ` ${data.wind.speed} km/h`;
// فرض می‌کنیم weatherIcon عنصری از HTML است که به آیکون مربوطه اشاره دارد
switch (data.weather[0].main) {
    case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
    case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
    case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
    case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
    case "Snow":
        weatherIcon.src = "images/snow.png";
        break;
    case "Mist":
        weatherIcon.src = "images/mist.png";
        break;
    default:
        weatherIcon.src = "images/default.png"; // برای شرایط ناشناخته
}
document.querySelector(".weather").style.display="block";


        // ذخیره داده‌ها به عنوان JSON برای استفاده‌های بعدی
        const weatherJSON = JSON.stringify(data);  // تبدیل شیء به رشته JSON
        console.log("Stored JSON Data:", weatherJSON); // نمایش JSON در کنسول
    } else {
        // در صورتی که نام شهر یافت نشد
        alert("City not found. Please enter a valid city name.");
    }
}

function showSuggestions(query) {
    const filteredCities = iranianCities.filter(city => city.startsWith(query));
    suggestionsBox.innerHTML = ""; 

    if (filteredCities.length > 0) {
        suggestionsBox.classList.add("visible");

        filteredCities.forEach(city => {
            const suggestionItem = document.createElement("div");
            suggestionItem.classList.add("suggestion-item");
            suggestionItem.innerText = city;
            suggestionItem.addEventListener("click", () => {
                searchBox.value = city;
                suggestionsBox.classList.remove("visible"); 
                checkWeather(city);
            });
            suggestionsBox.appendChild(suggestionItem);
        });
    } else {
        suggestionsBox.classList.remove("visible");
    }
}

// رویداد جستجو و نمایش پیشنهادات
searchBox.addEventListener("input", () => {
    const query = searchBox.value.trim();
    if (query.length > 1) {
        showSuggestions(query);
    } else {
        suggestionsBox.classList.remove("visible");
    }
});

// رویداد کلیک روی دکمه جستجو
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});