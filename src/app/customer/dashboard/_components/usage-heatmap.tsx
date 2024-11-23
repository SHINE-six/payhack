import React from "react";
import { ContributionCalendar } from "react-contribution-calendar";

const UsageHeatmapPage = () => {
  const randomData = () => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      const randomDate = new Date(
        2024,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28)
      );
      const randomValue = Math.floor(Math.random() * 4); // 1-4
      data.push({
        [randomDate.toISOString().split("T")[0]]: { level: randomValue },
      });
    }
    return data;
  };

  console.log(randomData());

  return (
    <div className="max-w-4xl">
      <ContributionCalendar
        data={randomData()}
        start="2024-01-01"
        end="2024-12-31"
        daysOfTheWeek={["", "Mon", "", "Wed", "", "Fri", ""]}
        textColor="#000"
        includeBoundary={true}
        startsOnSunday={true}
        cx={18}
        cy={18}
        cr={2}
        theme={{
          level0: "#ebedf0",
          level1: "#88ADEA",
          level2: "#58AAE6",
          level3: "#239BD3",
          level4: "#0F5298",
        }}
        style={{}}
      />
    </div>
  );
};

export default UsageHeatmapPage;
