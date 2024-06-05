"use client";
import styled from 'styled-components';

export const Container = styled.div`
  min-height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin-top: ${({ margintop }) => margintop};
  margin-right: ${({ marginright }) => marginright};
  border-radius: 20px;
  padding: 20px;
  padding-right: ${({ paddingright }) => paddingright};
  background-color: ${({ backgroundcolor }) => backgroundcolor};

  display: flex;
  flex-direction: column;
  justify-content: ${({ justifycontent }) => justifycontent};
  /* overflow: hidden; */
  
  filter: drop-shadow(0 0 0.75rem #00000010);
`;

export const Label = styled.div`
  font-size: 1rem;
  font-weight: 300;
  padding: 4px 20px;
  color: #24639C;
  margin-bottom: 10px;
  background-color: #EFF5FB;
  width: 8rem;
  height: 2rem;
  border-radius: 15px;
  position: relative;
  top: -30px;
`;


