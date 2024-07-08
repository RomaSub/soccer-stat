import i18next from "i18next";
import { Provider } from "react-redux";
import { initReactI18next, I18nextProvider } from "react-i18next";
import resources from "./locales/index.ts";
import App from "./pages/App.tsx";
import rollbarConfig from "./rollbar/rollbarConfig.ts";
import { Provider as RollbarProvider, ErrorBoundary } from "@rollbar/react";
import store from "./services/index.ts";

function Init() {
  const i18n = i18next.createInstance();
  i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

  return (
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <App />
          </Provider>
        </I18nextProvider>
      </ErrorBoundary>
    </RollbarProvider>
  );
}

export default Init;
