import React from 'react';

export class Annoucement extends React.Component
{
    render()
    {
        return <div className="d-flex flex-column my-2">
            <div className="d-flex">
                <div className="d-flex align-items-center flex-shrink-0">
                    <img src={this.props.authorImg} className="avatar m-2"/>
                    <b>{this.props.author}</b>
                </div>
                <div className="d-flex flex-grow-1 align-items-center justify-content-end me-3">
                    <b>{new Date(this.props.timestamp).toLocaleDateString()}</b>
                </div>
            </div>
            <div className="d-flex ms-5 text-start flex-column">
                <div className="d-flex flex-grow-1">
                    {this.props.children}
                </div>
                {this.props.embeds.length > 0 && <ul  style={{listStyle: "none"}}>
                    {this.props.embeds.map((embed, index) => <li key={embed+index}>
                        <div className="card bg-secondary mt-2 border-warning border-0 border-5 border-start w-50">
                            <div className="card-body">
                                <h5 className="card-title">{embed.title}</h5>
                                <p className="card-text">{embed.description}</p>
                                <img src={embed.thumbnail?.url} className="card-img-bottom"/>
                            </div>
                        </div>
                    </li>)}
                </ul>}
            </div>
        </div>;
    }
}