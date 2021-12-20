import css from './Loader.module.css'

export const Loader = () => {
    return (
        <div className='lds-ellipsis'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}