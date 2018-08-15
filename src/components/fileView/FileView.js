import React from 'react';
import './file-view.scss'

const prettify = (code) => {
    return code.map((e, i) => {
        return (
            <div key={i}>
                <span className="code-line-number">{e.line}</span><pre className="code-content">{e.code}</pre>
            </div>
        )
    })
}

export default (props) => {
    return (
        <div contentEditable="true" suppressContentEditableWarning="true" tabIndex="0" spellCheck="false" autoCorrect="off" autoCapitalize="off" className="file-editor">
            {prettify(props.content)}
        </div>
    )
}