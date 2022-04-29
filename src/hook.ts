import { useMemo } from 'react';
import { stringTruncate } from '@ricardojrmcom/string-truncate';

/**
 * Truncates string to fit within given length with appended ellipsis. Option to keep last word.
 */
export const useStringTruncate = (
  str: string,
  length: number,
  keepLastWord?: boolean,
): string =>
  useMemo(
    () => stringTruncate(str, length, keepLastWord),
    [str, length, keepLastWord],
  );
