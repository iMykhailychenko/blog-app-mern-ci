import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';

import avatar from '../../../images/avatar.jpg';

// import dev utils
import user from './dev-uder';

interface Props {}

const Profile: React.FC<Props> = () => (
  <div className={styles.inner}>
    <img className={styles.img} src={avatar} alt="" />

    <Link className={styles.link} to={`/user/${user.nick}`}>
      <p className={styles.name}>{user.name}</p>
      <p className={styles.nick}>{`@${user.nick}`}</p>
    </Link>

    <p className={styles.text}>{`total posts: ${user.posts}`}</p>

    <Link to="/new-post">
      <button className={styles.add} />
      <p className={styles.text}>Add new post</p>
    </Link>
  </div>
);

export default Profile;