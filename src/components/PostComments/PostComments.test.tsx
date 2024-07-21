import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Deve adicionar "Batman" na lista', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('campo-tarefa'), {
            target: {
                value: 'Batman'
            }
        })
        fireEvent.click(screen.getByTestId('btn-cadastrar'))
        expect(screen.getByText('Batman')).toBeInTheDocument()
    })

    test('Deve adicionar "Carro" na lista', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('campo-tarefa'), {
            target: {
                value: 'Carro'
            }
        })
        fireEvent.click(screen.getByTestId('btn-cadastrar'))
        expect(screen.getByText('Carro')).toBeInTheDocument()
    })
})