import Header from "../../CommonComponents/Header/Header";
import "./MainPage.css";
import Footer from "../../CommonComponents/Footer/Footer";
import { useState } from "react"
import {Button} from "@chakra-ui/react"


interface Onderzoeken {
  id: number;
  naam: string;
  soort: string;
  beschrijving: string;
  typebeperking?:string;
  uitvoerder?:string;
  adres?:string
  postcode?:string
  link?:string
  beloning?:string
  uitnodiging?:string
}

interface Props{
  onderzoeken: Onderzoeken[]
  navigate: (id: number) => void;
}


export const MainPage = ({onderzoeken}: Props): JSX.Element => {
  return (
    <div className="main-page">
      <Header></Header>
      <main className="MainpageContent">
        <div className="Opener">
          <p className="OpenerText">
            Samen met onze partners en klanten werken we aan een inclusieve
            samenleving die toegankelijk is voor iedereen.
          </p>
        </div>
        <div className="RecenteOnderzoekenContent">
          <h2 className="ROContentTitel">Recente Onderzoeken</h2>
          <div className="RecenteOnderzoeken">
          {onderzoeken.slice(0,3).map((onderzoek) => (
            <article key={onderzoek.id} className="RecenteOnderzoek1" >
              <div className="OnderzoekFrame">
                <h3 className="onderzoek-naam">{onderzoek.naam}</h3>
                <div className="SoortOnderzoekTag">
                  <h4 className="onderzoek-soort">{onderzoek.soort}</h4>
                </div>
                <div className="onderzoek-beschrijving">
                  {onderzoek.beschrijving}
                </div>
                <Button>View here</Button>
              </div>
            </article>
          ) )}
            
          </div>
        </div>
        <div className="GoogleNieuwsArtikelen">
          <div className="google-new-artikel">
            <div className="GoogleNieuwsTextFrame">
            <div className="news-source">Lorem ipsum</div>
              <div className="NieuwsTextAchtergrond">
                <div className="NieuwsKopje">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </div>
                <div className="NieuwsBeschrijving">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&#039;s standard
                  dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It
                  has survived not only five centuries,
                </div>
              </div>
            </div>
            <img className="news-picture" src="news-picture0.png" aria-label="Nieuwsfoto"/>
          </div>
          <div className="google-new-artikel">
            <div className="GoogleNieuwsTextFrame">
            <div className="news-source">Lorem ipsum</div>
              <div className="NieuwsTextAchtergrond">
                <div className="NieuwsKopje">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </div>
                <div className="NieuwsBeschrijving">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&#039;s standard
                  dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It
                  has survived not only five centuries,
                </div>
              </div>
            </div>
            <img className="news-picture" src="news-picture0.png" aria-label="Nieuwsfoto"/>
          </div>
          <div className="google-new-artikel">
            <div className="GoogleNieuwsTextFrame">
            <div className="news-source">Lorem ipsum</div>
              <div className="NieuwsTextAchtergrond">
                <div className="NieuwsKopje">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </div>
                <div className="NieuwsBeschrijving">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&#039;s standard
                  dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It
                  has survived not only five centuries,
                </div>
              </div>
            </div>
            <img className="news-picture" src="news-picture0.png" aria-label="Nieuwsfoto"/>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};
