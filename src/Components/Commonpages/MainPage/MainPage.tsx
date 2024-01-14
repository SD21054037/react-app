import Header from "../../CommonComponents/Header/Header";
import "./MainPage.css";
import Footer from "../../CommonComponents/Footer/Footer";

export const MainPage = (): JSX.Element => {
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
            <article className="RecenteOnderzoek1">
              <div className="OnderzoekFrame">
                <h3 className="onderzoek-naam">Onderzoek u get me </h3>
                <div className="SoortOnderzoekTag">
                  <h4 className="onderzoek-soort">interview</h4>
                </div>
                <div className="onderzoek-beschrijving">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#039;s
                  standard dummy text ever since the 1500s,waefsgxrdhctfnhjihbgvjfchdexsgdrctfgyuhygtfcrthvgyhuygjrdhunjyxdsfcgvyhuykgjhuygjcfgvbhj,nk
                </div>
              </div>
            </article>
            <article className="RecenteOnderzoek2">
              <div className="OnderzoekFrame">
                <h3 className="onderzoek-naam">Onderzoek u get me </h3>
                <div className="SoortOnderzoekTag">
                  <h4 className="onderzoek-soort">interview</h4>
                </div>
                <div className="onderzoek-beschrijving">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#039;s
                  standard dummy text ever since the 1500s,
                </div>
              </div>
            </article>
            <article className="RecenteOnderzoek3">
              <div className="OnderzoekFrame">
                <h3 className="onderzoek-naam">Onderzoek u get me </h3>
                <div className="SoortOnderzoekTag">
                  <h4 className="onderzoek-soort">interview</h4>
                </div>
                <div className="onderzoek-beschrijving">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#039;s
                  standard dummy text ever since the 1500s,
                </div>
              </div>
            </article>
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
