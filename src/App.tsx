import "./App.css";
import { CartProvider } from "./Utils/CartContext";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Content from "./containers/Content/Content";

const App = () => {
    let portal = "User";

    return (
        <CartProvider>
            <div className="App">
                <Header portal={portal} />
                <Content portal={portal} />
                <Footer />
            </div>
        </CartProvider>
    );
};

export default App;
