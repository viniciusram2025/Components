import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1920px;
    margin: 0 auto;

    @media (max-width: 1560px) {max-width: 1500px;}
    @media (max-width: 1360px) {max-width: 1320px;}
    @media (max-width: 1200px) {max-width: 1140px;}
    @media (max-width: 992px) {max-width: 960px;}
    @media (max-width: 768px) {max-width: 720px;}
    @media (max-width: 576px) {max-width: 540px;}

`;
