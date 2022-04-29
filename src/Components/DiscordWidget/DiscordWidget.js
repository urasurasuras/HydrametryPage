import React from "react";

export class DiscordWidget extends React.Component
{
    render()
    {
        return <iframe className="d-flex mx-auto mt-3" src="https://discord.com/widget?id=207577443102359554&theme=dark" width={this.props.width} height={this.props.height}
               allowTransparency="true"
               sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>;
    }
}