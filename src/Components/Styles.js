import styled from "styled-components";


export const Container = styled.div`
   background: #F4F3F3;
    width: 400px;
    height: 400px;
    padding: auto;
    margin: 175px 0 20px;
    border-radius: 17px;
    display: inline-block;
    text-align: center;
    border: 2px solid #BDBDBD;
    position: relative;    
`
export const Title = styled.h1`
    margin: 20px;
`


export const ContainerInputs = styled.div`
    display: inline-block;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    font-family: 'Roboto';
    font-weight: 700;
    margin: 33px 0;
    input{
        display: block;
        flex-direction: column;
        margin: 20px;
        padding: 12px 12px;
        width: 321px;
        border-radius: 20px;
        background: #F7F7F7;
        border: 1px solid #828282;
        ::-webkit-input-placeholder {
         color: #ABAAAA;
        font-family: 'Roboto';
        font-weight: 500;
}
}
`
export const Entrar = styled.a`
    box-sizing: border-box ;
    width: 87px;
    height: 22px;
    background: #301B52;
    border-radius: 20px;
    color: #fff;
    border: none;
    padding: 15px 25px;
    margin: 20px ;
    font-size: 17px;
    cursor: pointer;

`
