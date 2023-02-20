import React, { FC, useState } from 'react'
import { PropsWithChildren } from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
}

const Card: FC<PropsWithChildren<CardProps>> =
    ({
        width, height, variant, children,
    }) => {
        const [state, setState] = useState(0)
        return (
            <div style={{
                width, height, border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
                background: variant === CardVariant.primary ? 'lightgray' : ''
            }}>
                {children}
            </div>
        )
    }

export default Card