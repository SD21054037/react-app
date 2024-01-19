import React from 'react';
import Header from '../../CommonComponents/Header/Header';
import { useParams } from 'react-router-dom';
import "./Onderzoek.css";

const Onderzoek = () => {
  const { onderzoekId } = useParams();
 // fetch naar voor de ondezoek details moet hier komen
 // en hier onder zet ik alles erin 

  const onderzoek = {
    id: onderzoekId,
    naam: "Onderzoek Naam",
    soort: "online onderzoeken",
    beschrijving: "Onderzoek beschrijving",
    vragenlijstLink: "https://example.com/vragenlijst",
    onlineOpdrachtUitleg: "Uitleg van de online opdracht",
    onlineOpdrachtLink: "https://example.com/online-opdracht",
    uitnodigingDetails: "Details van de uitnodiging",
    contactpersoon: "Naam Contactpersoon",
  };

  const renderOnderzoekDetails = () => {
    switch (onderzoek.soort) {
      case "vragenlijst":
        return (
          <>
            <p>Dit onderzoek is een vragenlijst. Klik op de onderstaande link om de vragenlijst in te vullen:</p>
            <a href={onderzoek.vragenlijstLink} target="_blank" rel="noopener noreferrer">Ga naar vragenlijst</a>
          </>
        );
      case "online onderzoeken":
        return (
          <>
            <p>Dit onderzoek is een online opdracht. Hier is de uitleg van de opdracht:</p>
            <p>{onderzoek.onlineOpdrachtUitleg}</p>
            <p>Klik op de onderstaande link om de online opdracht te starten:</p>
            <a href={onderzoek.onlineOpdrachtLink} target="_blank" rel="noopener noreferrer">Start online opdracht</a>
          </>
        );
      case "Groepsgesprekken":
        return (
          <>
            <p>Dit onderzoek is een uitnodiging. Hier zijn de details:</p>
            <p>{onderzoek.uitnodigingDetails}</p>
            <p>Contactpersoon: {onderzoek.contactpersoon}</p>
          </>
        );
        case "Engelstalige onderzoeken":
        return (
          <p>Details voor Engelstalige onderzoeken</p>
        );
      default:
        return null;
    }
  };

  return (
    <div className='Onderzoek'>
      <Header />
      <div className="randomfoto"><img src="public/Images/betererandomfoto.jpg" alt="" /></div>
      <div className="GeselecteerdeOnderzoekFrame">
        <div className="GeselecteerdeOnderzoekDetails">
          <h2>{onderzoek.naam}</h2>
          <p>{onderzoek.beschrijving}</p>
          {renderOnderzoekDetails()}
        </div>
        <div className="OnderzoekExtras">
          <button>Ik heb interesse om deel te nemen aan dit onderzoek.</button>
        </div>
      </div>
    </div>
  );
};

export default Onderzoek;
