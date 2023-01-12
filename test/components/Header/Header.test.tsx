import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/app/components/Header/Header';
import renderer from 'react-test-renderer';
import Link from 'next/link';

describe('Header component', () => {
    it('Should render properly', () => {
        render(<Header />);

        const listMenu = screen.getByRole('list');

        expect(listMenu);
    });

    it('Should redirect the user to home with Link', () => {
        const tree = renderer.create(<Link href='/'></Link>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
