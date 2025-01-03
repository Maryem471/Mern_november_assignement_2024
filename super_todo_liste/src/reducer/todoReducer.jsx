export const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, { id: Date.now(), content: action.payload, completed: false }];
      case 'REMOVE_TODO':
        return state.filter((todo) => todo.id !== action.payload);
      case 'TOGGLE_TODO':
        return state.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        );
      default:
        return state;
    }
  };
  