import Button from '../../UI/Button/Button';
import LinkItem from '../../UI/LinkItem/LinkItem';

import classes from './CTA.module.css';

const cta = () => (
    <div className={classes.CTA}>
        <LinkItem name='Login' url='/#' />
        <Button type="Primary">Get Started</Button>
    </div>
);

export default cta;
