import sys;
import asyncio
from pynput.keyboard import Controller, KeyCode;
from winrt.windows.media.control import \
    GlobalSystemMediaTransportControlsSessionManager as MediaManager

async def get_media_session():
    sessions = await MediaManager.request_async()
    current_session = sessions.get_current_session()

    return current_session

async def get_media_info(session):
    info = await session.try_get_media_properties_async()

    return info

def main():

    session = asyncio.run(get_media_session())
    keyboard = Controller()

    if sys.argv[2] in ['play', 'pause', 'next', 'previous']:
        if session:
            info = asyncio.run(get_media_info(session))
            title = info.__getattribute__('title')
            artist = info.__getattribute__('artist')
            status = session.get_playback_info().playback_status
            if sys.argv[2] == 'play' and status != 4:
                print("Started: ->", title if title != "" else "Unknown", "<- by ->", artist if artist != "" else "Unknown", "<-")
                session.try_play_async()
            elif sys.argv[2] == 'pause' and status != 5:
                print("Paused: ->", title if title != "" else "Unknown", "<- by ->", artist if artist != "" else "Unknown", "<-")
                session.try_pause_async()
            elif sys.argv[2] == 'next':
                print("Skipping: ->", title if title != "" else "Unknown", "<- by ->", artist if artist != "" else "Unknown", "<-")
                session.try_skip_next_async()
            elif sys.argv[2] == 'previous':
                print("Going back.")
                session.try_skip_previous_async()
        else: 
            print(int(sys.argv[1]))
            keyboard.tap(KeyCode.from_vk(int(sys.argv[1])))
    else:
        print(int(sys.argv[1]))
        keyboard.tap(KeyCode.from_vk(int(sys.argv[1])))

if __name__ == "__main__":
    main()