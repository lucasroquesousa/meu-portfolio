import styled from "styled-components";
import imgFundo from "../../assets/img/imgFundo1.jpg";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${imgFundo});
  background-attachment: fixed;
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-color: black;
  box-shadow: inset 0 0 3em black;
  .content-inicio {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-content: center;
    align-items: center;
    .content-wellcome {
      width: 55%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      gap: 16px;
      margin-bottom: 200px;
      .sbv {
        color: white;
        text-shadow: 0px 0px 4px grey;
        font-size: 35px;
        animation: fadeIn 8s;
        -webkit-animation: fadeIn 8s;
        -moz-animation: fadeIn 8s;
        -o-animation: fadeIn 8s;
        -ms-animation: fadeIn 20s;
      }

      .text-p--inicio {
        color: white;
        font-size: 25px;
        text-shadow: 0px 0px 4px grey;
        -webkit-animation: fadeIn 25s;
        -moz-animation: fadeIn 15s;
        -o-animation: fadeIn 15s;
        -ms-animation: fadeIn 20s;
      }
    }
    .div-algum-efeito {
      width: 45%;
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
