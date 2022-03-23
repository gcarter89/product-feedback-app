import styles from './button.module.scss';

export default function Button({backgroundColor = 'alpha', textColor = 'neutral', size = 'regular', radius = 'curved'}) {

    return (
        <button className={
            styles.button + ' ' +
            styles[`button__${backgroundColor}`] + ' ' +
            styles[`button__${textColor}`] + ' ' +
            styles[`button__${size}`] + ' ' +
            styles[`button__${radius}`]
        }>
            <h4 className={styles.button_text}>Button 1</h4>
        </button>
    )
}