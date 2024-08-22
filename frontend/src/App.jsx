import Home from "../src/components/pages/Home";
import { useState,useEffect } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Blog from "../src/components/pages/Blog";
import { EditorTextContextProvider } from "./components/context/EditorGlobal";
import AsideAdmin from "./components/layout/AsideAdmin";
import { AsideContextProvider } from "./components/context/AsideContext";
import ArticuloPage from "./components/pages/ArticuloPage";
import Auth from "./components/pages/Auth";
import EditArticulo from "./components/pages/EditArticulo";
import LayoutText from "./components/layout/LayoutText";
import { GlobalAuth } from "./context/GlobalAuth";
import { GlobalTheme } from "./context/GlobalTheme";
function App() {
  

  return (
    <GlobalTheme>

    <EditorTextContextProvider>
      <BrowserRouter>
        <GlobalAuth>

          <AsideContextProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="api/articulos/:id" element={<ArticuloPage />} />
              </Route>

              <Route element={<LayoutText />}>
                <Route element={<AsideAdmin />}>
                  <Route path="/blog" element={<Blog />} />
                </Route>
                <Route path="/editar/:id" element={<EditArticulo />} />
              </Route>

              <Route path="/auth" element={<Auth />} />
            </Routes>
          </AsideContextProvider>
          </GlobalAuth>
 
      </BrowserRouter>
    </EditorTextContextProvider>
    </GlobalTheme>

  );
}

export default App;
