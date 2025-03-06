interface iconProps{
    className?: string
}

declare module 'react-icons/gr' {
    export function GrTask({className} : iconProps): JSX.Element;
    export function GrInProgress({className} : iconProps): JSX.Element;
}
declare module 'react-icons/md' {
    export function MdAddTask({className} : iconProps): JSX.Element;
    export function MdOutlineListAlt({className} : iconProps): JSX.Element;
    export function MdOutlineTaskAlt({className} : iconProps): JSX.Element;
    export function MdClose({className} : iconProps): JSX.Element;
    export function MdEdit({className} : iconProps): JSX.Element;
}
declare module 'react-icons/io5' {
    export function IoClose({className} : iconProps): JSX.Element;
    export function IoFilterSharp({className} : iconProps): JSX.Element;
}