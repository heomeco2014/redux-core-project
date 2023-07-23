import AddItem from './components/Add/AddItem'
import Priority from './components/Filter/Priority'
import Status from './components/Filter/Status'
import Search from './components/Search/Search'
import TodoList from './components/TodoList/TodoList'

function App() {
    return (
        <div className="shadow-lg max-w-xl mx-auto p-6 min-h-full">
            <h1 className="text-3xl font-bold">Todo app with REDUX</h1>
            <Search />
            <Status />
            <Priority />
            <TodoList />
            <AddItem />
        </div>
    )
}

export default App
