import React, { useState, useRef } from 'react'

const EventsExample = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value);
    }

    const clickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (evt: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }

    const dragWithPreventHandler = (evt: React.DragEvent<HTMLElement>) => {
        evt.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (evt: React.DragEvent<HTMLElement>) => {
        evt.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (evt: React.DragEvent<HTMLElement>) => {
        evt.preventDefault()
        setIsDrag(false)
        console.log('drop')
    }

    return (
        <div>
            <input
                value={value}
                type="text"
                onChange={changeHandler}
                placeholder="Управляемый"
            />
            <input
                ref={inputRef}
                type="text"
                placeholder="Неуправляемый"
            />
            <button onClick={clickHandler}>Click</button>
            <div onDrag={dragHandler} draggable style={{ width: '200px', height: '200px', background: 'gold' }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{ width: '200px', height: '200px', background: isDrag ? 'gold' : 'red', marginTop: '20px' }}></div>
        </div>
    )
}

export default EventsExample