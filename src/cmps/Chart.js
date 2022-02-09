import React from 'react';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const [green, red] = ['#258750','#b83a52'];

export const UsersChart = ({ users }) => {
    console.log('UserChart Mount');

    const [names,setNames] = useState();
    const [hours, setHours] = useState();
    const [colors, setColors] = useState();

    const getNames = () => {
        const currNames = [];
        const usersHours = [];
        const activeColors = [];

        users.map((usr) => {
            activeColors.push(usr.status === 'Active' ?  green: red);
            currNames.push(usr.userName);
            usersHours.push(usr.hours);
        });

        setNames(currNames);
        setHours(usersHours);
        setColors(activeColors);
    }

    useEffect(() => getNames(), []);

    const data = {
        labels: names,
        datasets: [
            {
                label: '',
                data: hours,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 2,
            },
        ],
    };
    const options = {
        type:'horizontal',
        maintainAspectRatio: false,
        indexAxis: 'y',
        elements: { bar: { borderWidth: 2} },
        responsive: true,
        plugins: { 
            legend: { display: false },
            title: { display: true, text: 'Annual Hours' },
        },
    };
    return names ? <Bar data={data} options={options} /> : <React.Fragment></React.Fragment>
}