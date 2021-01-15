# containers

conect 将视图与 store 绑定关系，

mapStateToProps 将 store 上的状态（reducer 改变了的state传入）, 组成了新的视图todos， 但是store 永远保存了所有的todos：
 mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})


mapDispatchToProps 将改变store 的方法绑定到视图上:
```
<form
    onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
        return
        }
        dispatch(addTodo(input.value))
        input.value = ''
    }}
>
```

reducer， 与action 一一对应， action生成对象，reducer将生成对象混入store



