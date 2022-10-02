type LevelFeature = "food" | "gravity" | "oxygen " | "temperature" | "water";

type Features = Record<LevelFeature, string>;

export type Level = {
  id: string;
  place: string;
  image_name: string;
  boss: Features;
  level: Record<LevelFeature, string[]>;
} & Features;
