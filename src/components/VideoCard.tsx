const VideoCard = (
    {
        title
        , channelName
        , viewCount
        , uploadedAt
    }:
        {
            title: string
            , channelName: string
            , viewCount: number
            , uploadedAt: string
        }
) => {
    return (
        <div>
            {/* 썸네일 */}
            <div>
                <img style={{ width: "100%" }} src="https://i.ytimg.com/vi/4VjTKbTcm90/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLAMo9kYQQtke7adxcJUZtJMCxo-vg" />
            </div>
            {/* 카드 */}
            <div style={{ display: "flex" }}>
                <div style={{ width: "36px" }}>
                    <img style={{ width: "100%", borderRadius: "50%" }} src="https://yt3.ggpht.com/by9Fh1prHd_mmc52XM3nscTy2U7qssX0D3sE4w2e6OQAIlEz3wE3MRFImIk9L-xoWtSSYmgkQg=s68-c-k-c0x00ffffff-no-rj"></img>
                </div>
                <div>
                    <div><span>{title}</span></div>
                    <div><span>{channelName}</span></div>
                    <div>
                        <span>{viewCount}</span>
                        <span>•</span>
                        <span>{uploadedAt}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard