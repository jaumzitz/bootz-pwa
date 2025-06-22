
import { HorizontalScroll } from "../Scrolls/Scroll"
import { Chip } from "../Chip/Chip"

export default function TrailCategoryChips({ options }) {

    const chips = options
        .map(option => ({
            id: option['id'],
            label: option['description'],
            customiOSEmoji: option['icon_path'],
            customAndroidEmoji: option['icon_path']
        }))
        .filter(option => option['id'] !== 'enviroment')
        



    return (
        <>
            <HorizontalScroll>
                {
                    chips
                        .map(
                            category => <Chip key={category['id']} chip={category} showIcon={true}/>
                        )
                }

                {/* <Chip key="1" chip={{ label: 'Fácil acesso', customiOSEmoji: '/assets/icons/trail-access-icon-small.svg', customAndroidEmoji: '/assets/icons/trail-access-icon-small.svg' }} showIcon={true}></Chip>
                <Chip key="2" chip={{ label: 'Bem sinalizado', customiOSEmoji: '/assets/icons/trail-sign-icon-small.svg', customAndroidEmoji: '/assets/icons/trail-sign-icon-small.svg' }} showIcon={true}></Chip>
                <Chip key="3" chip={{ label: 'Pouco esforço físico', customiOSEmoji: '/assets/icons/trail-intensity-icon-small.svg', customAndroidEmoji: '/assets/icons/trail-intensity-icon-small.svg' }} showIcon={true}></Chip> */}

            </HorizontalScroll>
        </>
    )
}