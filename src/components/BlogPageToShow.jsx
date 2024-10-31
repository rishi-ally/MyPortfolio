import React from 'react';
import { useSelector } from 'react-redux';

const BlogPageToShow = () => {
    const blog = useSelector((state) => state.Blog.value);

    return (
        <div
            className="card"
            style={{
                maxWidth: "95%",
                margin: "20px auto",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
            }}
        >
            <div className="card-body">
                <h5
                    className="card-title"
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#333"
                    }}
                >
                    {blog.title}
                </h5>
                <p
                    className="text-muted"
                    style={{ fontSize: "0.9rem", marginBottom: "10px" }}
                >
                    {blog.date}
                </p>
                <div
                    className="card-content"
                    style={{ whiteSpace: "pre-wrap", padding: '20px' }}
                >
                    {blog.content}
                </div>
                {blog.key === 2 && (
                    <>
                        <h4>Links:</h4>
                        <div className="row">
                            {blog.links.map((link, index) => (
                                <div
                                    className="col-12 col-sm-6 col-md-4"
                                    key={index}
                                >
                                    <div
                                        className="card mb-3"
                                        style={{
                                            borderRadius: "5px",
                                            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                                        }}
                                    >
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <h5>Link for {link.name}</h5>
                                                <a href={link.link} target="_blank" rel="noopener noreferrer">
                                                    {link.link}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
                <div
                    className="extra-info"
                    style={{
                        marginTop: "20px",
                        padding: "10px",
                        border: "1px dashed #ccc",
                        borderRadius: "5px",
                        backgroundColor: "#f9f9f9"
                    }}
                >
                    <h6 style={{ marginBottom: "5px", color: "#007bff" }}>
                        Did You Know?
                    </h6>
                    <p style={{ margin: 0, color: "#666" }}>
                        The First Website is Still Online! The very first website, created by Tim Berners-Lee in 1991, is still accessible at its original URL! Hosted on a NeXT computer at CERN, it’s a simple, text-based site explaining the World Wide Web's basics and how to create your own pages.
                    </p>
                </div>
                <button
                    className="btn btn-primary"
                    style={{ marginTop: "15px", width: "100%" }}
                    onClick={() => alert("Thanks for reading!")}
                >
                    Read More
                </button>
            </div>
        </div>
    );
};

export default BlogPageToShow;
