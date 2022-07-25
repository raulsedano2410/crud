import React from 'react';
import styled from 'styled-components'

const Modal = ({children,modalForm, setModalForm, delet, setDelet}) => {

    const modalFuncions = () => {
       if(modalForm)setModalForm(false)
        if(delet)setDelet(undefined)
    }

    return (
        <>
            <Overlay>
                <ContainerModal>
                    <CloceButton onClick={modalFuncions} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </CloceButton>
                    {children}
                </ContainerModal>
            </Overlay>
        </>
    );
};

export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);

    display: flex;
    justify-content: center;
    align-items: center;
`;
const ContainerModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;

    @media (max-width:600px){
        width: 90%;
    }
`
const CloceButton = styled.button`
    position: absolute;
    right: 20px;
    top: 20px;
    
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #555A88;

    &:hover {
        background: #f2f2f2;
    };

    svg {
        width: 100%;
        height: 100%;
    }


`