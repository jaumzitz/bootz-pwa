
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
                            category => <Chip key={category['id']} chip={category} showIcon={true} readOnly={true}/>
                        )
                }

          
            </HorizontalScroll>
        </>
    )
}