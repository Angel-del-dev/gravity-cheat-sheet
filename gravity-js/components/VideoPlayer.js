import { formatCode } from "./FormatCode.js";

export function videoPlayer()
{
    return {
        body: (`
            <div>
                <div id="videoPlayer" class="secondary-title"><span style="color:red;">(Experimental feature)</span> Advanced video player component example</div>
                <b>Read the instructions carefully on how the video player works:<br /> <a href="https://github.com/Angel-del-dev/vanilla-videoViewer#simple-html-css-javascript-video-player" target="_blank">Instructions</a></b>
                ${formatCode(`
                // Importing the component
                import { videoPlayer } from "../builtInComponents/advancedVideoPlayer.js";
                import { routeToAssets } from "../config/gravity.js"

                export class PlayVideo {
                    // Creating the required values for the component
                    createEverything() {
                        return {
                            video : this.createVideoObj(),
                            style: this.createStyleObj(),
                        };
                    }

                    createVideoObj() {
                        return {
                            videoRoute: routeToAssets('video/example.mp4'),
                            captionsRoute: routeToAssets('assets/subtitles.vtt'),
                            langCaptions: 'en',
                            // In case of captionsExist being 'false', the 
                            // other keys don't have to be created
                            captionsExist: true,
                        };
                    }

                    createStyleObj() {
                        return {
                            isDefault: true,
                            // When 'isDefault' is set to true, the default styles will be displayed
                            // If its set to false, we must provide it with the path of the custom css
                            stylesRoute: false
                        }
                    }

                    createIconsObj() {

                    }

                    load() {
                        const { video, style } = this.createEverything();
                        const videoPlayerObj = videoPlayer(video, style);
                        return {
                            body: (\`
                                \${videoPlayerObj.body}
                            \`),
                            events: [
                                // The events MUST be added as the player won't work
                                // More information about the events in:
                                // https://github.com/Angel-del-dev/vanilla-videoViewer#using-the-video-player
                                ...videoPlayerObj.events
                            ]
                        }
                    }
                }
                `)}
            </div>
        `),
    }
}