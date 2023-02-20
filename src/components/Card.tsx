import React, {FC} from 'react'
import { PropsWithChildren } from 'react';

interface CardProps {
    width?: string;
    height?: string;
}

const Card: FC<PropsWithChildren<CardProps>> =
    ({
        width, height, children
    }) => {
        return (
            <div style={{ width, height, border: '1px solid gray' }}>
                {children}
            </div>
        )
    }

export default Card