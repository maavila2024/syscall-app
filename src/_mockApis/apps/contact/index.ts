import mock from '../../mockAdapter';
// import type { ContactType } from '@/types/apps/ContactType';

import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import user4 from '@/assets/images/profile/user-4.jpg';
import user5 from '@/assets/images/profile/user-5.jpg';
import user6 from '@/assets/images/profile/user-6.jpg';
import user7 from '@/assets/images/profile/user-7.jpg';
import user8 from '@/assets/images/profile/user-8.jpg';
import user9 from '@/assets/images/profile/user-9.jpg';
import user10 from '@/assets/images/profile/user-10.jpg';


// types
export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};

const contacts: KeyedObject[] = [
    {
        id: '#123',
        avatar: user1,
        assunto: 'Incluir opção de kit',
        email: 'Usuario Testehgover@agcocorp.com',
        fone: '+123 456 789',
        data: '12-10-2014',
        prioridade: 'Média',
        prioridadestatus: 'primary'
    },
    {
        id: '#452',
        avatar: user2,
        assunto: 'Criar novo item',
        email: 'Usuario Testehgover@agcocorp.com',
        fone: '+234 456 789',
        data: '10-09-2014',
        prioridade: 'Alta',
        prioridadestatus: 'error'
    },
    
];

// ==============================|| MOCK SERVICES ||============================== //

// mock.onGet('/api/products/list').reply(200, { products });
mock.onGet('/api/contacts').reply(() => {
    return [200, contacts];
});


export default contacts;
