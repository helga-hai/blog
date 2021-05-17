import type { CancelTokenSource } from 'axios';
import type { Error } from '~/interface/Error';

/**
 * Describes the common state.
 */
export interface CommonState {
  // Readiness state.
  ready: boolean;
  // Blocking processes.
  loading: number;
  // Unexpected error.
  unexpectedError: Error | null;
  // Ajax cancel tokens.
  ajaxCancelTokens: Record<string, CancelTokenSource> | null;
}

/**
 * The initial state of the layout.
 * @category CommonStore
 */
export default (): CommonState => ({
  // Readiness state.
  ready: false,
  // Blocking processes.
  loading: 0,
  // Unexpected error.
  unexpectedError: null,
  // Ajax cancel tokens.
  ajaxCancelTokens: null,
});
