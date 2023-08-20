export interface ForecastOneDay  {
    Headline: {
      EffectiveDate: string;
      EffectiveEpochDate: number;
      Severity: number;
      Text: string;
      Category: string;
      EndDate: string;
      EndEpochDate: number;
      MobileLink: string;
      Link: string;
    };
    DailyForecasts: Array<{
      Date: string;
      EpochDate: number;
      Temperature: {
        Minimum: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Maximum: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
      };
      Day: {
        Icon: number;
        IconPhrase: string;
        HasPrecipitation: boolean;
        PrecipitationType: string;
        PrecipitationIntensity: string;
      };
      Night: {
        Icon: number;
        IconPhrase: string;
        HasPrecipitation: boolean;
        PrecipitationType: string;
        PrecipitationIntensity: string;
      };
      Sources: string[];
      MobileLink: string;
      Link: string;
    }>;
  };
  type TemperatureUnit = "C" | "F";

interface Temperature {
  Value: number;
  Unit: TemperatureUnit;
  UnitType: number;
}
export interface Current {
    LocalObservationDateTime: string;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType: string | null;
    IsDayTime: boolean;
    Temperature: {
      Metric: Temperature;
      Imperial: Temperature;
    };
    MobileLink: string;
    Link: string;
  }