import { Chat } from './chat';
import { renderWithRedux } from '../../../utils/render_with_redux';
import userEvent from '@testing-library/user-event';
import { screen } from "@testing-library/react";

describe('chat component', () => {

    // поковыряв немного документацию и посмотрев на ошибки,
    // обнаружил что getByRole не работает коректно при поиске по button
    // причина скорее всего в MUI т.к. похоже что MUI накидывает роль button
    // почти всем компонентам хотя браузер этого не показывает
    // лечится накидыванием уникальной роли(например deleteButton) на конкретный элемент,
    // но я решил для тестов в конечном итоге использовать data-id

    it('render Chat with "name" prop', () => {
        const NAME = 'name';
        const { getByTestId } = renderWithRedux(
            <Chat name={NAME} />
        );

        const testElement = screen.getByTestId('chatTestId')

        // const nodes = [...container.querySelectorAll('.MuiTypography-root')];
        // expect(nodes[0]).toHaveTextContent(NAME);

        expect(testElement).toHaveClass("MuiListItem-button")
        expect(testElement).toHaveTextContent(NAME)
    });

    it('render Chat with "selected" prop', () => {
        const { getByTestId } = renderWithRedux(
            <Chat selected={true} />
        );

        const testElement = screen.getByTestId('chatTestId')

        expect(testElement).toHaveClass("Mui-selected")
    });

    it('render Chat with "handler" prop', () => {
        const NAME = 'name';
        const handler = jest.fn();
        const { getByTestId } = renderWithRedux(
            <Chat name={NAME} handler={handler} />
        );

        const testElement = screen.getByTestId('deleteButton')

        userEvent.click(testElement);
        expect(handler).toBeCalledTimes(1)
        expect(handler).toBeCalledWith(NAME)
    })
})