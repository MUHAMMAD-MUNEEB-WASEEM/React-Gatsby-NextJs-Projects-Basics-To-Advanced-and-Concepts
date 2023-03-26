import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import styles from './about.module.css';

export default function About () {
    return (
        <Layout headerTitile="About Page Header">
        
            <div className={styles.myTitle}>
                <Header title='About Page title' />
            </div>

            <div>
                Second Div
            </div>

        </Layout>
    )
}