import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['code'],
        ['link', 'image'],
        ['clean'],
    ],
};

const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'code-block',
    'link',
    'image',
];

export default () => {
    const [value, setValue] = useState('');

    return (
        <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={value}
            onChange={setValue}
        />
    );
};
