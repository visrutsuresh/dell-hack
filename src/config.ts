/**
 * When true: header bar auto-hides when cursor is away from the top,
 * and reappears when cursor moves near the top. Page content adjusts (reactive layout).
 * When false: header is always visible (current behavior).
 */
export const reactive_bar = false;

/** Pixel distance from top of viewport that counts as "near" the bar (shows bar when cursor is above this). */
export const REACTIVE_BAR_THRESHOLD_PX = 60;
