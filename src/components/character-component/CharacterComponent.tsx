import type {ICharacter} from "../../models/ICharacter.ts";
import type {ReactNode} from "react";

interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className="my-5 border-2">
            <h3 className='text-2xl'>{item.name} {item.surname}</h3>
            <p>{children}</p>
        </div>
    );
};