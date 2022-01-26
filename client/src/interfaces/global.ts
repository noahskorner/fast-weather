export interface CityType {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
}

export enum SeverityType {
  Unkowwn = 0,
  Significant,
  Major,
  Moderate,
  Minor,
  Minimal,
  Insignificant,
  Informational,
}

export interface HeadlineType {
  EffectiveDate: Date;
  EffectiveEpochDate: number;
  Severity: SeverityType;
  Text: string;
  Category: string;
  EndDate: Date;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}

export interface DailyForecastType {
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
  };
  Night: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  };
  Sources: string[];
  MobileLink: string;
  Link: string;
}
