import Header from "../Header/Header";
import "./MainPage.css";

export const MainPage = (): JSX.Element => {
  return (
    <div className="main-page">
      <Header></Header>
      <div className="yaptekst">
        <div className="samen-met-onze-partners-en-klanten-werken-we-aan-een-inclusieve-samenleving-die-toegankelijk-is-voor-iedereen">
          Samen met onze partners en klanten werken we aan een inclusieve
          samenleving die toegankelijk is voor iedereen.
        </div>
      </div>
      <div className="recente-onderzoeken-plek">
        <div className="title-recente-onderzoeken">
          <div className="recente-onderzoeken">Recente Onderzoeken </div>
        </div>
        <div className="frame-2">
          <div className="recente-onderzoek-3">
            <div className="frame-41">
              <div className="onderzoek-naam">Lorem Ipsum </div>
              <div className="onderzoek-beschrijving">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#039;s standard
                dummy text ever since the 1500s,{" "}
              </div>
            </div>
            <div className="onderzoek-kopje">
              <div className="onderzoek-soort">Lorem ipsum </div>
            </div>
          </div>
          <div className="recente-onderzoek-2">
            <div className="frame-41">
              <div className="onderzoek-naam">Lorem Ipsum </div>
              <div className="onderzoek-beschrijving">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#039;s standard
                dummy text ever since the 1500s,{" "}
              </div>
            </div>
            <div className="onderzoek-kopje">
              <div className="onderzoek-soort">Lorem ipsum </div>
            </div>
          </div>
          <div className="recente-onderzoek-1">
            <div className="frame-41">
              <div className="onderzoek-naam">Lorem Ipsum </div>
              <div className="onderzoek-beschrijving">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#039;s standard
                dummy text ever since the 1500s,{" "}
              </div>
            </div>
            <div className="onderzoek-kopje">
              <div className="onderzoek-soort">Lorem ipsum </div>
            </div>
          </div>
        </div>
      </div>
      <div className="google-new-artikel-2">
        <div className="google-news-background"></div>
        <div className="textframe">
          <div className="news-kopje">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </div>
          <div className="news-yap">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#039;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries,{" "}
          </div>
        </div>
        <div className="titleframe">
          <div className="news-source">Lorem ipsum </div>
        </div>
        <img className="news-picture" src="news-picture0.png" />
      </div>
      <div className="google-news-artikel-1">
        <div className="google-news-background"></div>
        <div className="textframe2">
          <div className="group-94">
            <div className="news-yap2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#039;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </div>
            <div className="news-kopje2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </div>
          </div>
        </div>
        <div className="titleframe2">
          <div className="news-source">Lorem ipsum </div>
        </div>
        <img className="news-picture2" src="news-picture1.png" />
      </div>
      <div className="google-new-artikel-3">
        <div className="google-news-background"></div>
        <div className="textframe3">
          <div className="group-94">
            <div className="news-yap2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#039;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </div>
            <div className="news-kopje2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </div>
          </div>
        </div>
        <div className="titleframe3">
          <div className="news-source">Lorem ipsum </div>
        </div>
        <img className="news-picture" src="news-picture2.png" />
      </div>
      <div className="footer">
        <div className="footer-elements-1">
          <div className="snel-naar">
            <span className="snel-naar-span">Snel naar..</span>
            <span className="snel-naar-span2">.</span>
          </div>
          <div className="actueel">Actueel </div>
          <div className="algemene-voorwaarden">Algemene voorwaarden </div>
          <div className="privacy-policy">Privacy Policy </div>
          <div className="faq">FAQ </div>
        </div>
        <div className="footer-contact">
          <div className="contact">Contact </div>
          <div className="_030-239-82-70">030 - 239 82 70 </div>
          <div className="info-accessibility">info@accessibility </div>
        </div>
        <div className="footer-elements-2">
          <div className="hoe-wij-helpen">Hoe wij helpen </div>
          <div className="audits">Audits </div>
          <div className="gebruikersonderzoek">Gebruikersonderzoek </div>
          <div className="trainingen">Trainingen </div>
          <div className="advies">Advies </div>
        </div>
      </div>
    </div>
  );
};
