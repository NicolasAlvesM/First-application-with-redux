import TodoList from './pages/TodoList';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoReducer from './reducers/todoReducer'
const store = createStore(todoReducer)
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList/>
      </div>
    </Provider>
  );
}

export default App;
