/**
 * Describes the configs state.
 */
export interface ConfigsState {
  lang: string;
  langs: string[];
  cdnUrl: string;
}

/**
 * The initial state of the layout.
 * @category ConfigsState
 */
export default (): ConfigsState => ({
  lang: 'en',
  langs: ['en', 'ru'],
  cdnUrl: '',
});
