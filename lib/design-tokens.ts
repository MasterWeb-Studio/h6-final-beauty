// Bu dosya scaffolder tarafından üretilir — elle düzenleme.
export const designTokens = {
  "colors": {
    "primary": "#C97B6A",
    "secondary": "#1A1A1A",
    "accent": "#E8A598",
    "background": "#FAF6F3",
    "foreground": "#1F1815",
    "muted": "#8C7B73",
    "border": "#EADDD5"
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
    "luxurious",
    "calm"
  ]
} as const;

export type DesignTokensShape = typeof designTokens;
