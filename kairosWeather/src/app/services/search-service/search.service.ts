import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private _weatherCity: any;
  private _weatherTemp: any;

  constructor(private _http: HttpClient) { }

  searchCity(pCityName: String) {
      this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + pCityName + "&APPID=a3c1215fa400097df12aafd99267ae46")
      .subscribe((response: any) => {
              this.setWeatherCity(response.name);
              this.setWeatherTemp(response.main.temp);
        },  
        () => alert("Algum erro ocorreu, por favor verifique o nome da cidade e busque novamente.")
      )
  }
  public getWeatherCity(): any {
    return this._weatherCity;
  }

  public setWeatherCity(value: any) {
    this._weatherCity = value;
  }

  public getWeatherTemp(): any {
    return this._weatherTemp;
  }

  public setWeatherTemp(value: any) {
    this._weatherTemp = value;
    this._weatherTemp = this._weatherTemp - 273,15;
    this._weatherTemp = parseFloat(this._weatherTemp).toFixed(1);
  }
}
