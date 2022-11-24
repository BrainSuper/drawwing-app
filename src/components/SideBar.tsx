import React from 'react';
import styles from '../styles/SideBar.module.css'

interface SideBarProps {
    setWeight: (weight:number) => void;
    weight: number;
    color: string;
    setColor: (color: string) => void;
}

const SideBar = (props: SideBarProps) => {
    return (
        <div className={styles.sidebar__wrapper}>
            <input  className={styles.color} value={props.color} onChange={(e) => {
                props.setColor(e.target.value);
            }} type="color"/>
            <div className={styles.weight__wrapper}>
                <input type="number" value={props.weight} onChange={(e) => {
                    props.setWeight(+e.target.value)
                }}/>
            </div>
        </div>
    );
};

export default SideBar;