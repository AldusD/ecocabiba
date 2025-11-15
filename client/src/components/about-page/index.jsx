/* eslint-disable react/no-unescaped-entities */
import "./style.css"

export default function AboutUs(){
    return (
        <>

            <header className="main-header">
                <div className="logo-area">
                    <h1>EcoCapiba</h1>
                </div>
                <nav>
                    <a href="../login-page/index-login.html">Login</a>
                    <a href="index-about-us.html" className="active">Sobre Nós</a>
                </nav>
            </header>

            <main className="about-us-container">

                <section className="hero-section">
                    <h1 className="main-title">Transformando Lixo em Moedas, Atitude em Futuro</h1>
                    <p className='hero-slogan'>"Seu lixo vale moedas. Sua atitude vale o futuro."</p>
                </section>

                <section className="mission-section">
                    <div className="content-block">
                        <p className="section-pre-title">A Visão</p>
                        <h2>O Coração do EcoCapiba</h2>
                        <p>O EcoCapiba nasce do desejo de inovar a sustentabilidade urbana. Nosso objetivo principal é desenvolver um sistema de recompensas e níveis que incentive diretamente atividades cidadãs de reciclagem e coleta seletiva.</p>
                        <p>Permitimos que os usuários acumulem a moeda virtual <strong>Capibas</strong> como uma recompensa tangível por aprender, praticar e divulgar práticas de descarte correto, transformando uma responsabilidade cívica em uma atividade gratificante.</p>
                    </div>
                </section>

                <section className="challenge-section">
                    <div className="challenge-card">
                        <p className="section-pre-title">O Desafio</p>
                        <h2>O que Viemos Resolver?</h2>
                        
                        <div className="challenge-list">
                            <article>
                                <h3>Baixa Adesão à Reciclagem</h3>
                                <p>Atacamos o pouco engajamento da população, introduzindo um sistema de incentivos e recompensas (Capibas e XP), que transforma o ato de reciclar em uma atividade interativa por meio da gamificação.</p>
                            </article>
                            <article>
                                <h3>Falta de Conhecimento</h3>
                                <p>Por meio de funcionalidades como os <strong>Quizzes Educativos</strong>, o aplicativo se propõe a informar e educar os usuários, garantindo que a prática da reciclagem seja feita de maneira eficaz e consciente.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="solution-section">
                    <div className="content-block wide-content">
                        <p className="section-pre-title">O Caminho</p>
                        <h2>Como Funciona a Recompensa?</h2>
                        <p className="solution-intro">A moeda Capibas é o nosso incentivo à ação. Ela é distribuída através de três pilares de engajamento:</p>
                        
                        <ul className="feature-list">
                            <li><strong>Quizzes Educativos:</strong> Receba Capibas e XP ao aprimorar seus conhecimentos sobre descarte correto.</li>
                            <li><strong>Reciclagem em Ecoestações:</strong> Registre sua entrega em pontos de coleta via QR Code e acumule Capibas na hora.</li>
                            <li><strong>Compartilhamento Social:</strong> Convide amigos para se juntarem ao EcoCapiba e ganhe Capibas extras por cadastro.</li>
                        </ul>
                    </div>
                </section>

                <section className="team-section">
                    <div className="content-block">
                        <p className="section-pre-title">Nossa Força</p>
                        <h2>Quem Está por Trás?</h2>
                        <p>Uma equipe dedicada de desenvolvimento está construindo o EcoCapiba, composta por alunos de Sistemas de Informação do 2 período de 2025, sob a tutela do docente Kiev Gama e em parceria com a Prefeitura do Recife.</p>
                        <ul className="team-list">
                            <li>Gabriel Nóbrega</li>
                            <li>Aldus Daniel</li>
                            <li>Igor Soares</li>
                            <li>Helington Wilamy</li>
                            <li>Luis Miguel</li>
                            <li>João Vitor Lins</li>
                            <li>João Vitor Valentim</li>
                        </ul>
                    </div>
                </section>

            </main>

        </>
    )
}