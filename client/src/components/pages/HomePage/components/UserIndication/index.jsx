import React from "react";
import {
    ShareSectionCard, ShareLinkBox,
    SocialButtons,
    WhatsAppButton, InstagramButton
} from "./styles";

export default function UserIndication() {
    return (
        <ShareSectionCard>
            <h3>Compartilhe e Ganhe!</h3>
            <p>Convide seus amigos e ganhe recompensas juntos.</p>
            
            <ShareLinkBox>
                eccocapiba.com/convite/1a2b3c
            </ShareLinkBox>

            <SocialButtons>
                <WhatsAppButton href="https://wa.me/?text=oioi" role="button" aria-label="Compartilhar no WhatsApp">
                    <i className="fab fa-whatsapp"></i> WhatsApp
                </WhatsAppButton>
                
                <InstagramButton href="#" role="button" aria-label="Compartilhar no Instagram">
                    <i className="fab fa-instagram"></i> Instagram
                </InstagramButton>
            </SocialButtons>
        </ShareSectionCard>
    );
}