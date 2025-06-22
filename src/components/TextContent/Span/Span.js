import styled from "styled-components"

const DefaultSpan = styled.span`
	font-family: var(--default-label-font);
	font-size: var(--default-font-size);
	color: ${({ color }) => color || 'var(--default-font-color)'}; 
`

const RoundedBg = styled.div`
    background-color: ${({ bgcolor }) => bgcolor || '#d9d9d9'}; 
    padding: 10px 18px;
    border-radius: 60px;;
    white-space: nowrap;
    text-align: ${({ alignment }) => alignment || 'left'};
`


export function Span({ children, color, bgcolor, alignment }) {




    return (
                
                <>
            {
                !!bgcolor ? 
                    <RoundedBg bgcolor={bgcolor} alignment={alignment}>
                        <DefaultSpan color={color}>{children}</DefaultSpan>
                    </RoundedBg> 
                : 
                    <DefaultSpan color={color}>{children}</DefaultSpan>
            }
                </>
    )
}