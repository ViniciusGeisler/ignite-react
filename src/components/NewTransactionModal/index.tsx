import Modal from "react-modal";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import CloseImg from "../../assets/close.svg";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { useState } from "react";

interface INewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {

    const [type, setType] = useState('deposit');

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >

            <button 
                type="button"
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={CloseImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder='Título'
                />

                <input
                    type='number'
                    placeholder='Valor'
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                    >
                        <img src={IncomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                    >
                        <img src={OutcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    placeholder='Categoria'              
                />

                <button type="submit">
                    Cadastrar
                </button>
                
            </Container>
            
        </Modal>
    )
}