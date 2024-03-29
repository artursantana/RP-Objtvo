import styled from "@emotion/styled";

export const Container = styled.div`

.calendar {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
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


`