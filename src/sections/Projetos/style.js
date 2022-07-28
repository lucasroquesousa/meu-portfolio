import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: black;
  box-shadow: 0px 0px 8px black;
  .content-element {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    background-attachment: fixed;
    background-size: cover;

    .sect-project--one {
      width: 90%;
      height: 35%;
      border: 2px solid white;
      border-radius: 8px;
      :hover {
        box-shadow: 0px 0px 25px aquamarine;
        transition: 1s;
      }
      .text-h1 {
        color: white;
      }
    }

    .sect-projects {
      width: 90%;
      display: flex;
      flex-direction: row;
      gap: 16px;
      justify-content: space-between;
      .projects {
        display: flex;
        flex-direction: row;
        width: 310px;
        height: 410px;
        border-radius: 8px;
        border: 2px solid white;
        :hover {
          box-shadow: 0px 0px 25px aquamarine;
          transition: 1s;
        }
      }
    }
  }
`;
