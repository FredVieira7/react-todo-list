import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps)=>(
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 12px;
    margin-bottom: 15px;
    align-items: center;
    
    input {
        all: unset;
        border: 1px solid black;
        width: 25px;
        height: 25px;
        margin-right: 10px;
        display: inline-block;
    }

    input:not(:checked) {
        background-color: red;
        color: white;
    }

    input:checked {
        background-color: green;
    }
    
    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`
));