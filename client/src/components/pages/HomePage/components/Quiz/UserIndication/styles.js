import styled from "styled-components";

import enums from "../../../../../../enums";

export const UserIndicationStyles = styled.div`
    .btn-whatsapp {
        background-color: ${enums.COLORS.WHATSAPP};
    }

    .btn-instagram {
        background-color: ${enums.COLORS.FIRE_STATUS};
    }

    .share-link-box {
        background-color: var(--cor-primaria-fundo);
        padding: 10px 15px;
        border-radius: var(--border-radius-base);
        font-size: 0.9em;
        color: var(--cor-texto-principal);
        text-align: center;
        margin: 15px 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .social-buttons {
        display: flex;
        gap: 10px;
    }

    .btn-social {
        color: white;
        flex-grow: 1;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        padding: 12px 0;
    }
`;