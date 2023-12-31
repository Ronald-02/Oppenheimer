import styled from "styled-components";

export const Section = styled.section`
  animation: showIn 0.4s forwards;

  @keyframes showIn {
    from {
      opacity: 0;
      transform: translateY(60px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  h1 {
    color: #D2691E;
    font-size: 2em;
    font-weight: 600;
    align-self: start;
  }

  small {
    font-weight: 200;
  }
`;

export const Value = styled.div`
  padding-top: 2em;

  label {
    display: block;
    font-size: 1.2em;
  }

  input {
    outline: none;
    box-sizing: border-box;
    width: 100%;
    padding: 1.5em 1em;
    margin-bottom: 2em;
    border: 2px solid #D2691E;
    border-radius: 2px;

    &:focus {
      border: 2px solid #D2691E;
    }
  }

  button {
    float: right;
  }
  
  .eklAya{

    background:#D2691E;
  
  }
`;
