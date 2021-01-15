import React, { ReactElement } from 'react';

import config from '../../../../assets/config';
import css from './index.module.css';

const Socials = ({ title }: { title: string }): ReactElement => {
    return (
        <ul className={css.list}>
            <li className={css.item}>
                <a
                    className={css.link}
                    href={`http://www.facebook.com/sharer.php?u=${config.host}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.624 13.624">
                        <path
                            d="M12.164,2.25H1.46A1.46,1.46,0,0,0,0,3.71v10.7a1.46,1.46,0,0,0,1.46,1.46H5.633V11.242H3.718V9.062H5.633V7.4A2.661,2.661,0,0,1,8.482,4.466a11.607,11.607,0,0,1,1.688.147V6.469H9.219A1.09,1.09,0,0,0,7.99,7.646V9.062h2.092l-.335,2.18H7.99v4.632h4.174a1.46,1.46,0,0,0,1.46-1.46V3.71A1.46,1.46,0,0,0,12.164,2.25Z"
                            transform="translate(0 -2.25)"
                        />
                    </svg>
                </a>
            </li>

            <li className={css.item}>
                <a
                    className={css.link}
                    href={`https://telegram.me/share/url?url=${config.host}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.587 10.556">
                        <path
                            d="M12.552,5.489l-1.9,8.958c-.143.632-.517.79-1.048.492L6.71,12.806l-1.4,1.343a.727.727,0,0,1-.582.284l.208-2.947L10.3,6.638c.233-.208-.051-.323-.362-.115L3.311,10.7.456,9.8c-.621-.194-.632-.621.129-.919l11.166-4.3C12.268,4.39,12.721,4.7,12.552,5.489Z"
                            transform="translate(-0.001 -4.528)"
                        />
                    </svg>
                </a>
            </li>
            <li className={css.item}>
                <a
                    className={css.link}
                    href={`viber://forward?text=${config.host}/%0D%0A%0D%0A${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m23.155 13.893c.716-6.027-.344-9.832-2.256-11.553l.001-.001c-3.086-2.939-13.508-3.374-17.2.132-1.658 1.715-2.242 4.232-2.306 7.348-.064 3.117-.14 8.956 5.301 10.54h.005l-.005 2.419s-.037.98.589 1.177c.716.232 1.04-.223 3.267-2.883 3.724.323 6.584-.417 6.909-.525.752-.252 5.007-.815 5.695-6.654zm-12.237 5.477s-2.357 2.939-3.09 3.702c-.24.248-.503.225-.499-.267 0-.323.018-4.016.018-4.016-4.613-1.322-4.341-6.294-4.291-8.895.05-2.602.526-4.733 1.93-6.168 3.239-3.037 12.376-2.358 14.704-.17 2.846 2.523 1.833 9.651 1.839 9.894-.585 4.874-4.033 5.183-4.667 5.394-.271.09-2.786.737-5.944.526z" />{' '}
                        <path d="m12.222 4.297c-.385 0-.385.6 0 .605 2.987.023 5.447 2.105 5.474 5.924 0 .403.59.398.585-.005h-.001c-.032-4.115-2.718-6.501-6.058-6.524z" />{' '}
                        <path d="m16.151 10.193c-.009.398.58.417.585.014.049-2.269-1.35-4.138-3.979-4.335-.385-.028-.425.577-.041.605 2.28.173 3.481 1.729 3.435 3.716z" />{' '}
                        <path d="m15.521 12.774c-.494-.286-.997-.108-1.205.173l-.435.563c-.221.286-.634.248-.634.248-3.014-.797-3.82-3.951-3.82-3.951s-.037-.427.239-.656l.544-.45c.272-.216.444-.736.167-1.247-.74-1.337-1.237-1.798-1.49-2.152-.266-.333-.666-.408-1.082-.183h-.009c-.865.506-1.812 1.453-1.509 2.428.517 1.028 1.467 4.305 4.495 6.781 1.423 1.171 3.675 2.371 4.631 2.648l.009.014c.942.314 1.858-.67 2.347-1.561v-.007c.217-.431.145-.839-.172-1.106-.562-.548-1.41-1.153-2.076-1.542z" />{' '}
                        <path d="m13.169 8.104c.961.056 1.427.558 1.477 1.589.018.403.603.375.585-.028-.064-1.346-.766-2.096-2.03-2.166-.385-.023-.421.582-.032.605z" />{' '}
                    </svg>
                </a>
            </li>
            <li className={css.item}>
                <a
                    className={css.link}
                    href={`whatsapp://send?text=${config.host}%0D%0A%0D%0A${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                    >
                        <path
                            d="M256.064,0h-0.128C114.784,0,0,114.816,0,256c0,56,18.048,107.904,48.736,150.048l-31.904,95.104l98.4-31.456
                                C155.712,496.512,204,512,256.064,512C397.216,512,512,397.152,512,256S397.216,0,256.064,0z M405.024,361.504
                                c-6.176,17.44-30.688,31.904-50.24,36.128c-13.376,2.848-30.848,5.12-89.664-19.264C189.888,347.2,141.44,270.752,137.664,265.792
                                c-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624,26.176-62.304c6.176-6.304,16.384-9.184,26.176-9.184
                                c3.168,0,6.016,0.16,8.576,0.288c7.52,0.32,11.296,0.768,16.256,12.64c6.176,14.88,21.216,51.616,23.008,55.392
                                c1.824,3.776,3.648,8.896,1.088,13.856c-2.4,5.12-4.512,7.392-8.288,11.744c-3.776,4.352-7.36,7.68-11.136,12.352
                                c-3.456,4.064-7.36,8.416-3.008,15.936c4.352,7.36,19.392,31.904,41.536,51.616c28.576,25.44,51.744,33.568,60.032,37.024
                                c6.176,2.56,13.536,1.952,18.048-2.848c5.728-6.176,12.8-16.416,20-26.496c5.12-7.232,11.584-8.128,18.368-5.568
                                c6.912,2.4,43.488,20.48,51.008,24.224c7.52,3.776,12.48,5.568,14.304,8.736C411.2,329.152,411.2,344.032,405.024,361.504z"
                        />
                    </svg>
                </a>
            </li>
            <li className={css.item}>
                <a
                    className={css.link}
                    href={`https://twitter.com/intent/tweet?url=${config.host}&text=${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                    >
                        <path
                            d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                              c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                              c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                              c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                              c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                              c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                              C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                              C480.224,136.96,497.728,118.496,512,97.248z"
                        />
                    </svg>
                </a>
            </li>
        </ul>
    );
};

export default Socials;
