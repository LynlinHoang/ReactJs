import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccoutsItem() {
    return ( 
            <div className={cx('wrapper')}>
                <img src="https://i.pinimg.com/236x/4b/e2/25/4be225cb0aec7fc581ee1deaf2cc3ff3.jpg" className={cx('avatar')} />
                <div className={(cx('info'))}>
                    <p className={cx("name")}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <span>nguyenvana</span> 
                    

                </div>
            </div>
    );
}

export default AccoutsItem;