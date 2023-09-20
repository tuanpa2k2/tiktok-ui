import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/conponent/Button';
import styles from './PreviewAccount.module.scss';
import Image from '~/conponent/Image';

const cx = classNames.bind(styles);

function PreviewAccount({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <Button primary>Following</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.followers_count} </strong>
                    <span className={cx('label')}>Following</span>
                    <strong className={cx('value')}>{data.likes_count} </strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </div>
        </div>
    );
}

PreviewAccount.propTypes = {
    data: PropTypes.object.isRequired,
};
export default PreviewAccount;
