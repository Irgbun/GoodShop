import css from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={css.FooterWrapper}>
            <div>
                This project create by Nickolay Tolkun.   
            </div>
            <div>
                Contacts with telefon: +375 44 859-56-48, +375 25 442-64-25    
            </div>
            <div>
                Contacts in social media: vk.com facebook.com
            </div>
        </div>
    )
}