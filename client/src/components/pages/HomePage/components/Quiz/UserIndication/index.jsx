import { UserIndicationStyles } from "./styles";

export default function UserIndication() {
    return (
        <UserIndicationStyles>
            <section class="card share-section">
                <h3>Compartilhe e Ganhe!</h3>
                <p>Convide seus amigos e ganhe recompensas juntos.</p>
                
                <div class="share-link-box">
                    eccocapiba.com/convite/1a2b3c
                </div>

                <div class="social-buttons">
                    <a href="#" class="btn btn-social btn-whatsapp" id="whatsapp-share" role="button" aria-label="Compartilhar no WhatsApp">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href="#" class="btn btn-social btn-instagram" id="instagram-share" role="button" aria-label="Compartilhar no Instagram">
                        <i class="fab fa-instagram"></i> Instagram
                    </a>
                </div>
            </section>
        </UserIndicationStyles>
    );
}