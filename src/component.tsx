import React from 'react';
import { useStringTruncate } from '.';

/**
 * Truncates string to fit within given length with appended ellipsis. Option to keep last word.
 */
export const TruncateString = ({
  str,
  length,
  keepLastWord,
}: TruncateStringProps) => (
  <div data-testid="str-trc">
    {useStringTruncate(str, length, keepLastWord)}
  </div>
);

/**
 * Exported TruncateString props
 */
export interface TruncateStringProps {
  /**
   * String to transform
   */
  str: string;
  /**
   * Total length of the result
   */
  length: number;
  /**
   * Option to keep last word in
   */
  keepLastWord?: boolean;
}
