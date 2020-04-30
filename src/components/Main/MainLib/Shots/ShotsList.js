import React from 'react';

import './Shots.css';
import ShotItem from './ShotItem';
import ModalShot from '../../../Modal/ModalShot/ModalShot';

const shotsData = [
    {
        id: 1, title: 'K A M U I', displayName: 'Studio VØR', action: { like: 84, comment: 1444 },
        image: 'https://cdn.dribbble.com/users/1846841/screenshots/11180781/k_a_m_u_i_1x.png',
        badge: 'team',
        avatar: 'https://cdn.dribbble.com/users/1878489/avatars/mini/6e04be8347eef2a38226b8bddb26375f.jpg?1505137087'
    },
    {
        id: 2, title: 'Onboarding Flow with 3D animation', displayName: 'Minh Pham ✪', action: { like: 48, comment: 1014 },
        image: 'https://cdn.dribbble.com/users/824641/screenshots/11179390/onboarding_1x.png',
        badge: 'pro',
        avatar: 'https://cdn.dribbble.com/users/824641/avatars/mini/28f65a0185635892bc0f04c388693056.jpg?1434190094'
    },
    {
        id: 3, title: 'Acme: Product page', displayName: 'Heartbeat Agency', action: { like: 33, comment: 856 },
        image: 'https://cdn.dribbble.com/users/774375/screenshots/11179721/shot-1_2x.png',
        badge: 'team',
        avatar: 'https://cdn.dribbble.com/users/1154620/avatars/mini/00dec1b7c16f9b46a7c5a29cdc1e5f9c.png?1498736657'
    },
    {
        id: 4, title: 'Outcrowd', displayName: 'Mobile app - Arteto', action: { like: 18, comment: 325 },
        image: 'https://cdn.dribbble.com/users/702789/screenshots/11193380/v3_2x.png',
        badge: 'pro',
        avatar: 'https://cdn.dribbble.com/users/702789/avatars/mini/e66ce3992038d4efadb8c329f25aea78.png?1508747241'
    },
    {
        id: 5, title: 'SEO Dashboard', displayName: '10Clouds', action: { like: 26, comment: 544 },
        image: 'https://cdn.dribbble.com/users/452995/screenshots/11181754/seo-dashboard-drib_2x.png',
        badge: 'team',
        avatar: 'https://cdn.dribbble.com/users/845019/avatars/mini/93475f3bf87361ad5f76d6cf9fd7d462.png?1476194878'
    },
    {
        id: 6, title: 'Havana Forms', displayName: 'Tran Mau Tri Tam ✪', action: { like: 84, comment: 1444 },
        image: 'https://cdn.dribbble.com/users/427857/screenshots/11182014/havana_app_forms_1x.jpg',
        badge: 'pro',
        avatar: 'https://cdn.dribbble.com/users/427857/avatars/mini/3ea3693b4fbe490d221bc201cc03e50f.png?1584370453'
    },
    {
        id: 7, title: 'Fliist: Social Network Website Design Case Study', displayName: 'Mind Studios', action: { like: 21, comment: 212 },
        image: 'https://cdn.dribbble.com/users/4603767/screenshots/11194014/frame_30_2x_2x.png',
        badge: 'team',
        avatar: 'https://cdn.dribbble.com/users/1127688/avatars/mini/2d131cbe0be49666dfc29b6250e3b320.png?1491913734'
    },
    {
        id: 8, title: 'Charles Darwin', displayName: 'Diana Stoyanova', action: { like: 9, comment: 245 },
        image: 'https://cdn.dribbble.com/users/1312159/screenshots/11185240/darwin_1x.png',
        badge: 'pro',
        avatar: 'https://cdn.dribbble.com/users/1312159/avatars/mini/37c4b81e37455d84bdb1fb8dabd436ce.jpg?1587046654'
    },
    {
        id: 9, title: 'Online Dating', displayName: 'Darya Semenova', action: { like: 6, comment: 138 },
        image: 'https://cdn.dribbble.com/users/1090020/screenshots/11190957/zoom_dating_2_2x.png',
        badge: 'team',
        avatar: 'https://cdn.dribbble.com/users/1090020/avatars/mini/eca1dbb855c843d7e890a806ca026b87.png?1456877148'
    },
    {
        id: 10, title: 'Reading', displayName: 'Fireart Studio', action: { like: 3, comment: 104 },
        image: 'https://cdn.dribbble.com/users/3178178/screenshots/11185607/reading_2x.jpg',
        badge: 'team',
        avatar: 'https://cdn.dribbble.com/users/485324/avatars/mini/479e0aa76edbad47c51f159fd88e2bfa.png?1551975218'
    },
    {
        id: 11, title: 'A Momentary Silence', displayName: 'Nicholas Moegly', action: { like: 11, comment: 246 },
        image: 'https://cdn.dribbble.com/users/38169/screenshots/11184163/a-momentary-silence-nicholas-moegly-cropped-large_2x.jpg',
        badge: '',
        avatar: 'https://cdn.dribbble.com/users/38169/avatars/mini/63c5ae783edcd8c35c4ba0986ff3d28a.jpg?1440074421'
    },
    {
        id: 12, title: 'Background ideas', displayName: 'Mehul Vamja', action: { like: 6, comment: 72 },
        image: 'https://cdn.dribbble.com/users/3889620/screenshots/11193569/shot-cropped-1588060849037_1x.png',
        badge: '',
        avatar: 'https://cdn.dribbble.com/users/3889620/avatars/mini/dc058459e4a5faaf9e963075ea85ce70.jpg?1587276104'
    },
    {
        id: 13, title: 'girl with a tatoo', displayName: 'tatooinegirl', action: { like: 915, comment: 2093 },
        image: 'https://cdn.dribbble.com/users/2837665/screenshots/11126091/img_9309_2x.jpeg',
        badge: 'pro',
        avatar: 'https://cdn.dribbble.com/users/2837665/avatars/mini/a1065ec86ad21cdacd8b1c594be9db1c.jpeg?1584445334'
    },
    {
        id: 14, title: 'Coffee & Tea Mocktail Illustrations 3', displayName: 'mmi Saleem', action: { like: 4, comment: 107 },
        image: 'https://cdn.dribbble.com/users/353272/screenshots/11190966/hibiscus_tea_v2_1x.png',
        badge: '',
        avatar: 'https://cdn.dribbble.com/users/353272/avatars/mini/839caa989bf52428643a79dd2784c7ff.jpg?1519988183'
    },
    {
        id: 15, title: 'Dark Dashboard UI', displayName: 'DStudio™', action: { like: 28, comment: 890 },
        image: 'https://cdn.dribbble.com/users/1126935/screenshots/11165287/dark_dashboard_1x.png',
        badge: 'pro',
        avatar: 'https://cdn.dribbble.com/users/1126935/avatars/mini/22c0e50878c5aa38bfaadd25d3c5b42e.png?1576962084'
    },
    {
        id: 16, title: 'Black Powder Smokehouse', displayName: 'Matthew Cook', action: { like: 1, comment: 46 },
        image: 'https://cdn.dribbble.com/users/48277/screenshots/11196177/black-powder-smokehouse-dribbble_2x.png',
        badge: 'team',
        avatar: 'https://cdn.dribbble.com/users/48277/avatars/mini/5a52d350d9e4416fbcd7058b636a00d7.jpg?1481681659'
    },
    {
        id: 17, title: 'Gullit🖤', displayName: 'Fireart Studio', action: { like: 84, comment: 1444 },
        image: 'https://cdn.dribbble.com/users/3281732/screenshots/11192830/samji_illustrator___2x.jpg',
        badge: 'team',
        avatar: 'https://cdn.dribbble.com/users/485324/avatars/mini/479e0aa76edbad47c51f159fd88e2bfa.png?1551975218'
    },
    {
        id: 18, title: 'underwater', displayName: 'littlemagicman', action: { like: 9, comment: 81 },
        image: 'https://cdn.dribbble.com/users/4998096/screenshots/11189452/underwater_1x.jpg',
        badge: '',
        avatar: 'https://cdn.dribbble.com/users/4998096/avatars/mini/data?1584289673'
    },
    {
        id: 19, title: 'Fury', displayName: 'Anastasia', action: { like: 3, comment: 102 },
        image: 'https://cdn.dribbble.com/users/2660047/screenshots/11189980/rin_2x.jpg',
        badge: 'team',
        avatar: 'https://cdn.dribbble.com/users/2660047/avatars/mini/60b210c6896c3748fd6a89fba2f18c7e.jpg?1588075687'
    },
    {
        id: 20, title: 'raven', displayName: 'tatooinegirl', action: { like: 84, comment: 1444 },
        image: 'https://cdn.dribbble.com/users/2837665/screenshots/11182161/cf314a96-8dcd-479a-8ae5-88e34a798eab_1_101_o_2x.jpeg',
        badge: 'pro',
        avatar: 'https://cdn.dribbble.com/users/2837665/avatars/mini/a1065ec86ad21cdacd8b1c594be9db1c.jpeg?1584445334'
    },
    {
        id: 22, title: 'window watching', displayName: 'maryanne', action: { like: 3, comment: 102 },
        image: 'https://cdn.dribbble.com/users/747805/screenshots/11123132/wander03_2x.jpg',
        badge: 'pro',
        avatar: 'https://cdn.dribbble.com/users/747805/avatars/mini/716b42344ee6feed91506fdba13ae176.jpg?1583433010'
    },
    {
        id: 23, title: 'Tifa Lockhart FFVII - Concept Character Page', displayName: 'beyon creative', action: { like: 1051, comment: 3512 },
        image: 'https://cdn.dribbble.com/users/965503/screenshots/6636123/ff7-tifa_2x.jpg',
        badge: 'team',
        avatar: 'https://cdn.dribbble.com/users/965503/avatars/mini/c67132c09977210b891af14567c686e8.jpg?1560125007'
    },
    {
        id: 24, title: 'Heba Shaikh Brand Identity', displayName: 'Antonio Calvino', action: { like: 7, comment: 67 },
        image: 'https://cdn.dribbble.com/users/1763872/screenshots/11196491/mockupcorporate_1x.jpg',
        badge: 'pro',
        avatar: 'https://cdn.dribbble.com/users/1763872/avatars/mini/67952681e39bf522edd4f1b0c1d39c01.jpg?1546091413'
    },
    {
        id: 25, title: 'Aerith animated wallpaper', displayName: 'Déborah "Debs" Rodrigues', action: { like: 915, comment: 2093 },
        image: 'https://cdn.dribbble.com/users/989003/screenshots/10859907/dribbble_1_1x.png',
        badge: 'pro',
        avatar: 'https://cdn.dribbble.com/users/2837665/avatars/mini/a1065ec86ad21cdacd8b1c594be9db1c.jpeg?1584445334'
    }
]

class ShotsList extends React.Component {

    state = {
        isOpenModalShot: false,
        data: { }
    }

    onOpenModalShot = data => {
        this.setState({
            data,
            isOpenModalShot: true
        })
    }

    onCloseModal = () => this.setState({ isOpenModalShot: false, data: {} })

    render() {
        const { isOpenModalShot, data } = this.state;
        return (
            <>
                { isOpenModalShot && <ModalShot closeModal={this.onCloseModal} data={data} /> }
                <ul className="shots-grid__items">
                    {
                        shotsData.map(shot => {
                            return <ShotItem onOpenModalShot={this.onOpenModalShot} shotData={shot} key={shot.id} />
                        })
                    }
                </ul>
            </>
        )
    }
}

export default ShotsList;