import Atropos from "atropos/react";
import { useLocalStorage } from "usehooks-ts";

import bg from "./i/atropos-bg.svg";
import mountains from "./i/atropos-mountains.svg";
import forestBack from "./i/atropos-forest-back.svg";
import forestMid from "./i/atropos-forest-mid.svg";
import forestFront from "./i/atropos-forest-front.svg";
import logoEn from "./i/atropos-logo-en.svg";
import { useTranslation } from "./utils/translaton";

const cardsOptions = [{}];

function App() {
  const { locale, toggleLocale, t } = useTranslation();
  const [roles, setRoles] = useLocalStorage("roles", []);
  const [players, setPlayers] = useLocalStorage("players", []);
  const [cards, setCards] = useLocalStorage("cards", []);

  const localeToggleLabel = locale === "en" ? "فارسی" : "English";

  const reset = () => {
    setRoles([]);
    setPlayers([]);
    setCards([]);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={reset}>{t("reset")}</button>
      <button onClick={() => toggleLocale()}>{localeToggleLabel}</button>
      <div className="container">
        <Atropos
          className="atropos-banner"
          highlight={false}
          onEnter={() => console.log("enter")}
          onClick={() => console.log("click")}
        >
          <img className="atropos-banner-spacer" src={bg} alt="" />
          <img data-atropos-offset="-4.5" src={bg} alt="" />
          <img data-atropos-offset="-2.5" src={mountains} alt="" />
          <img data-atropos-offset="0" src={forestBack} alt="" />
          <img data-atropos-offset="2" src={forestMid} alt="" />
          <img data-atropos-offset="4" src={forestFront} alt="" />
          <img data-atropos-offset="5" src={logoEn} alt="" />
        </Atropos>
      </div>
      <div className="">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
