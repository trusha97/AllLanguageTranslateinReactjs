import "./language";
import "./index.css"
import AppLayout from "./layouts";
import AppProvider from "./provider";
import AppRoutes from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <AppProvider>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </AppProvider>
    </>
  );
}

export default App;
