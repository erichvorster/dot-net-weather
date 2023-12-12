using Microsoft.AspNetCore.Mvc;
using weather_app.Server.Models;

namespace weather_app.Server.Controllers
{
    [Route("api/weather")]
    public class WeatherController : Controller
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;

        public WeatherController(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _httpClient = httpClientFactory.CreateClient();
            _httpClient.BaseAddress = new Uri("http://api.weatherapi.com/v1/");
            _configuration = configuration; 
        }

        [HttpGet("getWeather")]
        public async Task<IActionResult> GetWeather(string location)
        {
            try
            {
               
                var apiKey = _configuration["WeatherApiKey"];

                HttpResponseMessage response = await _httpClient.GetAsync($"forecast.json?key={apiKey}&days=3&q={location}");

                if (response.IsSuccessStatusCode)
                {
                    string responseData = await response.Content.ReadAsStringAsync();
                    var weatherData = Newtonsoft.Json.JsonConvert.DeserializeObject<WeatherModel>(responseData);

                    return Ok(weatherData);
                }
                else
                {
                    return BadRequest($"Error: {response.StatusCode}, {response.ReasonPhrase}");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }
    }
}
