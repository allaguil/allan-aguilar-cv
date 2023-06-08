import { FC } from "react"

interface Props {
    navState: string,
}

export const WorkPanel: FC<Props> = ({ navState }) => {

    console.log({navState})

    return (
        <>
         { (navState === '/work') && (
            <>
                <h3>WORK PANEL</h3>
                <hr />
            </>
         )}
        </>
    )
}
