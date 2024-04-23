import "./Details.css";

function Details() {
  return (
    <div className="Details">
      <header className="Details-header">Details</header>
      <div className="Details-section-container">
        <div className="Details-section">
          <div className="Details-section-header">Was ist React?</div>
          <div className="Details-section-text">
            React ist eine JavaScript-Programmbibliothek zur Erstellung von
            webbasierten Benutzeroberflächen. Komponenten werden in React
            hierarchisch aufgebaut und können in dessen Syntax als selbst
            definierte JSX-Tags repräsentiert werden. Das Modell von React
            verspricht durch die Konzepte des unidirektionalen Datenflusses und
            des Virtual DOM den einfachen, aber trotzdem performanten Aufbau
            auch komplexer Anwendungen. React bildet typischerweise die Basis
            für Single-Page-Webanwendungen, kann jedoch auch mit Node.js
            serverseitig (vor-)gerendert werden. React wurde ursprünglich von
            Jordan Walke, einem Softwareentwickler bei Facebook, entwickelt und
            2011 erstmals für Facebooks Newsfeed und später 2012 für Instagram
            eingesetzt. Im Mai 2013 wurde von Facebook angekündigt, React
            zukünftig als Open-Source-Projekt weiterführen zu wollen. Im Oktober
            2014 wurde die Lizenz von der anfangs Apache-Lizenz auf die
            BSD-Lizenz mit zusätzlicher Patentlizenz geändert, welche den
            Widerruf der Lizenz bei Klagen gegen oder bei Patentstreitigkeiten
            mit Facebook vorbehält. Diese unkonventionelle Klausel führte zu
            einer kontroversen Diskussion. Eine Umformulierung dieser
            Patentklausel im April 2015 beendete die Auseinandersetzung nicht.
            Im Juli 2017 kündigte die Apache Software Foundation an, keine
            Apache-Projekte mehr mit dieser Zusatzlizenz zu erlauben. Entgegen
            anfänglichen Angaben, nicht von der Klausel abrücken zu wollen,
            veröffentlichte Facebook im September 2017 React in der Version
            16.0.0 unter der MIT-Lizenz.
          </div>
        </div>
      </div>
      <footer className="Footer">
        <b>Quelle:</b>{" "}
        <a
          href="https://de.wikipedia.org/wiki/React"
          className="Details-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia - React
        </a>
      </footer>
    </div>
  );
}

export default Details;
