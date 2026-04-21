// Bu dosya scaffolder tarafından üretilir — elle düzenleme.
export const designTokens = {
  "colors": {
    "primary": "#C87A6F",
    "secondary": "#2B2420",
    "accent": "#D4A574",
    "background": "#FBF4F1",
    "foreground": "#2B2420",
    "muted": "#8B7A74",
    "border": "#E8D7D1"
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
    "calm"
  ]
} as const;

export type DesignTokensShape = typeof designTokens;
