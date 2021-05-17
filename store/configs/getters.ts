import { ConfigsState } from './state';

export default {
  domain(state: ConfigsState): string {
    return state.cdnUrl ?? '';
  },
  activeLang(state: ConfigsState): string {
    return state.lang;
  },
  availableLangs(state: ConfigsState): string[] {
    return state.langs;
  },
};
