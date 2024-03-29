import styled from "@emotion/styled";

export const Container = styled.div`



`

export const ContainerCalendar = styled.div`

h2{
    text-align: center;
}
.calendar {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        margin: auto;
        gap: 5px;
        max-width: 300px;

    }
    .day {
        border: 1px solid #ccc;
        padding: 5px;
        text-align: center;
        cursor: pointer;
    }
    .selected {
        background-color: lightblue;
    }
    .disabled{
        background-color: #ccc;
    }

`

export const ContainerInputs = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;

input{
    margin: 10px;
    text-align: center;
}

p{
    margin: auto;
}
h1{
    margin: auto;
}

`