import styled from "styled-components";

export const Container = styled.div<{ selected: boolean; }>`
  display: flex;
  border: 2px solid ${props => props.selected ? '#25CD89' : '#16195C'};
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border: 2px solid #496459;
  }
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #191A59;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const Description = styled.div`
  text-align: right;
  font-size: 14px;
  color:  #B8B8D4;
`;

export const IconArea = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #494A7C;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Point = styled.div`
  width: 6px;
  height: 6px;
  border: 3px solid #494a7C;
  margin-left: 30px;
  margin-right: -6px;
  background-color: #02004A;
`;