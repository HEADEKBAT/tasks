interface IContainer {
    id: number;
    title: string;
    children: IContainerExt[]
}

interface IContainerExt extends Omit<IContainer, 'children'> {
    active?: boolean;
    children: IContainerExt[];
}


// ответ

interface IContainerExt {
    id: number;
    title: string;
    active?: boolean;
    children: IContainerExt[];
}