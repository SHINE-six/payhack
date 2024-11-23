import React from 'react';
import { ContributionCalendar } from "react-contribution-calendar";

const UsageHeatmapPage = () => {
    const randomData = () => {
        const data = [];
        for (let i = 0; i < 100; i++) {
            const randomDate = new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28));
            const randomValue = Math.floor(Math.random() * 4); // 1-4
            data.push({ [randomDate.toISOString().split('T')[0]]: { level: randomValue } });
        }
        return data;
    }

    console.log(randomData());

    return (
        <div>
            <ContributionCalendar
                data={randomData()}
                start="2024-01-01"
                end="2024-12-31"
                daysOfTheWeek={["", "Mon", "", "Wed", "", "Fri", ""]}
                textColor="#000"
                includeBoundary={true}
                startsOnSunday={true}
                cx={16}
                cy={17}
                cr={4}
                theme="grass"
                style={{}}
            />
        </div>
    )
}

export default UsageHeatmapPage;