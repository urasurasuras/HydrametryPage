import React from "react";
import "./DiscordWidget.css";
import {Annoucement} from "./Announcement";
import {Container} from "react-bootstrap";
import {
    DiscordAttachment,
    DiscordEmbed,
    DiscordEmbedDescription, DiscordEmbedFooter,
    DiscordMessage,
    DiscordMessages
} from "@skyra/discord-components-react";

export class DiscordWidget extends React.Component
{
    render()
    {
        return <div className="mx-auto mt-5">
            <h3 className="text-start">Announcement Feed</h3>
            <div className="d-flex flex-column text-wrap" style={{height: "40rem", overflowY: "scroll"}}>
                <DiscordMessages className="text-start">
                        {this.props.messages.map(x => <DiscordMessage key={x.id} author={x.author.username} avatar={this.getAvatarUri(x.author.id, x.author.avatar)} timestamp={new Date(x.timestamp)}>
                            {x.content}
                            {
                                x.embeds.map((embed, index) => <DiscordEmbed key={x.id + index} slot="embeds" url={embed.url}  provider={embed.provider?.name} embedTitle={embed.title} image={embed.image?.url ?? embed.thumbnail?.url  }
                                                                             color={'#' + embed.color} video={embed.video} authorImage={embed.author?.icon_url}
                                                                             authorName={embed.author?.name} authorUrl={embed.author?.url} className="embed-responsive">
                                    <DiscordEmbedDescription slot="description">
                                        {embed.description}
                                    </DiscordEmbedDescription>
                                    {embed.footer != null && <DiscordEmbedFooter slot="footer" footerImage={embed.footer?.icon_url}>{embed.footer?.text}</DiscordEmbedFooter>}
                                </DiscordEmbed>)
                            }
                        </DiscordMessage>)}
                </DiscordMessages>
            </div>
        </div>;
    }

    getAvatarUri(userId, avatarId)
    {
        return `https://cdn.discordapp.com/avatars/${userId}/${avatarId}.png`;
    }
}