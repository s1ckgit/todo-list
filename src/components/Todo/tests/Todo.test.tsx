import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from '../index';

describe('Компонент Todo', () => {
  test('должен добавлять новые задачи, проверять смену статуса задач и корректное отображение в нужных разделах', async () => {
    render(<Todo />);

    const input = screen.getByRole('textbox');
    
    await userEvent.type(input, 'Выполненная');
    await userEvent.keyboard('{Enter}');
    await userEvent.type(input, 'Активная');
    await userEvent.keyboard('{Enter}');
    await userEvent.type(input, 'Выполненная');
    await userEvent.keyboard('{Enter}');
    await userEvent.type(input, 'Активная');
    await userEvent.keyboard('{Enter}');
    await userEvent.type(input, 'Выполненная');
    await userEvent.keyboard('{Enter}');

    const todos = screen.getAllByRole('listitem');
    expect(todos).toHaveLength(5);
    await userEvent.click(todos[0]);
    await userEvent.click(todos[2]);
    await userEvent.click(todos[4]);

    const completedButton = screen.getByTestId('#completed-button');
    await userEvent.click(completedButton);

    const completedTodos = screen.getAllByRole('listitem');
    expect(completedTodos).toHaveLength(3);
    completedTodos.forEach(todo => expect(todo).toHaveTextContent('Выполненная'));

    const activeButton = screen.getByTestId('#active-button');
    await userEvent.click(activeButton);

    const activeTodos = screen.getAllByRole('listitem');
    expect(activeTodos).toHaveLength(2);
    activeTodos.forEach(todo => expect(todo).toHaveTextContent('Активная'));
  });
});
