import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ApiService } from './ApiService';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
@Injectable({
  providedIn: 'root'
})


export class WeatherComponent implements OnInit {
  weather: any;
  isim: any;
  anlik_bilgiler: any;
  saat: any;
  dakika: any;
  yil: any;
  gun: any;
  ay: any;
  sicaklik: any;
  hava: any;
  resim: any;
  yeniBilgiler: any;
  newcity:string='';
  gundogumu:any=""
  gunbatimi:any=""
    
  




  @Output() setCityEvent=new EventEmitter<any>();

  setCity(){
    this.setCityEvent.emit(this.newcity); 
  
    this.apiService.getApiData(this.newcity).subscribe(data1 => {
      this.weather = data1;
      this.isim = this.weather.data[0].city_name;
      this.anlik_bilgiler = this.weather.data[0];

      this.sicaklik = Number(this.weather.data[0].app_temp);
      this.hava = this.weather.data[0].weather.description;
      // tarih ve saat ile ilgili veriler
      let zaman = new Date()
      this.saat = zaman.getHours();
      this.dakika = zaman.getMinutes();
      this.yil = zaman.getFullYear();
      this.ay = zaman.getMonth() + 1;
      this.gun = zaman.getDate();
    
      //diğer veriler
      this.gundogumu=this.weather.data[0].sunrise
      this.gunbatimi=this.weather.data[0].sunset
      
      let resimler = [
        { durum: 'Overcast clouds', url: 'https://st2.depositphotos.com/1064969/42557/v/1600/depositphotos_425573118-stock-illustration-weather-forecast-partly-cloudy-icon.jpg' },
        { durum: 'Broken clouds ', url: 'https://images.freejpgimages.com/vme/images/1/6/166202/symbols_weather_clear_sunny_preview.' },
        { durum: 'rainy', url: 'https://previews.123rf.com/images/carbo82/carbo821206/carbo82120600075/14181786-simge-ya%C4%9F%C4%B1%C5%9Fl%C4%B1-hava.jpg' },
        { durum: 'cloudy', url: 'https://images.freeimages.com/cme/images/istock/previews/7126/71264247-cloudy-icon-overcast-weather-sign.jpg' },
        { durum: 'Broken clouds', url: 'https://images.freeimages.com/cme/images/istock/previews/7126/71264247-cloudy-icon-overcast-weather-sign.jpg' },
        { durum: 'Clear Sky', url: 'https://images.freeimages.com/cme/images/istock/previews/7126/71264247-cloudy-icon-overcast-weather-sign.jpg' },


      ];

      let resimUrl = resimler.find(resim => resim.durum === this.hava);
      console.log(this.weather);
      
      if (resimUrl) {
        this.resim = resimUrl.url;
      } else {
        console.error("resim bulunamadı...");
      }

    });
   }
  
  
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getApiData(this.newcity).subscribe(data => {
    console.log(data);
    
      this.weather = data;
      this.isim = this.weather.data[0].city_name;
      this.anlik_bilgiler = this.weather.data[0];

      this.sicaklik = Number(this.weather.data[0].app_temp);
      this.hava = this.weather.data[0].weather.description;
      // tarih ve saat ile ilgili veriler
      let zaman = new Date()
      this.saat = zaman.getHours();
      this.dakika = zaman.getMinutes();
      this.yil = zaman.getFullYear();
      this.ay = zaman.getMonth() + 1;
      this.gun = zaman.getDate();
      this.gundogumu=this.weather.data[0].sunrise
      this.gunbatimi=this.weather.data[0].sunset


      

      let resimler = [
        { durum: 'Overcast clouds', url: 'https://st2.depositphotos.com/1064969/42557/v/1600/depositphotos_425573118-stock-illustration-weather-forecast-partly-cloudy-icon.jpg' },
        { durum: 'Broken clouds ', url: 'https://images.freejpgimages.com/vme/images/1/6/166202/symbols_weather_clear_sunny_preview.' },
        { durum: 'rainy', url: 'https://previews.123rf.com/images/carbo82/carbo821206/carbo82120600075/14181786-simge-ya%C4%9F%C4%B1%C5%9Fl%C4%B1-hava.jpg' },
        { durum: 'Broken clouds', url: 'https://images.freeimages.com/cme/images/istock/previews/7126/71264247-cloudy-icon-overcast-weather-sign.jpg' },
        { durum: 'Light rain', url: 'https://images.freeimages.com/cme/images/istock/previews/7126/71264247-cloudy-icon-overcast-weather-sign.jpg' },
        { durum: 'Clear Sky', url: 'https://images.freeimages.com/cme/images/istock/previews/7126/71264247-cloudy-icon-overcast-weather-sign.jpg' },


      ];

      let resimUrl = resimler.find(resim => resim.durum === this.hava);
      console.log(this.weather);
      
      if (resimUrl) {
        this.resim = resimUrl.url;
      } else {
        console.error("resim bulunamadı...");
      }


    });
  }
}
