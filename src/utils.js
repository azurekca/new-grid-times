export const divider = side => `
  --divider-border: 1px solid var(--color-gray-300);
  --divider-space: 16px;
  border-${side}: var(--divider-border);
  padding-${side}: var(--divider-space);
  margin-${side}: var(--divider-space);
`;
