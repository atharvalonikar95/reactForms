import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown";
const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState("# This is markdown")
    const [preview, setPreview] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setPreview(markdown)
            setLoading(false)
        }, 100)
        return () => clearTimeout(timer)
    }, [markdown])
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <div style={{ flex:1,padding:10 }}>
                <textarea
                    className='textarea'
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    placeholder="Write Markdown here..."
                    style={{
                        width: "100%",
                        height: "80%",
                        padding: "10px",
                        fontSize: "16px",
                    }}
                />
            </div>
            <div style={{ flex:1,padding:10 }}>
                {
                    loading ? (
                        <div className='loading'>
                            loading...
                        </div>
                    ) :
                        (
                            <div className='preview'
                                style={{
                                    width: "100%",
                                    height: "80%",
                                    padding: "10px",
                                    fontSize: "16px",
                                }}>
                                <ReactMarkdown>{preview}</ReactMarkdown>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default MarkdownEditor