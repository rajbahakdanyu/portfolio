import Landing from "./pages/Landing"
import { MainProvider } from "./providers/MainProvider"

const App = () => (
    <MainProvider>
        <Landing />
    </MainProvider>
)

export default App
