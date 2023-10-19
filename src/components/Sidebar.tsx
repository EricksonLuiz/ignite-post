import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from '@phosphor-icons/react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/EricksonLuiz.png"/>
                <strong>Erickson Luiz Defino</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20}/>
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}