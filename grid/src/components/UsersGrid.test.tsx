/** @jest-environment jsdom */

import { render, screen } from '@testing-library/react';
import UsersGrid from './UsersGrid';
import { UsersList } from '../types/types';
describe('UsersGrid', () => {
    const emptyList: UsersList = [];

    const list: UsersList  = [
        {
        id: 1134,
        name: "Edmond",
        username: "123",
        email: "something.example.com",
        address: {
          street: "29842 Sally Summit",
          suite: "Product Accountability Executive",
          city: "Saint-Denis",
          zipcode: "75017",
          geo: {
            lat: "81.1172",
            lng: "81.1172"
          }
        },
        phone: "0649640808'",
        website: "myDIV",
        company: {
          name: "Edmond",
          catchPhrase: "Proactive discrete paradigm",
          bs: "iterate next-generation technologies"
        }
        
      }, 
      {
        id: 0,
        name: "George",
        username: "user name",
        email: "email@Google.com",
        address: {
          street: "91253 Adonis Motorway",
          suite: "Customer Metrics Consultant",
          city: "Skhirat",
          zipcode: "99577-0727",
          geo: {
            lat: "81.1172",
            lng: "-34.2524"
          }
        },
        phone: "+1-541-754-3010'",
        website: "myDIV",
        company: {
          name: "Edmond",
          catchPhrase: "Ameliorated even-keeled encoding",
          bs: "innovate end-to-end markets"
        }
      }, 
      {
        id: 1,
        name: "Anas",
        username: "123",
        email: "user@host:300",
        address: {
          street: "91253 Adonis Motorway",
          suite: "Product Accountability Executive",
          city: "Roma",
          zipcode: "107050",
          geo: {
            lat: "-34.2524",
            lng: "81.1172"
          }
        },
        phone: "+1-541-754-3010'",
        website: "myDIV",
        company: {
          name: "Anas",
          catchPhrase: "Proactive discrete paradigm",
          bs: "engage wireless e-markets"
        }
      }, 
      {
        id: 100,
        name: "Edmond",
        username: "user123",
        email: "bed-free@tutanota.de",
        address: {
          street: "70245 Gorczany Manors",
          suite: "Customer Metrics Consultant",
          city: "Roma",
          zipcode: "99950",
          geo: {
            lat: "81.1172",
            lng: "77.4325"
          }
        },
        phone: "0322 999 999'",
        website: "myDIV",
        company: {
          name: "Jean-Philippe",
          catchPhrase: "Ameliorated even-keeled encoding",
          bs: "transform holistic deliverables"
        }
      }]
    it('should render loading', () => {
        const { container } = render(<UsersGrid list={emptyList} />);
        const loadingDiv = container.querySelectorAll('div[data-id="loading"]');
        expect(loadingDiv).toHaveLength(1);
    });
    it('should render table', () => {
        const { container } = render(<UsersGrid list={list} />);
        const table = container.querySelectorAll('div[data-id="table"]');
        expect(table).toHaveLength(1);
        const _thead = container.querySelector('thead');
        expect(_thead).not.toBeNull();
        const _tbody = container.querySelector('tbody');
        expect(_tbody).not.toBeNull();
        const _thead_tr = container.querySelectorAll('thead tr');
        expect(_thead_tr).toHaveLength(1);
        const _tbody_tr = container.querySelectorAll('tbody tr');
        expect(_tbody_tr).toHaveLength(list.length);

    });
});
