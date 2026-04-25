// Bu dosya scaffolder tarafından üretilir — elle düzenleme.
export const designTokens = {
  "colors": {
    "primary": "#D9826B",
    "secondary": "#F5DCD2",
    "accent": "#E94E2B",
    "background": "#FDF6F2",
    "foreground": "#2A2421",
    "muted": "#9B8B83",
    "border": "#EAD9D1"
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
    "warm",
    "feminine",
    "premium",
    "calm"
  ]
} as const;

export type DesignTokensShape = typeof designTokens;
