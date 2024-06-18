import { fireEvent, render, screen } from '@testing-library/react';
import Post from './index';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários corretamente', () => {
        render(<Post />);

        const textarea = screen.getByTestId('comment-textarea');
        const submitButton = screen.getByTestId('comment-button');

        fireEvent.change(textarea, {
            target: {
                value: 'Primeiro comentário' 
            }
        });
        fireEvent.click(submitButton);

        fireEvent.change(textarea, {
            target: {
                value: 'Segundo comentário'
            }
        });
        fireEvent.click(submitButton);

        const comments = screen.getAllByTestId('comment-item');
        expect(comments).toHaveLength(2);
        expect(comments[0]).toHaveTextContent('Primeiro comentário');
        expect(comments[1]).toHaveTextContent('Segundo comentário');
    });
});