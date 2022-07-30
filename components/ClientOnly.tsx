import React, { FC,  useEffect, useState } from 'react';


//https://www.carlrippon.com/react-children-with-typescript/
//https://blog.logrocket.com/using-react-children-prop-typescript/
//https://stackoverflow.com/questions/53688899/typescript-and-react-children-type ....or childre: Reach:ReactNode ?
type Props = {
    children?: React.ReactNode | JSX.Element,
}

//got children as implicity any typescript error
export default function({ children, ...delegated }: Props) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return <div {...delegated}>{children}</div>

}