# 🌤 Weather App
A simple weather application that allows users to check the current weather conditions for any city. The app fetches real-time weather data using the OpenWeatherMap API and displays information such as temperature, humidity, and weather conditions.

# 📌 Features
- 🔍 Search for any city to get current weather details.

- 🌡 Displays temperature in Celsius.

- 💧 Shows humidity percentage.

- 🌬 Shows wind speed.

- 🎨 Beautiful and responsive UI with a gradient background.

- ❌ Error handling for invalid city names.

# 🛠 Technologies Used
🌐 HTML - Structure of the web app.

🎨 CSS - Styling and layout.

🚀 JavaScript - Fetching data from the API and dynamically updating the UI.

☁️ OpenWeatherMap API - Provides real-time weather data.

🚀 Docker - used for containerization and ease of deployment.



# 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Jay-Shree1ram/Weather_app.git
2. Change directory:
   ```bash
   cd Weather_app

3. Add config.js file:
   ```bash
   const config = {
    API_KEY: "your api key",
    API_URL: "api url"};

4. Open index.html in your browser.

   # 📸 Screenshots:

   
![image alt](https://github.com/Jay-Shree1ram/Weather_app/blob/b78c553381f651d9e4f6a5925d3e55cc86acbf31/images/screenshots/Screenshot1.png)


![image alt](https://github.com/Jay-Shree1ram/Weather_app/blob/1b31a7506f59690f6aadc1247a910a15c70e0d3b/images/screenshots/Screenshot2.png)

## Mobile responsive
![image alt](https://github.com/Jay-Shree1ram/Weather_app/blob/1e8b4543e7361ec2e6424487484d72df0090080f/images/screenshots/s3.png)

# Using Docker 

1. Check docker present
   ```bash
   docker -v
   
2. Run docker command:
     ```bash
     docker run -idt -p 80:80 --name weather_app kajirocks/weather_app:v1
     
3. Access the Container:
   ```bash
   docker exec -it weather_app /bin/bash
   
4. Add config file inside the js directory:
   ```bash
    const config = {
    API_KEY: "your api key",
    API_URL: "api url"};
   
5. Restart the container:
   ```bash
   docker restart weather_app




# 🤝 Contributing
Feel free to fork this repository and make improvements. Pull requests are welcome! 🚀

# LICENSE 
[MIT Licence](LICENSE)
