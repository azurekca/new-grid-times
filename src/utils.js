/**
 * Styles for a thin border to be applied to one element that creates
 * a visually centered border between that element and it's adjacent element.
 * The centering comes from sandwiching the border between equal padding
 * and margin applied to the same side of the element.
 *
 * Adds css variables to create the effect that can then be modified by affected children.
 *
 * @params {String} side The side of the element to create the border on. 'top' | 'bottom' | 'left' | 'right'
 * @returns {String} The style declarations.
 */
export const divider = side => `
  --divider-border: 1px solid var(--color-gray-300);
  --divider-space: 16px;
  border-${side}: var(--divider-border);
  padding-${side}: var(--divider-space);
  margin-${side}: var(--divider-space);
`;
