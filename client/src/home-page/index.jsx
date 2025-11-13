import React, { useState, useEffect } from 'react';

const EcoCapibaDashboard = () => {
    const [xpNumber, setXpNumber] = useState(100);
    const [xp300claimed, setXp300claimed] = useState(false);
    const [xp1000claimed, setXp1000claimed] = useState(false);
    const [xp2500claimed, setXp2500claimed] = useState(false);
    const [xpLimit, setXpLimit] = useState(2000);
    const [currentLevel, setCurrentLevel] = useState(0);
    const [currentTitle, setCurrentTitle] = useState("Cidadão");
    const [isScannerVisible, setIsScannerVisible] = useState(false);

    const xpString = `${xpNumber} / ${xpLimit} XP`;
    const barPercentage = (xpNumber / xpLimit) * 100;

    const adjust_xp = (number) => {
        setXpNumber(prevXp => prevXp + number);
    };

    useEffect(() => {
        if (xpNumber >= xpLimit) {
            setXpNumber(prevXp => prevXp - xpLimit);
            setXpLimit(prevLimit => prevLimit * 2);
            setCurrentLevel(prevLevel => prevLevel + 1);
            setCurrentTitle("Cidadão Consciente");
        }
    }, [xpNumber, xpLimit]);

    useEffect(() => {
        let scanner;
        if (isScannerVisible) {
            const onScanSuccess = (decodedText, decodedResult) => {
                if (decodedText === "https://pt.wikipedia.org/wiki/Reciclagem" && !xp300claimed) {
                    adjust_xp(300);
                    setXp300claimed(true);
                }
                if (decodedText === "https://pt.wikipedia.org/wiki/Recife" && !xp1000claimed) {
                    adjust_xp(1000);
                    setXp1000claimed(true);
                }
                if (decodedText === "https://pt.wikipedia.org/wiki/Capivara" && !xp2500claimed) {
                    adjust_xp(2500);
                    setXp2500claimed(true);
                }
            };

            const onScanFailure = (error) => {
            };

            scanner = new window.Html5QrcodeScanner(
                "reader",
                { fps: 10, qrbox: { width: 250, height: 250 } },
                false
            );
            scanner.render(onScanSuccess, onScanFailure);
        }

        return () => {
            if (scanner) {
                try {
                    scanner.clear();
                } catch (error) {
                }
            }
        };
    }, [isScannerVisible, xp300claimed, xp1000claimed, xp2500claimed]);

    const show_scanner = () => {
        setIsScannerVisible(true);
    };

    return (
        <div className="dashboard-container">
            <header className="app-header">
                <div className="logo">
                    <h1>EcoCapiba</h1>
                </div>
                <div className="status-ofensiva">
                    <span className="dias-ofensiva">0 dias de ofensiva</span>
                    <div className="medidor-fogo">
                        <i className="fa-solid fa-fire status-fire-icon"></i>
                        <span className="status-u">
                            U
                        </span>
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
                        <p>Leve seus recicláveis a um centro de coleta e registre para ganhar XP.</p>
                        <button className="btn btn-action-register" onClick={show_scanner}>
                            Registrar Ação Ecológica
                        </button>
                    </div>
                    {isScannerVisible && <div id="reader"></div>}
                </section>
            </main>

            <aside>
                <section className="card card-level-highlight">
                    <h3>Nível da Conta</h3>
                    <h2 id="level_and_title">{`Nível ${currentLevel}: ${currentTitle}`}</h2>
                    <p className="continue-text">Continue assim para desbloquear novas recompensas!</p>
                    
                    <div className="xp-container">
                        <div className="xp-track">
                            <div className="xp-fill" id="xp_bar" style={{ width: `${barPercentage}%` }}></div>
                        </div>
                        <span className="xp-text" id="xp_txt">{xpString}</span>
                    </div>
                </section>

                <section className="card share-section">
                    <h3>Compartilhe e Ganhe!</h3>
                    <p>Convide seus amigos e ganhe recompensas juntos.</p>
                    
                    <div className="share-link-box">
                        eccocapiba.com/convite/1a2b3c
                    </div>

                    <div className="social-buttons">
                        <a href="#" className="btn btn-social btn-whatsapp" id="whatsapp-share" role="button" aria-label="Compartilhar no WhatsApp">
                            <i className="fab fa-whatsapp"></i> WhatsApp
                        </a>
                        <a href="#" className="btn btn-social btn-instagram" id="instagram-share" role="button" aria-label="Compartilhar no Instagram">
                         <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </section>
            </aside>
        </div>
    );
};

export default EcoCapibaDashboard;