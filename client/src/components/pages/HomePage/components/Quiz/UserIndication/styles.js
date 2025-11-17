import styled from "styled-components";

import enums from "../../../../../../enums";

export const ShareSectionCard = styled.section`
  /* Base .card styles (approximated) */
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-family: 'Work Sans', sans-serif;

  /* .share-section specific styles */
  text-align: center;

  h3 {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 1.25rem;
    font-weight: 700;
    color: #222;
  }

  p {
    margin: 0 0 16px 0; /* Added bottom margin */
    color: #555;
    font-size: 0.95rem;
  }
`;

export const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  font-family: 'Work Sans', sans-serif;
  gap: 8px;
  transition: opacity 0.3s ease;
  cursor: pointer;
  font-size: 0.95rem; /* Added for consistency */

  &:hover {
    opacity: 0.85;
  }

  /* Style for the SVG icons */
  svg {
    width: 1.2em;
    height: 1.2em;
  }
`;

export const ShareLinkBox = styled.div`
  background-color: #f4f7f6;
  border: 1px dashed #cdd5d2;
  border-radius: 6px;
  padding: 12px;
  margin: 20px 0;
  font-family: monospace;
  font-size: 0.9rem;
  color: #333;
  word-break: break-all;
`;

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;

  /* On wider screens, show them side-by-side */
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const WhatsAppButton = styled(SocialButton)`
  background-color: ${enums.COLORS.WHATSAPP};
`;

export const InstagramButton = styled(SocialButton)`
  background: ${enums.COLORS.INSTAGRAM};
`;

