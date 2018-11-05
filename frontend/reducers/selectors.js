export const allTodos = (state) => {
  const keys = Object.keys(state.todos);
  return keys.map((key) => {
    const {id, title, body, done} = state.todos[key];
    return {
      id: id,
      title: title,
      body: body,
      done: done
    };
  });
};

export const allTitles = (state) => {
  const ids = allTodos(state);
  return ids.map((id) => {
    return state.todos[id].title;
  });
};
