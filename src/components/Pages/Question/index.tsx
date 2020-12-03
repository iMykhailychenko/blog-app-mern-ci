import React, { ReactElement } from 'react';
import PageTitle from '../../Common/PageTitle';
import QuestionForm from '../../Common/Forms/Question';
import styles from './index.module.css';

const Question = (): ReactElement => {
    return (
        <>
            <PageTitle>
                Have a question?{' '}
                <span role="img" aria-label="img">
                    🤔
                </span>
            </PageTitle>

            <div className={styles.content}>
                <img className={styles.img} src="question.jpg" alt="" />

                <div className={styles.inner}>
                    <h2 className={styles.title}>Feel free to ask whatever you want</h2>

                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores assumenda in
                        exercitationem, cum minima non repudiandae veniam ut, harum alias praesentium ipsa adipisci
                        quibusdam sequi. Mollitia expedita vero dolorum.
                    </p>

                    <QuestionForm />
                </div>
            </div>
        </>
    );
};

export default Question;
