import React from 'react';

/**
 * Exported component
 */
export const Component = ({ text }: ComponentProps) => (
  <div data-testid="test-component">{text}</div>
);

/**
 * Exported component props
 */
export interface ComponentProps {
  /**
   * Prop
   */
  text: string;
}
