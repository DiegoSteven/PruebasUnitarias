import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CONFIRMViewModal from './CONFIRMViewModal';
import Modal from 'react-modal';

Modal.setAppElement(document.createElement('div'));
// Required for React Modal

describe("CONFIRMViewModal", () => {
    test('renders correctly when viewModalOpen is true', () => {
        render(<CONFIRMViewModal viewModalOpen={true} closeModal={() => {}} />);

        // Check if the modal is rendered
        expect(screen.getByText('¡Registro exitoso!')).toBeInTheDocument();
        expect(screen.getByText('El registro se realizó correctamente.')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Entendido' })).toBeInTheDocument();
    });

    test('does not render when viewModalOpen is false', () => {
        render(<CONFIRMViewModal viewModalOpen={false} closeModal={() => {}} />);

        // Check if the modal is not rendered
        expect(screen.queryByText('¡Registro exitoso!')).not.toBeInTheDocument();
    });

    test('calls closeModal when the close button is clicked', () => {
        const closeModalMock = jest.fn();
        render(<CONFIRMViewModal viewModalOpen={true} closeModal={closeModalMock} />);

        // Find the button and click it
        fireEvent.click(screen.getByRole('button', { name: 'Entendido' }));

        // Check if closeModal was called
        expect(closeModalMock).toHaveBeenCalledTimes(1);
    });
});