/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./style.css";

export default function HomePage() {
  const [xpNumber, setXpNumber] = useState(100); // to be changed to userdata
  const [xpLimit, setXpLimit] = useState(2000);
  const [xp300Claimed, setXp300Claimed] = useState(false);
  const [xp1000Claimed, setXp1000Claimed] = useState(false);
  const [xp2500Claimed, setXp2500Claimed] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0); // to be changed to userdata
  const [currentTitle, setCurrentTitle] = useState("Cidadão"); // to be changed to userdata
  const [currentStreak, setCurrentStreak] = useState(0); // to be changed to userdata
  const [isScannerVisible, setIsScannerVisible] = useState(false);
  const readerRef = useRef(null);
  const scannerRef = useRef(null);
  const xpString = `${xpNumber} / ${xpLimit} XP`;
  const barPercentage = Math.min(100, (xpNumber / xpLimit) * 100);

  const adjust_xp = (number) => {
    setXpNumber((prev) => prev + number);
  };

  useEffect(() => {
    if (xpNumber >= xpLimit) {
      setXpNumber((prev) => prev - xpLimit);
      setXpLimit((prev) => prev * 2);
      setCurrentLevel((prev) => prev + 1);
      setCurrentTitle("Cidadão Consciente");
    }
  }, [xpNumber, xpLimit]);

  useEffect(() => {
    if (!isScannerVisible) return;

    const onScanSuccess = (decodedText, decodedResult) => {
      // handle the scanned code
      console.log(`Code matched = ${decodedText}`, decodedResult);
      if (
        decodedText === "https://pt.wikipedia.org/wiki/Reciclagem" &&
        !xp300Claimed
      ) {
        adjust_xp(300);
        setXp300Claimed(true);
      }
      if (
        decodedText === "https://pt.wikipedia.org/wiki/Recife" &&
        !xp1000Claimed
      ) {
        adjust_xp(1000);
        setXp1000Claimed(true);
      }
      if (
        decodedText === "https://pt.wikipedia.org/wiki/Capivara" &&
        !xp2500Claimed
      ) {
        adjust_xp(2500);
        setXp2500Claimed(true);
      }
    };

    const onScanFailure = (error) => {
      // ignore or log
    };

    try {
      scannerRef.current = new Html5QrcodeScanner(
        readerRef.current?.id ?? "reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        false
      );
      scannerRef.current.render(onScanSuccess, onScanFailure);
    } catch (e) {
      console.error(e);
    }

    return () => {
      if (scannerRef.current) {
        try {
          scannerRef.current.clear();
        } catch (e) {
          /* ignore */
        }
        scannerRef.current = null;
      }
    };
  }, [isScannerVisible, xp300Claimed, xp1000Claimed, xp2500Claimed]);

  const showScanner = () => setIsScannerVisible(true);

  return (
    <>
    <body>
        <div className="dashboard-container">
        <header>
            <div className="logo">
            <h1>Ecocapiba</h1>
            </div>
            <div className="status-ofensiva">
            <span className="dias-ofensiva"> {currentStreak} dia{currentStreak!==1 ? 's': ''}  de ofensiva</span>
            <div className="medidor-fogo">
                {currentStreak >= 1 && <i className="fa-solid fa-fire status-fire-icon"></i>}
                <span className="status-u">U</span>
            </div>
            </div>
        </header>

        <main>
            <section className="card quiz-section">
            <h2>Quizzes Ecológicos</h2>

            <div className="quiz-item quiz-active">
                <div className="quiz-info">
                <p>Seu próximo desafio:</p>
                <h3>O Ciclo do Plástico</h3>
                </div>
                <button className="btn btn-primary">Começar</button>
            </div>

            <p className="fila-title">Próximos na fila:</p>

            <div className="quiz-item locked">
                <div className="quiz-info">
                <h4>Reciclagem de Vidro</h4>
                </div>
                <div className="quiz-undone">
                <span className="locked-text">A ser iniciado</span>
                </div>
            </div>

            <div className="quiz-item locked">
                <div className="quiz-info">
                <h4>Compostagem Caseira</h4>
                </div>
                <div className="quiz-undone">
                <span className="locked-text">A ser iniciado</span>
                </div>
            </div>
            </section>

            <section className="card action-section">
            <div className="action-content">
                <div className="map-pin">
                <i className="fa-solid fa-location-dot"></i>
                </div>
                <h3>Ação de Reciclagem</h3>
                <p>
                Leve seus recicláveis a um centro de coleta e registre para ganhar
                XP.
                </p>
                <button className="btn btn-action-register" onClick={showScanner}>
                Registrar Ação Ecológica
                </button>
            </div>

            <div
                id="reader"
                ref={readerRef}
                style={{
                display: isScannerVisible ? "block" : "none",
                width: "600px",
                height: "600px",
                }}
            />
            </section>
        </main>

        <aside>
            <section className="card card-level-highlight">
            <h3>Nível da Conta</h3>
            <h2 id="level_and_title">{`Nível ${currentLevel}: ${currentTitle}`}</h2>
            <p className="continue-text">
                Continue assim para desbloquear novas recompensas!
            </p>

            <div className="xp-container">
                <div className="xp-track">
                <div
                    className="xp-fill"
                    id="xp_bar"
                    style={{ width: `${barPercentage}%` }}
                />
                </div>
                <span className="xp-text" id="xp_txt">
                {xpString}
                </span>
            </div>
            </section>

            <section className="card share-section">
            <h3>Compartilhe e Ganhe!</h3>
            <p>Convide seus amigos e ganhe recompensas juntos.</p>

            <div className="share-link-box">eccocapiba.com/convite/1a2b3c</div>

            <div className="social-buttons">
                <a
                href="#"
                className="btn btn-social btn-whatsapp"
                id="whatsapp-share"
                role="button"
                aria-label="Compartilhar no WhatsApp"
                >
                <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a
                href="#"
                className="btn btn-social btn-instagram"
                id="instagram-share"
                role="button"
                aria-label="Compartilhar no Instagram"
                >
                <i className="fab fa-instagram"></i> Instagram
                </a>
            </div>
            </section>
        </aside>
        </div>
    </body>
    </>
  );
}
