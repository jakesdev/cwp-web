import { Action, ActionReducer } from '@ngrx/store';

export const logger = <T, V extends Action = Action>(
  reducer: ActionReducer<T, V>
): ActionReducer<T, V> => {
  return function (state, action) {
    const newState: T = reducer(state, action);
    if (action.type.toLocaleLowerCase().includes('success')) {
      console.groupCollapsed(
        `%c ${action.type}`,
        'text-transform: uppercase; color: #2ec4b6'
      );
    } else if (
      action.type.toLocaleLowerCase().includes('error') ||
      action.type.toLocaleLowerCase().includes('fail')
    ) {
      console.groupCollapsed(
        `%c ${action.type}`,
        'text-transform: uppercase; color: #e71d36'
      );
    } else {
      console.groupCollapsed(
        `%c ${action.type}`,
        'text-transform: uppercase; color: #000000'
      );
    }

    console.groupEnd();

    return newState;
  };
};
