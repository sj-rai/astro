import { fileURLToPath } from "url";

export const CSS_THEME_URL = fileURLToPath(new URL('./css-shiki-theme.json', import.meta.url));

/**
 * Shiki was designed for VSCode, so CSS variables are not currently supported.
 * See: https://github.com/shikijs/shiki/pull/212#issuecomment-906924986
 * 
 * Instead, we work around this by using valid hex color codes as lookups
 * in a final "repair" step which translates those codes to CSS variables.
 * Because we control the theme itself, we can guarantee these replacements.
 */
const COLOR_REPLACEMENTS: [RegExp, string][] = [
    [/style="(background-)?color: #000001"/g, 'style="$1color: var(--astro-code-color-text)"'],
    [/style="(background-)?color: #000002"/g, 'style="$1color: var(--astro-code-color-background)"'],
    [/style="(background-)?color: #000004"/g, 'style="$1color: var(--astro-code-token-constant)"'],
    [/style="(background-)?color: #000005"/g, 'style="$1color: var(--astro-code-token-string)"'],
    [/style="(background-)?color: #000006"/g, 'style="$1color: var(--astro-code-token-comment)"'],
    [/style="(background-)?color: #000007"/g, 'style="$1color: var(--astro-code-token-keyword)"'],
    [/style="(background-)?color: #000008"/g, 'style="$1color: var(--astro-code-token-parameter)"'],
    [/style="(background-)?color: #000009"/g, 'style="$1color: var(--astro-code-token-function)"'],
    [/style="(background-)?color: #000010"/g, 'style="$1color: var(--astro-code-token-string-expression)"'],
    [/style="(background-)?color: #000011"/g, 'style="$1color: var(--astro-code-token-punctuation)"'],
    [/style="(background-)?color: #000012"/g, 'style="$1color: var(--astro-code-token-link)"'],
  ];
  
  /** Replace the shiki class name with a custom astro class name. */
  export function repairClassName(html: string): string {
    html = html.replace('<pre class="shiki"', '<pre class="astro-code"');
    return html;
  }

  /** Replace the shiki custom css theme colors with css variables */
  export function repairCssThemeColors(html: string): string {
    for (const [key, val] of COLOR_REPLACEMENTS) {
      html = html.replace(key, val);
    }
    return html;
  }