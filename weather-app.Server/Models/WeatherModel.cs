namespace weather_app.Server.Models
{
    public class WeatherModel
    {
        public Location? Location { get; set; }
        public CurrentWeather? Current { get; set; }
        public Forecast? Forecast { get; set; }
    }

    public class Location
    {
        public string? Name { get; set; }
        public string? Region { get; set; }
        public string? Country { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public string? Tz_Id { get; set; }
        public long Localtime_Epoch { get; set; }
        public string? Localtime { get; set; }
    }

    public class CurrentWeather
    {
        public long Last_Updated_Epoch { get; set; }
        public string? Last_Updated { get; set; }
        public double Temp_C { get; set; }
        public double Temp_F { get; set; }
        public int Is_Day { get; set; }
        public Condition? Condition { get; set; }
        public double Wind_Mph { get; set; }
        public double Wind_Kph { get; set; }
        public int Wind_Degree { get; set; }
        public string? Wind_Dir { get; set; }
        public double Pressure_Mb { get; set; }
        public double Pressure_In { get; set; }
        public double Precip_Mm { get; set; }
        public double Precip_In { get; set; }
        public int Humidity { get; set; }
        public int Cloud { get; set; }
        public double Feelslike_C { get; set; }
        public double Feelslike_F { get; set; }
        public double Vis_Km { get; set; }
        public double Vis_Miles { get; set; }
        public double Uv { get; set; }
        public double Gust_Mph { get; set; }
        public double Gust_Kph { get; set; }
    }

    public class Condition
    {
        public string? Text { get; set; }
        public string? Icon { get; set; }
        public int Code { get; set; }
    }

    public class Forecast
    {
        public List<ForecastDay>? Forecastday { get; set; }
    }

    public class ForecastDay
    {
        public string? Date { get; set; }
        public long DateEpoch { get; set; }
        public Day? Day { get; set; }
        public Astro? Astro { get; set; }
        public List<Hour>? Hour { get; set; }
    }

    public class Day
    {
        public double Maxtemp_C { get; set; }
        public double Maxtemp_F { get; set; }
        public double Mintemp_C { get; set; }
        public double Mintemp_F { get; set; }
        public double Avgtemp_C { get; set; }
        public double Avgtemp_F { get; set; }
        public double Maxwind_Mph { get; set; }
        public double Maxwind_Kph { get; set; }
        public double Totalprecip_Mm { get; set; }
        public double Totalprecip_In { get; set; }
        public double Totalsnow_Cm { get; set; }
        public double Avgvis_Km { get; set; }
        public double Avgvis_Miles { get; set; }
        public double Avghumidity { get; set; }
        public int Daily_will_it_rain { get; set; }
        public int Daily_chance_of_rain { get; set; }
        public int Daily_will_it_snow { get; set; }
        public int Daily_chance_of_snow { get; set; }
        public Condition? Condition { get; set; }
        public double Uv { get; set; }
    }

    public class Astro
    {
        public string? Sunrise { get; set; }
        public string? Sunset { get; set; }
        public string? Moonrise { get; set; }
        public string? Moonset { get; set; }
        public string? Moon_phase { get; set; }
        public int Moon_illumination { get; set; }
        public int Is_moon_up { get; set; }
        public int Is_sun_up { get; set; }
    }

    public class Hour
    {
        public long Time_epoch { get; set; }
        public string? Time { get; set; }
        public double Temp_C { get; set; }
        public double Temp_F { get; set; }
        public int Is_day { get; set; }
        public Condition? Condition { get; set; }
        public double Wind_Mph { get; set; }
        public double Wind_Kph { get; set; }
        public int Wind_degree { get; set; }
        public string? Wind_dir { get; set; }
        public double Pressure_mb { get; set; }
        public double Pressure_in { get; set; }
        public double Precip_mm { get; set; }
        public double Precip_in { get; set; }
        public int Humidity { get; set; }
        public int Cloud { get; set; }
        public double Feelslike_C { get; set; }
        public double Feelslike_F { get; set; }
        public double Windchill_C { get; set; }
        public double Windchill_F { get; set; }
        public double Heatindex_C { get; set; }
        public double Heatindex_F { get; set; }
        public double Dewpoint_C { get; set; }
        public double Dewpoint_F { get; set; }
        public int Will_it_rain { get; set; }
        public int Chance_of_rain { get; set; }
        public int Will_it_snow { get; set; }
        public int Chance_of_snow { get; set; }
        public double Vis_km { get; set; }
        public double Vis_miles { get; set; }
        public double Gust_Mph { get; set; }
        public double Gust_Kph { get; set; }
        public double Uv { get; set; }
    }


}
