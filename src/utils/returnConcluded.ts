export function returnConcluded(todos: any[]) {
  let concludedQtd = 0;
  todos.forEach((item) => {
    if (item.concluded == true) {
      concludedQtd++;
    }
  });

  return concludedQtd;
}
