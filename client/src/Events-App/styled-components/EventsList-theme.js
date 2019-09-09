import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  margin-top: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #DDD!important;
  width: 100%;
  margin-bottom: 50px;

  div:nth-child(2) {
    width: 100%;
    overflow: hidden;
  }
`
export const Image = styled.div`
  width: 300px;
  display: flex;
  height: fit-content;
  
  img {
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }
`
export const Text = styled.div`
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  div > a {
    color: #3e3b3b
    font-weight: 600;
    font-family: Lato, sans-serif;
    text-decoration: none;
    font-size: 22px;
    letter-spacing: 0.3px;

    &:hover {
      color: #e9a825;
    }
  }
  div > p {
    color: #524d46;
    font-family: "Bree Serif", serif;
    color: #000000;
    font-size: 16.5px;
    max-width: 640px;
  } 
  div > div {
    color: #524d46;
    font-family: Lato,sans-serif;
    font-size: 17px;
  }
`

