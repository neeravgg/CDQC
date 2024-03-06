export interface ITask {
  _id: string;
  text: string;
  isDone: boolean;
}

export interface IColor {
  _id: string;
  backgroundColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
}

export interface ILink {
  _id: string;
  url: string;
  title: string;
}

export type IconName = (
  "BirdIcon" | "BurdIcon" | "CoffeeIcon" | "CrossIcon" | "FireIcon" |
  "LogOutIcon" | "MoonIcon" | "NextIcon" | "PauseIcon" | "PlayIcon" |
  "PlaylistIcon" | "PlusIcon" | "RainIcon" | "RestartIcon" | "TickIcon" |
  "WindIcon" | "PreviousIcon" | "VolumeIcon"
)
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      primaryTextColor: string;
      secondaryTextColor: string;
    };
  }
}
