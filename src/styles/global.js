import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root{
        --Color-primary: #FF577F;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;
        --Grey-4: #121214;
        --Grey-3: #212529;
        --Grey-2: #343B41;
        --Grey-1: #868E96;
        --Grey-0: #F8F9FA;
    }

    button{
        cursor: pointer;
    }
    ul, ol, li{
        list-style: none;
    }
    body{
        background-color: var(--Grey-4);
        font-family: 'Inter', sans-serif;
    }
    h1{
        color: var(--Color-primary);
    }


`;
