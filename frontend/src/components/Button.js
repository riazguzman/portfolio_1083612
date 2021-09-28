import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";

const ApiButton = styled(Button)`
  ${({ theme }) => `
    margin: 0.9em 0;

    display: flex;


    justify-content: center;
    align-items: center;
    height: 48px;
    
    background-color: ${theme.palette.primary.background};
    border: 1px solid ${theme.palette.secondary.disabled_fields};
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 13px;
    text-transform: capitalize;
    &:hover {
      background-color: white;
      color: black;
    }
  `}
`;

export default ApiButton;
