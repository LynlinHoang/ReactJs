import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from '../../Popper';
import AccoutsItem from '../AcountItem'

const cx = classNames.bind(styles);

function Header() {
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy                     
                    interactive
                    render={attrs => (
                                          
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}> 
                         <PopperWrapper> 
                            <h4 className={cx('search-title')}>
                                    Accouts
                            </h4>
                            <AccoutsItem/>
                            <AccoutsItem/>
                            <AccoutsItem/>
                         </PopperWrapper>
                        </div>
                        
                    )}
                >
                    <div className={cx('search')}>
                        <input 
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />    
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    {/* Phần nội dung cho actions */}
                </div>
            </div>
        </header>
    );
}

export default Header;
