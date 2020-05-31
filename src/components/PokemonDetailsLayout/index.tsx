import React, { FC } from "react";
import "./style.scss";

type Props = {
  pokemonName: string;
  pokemonId: number;
  images: React.ReactElement;
  color: string | undefined;
  types: React.ReactElement;
  descriptionTitle: string | undefined;
  description: React.ReactElement;
  profile: React.ReactElement;
  abilities: React.ReactElement;
  stats: React.ReactElement;
  backgroundImageUrl: string | undefined;
};

export const PokemonDetailsLayout: FC<Props> = props => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const originalAccentColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--accent-color");

    const originalAccentTextColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--accent-text-color");

    const originalAccentColorHighlight = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--accent-color-highlight");

    

    switch (props.color) {
      case "black":
        document.documentElement.style.setProperty("--accent-text-color", "white");
        document.documentElement.style.setProperty("--accent-color", "black");
        document.documentElement.style.setProperty("--accent-color-highlight", "grey");
        break;
      case "blue":
        document.documentElement.style.setProperty("--accent-color", "#3a86ff");
        document.documentElement.style.setProperty("--accent-color-highlight", "#2366D1");
        break;
      case "brown":
        document.documentElement.style.setProperty("--accent-color", "#a12727");
        document.documentElement.style.setProperty("--accent-color-highlight", "#831313");
        break;
      case "gray":
        document.documentElement.style.setProperty("--accent-color", "#525252");
        document.documentElement.style.setProperty("--accent-color-highlight", "#362d2d");
        break;
      case "green":
        document.documentElement.style.setProperty("--accent-color", "#77c360");
        document.documentElement.style.setProperty("--accent-color-highlight", "#498e35");
        break;
      case "pink":
        document.documentElement.style.setProperty("--accent-color", "#ff8196");
        document.documentElement.style.setProperty("--accent-color-highlight", "#cc4c61");
        break;
      case "purple":
        document.documentElement.style.setProperty("--accent-color", "#800080");
        document.documentElement.style.setProperty("--accent-color-highlight", "#620b62");
        break;
      case "red":
        document.documentElement.style.setProperty("--accent-color", "#f53e2a");
        document.documentElement.style.setProperty("--accent-color-highlight", "#b72a1a");
        break;
      case "white":
        document.documentElement.style.setProperty("--accent-text-color", "black");
        document.documentElement.style.setProperty("--accent-color", "white");
        document.documentElement.style.setProperty("--accent-color-highlight", "grey");
        break;
      case "yellow":
        document.documentElement.style.setProperty("--accent-text-color", "#695f00");
        document.documentElement.style.setProperty("--accent-color", "#fffb10");
        document.documentElement.style.setProperty("--accent-color-highlight", "#d1cc3e");
        break;
    }

    syncThemeColorWithAccentColor();

    return () => {
      document.documentElement.style.setProperty(
        "--accent-text-color",
        originalAccentTextColor
      );
      document.documentElement.style.setProperty("--accent-color", originalAccentColor);
      document.documentElement.style.setProperty("--accent-color-highlight", originalAccentColorHighlight);

      syncThemeColorWithAccentColor();
    };
  }, [props.color]);

  return (
    <div className="pokemon-details" ref={ref}>
      <article className="pokemon-details__content">
        <header className="pokemon-details__header">
          {props.pokemonName}
          <aside title="Pokemon ID">#{props.pokemonId}</aside>
        </header>
        <section className="pokemon-details__images">{props.images}</section>
        <section className="pokemon-details__types">{props.types}</section>
        <section className="pokemon-details__description">
          <div className="pokemon-details__section-title">{props.descriptionTitle}</div>
          <div className="pokemon-details__descrition-text">{props.description}</div>
        </section>
        <section className="pokemon-details__profile">
          <div className="pokemon-details__section-title">Profile</div>
          {props.profile}
        </section>
        <section className="pokemon-details__abilities">
          <div className="pokemon-details__section-title">Abilities</div>
          {props.abilities}
        </section>
        <section className="pokemon-details__stats">
          <div className="pokemon-details__section-title">Stats</div>
          {props.stats}
        </section>
        <div
          className="pokemon-details__background"
          style={{ backgroundImage: `url(${props.backgroundImageUrl})` }}
        ></div>
      </article>
    </div>
  );
};

export default PokemonDetailsLayout;

function syncThemeColorWithAccentColor() {
  document
    .querySelector("meta[name=theme-color]")
    ?.setAttribute(
      "content",
      getComputedStyle(document.documentElement).getPropertyValue("--accent-color")
    );
}
