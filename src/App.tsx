import { Header } from "./common/header";
import { WrapST } from "./component/wrap";
import { AppRouter } from "./router/approuter";

function App() {
    return (
        <>
            <WrapST>
                <Header></Header>
                <AppRouter></AppRouter>
            </WrapST>
        </>
    );
}

export default App;

