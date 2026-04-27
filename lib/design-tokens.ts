// Bu dosya scaffolder tarafından üretilir — elle düzenleme.
export const designTokens = {
  "colors": {
    "primary": "#C97B6A",
    "secondary": "#2B2422",
    "accent": "#E8A598",
    "background": "#FAF6F3",
    "foreground": "#2B2422",
    "muted": "#8A7A75",
    "border": "#E8DDD7"
  },
  "typography": {
    "headingFont": "Fraunces",
    "bodyFont": "Inter",
    "headingWeight": 400,
    "bodyWeight": 400,
    "scale": "spacious"
  },
  "layout": {
    "style": "editorial",
    "radius": "sm",
    "density": "airy",
    "containerWidth": "normal"
  },
  "mood": [
    "refined",
    "feminine",
    "warm",
    "sophisticated",
    "craft"
  ]
} as const;

export type DesignTokensShape = typeof designTokens;
